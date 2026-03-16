export type SiteLocale = "pt" | "en";

type NavItem = {
  href: "" | "about" | "projects" | "engagements";
  label: string;
};

type ProjectCard = {
  title: string;
  description: string;
  link: string;
};

type SiteCopy = {
  languageLabel: string;
  switchLabel: string;
  nav: NavItem[];
  ctaContact: string;
  ctaProjects: string;
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    titleSuffix: string;
    summary: string;
    metrics: Array<{ label: string; value: string }>;
    panelEyebrow: string;
    panelTitle: string;
    panelBody: string;
    panelItems: Array<{ label: string; value: string }>;
  };
  offer: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: Array<{ title: string; body: string }>;
  };
  proof: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ label: string; value: string }>;
  };
  tracks: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ title: string; body: string }>;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    blocks: Array<{ title: string; body: string }>;
    principleEyebrow: string;
    principleTitle: string;
    principleBody: string;
  };
  engagements: {
    eyebrow: string;
    title: string;
    intro: string;
    offers: Array<{ title: string; body: string }>;
    fitTitle: string;
    fitItems: string[];
    notFitTitle: string;
    notFitItems: string[];
    processTitle: string;
    processItems: Array<{ title: string; body: string }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: ProjectCard[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
  footer: {
    summary: string;
    note: string;
  };
};

const siteCopy: Record<SiteLocale, SiteCopy> = {
  pt: {
    languageLabel: "PT",
    switchLabel: "English",
    nav: [
      { href: "", label: "Início" },
      { href: "about", label: "Sobre" },
      { href: "engagements", label: "Engajamentos" },
      { href: "projects", label: "Cases" },
    ],
    ctaContact: "Falar comigo",
    ctaProjects: "Ver cases",
    hero: {
      eyebrow: "IA aplicada para produto, decisão e operação",
      title: "Inteligência artificial com",
      accent: "densidade técnica",
      titleSuffix: "e entrega prática.",
      summary:
        "Desenvolvo sistemas de recomendação, ranking, modelagem e arquitetura de IA para contextos em que método precisa virar impacto mensurável.",
      metrics: [
        { label: "Foco", value: "Recomendação, otimização e inferência aplicada." },
        { label: "Formato", value: "Pesquisa aplicada, consultoria técnica e delivery orientado a valor." },
        { label: "Contexto", value: "Produtos digitais, governo e iniciativas com alto custo de decisão." },
      ],
      panelEyebrow: "Victor Guerreiro",
      panelTitle: "Consultoria técnica com profundidade de pesquisa.",
      panelBody:
        "Entro quando o problema é ambíguo, o custo de errar é alto e a equipe precisa de clareza para decidir arquitetura, experimento e direção de produto.",
      panelItems: [
        { label: "Atuação", value: "Estratégia técnica, modelagem e priorização." },
        { label: "Especialidade", value: "Sistemas de recomendação, ranking e otimização." },
        { label: "Base", value: "Pesquisa aplicada em IA com execução orientada a produto." },
      ],
    },
    offer: {
      eyebrow: "Como eu ajudo",
      title: "Engajamentos enxutos, técnicos e orientados à decisão.",
      intro:
        "O objetivo não é adicionar camadas de jargão, e sim reduzir risco, acelerar entendimento e produzir artefatos que a equipe realmente consiga usar.",
      cards: [
        {
          title: "Diagnóstico de produto e IA",
          body: "Avalio problema, dados, métrica e viabilidade para transformar uma ambição vaga em caminho técnico defensável.",
        },
        {
          title: "Arquitetura e experimentação",
          body: "Estruturo hipóteses, desenho pipelines e ajudo a priorizar onde vale investir esforço de pesquisa e engenharia.",
        },
        {
          title: "Sistemas de recomendação e ranking",
          body: "Atuo em matching, personalização, fairness, popularidade, otimização multiobjetivo e avaliação offline/online.",
        },
      ],
    },
    proof: {
      eyebrow: "Onde isso já gerou valor",
      title: "Experiência aplicada em contextos onde recomendação e decisão importam.",
      intro:
        "O trabalho costuma acontecer em cenários com múltiplos trade-offs, pressão operacional e necessidade de justificar escolhas técnicas com clareza.",
      items: [
        { label: "Matching", value: "Modelagem para aderência real entre oferta, demanda e restrições de negócio." },
        { label: "Serviços públicos", value: "Personalização e priorização em produtos com escala e impacto de política pública." },
        { label: "Estimativa", value: "Modelos para aproximar julgamento técnico, custo e tomada de decisão comercial." },
      ],
    },
    tracks: {
      eyebrow: "Duas frentes centrais",
      title: "Pesquisa em metaheurísticas e histórico aplicado em sistemas de recomendação.",
      intro:
        "Essas duas linhas se reforçam: de um lado, investigação técnica sobre otimização e busca; de outro, construção de sistemas que precisam transformar sinal imperfeito em decisão útil.",
      items: [
        {
          title: "Metaheurísticas e pesquisa",
          body: "Uma frente voltada a formulação, otimização e experimentação, conectada à sua trajetória acadêmica e ao trabalho de conclusão desenvolvido no contexto do INF.",
        },
        {
          title: "Sistemas de recomendação",
          body: "Uma frente aplicada a ranking, matching, personalização e priorização, refletindo seu histórico profissional e a construção de soluções reais nesse domínio.",
        },
      ],
    },
    about: {
      eyebrow: "Sobre",
      title: "Pesquisa aplicada com intenção de produto.",
      paragraphs: [
        "Trabalho na fronteira entre investigação técnica e execução prática. Meu foco está em sistemas de recomendação, machine learning e métodos de otimização para contextos onde decisão e impacto importam.",
        "Atuo em projetos para governo, startups e produtos digitais, sempre buscando manter arquitetura legível, experimentação honesta e entregas que resistam à operação real.",
      ],
      blocks: [
        {
          title: "Pesquisa e modelagem",
          body: "Recomendação, ranking, metaheurísticas, interpretabilidade e avaliação de trade-offs.",
        },
        {
          title: "Consultoria técnica",
          body: "Diagnóstico de produto, definição de arquitetura e aceleração de decisões complexas em IA.",
        },
      ],
      principleEyebrow: "Princípio",
      principleTitle: "Técnica não como adorno, mas como vantagem real.",
      principleBody:
        "A proposta é construir inteligência útil, auditável e orientada à decisão, sem transformar a interface em manifesto interno.",
    },
    engagements: {
      eyebrow: "Como eu entro",
      title: "Formatos de trabalho para problemas técnicos que não estão triviais.",
      intro:
        "Nem todo contexto precisa de um projeto longo. Muitas vezes o valor está em diagnosticar rápido, enquadrar o problema certo e dar direção técnica com clareza.",
      offers: [
        {
          title: "Diagnóstico estratégico",
          body: "Leitura técnica do problema, restrições, dados, riscos e hipóteses para decidir o que vale ou não perseguir.",
        },
        {
          title: "Sprint de arquitetura",
          body: "Estruturação de pipeline, critérios de avaliação e desenho das decisões críticas antes de escalar implementação.",
        },
        {
          title: "Acompanhamento seletivo",
          body: "Apoio técnico em momentos de decisão mais sensíveis, sem virar camada de gestão paralela para a equipe.",
        },
      ],
      fitTitle: "Quando faz sentido me chamar",
      fitItems: [
        "Você tem um problema de recomendação, ranking, matching ou priorização difícil de enquadrar.",
        "Existe pressão para decidir arquitetura ou abordagem experimental sem muita margem para tentativa cega.",
        "A equipe precisa de densidade técnica e leitura estratégica, mas não de mais ruído operacional.",
      ],
      notFitTitle: "Quando provavelmente não faz sentido",
      notFitItems: [
        "Você quer apenas terceirizar execução genérica sem clareza sobre o problema real.",
        "O contexto ainda está cedo demais para qualquer leitura técnica minimamente séria.",
        "A expectativa é validar decisões só por entusiasmo, sem critério ou compromisso com evidência.",
      ],
      processTitle: "Como costumo trabalhar",
      processItems: [
        {
          title: "1. Entendimento",
          body: "Entro pelo problema, não pela ferramenta. O primeiro foco é clarificar contexto, objetivo e restrições.",
        },
        {
          title: "2. Estrutura",
          body: "Transformo ambiguidades em hipóteses, critérios e caminhos técnicos comparáveis.",
        },
        {
          title: "3. Direção",
          body: "Saímos com recomendações, trade-offs e próximos passos que a equipe consegue absorver.",
        },
      ],
    },
    projects: {
      eyebrow: "Cases selecionados",
      title: "Alguns contextos onde trabalho técnico virou entrega concreta.",
      intro:
        "Uma seleção de trabalhos em que recomendação, modelagem e arquitetura ajudaram a resolver problemas reais.",
      cards: [
        {
          title: "Sistema de Recomendação Famyle",
          description:
            "Matching inteligente entre empregadores e profissionais domésticos, com extração de habilidades e ranking multiobjetivo orientado a aderência real.",
          link: "https://famyle.com",
        },
        {
          title: "Expresso Goiás",
          description:
            "Recomendações personalizadas de serviços públicos no Portal Expresso, combinando popularidade, personalização e critérios de fairness.",
          link: "https://www.go.gov.br/",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Se você está avaliando um problema sério de IA, podemos conversar.",
      body:
        "Sou mais útil quando existe uma questão técnica relevante, contexto de negócio real e abertura para tomar decisões com base em evidência.",
      primary: "Abrir email",
      secondary: "Explorar cases",
    },
    footer: {
      summary: "Pesquisa aplicada e consultoria em IA com foco em impacto real.",
      note: "Português por padrão. English available.",
    },
  },
  en: {
    languageLabel: "EN",
    switchLabel: "Português",
    nav: [
      { href: "", label: "Home" },
      { href: "about", label: "About" },
      { href: "engagements", label: "Engagements" },
      { href: "projects", label: "Work" },
    ],
    ctaContact: "Get in touch",
    ctaProjects: "View work",
    hero: {
      eyebrow: "Applied AI for products, decision-making, and operations",
      title: "Artificial intelligence with",
      accent: "technical depth",
      titleSuffix: "and practical delivery.",
      summary:
        "I build recommendation systems, ranking logic, applied modeling, and AI architecture for contexts where method must turn into measurable impact.",
      metrics: [
        { label: "Focus", value: "Recommendation, optimization, and applied inference." },
        { label: "Format", value: "Applied research, technical consulting, and value-oriented delivery." },
        { label: "Context", value: "Digital products, government, and high-stakes decision environments." },
      ],
      panelEyebrow: "Victor Guerreiro",
      panelTitle: "Technical consulting backed by research depth.",
      panelBody:
        "I am most useful when the problem is ambiguous, the cost of being wrong is high, and the team needs clarity to decide architecture, experiments, and product direction.",
      panelItems: [
        { label: "Work", value: "Technical strategy, modeling, and prioritization." },
        { label: "Specialty", value: "Recommendation systems, ranking, and optimization." },
        { label: "Foundation", value: "Applied AI research with product-oriented execution." },
      ],
    },
    offer: {
      eyebrow: "How I help",
      title: "Lean engagements with strong technical intent.",
      intro:
        "The goal is not to add more AI theater. It is to reduce risk, accelerate understanding, and produce artifacts a team can actually use.",
      cards: [
        {
          title: "AI and product diagnosis",
          body: "I assess problem framing, data, metrics, and feasibility to turn a vague ambition into a defensible technical path.",
        },
        {
          title: "Architecture and experimentation",
          body: "I help structure hypotheses, design pipelines, and prioritize where research and engineering effort should go.",
        },
        {
          title: "Recommendation and ranking systems",
          body: "I work on matching, personalization, fairness, popularity, multi-objective optimization, and offline/online evaluation.",
        },
      ],
    },
    proof: {
      eyebrow: "Where this has already created value",
      title: "Applied experience in contexts where recommendation and decision quality matter.",
      intro:
        "The work usually happens in environments with multiple trade-offs, operational pressure, and a need to justify technical choices clearly.",
      items: [
        { label: "Matching", value: "Modeling for real fit between supply, demand, and business constraints." },
        { label: "Public services", value: "Personalization and prioritization in products with scale and public impact." },
        { label: "Estimation", value: "Models that bring technical judgment, cost, and commercial decisions closer together." },
      ],
    },
    tracks: {
      eyebrow: "Two core tracks",
      title: "Research in metaheuristics and an applied background in recommendation systems.",
      intro:
        "These two lines reinforce each other: on one side, technical investigation into optimization and search; on the other, the construction of systems that must turn imperfect signal into useful decisions.",
      items: [
        {
          title: "Metaheuristics and research",
          body: "A track focused on formulation, optimization, and experimentation, connected to your academic path and your capstone work within the INF context.",
        },
        {
          title: "Recommendation systems",
          body: "A track applied to ranking, matching, personalization, and prioritization, reflecting your professional background and real-world work in this domain.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Applied research with product intent.",
      paragraphs: [
        "I work at the intersection of technical investigation and practical execution. My focus is on recommendation systems, machine learning, and optimization methods for contexts where decisions matter.",
        "I contribute to projects in government, startups, and digital products, keeping architecture legible, experimentation honest, and delivery grounded in real operational constraints.",
      ],
      blocks: [
        {
          title: "Research and modeling",
          body: "Recommendation, ranking, metaheuristics, interpretability, and trade-off evaluation.",
        },
        {
          title: "Technical consulting",
          body: "Product diagnosis, architecture definition, and acceleration of complex AI decisions.",
        },
      ],
      principleEyebrow: "Principle",
      principleTitle: "Technique as leverage, not decoration.",
      principleBody:
        "The aim is to build intelligence that is useful, auditable, and decision-oriented without turning the interface into an internal manifesto.",
    },
    engagements: {
      eyebrow: "How I engage",
      title: "Working formats for technical problems that are not straightforward anymore.",
      intro:
        "Not every situation needs a long project. Often the real value comes from diagnosing quickly, framing the right problem, and giving technical direction with clarity.",
      offers: [
        {
          title: "Strategic diagnosis",
          body: "Technical reading of the problem, constraints, data, risks, and hypotheses to decide what is worth pursuing.",
        },
        {
          title: "Architecture sprint",
          body: "Pipeline framing, evaluation criteria, and design of critical decisions before implementation grows expensive.",
        },
        {
          title: "Selective advisory",
          body: "Technical support at sensitive decision points without becoming an extra layer of operational management.",
        },
      ],
      fitTitle: "When it makes sense to bring me in",
      fitItems: [
        "You are dealing with a recommendation, ranking, matching, or prioritization problem that is hard to frame well.",
        "There is pressure to decide architecture or experimentation direction without much room for blind trial and error.",
        "The team needs technical depth and strategic reading, not more coordination noise.",
      ],
      notFitTitle: "When I am probably not the right fit",
      notFitItems: [
        "You only want generic execution outsourced without real clarity on the underlying problem.",
        "The context is still too early for any minimally serious technical reading.",
        "The expectation is to validate decisions through excitement alone, without criteria or evidence.",
      ],
      processTitle: "How I usually work",
      processItems: [
        {
          title: "1. Understand",
          body: "I enter through the problem, not the tool. The first step is clarifying context, objective, and constraints.",
        },
        {
          title: "2. Structure",
          body: "I turn ambiguity into hypotheses, criteria, and technical paths that can be compared honestly.",
        },
        {
          title: "3. Direct",
          body: "We leave with recommendations, trade-offs, and next steps the team can actually absorb.",
        },
      ],
    },
    projects: {
      eyebrow: "Selected work",
      title: "A few contexts where technical work turned into concrete delivery.",
      intro:
        "A small selection of projects where recommendation, modeling, and architecture helped solve real problems.",
      cards: [
        {
          title: "Famyle Recommendation System",
          description:
            "Intelligent matching between households and domestic workers, with skill extraction and multi-objective ranking tuned for real fit.",
          link: "https://famyle.com",
        },
        {
          title: "Expresso Goiás",
          description:
            "Personalized recommendations for public services, combining popularity, personalization, and fairness criteria.",
          link: "https://www.go.gov.br/",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "If you are evaluating a serious AI problem, we should talk.",
      body:
        "I am most valuable when there is a meaningful technical challenge, a real business context, and room to make evidence-based decisions.",
      primary: "Open email",
      secondary: "Explore work",
    },
    footer: {
      summary: "Applied AI research and technical consulting focused on real impact.",
      note: "Default in Portuguese. English available.",
    },
  },
};

export function getSiteCopy(locale: SiteLocale): SiteCopy {
  return siteCopy[locale];
}
