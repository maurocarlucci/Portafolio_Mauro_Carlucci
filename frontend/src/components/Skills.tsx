import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Vite', level: 85 },
        { name: 'Ant Design', level: 70 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'HTML/CSS', level: 95 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'NestJS', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'C#', level: 50 },
        
        
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'DevOps', level: 85 },
        { name: 'Azure Services', level: 50 },
        { name: 'Figma', level: 55 },
      ]
    }
  ];

  return (
    <section id="habilidades" className="skills">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill__category">
              <h3 className="skill__category-title">{category.title}</h3>
              <div className="skill__list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill__item">
                    <div className="skill__header">
                      <span className="skill__name">{skill.name}</span>
                      <span className="skill__percentage">{skill.level}%</span>
                    </div>
                    <div className="skill__bar">
                      <div 
                        className="skill__progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

