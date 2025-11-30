# Instruções para Gerar PDF do Documento Consolidado

O arquivo `docs-consolidado.md` contém todas as fases do projeto consolidadas em um único documento.

## Opções para Converter Markdown para PDF:

### Opção 1: Usando Pandoc (Recomendado)
Se você tiver Pandoc instalado:

```bash
pandoc docs-consolidado.md -o QSW-Mary-Jackson-Todas-as-Fases.pdf --pdf-engine=wkhtmltopdf
```

Ou se tiver LaTeX instalado:
```bash
pandoc docs-consolidado.md -o QSW-Mary-Jackson-Todas-as-Fases.pdf
```

### Opção 2: Usando Ferramentas Online
1. Acesse https://www.markdowntopdf.com/ ou https://dillinger.io/
2. Abra o arquivo `docs-consolidado.md`
3. Clique em "Export as PDF"

### Opção 3: Usando VS Code
1. Instale a extensão "Markdown PDF" no VS Code
2. Abra o arquivo `docs-consolidado.md`
3. Pressione `Ctrl+Shift+P` e digite "Markdown PDF: Export (pdf)"
4. Selecione a opção e o PDF será gerado

### Opção 4: Usando Node.js (Script Automatizado)
Execute os comandos:
```bash
npm install
node generate-pdf.js
```

O PDF será gerado como `QSW-Mary-Jackson-Todas-as-Fases.pdf`

### Opção 5: Usando Google Docs
1. Abra Google Docs
2. Use a extensão "Docs to Markdown" para importar
3. Ou copie e cole o conteúdo
4. Vá em Arquivo > Fazer download > PDF

### Opção 6: Usando Chrome/Browser
1. Converta o markdown para HTML primeiro (use https://dillinger.io/)
2. Abra o HTML no navegador
3. Pressione `Ctrl+P` (Windows) ou `Cmd+P` (Mac)
4. Escolha "Salvar como PDF" como destino

---

**Nota:** O documento consolidado já está pronto em `docs-consolidado.md`. Você só precisa convertê-lo para PDF usando uma das opções acima.
