# Data Model: Digital Twin Simulation for Embodied AI

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
- **title**: String - Name of the module (e.g., "The Digital Twin")
- **chapters**: List<Chapter> - Collection of chapters in the module
- **overall_objective**: String - Primary learning goal of the entire module
- **prerequisites**: List<String> - Knowledge required before starting
- **progressive_difficulty**: Boolean - Whether content builds in complexity

## Concept
- **name**: String - Name of the concept (e.g., "Physics Simulation")
- **definition**: String - Clear explanation of the concept
- **importance**: String - Why this concept matters for digital twin simulation
- **examples**: List<String> - Real-world examples of the concept
- **related_concepts**: List<Concept> - Other concepts this connects to

## ArchitectureElement
- **name**: String - Name of the architectural component (e.g., "Simulation Layer")
- **description**: String - What the component does
- **role**: String - How it fits into the overall system
- **interactions**: List<String> - How it communicates with other elements
- **diagram_path**: String - Path to related architecture diagram

## Learner
- **background**: String - Current knowledge level and expertise
- **goals**: List<String> - What the learner wants to achieve
- **challenges**: List<String> - Potential obstacles in learning
- **progression_path**: List<Chapter> - Recommended sequence for learning

## SimulationComponent
- **name**: String - Name of the simulation component (e.g., "Physics Engine")
- **type**: String - Type of component (physics, sensor, environment, etc.)
- **function**: String - What the component does in the simulation
- **parameters**: List<Parameter> - Configurable parameters for the component
- **integration_points**: List<String> - How it connects with other components

## Parameter
- **name**: String - Name of the parameter
- **type**: String - Data type (float, int, boolean, etc.)
- **range**: String - Valid range of values
- **default_value**: String - Default setting
- **impact**: String - How changing this affects simulation behavior

## SensorType
- **name**: String - Name of the sensor (e.g., "LiDAR", "IMU", "Depth Camera")
- **function**: String - What the sensor measures
- **simulation_model**: String - How the sensor is modeled in simulation
- **realism_factors**: List<String> - Aspects of realism (noise, latency, etc.)
- **sim2real_challenges**: List<String> - Issues when transferring to real systems

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