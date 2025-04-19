import React from "react";

function Resume() {
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>Resume</h1>
      <p style={styles.paragraph}>
        Welcome to my resume page! You can learn more about my professional
        experience, skills, and education here.
      </p>
      <p style={styles.paragraph}>
        Feel free to download my resume by clicking the button below:
      </p>
      <a
        href="/assets/Shivam_Kumar_Resume.pdf"  // Path from public folder
        download  // Ensures the file is downloaded
        style={styles.button}
      >
        Download Resume
      </a>
    </section>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f4f4f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "auto",
  },
  heading: {
    color: "#333",
    fontSize: "2rem",
    marginBottom: "10px",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#555",
    margin: "10px 0",
  },
  button: {
    display: "inline-block",
    padding: "12px 30px",
    marginTop: "20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    textDecoration: "none",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s",
  },
};

export default Resume;
