# Common Terminology Reference

This document defines key terms used consistently throughout the AI-Robot Brain module to ensure clarity and understanding.

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

### SLAM (Simultaneous Localization and Mapping)
- The computational problem of constructing or updating a map of an unknown environment while simultaneously keeping track of an agent's location within it

### Visual SLAM
- SLAM using visual sensors (cameras) as the primary input
- Creates 3D maps from visual information

### Path Planning
- The computational process of finding a path from a start point to a goal point
- Often includes obstacle avoidance and optimization criteria

### Motion Planning
- The process of breaking down a desired movement task into discrete movements
- Takes into account the physical constraints of the robot

### Bipedal Locomotion
- The act of walking on two legs
- Presents unique control and balance challenges for humanoid robots

### Reality Gap
- The difference between simulated and real-world robot behavior
- Affects the transfer of learned behaviors from simulation to reality

### Synthetic Data
- Artificially generated data that mimics real-world observations
- Used for training AI systems without requiring real-world data collection

### Photorealistic Simulation
- Simulation that closely replicates the visual appearance of the real world
- Used for generating synthetic data that transfers well to real systems