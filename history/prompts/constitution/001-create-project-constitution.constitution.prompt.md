---
id: 1
title: Create Project Constitution
stage: constitution
date: 2025-12-15
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: claude-code
command: /sp.constitution
labels: ["constitution", "spec-driven", "ai-book", "rag-chatbot"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/plan-template.md
 - .specify/templates/spec-template.md
 - .specify/templates/tasks-template.md
tests:
 - null
---

## Prompt

```
/sp.constitution

Project: AI/Spec-Driven Book with Embedded RAG Chatbot

Core Principles:
- AI-native authoring using Spec-Kit Plus and Claude Code
- Technical accuracy from official sources
- Clear developer-focused writing
- Reproducible setup and deployment

Key Standards:
- Book written with Docusaurus and deployed on GitHub page
- RAG chatbot grounded only in book content or user-selected text
- Stack: OpenAI Agents/Chatkit, FastAPI, Neon Postgres, Qdrant Cloud
- Runnable, well-documented code

Constraints:
- GitHub-based source control
- No hallucinated responses
- End-to-end reproducibility

Success Criteria:
- Live book on GitHub Pages
- Fully functional embedded RAG chatbot
- All specs implemented via Spec-Kit Plus
- Coherent end-to-end conceptual narrative
- Clear understanding of how the book and RAG chatbot work together
- Suitable foundation for planning and implementation phases
```

## Response snapshot

Created a comprehensive project constitution for the AI/Spec-Driven Book with Embedded RAG Chatbot project. The constitution includes:

1. Core Principles:
   - AI-Native Authoring: Following Spec-Kit Plus methodology with Claude Code integration
   - Spec-Driven Development: All development begins with comprehensive specifications
   - Technical Accuracy and Grounding: RAG responses grounded only in book content
   - Reproducible Setup: Fully documented and reproducible environments
   - Modular Architecture: Loosely coupled system components
   - End-to-End Testing: Focus on RAG accuracy and quality

2. Technology Stack Requirements:
   - Docusaurus for book platform on GitHub Pages
   - OpenAI Agents/Chatkit, FastAPI, Neon Postgres, Qdrant Cloud for RAG

3. Development Workflow:
   - Spec-first development
   - Code reviews verifying constitutional compliance
   - Automated testing requirements

4. Governance section establishing constitutional authority

Updated template files to align with the new constitution:
- plan-template.md: Added constitution check gates
- spec-template.md: Updated functional requirements and success criteria
- tasks-template.md: Updated with project-specific tasks

## Outcome

- ✅ Impact: Created foundational project constitution establishing key principles and development practices
- 🧪 Tests: No tests required for constitution creation
- 📁 Files: Updated 4 files (.specify/memory/constitution.md, .specify/templates/plan-template.md, .specify/templates/spec-template.md, .specify/templates/tasks-template.md)
- 🔁 Next prompts: Plan and implement initial book structure and RAG components
- 🧠 Reflection: Constitution provides clear governance framework for the AI/Spec-Driven Book project

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin feature specification for book content management