---
title: Fase 3
description: Projeto da avaliação
---

# Análise de Qualidade do Software Pontua

**Universidade de Brasília**  
**Departamento de Ciência da Computação**  
**Qualidade Software 2025**

## Fase 3: Plano de avaliação

### Plano de avaliação da qualidade do software pontua

## Introdução

Essa fase tem como objetivo avaliar de forma detalhada o plano de avaliação do software pontua, com foco nas características de **Adequação Funcional** e **Portabilidade**, conforme as normas **ISO/IEC 25010** e **ISO/IEC 25040**.

## 1. Objetivos e Escopo da Avaliação

- **Software Avaliado:** Pontua - Plataforma web educacional em nuvem (SaaS)
- **Requisitante:** Crianex - Empresa desenvolvedora
- **Objetivo Principal:** Avaliar a qualidade do Pontua (versão MVP na UniRV) para subsidiar decisões de adoção e priorizar melhorias técnicas.
- **Normas de Referência:** ISO/IEC 25010:2011 (Modelo de Qualidade) e ISO/IEC 25040:2009 (Processo de Avaliação)
- **Foco da Análise:** Adequação Funcional (Completude Funcional) e Portabilidade (Substituibilidade).
- **Público-Alvo:** Alunos, Professores, Coordenadores e Equipe de Desenvolvimento (Crianex).

### 1.1 Módulos e Componentes Avaliados

A avaliação focará nos módulos essenciais para o ciclo PBL, garantindo que a Completude Funcional seja verificada em todas as etapas de uso por professores e alunos:

- Módulo de Autenticação e Login
- Módulo de Turmas e Problemas (Aluno)
- Módulo de Avaliação (Aluno e Professor)
- Módulo de Gestão de Turmas (Professor)
- Módulo de Gestão de Problemas (Professor)
- Módulo de Relatórios e Desempenho

## 2. Modelo de Qualidade e Critérios de Aceitação

### 2.1 Características Priorizadas (MoSCoW)

A avaliação priorizará as características definidas como **Must Have** e **Should Have** no modelo MoSCoW, utilizando as subcaracterísticas e hipóteses detalhadas na documentação como Critérios de Aceitação (CA).

| Característica ISO/IEC 25010 | Subcaracterística | Justificativa de Prioridade | Critério de Aceitação (CA) |
|------------------------------|-------------------|------------------------------|----------------------------|
| **Adequação Funcional** | Completude Funcional | Essencial para viabilizar a metodologia PBL (Must Have). | Métrica de Cobertura Funcional >90% e Média de Satisfação do Usuário > 4.0. |
| **Portabilidade** | Substituibilidade/Compatibilidade | Garante a adoção institucional e flexibilidade (Must/Should Have). | Funcionamento adequado em 95% dos ambientes testados e > 90% de adaptabilidade. |

## 3. Metodologia e Procedimentos GQM

A avaliação será conduzida utilizando a metodologia **GQM (Goal-Question-Metric)**, conforme detalhado na Fase 2.

### 3.1. Objetivo de Medição 1: Adequação Funcional

| Questão (Q) | Métrica | Procedimento de Coleta | CA (Hipótese) |
|-------------|---------|------------------------|---------------|
| **Q1: Completude Funcional?** | 1. Funcionalidades Essenciais Disponíveis.<br/>2. Funcionalidades Essenciais Implementadas. | Análise de Documentação (Requisitos vs. Código) e Testes de Cobertura Funcional. | 90% disponíveis e implementadas. |
| **Q2: Adequação Funcional (Satisfação)?** | Grau médio de satisfação dos usuários (Escala 1 a 5). | Pesquisa de Satisfação (Questionários) aplicados a uma amostra representativa de Professores e Alunos após o uso do sistema. | Média de satisfação > 4.0. |
| **Q3: Corretude Funcional?** | 1. Funções que produzem resultados corretos.<br/>2. Nº de defeitos de incorreção funcional. | Testes de Validação (Caixa Branca e Caixa Preta) nos módulos críticos (Avaliação, Relatórios). | 95% de resultados corretos; Máximo de 1 defeito por ciclo de avaliação. |

### 3.2. Objetivo de Medição 2: Portabilidade

| Questão (Q) | Métrica | Procedimento de Coleta | CA (Hipótese) |
|-------------|---------|------------------------|---------------|
| **Q1: Compatibilidade Multiplataforma?** | % de combinações SO/Navegador sem erros críticos. | Testes de Compatibilidade (Ex: Chrome/Windows, Safari/iOS, Firefox/Linux) em um laboratório controlado. | 95% de funcionamento adequado nas combinações testadas. |
| **Q2: Facilidade de Instalação/ Configuração?** | 1. % de Instalações concluídas sem intervenção.<br/>2. % de Usuários que consideram fácil (Escala 1 a 5). | Acompanhamento da Implementação em novos ambientes e Pesquisa com Equipe Técnica/Usuários. | 95% de instalações sem intervenção e Média de facilidade > 4.0. |
| **Q3: Adaptabilidade/ Substituibilidade?** | % de ambientes onde a adaptação/substituição é possível sem grandes modificações. | Análise de Arquitetura e Dependências Externas (Backend Node.js, BD Supabase) por um especialista. | 90% de adaptabilidade/substituibilidade. |

### 3.3. Ambiente de avaliação

- **Plataforma utilizada:** versão do Pontua implantada na UniRV
- **Bancos de dados e autenticação:** reais (Supabase)
- **Usuários:** reais em contexto real (professores e alunos)

## Histórico de Versão

| Versão | Data | Descrição | Autor(s) |
|--------|------|-----------|----------|
| 1.0 | 09/11/2025 | Criação do documento | Gabriel Fenelon |
