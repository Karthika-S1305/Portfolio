import React from "react";
import "./Details.css";
import great from "../../assets/great.jpg";
import macbook from "../../assets/macbook.jpg";
import credifieImg from "../../assets/credifieImg.webp";
import latexImg from "../../assets/latexImg.webp";
import crmImg from "../../assets/crmImg.webp";
import SimpleImageSlider from "react-simple-image-slider";
import { FaCode, FaLinkedin, FaLaptopCode,  FaGraduationCap, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHackerrank, FaBriefcase, FaDatabase, FaCertificate, FaReact, FaNodeJs } from "react-icons/fa";

const Portfolio = () => {
  const images = [
    { url: great },
    { url: macbook }
  ];

  return (
    <div className="portfolio">

      {/* Image Slider */}
      <div className="hero-slider">
        <SimpleImageSlider
          width={1350}
          height={450}
          images={images}
          showBullets={false}
          showNavs={false}
        />
      </div>

      <div className="hero-container glassmorphism">
      <div className="glass-box">
        <h1>Hello, I'm <span className="highlight">Karthika S</span></h1>
        <p className="hero-subtitle">A Passionate Frontend Developer 🚀</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn">Hire Me</a>
          <a href="/Karthika_Resume.pdf" className="btn resume-btn" download>Download Resume</a>
        </div>
      </div>
    </div>


      {/* About Section */}
      <section id="about" className="about fade-in">
        <h2>About Me</h2>
        <p>
          Hello! I’m Karthika S, a passionate Frontend Developer with experience in building scalable web applications using React.js, Node.js, and MongoDB. 
          I specialize in creating interactive user interfaces, integrating backend services, and optimizing performance for seamless user experiences.
          My journey in web development has been driven by a deep enthusiasm for problem-solving and innovation.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills fade-in">
        <h2>Skills & Technologies</h2>
        <div className="skill-list">
          <span><FaReact /> React.js</span>
          <span>Redux</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Material UI</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span><FaNodeJs /> Node.js</span>
          <span>Express.js</span>
          <span>RESTful APIs</span>
          <span><FaDatabase /> MongoDB</span>
          <span>MySQL</span>
          <span>Git & GitHub</span>
          <span>Visual Studio Code</span>
          <span>Authentication & Authorization</span>
          <span>UI/UX Design</span>
          <span>Performance Optimization</span>
        </div>
      </section>

      <section id="experience" className="experience fade-in">
      <h2>Work & Internship Experience</h2>
      <div className="experience-chain">

        {/* Work Experience */}
        <div className="experience-item">
          <div className="experience-icon-container">
            <FaBriefcase className="experience-icon" />
            <div className="vertical-line"></div>
          </div>
          <div className="experience-content">
            <h3>Frontend Developer</h3>
            <h4>Merkat Intellect Technology Pvt Ltd</h4>
            <span className="experience-date">April 2024 - Present</span>
            <ul>
              <li>Developed microfinance and CRM applications using React.js & Node.js, improving data retrieval efficiency by 30% through API optimizations.</li>
              <li>Integrated secure authentication & authorization mechanisms for user management.</li>
              <li>Designed interactive dashboards and dynamic UI components for improved user engagement.</li>
              <li>Collaborated with backend teams to implement RESTful API communication for seamless data transactions.</li>
            </ul>
          </div>
        </div>

        {/* Internship Experience */}
        <div className="experience-item">
          <div className="experience-icon-container">
            <FaLaptopCode className="experience-icon" />
          </div>
          <div className="experience-content">
            <h3>Frontend Developer Intern</h3>
            <h4>March 2024</h4>
            <ul>
              <li>Designed a student dashboard with a secure login system and robust authentication features.</li>
              <li>Developed an interactive UI using React.js and Material UI.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

      <section id="education" className="education fade-in">
        <h2>Education</h2>
        <div className="education-cards">
        <div className="education-card">
          <FaGraduationCap className="education-icon" />
          <h3>Bachelor of Engineering - Electronics and Communication Engineering</h3>
          <h4>Government College of Engineering, Thanjavur, Tamil Nadu, India</h4>
          <span className="education-date">2019 - 2023</span>
          <p><strong>GPA:</strong> 8.3</p>
        </div>
        <div className="education-card">
          <FaGraduationCap className="education-icon" />
          <h3>Higher Secondary Education (HSC)</h3>
          <h4>P.V Selvaraj girls Higher Secondary School<br/> Thanjavur, Tamil Nadu, India</h4>
          <span className="education-date">2018 - 2019</span>
          <p><strong>Percentage:</strong> 72.33%</p>
        </div>

        {/* SSLC (Secondary School) */}
        <div className="education-card">
          <FaGraduationCap className="education-icon" />
          <h3>Secondary School Leaving Certificate (SSLC)</h3>
          <h4>P.V Selvaraj girls Higher Secondary School<br/> Thanjavur, Tamil Nadu, India</h4>
          <span className="education-date">2016 - 2017</span>
          <p><strong>Percentage:</strong> 89%</p>
        </div>
        </div>

      </section>


      {/* Projects Section */}
      <section id="projects" className="projects fade-in">
        <h2>Projects</h2>
        <div className="project-cards">
        <div className="card">
        <img src={credifieImg} alt="Credifie - Microfinance Application" className="project-img" />
        <h3>Credifie - Microfinance Application</h3>
        <h4>April 2024 - August 2024</h4>
        <p>
          Developed a loan management system for self-help groups using React.js, Node.js, and MongoDB.<br />
          Implemented authentication, loan disbursement workflows, and group data management.<br />
          Created custom popups and tables to display financial details dynamically.
        </p>
      </div>

      <div className="card">
        <img src={latexImg} alt="Latex Mattress Website" className="project-img" />
        <h3>Latex Mattress Website</h3>
        <h4>September 2024 - October 2024</h4>
        <p>
          Designed and developed an e-commerce platform for a latex mattress brand.<br />
          Implemented product display pages, interactive popups, and responsive UI for better user experience.<br />
          Integrated a contact form with email functionality for customer inquiries.
        </p>
      </div>

      <div className="card">
        <img src={crmImg} alt="CRM System" className="project-img" />
        <h3>Customer Relationship Management (CRM) System</h3>
        <h4>November 2024 - Present</h4>
        <p>
          Developing a CRM with customer management, authentication, and analytics.<br />
          Using React.js, Node.js, and MySQL to build a scalable and efficient customer tracking system.
        </p>
      </div>

      {/* <div className="card">
        <img src={cropImg} alt="Crop Yield Prediction" className="project-img" />
        <h3>Crop Yield Prediction</h3>
        <p>
          - Built a data-driven model to assist farmers in optimizing crop yields.<br />
          - Applied data science techniques for predictive analytics.
        </p>
      </div> */}
        </div>
      </section>

      <section id="certifications" className="certifications fade-in">
  <h2>Certifications</h2>
  <div className="certification-cards">
    <div className="cert-card">
      <FaCertificate className="cert-icon" />
      <h3>TCS iON Career Edge</h3>
      <p>August 2020 - Knockdown the Lockdown Course</p>
    </div>

    <div className="cert-card">
      <FaCertificate className="cert-icon" />
      <h3>GUVI - Naan Mudhalvan</h3>
      <p>November 2022 - Python Course Completion</p>
    </div>
  </div>
</section>

      {/* Online Profiles */}
      <section id="profiles" className="profiles fade-in">
  <h2>Online Profiles</h2>
  <div className="profile-links">
    <a href="https://linkedin.com/in/karthika1305" target="_blank" rel="noopener noreferrer" className="profile-card linkedin">
      <FaLinkedin className="profile-icon" />
      <span>LinkedIn</span>
    </a>

    <a href="https://github.com/Karthika-S1305" target="_blank" rel="noopener noreferrer" className="profile-card github">
      <FaGithub className="profile-icon" />
      <span>GitHub</span>
    </a>

    <a href="https://www.hackerrank.com/karthika8849" target="_blank" rel="noopener noreferrer" className="profile-card hackerrank">
      <FaHackerrank className="profile-icon" />
      <span>HackerRank</span>
    </a>

    <a href="https://leetcode.com/karthika13" target="_blank" rel="noopener noreferrer" className="profile-card leetcode">
      <FaCode className="profile-icon" />
      <span>LeetCode</span>
    </a>
  </div>
</section>

    <section id="contact" className="contact fade-in">
      <h2>Contact Me</h2>
      <div>
      <div>
      {/* Contact Info */}
      <div className="contact-info">
        <p><FaPhoneAlt className="contact-icon" /> <strong>Phone:</strong> +91 93452 13423</p>
        <p><FaEnvelope className="contact-icon" /> <strong>Email:</strong> <a href="mailto:karthika8849@gmail.com">karthika8849@gmail.com</a></p>
        <p><FaMapMarkerAlt className="contact-icon" /> <strong>Location:</strong> Thanjavur, Tamil Nadu, India</p>
      </div>
      </div>
        <div>
      {/* Contact Form */}
        <form className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <textarea className="Message"  required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
      </div>
      {/* Social Links */}
      <div className="social-icons">
        <a href="https://linkedin.com/in/karthika1305" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Karthika-S1305" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </section>
    </div>
  );
};

export default Portfolio;
