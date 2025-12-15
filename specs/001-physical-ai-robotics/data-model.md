# Data Model: Physical AI & Humanoid Robotics Book Module

## Chapter
- **name**: String - Title of the chapter
- **description**: String - Brief overview of the chapter content
- **learning_objectives**: List<String> - Specific learning goals for the chapter
- **concepts**: List<Concept> - Key concepts covered in the chapter
- **architecture_elements**: List<ArchitectureElement> - System architecture components discussed
- **real_world_relevance**: String - How the concepts apply in real-world scenarios
- **takeaways**: List<String> - Key points learners should remember
- **relationships**: Links to related chapters and concepts

## Module
- **title**: String - Name of the module (e.g., "The Robotic Nervous System")
- **chapters**: List<Chapter> - Collection of chapters in the module
- **overall_objective**: String - Primary learning goal of the entire module
- **prerequisites**: List<String> - Knowledge required before starting
- **progressive_difficulty**: Boolean - Whether content builds in complexity

## Concept
- **name**: String - Name of the concept (e.g., "ROS 2 Middleware")
- **definition**: String - Clear explanation of the concept
- **importance**: String - Why this concept matters for physical AI
- **examples**: List<String> - Real-world examples of the concept
- **related_concepts**: List<Concept> - Other concepts this connects to

## ArchitectureElement
- **name**: String - Name of the architectural component (e.g., "Node")
- **description**: String - What the component does
- **role**: String - How it fits into the overall system
- **interactions**: List<String> - How it communicates with other elements
- **diagram_path**: String - Path to related architecture diagram

## Learner
- **background**: String - Current knowledge level and expertise
- **goals**: List<String> - What the learner wants to achieve
- **challenges**: List<String> - Potential obstacles in learning
- **progression_path**: List<Chapter> - Recommended sequence for learning

## Relationship: Chapter to Concepts
- Each Chapter contains multiple Concepts
- Concepts may span across multiple Chapters
- ArchitectureElements are introduced progressively through Chapters

## Relationship: Module to Chapters
- Each Module contains exactly 3 Chapters (as specified in requirements)
- Chapters build upon each other in progressive difficulty
- Each Chapter contributes to the overall Module objective

## State Transitions
- Learner state: [No knowledge] → [Foundational understanding] → [Conceptual mastery] → [Application capability]
- Each Chapter advances the learner through these states for specific concepts