# Etapa 4: Execução da Avaliação da Qualidade do Software Pontua

---

## 1. Introdução

Este documento detalha a execução da avaliação de qualidade do software **Pontua**, realizada entre **11/11/2025 e 19/11/2025**. O processo seguiu rigorosamente o plano de avaliação definido na **Etapa 3**, com foco em validar as características de **Adequação Funcional** e **Portabilidade**.

A execução envolveu a simulação de testes funcionais automatizados, testes de compatibilidade multiplataforma e a coleta de dados quantitativos e qualitativos para aferir as métricas estabelecidas no modelo GQM (Goal-Question-Metric).

## 2. Execução dos Testes e Coleta de Dados

### 2.1. Testes de Adequação Funcional

Foram simulados testes funcionais cobrindo os 7 módulos principais do Pontua. A abordagem focou em validar os fluxos críticos da metodologia PBL para cada perfil de usuário (aluno, professor e coordenador). Abaixo, um resumo executivo dos resultados por módulo:

| Módulo Avaliado | Status da Execução | Resumo dos Achados |
| :--- | :--- | :--- |
| **Autenticação e Login** | Concluído com Sucesso | O fluxo de login, criação de conta e recuperação de senha funcionou conforme o esperado. O sistema se mostrou seguro e robusto. |
| **Turmas e Problemas (Aluno)** | Concluído com Sucesso | Alunos conseguem visualizar suas turmas, acompanhar problemas e verificar notas sem dificuldades. A interface é clara e intuitiva. |
| **Avaliação (Aluno e Professor)** | Concluído com Observações | O processo de avaliação entre pares e autoavaliação é funcional, mas foram identificadas pequenas inconsistências na exibição de feedbacks longos. |
| **Gestão de Turmas (Professor)** | Concluído com Sucesso | Professores conseguem criar turmas, adicionar/remover alunos e gerenciar participantes de forma eficiente. |
| **Gestão de Problemas (Professor)** | Concluído com Observações | A criação e configuração de problemas PBL está funcional. No entanto, a interface para definir critérios de avaliação poderia ser mais flexível. |
| **Módulo de Avaliação (Professor)**| Concluído com Sucesso | A atribuição de notas e a rastreabilidade do processo avaliativo foram validadas com sucesso, garantindo transparência. |
| **Relatórios e Desempenho** | Concluído com Observações | A geração de relatórios de turma funciona, mas a funcionalidade de exportação para PDF apresentou falhas de formatação em relatórios extensos. |

### 2.2. Testes de Portabilidade

Foram simulados testes de compatibilidade nos ambientes definidos na Etapa 3. O objetivo foi garantir que o Pontua ofereça uma experiência consistente em diferentes plataformas.

| Plataforma | Navegador | Resultado da Simulação | Observações |
| :--- | :--- | :--- | :--- |
| Windows 11 | Chrome (última versão) | **Compatível** | Nenhuma inconsistência crítica encontrada. |
| Windows 11 | Firefox (última versão) | **Compatível** | Nenhuma inconsistência crítica encontrada. |
| macOS Sonoma | Safari (última versão) | **Compatível com Pequenos Ajustes** | Identificados pequenos desalinhamentos de CSS em modais. |
| Android 14 | Chrome Mobile | **Compatível** | A experiência responsiva se mostrou fluida e funcional. |
| iOS 18 | Safari Mobile | **Compatível com Pequenos Ajustes** | O componente de upload de arquivos apresentou lentidão em comparação com outras plataformas. |

### 2.3. Pesquisa de Satisfação do Usuário

Foi simulada a aplicação de um questionário (via Google Forms) a um grupo de 20 usuários (10 alunos e 10 professores) para medir a percepção sobre a adequação funcional do software. Os resultados foram utilizados para calcular a métrica M2.

## 3. Resultados das Métricas (GQM)

A seguir, a consolidação dos resultados obtidos para cada métrica definida no plano de avaliação.

### 3.1. Adequação Funcional

| Métrica | Descrição | Critério de Aceitação | Resultado Simulado | Status |
| :--- | :--- | :--- | :--- | :--- |
| **M1** | Cobertura de Funcionalidades | ≥ 90% | **95%** | **Aprovado** |
| **M2** | Satisfação do Usuário | ≥ 4.0 / 5.0 | **3.9 / 5.0** | **Reprovado** |
| **M3** | Corretude Funcional | ≥ 95% | **98%** | **Aprovado** |
| **M4**_ | Defeitos Funcionais | ≤ 5% | **6%** | **Reprovado** |

### 3.2. Portabilidade

| Métrica | Descrição | Critério de Aceitação | Resultado Simulado | Status |
| :--- | :--- | :--- | :--- | :--- |
| **M5** | Compatibilidade Multiplataforma | ≥ 95% | **100%** | **Aprovado** |
| **M6** | Substituibilidade | ≥ 90% | **92%** | **Aprovado** |
| **M7** | Facilidade de Instalação | ≥ 95% | **98%** | **Aprovado** |
| **M8** | Tempo Médio de Adaptação | ≤ 8 h | **6 h** | **Aprovado** |

## 4. Análise dos Resultados e Conclusão

A avaliação geral do Pontua é **positiva**, com **6 das 8 métricas (75%)** atingindo o nível "Aceitável". O critério de sucesso geral (mínimo de 80% das métricas aprovadas) não foi atingido por uma pequena margem, indicando que, embora o software seja robusto, existem pontos de melhoria que demandam atenção.

**Pontos Fortes:**
- **Alta Cobertura Funcional**: O software cobre a maior parte das necessidades do processo PBL.
- **Excelente Portabilidade**: O Pontua funciona bem na maioria das plataformas, garantindo acesso amplo.
- **Estrutura Sólida**: A arquitetura do projeto (frontend/backend) é bem definida, facilitando a manutenção e a substituibilidade de componentes.

**Pontos de Melhoria (Achados):**
1.  **Satisfação do Usuário (M2)**: A nota 3.9, ligeiramente abaixo da meta de 4.0, foi influenciada principalmente por feedbacks sobre a usabilidade da interface de avaliação e a falta de flexibilidade na gestão de critérios.
2.  **Defeitos Funcionais (M4)**: A taxa de 6% de defeitos, acima dos 5% esperados, está relacionada a problemas de baixa criticidade, como as falhas na exportação de relatórios PDF e desalinhamentos de CSS em ambientes específicos (macOS/Safari).

## 5. Recomendações

Com base nos resultados, as seguintes ações são recomendadas para o próximo ciclo de desenvolvimento:

1.  **Prioridade Alta - Refinar a Experiência do Usuário (UX)**: Realizar uma revisão da interface do **Módulo de Avaliação** e da **Gestão de Critérios**, focando em simplificar o fluxo e aumentar a flexibilidade, para assim elevar a métrica de satisfação (M2).

2.  **Prioridade Média - Corrigir Defeitos de Baixa Criticidade**: Alocar recursos para corrigir os bugs identificados, especialmente a **exportação de relatórios PDF** e os **ajustes de CSS para Safari**, a fim de reduzir a taxa de defeitos (M4) e melhorar a percepção de qualidade.

3.  **Prioridade Baixa - Otimizar Performance em iOS**: Investigar a causa da lentidão no upload de arquivos em dispositivos iOS para garantir uma performance uniforme em todas as plataformas.

Ao endereçar esses pontos, o software Pontua tem grande potencial para atingir todos os critérios de excelência em qualidade e consolidar sua proposta de valor no mercado educacional.
