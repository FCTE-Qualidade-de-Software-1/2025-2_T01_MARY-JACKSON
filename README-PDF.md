# 📄 Gerando PDF do Documento Consolidado

O arquivo **`docs-consolidado.md`** contém todas as 4 fases do projeto QSW - Mary Jackson consolidadas em um único documento.

## 🚀 Métodos para Gerar o PDF

### Método 1: Script Automatizado (Node.js) ⚡

1. Instale as dependências (se ainda não instalou):
   ```bash
   npm install
   ```

2. Execute o script:
   ```bash
   npm run generate-pdf
   ```

   Ou diretamente:
   ```bash
   node generate-pdf.js
   ```

   O PDF será gerado como: **`QSW-Mary-Jackson-Todas-as-Fases.pdf`**

### Método 2: Pandoc 📝

Se você tem Pandoc instalado:

```bash
pandoc docs-consolidado.md -o QSW-Mary-Jackson-Todas-as-Fases.pdf -V geometry:margin=1in
```

### Método 3: VS Code com Extensão 📦

1. Instale a extensão **"Markdown PDF"** no VS Code
2. Abra `docs-consolidado.md`
3. Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac)
4. Digite: `Markdown PDF: Export (pdf)`
5. Pressione Enter

### Método 4: Ferramentas Online 🌐

1. **Dillinger.io:**
   - Acesse: https://dillinger.io/
   - Cole o conteúdo de `docs-consolidado.md`
   - Clique no menu ☰ (três linhas) → Export → PDF

2. **Markdown to PDF:**
   - Acesse: https://www.markdowntopdf.com/
   - Faça upload de `docs-consolidado.md`
   - Baixe o PDF gerado

### Método 5: Chrome/Edge (Imprimir como PDF) 🖨️

1. Converta o Markdown para HTML primeiro:
   - Use https://dillinger.io/ para visualizar em HTML
   - Ou use um conversor online

2. Abra o HTML no navegador

3. Pressione `Ctrl+P` (ou `Cmd+P` no Mac)

4. Selecione "Salvar como PDF" como destino

5. Clique em "Salvar"

---

## ✅ Status

- ✅ Documento consolidado criado: `docs-consolidado.md`
- ✅ Script de geração criado: `generate-pdf.js`
- ⏳ PDF final: Aguardando geração

---

**Dica:** O método mais rápido é usar o VS Code com a extensão Markdown PDF ou uma ferramenta online como Dillinger.io.
