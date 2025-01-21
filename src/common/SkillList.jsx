function SkillList({ src, skill }) {
  return (
    <div>
      <img src={src} alt="Skill icon" />
      <p>{skill}</p>
    </div>
  );
}

export default SkillList;
