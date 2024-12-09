import { useEffect, useState } from 'react';
import { Projectcard } from './ProjectCard';
import styles from './cardContainer.module.css';
import { fetchData } from '../helpers/fetchData';

export const ProjectListContainer = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [Url, setUrl] = useState('');

  useEffect(() => {
    fetchData('/data/projects.json', setProjects, setLoading);
  }, []);

  const handleToggleVysybility = (childUrl, childVisibility) => {
    setUrl(childUrl);
    setVisibility(childVisibility);
  };

  const handleCloseLightbox = () => {
    setVisibility(false);
    setUrl('');
  };

  return (
    <>
      {visibility && Url && (
        <div className={styles.lightboxImage}>
          <div className={styles.overlay} onClick={handleCloseLightbox}></div>
          <div className={styles.image}>
            <iframe src={Url} width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share ; allowfullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button onClick={handleCloseLightbox} className={styles.closeButton}>
              Cerrar
            </button>
          </div>
        </div>
      )}
      {loading ? (
        <h3>Cargando...</h3>
      ) : (
        <div className={styles.container}>
          {projects.map((project) => (
            <Projectcard
              key={project.title}
              project={project}
              handleToggleVysybility={handleToggleVysybility}
            />
          ))}
        </div>
      )}
    </>
  );
};
