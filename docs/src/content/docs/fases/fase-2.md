---
title: Fase 2
description: Especificar a avaliação
---


# Aplicação da Metodologia GQM

## Sobre a Metodologia

O modelo GQM (Goal-Question-Metric) é uma metodologia estruturada para definir, analisar e aplicar métricas em projetos de software. Seu principal propósito é assegurar que todas as medições realizadas estejam diretamente relacionadas aos objetivos do projeto, garantindo clareza, foco e rastreabilidade na avaliação da qualidade.

A estrutura do modelo é dividida em três níveis interligados:

* Goal (Objetivo): descreve o propósito da medição, isto é, o que se deseja compreender, avaliar ou melhorar.

* Question (Questão): detalha o objetivo em perguntas específicas que orientam a coleta e a interpretação dos dados.

* Metric (Métrica): define as informações quantitativas ou qualitativas que serão coletadas para responder de forma objetiva às questões formuladas.

No contexto do Pontua, o modelo GQM foi aplicado para estruturar a avaliação da qualidade do software, garantindo que cada métrica estivesse alinhada com os objetivos definidos pela equipe. Essa abordagem permitiu analisar de maneira sistemática aspectos como adequação funcional e portabilidade, fornecendo uma base sólida para identificar pontos fortes e oportunidades de melhoria no sistema.

<p align="center">

<img src="https://github.com/user-attachments/assets/745d702a-572e-4bf0-a7bc-194a55796319" alt="Definição de procedimentos GQM" width="70%">
</p>

<p align="center">
  <strong>Imagem 1.</strong> As 4 fases do Método GQM incorporada de:  
  Rini van Solingen & Egon Berghout. <em>The Goal/Question/Metric Method: A Practical Guide for Quality Improvement of Software Development.</em>  
  McGraw-Hill, 1999. Um guia prático que explora como aplicar GQM em projetos de software.
</p>

## Objetivo de Medição 1 – Adequação Funcional

| **Campo** | **Descrição** |
|------------|----------------|
| **Analisar** | O aplicativo Pontua |
| **Para o propósito de** | Avaliar |
| **Com respeito a** | Adequação funcional |
| **Do ponto de vista de** | Desenvolvedores |
| **No contexto da** | Disciplina de Qualidade de Software |

### Questões Objetivo de Medição 1 - Adequação Funcional

**Q1:** O Pontua apresenta completude funcional, ou seja, todas as funcionalidades essenciais previstas estão disponíveis e implementadas?

**Métrica 1:** Percentual de funcionalidades essenciais disponíveis em relação ao total definido nos requisitos.  
**Métrica 2:** Percentual de funcionalidades essenciais implementadas em relação ao total definido nos requisitos.

**Hipótese Q1:** Pelo menos 90% das funcionalidades essenciais estão disponíveis e implementadas conforme especificado. Haindl (2021, pp. 99–100)

---

**Q2:** As funcionalidades do Pontua apresentam adequação funcional, ajudando o usuário (professor ou estudante) a alcançar seus objetivos no processo avaliativo do PBL?

**Métrica:** Grau médio de satisfação dos usuários quanto à adequação funcional das funcionalidades (escala de 1 a 5).

**Hipótese Q2:** A média de satisfação dos usuários é superior a 4,0. Haindl (2021, pp. 87-88)

---

**Q3:** As funções do Pontua fornecem resultados corretos conforme os requisitos definidos (corretude funcional)?

**Métrica 1:** Percentual de funções que produzem resultados corretos em testes de validação contra requisitos.  
**Métrica 2:** Número de defeitos relacionados à incorreção funcional identificados durante a avaliação.

**Hipótese Q3:** Pelo menos 95% das funções produzem resultados corretos e não há mais que 1 defeito de incorreção funcional por ciclo de avaliação. 

## Objetivo de Medição 2 – Portabilidade

| **Campo** | **Descrição** |
|------------|----------------|
| **Analisar** | O aplicativo Pontua |
| **Para o propósito de** | Avaliar |
| **Com respeito a** | Portabilidade |
| **Do ponto de vista de** | Desenvolvedores |
| **No contexto da** | Disciplina de Qualidade de Software |

### Questões do Objetivo de Medição 2 – Portabilidade

**Q1:** O aplicativo Pontua funciona corretamente em diferentes sistemas operacionais e navegadores?

**Métrica:** Percentual de combinações de sistema operacional e navegador nas quais o sistema opera sem erros críticos.

**Hipótese Q1:** O Pontua apresenta funcionamento adequado (sem falhas críticas) em pelo menos 95% das combinações testadas. Haindl (2021, pp. 96–97)

---

**Q2:** O aplicativo é facilmente instalável e configurável em novos dispositivos ou ambientes institucionais?

**Métrica 1:** Percentual de instalações concluídas sem intervenção técnica adicional.  
**Métrica 2:** Percentual de usuários que consideram o processo de instalação fácil (escala de 1 a 5).

**Hipótese Q2:** Pelo menos 95% das instalações são concluídas sem intervenção técnica e a média de facilidade percebida é superior a 4,0.

---

**Q3:** O aplicativo Pontua pode ser adaptado ou substituído facilmente para diferentes ambientes institucionais (adaptabilidade/substituibilidade)?

**Métrica:** Percentual de ambientes nos quais o sistema pode ser adaptado ou substituído sem necessidade de grandes modificações.

**Hipótese Q3:** O Pontua pode ser adaptado ou substituído em pelo menos 90% dos ambientes institucionais sem grandes modificações.

## Relação entre Objetivos de Medição, Questões e Métricas

| **Objetivo de Medição** | **Questão** | **Métrica** |
|--------------------------|-------------|--------------|
| **Adequação Funcional** | **Q1:** O Pontua apresenta completude funcional, ou seja, todas as funcionalidades essenciais previstas estão disponíveis e implementadas? | Percentual de funcionalidades essenciais disponíveis; Percentual de funcionalidades essenciais implementadas |
| **Adequação Funcional** | **Q2:** As funcionalidades do Pontua apresentam adequação funcional, ajudando o usuário a alcançar seus objetivos no processo avaliativo do PBL? | Grau médio de satisfação dos usuários quanto à adequação funcional das funcionalidades (escala de 1 a 5) |
| **Adequação Funcional** | **Q3:** As funções do Pontua fornecem resultados corretos conforme os requisitos definidos (corretude funcional)? | Percentual de funções que produzem resultados corretos; Número de defeitos de incorreção funcional |
| **Portabilidade** | **Q1:** O aplicativo Pontua funciona corretamente em diferentes sistemas operacionais e navegadores? | Percentual de combinações de sistema operacional e navegador nas quais o sistema opera sem erros críticos. |
| **Portabilidade** | **Q2:** O aplicativo é facilmente instalável e configurável em novos dispositivos ou ambientes institucionais? | Percentual de instalações concluídas sem intervenção técnica; Percentual de usuários que consideram o processo de instalação fácil (escala de 1 a 5) |
| **Portabilidade** | **Q3:** O aplicativo Pontua pode ser adaptado ou substituído facilmente para diferentes ambientes institucionais (adaptabilidade/substituibilidade)? | Percentual de ambientes nos quais o sistema pode ser adaptado ou substituído sem grandes modificações. |


## Bibliografia

VAN SOLINGEN, Rini; BERGHOUT, Egon. The Goal/Question/Metric Method: A practical guide for quality improvement of software development. London: The McGraw-Hill Companies, 1999.  

Haindl, Philipp. Measuring and Evaluating the Value of Software Features in DevOps. Institute of Business Informatics - Software Engineering, Johannes Kepler University Linz, 2021

## Histórico de Versão

| Versão | Data       | Descrição                                             | Autor(s)       |
| ------ | ---------- | ----------------------------------------------------- | -------------- |
| `1.0`  | 06/10/2025 | Criação do documento, adição da introdução, objetivos de medição e questões de medição | Letícia |
| `1.1`  | 14/10/2025 | Atualização da tabela de métricas com valores específicos e referências bibliográficas | Vitor Marconi |
