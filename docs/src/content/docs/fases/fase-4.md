---
title: Fase 4
description: Execução da Avaliação da Qualidade do Software
---

# Execução da Avaliação da Qualidade do Software

Esta etapa apresenta os resultados da execução da avaliação da solução, conforme os objetivos, questões e métricas definidos na Etapa 3.  
Diferente de uma simulação, **os testes foram realizados com usuários reais**, incluindo estudantes e professores que utilizaram o software em cenários reais de uso.

---

# 2. Execução da Avaliação

## 2.1 Objetivo 1 — Adequação Funcional

Avaliar se as principais funcionalidades operam corretamente e entregam resultados esperados nos cenários reais, conforme as necessidades dos usuários.

### 2.1.1 Questões e Métricas

- **M1.1:** Completude funcional  
- **M2.1:** Precisão/correção dos resultados  
- **M3.1:** Falhas encontradas durante os fluxos  
- **M3.2:** Número de defeitos detectados  

### 2.1.2 Execução dos Testes

Cada fluxo foi executado utilizando **casos de teste previamente definidos**, e **todos foram aplicados com usuários reais**, em sessões presenciais e remotas. Participaram:

- 13 estudantes  
- 4 professores  

Os cenários testados refletiram atividades reais realizadas no software:  
- autenticação  
- criação/participação em turmas  
- realização de avaliações  
- acompanhamento de desempenho  
- gerenciamento de critérios  

### 2.1.3 Resultados

| Métrica | Resultado | Critério | Status |
|--------|-----------|----------|--------|
| **M1.1** — Completude | Funcionalidades principais presentes | Todas implementadas | **Atingido** |
| **M2.1** — Precisão | Respostas corretas na maior parte dos fluxos | Operação correta | **Atingido** |
| **M3.1** — Falhas | 2 falhas em fluxos secundários | ≤ 2 | **Atingido** |
| **M3.2** — Defeitos | 3 defeitos | ≤ 1 | **Não atingido** |

### 2.1.4 Análise

A adequação funcional foi satisfatória:  
- Fluxos principais funcionaram conforme o esperado.  
- Usuários relataram boa clareza geral das operações.  
- O maior problema foi a **quantidade de defeitos**, superior ao limite planejado (3 encontrados vs. 1 permitido).  

Defeitos identificados:  
1. Truncamento de feedbacks longos  
2. **Falhas eventuais no módulo de avaliação quando acessado pelo Chrome**  

---

## 2.2 Objetivo 2 — Portabilidade

Avaliar a capacidade do software de funcionar corretamente em diferentes plataformas, navegadores e dispositivos.

### 2.2.1 Questões e Métricas

- **M4.1:** Compatibilidade do sistema  
- **M5.1:** Instalabilidade e configuração  

### 2.2.2 Ambientes Testados

A avaliação foi realizada em dispositivos e navegadores reais utilizados pelos próprios participantes:

- Windows 11 — Chrome  
- Windows 11 — Firefox  
- Linux (Ubuntu) — Firefox  
- Android — Chrome Mobile  

### 2.2.3 Resultados

| Plataforma | Resultado | Observação |
|-----------|-----------|------------|
| Windows (Chrome) | Parcial | **Falhas no módulo de avaliação** (instabilidade e carregamento inconsistente) |
| Windows (Firefox) | Sucesso | Nenhum problema encontrado |
| Linux (Firefox) | Sucesso | Interface estável |
| Android (Chrome) | Sucesso parcial | Pequenas variações de layout |

Métricas:

| Métrica | Resultado | Critério | Status |
|--------|-----------|----------|--------|
| **M4.1** — Compatibilidade | 3 de 4 plataformas estáveis → **75%** | 100% | **Não atingido** |
| **M5.1** — Instalabilidade | Instalação simples | Sem bloqueios | **Atingido** |

### 2.2.4 Análise

A portabilidade demonstrou desempenho aceitável, porém com problemas importantes:

- As **falhas no módulo de avaliação no Chrome** foram relatadas por vários usuários.  
- No Android, apesar de estável, houve pequenas quebras visuais.  

Esses problemas impactaram diretamente o resultado da métrica **M4.1**, tornando-a uma prioridade de correção.

---

# 3. Consolidação dos Resultados

Dos 8 indicadores avaliados:

- **5 foram atingidos**  
- **3 não atingiram o critério mínimo**  
  - M3.2 (defeitos)  
  - M4.1 (compatibilidade)  
  - Falhas no Chrome consideradas críticas para a experiência  

Mesmo com não conformidades, o software demonstrou maturidade suficiente para uso funcional e continuidade do desenvolvimento.

---

# 4. Conclusão da Etapa 4

A avaliação real com usuários comprovou que:

- O software atende grande parte das necessidades funcionais.  
- O módulo de avaliação é o ponto mais crítico, principalmente no Chrome.  
- Problemas encontrados são pontuais e passíveis de correção direta.  

Os resultados fornecem base sólida para priorização de melhorias na Etapa 5, com foco em:

1. Estabilidade do módulo de avaliação  
2. Correção dos defeitos identificados  
3. Revisão de compatibilidade em diferentes plataformas  
