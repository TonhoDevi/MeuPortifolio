# Planejamento do portfólio

Guia para você aplicar as mudanças **manualmente** em `index.html`, `styles.css` e `script.js`. Todas as decisões já estão fechadas aqui; onde falta uma informação sua, aparece como **[PENDENTE]**.

- **Site:** https://tonhodevi.github.io/MeuPortifolio/
- **Estado do código:** nada deste documento foi aplicado. O código está igual ao commit original `59ede02`. Dois commits de teste (redesign e experiência) foram revertidos; ficam no histórico só como referência (`git show 898ecbf` e `git show 08a9831`).

---

## Índice

1. [Resumo do que muda](#1-resumo-do-que-muda)
2. [Fatos confirmados e regras de conteúdo](#2-fatos-confirmados-e-regras-de-conteúdo)
3. [Hero](#3-hero)
4. [Sobre mim](#4-sobre-mim)
5. [Experiência](#5-experiência)
6. [Formação](#6-formação)
7. [Stack](#7-stack)
8. [Projetos](#8-projetos)
9. [Contato](#9-contato)
10. [Design: paleta, tema e idioma](#10-design-paleta-tema-e-idioma)
11. [Extras opcionais](#11-extras-opcionais)
12. [Material de apoio: estudos de caso](#12-material-de-apoio-estudos-de-caso)
13. [Pendências](#13-pendências)
14. [Ordem sugerida de execução e checklist](#14-ordem-sugerida-de-execução-e-checklist)

---

## 1. Resumo do que muda

| Seção | Mudança |
|---|---|
| Hero | Selo novo, subtítulo ajustado, números `1,5 ano` e `50+ usuários` |
| Sobre | Reescrito: identidade, história sem game dev, foco e objetivo |
| Experiência | 3 empregos separados por empresa + bloco da Avanade **escondido** + experiência voluntária |
| Formação | Gestão Financeira em destaque; Mecatrônica (UFPE) adicionada |
| Stack | Categorias atualizadas, **sem níveis**; Angular, Vue, TypeScript etc. entram; Unity e Godot saem |
| Projetos | Distribuidora e Tatanea reescritos; Bank-AtlasTT entra; Bíblia 3D e CodeQuest mantidos; BOPE vira "órgão de segurança pública" |
| Contato | Itch.io sai; emojis viram ícones; texto de abertura neutro |
| Design | Paleta champanhe (escuro e claro), serifa nos títulos, botão de tema e de idioma |

---

## 2. Fatos confirmados e regras de conteúdo

### Datas e situação

| Fato | Valor |
|---|---|
| Avanade | Início em **3 de novembro de 2026**; Júnior direto; híbrido em Recife; Java full stack, principalmente Spring Boot; projeto do **setor financeiro** (sem citar o banco) |
| Fuctura | Fev 2026 – Set 2026 (você saiu) |
| F BD3 Ltda | Set 2025 – Ago 2026 |
| Bens Soluções Sustentáveis | Jun 2022 – Jun 2023, gerente financeiro (voluntário, empresa júnior da UFPE) |
| Hoje | Sem vínculo ativo até 3/11 |
| Tempo de programação | 7 meses de estudo + cerca de 1 ano de trabalho = **1,5 ano** |

### O que NÃO entra no portfólio

- Ex-chefe ou motivo da saída da F BD3.
- Nome do banco e de qualquer cliente da Avanade.
- "Melhor da instituição" e "alunos contratados" (não são comprováveis).
- **Qualquer associação com game dev:** itch.io, Unity, Godot, a origem "queria ser gamedev", a palavra "jogo" para o Bíblia 3D (usar "aplicativo educativo em Realidade Aumentada").
- Níveis de domínio por tecnologia.
- Prints do Grafana e do tempo de 2 min 56 s.
- Certificações em nuvem (você não tem Azure, AWS nem GCP).
- Nome "BOPE": usar sempre **"órgão de segurança pública"**.
- Os "10K+ downloads" aparecem **uma única vez** (no card do Bíblia 3D).

### Palavras e tom

- Mostrar em vez de afirmar. Evitar "especialista" e "pleno de minhas capacidades".
- Tom: elegante, sóbrio, profissional.
- Seu posicionamento: **Backend**. Frase-guia: *"Desenvolvedor backend focado em código confiável, testado e bem arquitetado."*

---

## 3. Hero

### 3.1 Selo de status (`.badge-status`)

Antes: `Disponível para novas oportunidades`.

```html
<div class="badge-status reveal">
  <span class="status-dot"></span>
  Engenheiro de Software Jr. · Recife
</div>
```

Sem data e sem o nome da Avanade. Você atualiza no mês que vem (ver 5.4).

### 3.2 Título de cargo (`.role-title`)

```
Backend Developer · Java & Spring Boot · Microsserviços
```

### 3.3 Subtítulo (`.subtitle`)

> Foco no ecossistema Java e Spring Boot, com interesse em arquitetura de microsserviços, resiliência de sistemas e soluções escaláveis. Experiência como professor de programação e entusiasta de desenvolvimento orientado a alta performance.

(Troca "Especialista" por "Foco" e passa o ensino para o passado, já que você saiu da Fuctura.)

### 3.4 Faixa de números (`.facts`)

| Número | Rótulo |
|---|---|
| `1,5` | `ANO PROGRAMANDO` |
| `200+` | `ALUNOS CAPACITADOS` |
| `6` | `TURMAS LECIONADAS` |
| `50+` | `USUÁRIOS EM PRODUÇÃO` |

O último número (era `10K+ DOWNLOADS`) agora vem do sistema do órgão de segurança pública, para não repetir o Bíblia 3D. Revise o `1,5` em 2027.

---

## 4. Sobre mim

### 4.1 Texto (versão para usar **agora**, sem Avanade)

> Engenheiro de Software em formação pela Estácio, com experiência como desenvolvedor e professor de programação. Venho de áreas diferentes, entre elas engenharia mecatrônica (UFPE) e gestão financeira; ao entrar na programação, gostei tanto que decidi seguir carreira e encontrei no backend o lugar onde mais gosto de resolver problemas.

> Meu foco está em backend com Java e Spring Boot: APIs REST, microsserviços, segurança, testes automatizados e arquitetura hexagonal. Meu objetivo é evoluir até sênior e contribuir com o mercado de tecnologia brasileiro.

### 4.2 Primeiro parágrafo **ao ativar a Avanade** (ver 5.4)

> Engenheiro de Software Júnior na **Avanade** e graduando em Engenharia de Software pela Estácio. Atuei como professor de programação na **Fuctura Tecnologia**, capacitando desenvolvedores em Java e Python. Venho de áreas diferentes, entre elas engenharia mecatrônica (UFPE) e gestão financeira; ao entrar na programação, gostei tanto que decidi seguir carreira e encontrei no backend o lugar onde mais gosto de resolver problemas.

### 4.3 Cartão lateral (`.about-card`)

Localização (Recife, PE), Idiomas (Português nativo, Inglês avançado), Atuação. Confirme se "Remoto / Híbrido / Presencial" continua válido. Como a Avanade é híbrida, considere `Híbrido / Remoto`.

---

## 5. Experiência

Ordem: do mais recente para o mais antigo. Cada empresa é um item separado.

| # | Cargo | Empresa | Período |
|---|---|---|---|
| 1 | Engenheiro de Software Júnior | Avanade · Híbrido, Recife | Nov 2026 – Presente (**escondido**, ver 5.4) |
| 2 | Professor de Programação | Fuctura Tecnologia · Recife, PE | Fev 2026 – Set 2026 |
| 3 | Desenvolvedor de Software | F BD3 Ltda · Recife, PE | Set 2025 – Ago 2026 |
| 4 | Gerente Financeiro (voluntário) | Bens Soluções Sustentáveis · Empresa Júnior UFPE | Jun 2022 – Jun 2023 |

### 5.1 Fuctura

- Conduzi **6 turmas de Java e Python (200+ alunos)**, criando conteúdo didático, exercícios práticos e acompanhando o desenvolvimento individual de cada aluno.
- Conteúdos: POO, coleções, Spring Boot, SQL e PostgreSQL, Hibernate, JDBC, JPA, Git, Gitflow e arquitetura.
- Produzi todo o material: apostilas, questionários e fichas de exercícios.

### 5.2 F BD3 Ltda

- Responsável técnico, em time de 4 desenvolvedores, pela base de código do *Bíblia 3D*, aplicativo educativo em Realidade Aumentada publicado na Google Play. Defini padrões de código e arquitetura e refatorei a base inteira, que já não funcionava por ser muito antiga, para uma versão atual e mais acessível da engine.
- Contribuí no backend de um sistema de **órgão de segurança pública** (Java, Spring Boot e PostgreSQL), que substituiu a organização das escalas de ronda feita por WhatsApp. Em produção, com mais de 50 usuários.

> Observação: o texto fala "da engine" em vez de citar Unity, por causa da decisão de não associar o site a game dev. Se preferir nomear, é opcional.

### 5.3 Bens Soluções Sustentáveis (opcional)

- Gerente financeiro da empresa júnior da UFPE. Experiência voluntária, não remunerada.

Rotule como **"Experiência voluntária"** para ficar claro. Se quiser, acrescente 1 linha sobre o que fazia (orçamento, controle financeiro etc.); eu não inventei nada além do cargo.

### 5.4 Bloco da Avanade escondido (ativar só após a carteira assinada)

Deixe pronto agora, invisível. No topo da `<div class="timeline">`:

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

O `hidden` do HTML some com o item, mas o texto continua visível em "Ver código-fonte". Por isso o bloco não tem nome de banco nem de cliente. Se não quiser nenhum tópico, apague a `<ul>`.

**Checklist de ativação (quando a carteira for assinada):**
- [ ] Remover `hidden` do `#exp-avanade`
- [ ] Trocar o selo para `Engenheiro de Software Jr. · Avanade`
- [ ] Trocar o 1º parágrafo do Sobre pelo texto 4.2
- [ ] Atualizar o texto de contato se quiser
- [ ] Conferir no celular

### 5.5 HTML de um item (referência)

```html
<div class="timeline-item reveal">
  <div class="timeline-header">
    <h3 class="timeline-role">Desenvolvedor de Software</h3>
    <span class="timeline-date">Set 2025 – Ago 2026</span>
  </div>
  <div class="timeline-meta">F BD3 Ltda · Recife, PE</div>
  <ul>
    <li>…</li>
  </ul>
</div>
```

Como cada item agora é um cartão, dê espaço entre eles: `.timeline-item + .timeline-item { margin-top: 16px; }`.

---

## 6. Formação

| Curso | Instituição | Período / situação |
|---|---|---|
| Engenharia de Software | Estácio | Cursando · 3º módulo |
| Dev Java Full Stack (certificado) | Fuctura Tecnologia | 2025 |
| Gestão Financeira (Tecnólogo) | Unifateci | 2023 – 2025 |
| Engenharia Mecatrônica | UFPE | **[PENDENTE: anos]** · cursado até o 5º período (de 8), não concluído |

- Destaque da Gestão Financeira: é um diferencial (finanças + software) e combina com o setor financeiro da Avanade.
- Texto do cartão da Mecatrônica: `Engenharia Mecatrônica · UFPE · Cursado até o 5º período`, com os anos antes de "Cursado".
- **Me diga os anos** de início e de saída da Mecatrônica (ver pendências).

---

## 7. Stack

**Sem níveis de domínio.** As pills ficam todas iguais; só mantém o destaque (`.highlight`) em **Java, Spring Boot e Spring Cloud**.

### 7.1 Organização por categorias

1. **Linguagens:** Java (highlight), Kotlin, Python, C#, JavaScript, TypeScript
2. **Frontend:** Angular, Vue 3, Pinia, Node.js
3. **Spring e sistemas distribuídos:** Spring Boot (highlight), Spring Cloud (highlight), Spring Security, Spring Data JPA, Spring Cloud Gateway, Eureka, OpenFeign, RabbitMQ, Apache Kafka, Resilience4j
4. **Banco, infra e persistência:** PostgreSQL, MongoDB, Redis, Hibernate, Flyway, Docker, Testcontainers, Linux, Git/GitHub, GitHub Actions, Supabase, Vercel, Render
5. **Testes, observabilidade e docs:** JUnit 5, Mockito, Vitest, OpenTelemetry, Prometheus, Grafana, Spring Actuator, Swagger/OpenAPI

Acréscimos em relação ao site atual: Angular, Vue 3, TypeScript, Pinia, Spring Cloud Gateway, MongoDB, Redis, GitHub Actions, Render, Vitest, OpenTelemetry.

Saídas: **Unity e Godot** (decisão de não associar a game dev).

Opcional: uma linha "IA no fluxo de desenvolvimento: Claude Code, Gemini, NotebookLM". As ferramentas de uso casual não entram.

### 7.2 Layout

Com 5 categorias em 2 colunas, a última ficaria sozinha. Duas saídas: (a) deixar a última ocupar a linha toda:

```css
.stack-group:last-child { grid-column: 1 / -1; }
```

ou (b) juntar "Frontend" em "Linguagens" e ficar com 4 categorias.

### 7.3 Ícones (opcional)

`assets/` tem SVGs de Java, Spring, Kotlin, Python, C#, JavaScript, TypeScript, Node.js, PostgreSQL, Git, Linux, Vercel, Firebase, Maven, HTML e CSS. **Não use** `Unity.svg` nem `Godot Engine.svg`. `AngularJS.svg` é o logo do AngularJS antigo, não do Angular atual: procure o logo do Angular moderno se for usar.

---

## 8. Projetos

Ordem sugerida: **Distribuidora** (destaque), depois Bank-AtlasTT, Tatanea, CodeQuest, Escala de Turnos e Bíblia 3D.

Os 5 cards da grade ficam em número ímpar com 2 colunas. Para o último não ficar sozinho:

```css
.grid .card:last-child:nth-child(odd) { grid-column: 1 / -1; }
```

### 8.1 Distribuidora Atacadista (destaque)

- **Rótulo:** `PROJETO DE ESTUDO · ARQUITETURA DE MICROSSERVIÇOS`
- **Título:** `Distribuidora Atacadista (AtlasTT)`
- **Descrição:**

> Projeto de estudo de microsserviços em arquitetura em camadas: 7 serviços Spring Boot com Eureka e API Gateway, autenticação JWT por papéis, baixa de estoque atômica com compensação, chamadas resilientes (OpenFeign + Resilience4j), notificações via RabbitMQ e métricas com Prometheus e Grafana. Frontend em Angular e 55 testes unitários.

- **Tags:** `Java 17` `Spring Cloud` `Gateway` `Eureka` `RabbitMQ` `PostgreSQL` `Angular` `Docker` `Prometheus`
- **Link:** https://github.com/TonhoDevi/distribuidora-atacadista
- **Cuidados:** não escreva "hexagonal" (é em camadas); **sem Kafka** nas tags (usa RabbitMQ).

### 8.2 Bank-AtlasTT

- **Rótulo:** `PROJETO EDUCACIONAL · ARQUITETURA HEXAGONAL`
- **Descrição:**

> Mini banco digital educacional, com dados fictícios, em Java 21 e Spring Boot 4. Arquitetura hexagonal com domínio desenvolvido em TDD. Cada transferência publica um evento no Kafka; o extrato é montado em MongoDB, com idempotência e cache em Redis, e o fluxo é rastreado ponta a ponta com OpenTelemetry e Grafana. Autenticação com JWT e testes com Testcontainers.

- **Tags:** `Java 21` `Spring Boot` `Hexagonal` `PostgreSQL` `Kafka` `MongoDB` `Redis` `OpenTelemetry` `Testcontainers`
- **Link:** https://github.com/TonhoDevi/Bank-AtlasTT
- **Sem marcador de fase.** Você termina amanhã e atualiza daqui a ~2 meses.

**Antes de publicar (importante):** recrutadores abrem o repositório. O README do Bank-AtlasTT ainda lista as Fases 1 a 8 como pendentes (⏳). Se o card disser que tudo existe e o README disser o contrário, o contraste prejudica você. Faça uma destas duas coisas: (1) termine as fases que o card cita e atualize o roadmap do README com ✅, ou (2) deixe no card só o que já estiver pronto no dia da publicação.

### 8.3 Templo de Tatânea

- **Rótulo:** `FULL STACK · JAVA + VUE`
- **Descrição:**

> Compêndio homebrew e sistema de fichas para D&D 5e, em uso por cerca de 15 jogadores. API REST em Spring Boot com JWT e frontend em Vue 3. A consulta de fichas caiu de quase 3 minutos para cerca de 4 segundos com joins, banco na mesma região da API e cache no frontend (Pinia); campos, imagens e objetos por conta têm limites contra abuso.

- **Tags:** `Java 21` `Spring Boot` `Vue 3` `PostgreSQL` `JWT` `Flyway`
- **Links:** GitHub (https://github.com/TonhoDevi/Tatanea-Temple) e Acessar App (https://tatanea-temple.vercel.app/)
- **Aviso (`.card-note`):** *"Primeiro acesso pode levar até 1 min"* (o backend dorme no plano gratuito do Render).
- Não é game dev: é ferramenta de apoio a RPG de mesa.

### 8.4 CodeQuest (mantido)

Mantenha o texto atual e troque só o rótulo de `FULL STACK · GAMIFICAÇÃO` para `FULL STACK · EDUCAÇÃO`. Tags: `Kotlin` `Spring Boot` `PostgreSQL` `Thymeleaf`.

### 8.5 Escala de Turnos (mantido)

- **Rótulo:** `SISTEMA EM PRODUÇÃO`
- **Título:** `Escala de Turnos`
- **Descrição:**

> API REST para gerenciamento de escalas operacionais de um órgão de segurança pública, substituindo a organização por WhatsApp. Usada por mais de 50 membros.

- **Tags:** `Java` `Spring Boot` `PostgreSQL`
- **Nota:** `Privado (Institucional)`

### 8.6 Bíblia 3D (mantido)

- **Rótulo:** `PRODUTO PUBLICADO · 10K+ DOWNLOADS` (é o **único** lugar do site com esse número)
- **Título:** `Bíblia 3D (Realidade Aumentada)`
- **Descrição:**

> Aplicativo educativo em Realidade Aumentada disponível na Google Play. Reestruturação completa da arquitetura e suporte técnico contínuo.

- **Tags:** `C#` `AR` `Android` (**sem a tag Unity**)
- **Link:** https://play.google.com/store/apps/details?id=com.Fuctura.Biblia3D

### 8.7 Modelo de card para projetos futuros

```html
<div class="card">
  <span class="card-type">RÓTULO DO PROJETO</span>
  <h3>Nome do projeto</h3>
  <p>Descrição curta.</p>
  <div class="tags">
    <span class="tag">Java</span>
    <span class="tag">Spring Boot</span>
  </div>
  <div class="card-links">
    <a href="https://github.com/TonhoDevi/REPO" target="_blank">GitHub</a>
  </div>
</div>
```

---

## 9. Contato

- **Texto:** troque "Aberto para oportunidades CLT, PJ, projetos de consultoria ou aulas técnicas." por: **"Aberto a conversas sobre projetos, colaborações e aulas técnicas."**
- **E-mail (mantido):** antoniohenriquebn@hotmail.com
- **Links finais:** E-mail, LinkedIn, GitHub. **Remover o itch.io.** Se quiser, adicionar o repositório do Bank-AtlasTT.
- **Ícones:** trocar os emojis (✉ 🔗 💻 🎮) por ícones de linha em SVG.
- **Formulário:** usa `mailto:`, que depende do cliente de e-mail do visitante. Alternativas futuras sem backend: Formspree ou Web3Forms.
- **Correção fora do portfólio:** o link do LinkedIn no README do Tatanea está quebrado (`[Antonio Henrique]([www.linkedin.com/…](https://…))`).

---

## 10. Design: paleta, tema e idioma

### 10.1 Direção visual

**Objetivo:** produto premium, sóbrio e espaçoso, sem neon. A identidade atual (verde Spring + azul + fonte mono) tem cara de "dev"; a nova terá cara de "marca".

1. Mais espaço em branco e menos caixas: linhas de 1 px em vez de cartões pesados.
2. **Serifa nos títulos** (*Cormorant Garamond* ou *Playfair Display*) e sans moderna no texto (*Plus Jakarta Sans* ou *Inter*). A fonte mono fica só em detalhes (datas, tags).
3. **Um só acento:** dourado champanhe. Sem gradiente verde-azul.
4. Movimento sutil: surgir suavemente ao rolar.
5. Foto com moldura fina dourada, sem sombra pesada.
6. Ícones SVG de linha no lugar de emojis.

### 10.2 Paleta (já vista nas prévias)

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

Depois de aplicar, confira o contraste de texto (WCAG AA, 4,5:1), principalmente o dourado sobre o fundo claro. O Tatanea já usa dourado e terracota, então a identidade combina; o verde Spring fica só nas pills de destaque.

### 10.3 Modo escuro/claro

1. Todas as cores em variáveis `:root` (já é assim).
2. Tema claro em `:root[data-theme="light"]`.
3. Botão no menu que alterna `document.documentElement.dataset.theme`.
4. Respeitar `prefers-color-scheme` no primeiro acesso; guardar a escolha em `localStorage` dentro de `try/catch`.
5. Aplicar o tema com um pequeno script no `<head>`, antes do CSS, para não "piscar".

### 10.4 Idioma PT/EN

1. Marcar textos traduzíveis com `data-i18n="chave"`.
2. Dicionário `{ pt: {...}, en: {...} }` em `i18n.js`.
3. Botão `PT | EN` troca os textos e o atributo `lang` do `<html>`.
4. Guardar a escolha em `localStorage`; padrão: idioma do navegador, com fallback para PT.
5. Traduzir também `<title>` e `<meta description>`.
6. Currículo: manter `Curriculo_..._PT.pdf` e `..._EN.pdf` e trocar o link conforme o idioma.
7. **Faça por último**, depois que o conteúdo em português estiver fechado, para não traduzir duas vezes.

---

## 11. Extras opcionais

1. **Open Graph** (prévia do link no LinkedIn), no `<head>`:

   ```html
   <meta property="og:type" content="website" />
   <meta property="og:url" content="https://tonhodevi.github.io/MeuPortifolio/" />
   <meta property="og:title" content="Antonio Henrique — Backend Developer" />
   <meta property="og:description" content="Backend com Java e Spring Boot: APIs REST, microsserviços, segurança e arquitetura hexagonal." />
   <meta property="og:image" content="https://tonhodevi.github.io/MeuPortifolio/assets/perfil.jpeg" />
   <meta name="twitter:card" content="summary_large_image" />
   ```

   O `og:image` ideal tem 1200×630 px; a foto atual é vertical, então vale criar uma imagem de capa.
2. **Favicon** (hoje não existe).
3. **Foto em `.webp`**, menor que os 138 KB atuais.
4. **Contagem animada** dos números do hero.
5. **Seção "Guias de estudo"** com links para os guias que você escreveu na Distribuidora (`docs/JWT.md`, `TESTES.md`, `HTTP-STATUS.md`, `POO.md`, `ANOTACOES.md`). É uma alternativa leve a um blog (que você disse que talvez não queira agora).
6. **Ícones de tecnologia** nas pills da Stack.

---

## 12. Material de apoio: estudos de caso

Para usar em card, página própria ou entrevista. Tudo abaixo vem dos READMEs e das suas respostas.

### 12.1 Distribuidora Atacadista

Escolha 4 ou 5 destes pontos para citar (o resto fica para o README):

1. **Baixa de estoque atômica:** `UPDATE ... WHERE stock_quantity >= :quantity`; sem estoque negativo em pedidos concorrentes e sem lock explícito.
2. **Compensação de estoque** quando o pedido falha, assumindo a limitação de não haver transação distribuída.
3. **Máquina de estados do pedido** (`CREATED → CONFIRMED → SHIPPED → DELIVERED`, `CANCELED`), com 409 em transição inválida.
4. **Circuit Breaker + TimeLimiter:** abre com 50% de falha em janela de 5 chamadas, fica 10 s aberto, timeout de 3 s.
5. **Segurança:** BCrypt, mensagem de login genérica contra *user enumeration*, admin por seed com senha em variável de ambiente, JWT validado no Gateway e segunda camada no `auth-service`.
6. **Total e preço calculados no servidor**, nunca aceitos do cliente.
7. **Contextos separados:** `User` (quem loga) e `Customer` (dado de negócio).
8. **Sem FK entre bancos** de serviços diferentes; integridade garantida na aplicação.
9. **Um Postgres por serviço**; JWT centralizado no Gateway.

### 12.2 Tatanea Temple

- **Desempenho:** a consulta de fichas (muitas tabelas relacionadas) exigia cerca de 12 idas ao banco por requisição. A primeira medição foi de **2 min 56 s**. A correção foi usar `INNER JOIN` e mover o banco do Brasil para **US West**, na mesma região da API; o resultado foi de cerca de **4 s**. Você mediu com a API sempre acordada, então não era o *cold start* do Render.
- **Cache no frontend (verificado no código):**
  - **Pinia** guarda o compêndio em memória com uma flag `carregado`: a API só é chamada na primeira vez; há `recarregar()` para limpar. O cache vive só na aba (F5 limpa).
  - **`<keep-alive>`** (máx. 6 telas) nas telas de personagem: ao voltar, o Vue mantém o componente e o estado.
  - **`localStorage`** guarda token, usuário e um rascunho da ficha, com gravação no backend por **versionamento otimista**.
  - Ele **não** compara com o banco; ele evita chamadas repetidas. Não escreva "sincroniza só quando há diferença".
- **Segurança:** limites de tamanho nos campos de texto, de peso nas imagens e de quantidade de objetos por conta, contra abuso e lotação do banco. Também: migração de banco via backup, melhoria da API e uso correto de JWT.
- **GitHub Actions:** você criou um bot que fazia requisições ao app para o Render não "dormir". É uma boa história de solução criativa.
- **Parte favorita:** a ficha de personagem (muitas regras de negócio, otimizada e visualmente cuidada).
- **Uso real:** cerca de 15 usuários ativos.
- **Para conferir no repositório:** o README diz que a ficha só salva ao clicar em "Salvar progresso", mas o código tem rascunho no `localStorage`. Deixe o README consistente: "rascunho local automático; gravação no servidor sob demanda".

---

## 13. Pendências

| # | O que falta | Onde entra |
|---|---|---|
| 1 | **Anos da Engenharia Mecatrônica** (UFPE): início e saída | Formação (seção 6) |
| 2 | Confirmar o texto de contato neutro da seção 9 | Contato |
| 3 | Terminar o Bank-AtlasTT e atualizar o README (✅ no roadmap) antes de publicar o card | Projetos (8.2) |
| 4 | Se quiser, 1 linha sobre o que fazia na Bens Soluções Sustentáveis | Experiência (5.3) |

---

## 14. Ordem sugerida de execução e checklist

Execute nesta ordem para evitar retrabalho (principalmente a tradução, que vem por último):

**Fase A: conteúdo em português**
- [ ] Hero: selo, subtítulo, números (`1,5`, `50+`)
- [ ] Sobre: dois parágrafos novos (4.1)
- [ ] Experiência: Fuctura, F BD3 e Bens (voluntária); bloco da Avanade escondido (5.4)
- [ ] Formação: 4 cartões, com os anos da Mecatrônica
- [ ] Stack: 5 categorias, sem níveis; sem Unity e Godot
- [ ] Projetos: 6 cards revisados (8.1 a 8.6); CSS do último card
- [ ] Contato: texto, itch.io removido, ícones SVG

**Fase B: visual**
- [ ] Nova paleta e tipografia (10.1 e 10.2)
- [ ] Moldura dourada na foto
- [ ] Testar no celular (~390 px)

**Fase C: recursos**
- [ ] Modo escuro/claro (10.3)
- [ ] Open Graph e favicon (11)
- [ ] Idioma PT/EN (10.4), por último

**Fase D: qualidade**
- [ ] Conferir contraste (WCAG AA)
- [ ] Conferir todos os links (GitHub, Play Store, Vercel, LinkedIn, Bank-AtlasTT)
- [ ] README do Bank-AtlasTT coerente com o card

**Quando a carteira da Avanade for assinada**
- [ ] Executar o checklist de ativação (5.4)
