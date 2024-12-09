import React from 'react';
import styles from './Card.module.css';
import { ScrollRevealEffect } from './efects/ScrollrevealEffect';

export const Projectcard = ({ project, handleToggleVysybility }) => {
  const { title, description, Url } = project;

  return (
    <ScrollRevealEffect>
      <div className={styles.cardContainer}>
        <div
          className={`${styles.cardImg} ${styles.projectCardImg}`}
          onClick={() => handleToggleVysybility(Url, true)}
        >
          {/* Aquí solo mostramos un fondo o placeholder */}
          <p>Haz clic para ver</p>
        </div>
        <div className={styles.textContainer}>
          <h3 className="title">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </ScrollRevealEffect>
  );
};
