import styles from './ProjectsStyles.module.css';
import garage from '../../assets/garage.png';
import pokeapi from '../../assets/pokeapi.png';
import terminalIcon from '../../assets/terminal-icon.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={garage}
          link="https://sandoropiok.github.io/Garage-ui-basic-final-project-/"
          h3="Garage"
          p="Cars Funclub Website"
        />
        <ProjectCard
          src={pokeapi}
          link="https://sandoropiok.github.io/pokemon-search-engine-js-basic/"
          h3="PokeApi"
          p="Pokémon Search Engine"
        />
        <ProjectCard
          src={terminalIcon}
          link="https://github.com/sandoropiok/final-project-js-basic"
          h3="Escape the Dungeon"
          p="Terminal Game"
        />
      </div>
    </section>
  );
}

export default Projects;
