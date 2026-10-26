---
title: "The Work Outlives the Agent"
titleLines:
  - "The Work Outlives"
  - "the Agent"
subtitle: "Project continuity, human responsibility, and what an Agent lifecycle must preserve."
description: "What an Agent lifecycle must preserve as executors, intent, and Runtimes change: project continuity, current authority, evidence, and human responsibility."
shareTitle: "The Work Outlives the Agent"
shareImageTitle: "The Work Outlives the Agent"
shareSubtitle: "The project continues. Responsibility must remain intelligible."
shareDescription: "A project can outlive its Agents. A personal essay on project continuity, human responsibility, and the shared lifecycle contract MPLP is testing."
shareImage: /social/the-work-outlives-the-agent-og.png
shareImageAlt: "The Work Outlives the Agent — Jearon Wong"
publishDate: 2026-10-27
updatedAt: 2026-10-27
cluster: ai-agent-lifecycle
projectProof: MPLP
track: lifecycle
contentRole: essay
publicationClass: thought
editorialTrack: lifecycle
canonicalRoute: /essays/the-work-outlives-the-agent/
canonicalParent: /essays/
primaryAudience: Architect
secondaryAudiences:
  - Builder
  - Governance
  - Decision-maker
distinctReaderQuestion: "What must a project preserve when Agents, intent, models, or Runtimes change, and how should people retain responsibility?"
sourceRefs:
  - "Author-approved public essay draft dated 2026-10-26"
  - "https://www.jearonwong.com/essays/ai-agent-lifecycle-it-was-not-designed-it-grew/"
  - "https://www.jearonwong.com/essays/when-an-agent-says-done-who-accepts-the-outcome/"
  - "Primary market and standards documentation cited inline"
indexability: index
nextSteps:
  - /lifecycle/
  - /projects/mplp/
  - /essays/when-an-agent-says-done-who-accepts-the-outcome/
maxClickDepth: 3
readingTimeMinutes: 13
evidenceLevel: PROJECT LIFECYCLE ESSAY
featured: true
summary: "The project continues. Responsibility must remain intelligible."
summaryLines:
  - "The project continues."
  - "Responsibility must remain intelligible."
ogImage: /social/the-work-outlives-the-agent-og.png
images:
  - url: /figures/the-work-outlives-the-agent-project-continuity.svg
    alt: "One project continues through changes in Agents, intent, models, and Runtimes."
    caption: "Conceptual continuity requirements across changing executors; cross-Runtime portability remains to be demonstrated."
    width: 1200
    height: 1020
  - url: /figures/the-work-outlives-the-agent-human-responsibility.svg
    alt: "Human responsibilities draw relevant portions of evidence from multiple Agent tasks in a hypothetical procurement project."
    caption: "Illustrative responsibility mapping; the shared project authority does not imply one person per Agent."
    width: 1200
    height: 1080
series: "Define The AI Agent Lifecycle"
seriesOrder: 8
status: published
tags:
  - AI Agent Lifecycle
  - Lifecycle Governance
  - Authority Boundary
  - Evidence Chain
  - Accepted Outcome
  - Protocol Engineering
relatedIdeas:
  - ai-agent-lifecycle
  - lifecycle-governance
  - accepted-outcome
  - protocol-engineering
relatedProjects:
  - MPLP
  - Cognitive OS
---

<blockquote class="essay-pull-quote">
  <p>A project does not start over when an Agent stops.</p>
  <footer>Jearon Wong</footer>
</blockquote>

The objective remains. So do the constraints, the decisions already made, the changes already introduced, and the consequences of actions that cannot simply be repeated. Someone still needs to know what is valid now and what may happen next.

An Agent can be replaced. A model can change. Execution can move to another Runtime. The person reviewing the work may arrive long after the original conversation has ended.

The work still belongs to the same project.

This is the problem I was trying to describe when I developed my definition of AI Agent Lifecycle in 2025 and released MPLP, the Multi-Agent Lifecycle Protocol, in December that year. I wanted a project to remain understandable and governable as the systems doing its work changed.

The December 2025 material already described a structured, schema-driven project lifecycle. Its central sequence was Context, Plan, Confirm, Trace, and Learning. It included Intent and Delta-Intent, impact analysis, confirmation, and compensation concepts at the specification level. The Development Runtime came later, as a way to test those ideas against actual work.

The project lifecycle was part of the original problem. Building the Runtime exposed how much practical discipline was required to preserve it.

At the time, I found far more discussion about Agent capabilities and orchestration than about the continuity of project responsibility. Lifecycle discussion already existed: Google's April 2025 A2A announcement described a Task object with a lifecycle and support for long-running work. The distinction I was pursuing concerned the project that had to remain coherent across those tasks. [A2A's original announcement](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/).

## The market has widened the term

The market has since developed a much richer vocabulary. The important question is what each definition takes as its subject.

IBM's Agent Development Lifecycle covers the development and management of enterprise Agents, including planning, building, testing, deployment, operations, and governance. ADLC.io describes an Agentic Development Life Cycle organized around intent, validation, observation, and human accountability. Both reach beyond the mechanics of a model call. [IBM ADLC](https://www.ibm.com/think/topics/agent-development-lifecycle-adlc), [ADLC.io](https://www.adlc.io/).

Execution systems answer another set of questions. LangGraph supports persisted state and resumable human intervention. Temporal provides durable Workflow execution. These are substantial capabilities. Their documentation also makes clear that applications must handle side effects correctly, including operations that may be repeated during recovery. [LangGraph interrupts](https://docs.langchain.com/oss/python/langgraph/interrupts), [Temporal Activity definitions](https://docs.temporal.io/activity-definition).

A2A provides communication and task semantics between independent Agent systems. Oracle Agent Spec provides a portable way to describe Agents and Flows across frameworks. Enterprise platforms such as AgentCore add managed execution and governance capabilities. These efforts address real integration problems. [A2A specification](https://a2a-protocol.org/latest/specification/), [Oracle Agent Spec](https://github.com/oracle/agent-spec), [AWS AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html).

They address related problems at different layers. A lifecycle can describe how an Agent system is developed, how a task progresses, or how an execution recovers. My concern is the project that continues through all of those events.

The project's authoritative objective, current permissions, actual effects, applicable evidence, and acceptance responsibilities need to remain intelligible as its executors change.

## The project is the continuing reference point

My current definition is:

> AI Agent Lifecycle is the continuity of intent, context, role, plan, confirmation, execution, evidence, learning, and accepted outcome across agent activation, engineering process, project, and cross-project dimensions.

I set out that definition in [AI Agent Lifecycle: It Was Not Designed. It Grew.](https://www.jearonwong.com/essays/ai-agent-lifecycle-it-was-not-designed-it-grew/)

The four dimensions describe the reach of that continuity. Agent activation concerns the execution currently taking place. The engineering process connects clarification, planning, implementation, verification, change, and review. The project carries the objective, constraints, decisions, and outcomes through time. The enterprise cross-project dimension concerns work moving between projects, departments, and responsibility boundaries.

The project is the continuing reference point. An Agent's individual lifetime can be much shorter, or its reusable capabilities can remain useful across several projects.

Some work needs a temporary Agent. Some needs an Agent that can pause and resume. Some benefits from continuing project knowledge. Some justifies reuse elsewhere. A lifecycle model should accommodate these choices without making permanent Agents or disposable Agents a universal rule.

Process, permission, working context, and evidence can have different retention periods. Ending a process must not erase responsibility. Retaining an Agent must not preserve permission indefinitely. Resuming work must not silently reactivate an authorization that has expired or been withdrawn.

Learning from earlier work can inform future decisions. Reusing that learning does not by itself authorize a change in policy, scope, or responsibility.

The same principle applies when changing models or Runtimes. Continuity means preserving an intelligible relationship to the project's current state. A new execution environment still has to establish what it is allowed to do. It cannot obtain authority merely by receiving the previous context.

A lifecycle therefore constrains automated continuation. It needs to express when work may proceed, when a change requires renewed judgment, when an action must stop, and when a result can be accepted.

<figure class="article-figure article-figure--diagram">
  <a href="/figures/the-work-outlives-the-agent-project-continuity.svg" target="_blank" rel="noopener" aria-label="Open Figure 1 at full size"><img src="/figures/the-work-outlives-the-agent-project-continuity.svg" alt="One project continues through changing intent and acceptance decisions while Agent A ends, Agent B starts, and a reusable Agent participates in a later phase. Model and Runtime changes require current authority to be established." width="1200" height="1020" loading="lazy" decoding="async" /></a>
  <figcaption>Figure 1. The project is the continuing reference point. Executors may end, start, or return; each continuation still needs a relationship to the current objective, authority, evidence, and acceptance responsibility. This is a conceptual requirement; cross-Runtime portability remains to be demonstrated. <a href="/figures/the-work-outlives-the-agent-project-continuity.svg" target="_blank" rel="noopener">View full-size figure.</a></figcaption>
</figure>

## Responsibility spans Agents

That brings people into the model, but it does not turn Agents into human employees.

Human roles carry business responsibilities. Agent roles describe bounded participation in work. Naming an Agent after a department or profession does not transfer the authority, judgment, or accountability associated with that human role.

The relationship also cannot be reduced to one person supervising one Agent.

A person may need evidence from several Agents, while being responsible for only part of each Agent's work. A single Agent's output may contribute to several different decisions, each belonging to a different human role.

Consider a hypothetical project to procure and introduce a new business system. Agents might compare proposals, examine terms, prepare an implementation plan, and verify results. The finance role needs relevant costs and financial commitments. The technical role needs implementation and verification evidence. The project owner needs the current delivery position, dependencies, and unresolved decisions.

These people do not need identical views. They need sufficient evidence for the decisions they are authorized to make. One person may hold several roles, but the boundaries remain distinct: budget approval does not establish technical acceptance, and technical verification does not authorize every external commitment.

The system should assemble information around those responsibilities. It should identify what is current, where the evidence came from, what it covers, and what remains unknown. A concise summary that conceals missing evidence would weaken the decision it is supposed to support.

<figure class="article-figure article-figure--diagram">
  <a href="/figures/the-work-outlives-the-agent-human-responsibility.svg" target="_blank" rel="noopener" aria-label="Open Figure 2 at full size"><img src="/figures/the-work-outlives-the-agent-human-responsibility.svg" alt="In a hypothetical procurement project, finance, technical, and delivery responsibilities each draw relevant portions of evidence from multiple Agent tasks. A single task can inform several decisions, all grounded in the same project authority." width="1200" height="1080" loading="lazy" decoding="async" /></a>
  <figcaption>Figure 2. An illustrative responsibility map for the procurement example. People receive the portions of Agent work relevant to their decisions. One person may hold several roles, and one Agent's work may inform several decisions. <a href="/figures/the-work-outlives-the-agent-human-responsibility.svg" target="_blank" rel="noopener">View full-size figure.</a></figcaption>
</figure>

Within a project, these different views must refer to the same authoritative source of truth for its objective, decisions, permissions, and accepted state. Individual Agents can receive different working contexts without acquiring competing versions of project truth.

This does not require every enterprise fact to live in one database. Existing business systems retain their own authority. The requirement is that the project has an explicit basis for deciding which facts and decisions govern its next action.

Across projects and departments, the boundaries remain necessary. A receiving project should know what was requested, what was delegated, which result was accepted, and what permission accompanies its use. Reusing an Agent or a result must not silently import another project's authority or confidential context.

## Three lessons from development

These principles became more concrete when I began using an MPLP-based Development Runtime in the development of MPLP itself.

### When the objective changes, old approval is not enough

One lesson concerned a change in the project's objective after work had already been planned. We had planned a correction followed by updates to dependent work. A change in priority introduced a prerequisite that had to be resolved first. Saving the latest instruction would preserve the words, but leave the applicability of the old plan unresolved.

The correction made the change and its relationship to subsequent work explicit. In bounded development checks, an obsolete version of the work could not simply stand in for current authorization. Earlier evidence remained part of the history without automatically establishing that the changed objective had been satisfied.

The practical issue was whether a later execution could distinguish what had once been approved from what was valid now. It was a test of explicit change handling, not proof that the system could autonomously detect every significant change in intent.

### Recovery must account for effects already produced

A second lesson came from a small, controlled change to a local regression test. An operation reporting success was insufficient to explain the state of the work after interruption or incomplete evidence.

The important questions were whether the intended effect had occurred, whether the result could be verified, and whether further action was still authorized. Repeating an operation merely because its record was incomplete could create another problem instead of resolving the original uncertainty.

The bounded implementation distinguished the effect from the record describing it and treated recovery as a separate decision. The public lesson is an evaluation requirement: after an interruption, a system should be able to account for the work before deciding to repeat, continue, or remediate it.

This was a local development case. External operations introduce additional constraints, including consequences that cannot be reversed. They require their own verification and recovery arrangements.

### Completed assignments still need an acceptance decision

A third lesson appeared in a controlled, fixture-based multi-Agent coordination case. Two participants completed their assignments. A handoff was recorded. Competing proposals were resolved. The overall work still had no accepted outcome.

The participants could complete their assigned work without possessing authority to accept the project's result. The evidence still needed to be evaluated against the current objective and the relevant role's acceptance criteria.

Later bounded development checks examined whether results remained applicable to the current work rather than acquiring authority merely by arriving or reporting completion. The project needed a valid decision about those results, regardless of how many Agents had contributed.

I discussed earlier findings in [When an Agent Says "Done," Who Accepts the Outcome?](https://www.jearonwong.com/essays/when-an-agent-says-done-who-accepts-the-outcome/) These cases are development evidence for selected behaviours. They are not independent production benchmarks, and the controlled coordination case does not establish live cross-vendor operation.

Their shared significance is that the project has to preserve a valid next step through change, interruption, and collaboration. An Agent's completion record alone cannot supply that continuity.

## The shared contract beneath the Runtime

This is why I see a protocol question beneath the Runtime question.

Enterprises can implement much of this behaviour with existing technology. Durable execution systems, business process engines, identity systems, databases, and custom application code are useful foundations. BPMN already provides a formal standard for business process modelling. Established systems can represent substantial governance and long-running work. [BPMN 2.0.2](https://www.omg.org/spec/BPMN/2.0.2/About-BPMN).

The cost appears when the relationships between these mechanisms have to be interpreted and rebuilt for every Agent stack. One system's completed task may not carry another system's meaning of an accepted result. A transferable configuration does not by itself establish which permissions and evidence remain valid for work already underway.

MPLP is intended to provide shared lifecycle semantics for those relationships. A Runtime implements them through its own execution and state management. An enterprise application supplies its business rules, sources of truth, and responsibility assignments.

The POSIX analogy is useful at this boundary. POSIX specifies externally observable interfaces and behaviour to support application portability across implementations. It does not require identical internals. [POSIX scope](https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap01.html).

For an Agent lifecycle protocol, the corresponding ambition is that compatible implementations can preserve the meaning of work as execution moves between them. Models may produce different proposals. The governing meaning of authorization, evidence applicability, responsibility transfer, and acceptance should remain interpretable under the shared contract.

That ambition has to be tested. Another implementation should be able to establish what it must preserve, what it must reject, and what remains outside its authority. An open protocol must publish enough semantics for independent compatibility; its essential meaning cannot depend on a private Runtime's undocumented behaviour.

Implementations can still differ in scheduling, efficiency, cost, and user experience. The protocol establishes the common boundary. Runtime engineering determines how effectively a system operates within it.

Our Development Runtime provides a way to challenge that boundary with actual engineering work. It is one implementation path, with bounded findings and unfinished validation. Independent implementations, cross-Runtime continuity, and enterprise deployments remain necessary evidence. The reach of the definition is broader than the scope already demonstrated.

## Enterprise adoption must lower coordination work

That distinction also matters when discussing enterprise adoption.

Enterprise Agent applications already exist. Deloitte's 2026 enterprise AI report describes examples in operational settings, alongside continuing integration and governance challenges. There is no single future date on which enterprises will begin using Agents. [Deloitte's State of AI in the Enterprise](https://www.deloitte.com/global/en/what-we-do/capabilities/ai/research/state-of-ai-in-enterprise.html).

My expectation is that broad adoption of long-running, consequential, cross-system autonomous work will require several more years of uneven maturation. Three to five years is a working forecast, not an established minimum or a universal schedule. Some bounded applications are useful now. Other applications will be constrained by organizational readiness, integration economics, or the consequences of error.

Enterprises need measurable value alongside controlled delegation, recoverable work, understandable evidence, and the ability to change technical suppliers. They also need a system that people can use within their professional responsibilities.

This is where I disagree with a demanding version of the AI-native company narrative: the idea that the whole workforce must become substantially more technically sophisticated before an Agent OS can function.

Training and changes in work are reasonable. Requiring every employee to understand Agent orchestration, context management, execution recovery, and evidence reconciliation would expose a failure of the system's abstraction.

If ordinary business decisions require people to reconstruct the machinery, the system has transferred coordination work to its users. Adding more Agents may then increase the burden it was supposed to remove.

The product test is whether a person can understand and decide the part of the work that belongs to their role. Routine work should progress within established authority. Material changes, uncertainty, and exceptions should reach the appropriate responsibility with enough evidence for judgment.

That is why I am building on MPLP and the Runtime approach around it. A shared lifecycle contract offers a basis for preserving work across changing execution systems. A Runtime can make that contract operational. Views organized around human responsibilities can make the resulting automation usable within an organization.

For long-lived work spanning systems and responsibility boundaries, I believe this is the right foundation. Its value must be demonstrated through independent compatibility, useful deployments, lower coordination cost, and results that the responsible people can accept.

The work outlives the Agent. An enterprise should be able to change the executor without losing the work, and use automation without asking every employee to become the operating system.
