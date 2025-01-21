import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
import html from "../../assets/skillsicons/HTML.svg";
import css from "../../assets/skillsicons/CSS.svg";
import js from "../../assets/skillsicons/JavaScript.svg";
import reactDark from "../../assets/skillsicons/React-Dark.svg";
import reactLight from "../../assets/skillsicons/React-Light.svg";
import tailwindDark from "../../assets/skillsicons/TailwindCSS-Dark.svg";
import tailwindLight from "../../assets/skillsicons/TailwindCSS-Light.svg";
import git from "../../assets/skillsicons/Git.svg";
import bootstrap from "../../assets/skillsicons/Bootstrap.svg";

function Skills() {
  const { theme } = useTheme();
  const reactIcon = theme === "light" ? reactDark : reactLight;
  const tailwindIcon = theme === "light" ?  tailwindDark : tailwindLight;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={html} skill="HTML" />
        <SkillList src={css} skill="CSS" />
        <SkillList src={js} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={reactIcon} skill="React" />
        <SkillList src={tailwindIcon} skill="Tailwind" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={git} skill="Git" />
        <SkillList src={bootstrap} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
