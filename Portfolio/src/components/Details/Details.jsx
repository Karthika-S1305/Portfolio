import React, { useState } from "react";
import "./Details.css";
import credifieImg from "../../assets/credifie.png";
import latexImg from "../../assets/neithal.png";
import crmImg from "../../assets/revenuintel.png";
import SimpleImageSlider from "react-simple-image-slider";
// import laptop from "../../assets/laptop.jpg";
import karthika from '../../assets/Karthika_image.jpg';
import macbook from "../../assets/macbook.jpg";
import great from "../../assets/laptop.png";
import { ReactTyped } from "react-typed";
import cropImg from '../../assets/e-commerce.jpg';
import resume from "../../assets/Karthika_Resume.pdf";
import { FaCode, FaLinkedin, FaLaptopCode, FaGraduationCap, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHackerrank, FaBriefcase, FaDatabase, FaCertificate, FaReact, FaNodeJs } from "react-icons/fa";

const Portfolio = () => {
  const images = [
    // { url: laptop},
    { url: macbook },
    { url: great }
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //submit contact form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.status === "success") {
      alert("Message sent successfully!");
    } else {
      alert("Error sending message.");
    }
  };

  return (
    <div className="portfolio">
      <div className="hero-slider">
        <SimpleImageSlider
          width="100%"
          height={600}
          images={images}
          showBullets={false}
          showNavs={false}
          autoPlay={true}
          loop={true}
          style={{ opacity: "65%" }}

        />
        <div className="glass-box">
          <h1 className="hero-title">Hello, I'm</h1>
          <h2 className="highlight">KARTHIKA S</h2>
          <h2 className="hero-role">
            < ReactTyped
              strings={[
                "Full Stack Developer ",
                "MERN Stack Developer ",
                "Smart Coder ",
                "Problem Solver ",
              ]}
              typeSpeed={80}
              backSpeed={40}
              loop
              backDelay={1500}
              showCursor={true}
              cursorChar="|"
            />
          </h2>
          {/* <div className="hero-buttons">
          <a href="#contact" className="btn">Hire Me</a>
          <a href="/Karthika_Resume.pdf" className="btn resume-btn" download>Download Resume</a>
        </div> */}
        </div>
      </div>

      <section id="about">
        <div className="about-section">
          <div className="glass-heading">
            <h2 className="about-heading-animated">
              <span className="gradient-text">About</span> Me
            </h2>

          </div>
          <div className="pic-about">
            <div className="my-pic">
              <img src={karthika} alt="image" />
            </div>
            <div className="about-flex">
              <p>
                <span className="highlight-about">Karthika S</span>,
                <span className="highlight-role">
                  <ReactTyped
                    strings={[
                      "Full Stack Developer ",
                      "MERN Stack Developer ",
                      "Problem Solver ",
                    ]}
                    typeSpeed={80}
                    backSpeed={40}
                    loop
                    backDelay={1500}
                  />
                </span>
                <br />
                I am a results-driven Full Stack Developer with 2.5+ years of experience
                building scalable web applications and enterprise-grade admin systems.
                I specialize in designing secure authentication systems, optimizing APIs
                for performance, and developing intuitive dashboards that translate
                business requirements into technical solutions.
              </p>
              <a href={resume} target="_blank" rel="noreferrer">
                <button>View CV</button>
              </a>
            </div>
          </div>
        </div>
      </section>


      <section id="skills" className="skills fade-in">
        <h2 className="gradient-text">Skills & Technologies</h2>
        <div className="skill-list">
          <span><FaReact /> React.js</span>
          <span>Redux</span>
          <span><FaNodeJs /> Node.js</span>
          <span>Express.js</span>
          <span><FaDatabase /> MongoDB</span>
          <span>MySQL</span>
          <span>RESTful APIs</span>
          <span>Authentication & Authorization</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Material UI</span>
          <span>Git & GitHub</span>
          <span>Postman</span>
          <span>UI/UX Design</span>
          <span>Performance Optimization</span>
          <span>VS Code</span>
        </div>

      </section>

      <section id="experience" className="experience fade-in">
        <h2 className="gradient-text">Professional Experience</h2>
        <div className="experience-chain">

          <div className="experience-item">
            <div className="experience-icon-container">
              <FaBriefcase className="experience-icon" />
              <div className="vertical-line"></div>
            </div>
            <div className="experience-content">
              <h3>Full Stack Developer</h3>
              <h4>NB Media Tech Pvt Ltd</h4>
              <span className="experience-date">November 2025 - Present</span>
              <ul>
                <li>Leading end-to-end development of admin portals and CRM systems using React.js and Node.js.</li>
                <li>Designed workflow automation for lead and follow-up management, reducing manual operations by 35%.</li>
                <li>Implemented Role-Based Access Control (RBAC) with JWT authentication for secure admin access.</li>
                <li>Optimized backend APIs and database queries to improve system performance and scalability.</li>
                <li>Integrated RESTful APIs and handled real-time updates for telecalling and dashboard modules.</li>
                <li>Collaborating in Agile environment with Git-based version control and CI/CD workflows.</li>
              </ul>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-icon-container">
              <FaBriefcase className="experience-icon" />
              <div className="vertical-line"></div>
            </div>
            <div className="experience-content">
              <h3>Software Engineer</h3>
              <h4>Merkat Intellekt Technology Pvt Ltd</h4>
              <span className="experience-date">October 2023 - October 2025</span>
              <ul>
                <li>Developed microfinance and CRM applications using React.js & Node.js, improving data retrieval efficiency by 30% through API optimizations.</li>
                <li>Integrated secure authentication & authorization mechanisms for user management.</li>
                <li>Designed interactive dashboards and dynamic UI components for improved user engagement.</li>
                <li>Developed and deployed full-stack applications using MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
                <li>Improved API performance by 30% using Express middleware and MongoDB indexing.</li>
                <li>Collaborated with backend teams to implement RESTful API communication for seamless data transactions.</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-icon-container">
              <FaLaptopCode className="experience-icon" />
            </div>
            <div className="experience-content">
              <h3>Software Engineer Intern</h3>
              <h4>September 2023</h4>
              <ul>
                <li>Designed a student dashboard with a secure login system and robust authentication features.</li>
                <li>Developed an interactive UI using React.js and Material UI.</li>
                <li>Built full-stack modules using the MERN stack, integrating MongoDB with Node.js and React-based frontends.</li>
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
            <p><strong>CGPA:</strong> 8.3 / 10</p>
          </div>
          <div className="education-card">
            <FaGraduationCap className="education-icon" />
            <h3>Higher Secondary Education (HSC)</h3>
            <h4>P.V Selvaraj girls Higher Secondary School<br /> Thanjavur, Tamil Nadu, India</h4>
            <span className="education-date">2018 - 2019</span>
            <p><strong>Percentage:</strong> 72.33 / 100</p>
          </div>

          <div className="education-card">
            <FaGraduationCap className="education-icon" />
            <h3>Secondary School Leaving Certificate (SSLC)</h3>
            <h4>P.V Selvaraj girls Higher Secondary School<br /> Thanjavur, Tamil Nadu, India</h4>
            <span className="education-date">2016 - 2017</span>
            <p><strong>Percentage:</strong> 89 / 100</p>
          </div>
        </div>

      </section>


      <section id="projects" className="projects fade-in">
        <h2>Main Projects</h2>

        <div className="project-cards">

          {/* Revenuintel */}
          <a
            href="https://revenuintel.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card">
              <img src={crmImg} alt="Revenuintel CRM" className="project-img" />
              <h3>Revenuintel - CRM Platform</h3>
              <h4>November 2024 - October 2025</h4>
              <p>
                Architected and developed a production-grade CRM platform handling
                customer lifecycle management, lead tracking, secure authentication,
                and analytics dashboards. Improved operational efficiency through
                optimized backend APIs and structured database design.
                <br />
                Built using React.js, Node.js, and MySQL with optimized APIs for
                improved performance.
              </p>
            </div>
          </a>

          {/* Credifie */}
          <div className="card">
            <img src={credifieImg} alt="Credifie Microfinance App" className="project-img" />
            <h3>Credifie - Microfinance Application</h3>
            <p>
              Developed a loan management system for Self-Help Groups (SHGs)
              including loan disbursement workflows, authentication, and financial tracking.
              <br />
              Built with React.js, Node.js, and MongoDB ensuring secure and scalable operations.
            </p>
          </div>

        </div>

        {/* ---------------- SIDE PROJECTS ---------------- */}

        <h2 style={{ marginTop: "60px" }}>Side Projects</h2>

        <div className="project-cards">

          {/* Latex Website */}
          <div className="card">
            <img src={latexImg} alt="Latex Mattress Website" className="project-img" />
            <h3>Latex Mattress E-Commerce Website</h3>
            <h4></h4>
            <p>
              Designed and developed a responsive e-commerce platform with
              product pages, interactive UI components, and email-integrated contact forms.
            </p>
          </div>

          {/* E-Commerce Platform */}
          <div className="card">
            <img src={cropImg} alt="E-Commerce Platform" className="project-img" />
            <h3>E-Commerce Platform</h3>
            <h4></h4>
            <p>
              Built a full-stack e-commerce system with product management,
              cart functionality, and secure checkout features.
            </p>
          </div>

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
        <div className="flex-contact">
          {/* Contact Info */}
          <div className="contact-info">
            <p><FaPhoneAlt className="contact-icon" />+91 93452 13423</p>
            <p><FaEnvelope className="contact-icon" /> <a href="mailto:karthika8849@gmail.com" style={{ color: "#27dbe3" }}>karthika8849@gmail.com</a></p>
            <p><FaMapMarkerAlt className="contact-icon" />Thanjavur, Tamil Nadu, India</p>
          </div>
          <div className="contact-form-flex">
            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <textarea
                  name="message"
                  className="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
