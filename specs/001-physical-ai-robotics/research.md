# Research: Physical AI & Humanoid Robotics Book Module

## Decision: Communication Model - Topics vs Services vs Actions in ROS 2
**Rationale**: Topics provide asynchronous, decoupled communication ideal for sensor streams and continuous data flow. Services offer synchronous request-response patterns for specific queries. Actions provide goal-oriented communication with feedback for long-running tasks. For educational purposes, this progression from topics → services → actions provides a natural learning curve.
**Alternatives considered**: Other middleware patterns like DDS directly, custom protocols. ROS 2's layered approach was chosen for its widespread adoption in robotics education.

## Decision: Agent Integration - Python Agent Mapping
**Rationale**: Python agents in ROS 2 ecosystems typically serve as bridges between high-level AI decision-making and low-level robot control. They subscribe to sensor data, run AI algorithms, and publish commands to robot controllers. This conceptual model helps learners understand the separation between perception, decision-making, and action.
**Alternatives considered**: C++ nodes, other programming languages. Python was chosen for its prevalence in AI education and ease of understanding for the target audience.

## Decision: URDF Abstraction Level
**Rationale**: For conceptual understanding, focusing on links (rigid bodies), joints (connection points with degrees of freedom), and sensors (perception elements) provides the essential elements without overwhelming detail. This allows learners to understand how physical structure impacts intelligence without getting lost in implementation details.
**Alternatives considered**: More detailed URDF elements like materials, colors, visual properties. These were excluded to maintain focus on structural-architectural relationships.

## Decision: Real-time vs Non-real-time Communication Trade-offs
**Rationale**: Understanding the distinction between time-critical (motor control, safety) and non-critical (path planning, high-level decision making) communication is crucial for embodied AI. This conceptual framework helps learners appreciate system architecture decisions in real robotic systems.
**Alternatives considered**: Treating all communication equally. The distinction was maintained to reflect real-world system design considerations.

## Additional Research Findings

### ROS 2 as a Robotic Nervous System
- Nodes represent functional units (like organs)
- Topics are the neural pathways carrying information
- Services are reflexive responses to specific stimuli
- Actions coordinate complex behaviors requiring feedback

### AI-Robot Communication Patterns
- Perception layer: Sensor data processing and interpretation
- Decision layer: AI algorithms making choices based on perception
- Action layer: Command execution and feedback control
- The Python agent often orchestrates this flow

### Humanoid Modeling with URDF
- Links: Rigid bodies (limbs, torso, head)
- Joints: Connections with specific degrees of freedom (hinges, ball joints)
- Sensors: Perception elements (cameras, IMUs, force sensors)
- The structure directly impacts how intelligence can be embodied

### Conceptual Flow: Sensors → AI → ROS 2 → Actuators
- Sensors provide environmental and self-state information
- AI processes information and makes decisions
- ROS 2 manages communication between components
- Actuators execute physical actions in the environment