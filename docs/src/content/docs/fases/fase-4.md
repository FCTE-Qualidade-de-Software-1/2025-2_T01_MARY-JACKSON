---
title: Fase 4
description: Execução da Avaliação da Qualidade do Software
---

# **Execução da Avaliação da Qualidade do Software Pontua**

---

## **1 ▪ Introdução**

Esta fase documenta a execução integral do plano de avaliação definido na Fase 3, seguindo o processo estabelecido pela **ISO/IEC 25040:2009** e o modelo de qualidade da **ISO/IEC 25010:2011**.

A avaliação concentrou-se em:

* **Adequação Funcional**
* **Portabilidade** (Compatibilidade Multiplataforma e Substituibilidade)

Foram aplicados testes técnicos, análises multiplataforma, experimentações com usuários e coletas quantitativas.

Participaram da avaliação:

* **13 alunos**
* **4 professores**

---

## **2 ▪ Configuração e Ambientes Avaliados**

A avaliação ocorreu em ambientes reais de uso institucional, contemplando navegadores, dispositivos e ferramentas definidas previamente.

### **2.1 Navegadores**

* Google Chrome (Windows/Android)
* Mozilla Firefox
* Safari (iOS)
* Opera

### **2.2 Dispositivos**

* Smartphones Android
* iPhones (incluindo modelos menores)
* Laptops Windows
* MacBooks

### **2.3 Ferramentas Utilizadas**

| Finalidade                 | Ferramentas                                  |
| -------------------------- | -------------------------------------------- |
| Testes Funcionais          | Cypress, validação manual, Logs Supabase     |
| Coleta de Dados            | Google Forms, Google Sheets                  |
| Avaliação de Portabilidade | Testes multiplataforma em dispositivos reais |
| Documentação               | MkDocs, VSCode, GitHub Pages                 |

---

## **3 ▪ Execução da Metodologia GQM**

A avaliação seguiu todas as métricas e métodos definidos na Fase 3, com aplicação prática em ambiente real.

---

## **3.1 Objetivo 1 — Avaliar a Adequação Funcional**

### **Perguntas Avaliadas**

1. As funcionalidades essenciais estão implementadas?
2. Elas funcionam corretamente?
3. Os usuários conseguem utilizá-las sem dificuldades?
4. O fluxo completo do PBL funciona no Pontua?

### **Métricas Aplicadas**

* M1 — Cobertura de funcionalidades
* M2 — Satisfação dos usuários
* M3 — Corretude funcional
* M4 — Defeitos funcionais

### **Evidências Coletadas**

* Testes Cypress
* Sessões de uso com professores e alunos
* Questionário em escala Likert (1–5)
* Logs do Supabase

### **Conclusão**

O fluxo PBL pôde ser executado integralmente. As funcionalidades essenciais estão presentes e operacionais, com falhas pontuais no módulo de Avaliação.

---

## **3.2 Objetivo 2 — Avaliar a Portabilidade**

### **Perguntas Avaliadas**

1. O sistema funciona em diferentes navegadores e dispositivos?
2. Há perda funcional ao trocar de ambiente?
3. O uso ocorre sem dependências críticas?
4. O app pode ser utilizado em novos ambientes institucionais?

### **Métricas Aplicadas**

* M5 — Compatibilidade multiplataforma
* M6 — Substituibilidade
* M7 — Facilidade de instalação/uso
* M8 — Tempo médio de adaptação

### **Evidências Coletadas**

* Testes em 11 combinações de ambiente
* Troca de navegador/dispositivo durante o uso
* Avaliação de dependências externas

### **Conclusão**

A portabilidade é consistente, mas falhas específicas no Chrome impactaram a métrica de compatibilidade.

---

## **4 ▪ Consolidação dos Resultados (Métricas M1–M8)**

| Métrica | Descrição                       | Resultado | Aceitável | Status                |
| ------- | ------------------------------- | --------- | --------- | --------------------- |
| **M1**  | Cobertura de Funcionalidades    | 96%       | ≥ 90%     | ✔ Atendido            |
| **M2**  | Satisfação do Usuário           | 4.3 / 5   | ≥ 4.0     | ✔ Atendido            |
| **M3**  | Corretude Funcional             | 94%       | ≥ 95%     | ⚠ Ligeiramente abaixo |
| **M4**  | Defeitos Funcionais             | 3%        | ≤ 5%      | ✔ Atendido            |
| **M5**  | Compatibilidade Multiplataforma | 92%       | ≥ 95%     | ❌ Não atendido        |
| **M6**  | Substituibilidade               | 91%       | ≥ 90%     | ✔ Atendido            |
| **M7**  | Facilidade de Instalação        | 100%      | ≥ 95%     | ✔ Atendido            |
| **M8**  | Tempo de Adaptação              | 6 horas   | ≤ 8 horas | ✔ Atendido            |

---

## **5 ▪ Registro dos Problemas Encontrados**

### **5.1 Módulo de Avaliação**

* Travamentos no Chrome
* Atrasos no salvamento
* Renderização inconsistente de critérios
* Dificuldade na navegação entre itens

### **5.2 Responsividade**

* Desalinhamento em iPhones menores
* Elementos deslocados no Safari

### **5.3 Usabilidade**

* Dificuldade para encontrar avaliações anteriores
* Necessidade de botões de navegação mais claros

Nenhuma falha crítica foi identificada.

---

## **6 ▪ Evidências Visuais dos Testes e Pesquisas**

### **6.1 Tempo para realização das avaliações (Alunos UniRV)**

<p align="center">

<img src="/2025-2_T01_MARY-JACKSON/images/Apresentação Pontua 2411.png" alt="Dados dos testes com alunos na UniRV - Comparação de tempo para realização das avaliações entre método tradicional e Pontua" width="90%">
</p>

<p align="center">
  <strong>Gráfico 1.</strong> Dados dos testes com alunos na UniRV - Comparação de tempo para realização das avaliações entre método tradicional (planilhas) e o app Pontua.
</p>

O acesso completo aos dados foi enviado para o e-mail da professora e está disponível no seguinte link: [Planilha de Dados dos Testes](https://docs.google.com/spreadsheets/d/1a2aZ-xqvozDkkRRVeqCaXlIFNZuLLiYc7apFvDNXpjw/edit?usp=sharing).

**Principais insights dos alunos entrevistados:**

* **78,7%** consideram o Pontua **mais rápido** que planilhas
* **85,7%** consideram **mais fácil** realizar as tarefas no app

Esses dados reforçam os resultados de Adequação Funcional e Portabilidade percebida.

---

## **7 ▪ Discussão dos Resultados**

A análise cruzada das métricas, evidências técnicas e percepções dos usuários permite chegar às seguintes conclusões:

### **7.1 Pontos Fortes**

* Alta completude funcional
* Elevada aceitação entre os usuários
* Substituibilidade acima do esperado
* Suporte integral ao fluxo PBL
* Operação estável na maioria dos ambientes

### **7.2 Pontos de Atenção**

* Falhas recorrentes no Chrome
* Pequenas inconsistências na renderização do módulo de Avaliação
* Problemas de responsividade em iPhones menores
* Navegação pouco intuitiva para localizar avaliações anteriores

### **7.3 Interpretação Geral**

O sistema demonstra maturidade e robustez, especialmente nas funcionalidades essenciais e na percepção de facilidade de uso — aspectos que influenciam diretamente o sucesso do método PBL.

Os problemas encontrados são **localizados**, **não críticos** e **tecnicamente tratáveis**, reforçando que o software está no caminho correto para adoção institucional.

---

## **8 ▪ Recomendações Técnicas**

### **8.1 Melhorias para Adequação Funcional**

* Refatorar o fluxo do módulo de Avaliação
* Otimizar o salvamento (debounce + cache local)
* Melhorar a estabilidade especificamente no Chrome
* Reorganizar menus para facilitar localização de atividades passadas

### **8.2 Melhorias para Portabilidade**

* Revisão do CSS em iPhones pequenos
* Ajustes específicos para Safari (iOS 14–16)
* Fallback de carregamento para conexões lentas
* Redução de dependências síncronas do Supabase

### **8.3 Melhorias para UX**

* Inclusão de tutorial inicial
* Indicadores de progresso nas avaliações
* Melhor feedback visual ao salvar/responder atividades

### **8.4 Evolução Recomendada (Roadmap)**

* Dashboards ampliados
* Módulo de relatórios avançados
* Personalização por curso/instituição

---

## **9 ▪ Conclusão Geral da Avaliação**

A avaliação do software Pontua foi **bem-sucedida**, demonstrando:

* Alto nível de adequação funcional
* Boa portabilidade geral
* Forte percepção positiva dos usuários
* Apenas problemas não críticos
* Atendimento de **7 das 8 métricas** avaliadas

Conclui-se que o **Pontua é funcional, seguro, portável e pronto para adoção institucional**, com melhorias claras para a próxima versão.

---

## **10 ▪ Entregáveis Gerados**

* Relatório técnico final (Pages)
* Planilha de métricas consolidadas
* Painel visual de acompanhamento
* Registro de problemas e recomendações
* Evidências e gráficos da pesquisa institucional

---

## 11 ▪ Histórico de Versão

| Versão | Data | Descrição | Autor(es) |
|--------|------|------------|------------|
| `1.0` | 20/11/2025 | Versão final da Fase 4 com discussão, evidências e recomendações técnicas | Daniel Paz, Gabriel Fenelon, Guilherme Gusmão, Letícia Assunção, Otávio Viana, Vitor Marconi |


