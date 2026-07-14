import "./Dashboard.css";

const projects = [
  {
    id: 1,
    title: "GitHub UserFinder",
    desc: "Search any GitHub user and explore their profile, repos & stats.",
    emoji: "🔍",
    link: "https://github-user-finder-application.web.app",
    color: "#6c63ff",
  },
  {
    id: 2,
    title: "Weather App",
    desc: "Real-time weather updates for any city around the world.",
    emoji: "🌤️",
    link: "https://weather-application-df527.web.app",
    color: "#38bdf8",
  },
  {
    id: 3,
    title: "Student Management",
    desc: "Manage student records, grades and attendance efficiently.",
    emoji: "🎓",
    link: "https://student-management-app-201cb.web.app",
    color: "#34d399",
  },
];

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dashboard__overlay" />
      <div className="dashboard__content">
        <h1 className="dashboard__title">
          My <span>Projects</span>
        </h1>
        <p className="dashboard__sub">Click on any project to explore it</p>
        <div className="dashboard__grid">
          {projects.map((p, i) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="dash-card"
              style={{ "--accent": p.color, animationDelay: `${i * 0.15}s` }}
            >
              <span className="dash-card__emoji">{p.emoji}</span>
              <h2 className="dash-card__title">{p.title}</h2>
              <p className="dash-card__desc">{p.desc}</p>
              <span className="dash-card__btn">View Project →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
