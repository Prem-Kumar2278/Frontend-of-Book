# AI/Spec-Driven Book with Embedded RAG Chatbot Constitution

## Core Principles

### I. AI-Native Authoring
All content creation and development follows Spec-Kit Plus methodology with Claude Code integration; Documentation must be technically accurate from official sources; Every feature starts with a clear specification before implementation.

### II. Spec-Driven Development
All development begins with comprehensive specifications; Features are implemented according to agreed-upon specs; Changes to functionality require spec updates before code changes.

### III. Technical Accuracy and Grounding (NON-NEGOTIABLE)
All RAG chatbot responses must be grounded only in book content or user-selected text; No hallucinated responses allowed; All technical claims must be verified against official documentation.

### IV. Reproducible Setup
Every environment must be fully reproducible from documentation; All dependencies and setup procedures must be clearly documented; Local development and production deployments follow identical processes.

### V. Modular Architecture
System components (book engine, RAG service, chatbot) must be modular and loosely coupled; Each component should be independently deployable and testable; Clear API contracts between services.

### VI. End-to-End Testing
Focus areas requiring integration tests: RAG retrieval accuracy, chatbot response quality, book content indexing, search functionality, deployment pipeline integrity.

## Technology Stack Requirements
- Book platform: Docusaurus framework deployed on GitHub Pages
- RAG stack: OpenAI Agents/Chatkit, FastAPI backend, Neon Postgres, Qdrant Cloud vector storage
- Code must be runnable, well-documented, and follow security best practices
- All external dependencies must have acceptable licenses for the project

## Development Workflow
- All features must begin with a spec document before implementation
- Code reviews must verify compliance with architectural principles
- All changes must pass automated tests before merging
- Documentation updates must accompany all functional changes
- Branch naming follows pattern: feature/[feature-name], bugfix/[issue], hotfix/[issue]
- Pull requests require at least one approval before merging

## Governance

This constitution governs all aspects of the AI/Spec-Driven Book with Embedded RAG Chatbot project. All development activities, architectural decisions, and implementation choices must comply with these principles. Amendments to this constitution require explicit approval from project stakeholders and must include a migration plan for existing code. All pull requests and code reviews must verify constitutional compliance.

**Version**: 1.0.0 | **Ratified**: 2025-12-15 | **Last Amended**: 2025-12-15
