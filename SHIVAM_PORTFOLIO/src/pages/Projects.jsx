import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projectData = [
    {
      title: "Expense Tracker App",
      description:
        "A personal finance management app where users can register, log in, add income and expenses, and view detailed monthly reports. It helps track spending habits and manage budgets easily.",
      tech: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      link: "https://github.com/SHIVAM1KUMAR/MERN-PROJECTS/tree/main/Expense-Tracker",
    },
    {
      title: "Counselling Web App",
      description:
        "This platform allows users to book online or in-person counselling sessions for college admissions or personal guidance. Includes secure payments, live testimonials, and real-time updates on counselling availability.",
      tech: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      link: "https://github.com/SHIVAM1KUMAR/MERN-PROJECTS/tree/main/RealCounsellingCSE",
    },
    {
      title: "Job Portal Web App",
      description:
        "A dynamic job portal where job seekers can register, upload resumes, and apply for jobs. Employers can post job listings and manage applications. Features user authentication, job filtering, and admin controls.",
      tech: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      link: "https://github.com/SHIVAM1KUMAR/MERN-PROJECTS/tree/main/JOB-Sync",
    },
    {
      title: "Developer Corner (Startup Idea)",
      description:
        "A startup-focused platform where clients can register and submit project ideas or requirements. The team connects with them to offer services like web development, app development, digital marketing, and more. A one-stop solution for startups and businesses.",
      tech: "MERN Stack (MongoDB, Express.js, React, Node.js)",
      link: "https://github.com/SHIVAM1KUMAR/MERN-PROJECTS/tree/main/DeveloperCorner",
    },
  ];

  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>My Projects</h1>
      <div style={styles.scrollContainer}>
        <div style={styles.projectList}>
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    width: "100%",
    padding: "40px 20px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "30px",
    color: "#1f1f1f",
  },
  scrollContainer: {
    maxHeight: "75vh",
    overflowY: "auto",
    padding: "10px",
  },
  projectList: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    alignItems: "center",
  },
};

export default Projects;
