---
title: Fase 3
description: Projeto da avaliação
---

# Plano de Avaliação da Qualidade do Software Pontua

---

## 1 ▪ Introdução

Esta fase tem como objetivo planejar e detalhar a execução da avaliação do software **Pontua**, com foco nas características de **Adequação Funcional** e **Portabilidade**, conforme as normas **ISO/IEC 25010:2011** (Modelo de Qualidade) e **ISO/IEC 25040:2009** (Processo de Avaliação).  

A fase de projeto define **os métodos, métricas, ferramentas, critérios de aceitação e cronograma** que serão utilizados na execução da avaliação, garantindo que os resultados sejam mensuráveis, rastreáveis e reprodutíveis.  

Com a aplicação deste plano, espera-se:

- Validar a completude e corretude das funcionalidades essenciais do Pontua;
- Verificar a capacidade do sistema de operar corretamente em diferentes plataformas e ambientes institucionais;
- Identificar oportunidades de melhoria que orientem o desenvolvimento técnico e pedagógico do software.

---

## 2 ▪ Objetivos e Escopo da Avaliação

- **Software Avaliado:** Pontua — Plataforma web educacional em nuvem (SaaS).  
- **Requisitante:** Crianex — Empresa desenvolvedora.  
- **Objetivo Principal:** Avaliar a qualidade do Pontua (versão MVP em uso na UniRV) para subsidiar decisões de adoção e priorização de melhorias técnicas.  
- **Normas de Referência:** ISO/IEC 25010:2011 e ISO/IEC 25040:2009.  
- **Foco da Análise:** Adequação Funcional (Completude Funcional) e Portabilidade (Substituibilidade e Compatibilidade Multiplataforma).  
- **Público-Alvo:** Professores, Alunos, Coordenadores e Equipe de Desenvolvimento (Crianex).

### 2.1 ▪ Módulos e Componentes Avaliados

A avaliação abrangerá os módulos centrais do ciclo PBL:

- **Módulo de Autenticação e Login**
- **Módulo de Turmas e Problemas (Aluno)**
- **Módulo de Avaliação (Aluno e Professor)**
- **Módulo de Gestão de Turmas (Professor)**
- **Módulo de Gestão de Problemas (Professor)**
- **Módulo de Relatórios e Desempenho**

---

## 3 ▪ Modelo de Qualidade e Critérios de Aceitação

### 3.1 ▪ Características Priorizadas (Método MoSCoW)

A priorização das características segue o modelo MoSCoW definido na Fase 1, considerando **Must Have** e **Should Have** como foco principal da avaliação.

| Característica ISO/IEC 25010 | Subcaracterística | Justificativa de Prioridade | Critério de Aceitação (CA) |
|------------------------------|-------------------|------------------------------|-----------------------------|
| **Adequação Funcional** | Completude Funcional | Essencial para o funcionamento do método PBL (Must Have). | Cobertura funcional ≥ 90% e satisfação média > 4.0. |
| **Portabilidade** | Substituibilidade / Compatibilidade | Garante adoção institucional e flexibilidade (Must/Should Have). | Funcionamento ≥ 95% nas combinações testadas e adaptabilidade ≥ 90%. |

---

## 4 ▪ Metodologia e Procedimentos (GQM)

A avaliação será conduzida com base na metodologia **GQM (Goal-Question-Metric)**, conforme detalhado na Fase 2.

| Etapa | Objetivo | Técnica | Ferramenta |
|-------|-----------|----------|-------------|
| **Configuração do Ambiente** | Preparar o ambiente e validar módulos a testar | Configuração e análise de requisitos | GitHub, Supabase, VSCode |
| **Coleta – Adequação Funcional** | Avaliar completude e corretude das funções | Testes de cobertura funcional e questionários | Cypress, Google Forms |
| **Coleta – Portabilidade** | Verificar compatibilidade e substituibilidade | Testes multiplataforma | Chrome, Firefox, Safari, Android |
| **Relatórios de Dados** | Consolidar evidências e resultados | Planilhas e relatórios automatizados | Google Sheets, Notion |
| **Análise e Confronto** | Comparar métricas com os critérios definidos | Análise estatística e cruzamento de dados GQM | Google Sheets |
| **Relato Final** | Documentar resultados e recomendações | Relatório técnico e visualização de dados | MkDocs, VSCode |

---

## 5 ▪ Métricas e Critérios de Aceitação

### 5.1 ▪ Adequação Funcional

| Métrica | Descrição | Forma de Cálculo | Aceitável | Esperado |
|----------|------------|------------------|------------|-----------|
| M1 | Cobertura de Funcionalidades | (Funcionalidades Implementadas ÷ Total Especificadas) × 100 | ≥ 90% | 100% |
| M2 | Satisfação do Usuário | Média das notas (escala 1–5) | ≥ 4.0 | ≥ 4.5 |
| M3 | Corretude Funcional | (Funções corretas ÷ Total testadas) × 100 | ≥ 95% | 100% |
| M4 | Defeitos Funcionais | (Defeitos ÷ Total de funções testadas) × 100 | ≤ 5% | ≤ 1% |

---

### 5.2 ▪ Portabilidade

| Métrica | Descrição | Forma de Cálculo | Aceitável | Esperado |
|----------|------------|------------------|------------|-----------|
| M5 | Compatibilidade Multiplataforma | (Ambientes compatíveis ÷ Total testados) × 100 | ≥ 95% | 100% |
| M6 | Substituibilidade | (Módulos substituíveis ÷ Total módulos) × 100 | ≥ 90% | ≥ 95% |
| M7 | Facilidade de Instalação | % de instalações sem intervenção técnica | ≥ 95% | 100% |
| M8 | Tempo Médio de Adaptação | Média de horas por ambiente novo | ≤ 8 h | ≤ 5 h |

---

## 6 ▪ Ferramentas Necessárias

- **Para Testes Funcionais:** Cypress, Jest  
- **Para Análise de Portabilidade:** Dispositivos Android e iOS, navegadores Safari, Chrome, Firefox, Opera 
- **Para Coleta de Dados:** Google Forms, Google Sheets, Logs Supabase  
- **Para Documentação:** MkDocs, GitHub Pages, VSCode  

---

## 7 ▪ Cronograma

| Data | Entregável | Atividades |
|------|-------------|-------------|
| **11/11/2025** | Ambiente Configurado | Preparação e validação do ambiente de testes. |
| **12/11/2025** | Relatório Preliminar – Adequação Funcional | Testes de completude, corretude e coleta de satisfação dos usuários. |
| **13/11/2025** | Relatório Preliminar – Portabilidade | Testes em múltiplos dispositivos e navegadores. |
| **14/11/2025 à 17/11/2025** | Pesquisa de satisfação – Adequação Funcional | Aplicação de questionário aos professores e alunos para avaliar completude, corretude e utilidade das funcionalidades do Pontua no contexto PBL. |
| **18/11/2025** | Consolidação de Resultados | Organização das métricas e cruzamento dos dados GQM. |
| **19/11/2025** | Relatório Final | Entrega do documento consolidado e recomendações de melhoria. |

---

## 8 ▪ Critérios de Aceitação Gerais

A avaliação será considerada **bem-sucedida** se:  
- Pelo menos **80% das métricas** atingirem o nível “Aceitável”;  
- Não houver **não conformidades funcionais críticas** sem solução;  
- A **portabilidade** for comprovada em ≥ 95% dos ambientes testados;  
- O **relatório final** documentar integralmente os resultados, evidências e recomendações.

---

## 9 ▪ Riscos

| Risco | Probabilidade | Impacto | Ação de Mitigação |
|--------|----------------|----------|-------------------|
| Dificuldade em coletar feedback dos usuários | Média | Alto | Aplicar formulários online com prazos estendidos e incentivo institucional. |
| Inconsistência entre ambientes | Média | Alto | Definir conjunto fixo de navegadores e versões suportadas. |
| Falhas no Supabase ou dependências externas | Baixa | Alto | Criar backups e logs locais de contingência. |
| Falta de tempo de execução completa | Baixa | Alto | Divisão de tarefas e priorização de módulos críticos. |

---

## 10 ▪ Entregáveis

- Relatório técnico completo (Markdown e PDF);  
- Planilhas de métricas com resultados consolidados;  
- Painel visual de acompanhamento (Google Sheets);  
- Apresentação final (GitPages com síntese da avaliação).  

---

## 11 ▪ Histórico de Versão

| Versão | Data | Descrição | Autor(es) |
|--------|------|------------|------------|
| `1.0` | 09/11/2025 | Criação da Fase 3 — Projeto da Avaliação de Qualidade | Gabriel Fenelon |
| `1.1` | 10/11/2025 | Expansão e complementação do plano com método, métricas e cronograma | Vitor Marconi |

---
