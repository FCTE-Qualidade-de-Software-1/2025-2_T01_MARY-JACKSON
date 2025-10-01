
---
title: Fase 1
description: Estabelece os requisitos da avaliação
---


<div style="text-align: center; margin-bottom: 2rem;"> <img src="/docs/public/images/V3_C3.png" alt="Logo do Software Pontua" style="width: 80px; height: auto; display: inline-block;" /> </div>

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

**INCLUIR OS MÓDULOS ABAIXO A ESSE PADRÃO:!**

1. Nome do módulo: Descrição do módulo
   Justificativa de portabilidade
   Justificativa de adaptação funcional
   * tópicos
     
2. Nome do módulo: Descrição do módulo
   Justificativa de portabilidade
   Justificativa de adaptação funcional
   * tópicos 

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
