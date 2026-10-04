export interface Reference {
  title: string
  authors?: string
  venue?: string
  /** What the result was measured on. Named because safety behaviour varies by model. */
  model?: string
  /** One line on why it is cited. */
  note?: string
  url: string
}

export const references: Record<string, Reference> = {
  pap: {
    title: 'How Johnny Can Persuade LLMs to Jailbreak Them',
    authors: 'Zeng et al.',
    model: 'GPT-3.5, GPT-4, Llama-2, Claude',
    note: '40 persuasion strategies, but each query is rewritten by a model, so the wrapper is not isolated.',
    url: 'https://arxiv.org/abs/2401.06561',
  },
  wildteaming: {
    title: 'WildTeaming at Scale',
    authors: 'Jiang et al.',
    note: 'Jailbreak tactics mined from real user logs. The source of the usage counts in this post.',
    url: 'https://arxiv.org/abs/2406.18510',
  },
  guardrails: {
    title: 'Guarding the Guardrails: A Taxonomy-Driven Approach to Jailbreak Detection',
    authors: 'Giarrusso et al.',
    model: 'Minerva-7B-instruct (Italian)',
    note: '1,364 dialogues from a 48-person red-teaming challenge, with occurrences and success rate per family.',
    url: 'https://arxiv.org/abs/2510.13893',
  },
  liu: {
    title: 'Jailbreaking ChatGPT via Prompt Engineering: An Empirical Study',
    authors: 'Liu et al.',
    model: 'GPT-3.5-Turbo and GPT-4, 2023',
    note: '78 in-the-wild prompts across ten patterns, with a jailbreak rate for each.',
    url: 'https://arxiv.org/abs/2305.13860',
  },
  dan: {
    title: '"Do Anything Now": Characterizing and Evaluating In-The-Wild Jailbreak Prompts',
    authors: 'Shen et al.',
    venue: 'CCS 2024',
    model: 'ChatGPT (GPT-3.5 and GPT-4)',
    note: '1,405 prompts from 131 communities, tracked over a year.',
    url: 'https://arxiv.org/abs/2308.03825',
  },
  competing: {
    title: 'Understanding Jailbreak Success: A Study of Latent Space Dynamics',
    authors: 'Ball, Kreuter, Panickssery',
    venue: 'EACL 2026',
    note: 'Harmfulness-detection suppression plus competing objectives as the mechanism.',
    url: 'https://arxiv.org/abs/2406.09289',
  },
  strongreject: {
    title: 'A StrongREJECT for Empty Jailbreaks',
    authors: 'Souly et al.',
    venue: 'NeurIPS 2024',
    note: 'The harm-content scorer used to validate the refusal proxy here.',
    url: 'https://arxiv.org/abs/2402.10260',
  },
  inertia: {
    title: 'Benchmarking Factual Robustness of LLMs via Multi-conversation Persuasion',
    model: 'DeepSeek-Chat',
    note: 'Names "refusal inertia": a first refusal propagating through later turns for consistency.',
    url: 'https://arxiv.org/html/2609.16777v1',
  },
  coldstart: {
    title: 'The Cold-Start Safety Gap in LLM Agents',
    authors: 'Sun, Liu, Weng',
    model: 'Llama-3.1-8B and six others',
    note: 'Prefilled refusal demonstrations as a defence; over-refusal rises with the number of them.',
    url: 'https://arxiv.org/abs/2606.07867',
  },
  manyshot: {
    title: 'Many-shot Jailbreaking',
    authors: 'Anthropic',
    model: 'Claude 2.0',
    note: 'Attack success follows a power law in the number of in-context examples.',
    url: 'https://www.anthropic.com/research/many-shot-jailbreaking',
  },
  attentioncloses: {
    title: 'When Attention Closes: How LLMs Lose the Thread in Multi-Turn Interaction',
    note: 'Goal-defining tokens lose attention while persisting in residual representations.',
    url: 'https://arxiv.org/pdf/2605.12922',
  },
  statedependent: {
    title: 'State-Dependent Safety Failures in Multi-Turn Language Model Interaction',
    model: 'Llama-3',
    note: 'Self-conditioning and the recovery curve: refusal is hard to restore once weakened.',
    url: 'https://arxiv.org/html/2603.15684v1',
  },
  refusalsfail: {
    title: 'When Refusals Fail: Unstable Safety Mechanisms in Long-Context LLM Agents',
    venue: 'AAAI 2026',
    model: 'GPT-4.1-nano, Grok 4 Fast and others, to 200K tokens',
    note: 'Refusal rates move in opposite directions across models as context grows.',
    url: 'https://arxiv.org/pdf/2512.02445',
  },
  safecompletions: {
    title: 'From Hard Refusals to Safe-Completions: Toward Output-Centric Safety Training',
    authors: 'OpenAI',
    model: 'GPT-5',
    note: 'The reward evaluates the completion rather than the request.',
    url: 'https://cdn.openai.com/pdf/be60c07b-6bc2-4f54-bcee-4141e1d6c69a/gpt-5-safe_completions.pdf',
  },
  tradeoff: {
    title: 'The Refusal–Compliance Tradeoff: A Large-Scale Safety Behavior Audit',
    model: '21 open-weight models',
    note: 'Partial compliance is 15.8% of responses; refusal rate is a poor proxy for safety.',
    url: 'https://arxiv.org/html/2605.05427',
  },
  refusalbench: {
    title: 'RefusalBench: Why Refusal Rate Misranks Frontier LLMs',
    note: 'Refusal rate misorders frontier models on biological research prompts.',
    url: 'https://arxiv.org/pdf/2605.21545',
  },
  classifiers: {
    title: 'Constitutional Classifiers: Defending Against Universal Jailbreaks',
    authors: 'Anthropic',
    note: 'Guards trained from natural-language rules. 3,000+ red-team hours found no universal jailbreak.',
    url: 'https://arxiv.org/pdf/2501.18837',
  },
  classifiersPlus: {
    title: 'Constitutional Classifiers++: Efficient Production-Grade Defenses',
    authors: 'Anthropic',
    url: 'https://arxiv.org/pdf/2601.04603',
  },
  deliberative: {
    title: 'Deliberative Alignment: Reasoning Enables Safer Language Models',
    authors: 'Guan et al., OpenAI',
    model: 'o1',
    note: 'The model reasons over an explicit safety specification before answering.',
    url: 'https://arxiv.org/pdf/2412.16339',
  },
  turnsurgery: {
    title: 'Turn Surgery: Counterfactual Replay of Assistant History',
    note: 'The transcript-editing method used in the conversation experiments here.',
    url: 'https://arxiv.org/abs/2609.05882',
  },
  accumulation: {
    title: 'Accumulation versus Organisation in Multi-Turn Jailbreaks',
    url: 'https://arxiv.org/abs/2608.01117',
  },
  decodable: {
    title: 'Decodable but Not Corrected by Fixed Residual-Stream Linear Steering',
    note: 'A failure signal decodes at 71.6% balanced accuracy while five families of linear steering produce no behavioural correction.',
    url: 'https://arxiv.org/abs/2605.05715',
  },
  steeringcontrol: {
    title: 'SteeringControl: Holistic Evaluation of Alignment Steering in LLMs',
    note: 'Reports properties that are readable from the residual stream but not steerable.',
    url: 'https://arxiv.org/abs/2509.13450',
  },
  roguescalpel: {
    title: 'The Rogue Scalpel: Activation Steering Compromises LLM Safety',
    note: 'Random and benign steering directions jailbreak at measurable rates, so a steering result needs a matched random control.',
    url: 'https://arxiv.org/abs/2509.22067',
  },
  arditi: {
    title: 'Refusal in Language Models Is Mediated by a Single Direction',
    authors: 'Arditi et al.',
    venue: 'NeurIPS 2024',
    url: 'https://arxiv.org/abs/2406.11717',
  },
  cones: {
    title: 'The Geometry of Refusal in LLMs: Concept Cones and Representational Independence',
    authors: 'Wollschläger et al.',
    venue: 'ICML 2025',
    url: 'https://arxiv.org/abs/2502.17420',
  },
  lostmultiturn: {
    title: 'LLMs Get Lost in Multi-Turn Conversation',
    venue: 'ICLR 2026',
    url: 'https://proceedings.iclr.cc/paper_files/paper/2026/file/59f6421e64707225fdf5b28840679a07-Paper-Conference.pdf',
  },
  trace: {
    title: 'TRACE: Task-aware Adaptive Self-Evolving Agentic Jailbreaking',
    model: 'GPT-5.2, Gemini-3-Flash, DeepSeek-V4-pro',
    note: 'Bypass rates of 0.90–1.00 on AgentHarm.',
    url: 'https://arxiv.org/pdf/2605.30883',
  },
  boundarypoint: {
    title: 'Boundary Point Jailbreaking',
    authors: 'UK AI Safety Institute',
    note: 'Black-box search for prompts near a safety classifier’s decision boundary.',
    url: 'https://www.aisi.gov.uk/blog/boundary-point-jailbreaking-a-new-way-to-break-the-strongest-ai-defences',
  },
}
