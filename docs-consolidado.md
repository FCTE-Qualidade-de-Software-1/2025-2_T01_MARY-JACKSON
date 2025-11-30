# QSW - Mary Jackson
## Análise de Qualidade do Software Pontua

*Documento consolidado contendo todas as fases do projeto de avaliação de qualidade do software Pontua.*

---

## Sobre o Projeto

## Visão Geral

QSW – Mary Jackson é um projeto acadêmico de Qualidade de Software que realiza uma análise do software Pontua, uma plataforma educacional desenvolvida pela Crianex que adota a metodologia PBL (Problem-Based Learning) voltada para cursos de Medicina e áreas afins. O sistema é utilizado no curso de Medicina da UniRV, servindo como apoio ao processo de ensino-aprendizagem por meio da aprendizagem baseada em problemas.

## Objetivos

Avaliar a qualidade do software Pontua com base nas características de Adequação Funcional e Portabilidade definidas pelo padrão internacional ISO/IEC 25010:2011, visando identificar oportunidades de melhoria para os desenvolvedores e apoiar decisões sobre a adoção institucional.

## Documentação

A documentação completa do projeto está disponível no [repositório da disciplina](https://github.com/fcte-qualidade-de-software-1/2025-2_T01_MARY-JACKSON/tree/main)

## Metodologia

A avaliação segue a estrutura definida pela **ISO/IEC 25040:2009**, dividida em 5 fases:

1. **Fase 1:** Estabelecimento dos requisitos de avaliação
2. **Fase 2:** Especificação da avaliação
3. **Fase 3:** Projeto da avaliação
4. **Fase 4:** Execução da avaliação
5. **Fase 5:** Conclusão e recomendações

## Tecnologias

- **Framework:** Astro Starlight (Documentação)
- **Versionamento:** Git e GitHub
- **Padrões:** ISO/IEC 25010:2011 e ISO/IEC 25040:2009
- **Ferramentas:** ChatGPT (apoio à documentação)

## Resultados Esperados

- **Relatório técnico** detalhado da avaliação
- **Recomendações** para melhorias no software
- **Contribuição** para o processo de qualidade da Crianex
- **Aprendizado prático** em qualidade de software

---

## 👥 Equipe

- **Daniel Paz dos Passos** - 222021862
- **Gabriel Fenelon Rocha Gonçalves** - 211061743
- **Guilherme Gusmão Nepomuceno** - 232021516
- **Letícia Assunção Aires Moreira** - 190128712
- **Otávio Oliveira de Maya Viana** - 211029503
- **Vítor Marconi Trancoso Albuquerque** - 222006202

---

*Projeto desenvolvido como parte da disciplina de Qualidade de Software da Universidade de Brasília.*

---



# Fase 1 - Estabelecimento dos Requisitos de Avaliação

---
title: Fase 1
description: Estabelece os requisitos da avaliação
---



# Análise de Qualidade do Software Pontua
## 1. Propósito da Avaliação 
### 1.1 Contexto e Motivação

<p style="text-indent:30px;">A efetividade de uma metodologia educacional como o PBL (Problem-Based Learning) depende não apenas do conteúdo pedagógico, mas também da capacidade do software que o viabiliza de se adaptar a diferentes contextos de uso e de garantir que todas as funcionalidades essenciais estejam disponíveis. Em ambientes acadêmicos, como o curso de Medicina da UniRV, a ausência de completude funcional pode comprometer o fluxo de aprendizagem baseado em problemas, gerando lacunas na experiência do aluno e dificultando o trabalho do professor como facilitador.</p>

<p style="text-indent:30px;">Da mesma forma, a portabilidade e sua subcaracterística de substituibilidade tornam-se relevantes em um cenário no qual instituições buscam soluções tecnológicas que possam ser integradas a diferentes infraestruturas ou, se necessário, substituídas sem prejuízos significativos. A adoção de uma plataforma como o Pontua, portanto, exige que sua qualidade seja avaliada formalmente à luz dessas características, garantindo que a ferramenta não apenas atenda aos requisitos funcionais da metodologia PBL, mas também mantenha a flexibilidade necessária para evoluir e sustentar o processo de ensino-aprendizagem em longo prazo.</p>

### 1.2. Requisitante e Partes Interessadas
- **Requisitante Principal:** **Crianex**, empresa desenvolvedora do software Pontua.  
- **Partes Interessadas (Stakeholders):**  
  - **Alunos:** Demandam clareza, transparência e feedback rápido em avaliações.  
  - **Professores:** Necessitam de eficiência na gestão de notas, relatórios de turmas e facilidade no lançamento de atividades.  
  - **Coordenadores:** Buscam padronização institucional e dashboards que apoiem decisões acadêmicas.  
  - **Equipe Crianex (Desenvolvedora):** Requer feedback estruturado para melhorar a confiabilidade, escalabilidade e portabilidade do software.  
  - **Instituições de Ensino:** Pretendem reduzir custos administrativos, padronizar processos avaliativos e garantir conformidade legal (LGPD).

### 1.3 Declaração de Objetivos
Este relatório tem como objetivo avaliar a qualidade do software Pontua, desenvolvido pela Crianex, que aplica a metodologia PBL (Problem-Based Learning) em cursos de Medicina e áreas afins. A avaliação é conduzida conforme a ISO/IEC 25040:2009, que estabelece o processo de avaliação de qualidade, em conjunto com a ISO/IEC 25010:2011, que define o modelo de qualidade de software.

A análise concentra-se nas características de Adequação Funcional e Portabilidade, com ênfase em suas subcaracterísticas de completude funcional e substituibilidade.

**Os resultados pretendidos visam:**

* Apoiar decisões institucionais quanto à adoção do Pontua em universidades.

* Subsidiar a equipe de desenvolvimento na priorização de melhorias técnicas.

* Evidenciar a conformidade do software com padrões internacionais de qualidade.

* Contribuir para a melhoria contínua da experiência de professores e estudantes no uso da metodologia PBL.

Ao mesmo tempo, esta avaliação se alinha aos objetivos de negócio da Crianex, uma vez que o software encontra-se em fase de desenvolvimento e com o MVP em operação. O diagnóstico precoce de sua qualidade permite reduzir riscos de falhas críticas, orientar investimentos técnicos e fortalecer a proposta de valor da plataforma perante potenciais parceiros institucionais. Assim, a análise não apenas sustenta a evolução tecnológica do produto, mas também aumenta sua viabilidade de adoção em larga escala, favorecendo o crescimento sustentável da solução no mercado educacional.

### 1.4 Metas Detalhadas

#### Avaliar a Completude Funcional do Pontua

Verificar se todas as funcionalidades necessárias ao processo de PBL estão implementadas (ex.: criação e acompanhamento de problemas, registro de discussões em grupo, feedback docente).

Analisar a consistência entre requisitos especificados e funcionalidades entregues, garantindo que não haja lacunas críticas para o uso em cursos de Medicina.

Métricas Envisionadas:

* Taxa de cobertura de requisitos funcionais (% de requisitos implementados / total de requisitos especificados).

* Taxa de defeitos funcionais (número de falhas reportadas / número de funcionalidades testadas).

* Índice de completude (grau de satisfação dos usuários em relação às funcionalidades essenciais).

#### Examinar a Portabilidade e a Substituibilidade do Sistema

Avaliar a capacidade do Pontua de operar em diferentes ambientes tecnológicos (navegadores, dispositivos, sistemas operacionais) sem perda de desempenho ou funcionalidade.

Investigar o grau de dependência de componentes proprietários ou tecnologias específicas, identificando barreiras que dificultem a substituição por alternativas equivalentes.

Métricas Envisionadas:

* Taxa de compatibilidade multiplataforma (% de ambientes suportados com execução correta).

* Esforço de migração estimado (tempo médio para portar ou substituir um componente crítico).

* Índice de substituibilidade (número de módulos que podem ser trocados sem impacto significativo no restante do sistema).

#### Identificar Oportunidades de Melhoria Orientadas a Desenvolvedores e Usuários

Mapear funcionalidades com maior impacto pedagógico não totalmente exploradas ou ausentes, visando aprimorar a experiência de professores e alunos na metodologia PBL.

Propor recomendações técnicas baseadas nos resultados da análise, priorizando ajustes que aumentem tanto a completude funcional quanto a portabilidade.

Métricas sugeridas:

* Nível de satisfação do usuário final (questionários aplicados a professores e estudantes).

* Número de melhorias priorizadas (quantidade de itens recomendados para roadmap).

* Taxa de aceitação institucional (interesse ou adoção em novas universidades após ajustes).  

---
## 2. Identificação do Tipo de Produto
O Pontua é um **software como serviço (SaaS)**, acessível via navegador e responsivo em dispositivos móveis. Sua proposta é centralizar avaliações acadêmicas e simplificar a adoção da metodologia **PBL** em contextos universitários.  

### 2.1 Descrição Estruturada
- **Natureza do Produto:** Plataforma web educacional em nuvem.  
- **Interfaces Principais:** Área do aluno, área do professor, dashboards administrativos.  
- **Dependências Externas:** Autenticação via provedores (Google), banco de dados em nuvem, conformidade LGPD.  
- **Serviços Oferecidos:** Gestão de turmas, avaliações entre pares, relatórios de desempenho, indicadores de presença e feedback contínuo.  

### 2.2 Tecnologias Utilizadas
- **Frontend:** Desenvolvido em **Svelte**, priorizando performance e experiência do usuário.  
- **Backend:** Implementado em **Node.js** com **Typescript** e **Express.js**, garantindo escalabilidade e robustez na lógica de negócio.  
- **Banco de Dados:** Utilização do **Supabase** como solução de banco de dados relacional e autenticação integrada, oferecendo flexibilidade e segurança no armazenamento de dados.

### 2.3 Produto Principal Especificado

| Campo          | Descrição             |
| -------------- | --------------------- |
| Nome           | Pontua                |
| Tipo           | Site                  |
| Frontend       | Svelte                |
| Backend        | Node.js + Express     |
| Banco de Dados | Supabase (PostgreSQL) |
| Plataforma     | Web / Mobile          |

### 2.4 Módulos e Componentes a Avaliar

De acordo com o **mapa de navegação do Pontua**, os módulos e componentes a serem avaliados foram organizados seguindo o padrão estruturado abaixo:

1. **Módulo de Autenticação e Login**: Gerencia o acesso e identificação dos usuários no sistema
   - **Justificativa de portabilidade**: Utiliza padrões web amplamente compatíveis (OAuth via Google) permitindo integração fácil com diferentes provedores de identidade e execução em qualquer navegador moderno
   - **Justificativa de adequação funcional**: Essencial para segurança e personalização da experiência PBL, permitindo rastreabilidade das atividades de cada usuário
   - **Funcionalidades**:
     - Criação de conta (Aluno e Professor)
     - Tratamento de erros de login
     - Recuperação de senha

2. **Módulo de Turmas e Problemas (Aluno)**: Gerencia o acesso e acompanhamento de turmas e problemas pelo estudante
   - **Justificativa de portabilidade**: Design responsivo permite acesso via diferentes dispositivos móveis e navegadores durante o processo de aprendizagem
   - **Justificativa de adequação funcional**: Central para o aluno acompanhar seu progresso no método PBL, visualizando problemas propostos e seu desempenho avaliativo
   - **Funcionalidades**:
     - Acesso às turmas cadastradas
     - Acompanhamento dos problemas propostos
     - Visualização das notas em cada problema
     - Visualização de notas em atividades de mapa mental

3. **Módulo de Avaliação (Aluno)**: Permite ao estudante realizar avaliações e visualizar resultados
   - **Justificativa de portabilidade**: Interface intuitiva que funciona em diferentes plataformas, essencial para participação remota em atividades PBL
   - **Justificativa de adequação funcional**: Fundamental para o método PBL, permitindo avaliação entre pares e autoavaliação com critérios transparentes
   - **Funcionalidades**:
     - Sistema de avaliação em atividades e problemas PBL
     - Visualização de notas recebidas e feedbacks
     - Consulta aos critérios de avaliação

4. **Módulo de Gestão de Turmas (Professor)**: Ferramentas para criação e administração de turmas
   - **Justificativa de portabilidade**: Interface web-based que permite gestão remota sem instalação de software específico
   - **Justificativa de adequação funcional**: Essencial para organização das turmas no método PBL, permitindo controle total sobre composição e participantes
   - **Funcionalidades**:
     - Abertura de novas turmas
     - Administração de turmas existentes
     - Adição e remoção de alunos

5. **Módulo de Gestão de Problemas (Professor)**: Gerencia a criação e configuração de problemas PBL
   - **Justificativa de portabilidade**: Funciona em diferentes ambientes web sem dependências de plataformas específicas
   - **Justificativa de adequação funcional**: Core do método PBL, permitindo controle completo do ciclo de vida dos problemas e critérios avaliativos
   - **Funcionalidades**:
     - Abertura de novos problemas
     - Administração de problemas existentes
     - Controle de datas de abertura e fechamento
     - Definição e ajuste de critérios de avaliação

6. **Módulo de Avaliação (Professor)**: Sistema para atribuição e acompanhamento de notas
   - **Justificativa de portabilidade**: Compatível com diferentes navegadores e dispositivos para correção remota
   - **Justificativa de adequação funcional**: Essencial para feedback no método PBL, permitindo avaliação detalhada e transparente das atividades
   - **Funcionalidades**:
     - Atribuição de notas em atividades
     - Visualização de notas aplicadas
     - Relatórios detalhados de avaliação (quem avaliou quem, notas atribuídas)
     - Rastreabilidade completa do processo avaliativo

7. **Módulo de Relatórios e Desempenho**: Gera relatórios acadêmicos e análises de performance
   - **Justificativa de portabilidade**: Geração de relatórios em formatos padrão (PDF, planilhas) compatíveis com diferentes sistemas
   - **Justificativa de adequação funcional**: Importante para tomada de decisões pedagógicas no método PBL, permitindo análise comparativa de desempenho
   - **Funcionalidades**:
     - Relatórios de desempenho das turmas
     - Exportação em diferentes formatos (PDF, planilhas)
     - Análise comparativa entre alunos e turmas
     - Dashboards administrativos  

---

## 3. Especificação do Modelo de Qualidade
A avaliação do Pontua foi estruturada a partir das diretrizes da ISO/IEC 25010:2011, em conjunto com a ISO/IEC 25040:2009, que define o processo de avaliação de qualidade. O objetivo é garantir que os critérios adotados sejam consistentes, rastreáveis e replicáveis, permitindo a análise comparativa com padrões internacionais.

### 3.1 Características Selecionadas
- **Adequação Funcional (Functional Suitability)**  
  - **Subcaracterística: Completude Funcional**  
assegura que o Pontua cubra integralmente os requisitos da metodologia PBL (Problem-Based Learning), garantindo que alunos, professores e coordenadores possam executar todas as etapas do processo pedagógico sem lacunas críticas. 

- **Portabilidade (Portability)**  
  - **Subcaracterística: Substituibilidade**  
avalia a capacidade da plataforma de ser instalada, executada e integrada em diferentes ambientes tecnológicos, além de mensurar sua independência de fornecedores e serviços específicos (ex.: banco de dados em nuvem, autenticação, provedores externos).

### 3.2. Seleção e Priorização de Características de Qualidade (MoSCoW)

## Critérios de Priorização – Método MoSCoW

A priorização das características de qualidade do Pontua foi realizada utilizando a técnica MosCoW. A avaliação se concentra nas características de portabilidade e adequação funcional, consideradas essenciais para o propósito do software. As demais características do modelo ISO/IEC 25010 foram analisadas, mas receberam menor prioridade, pois não impactam diretamente os nossos objetivos centrais.

| Categoria                                       | Critério no Contexto do Pontua                                                                                                                                                      | Justificativa                                                                                                 |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Must Have (Essenciais)**                      | **Adequação Funcional – Completude Funcional**: cobertura integral das funções essenciais do PBL (criação e acompanhamento de problemas, avaliações entre pares, feedback docente). | Sem estas funções, o software não cumpre seu propósito educacional e inviabiliza o uso em cursos de Medicina. |
|                                                 | **Portabilidade – Substituibilidade**: capacidade de substituir planilhas ou ferramentas informais já utilizadas.                                                                   | Garante a viabilidade de adoção institucional sem grandes barreiras de transição.                             |
| **Should Have (Importantes, mas não críticos)** | Compatibilidade multiplataforma (navegadores e dispositivos móveis).                                                                                                                | Aumenta a acessibilidade e adere à realidade dos usuários, mas não inviabiliza o uso inicial.                 |
|                                                 | Exportação de relatórios acadêmicos em formatos padrão (PDF, planilhas).                                                                                                            | Facilita integração com processos administrativos e tomadas de decisão.                                       |
| **Could Have (Desejáveis)**                     | Dashboards comparativos para coordenadores (visão entre turmas).                                                                                                                    | Melhora a análise pedagógica e institucional, mas pode ser evoluído em versões futuras.                       |
|                                                 | Personalização da experiência do usuário (ex.: interface customizável).                                                                                                             | Agrega valor e usabilidade, mas não é indispensável no MVP.                                                   |
| **Won’t Have (Excluídos no momento)**           | Internacionalização (tradução para outros idiomas).                                                                                                                                 | Não é prioridade no estágio inicial de implantação na UniRV.                                                  |
|                                                 | Suporte a alta escalabilidade (uso massivo em múltiplas universidades simultaneamente).                                                                                             | Pode ser tratado em versões posteriores, após validação pedagógica e institucional.                           |
  
---
## 3.3. Escopo, Profundidade e Objetos da Avaliação
- **Escopo Atual:** Avaliação da versão do Pontua utilizada no curso de Medicina da UniRV, tendo como foco as características de segurança e manutenibilidade.  
- **Profundidade:**  
  - *Completude Funcional* → será analisada a cobertura do ciclo avaliativo PBL.  
  - *Substituibilidade* → será analisada a facilidade de transição do uso de planilhas para o Pontua.  

## 3.4. ODS Relacionados
O Pontua se conecta com diferentes **Objetivos de Desenvolvimento Sustentável (ODS)**:  
- **ODS 4 – Educação de Qualidade** → promove avaliações transparentes e aprendizado equitativo.  
- **ODS 9 – Indústria, Inovação e Infraestrutura** → representa inovação tecnológica no setor educacional.  
- **ODS 10 – Redução das Desigualdades** → padroniza critérios avaliativos, diminuindo disparidades.  
- **ODS 16 – Paz, Justiça e Instituições Eficazes** → fortalece a confiança institucional por meio da transparência nos processos.  

--- 

## Integrantes
- Daniel Paz dos Passos - 222021862  
- Gabriel Fenelon Rocha Gonçalves - 211061743  
- Guilherme Gusmão Nepomuceno - 232021516  
- Letícia Assunção Aires Moreira - 190128712  
- Otávio Oliveira de Maya Viana - 211029503  
- Vítor Marconi Trancoso Albuquerque - 222006202  

## Histórico de Versão

| Versão | Data       | Descrição                                             | Autor(s)       |
| ------ | ---------- | ----------------------------------------------------- | -------------- |
| `1.0`  | 28/09/2025 | Criação do artefato e adição da estrutura e conteúdos | Otávio e Vitor |
| `1.1`  | 29/09/2025 | Reestruturação completa do documento                  | Letícia        |

---



# Fase 2 - Especificação da Avaliação

# Aplicação da Metodologia GQM

## Sobre a Metodologia

O modelo GQM (Goal-Question-Metric) é uma metodologia estruturada para definir, analisar e aplicar métricas em projetos de software, garantindo que todas as medições realizadas estejam diretamente relacionadas aos objetivos do projeto.
Essa abordagem promove clareza, foco e rastreabilidade na avaliação da qualidade, permitindo uma análise orientada por metas.

A estrutura do modelo é dividida em três níveis interligados:

* Goal (Objetivo): descreve o propósito da medição, isto é, o que se deseja compreender, avaliar ou melhorar.

* Question (Questão): detalha o objetivo em perguntas específicas que orientam a coleta e a interpretação dos dados.

* Metric (Métrica): define as informações quantitativas ou qualitativas que serão coletadas para responder de forma objetiva às questões formuladas.

No contexto do Pontua, o modelo GQM foi aplicado para estruturar a avaliação da qualidade do software, garantindo que cada métrica estivesse alinhada com os objetivos definidos pela equipe. Essa abordagem permitiu analisar de maneira sistemática aspectos como adequação funcional e portabilidade, fornecendo uma base sólida para identificar pontos fortes e oportunidades de melhoria no sistema. Essa aplicação possibilitou identificar de forma mensurável a adequação funcional e a portabilidade do sistema, evidenciando o quanto o Pontua atende aos requisitos definidos e o quão facilmente pode ser implantado em diferentes ambientes institucionais.

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

---



# Fase 3 - Projeto da Avaliação

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

---



# Fase 4 - Execução da Avaliação

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

<img src="images/Apresentação Pontua 2411.png" alt="Dados dos testes com alunos na UniRV - Comparação de tempo para realização das avaliações entre método tradicional e Pontua" width="90%">
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

---

