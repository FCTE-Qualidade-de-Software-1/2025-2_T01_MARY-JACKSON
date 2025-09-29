---
title: Fase 1 - Estabelecimento dos Requisitos de Avaliação
description: Relatório Fase 1 - Estabelecimento dos requisitos de avaliação do software Pontua segundo ISO/IEC 25040:2009 e ISO/IEC 25010:2011
---

<div style="text-align: center; margin-bottom: 2rem;">
  <img src="../../assets/V3_C3.png" alt="Logo do Software Pontua" style="max-width: 150px; height: auto;" />
</div>

# 📊 Análise de Qualidade do Software Pontua
**Disciplina:** FGA315 – Qualidade de Software 1  
**Professora:** Cristiane Soares Ramos  
**Entrega:** EU1 – Fase 1 (até 01/10/2025)  

---

## 1. Propósito da Avaliação e Uso Pretendido
O presente relatório tem como propósito avaliar a qualidade do **Pontua**, software educacional desenvolvido pela **Crianex**, que implementa a metodologia **PBL (Problem-Based Learning)** para cursos de Medicina e áreas afins.  

A avaliação foi conduzida **com base na ISO/IEC 25040:2009 (processo de avaliação de qualidade)** em conjunto com a **ISO/IEC 25010:2011 (modelo de qualidade de software)**.  

O uso pretendido dos resultados é:  
- Apoiar **decisões de adoção institucional** em diferentes universidades.  
- Fornecer subsídios para **priorização de melhorias técnicas** pela equipe de desenvolvimento.  
- Demonstrar o alinhamento do software com **padrões internacionais de qualidade**.  
- Contribuir para a **melhoria contínua da experiência do usuário**, tanto para professores quanto para estudantes.  

---

## 2. Requisitante e Partes Interessadas
- **Requisitante Principal:** **Crianex**, empresa desenvolvedora do software Pontua.  
- **Partes Interessadas (Stakeholders):**  
  - **Alunos:** Demandam clareza, transparência e feedback rápido em avaliações.  
  - **Professores:** Necessitam de eficiência na gestão de notas, relatórios de turmas e facilidade no lançamento de atividades.  
  - **Coordenadores:** Buscam padronização institucional e dashboards que apoiem decisões acadêmicas.  
  - **Equipe Crianex (Desenvolvedora):** Requer feedback estruturado para melhorar a confiabilidade, escalabilidade e portabilidade do software.  
  - **Instituições de Ensino:** Pretendem reduzir custos administrativos, padronizar processos avaliativos e garantir conformidade legal (LGPD).  

---
## 3. Tipo de Produto e Descrição Estruturada
O Pontua é um **software como serviço (SaaS)**, acessível via navegador e responsivo em dispositivos móveis. Sua proposta é centralizar avaliações acadêmicas e simplificar a adoção da metodologia **PBL** em contextos universitários.  

### Descrição Estruturada
- **Natureza do Produto:** Plataforma web educacional em nuvem.  
- **Interfaces Principais:** Área do aluno, área do professor, dashboards administrativos.  
- **Dependências Externas:** Autenticação via provedores (Google), banco de dados em nuvem, conformidade LGPD.  
- **Serviços Oferecidos:** Gestão de turmas, avaliações entre pares, relatórios de desempenho, indicadores de presença e feedback contínuo.  

### Tecnologias Utilizadas
- **Frontend:** Desenvolvido em **Svelte**, priorizando performance e experiência do usuário.  
- **Backend:** Implementado em **Node.js** com **Typescript** e **Express.js**, garantindo escalabilidade e robustez na lógica de negócio.  
- **Banco de Dados:** Utilização do **Supabase** como solução de banco de dados relacional e autenticação integrada, oferecendo flexibilidade e segurança no armazenamento de dados.  

---

## 4. Modelo de Qualidade
A avaliação foi guiada pela **ISO/IEC 25010:2011**, utilizada em conjunto com a **ISO/IEC 25040:2009** para estruturar o processo avaliativo.  

### Características Selecionadas
- **Adequação Funcional (Functional Suitability)**  
  - **Subcaracterística: Completude Funcional**  
  Verifica se o Pontua cobre integralmente as funções necessárias para a condução do PBL, sem lacunas que comprometam o processo educacional.  

- **Portabilidade (Portability)**  
  - **Subcaracterística: Substituibilidade**  
  Avalia a capacidade do Pontua de substituir sistemas anteriores (ex.: planilhas ou softwares distintos), sem grandes impactos ou custos para a instituição.  

---

## 5. Seleção e Priorização de Características
A seleção foi feita com base em três critérios: **impacto para os usuários finais, risco associado à não conformidade e relevância estratégica para a instituição**.  

- **Adequação Funcional / Completude Funcional** → alta prioridade por afetar diretamente o aprendizado dos estudantes e a rotina dos professores.  
- **Portabilidade / Substituibilidade** → prioridade estratégica por influenciar a decisão de adoção em larga escala por outras instituições.  

---
## 6. Escopo, Profundidade e Objetos da Avaliação
- **Escopo Atual:** Avaliação da versão do Pontua utilizada no curso de Medicina da UniRV.  
- **Profundidade:**  
  - *Completude Funcional* → será analisada a cobertura do ciclo avaliativo PBL.  
  - *Substituibilidade* → será analisada a facilidade de transição do uso de planilhas para o Pontua.  

### Objetos de Avaliação (Áreas do Software)
De acordo com o **mapa de navegação do Pontua**, as áreas e fluxos de uso analisados serão:  

#### 🔹 Aluno
- **Login e Autenticação**  
  - Criação de conta  
  - Tratamento de erros de login  

- **Gestão de Perfil**  
  - Visualização e edição de dados pessoais  

- **Turmas e Problemas**  
  - Acesso às turmas cadastradas  
  - Acompanhamento dos problemas propostos  
  - **Visualização das notas em cada problema**  
  - **Visualização de notas em atividades de mapa mental**  

- **Avaliação**  
  - Dar notas em atividades e problemas PBL  
  - Visualizar notas recebidas e feedbacks  
  - **Visualização dos critérios de avaliação** (o que avaliar nos colegas e em si mesmo, assegurando clareza no processo avaliativo)  

---

#### 🔹 Professor
- **Login e Autenticação**  
  - Criação de conta  
  - Tratamento de erros de login  

- **Gestão de Turmas**  
  - Abrir novas turmas  
  - Gerir turmas existentes  
  - **Adição de alunos** às turmas  
  - **Remoção de alunos** das turmas  

- **Gestão de Problemas**  
  - Abrir problemas  
  - Gerir problemas existentes  
  - **Editar datas de abertura e fechamento dos problemas**  
  - Definir e ajustar critérios de avaliação  

- **Avaliação**  
  - Atribuição de notas em atividades  
  - Visualização das notas aplicadas  
  - **Visualização de relatórios de avaliação detalhados**, incluindo:  
    - Quem avaliou quem  
    - Qual nota foi atribuída  
    - Transparência e rastreabilidade do processo avaliativo  

- **Relatórios e Desempenho**  
  - Relatórios de desempenho das turmas  
  - Exportação de relatórios administrativos em diferentes formatos (ex.: planilhas, PDFs)  
  - Relatórios de comparação entre alunos e turmas  

- **Gestão de Perfil**  
  - Visualização e edição de dados pessoais  

---

### Fora de Escopo
- Questões de desempenho em larga escala.  
- Internacionalização e suporte multilíngue.  
- Funcionalidades ainda em prototipagem.  

### Stringência da Avaliação
O nível de rigor adotado será **moderado**, adequado para um sistema de apoio educacional institucional, com impacto relevante para a rotina acadêmica mas não de missão crítica.  

### Critérios Preliminares de Decisão
Os resultados serão julgados com base em:  
- Cobertura funcional em relação às necessidades do PBL.  
- Grau de esforço na substituição de métodos anteriores.  
Esses critérios serão detalhados e quantificados na **Fase 2 – Especificação da Avaliação**.  

---

## 7. ODS Relacionados
O Pontua se conecta com diferentes **Objetivos de Desenvolvimento Sustentável (ODS)**:  
- **ODS 4 – Educação de Qualidade** → promove avaliações transparentes e aprendizado equitativo.  
- **ODS 9 – Indústria, Inovação e Infraestrutura** → representa inovação tecnológica no setor educacional.  
- **ODS 10 – Redução das Desigualdades** → padroniza critérios avaliativos, diminuindo disparidades.  
- **ODS 16 – Paz, Justiça e Instituições Eficazes** → fortalece a confiança institucional por meio da transparência nos processos.  

---

## 8. Organização do Relatório e Documentação
O relatório seguirá a sequência definida pela **ISO/IEC 25040:2009**:  
1. **Fase 1:** Estabelecimento dos requisitos de avaliação (documento atual).  
2. **Fase 2:** Especificação da avaliação (métricas e critérios).  
3. **Fase 3:** Projeto da avaliação (plano e cronograma).  
4. **Fase 4:** Execução da avaliação (coleta de dados e análise).  
5. **Fase 5:** Conclusão e recomendações finais.  

Toda a documentação seguirá o formato sugerido pela 25040, garantindo **rastreabilidade** entre requisitos, métricas, resultados e decisões.  

---

## 9. Uso de IA
O desenvolvimento deste relatório contou com o apoio de múltiplas ferramentas de Inteligência Artificial, utilizadas de forma complementar e supervisionada:

### Ferramentas de IA Utilizadas:

**🤖 ChatGPT (OpenAI)**
- Estruturação inicial de critérios e seções do relatório
- Melhoria da clareza textual e fluidez da linguagem
- Auxílio na adequação aos requisitos das normas ISO/IEC 25040:2009 e ISO/IEC 25010:2011
- Geração de conteúdo técnico preliminar

**🖱️ Cursor (AI IDE Assistant)**
- Edição avançada e refactoring de código da documentação
- Sugestões contextuais durante a escrita
- Verificação de consistência e formatação
- Otimização da estrutura do documento

**🧠 Claude-4 (Anthropic)**
- Análise crítica e validação de conteúdo técnico
- Sugestões de melhoria na argumentação acadêmica
- Verificação de conformidade com padrões internacionais
- Geração de insights complementares para o relatório

**🚀 Grok (xAI)**
- Validação de conceitos técnicos e metodológicos
- Sugestões de referências e bibliografia
- Análise de viabilidade das recomendações propostas

### Processo de Utilização:
1. **Geração inicial** com ChatGPT para estrutura base
2. **Refinamento** com Cursor para edição precisa e contextual
3. **Validação técnica** com Claude-4 para rigor acadêmico
4. **Verificação final** com Grok para consistência metodológica

### Supervisão Humana:
A equipe manteve **supervisão crítica humana rigorosa** em todas as etapas:
- Ajuste de terminologias específicas do contexto acadêmico brasileiro
- Validação de adequação aos requisitos curriculares da disciplina
- Garantia de conformidade com as normas ISO aplicáveis
- Verificação de coerência entre as diferentes seções do documento
- Validação final de todos os conceitos técnicos e metodológicos

Essa abordagem multi-modelo permitiu uma produção mais eficiente e qualitativa do relatório, combinando as forças específicas de cada ferramenta de IA com a expertise e julgamento crítico da equipe humana.  

---

## 10. GitPage da Equipe
A equipe publicará este projeto em uma **GitPage**, construída com **AstroBuild**, garantindo:  
- Estrutura clara e rastreável das fases.  
- Links para documentação, releases e entregas da disciplina.  
- Navegabilidade adequada para avaliadores externos.  
- Acessibilidade e padronização de estilo.  

---

## 👥 Integrantes
- Daniel Paz dos Passos - 222021862  
- Gabriel Fenelon Rocha Gonçalves - 211061743  
- Guilherme Gusmão Nepomuceno - 232021516  
- Letícia Assunção Aires Moreira - 190128712  
- Otávio Oliveira de Maya Viana - 211029503  
- Vítor Marconi Trancoso Albuquerque - 222006202  
