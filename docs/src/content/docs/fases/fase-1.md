
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
