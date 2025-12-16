import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './CardsSection.module.css';

type CardItem = {
  title: string;
  description: string;
  icon?: string;
  to: string;
};

const CardList: CardItem[] = [
  {
    title: 'Physical AI & Robotics',
    description: 'Foundations of embodied AI and humanoid robotics',
    icon: '🤖',
    to: '/docs/physical-ai-robotics/intro',
  },
  {
    title: 'Digital Twin Simulation',
    description: 'Physics-based simulation and environment modeling',
    icon: '🌐',
    to: '/docs/digital-twin-simulation/intro',
  },
  {
    title: 'AI-Robot Brain',
    description: 'Advanced perception and navigation systems',
    icon: '🧠',
    to: '/docs/ai-robot-brain/intro',
  },
  {
    title: 'Vision-Language-Action',
    description: 'Integration of perception, cognition, and action',
    icon: '👁️',
    to: '/docs/vision-language-action/intro',
  },
];

function Card({ title, description, icon, to }: CardItem) {
  return (
    <Link to={to} className={styles.cardLink}>
      <div className={styles.card}>
        {icon && <div className={styles.cardIcon}>{icon}</div>}
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </Link>
  );
}

export default function CardsSection(): JSX.Element {
  return (
    <section className={styles.cardsSection}>
      <div className="container">
        <div className={styles.cardsGrid}>
          {CardList.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}