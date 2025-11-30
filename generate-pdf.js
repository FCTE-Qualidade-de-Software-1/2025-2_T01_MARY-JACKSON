import { readFile, writeFile, unlink } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { mdToPdf } from 'md-to-pdf';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOCS_DIR = join(__dirname, 'docs', 'src', 'content', 'docs');
const FASES_DIR = join(DOCS_DIR, 'fases');
const SOBRE_FILE = join(DOCS_DIR, 'home', 'sobre.md');

// Lista de fases em ordem
const FASES = [
  { file: 'fase-1.md', title: 'Fase 1 - Estabelecimento dos Requisitos de Avaliação' },
  { file: 'fase-2.md', title: 'Fase 2 - Especificação da Avaliação' },
  { file: 'fase-3.md', title: 'Fase 3 - Projeto da Avaliação' },
  { file: 'fase-4.md', title: 'Fase 4 - Execução da Avaliação' },
];

// Função para remover frontmatter do markdown
function removeFrontmatter(content) {
  const lines = content.split('\n');
  let startIdx = 0;
  let endIdx = -1;
  
  // Encontrar início do frontmatter
  if (lines[0] && lines[0].trim() === '---') {
    startIdx = 1;
    // Encontrar fim do frontmatter
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '---') {
        endIdx = i;
        break;
      }
    }
  }
  
  if (endIdx > 0) {
    return lines.slice(endIdx + 1).join('\n').trim();
  }
  
  return content.trim();
}

// Função para processar links de imagens
function processImageLinks(content, baseDir) {
  // Converter links absolutos para relativos ou manter como estão
  // Substituir caminhos absolutos do site por caminhos locais se necessário
  return content
    .replace(/src="\/2025-2_T01_MARY-JACKSON\/images\//g, 'src="images/')
    .replace(/src="\.\.\/assets\//g, 'src="assets/');
}

async function readMarkdownFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf-8');
    return removeFrontmatter(content);
  } catch (error) {
    console.error(`Erro ao ler arquivo ${filePath}:`, error.message);
    return null;
  }
}

async function generateConsolidatedDocument() {
  console.log('📄 Consolidando todas as fases...\n');
  
  let consolidatedContent = `# QSW - Mary Jackson
## Análise de Qualidade do Software Pontua

*Documento consolidado contendo todas as fases do projeto de avaliação de qualidade do software Pontua.*

---

`;

  // Adicionar página sobre o projeto
  console.log('  ✓ Lendo página "Sobre o Projeto"...');
  const sobreContent = await readMarkdownFile(SOBRE_FILE);
  if (sobreContent) {
    consolidatedContent += `## Sobre o Projeto\n\n${sobreContent}\n\n---\n\n`;
  }

  // Adicionar todas as fases
  for (const fase of FASES) {
    const filePath = join(FASES_DIR, fase.file);
    console.log(`  ✓ Lendo ${fase.title}...`);
    
    const content = await readMarkdownFile(filePath);
    if (content) {
      // Processar links de imagens
      const processedContent = processImageLinks(content, FASES_DIR);
      consolidatedContent += `\n\n# ${fase.title}\n\n${processedContent}\n\n---\n\n`;
    }
  }

  // Salvar documento consolidado
  const outputPath = join(__dirname, 'docs-consolidado.md');
  await writeFile(outputPath, consolidatedContent, 'utf-8');
  console.log(`\n✅ Documento consolidado criado: ${outputPath}\n`);
  
  return outputPath;
}

async function generatePDF(markdownPath) {
  console.log('📑 Gerando PDF...\n');
  
  const cssContent = `@page {
  margin: 20mm 15mm;
}
body {
  font-family: 'Times New Roman', serif;
  line-height: 1.6;
  font-size: 11pt;
}
h1 {
  font-size: 18pt;
  margin-top: 20pt;
  margin-bottom: 10pt;
  page-break-after: avoid;
}
h2 {
  font-size: 14pt;
  margin-top: 16pt;
  margin-bottom: 8pt;
  page-break-after: avoid;
}
h3 {
  font-size: 12pt;
  margin-top: 12pt;
  margin-bottom: 6pt;
  page-break-after: avoid;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin: 10pt 0;
  page-break-inside: avoid;
}
table th, table td {
  border: 1px solid #ddd;
  padding: 8pt;
  text-align: left;
}
table th {
  background-color: #f2f2f2;
  font-weight: bold;
}
img {
  max-width: 100%;
  height: auto;
  page-break-inside: avoid;
}
code {
  background-color: #f4f4f4;
  padding: 2pt 4pt;
  border-radius: 3pt;
  font-family: 'Courier New', monospace;
  font-size: 10pt;
}
pre {
  background-color: #f4f4f4;
  padding: 10pt;
  border-radius: 5pt;
  overflow-x: auto;
  page-break-inside: avoid;
}
blockquote {
  border-left: 4pt solid #ddd;
  padding-left: 10pt;
  margin: 10pt 0;
  color: #666;
}
p {
  margin: 8pt 0;
  text-align: justify;
}
ul, ol {
  margin: 8pt 0;
  padding-left: 20pt;
}
li {
  margin: 4pt 0;
}`;

  const cssPath = join(__dirname, 'temp-styles.css');
  let cssFileCreated = false;

  try {
    // Criar arquivo CSS temporário
    await writeFile(cssPath, cssContent, 'utf-8');
    cssFileCreated = true;
    console.log('  ✓ Arquivo CSS temporário criado\n');

    const pdf = await mdToPdf(
      { path: markdownPath },
      {
        pdf_options: {
          format: 'A4',
          margin: {
            top: '20mm',
            right: '15mm',
            bottom: '20mm',
            left: '15mm',
          },
          printBackground: true,
        },
        stylesheet: cssPath,
      }
    );

    // Limpar arquivo CSS temporário
    if (cssFileCreated) {
      try {
        await unlink(cssPath);
      } catch (unlinkError) {
        console.warn('⚠ Aviso: Não foi possível remover arquivo CSS temporário:', unlinkError.message);
      }
    }

    if (pdf) {
      const pdfPath = join(__dirname, 'QSW-Mary-Jackson-Todas-as-Fases.pdf');
      await writeFile(pdfPath, pdf.content);
      console.log(`✅ PDF gerado com sucesso: ${pdfPath}\n`);
      return pdfPath;
    } else {
      throw new Error('Falha ao gerar PDF');
    }
  } catch (error) {
    // Limpar arquivo CSS temporário em caso de erro
    if (cssFileCreated) {
      try {
        await unlink(cssPath);
      } catch (unlinkError) {
        // Ignorar erro ao limpar
      }
    }
    console.error('❌ Erro ao gerar PDF:', error.message);
    throw error;
  }
}

// Executar
(async () => {
  try {
    const markdownPath = await generateConsolidatedDocument();
    await generatePDF(markdownPath);
    console.log('✨ Processo concluído!\n');
  } catch (error) {
    console.error('❌ Erro no processo:', error);
    process.exit(1);
  }
})();
