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
| **Para o propósito de** | Avaliar a adequação funcional conforme os critérios da norma ISO/IEC 25010 |
| **Com respeito a** | Verificar se as funcionalidades implementadas atendem às necessidades especificadas para o apoio à avaliação em metodologias PBL |
| **Do ponto de vista de** | Desenvolvedores responsáveis pela melhoria contínua do sistema |
| **No contexto da** | Qualidade de software |

### Questões Objetivo de Medição 1 - Adequação Funcional

**Q1:** As funcionalidades implementadas no Pontua permitem que os usuários realizem de forma completa as avaliações previstas pelo método PBL?  
**Métrica:** Percentual de funcionalidades essenciais disponíveis e operacionais em relação às especificações definidas.  
**Hipótese Q1:** Pelo menos 90% das funcionalidades definidas nos requisitos estão implementadas e funcionando conforme o esperado. Haindl (2021, pp. 99–100)

**Q2:** As funcionalidades do Pontua atendem adequadamente às necessidades dos professores e estudantes dentro do processo avaliativo do PBL?  
**Métrica:** Grau médio de satisfação dos usuários em relação à adequação das funcionalidades (escala de 1 a 5).  
**Hipótese Q2:** A média de satisfação dos usuários é superior a 4,0. Haindl (2021, pp. 87-88)

**Q3:** O sistema cobre todas as funcionalidades essenciais descritas nos requisitos de apoio à avaliação PBL (por exemplo, registro, pontuação, feedback e geração de relatórios)?  
**Métrica:** Percentual de cobertura funcional em relação aos requisitos documentados.  
**Hipótese Q3:** O Pontua apresenta cobertura funcional superior a 90% em relação aos requisitos estabelecidos. Haindl (2021, pp. 99–100)

## Objetivo de Medição 2 – Portabilidade

| **Campo** | **Descrição** |
|------------|----------------|
| **Analisar** | O aplicativo Pontua |
| **Para o propósito de** | Avaliar a portabilidade do sistema conforme os critérios definidos pela norma ISO/IEC 25010 |
| **Com respeito a** | Verificar a capacidade do software de ser transferido e executado adequadamente em diferentes dispositivos, sistemas operacionais e ambientes institucionais |
| **Do ponto de vista de** | Desenvolvedores e equipe de suporte técnico responsáveis pela manutenção e compatibilidade do aplicativo |
| **No contexto da** | Qualidade de software voltada à acessibilidade, compatibilidade e adaptação em múltiplas plataformas |

### Questões do Objetivo de Medição 2 – Portabilidade

**Q1:** O aplicativo Pontua funciona corretamente em diferentes sistemas operacionais e navegadores?
**Métrica:** Percentual de combinações de sistema operacional e navegador nas quais o sistema opera sem erros críticos.  
**Hipótese Q1:** O Pontua apresenta funcionamento adequado (sem falhas críticas) em pelo menos 95% das combinações testadas. Haindl (2021, pp. 96–97)

**Q2:** O aplicativo é facilmente instalável e configurável em novos dispositivos ou ambientes institucionais?
**Métrica:** Tempo médio necessário para instalação e configuração completa do sistema.  
**Hipótese Q2:** O tempo médio de instalação e configuração não ultrapassa 5 minutos em dispositivos compatíveis.

**Q3:** O Pontua mantém desempenho e integridade dos dados ao ser migrado entre ambientes (por exemplo, diferentes servidores ou instituições)?
**Métrica:** Taxa de sucesso em migrações realizadas sem perda ou corrupção de dados.  
**Hipótese Q3:** A taxa de sucesso em migrações é de 100%, sem perda de dados ou falhas no desempenho.

## Relação entre Objetivos de Medição, Questões e Métricas

| **Objetivo de Medição** | **Questão** | **Métrica** |
|--------------------------|-------------|--------------|
| **Adequação Funcional** | **Q1:** As funcionalidades implementadas no Pontua permitem que os usuários realizem de forma completa as avaliações previstas pelo método PBL? | Percentual de funcionalidades essenciais disponíveis e operacionais em relação às especificações definidas. |
| **Adequação Funcional** | **Q2:** As funcionalidades do Pontua atendem adequadamente às necessidades dos professores e estudantes dentro do processo avaliativo do PBL? | Grau médio de satisfação dos usuários em relação à adequação das funcionalidades (escala de 1 a 5). |
| **Adequação Funcional** | **Q3:** O sistema cobre todas as funcionalidades essenciais descritas nos requisitos de apoio à avaliação PBL (por exemplo, registro, pontuação, feedback e geração de relatórios)? | Percentual de cobertura funcional em relação aos requisitos documentados. |
| **Portabilidade** | **Q1:** O aplicativo Pontua funciona corretamente em diferentes sistemas operacionais e navegadores? | Percentual de combinações de sistema operacional e navegador nas quais o sistema opera sem erros críticos. |
| **Portabilidade** | **Q2:** O aplicativo é facilmente instalável e configurável em novos dispositivos ou ambientes institucionais? | Tempo médio necessário para instalação e configuração completa do sistema. |
| **Portabilidade** | **Q3:** O Pontua mantém desempenho e integridade dos dados ao ser migrado entre ambientes (por exemplo, diferentes servidores ou instituições)? | Taxa de sucesso em migrações realizadas sem perda ou corrupção de dados. |


## Bibliografia

VAN SOLINGEN, Rini; BERGHOUT, Egon. The Goal/Question/Metric Method: A practical guide for quality improvement of software development. London: The McGraw-Hill Companies, 1999.  

Haindl, Philipp. Measuring and Evaluating the Value of Software Features in DevOps. Institute of Business Informatics - Software Engineering, Johannes Kepler University Linz, 2021

## Histórico de Versão

| Versão | Data       | Descrição                                             | Autor(s)       |
| ------ | ---------- | ----------------------------------------------------- | -------------- |
| `1.0`  | 06/10/2025 | Criação do documento, adição da introdução, objetivos de medição e questões de medição | Letícia |
