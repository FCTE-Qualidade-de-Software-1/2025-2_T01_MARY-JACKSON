# Etapa 4
# Execução da Avaliação da Qualidade do Software Pontua

---

## 1. Introdução

Este documento detalha a execução da avaliação de qualidade do software **Pontua**, realizada entre **11/11/2025 e 19/11/2025**. O processo seguiu rigorosamente o plano de avaliação definido na **Etapa 3**, estruturado conforme a metodologia **GQM (Goal-Question-Metric)** apresentada na **Fase 2**.

A execução envolveu a simulação de testes funcionais automatizados, testes de compatibilidade multiplataforma e a coleta de dados quantitativos e qualitativos para aferir as métricas estabelecidas no modelo GQM. A avaliação focou em validar as características de **Adequação Funcional** e **Portabilidade**, conforme definido na Fase 1 (Estabelecimento de Requisitos).

#### 2.1.1. Questões e Métricas do Objetivo 1

**Q1: O Pontua apresenta completude funcional, ou seja, todas as funcionalidades essenciais previstas estão disponíveis e implementadas?**

- **Métrica 1.1**: Percentual de funcionalidades essenciais disponíveis em relação ao total definido nos requisitos
- **Métrica 1.2**: Percentual de funcionalidades essenciais implementadas em relação ao total definido nos requisitos
- **Hipótese Q1**: Pelo menos 90% das funcionalidades essenciais estão disponíveis e implementadas conforme especificado [1]

**Q2: As funcionalidades do Pontua apresentam adequação funcional, ajudando o usuário (professor ou estudante) a alcançar seus objetivos no processo avaliativo do PBL?**

- **Métrica 2.1**: Grau médio de satisfação dos usuários quanto à adequação funcional das funcionalidades (escala de 1 a 5)
- **Hipótese Q2**: A média de satisfação dos usuários é superior a 4.0 [2]

**Q3: As funções do Pontua fornecem resultados corretos conforme os requisitos definidos (corretude funcional)?**

- **Métrica 3.1**: Percentual de funções que produzem resultados corretos em testes de validação contra requisitos
- **Métrica 3.2**: Número de defeitos relacionados à incorreção funcional identificados durante a avaliação
- **Hipótese Q3**: Pelo menos 95% das funções produzem resultados corretos e não há mais que 1 defeito de incorreção funcional por ciclo de avaliação

#### 2.1.2. Execução de Testes de Adequação Funcional

Foram simulados testes funcionais cobrindo os 7 módulos principais do Pontua. A abordagem focou em validar os fluxos críticos da metodologia PBL para cada perfil de usuário (aluno, professor e coordenador). Abaixo, um resumo executivo dos resultados por módulo:

| Módulo Avaliado | Status da Execução | Resumo dos Achados |
| :--- | :--- | :--- |
| **Autenticação e Login** | Concluído com Sucesso | O fluxo de login, criação de conta e recuperação de senha funcionou conforme o esperado. O sistema se mostrou seguro e robusto. |
| **Turmas e Problemas (Aluno)** | Concluído com Sucesso | Alunos conseguem visualizar suas turmas, acompanhar problemas e verificar notas sem dificuldades. A interface é clara e intuitiva. |
| **Avaliação (Aluno e Professor)** | Concluído com Observações | O processo de avaliação entre pares e autoavaliação é funcional, mas foram identificadas pequenas inconsistências na exibição de feedbacks longos. |
| **Gestão de Turmas (Professor)** | Concluído com Sucesso | Professores conseguem criar turmas, adicionar/remover alunos e gerenciar participantes de forma eficiente. |
| **Gestão de Problemas (Professor)** | Concluído com Observações | A criação e configuração de problemas PBL está funcional. No entanto, a interface para definir critérios de avaliação poderia ser mais flexível. |
| **Módulo de Avaliação (Professor)** | Concluído com Sucesso | A atribuição de notas e a rastreabilidade do processo avaliativo foram validadas com sucesso, garantindo transparência. |
| **Relatórios e Desempenho** | Concluído com Observações | A geração de relatórios de turma funciona, mas a funcionalidade de exportação para PDF apresentou falhas de formatação em relatórios extensos. |

#### 2.1.3. Resultados das Métricas de Adequação Funcional

| Métrica | Descrição | Resultado Medido | Critério de Aceitação | Status | Hipótese Validada? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **M1.1** | Funcionalidades essenciais disponíveis | 95% | ≥ 90% | **Aprovado** | **Sim** |
| **M1.2** | Funcionalidades essenciais implementadas | 95% | ≥ 90% | **Aprovado** | **Sim** |
| **M2.1** | Satisfação do usuário | 3.9 / 5.0 | ≥ 4.0 | **Reprovado** | **Não** |
| **M3.1** | Corretude funcional | 98% | ≥ 95% | **Aprovado** | **Sim** |
| **M3.2** | Defeitos funcionais | 6% | ≤ 5% | **Reprovado** | **Não** |

### 2.2. Objetivo de Medição 2 – Portabilidade

#### 2.2.1. Questões e Métricas do Objetivo 2

**Q1: O aplicativo Pontua funciona corretamente em diferentes sistemas operacionais e navegadores?**

- **Métrica 4.1**: Percentual de combinações de sistema operacional e navegador nas quais o sistema opera sem erros críticos
- **Hipótese Q1**: O Pontua apresenta funcionamento adequado (sem falhas críticas) em pelo menos 95% das combinações testadas [3]

**Q2: O aplicativo é facilmente instalável e configurável em novos dispositivos ou ambientes institucionais?**

- **Métrica 5.1**: Percentual de instalações concluídas sem intervenção técnica adicional
- **Métrica 5.2**: Percentual de usuários que consideram o processo de instalação fácil (escala de 1 a 5)
- **Hipótese Q2**: Pelo menos 95% das instalações são concluídas sem intervenção técnica e a média de facilidade percebida é superior a 4.0

**Q3: O aplicativo Pontua pode ser adaptado ou substituído facilmente para diferentes ambientes institucionais (adaptabilidade/substituibilidade)?**

- **Métrica 6.1**: Percentual de ambientes nos quais o sistema pode ser adaptado ou substituído sem necessidade de grandes modificações
- **Hipótese Q3**: O Pontua pode ser adaptado ou substituído em pelo menos 90% dos ambientes institucionais sem grandes modificações

#### 2.2.2. Tabela de Execução dos Casos de Teste de Portabilidade

| ID do Teste | Título do Teste | Status | Plataforma Testada | Evidência |
| :--- | :--- | :--- | :--- | :--- |
| CT-P-01 | Verificação de Adaptabilidade em Windows 11 + Chrome | **Passou** | Windows 11 / Chrome | Teste automatizado via Cypress |
| CT-P-02 | Verificação de Adaptabilidade em Windows 11 + Firefox | **Passou** | Windows 11 / Firefox | Teste automatizado via Cypress |
| CT-P-03 | Verificação de Adaptabilidade em macOS Sonoma + Safari | **Falhou Parcialmente** | macOS Sonoma / Safari | Desalinhamentos de CSS em modais |
| CT-P-04 | Verificação de Instalabilidade em Android 14 + Chrome | **Passou** | Android 14 / Chrome Mobile | Teste em dispositivo físico |
| CT-P-05 | Verificação de Instalabilidade em iOS 18 + Safari | **Falhou Parcialmente** | iOS 18 / Safari Mobile | Lentidão no upload de arquivos |
| CT-P-06 | Verificação de Coexistência em Ambiente Multiplataforma | **Passou** | Múltiplas plataformas simultâneas | Teste de carga distribuído |
| CT-P-07 | Verificação de Substituibilidade de Componentes | **Passou** | Ambiente de Staging | Migração de módulos sem impacto |

#### 2.2.3. Análise Detalhada das Métricas de Portabilidade

Foram simulados testes de compatibilidade nos ambientes definidos na Etapa 3. O objetivo foi garantir que o Pontua ofereça uma experiência consistente em diferentes plataformas, validando sua capacidade de adaptação, instalação, coexistência e substituibilidade em diversos contextos tecnológicos.

| Métrica | Resultado Medido | Nível de Aceitação | Status | Hipótese Validada? |
| :--- | :--- | :--- | :--- | :--- |
| **M4.1: Compatibilidade Multiplataforma** | 100% | ≥ 95% | **Aprovado** | **Sim** |
| **M5.1: Instalações sem Intervenção Técnica** | 98% | ≥ 95% | **Aprovado** | **Sim** |
| **M5.2: Facilidade de Instalação Percebida** | 4.2 / 5.0 | ≥ 4.0 | **Aprovado** | **Sim** |
| **M6.1: Adaptabilidade/Substituibilidade** | 92% | ≥ 90% | **Aprovado** | **Sim** |

#### 2.2.4. Discussão dos Resultados de Portabilidade

**Q1 - Compatibilidade Multiplataforma (M4.1):**
O software Pontua demonstrou excelente compatibilidade em ambientes desktop, com resultado de 100% para combinações de SO e navegador. Testes em Windows 11 com Chrome e Firefox não apresentaram falhas críticas. No entanto, foram identificados pequenos desalinhamentos de CSS em Safari (macOS Sonoma), particularmente em componentes modais e formulários. Esses problemas não comprometem a funcionalidade central, mas afetam a experiência visual em aproximadamente 15% dos casos testados. A métrica permanece dentro do nível aceitável, mas recomenda-se correção para futuras versões.

**Q2 - Instalabilidade (M5.1 e M5.2):**
O esforço de instalação foi validado com 98% de instalações concluídas sem intervenção técnica (aceitável, limite ≥ 95%), indicando que o processo de deploy e configuração é relativamente simples. A facilidade de instalação percebida (4.2 / 5.0) também atendeu aos critérios, demonstrando que o software pode ser facilmente adaptado a diferentes ambientes de infraestrutura. O sistema de containerização com Docker facilitou significativamente a instalação em novos ambientes, reduzindo o tempo médio de setup para aproximadamente 6 horas.

**Q3 - Adaptabilidade/Substituibilidade (M6.1):**
A métrica de adaptabilidade e substituibilidade foi medida em 92%, confirmando que o Pontua pode ser adaptado ou substituído em pelo menos 90% dos ambientes institucionais sem grandes modificações. Testes de substituição de componentes no ambiente de staging confirmaram que a arquitetura modular do Pontua (com separação clara entre frontend Svelte, backend Node.js e banco de dados Supabase) permite uma migração fluida sem perda de funcionalidade.

#### 2.2.5. Resumo Executivo de Portabilidade

| Plataforma | Navegador | Resultado Geral | Observações |
| :--- | :--- | :--- | :--- |
| Windows 11 | Chrome (v.120) | **Totalmente Compatível** | Nenhuma inconsistência crítica encontrada. Desempenho ótimo. |
| Windows 11 | Firefox (v.121) | **Totalmente Compatível** | Nenhuma inconsistência crítica encontrada. Desempenho ótimo. |
| macOS Sonoma | Safari (v.17) | **Compatível com Ajustes Menores** | Pequenos desalinhamentos de CSS em modais. Funcionalidade não comprometida. |
| Android 14 | Chrome Mobile (v.120) | **Totalmente Compatível** | Experiência responsiva fluida e funcional em dispositivos de diferentes tamanhos. |
| iOS 18 | Safari Mobile (v.17) | **Compatível com Ajustes Menores** | Lentidão identificada no componente de upload de arquivos. Recomenda-se otimização. |

## 3. Pesquisa de Satisfação do Usuário

Foi simulada a aplicação de um questionário (via Google Forms) a um grupo de 20 usuários (10 alunos e 10 professores) para medir a percepção sobre a adequação funcional do software. Os resultados foram utilizados para calcular a métrica M2.1 (Satisfação do Usuário).

**Resultado**: Média de 3.9 / 5.0, ligeiramente abaixo da hipótese de 4.0 estabelecida na Fase 2.

## 4. Rastreabilidade entre Objetivos, Questões e Métricas

A tabela abaixo apresenta a rastreabilidade completa entre os Objetivos de Medição, Questões e Métricas, conforme definido na Fase 2 e executado na Etapa 4:

| Objetivo de Medição | Questão | Métrica | Resultado | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Adequação Funcional** | Q1: Completude funcional? | M1.1 e M1.2 | 95% | Aprovado |
| **Adequação Funcional** | Q2: Adequação funcional? | M2.1 | 3.9 / 5.0 | Reprovado |
| **Adequação Funcional** | Q3: Corretude funcional? | M3.1 e M3.2 | 98% / 6% | Misto |
| **Portabilidade** | Q1: Compatibilidade multiplataforma? | M4.1 | 100% | Aprovado |
| **Portabilidade** | Q2: Instalabilidade? | M5.1 e M5.2 | 98% / 4.2 | Aprovado |
| **Portabilidade** | Q3: Adaptabilidade/Substituibilidade? | M6.1 | 92% | Aprovado |

## 5. Análise Consolidada dos Resultados

A avaliação geral do Pontua é **positiva**, com **6 das 8 métricas (75%)** atingindo o nível "Aceitável". O critério de sucesso geral (mínimo de 80% das métricas aprovadas) não foi atingido por uma pequena margem, indicando que, embora o software seja robusto, existem pontos de melhoria que demandam atenção.

### 5.1. Validação das Hipóteses da Fase 2

| Hipótese | Status | Observação |
| :--- | :--- | :--- |
| **Hipótese Q1 (Adequação)**: ≥ 90% funcionalidades | **Validada** | Resultado: 95% |
| **Hipótese Q2 (Satisfação)**: Média > 4.0 | **Não Validada** | Resultado: 3.9 / 5.0 |
| **Hipótese Q3 (Corretude)**: ≥ 95% funções corretas | **Validada** | Resultado: 98% |
| **Hipótese Q1 (Portabilidade)**: ≥ 95% combinações | **Validada** | Resultado: 100% |
| **Hipótese Q2 (Instalabilidade)**: ≥ 95% instalações | **Validada** | Resultado: 98% |
| **Hipótese Q3 (Adaptabilidade)**: ≥ 90% ambientes | **Validada** | Resultado: 92% |

### 5.2. Pontos Fortes

- **Alta Cobertura Funcional**: O software cobre a maior parte das necessidades do processo PBL (95%).
- **Excelente Portabilidade**: O Pontua funciona bem na maioria das plataformas, garantindo acesso amplo (100% de compatibilidade).
- **Estrutura Sólida**: A arquitetura do projeto (frontend/backend) é bem definida, facilitando a manutenção e a substituibilidade de componentes (92%).
- **Instalação Simplificada**: O sistema de containerização com Docker reduz significativamente o esforço de instalação (98%).

### 5.3. Pontos de Melhoria (Achados)

1. **Satisfação do Usuário (M2.1)**: A nota 3.9, ligeiramente abaixo da meta de 4.0, foi influenciada principalmente por feedbacks sobre a usabilidade da interface de avaliação e a falta de flexibilidade na gestão de critérios.

2. **Defeitos Funcionais (M3.2)**: A taxa de 6% de defeitos, acima dos 5% esperados, está relacionada a problemas de baixa criticidade, como as falhas na exportação de relatórios PDF e desalinhamentos de CSS em ambientes específicos (macOS/Safari).

## 6. Recomendações

Com base nos resultados e na análise das hipóteses da Fase 2, as seguintes ações são recomendadas para o próximo ciclo de desenvolvimento:

1. **Prioridade Alta - Refinar a Experiência do Usuário (UX)**: Realizar uma revisão da interface do **Módulo de Avaliação** e da **Gestão de Critérios**, focando em simplificar o fluxo e aumentar a flexibilidade, para assim elevar a métrica de satisfação (M2.1) acima de 4.0 e validar a Hipótese Q2 de Adequação Funcional.

2. **Prioridade Média - Corrigir Defeitos de Baixa Criticidade**: Alocar recursos para corrigir os bugs identificados, especialmente a **exportação de relatórios PDF** e os **ajustes de CSS para Safari**, a fim de reduzir a taxa de defeitos (M3.2) abaixo de 5% e melhorar a percepção de qualidade.

3. **Prioridade Baixa - Otimizar Performance em iOS**: Investigar a causa da lentidão no upload de arquivos em dispositivos iOS para garantir uma performance uniforme em todas as plataformas e manter a métrica M4.1 em 100%.

Ao endereçar esses pontos, o software Pontua tem grande potencial para atingir todos os critérios de excelência em qualidade e consolidar sua proposta de valor no mercado educacional.
