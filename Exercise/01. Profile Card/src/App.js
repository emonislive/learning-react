import "./App.css";

function App() {
  const skills = [
    { skill: "HTML + CSS", emoji: "👍", color: "#F1502F" },
    { skill: "JavaScript", emoji: "🚀", color: "#b4ab72ff" },
    { skill: "React.js", emoji: "🌐", color: "#61DBFD" },
    { skill: "Node.js", emoji: "👍", color: "#68A063" },
    { skill: "MongoDB", emoji: "🍃", color: "#4DB33D" },
    { skill: "Git & GitHub", emoji: "🔧", color: "#d26cb9ff" },
  ];

  return (
    <div>
      <ProfileCard
        name="Monkey D Luffy"
        image="/luffy.jpg"
        description="Full Stack Web Developer passionate about building dynamic and user-friendly applications. Currently exploring React.js to sharpen my frontend skills and prepare for job opportunities. Enjoys learning modern web technologies, solving real-world problems through code, and continuously improving as a developer."
        skills={skills}
      />
    </div>
  );
}

function ProfileCard({ name, image, description, skills }) {
  return (
    <div className="container font-conf">
      <img className="img-conf" src={image} alt="profile pic" />
      <h1 className="header general-margin">{name}</h1>
      <p className="general-margin">{description}</p>
      <SkillList skills={skills} />
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <h4 className="skillTag general-margin">
      {skills.map((item, index) => (
        <span
          key={index}
          style={{ backgroundColor: item.color, marginRight: "10px" }}
        >
          {item.skill} {item.emoji}
        </span>
      ))}
    </h4>
  );
}

export default App;
