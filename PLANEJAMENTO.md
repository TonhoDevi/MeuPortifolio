# Planejamento de melhorias — Portfólio

Documento para você aplicar as mudanças **manualmente**. Cada seção traz: o estado atual, o que mudar, o porquê e, quando útil, o trecho de HTML pronto para colar em `index.html`.

> Nada neste documento foi aplicado no código. Veja [0. Estado do código](#0-estado-do-código).

---

## Índice

0. [Estado do código](#0-estado-do-código)
0.1. [Decisões da entrevista (B1–B6)](#01-decisões-da-entrevista-b1b6)
0.2. [Decisões da entrevista (B7–B12)](#02-decisões-da-entrevista-b7b12)
1. [Resumo das divergências encontradas](#1-resumo-das-divergências-encontradas)
2. [Hero](#2-hero)
3. [Sobre mim](#3-sobre-mim)
4. [Experiência](#4-experiência)
5. [Formação](#5-formação)
6. [Stack](#6-stack)
7. [Projetos](#7-projetos)
8. [Contato](#8-contato)
9. [Design (extras opcionais)](#9-design-extras-opcionais) · 9.1 [Direção visual elegante](#91-direção-visual-elegante-e-sofisticada-decidido-em-b11) · 9.2 [Tema e idioma](#92-modo-escuroclaro-e-troca-de-idioma-pten)
10. [Perguntas em aberto](#10-perguntas-em-aberto)
11. [Checklist final](#11-checklist-final)

---

## 0. Estado do código

**Nenhuma mudança deste documento está aplicada.** O código (`index.html`, `styles.css`, `script.js`) está idêntico ao último commit original (`59ede02`).

Dois commits de teste (redesign visual e experiência) foram feitos e depois **revertidos** a pedido. Eles continuam no histórico da branch caso queira consultar como referência (`git show 898ecbf` e `git show 08a9831`), mas não estão ativos.

---|---|
| Redesign visual | Reescrita do `styles.css`, scrollspy no menu, barra de progresso de leitura, spotlight nos cards, grades 2×2 na Stack e nos Projetos, `prefers-reduced-motion`. Arquivos: `styles.css`, `script.js`, uma linha no `index.html` (`#scrollProgress`). |
| Experiência | Seção Experiência reescrita (Avanade, Fuctura, F BD3), selo do hero trocado e primeiro parágrafo do "Sobre" reescrito. Arquivos: `index.html`, 4 linhas no `styles.css`. |

**Ainda NÃO feito** (é o que este documento planeja): cards de projeto, stack, hero (números), contato, formação.

---

## 0.1. Decisões da entrevista (B1–B6)

Fatos confirmados por você. Quando este bloco contradiz o resto do documento, **vale este bloco**.

### Datas e situação atual

| Fato | Valor |
|---|---|
| Avanade | Início em **3 de novembro de 2026**; Júnior direto; híbrido em Recife; Java full stack, principalmente Spring Boot |
| Avanade, projeto | Ainda não começou; vai atuar em projeto do **setor financeiro**. **Não citar o nome do banco** (citar "setor financeiro" é permitido) |
| Fuctura | Fev 2026 – **Set 2026** (você saiu; não é mais "Presente") |
| F BD3 | Set 2025 – Ago 2026 |
| Hoje (out/2026) | Sem vínculo ativo até 3/11. O selo "Disponível" do hero continua errado; usar uma frase **sem data** sobre a Avanade (ver 2.1) |

### O que NÃO vai entrar no portfólio

- Nada sobre o ex-chefe nem sobre o motivo da saída da F BD3.
- Nada de "10 mil downloads" repetido; aparece **no máximo uma vez**.
- "Fui o melhor da instituição": removido (não é comprovável).
- "Alunos contratados": removido (não é comprovável).
- Nome do banco e nome de cliente da Avanade.
- Nome "BOPE" nos textos novos: usar **"órgão de segurança pública"** (o nome já existente no site pode ser trocado).

### Texto aprovado por experiência

**Avanade** (início 03/11/2026): `Engenheiro de Software Júnior · Híbrido, Recife`. Foco em Java full stack, com ênfase em Spring Boot. Sem tópicos de entrega (ainda não começou). Se quiser um tópico, o único seguro é: *"Atuação prevista em projeto do setor financeiro."*

**Fuctura** (Fev 2026 – Set 2026), Professor de Programação:
- 6 turmas, mais de 200 alunos.
- Conteúdo ministrado: Java (POO, coleções), Spring Boot, SQL, PostgreSQL, Hibernate, JDBC, JPA, Git, Gitflow e arquitetura.
- Todo o material foi produzido por você: apostilas, questionários e fichas de exercícios.
- Feedback positivo de alunos e coordenação (sem o "melhor da instituição").

**F BD3 Ltda** (Set 2025 – Ago 2026), Desenvolvedor de Software / Tech Lead:
- Responsável técnico em time de **4 desenvolvedores** no *Bíblia 3D*, definindo padrões de código e arquitetura.
- Refatorou toda a base, que não funcionava mais por ser muito antiga, para uma versão mais atual e acessível da Unity.
- Backend de um sistema de **órgão de segurança pública** (API REST em Java/Spring Boot + PostgreSQL), que substituiu a organização das escalas de ronda feita por WhatsApp. Usado por **50+ membros** e em produção.

> Sugestão de organização: o sistema de segurança pública pode virar um **item próprio** ou ficar só como card de projeto. Escolha um dos dois para não repetir.

### Projeto: Distribuidora Atacadista

- Arquitetura: **em camadas** (não hexagonal). Não escrever "hexagonal" neste projeto.
- Seu outro projeto atual (com Kafka) é o que usa **hexagonal**.
- Descrição: projeto de estudo de microsserviços.
- **Pontos técnicos aprovados** (use 4 ou 5 no card, o resto em página de estudo de caso):
  1. Baixa de estoque atômica: `UPDATE ... WHERE stock_quantity >= :quantity`, sem estoque negativo em pedidos concorrentes e sem lock explícito.
  2. Compensação de estoque quando o pedido falha, assumindo a limitação de não haver transação distribuída.
  3. Máquina de estados do pedido (`CREATED → CONFIRMED → SHIPPED → DELIVERED`; `CANCELED`), com 409 em transição inválida.
  4. Circuit Breaker + TimeLimiter (abre com 50% de falha em janela de 5 chamadas, 10 s aberto, timeout de 3 s).
  5. Segurança: BCrypt, mensagem de login genérica contra *user enumeration*, admin por seed com senha em variável de ambiente, JWT validado no Gateway e segunda camada no `auth-service`.
  6. Total e preço calculados no servidor, nunca aceitos do cliente.
  7. Contextos separados: `User` (quem loga) e `Customer` (dado de negócio).
  8. Sem FK entre bancos de serviços diferentes; integridade garantida na aplicação.
- **Prints do Grafana: decidido não usar** no portfólio (ficam só no seu arquivo pessoal).

### Projeto: Tatanea Temple

- **~15 usuários ativos** (uso real, mais o seu círculo pessoal). Pode aparecer no card.
- **História de engenharia (estudo de caso):**
  - Problema: a consulta de fichas de personagem, que têm muitas tabelas relacionadas, exigia cerca de 12 idas ao banco por requisição.
  - A primeira medição foi de **2 min 56 s** por consulta (conforme seu print; não 50 s).
  - Correção: consultas com `INNER JOIN`, e banco movido do Brasil para **US West**, mesma região da API.
  - Resultado: cerca de **4 s** por requisição.
  - Você mediu com testes repetidos mantendo a API acordada, então não era o *cold start* do Render.
  - **Cache no frontend (verificado no código):**
    - **Pinia** guarda o compêndio (classes, raças, talentos, alquimia) em memória, com uma flag `carregado`: a API só é chamada na primeira vez. Detalhes ficam em cache por id, e existe `recarregar()` para limpar e buscar de novo. O cache vive só na aba; F5 limpa.
    - **`<keep-alive>`** (máx. 6 telas) nas telas de personagem: ao voltar, o Vue mantém o componente e o estado, sem refazer a busca.
    - **`localStorage`** guarda token e usuário (login sobrevive ao F5) e um rascunho da ficha como rede de segurança antes de a gravação chegar ao backend, que usa **versionamento otimista**.
  - **Atenção:** o cache **não** compara com o banco para decidir se atualiza. Ele evita chamadas repetidas. Não escreva "sincroniza só quando há diferença".
- **Segurança:** limite de tamanho nos campos de texto, limite de peso de imagens, e cota máxima de objetos por conta, contra abuso e lotação do banco.
- Outros: migração de banco via backup, melhoria da API, uso correto de JWT.
- **Parte favorita:** a ficha de personagem (muitas regras de negócio, otimizada e visualmente cuidada).
- **Aviso no card:** o backend dorme no Render; o primeiro acesso pode demorar cerca de 1 min.
- **Ponto verificado:** o cache do compêndio é em memória por flag, não por comparação com o banco (ver acima). Texto do card ajustado.
- **Conferir:** o README do Tatanea diz que a ficha só salva ao clicar em "Salvar progresso", mas o código tem rascunho no `localStorage` (autosave local). Vale deixar o README consistente: "rascunho local automático; gravação no servidor sob demanda".

### Pendências desta rodada

- ~~Mecanismo do cache~~: resolvido (ver Tatanea).
- ~~Rótulo do hero~~: **`1,5 ANO PROGRAMANDO`** (decidido).
- Bloco da Avanade escondido: ver seção 4.1.
- ~~Prints do Grafana e do print dos 2 min 56 s~~: **não serão usados**.

---

## 0.2. Decisões da entrevista (B7–B12)

Mesma regra do 0.1: quando contradiz o resto do documento, **vale este bloco**.

### Projeto novo: Bank-AtlasTT (B7)

| Item | Valor |
|---|---|
| Natureza | Mini banco digital **educacional**, dados fictícios, sem dinheiro real, sem Pix |
| Base | Java 21, Spring Boot 4.1.1, **arquitetura hexagonal**, TDD no domínio |
| Dados | PostgreSQL 16 + Flyway; MongoDB (extrato); Redis (cache e idempotência) |
| Mensageria | Kafka em modo KRaft; evento `TransferenciaRealizada` versionado |
| Observabilidade | Actuator, Micrometer, OpenTelemetry, Grafana LGTM |
| Qualidade | JUnit, Mockito, Testcontainers, GitHub Actions |
| Segurança (Fase 7) | Spring Security, JWT, BCrypt |
| Status | Fase 0 concluída, Fase 1 em andamento. Você pretende terminar a Fase 1 esta semana |

**Regra de honestidade para o card:** só afirmar o que já existe no dia em que você publicar. Hoje, Kafka, MongoDB, Redis e observabilidade são **planejados** (Fases 2 a 5). Atualize a frase de status quando avançar de fase.

**Texto sugerido** (ajuste o status na hora de publicar):

> Mini banco digital educacional, com dados fictícios, em Java 21 e Spring Boot 4. Arquitetura hexagonal com domínio desenvolvido em TDD. Transferências publicam eventos no Kafka; o extrato é montado em MongoDB, com idempotência e cache em Redis e rastreamento ponta a ponta com OpenTelemetry e Grafana. Em desenvolvimento (Fase 1 de 8).

- **Rótulo:** `EM DESENVOLVIMENTO · ARQUITETURA HEXAGONAL`
- **Tags:** `Java 21` `Spring Boot` `Hexagonal` `PostgreSQL` `Kafka` `MongoDB` `Redis` `OpenTelemetry` `Testcontainers` (se parecer demais, corte para 7)
- **Link:** preciso da URL do repositório (ver pendências)
- **Posição:** sugestão de manter a Distribuidora como destaque até o Bank-AtlasTT chegar na Fase 3 ou 4, e então trocar. Decisão sua.
- **Diferencial para citar:** domínio sem framework, testado sem Spring, portas e adaptadores; fases documentadas com decisões ("o que foi decidido e por quê").

### Game dev fora do portfólio (B8)

Decisão: **remover qualquer associação com game dev**. Consequências no plano:

| Onde | Ação |
|---|---|
| Contato | Remover o link do **itch.io** |
| Stack | Não listar Unity nem Godot. **C#** pode ficar (ver B9), sem mencionar jogos |
| Ícones em `assets/` | Não usar `Unity.svg` nem `Godot Engine.svg` |
| História pessoal | Não usar a origem "queria ser gamedev" |
| Texto do Bíblia 3D | Escrever **"aplicativo educativo em Realidade Aumentada"**, nunca "jogo". Seu currículo diz "jogo educativo"; vale alinhar |
| Card do Bíblia 3D | **Recomendação: remover o card** e manter só a linha na Experiência (menos game dev, menos repetição). Falta sua confirmação |
| Tatanea Temple | **Pode ficar**: é ferramenta de apoio a RPG de mesa (fichas e compêndio), não desenvolvimento de jogos |
| CodeQuest | Pergunta aberta: é "plataforma de ensino com gamificação" (não é game dev), mas usa Kotlin (nível básico). Manter ou tirar? |

### Níveis de domínio (B9)

Em vez de pills todas iguais, **separar por nível**. Proposta de legenda:

| Nível | Tecnologias |
|---|---|
| **Forte** (destaque verde/dourado) | Java, Spring Boot, JUnit 5, Autenticação (Spring Security, JWT, BCrypt) |
| **Confortável** | Mensageria (RabbitMQ), Eureka / Spring Cloud, PostgreSQL, Docker, Git/GitHub, SQL, JPA/Hibernate, Flyway, Mockito, Gitflow |
| **Estudando / em prática no projeto atual** | Arquitetura hexagonal, Kafka, observabilidade (OpenTelemetry, Grafana), resiliência (Resilience4j), MongoDB, Redis, Testcontainers |
| **Básico** | Python, Kotlin, Node.js, JavaScript (projetos pequenos de estudo) |
| **C#** | Uso real no app educativo em RA (mencionar junto da Experiência, não na Stack principal, se quiser reduzir a associação com games) |

Observações:
- **Angular e Vue** não foram classificados por você. Preciso do nível (provavelmente "Confortável" ou "Básico").
- **GitHub Actions**: entra como ferramenta (CI do Bank-AtlasTT; e já criou um bot que mantinha o Tatanea Temple acordado no Render). A história do bot é boa para o estudo de caso, como solução criativa ao *cold start* do plano gratuito.
- **Cloud (Azure, AWS, GCP):** nenhuma. **Não listar.** Como a Avanade é parceira Microsoft, uma meta de estudo (por exemplo AZ-900) seria um bom próximo passo, mas é só ideia para você, não para o site.
- **Ferramentas de IA (opcional):** Claude, Claude Code, Gemini e NotebookLM no dia a dia. As de uso casual (Meta, ChatGPT, DeepSeek) **não entram**. Se quiser, uma linha em Stack: "IA no fluxo de desenvolvimento: Claude Code, Gemini, NotebookLM".
- Isso muda o "Sobre": a frase "arquiteturas distribuídas em nuvem" está acima do que você pratica. Texto sugerido: *"Meu foco está em backend com Java e Spring Boot: APIs REST, microsserviços, segurança, testes automatizados e arquitetura hexagonal."*

### Formação e outras experiências (B10)

| Item | Detalhe | Decisão |
|---|---|---|
| Certificado Java Full Stack | Fuctura | Já existe no cartão "Dev Java Full Stack"; pode escrever "Certificado" |
| Engenharia de Software | Estácio, **3º módulo** | Pode escrever "Cursando · 3º módulo" |
| Gestão Financeira (Tecnólogo) | Unifateci, 2023–2025 | **Destacar**: diferencial (finanças + software), combina com a vaga no setor financeiro |
| **Gerente Financeiro** | **Bens Soluções Sustentáveis** (empresa júnior da UFPE, não remunerada), jun/2022 – jun/2023 | Adicionar. Rotular **"Experiência voluntária"** e deixar claro que foi empresa júnior |
| Engenharia Mecatrônica | Federal, **não concluída** (cancelada) | **Opcional.** Sugestão: uma linha discreta em Formação, "Cursado, não concluído", ou só mencionar na história pessoal. Mostra base técnica, mas precisa ser honesta. Decisão sua |

Pendências desta parte: instituição exata e período da Mecatrônica (é a UFPE?).

### Posicionamento e tom (B11)

- **Quero ser lembrado como:** Backend.
- **Frase sua:** "Um profissional confiável e competente..." Sugestão: **mostrar em vez de afirmar**. "Pleno das minhas capacidades" soa pretensioso para um júnior. Versão de posicionamento: *"Desenvolvedor backend focado em código confiável, testado e bem arquitetado."*
- **História pessoal sem game dev (proposta, para você aprovar):**

> Venho de áreas diferentes, entre elas gestão financeira e engenharia mecatrônica. Ao entrar na programação, gostei tanto que decidi seguir carreira, e encontrei no backend o lugar onde mais gosto de resolver problemas.

- **Objetivo de 2 anos:** tornar-se sênior e contribuir para o mercado nacional. Sugestão de texto curto no Sobre: *"Meu objetivo é evoluir até sênior e contribuir com o mercado de tecnologia brasileiro."*
- **Tom:** **elegante e com ar sofisticado** (ver seção 9.1, nova direção visual).

### Contato, site e recursos (B12)

| Item | Decisão |
|---|---|
| E-mail | Manter **antoniohenriquebn@hotmail.com** (profissional) |
| Site | Você informou `https://tatanea-temple.vercel.app/`. **Esse endereço é o app do Tatanea Temple**, e já está no card. Falta a URL **do portfólio** (ver pendências) |
| Botão de idioma PT/EN | **Sim.** Plano na seção 9.2 |
| Modo escuro/claro | **Sim.** Plano na seção 9.2 |
| Blog | Talvez. **Recomendação: não agora.** Alternativa leve: seção "Guias de estudo" com links para os guias que você já escreveu na Distribuidora (`docs/JWT.md`, `TESTES.md`, `HTTP-STATUS.md`, `POO.md`, `ANOTACOES.md`). Conteúdo pronto, sem manutenção de blog |

### Pendências novas

1. URL do **portfólio** (onde está hospedado).
2. URL do repositório do **Bank-AtlasTT**.
3. Manter ou **remover o card do Bíblia 3D** (recomendado remover).
4. Manter ou tirar o **CodeQuest**?
5. Nível de **Angular** e **Vue**.
6. **Mecatrônica:** qual federal e em que período? Entra no site ou só na história?
7. Aprova a **história pessoal** sem game dev?
8. Aprova trocar o **verde Spring** por uma paleta elegante (dourado champanhe)? Ver 9.1.
9. Na seção de contato, o botão do itch.io sai. Quer substituir por algo (por exemplo, um link para o repositório do Bank-AtlasTT)?

---

## 1. Resumo das divergências encontradas

Comparação entre o portfólio e os READMEs reais dos dois repositórios.

| Item | Portfólio (antes) | Realidade (README) | Ação |
|---|---|---|---|
| Distribuidora: mensageria | RabbitMQ **e Kafka** | Só RabbitMQ | Tirar Kafka das tags do card (mantê-lo na Stack, ver item 6) |
| Distribuidora: natureza | "Ecossistema B2B" | Projeto de aprendizado, não está em produção | Reposicionar o texto |
| Distribuidora: frontend | Não citado | Angular 22 + Material | Citar |
| Distribuidora: tecnologias | Incompleto | Gateway, Flyway, JWT/roles, Testcontainers, Grafana, Swagger, 55 testes | Completar |
| Tatanea: tecnologias | JavaScript, Supabase, PostgreSQL, Vercel | Java 21, Spring Boot 4, Vue 3, Pinia, JWT, Flyway; deploy em Render + Vercel + Supabase | Corrigir tags e descrição |
| Stack geral | Sem Angular, Vue, TypeScript, Render, Swagger | Aparecem nos projetos | Adicionar |
| Stack geral | Kafka listado | Em uso em projeto novo, ainda em criação | **Manter** em "conhecidas" |
| Hero | "Disponível para novas oportunidades" | Você agora está na Avanade | Trocar |
| Experiência | 1 item misturado | 3 empresas/CNPJs diferentes | Separar |
| Bíblia 3D | Repetido em hero, sobre, experiência e projetos | — | Reduzir |

---

## 2. Hero

### 2.1 Selo de status

- **Antes:** `Disponível para novas oportunidades`
- **Decisão:** sem data e **sem o nome da Avanade**. Texto: `Engenheiro de Software Jr. · Recife`. Você troca no mês que vem.
- **Opções sem data:**
  - `Engenheiro de Software Jr. · Avanade` (a partir de 03/11/2026, quando for verdade)
  - `Chegando na Avanade` (para usar nas próximas semanas, até começar)
  - `Engenheiro de Software Jr. · Recife` (neutra, vale antes e depois)
- **Sugestão:** usar a terceira agora e trocar pela primeira no dia 3 de novembro.

```html
<div class="badge-status reveal">
  <span class="status-dot"></span>
  Engenheiro de Software Jr. · Recife
</div>
```

### 2.2 Título de cargo (`.role-title`)

Atual: `Backend Developer · Java & Spring Ecosystem · Microservices`

Sugestão (manter, ajustando só se quiser incluir o front): 
`Software Engineer · Java & Spring · Microservices`

### 2.3 Subtítulo (`.subtitle`)

Atual: "Especialista no ecossistema Java/Spring…"

Pontos de atenção:
- "Especialista" é uma palavra forte para um perfil júnior. Sugestão: **"Foco no ecossistema Java/Spring"**.
- "Instrutor técnico" pode continuar, já que você é professor na Fuctura.

Texto sugerido:

> Foco no ecossistema Java/Spring, com interesse em arquitetura de microsserviços, resiliência de sistemas e soluções escaláveis. Professor de programação e entusiasta de desenvolvimento orientado a alta performance.

### 2.4 Faixa de números (`.facts`)

| Número | Rótulo | Situação |
|---|---|---|
| ~~`4+`~~ → `1,5` | ~~ANOS PROGRAMANDO~~ → `ANO E MEIO PROGRAMANDO` | **Decidido.** Mantém a conta honesta (7 meses de estudo + ~1 ano de trabalho) |
| `200+` | Alunos capacitados | OK |
| `6` | Turmas lecionadas | OK |
| `10K+` | Downloads em produção | OK, mas é o Bíblia 3D: ver nota abaixo |

> **Decidido: `1,5 ANO PROGRAMANDO`.** Nota anterior, mantida para referência:
>
> **Nota sobre o rótulo do número (decisão: 7 meses de estudo + 1 ano como programador):**
> - Como **profissional** (F BD3 desde Set 2025), o tempo real é **cerca de 1 ano**; somando os 7 meses de estudo dá **cerca de 1 ano e 7 meses**. Chamar de "1,5 ano como profissional" mistura as duas contagens, e um entrevistador pode estranhar.
> - Rótulos honestos, escolha um: `1,5 ANO PROGRAMANDO` (conta o estudo) ou `1+ ANO COMO PROFISSIONAL` (só o trabalho).
> - Na Avanade esse número vai crescer sozinho; revise em 2027.

> **Nota de repetição:** o 10K+ já aparece no hero e na experiência. Se quiser reduzir o Bíblia 3D, uma opção é trocar o 4º número por algo que seja só seu, por exemplo `7` microsserviços na Distribuidora ou `55` testes unitários. Decisão sua.

---

## 3. Sobre mim

Já reescrevi o primeiro parágrafo na branch. Texto final proposto para os dois parágrafos:

> Engenheiro de Software Júnior na **Avanade** (a partir de 03/11/2026) e graduando em Engenharia de Software pela Estácio. Atuei como professor de programação na **Fuctura Tecnologia**, capacitando desenvolvedores em Java e Python.
>
> Minha especialidade reside na criação de **arquiteturas distribuídas em nuvem**, utilizando Spring Cloud, mensageria (RabbitMQ/Kafka), mensuração de resiliência e boas práticas de persistência relacional.

Pontos de atenção:
- O segundo parágrafo diz "arquiteturas distribuídas **em nuvem**", mas a Distribuidora roda em Docker Compose local. Sugestão de ajuste honesto: **"arquiteturas distribuídas"** (sem "em nuvem") ou **"arquiteturas de microsserviços"**.
- "Minha especialidade reside" soa pesado. Alternativa: **"Meu foco está em"**.

Cartão lateral (`.about-card`): Localização, Idiomas, Atuação. Conferir se "Remoto / Híbrido / Presencial" ainda é verdade agora que você está empregado.

---

## 4. Experiência

Ordem: do mais recente para o mais antigo. Cada empresa/CNPJ é um item separado.

| # | Cargo | Empresa | Período |
|---|---|---|---|
| 1 | Engenheiro de Software Júnior | Avanade · Híbrido, Recife | Nov 2026 (início em 03/11) |
| 2 | Professor de Programação | Fuctura Tecnologia · Recife, PE | Fev 2026 – Set 2026 |
| 3 | Desenvolvedor de Software | F BD3 Ltda · Recife, PE | Set 2025 – Ago 2026 |

### Item 1 — Avanade (pendente de informação)

Dados confirmados: início em 03/11/2026, híbrido em Recife, Java full stack com foco em Spring Boot, setor financeiro (sem citar o banco). **Não há tópicos de entrega ainda.** Se for descrever, sugiro 1–2 tópicos curtos, só do que você pode divulgar (muitas consultorias restringem detalhes de cliente).

### Item 2 — Fuctura

- Conduzi **6 turmas de Java e Python (200+ alunos)**, criando conteúdo didático, exercícios práticos e acompanhando o desenvolvimento individual de cada aluno.
- Conteúdos: POO, coleções, Spring Boot, SQL/PostgreSQL, Hibernate, JDBC, JPA, Git, Gitflow e arquitetura. Todo o material (apostilas, questionários e fichas de exercícios) foi produzido por mim.

### Item 3 — F BD3 Ltda

- Responsável técnico, em time de 4 desenvolvedores, pela base de código do *Bíblia 3D*, jogo educativo em Realidade Aumentada publicado na Google Play. Defini padrões de código e arquitetura e refatorei a base inteira, que já não funcionava por ser muito antiga, para uma versão mais atual e acessível da Unity.
- Contribuí no backend de um sistema de **órgão de segurança pública** (Java/Spring Boot e PostgreSQL), que substituiu a organização das escalas de ronda por WhatsApp. Em produção, com mais de 50 usuários.

### HTML de referência (um item da timeline)

```html
<div class="timeline-item reveal">
  <div class="timeline-header">
    <h3 class="timeline-role">Desenvolvedor de Software</h3>
    <span class="timeline-date">Set 2025 – Ago 2026</span>
  </div>
  <div class="timeline-meta">F BD3 Ltda · Recife, PE</div>
  <ul>
    <li>Responsável técnico pela base de código do <em>Bíblia 3D</em>…</li>
    <li>Contribuí no backend de um sistema de <strong>órgão de segurança pública</strong>…</li>
  </ul>
</div>
```

Dica visual: se usar o `styles.css` novo, itens consecutivos já ganham espaçamento via `.timeline-item + .timeline-item`.

### Ideia opcional: tags de tecnologia por experiência

Dentro de cada item, depois da `<ul>`, usar o componente `.tags` que já existe:

```html
<div class="tags">
  <span class="tag">Unity</span>
  <span class="tag">C#</span>
  <span class="tag">Java</span>
  <span class="tag">Spring Boot</span>
  <span class="tag">PostgreSQL</span>
</div>
```

---

### 4.1 Bloco da Avanade escondido (ativar só após a carteira assinada)

Plano: deixar tudo pronto no código, **invisível**, e só liberar quando o vínculo for real. Sugestão técnica: usar o atributo `hidden` do HTML, que remove o item da tela sem apagar nada (um `display: none` nativo).

**1) Item da timeline (em `index.html`, no topo da `<div class="timeline">`, antes da Fuctura):**

```html
<!-- AVANADE: remova o atributo hidden quando a carteira for assinada -->
<div class="timeline-item reveal" id="exp-avanade" hidden>
  <div class="timeline-header">
    <h3 class="timeline-role">Engenheiro de Software Júnior</h3>
    <span class="timeline-date">Nov 2026 – Presente</span>
  </div>
  <div class="timeline-meta">Avanade · Híbrido, Recife</div>
  <ul>
    <li>Atuação em Java full stack, com foco em Spring Boot, em projeto do setor financeiro.</li>
  </ul>
</div>
```

> Se não quiser nenhum tópico, apague o `<ul>` inteiro (o texto acima é o único tópico seguro: sem nome de banco e sem detalhe de cliente).

**2) Selo do hero (`.badge-status`):**
- Agora: `Engenheiro de Software Jr. · Recife`
- Ao ativar: `Engenheiro de Software Jr. · Avanade`

**3) Primeiro parágrafo do "Sobre":**
- Agora (sem Avanade): `Engenheiro de Software em formação pela Estácio, com experiência como desenvolvedor e professor de programação. Foco em Java e no ecossistema Spring.`
- Ao ativar: `Engenheiro de Software Júnior na **Avanade** e graduando em Engenharia de Software pela Estácio. Atuei como professor de programação na **Fuctura Tecnologia**, capacitando desenvolvedores em Java e Python.`

**4) Checklist de ativação (no dia em que a carteira for assinada):**
- [ ] Remover `hidden` de `#exp-avanade`
- [ ] Trocar o selo do hero
- [ ] Trocar o primeiro parágrafo do Sobre
- [ ] Rever o texto do Contato (item 8)
- [ ] Conferir o visual no celular

**Observação:** o conteúdo escondido continua legível no código-fonte da página (qualquer pessoa pode abrir "Ver código-fonte"). Como o texto proposto não tem nenhum dado sigiloso, não há risco. Evite colocar nome do banco ou de cliente nesse bloco, mesmo escondido.

---

## 5. Formação

Cartões atuais:

| Curso | Instituição | Período |
|---|---|---|
| Engenharia de Software | Estácio | 2025 – Cursando |
| Dev Java Full Stack | Fuctura Tecnologia | 2025 |
| Gestão Financeira (Tecnólogo) | Unifateci | 2023 – 2025 |

Sem mudanças obrigatórias. Se tiver certificações (Azure, Spring, Java), este é o lugar para um quarto cartão.

---

## 6. Stack

### 6.1 Adicionar

| Tecnologia | Categoria sugerida | Justificativa |
|---|---|---|
| Angular | Core & linguagens (ou nova categoria "Frontend") | Frontend da Distribuidora |
| Vue 3 | idem | Frontend do Tatanea Temple |
| TypeScript | Core & linguagens | Usado nos dois frontends |
| Pinia | Frontend | Estado no Tatanea |
| Spring Cloud Gateway | Spring | API Gateway da Distribuidora |
| JWT / BCrypt | Spring / segurança | Auth nos dois projetos |
| Swagger / OpenAPI | já existe | — |
| Render | Infra | Deploy do back do Tatanea |
| Angular Material | Frontend | Opcional |

### 6.2 Kafka

**Manter** `Apache Kafka` na stack, pois você já o usa em projeto novo em criação. Dica de honestidade: se quiser, marque como "em uso/estudo" com um destaque visual diferente (ou deixe só sem o `highlight`). **Remover Kafka apenas das tags do card da Distribuidora.**

### 6.3 Sugestão de nova organização das categorias

1. **Linguagens:** Java (highlight), Kotlin, Python, C#, JavaScript, TypeScript
2. **Frontend:** Angular, Vue 3, Pinia, Node.js
3. **Spring e sistemas distribuídos:** Spring Boot (highlight), Spring Cloud (highlight), Spring Security, Spring Data JPA, Spring Cloud Gateway, Eureka, OpenFeign, RabbitMQ, Apache Kafka, Resilience4j
4. **Banco, infra e persistência:** PostgreSQL, Hibernate, Flyway, Docker, Testcontainers, Linux, Git/GitHub, Supabase, Vercel, Render
5. **Testes, observabilidade e docs:** JUnit 5, Mockito, Vitest, Prometheus, Grafana, Spring Actuator, Swagger/OpenAPI

> No novo CSS a grade da Stack é 2 colunas. Com 5 categorias, a última fica sozinha. Duas saídas: (a) manter 4 categorias juntando "Frontend" em "Linguagens", ou (b) fazer a última ocupar a linha toda com `.stack-group:last-child { grid-column: 1 / -1; }`.

### 6.4 Ícones (opcional)

A pasta `assets/` já tem SVGs de Java, Spring, Kotlin, Python, C#, JavaScript, TypeScript, Node.js, PostgreSQL, Git, Linux, Unity, Vercel, Firebase, Maven, Godot, HTML, CSS e AngularJS (**este é o AngularJS antigo, não o Angular atual**; se for usar, procure o logo do Angular moderno). Hoje nenhum está sendo usado no HTML.

---

## 7. Projetos

### 7.1 Distribuidora Atacadista (projeto principal)

- **Rótulo (`.project-tag`):** `PROJETO DE ESTUDO · ARQUITETURA DE MICROSSERVIÇOS`
- **Título:** `Distribuidora Atacadista (AtlasTT)`
- **Descrição sugerida:**

> Projeto de estudo de microsserviços em arquitetura em camadas: 7 serviços Spring Boot com Eureka e API Gateway, autenticação JWT por papéis, baixa de estoque atômica com compensação, chamadas resilientes (OpenFeign + Resilience4j), notificações via RabbitMQ e métricas com Prometheus/Grafana. Frontend em Angular e 55 testes unitários.

- **Tags (máximo ~9):** `Java 17` `Spring Cloud` `Gateway` `Eureka` `RabbitMQ` `PostgreSQL` `Angular` `Docker` `Prometheus`
- **Removida:** `Kafka` (o projeto não usa).
- **Link:** `https://github.com/TonhoDevi/distribuidora-atacadista` (manter).

```html
<div class="tags">
  <span class="tag">Java</span>
  <span class="tag">Spring Cloud</span>
  <span class="tag">Gateway</span>
  <span class="tag">Eureka</span>
  <span class="tag">RabbitMQ</span>
  <span class="tag">PostgreSQL</span>
  <span class="tag">Angular</span>
  <span class="tag">Docker</span>
  <span class="tag">Prometheus</span>
</div>
```

Destaques do README que valem citar (escolha 2–3 para não poluir):
- Um banco Postgres por serviço, sem FK entre serviços.
- JWT validado centralmente no Gateway, com autorização por role.
- Compensação de estoque e circuit breaker no `order-service`.
- Limitações documentadas com honestidade (isso demonstra maturidade).

### 7.2 Templo de Tatânea

- **Rótulo (`.card-type`):** `FULL STACK · JAVA + VUE`
- **Descrição sugerida:**

> Compêndio homebrew e sistema de fichas para D&D 5e, em uso por cerca de 15 jogadores. API REST em Spring Boot com JWT e frontend em Vue 3. A consulta de fichas caiu de quase 3 minutos para cerca de 4 segundos com joins, banco na mesma região da API e cache no frontend (Pinia); campos, imagens e objetos por conta têm limites contra abuso.

- **Tags:** `Java 21` `Spring Boot` `Vue 3` `PostgreSQL` `JWT` `Flyway`
- **Links:** manter `GitHub` e `Acessar App`.
- **Aviso:** o backend roda no free tier do Render e "dorme" após ~15 min; a primeira requisição leva 30–50 s. Vale uma nota curta no card (por exemplo, no `.card-note`: *"Primeiro acesso pode levar até 1 min"*), para o recrutador não achar que está quebrado.

### 7.3 Escala de Turnos (órgão de segurança pública)

Sem mudança de conteúdo. Observação: agora o mesmo trabalho aparece na Experiência (F BD3) e neste card. Duas opções:
- **Manter o card** e encurtar o tópico da experiência; ou
- **Remover o card** e deixar só a experiência.

### 7.4 Bíblia 3D (Realidade Aumentada)

É o item mais repetido do site. Opções:
- **A (recomendada):** manter o card, pois tem link para a Google Play, e reduzir o hero a só o número `10K+`.
- **B:** remover o card e manter o app só na Experiência.

### 7.5 Seção de "Em desenvolvimento / Próximos projetos"

Espaço para o projeto novo com Kafka e os que você vai listar. Sugestão: um card com o rótulo `EM DESENVOLVIMENTO` e sem link de demo. Modelo:

```html
<div class="card">
  <span class="card-type">EM DESENVOLVIMENTO</span>
  <h3>Nome do projeto</h3>
  <p>Descrição curta do objetivo.</p>
  <div class="tags">
    <span class="tag">Java</span>
    <span class="tag">Spring Boot</span>
    <span class="tag">Kafka</span>
  </div>
  <div class="card-links">
    <a href="https://github.com/TonhoDevi/REPO" target="_blank">GitHub</a>
  </div>
</div>
```

> Com a grade de 2 colunas, **número par de cards** fica melhor visualmente (hoje são 4; com mais um, 5, o último fica sozinho; com dois, volta a ficar par).

---

## 8. Contato

- Texto atual: "Aberto para oportunidades CLT, PJ, projetos de consultoria ou aulas técnicas." Agora que você está na Avanade, decida se mantém. Sugestão neutra: **"Aberto a conversas sobre projetos, colaborações e aulas técnicas."**
- E-mail: **mantido** `antoniohenriquebn@hotmail.com` (profissional).
- **Remover o link do itch.io** (decisão B8) e trocar os emojis por ícones SVG (ver 9.1).
- Lista final sugerida: E-mail, LinkedIn, GitHub (e, se quiser, o repositório do Bank-AtlasTT).
- **Bug de formatação do README do Tatanea:** o link do LinkedIn está quebrado (`[Antonio Henrique]([www.linkedin.com/…](https://…))`). Não afeta o portfólio, mas vale corrigir no repositório.
- Formulário: usa `mailto:`. Funciona, mas depende do cliente de e-mail do visitante. Alternativas futuras: Formspree ou Web3Forms (sem backend).

---

## 9. Design (extras opcionais)

Ideias além do que já está na branch:

1. **Ícones de tecnologia** nas pills da Stack (SVGs de `assets/`).
2. **Contagem animada** dos números do hero (0 → valor) ao entrar na tela.
3. **Modo claro/escuro** com botão no menu.
4. **Open Graph / Twitter Card** no `<head>` (`og:title`, `og:description`, `og:image`) para o link ficar bonito ao ser compartilhado no LinkedIn.
5. **Favicon** (hoje não há).
6. **Seção "Em desenvolvimento"** (ver 7.5).
7. **Foto**: usar `loading="lazy"` não se aplica (está no topo), mas vale gerar uma versão `.webp` menor que os 138 KB atuais.
8. **SEO:** adicionar `<meta property="og:*">` e um `sitemap` caso hospede no GitHub Pages ou Vercel.

---

### 9.1 Direção visual: elegante e sofisticada (decidido em B11)

**Objetivo:** passar sensação de produto premium: sóbrio, espaçoso, sem neon. A identidade atual (verde Spring + azul + fonte monoespaçada) tem cara de "dev"; a nova teria cara de "marca".

**Princípios:**
1. Mais **espaço em branco** e menos caixas. Linhas finas de 1 px em vez de cartões pesados.
2. **Tipografia com serifa** nos títulos (opções: *Cormorant Garamond*, *Playfair Display*) e uma sans moderna no texto (manter *Plus Jakarta Sans* ou usar *Inter*). A fonte mono fica só em detalhes pequenos (datas, tags).
3. **Um só acento**: dourado champanhe. Nada de gradiente verde-azul, nada de brilho neon.
4. **Movimento sutil**: aparecer suavemente ao rolar, sem animação chamativa.
5. **Trocar os emojis** do contato (✉ 🔗 💻 🎮) por ícones de linha em SVG. Emoji destoa de um site elegante.
6. Foto com **moldura fina dourada**, sem sombra pesada.

**Paleta proposta (variáveis de `:root`):**

```css
/* Escuro (padrão) */
:root {
  --bg: #0a0a0b;
  --surface: #121214;
  --surface-border: #26231f;
  --text-main: #f4efe6;
  --text-muted: #a39d92;
  --accent: #c9a96e;        /* dourado champanhe */
  --accent-bright: #e3c88f;
}

/* Claro */
:root[data-theme="light"] {
  --bg: #faf7f1;
  --surface: #ffffff;
  --surface-border: #e6dfd0;
  --text-main: #1a1713;
  --text-muted: #6b6458;
  --accent: #8f6f2f;
  --accent-bright: #a98443;
}
```

> Confira o contraste de texto (WCAG AA, 4,5:1) depois de aplicar, principalmente o dourado sobre o fundo claro.

**Observação de identidade:** o Tatanea Temple já usa dourado e terracota, então a paleta nova combina com ele. O que se perde é a ligação visual com o verde do Spring; ele pode continuar só no logo do Spring, nas pills de destaque.

### 9.2 Modo escuro/claro e troca de idioma (PT/EN)

**Modo escuro/claro**
1. Mover todas as cores para variáveis em `:root` (já é o caso).
2. Definir o tema claro em `:root[data-theme="light"]` (acima).
3. Botão no menu que alterna `document.documentElement.dataset.theme`.
4. Respeitar `prefers-color-scheme` no primeiro acesso; guardar a escolha em `localStorage` (dentro de `try/catch`).
5. Evitar o "piscar" no carregamento aplicando o tema com um pequeno script no `<head>`, antes do CSS.

**Idioma PT/EN**
1. Marcar cada texto traduzível com `data-i18n="chave"`.
2. Criar um dicionário `{ pt: {...}, en: {...} }` em `i18n.js`.
3. Botão `PT | EN` troca o texto de todos os elementos e o atributo `lang` do `<html>`.
4. Guardar a escolha em `localStorage`; padrão: idioma do navegador, com fallback para PT.
5. Traduzir também `<title>` e `<meta description>`.
6. **Trabalho real:** escrever a versão em inglês de todos os textos. Faça depois que o conteúdo em português estiver fechado, para não traduzir duas vezes.
7. Para o currículo: ter `Curriculo_..._PT.pdf` e `..._EN.pdf` e trocar o link conforme o idioma.

---

## 10. Perguntas em aberto

| # | Pergunta | Onde impacta |
|---|---|---|
| 1 | ~~Mês de início e o que faz na Avanade?~~ Respondido: 03/11/2026, híbrido Recife, Java/Spring Boot | Experiência |
| 2 | ~~"4+ anos programando"~~ Respondido: `1,5 ANO PROGRAMANDO` | Hero |
| 3 | Manter "arquiteturas distribuídas em nuvem" ou tirar "em nuvem"? **(sugerido tirar: a Distribuidora roda em Docker Compose local)** | Sobre |
| 4 | O texto de contato muda por você já estar empregado? | Contato |
| 5 | Manter ou remover o card do órgão de segurança pública e do Bíblia 3D? **(ainda em aberto)** | Projetos |
| 6 | Qual é o projeto novo com Kafka (nome, repo, descrição)? **(B7, próximo bloco)** | Projetos |
| 7 | Quais são os outros projetos que vai listar? | Projetos |
| 8 | Quer ícones nas tecnologias? | Stack / design |
| 9 | Tem certificações (Azure, Java…)? | Formação |

---

## 11. Checklist final

- [ ] Hero: selo `Engenheiro de Software Jr. · Recife`, subtítulo, número `1,5 ANO PROGRAMANDO`
- [ ] Sobre: parágrafos revisados
- [ ] Experiência: Avanade completa
- [ ] Stack: Angular, Vue, TypeScript, Pinia, Gateway, JWT, Render adicionados; Kafka mantido
- [ ] Distribuidora: reposicionada como projeto de estudo, sem Kafka nas tags
- [ ] Tatanea: tags e descrição corrigidas, aviso do Render
- [ ] Bíblia 3D / sistema de segurança pública: decisão sobre a repetição
- [ ] Novos projetos adicionados (par de cards)
- [ ] Contato revisado
- [ ] Open Graph e favicon
- [ ] Testar no celular (largura ~390 px)
- [ ] Conferir links (GitHub, Play Store, Vercel, LinkedIn)
- [ ] Remover itch.io, Unity e Godot (B8)
- [ ] Card do Bank-AtlasTT com status honesto da fase
- [ ] Stack separada por nível (Forte, Confortável, Estudando, Básico)
- [ ] Formação: Gestão Financeira em destaque e Bens Soluções Sustentáveis (voluntária)
- [ ] Nova direção visual elegante (9.1)
- [ ] Tema escuro/claro e idioma PT/EN (9.2), só depois de fechar o conteúdo em português
