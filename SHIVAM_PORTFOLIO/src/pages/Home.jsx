import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../pages/Home.css';


function Home() {
  return (
    <section style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '22px', color: '#888', marginBottom: '10px' }}>
        Thank you for visiting my portfolio 🙏
      </h2>

      <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '20px', color: '#222' }}>
        Hi, I'm Shivam Kumar
      </h1>

      <p style={{ fontSize: '18px', color: '#555', marginBottom: '10px' }}>
        I completed my B.Tech in Computer Science and Engineering in 2025, and I’m on a mission to build
        meaningful web experiences that are intuitive, fast, and accessible.
      </p>

      <p style={{ fontSize: '20px', fontWeight: '500', color: '#00bfff', marginBottom: '10px' }}>
        <Typewriter
          words={['I am a Web Developer 💻', 'I work on the MERN Stack 🚀', 'I love learning new technologies 📚']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>

      <p style={{ fontSize: '16px', color: '#444', marginTop: '20px' }}>
        Passionate about building responsive web applications, writing clean code, and solving real-world problems through technology.
        Whether it’s creating something from scratch or optimizing an existing product, I aim to craft elegant and user-friendly solutions.
      </p>

      
     
    </section>
  );
}

export default Home;
