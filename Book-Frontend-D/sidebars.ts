import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manual sidebar configuration for the robotics curriculum
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Physical AI & Humanoid Robotics',
      items: [
        {
          type: 'category',
          label: 'Module 1: Physical AI & Robotics Foundations',
          items: [
            'physical-ai-robotics/intro',
            'physical-ai-robotics/chapter-1-ros2-foundations',
            'physical-ai-robotics/chapter-2-ai-robot-communication',
            'physical-ai-robotics/chapter-3-humanoid-modeling-urdf',
          ],
        },
        {
          type: 'category',
          label: 'Module 2: Digital Twin Simulation',
          items: [
            'digital-twin-simulation/intro',
            'digital-twin-simulation/chapter-1-physics-simulation-foundations',
            'digital-twin-simulation/chapter-2-environment-design-interaction',
            'digital-twin-simulation/chapter-3-sensor-simulation-perception',
          ],
        },
        {
          type: 'category',
          label: 'Module 3: AI-Robot Brain',
          items: [
            'ai-robot-brain/intro',
            'ai-robot-brain/chapter-1-photorealistic-simulation',
            'ai-robot-brain/chapter-2-localization-mapping',
            'ai-robot-brain/chapter-3-navigation-motion-planning',
          ],
        },
        {
          type: 'category',
          label: 'Module 4: Vision-Language-Action (VLA)',
          items: [
            'vision-language-action/intro',
            'vision-language-action/chapter-1-language-understanding',
            'vision-language-action/chapter-2-llm-based-cognitive-planning',
            'vision-language-action/chapter-3-autonomous-humanoid-capstone',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
