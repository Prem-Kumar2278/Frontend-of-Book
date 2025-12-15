# Common Terminology Reference

This document defines key terms used consistently throughout the Physical AI & Humanoid Robotics module to ensure clarity and understanding.

## Core Terms

### ROS 2 (Robot Operating System 2)
- A flexible framework for writing robot software
- Provides services designed for a heterogeneous computer cluster
- Includes hardware abstraction, device drivers, libraries, visualizers, message-passing, package management, and more

### Middleware
- Software that provides common services and capabilities to applications beyond what's offered by the operating system
- In robotics, it handles communication between different software components

### Node
- A process that performs computation in ROS
- Nodes are connected to form a network that allows them to communicate with each other

### Topic
- A named bus over which nodes exchange messages
- Provides asynchronous, many-to-many communication

### Service
- A synchronous request/response communication pattern in ROS
- One node provides a service, other nodes request it

### Action
- A goal-oriented communication pattern with feedback in ROS
- Used for long-running tasks that may be preempted

### URDF (Unified Robot Description Format)
- An XML format for representing a robot model
- Describes physical and visual properties of a robot

### Link
- A rigid body in a robot model
- Describes the physical properties of a robot part

### Joint
- Connects two links together in a robot model
- Defines the kinematic and dynamic properties of the connection

### Sensor
- A component that measures physical properties and reports the measurements
- Used for perception in robotic systems

### AI Agent
- A system that perceives its environment and takes actions to achieve goals
- In robotics, often bridges high-level decision-making with low-level control

### Embodied Intelligence
- Intelligence that emerges from the interaction between an agent and its physical environment
- The physical form influences cognitive capabilities

### Simulation-to-Reality (Sim2Real)
- The process of transferring knowledge or behaviors learned in simulation to real-world applications
- A key challenge in robotics

### Real-time Communication
- Communication with strict timing constraints
- Required for time-critical operations like safety and motor control

### Non-real-time Communication
- Communication without strict timing constraints
- Suitable for high-level decision making and planning