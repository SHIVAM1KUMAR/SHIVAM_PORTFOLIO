import { useState } from "react";

function ProjectCard({ title, description, tech, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        transform: isHovered ? "scale(1.02)" : "scale(1)",
        boxShadow: isHovered
          ? "0 8px 24px rgba(0, 0, 0, 0.2)"
          : "0 6px 20px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <p style={styles.tech}>
        <strong>Tech Stack:</strong> {tech}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...styles.button,
          backgroundColor: isHovered ? "#0056b3" : "#007bff",
        }}
      >
        Visit on Project
      </a>
    </div>
  );
}

const styles = {
  card: {
    width: "100%",
    maxWidth: "700px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    padding: "30px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "10px",
    color: "#1f1f1f",
  },
  description: {
    fontSize: "1rem",
    color: "#444",
    marginBottom: "10px",
    lineHeight: "1.6",
  },
  tech: {
    fontSize: "0.95rem",
    marginBottom: "15px",
    color: "#555",
  },
  button: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
};

export default ProjectCard;
