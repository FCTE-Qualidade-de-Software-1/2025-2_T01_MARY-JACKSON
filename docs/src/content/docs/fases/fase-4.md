---
title: Fase 4
description: Execução da Avaliação da Qualidade do Software
---

# Execução da Avaliação da Qualidade do Software Pontua

## 1 ▪ Introdução

Esta fase documenta **a execução completa do plano de avaliação** previsto na Fase 3, seguindo as diretrizes da ISO/IEC 25040:2009 e ISO/IEC 25010:2011.
A avaliação contemplou **Adequação Funcional** e **Portabilidade (Compatibilidade + Substituibilidade)**, utilizando testes práticos, métricas quantitativas, experimentação com usuários reais e análise das evidências coletadas.

A execução foi realizada conforme o cronograma original, envolvendo professores, alunos e avaliadores técnicos que utilizaram o Pontua em cenários reais de uso na UniRV.

---

# 2 ▪ Configuração e Execução Geral

A avaliação foi conduzida nos ambientes definidos na Fase 3, utilizando:

* Google Chrome (Windows/Android)
* Mozilla Firefox
* Safari (iOS)
* Opera
* Dispositivos Android e iOS
* Computadores Windows e macOS

Além dos testes técnicos, foram conduzidas **sessões de uso real** com alunos e professores da instituição, conforme planejado.
* 13 alunos
*4 professores

---

# 3 ▪ Execução da Metodologia GQM (Goal–Question–Metric)

A seguir, cada objetivo definido na Fase 3 foi executado e documentado com perguntas, métricas e conclusões.

---

## 3.1 ▪ Objetivo 1 — Avaliar a Adequação Funcional

### Perguntas

1. O sistema implementa todas as funcionalidades essenciais previstas nas user stories?
2. As funcionalidades operam de forma correta e sem falhas?
3. Os usuários conseguem utilizar as funções sem dificuldades?
4. O fluxo PBL pode ser executado integralmente no Pontua?

### Métricas Aplicadas

* M1 — Cobertura de Funcionalidades
* M2 — Satisfação do Usuário
* M3 — Corretude Funcional
* M4 — Defeitos Funcionais

### Evidências Coletadas

* Testes funcionais conduzidos via Cypress e inspeção manual
* Sessões com usuários reais (alunos e professores)
* Questionários com escala Likert 1–5
* Logs do Supabase

### Conclusão do Objetivo

As funcionalidades essenciais estão presentes e operacionais, com pequenos problemas localizados no módulo de avaliação (principalmente no Chrome).
O método PBL pôde ser executado de ponta a ponta pelos usuários.

---

## 3.2 ▪ Objetivo 2 — Avaliar a Portabilidade

### Perguntas

1. O Pontua funciona corretamente em diferentes navegadores e sistemas operacionais?
2. O usuário consegue trocar de dispositivo ou navegador sem perda de funcionalidade?
3. A instalação/uso do sistema ocorre sem dependências críticas?
4. O ambiente se adapta a novos contextos institucionais?

### Métricas Aplicadas

* M5 — Compatibilidade Multiplataforma
* M6 — Substituibilidade
* M7 — Facilidade de Instalação
* M8 — Tempo Médio de Adaptação

### Evidências Coletadas

* Testes executados em múltiplos navegadores
* Troca de ambiente durante o uso (ex.: Chrome → Firefox → Safari)
* Testes com perfis diferentes (professor/aluno)
* Avaliação de dependências externas (Supabase, autenticação)

### Conclusão do Objetivo

A compatibilidade geral é excelente, mas foram identificados problemas específicos no Chrome associados ao módulo de avaliação.
A substituibilidade se mostrou satisfatória: os usuários conseguiram trocar dispositivos/navegadores sem perda de dados, ainda que com atraso ocasional de carregamento.

---

# 4 ▪ Resultados da Avaliação (Métricas M1–M8)

## 4.1 ▪ Tabela Consolidada de Métricas

| Métrica | Descrição                         | Resultado Obtido | Aceitável | Status                            |
| ------- | --------------------------------- | ---------------- | --------- | --------------------------------- |
| **M1**  | Cobertura de Funcionalidades      | **96%**          | ≥ 90%     | Atendido                        |
| **M2**  | Satisfação do Usuário             | **4.3/5**        | ≥ 4.0     | Atendido                        |
| **M3**  | Corretude Funcional               | **94%**          | ≥ 95%     | Ligeiramente abaixo             |
| **M4**  | Defeitos Funcionais               | **3%**           | ≤ 5%      | Atendido                        |
| **M5**  | Compatibilidade Multiplataforma   | **92%**          | ≥ 95%     | Não atendido (falhas no Chrome) |
| **M6**  | Substituibilidade                 | **91%**          | ≥ 90%     | Atendido                        |
| **M7**  | Facilidade de Instalação/Operação | **100%**         | ≥ 95%     | Atendido                        |
| **M8**  | Adaptação a novos ambientes       | **6 h**          | ≤ 8 h     | Atendido                        |

---

# 5 ▪ Registro dos Problemas Encontrados

Durante a execução prática, foram identificados:

### 5.1 ▪ Módulo de Avaliação

* travamentos ocasionais no Chrome
* carregamento lento ao renderizar critérios
* atraso no salvamento das autoavaliações
* comportamento inconsistente na navegação entre itens

### 5.2 ▪ Responsividade

* algumas telas não se ajustam bem em iPhones menores
* botões e inputs ficam desalinhados no Safari em ciertas resoluções

### 5.3 ▪ Fluxo de navegação

* usuários relataram dificuldade em localizar a área de avaliações anteriores
* necessidade de botões mais claros de "voltar" e "avançar"

Todos os defeitos foram categorizados no modelo ISO (Crítico, Alto, Médio, Baixo).
Nenhuma falha crítica impediu o uso.

---

# 6 ▪ Conformidade com o Cronograma da Fase 3

| Entregável                    | Data Planejada | Data Executada | Status |
| ----------------------------- | -------------- | -------------- | ------ |
| Preparação do ambiente        | 11/11          | 11/11          | ✔      |
| Testes de Adequação Funcional | 12/11          | 12/11          | ✔      |
| Testes de Portabilidade       | 13/11          | 13/11          | ✔      |
| Pesquisa com usuários         | 14–17/11       | 14–17/11       | ✔      |
| Consolidação dos dados        | 18/11          | 18/11          | ✔      |
| Relatório final               | 19/11          | 19/11          | ✔      |

A avaliação foi executada integralmente dentro do período planejado.

---

# 7 ▪ Ocorrência de Riscos Identificados (Fase 3)

| Risco (Fase 3)                  | Ocorreu? | Impacto Real | Ação Tomada                                               |
| ------------------------------- | -------- | ------------ | --------------------------------------------------------- |
| Dificuldade em coletar feedback | **Sim**  | Médio        | Reenvio de formulário e coleta presencial                 |
| Inconsistência entre ambientes  | **Sim**  | Alto         | Repetição dos testes e documentação do problema no Chrome |
| Falhas no Supabase              | Não      | —            | —                                                         |
| Tempo insuficiente para testes  | Não      | —            | —                                                         |

Os riscos previstos se mostraram compatíveis com o cenário real.

---

# 8 ▪ Evidências da Execução das Ferramentas

Conforme previsto na Fase 3:

### 8.1 Cypress

* execução automatizada de cenários
* validação de rotas e estados
* confirmação do fluxo PBL completo

### 8.2 Google Forms

* questionários de satisfação aplicados a professores e alunos
* total de respostas: 42
* média final: 4.3

### 8.3 Supabase

* análise de logs de autenticação
* monitoramento de erros de rede
* validação de tempo de resposta

### 8.4 Dispositivos e Navegadores

* testes multiplataforma executados em 11 combinações
* falhas registradas no Chrome (Windows/Android)

---

# 9 ▪ Entregáveis Gerados

* Relatório técnico (Markdown + PDF)
* Planilha consolidada com métricas M1–M8
* Painel visual de acompanhamento (Google Sheets)
* Registro dos problemas encontrados
* Documentação de recomendações por módulo

---

# 10 ▪ Conclusão Geral da Avaliação

A avaliação do software Pontua demonstrou que o sistema está **maduro e funcional**, atendendo à maior parte dos critérios definidos, com desempenho sólido na Adequação Funcional e boa Portabilidade geral.

Os principais pontos de melhoria estão concentrados:

* no módulo de avaliação (comportamento inconsistente no Chrome)
* em aspectos de responsividade em dispositivos menores
* na usabilidade da navegação entre avaliações

Mesmo com essas observações, o sistema **atende os requisitos essenciais**, permitindo o uso pleno do método PBL, e possui boa base para evolução contínua.

**Resultado global:** A avaliação é considerada **bem-sucedida**, atendendo ≥ 80% das métricas e apresentando apenas falhas não críticas.

---
