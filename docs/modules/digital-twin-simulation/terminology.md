# Common Terminology Reference

This document defines key terms used consistently throughout the Digital Twin Simulation module to ensure clarity and understanding.

## Core Terms

### Digital Twin
- A virtual representation of a physical system that enables simulation and analysis
- In robotics, it connects physical robots with virtual models for training and validation

### Physics Simulation
- Computer modeling of physical phenomena like gravity, collisions, and constraints
- Enables realistic robot interaction with virtual environments

### Gravity Modeling
- Simulation of gravitational forces affecting objects in the virtual environment
- Critical for realistic movement and interaction of robots and objects

### Collision Detection
- Algorithmic process to identify when objects make contact in the simulation
- Essential for realistic physical interaction and safety

### Constraints
- Limitations on the degrees of freedom of objects or joints in simulation
- Define how objects can move relative to each other

### Gazebo
- An open-source robotics simulator that provides physics simulation and sensor modeling
- Commonly used for robot simulation and testing

### Unity
- A game development platform adapted for robotics simulation and digital twin creation
- Provides high-quality rendering and environment design capabilities

### LiDAR (Light Detection and Ranging)
- A sensor technology that measures distances using laser light
- Simulated to provide 3D point cloud data in digital twins

### Depth Camera
- A sensor that captures distance information for each pixel in an image
- Provides 3D spatial information for environment perception

### IMU (Inertial Measurement Unit)
- A sensor that measures acceleration, orientation, and angular velocity
- Simulated with drift and noise characteristics for realism

### Sim2Real (Simulation to Reality)
- The process of transferring knowledge or behaviors learned in simulation to real-world applications
- A key challenge in robotics requiring careful sensor and environment modeling

### Sensor Simulation
- Modeling of real-world sensors in virtual environments
- Includes realistic noise, latency, and imperfection modeling

### Environment Design
- Creation of virtual worlds for robot training and testing
- Includes geometric, visual, and physical properties

### Human-Robot Interaction (HRI)
- The study and design of interactions between humans and robots
- In simulation, this involves modeling both human and robot behaviors

### Noise Modeling
- Simulation of real-world sensor imperfections and uncertainties
- Critical for sim2real transfer success

### Latency
- Time delay between sensor measurement and data availability
- Must be modeled accurately for realistic simulation

### Realism vs. Efficiency Trade-off
- The balance between simulation accuracy and computational performance
- Key consideration in digital twin design