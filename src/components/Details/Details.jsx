import React, {useState} from "react";
import "./Details.css";
// import great from "../../assets/great.jpg";
// import macbook from "../../assets/macbook.jpg";
import credifieImg from "../../assets/credifieImg.webp";
import latexImg from "../../assets/latexImg.webp";
import crmImg from "../../assets/crmImg.webp";
import SimpleImageSlider from "react-simple-image-slider";
import laptop from "../../assets/laptop.png";
import { FaCode, FaLinkedin, FaLaptopCode,  FaGraduationCap, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHackerrank, FaBriefcase, FaDatabase, FaCertificate, FaReact, FaNodeJs } from "react-icons/fa";

const Portfolio = () => {
  const images = [
    { url: laptop},
    // { url: great },
    // { url: macbook },
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

      {/* Image Slider */}
      <div className="hero-slider">
        <SimpleImageSlider
          width={1360}
          height={700}
          images={images}
          showBullets={false}
          showNavs={false}
        />
      </div>

      <div className="hero-container glassmorphism">
      <div className="glass-box">
        <h1>Hello, I'm <span className="highlight">Karthika S</span></h1>
        <p className="hero-subtitle">A Passionate MERN Stack Developer 🚀</p>
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
        Hello! I’m Karthika S, a dedicated MERN Stack Developer skilled in crafting robust and scalable web applications using <strong>MongoDB, Express.js, React.js, and Node.js</strong>. I build full-stack solutions with clean code practices, RESTful APIs, and responsive UI design. Whether it’s optimizing backend logic or designing dynamic frontends, I thrive on turning complex requirements into efficient applications.
      </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills fade-in">
        <h2>Skills & Technologies</h2>
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
      <h2>Work & Internship Experience</h2>
      <div className="experience-chain">

        {/* Work Experience */}
        <div className="experience-item">
          <div className="experience-icon-container">
            <FaBriefcase className="experience-icon" />
            <div className="vertical-line"></div>
          </div>
          <div className="experience-content">
            <h3>MERN Stack Developer</h3>
            <h4>Merkat Intellect Technology Pvt Ltd</h4>
            <span className="experience-date">April 2024 - Present</span>
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

        {/* Internship Experience */}
        <div className="experience-item">
          <div className="experience-icon-container">
            <FaLaptopCode className="experience-icon" />
          </div>
          <div className="experience-content">
            <h3>MERN Stack Developer Intern</h3>
            <h4>March 2024</h4>
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
          <h4>P.V Selvaraj girls Higher Secondary School<br/> Thanjavur, Tamil Nadu, India</h4>
          <span className="education-date">2018 - 2019</span>
          <p><strong>Percentage:</strong> 72.33 / 100</p>
        </div>

        {/* SSLC (Secondary School) */}
        <div className="education-card">
          <FaGraduationCap className="education-icon" />
          <h3>Secondary School Leaving Certificate (SSLC)</h3>
          <h4>P.V Selvaraj girls Higher Secondary School<br/> Thanjavur, Tamil Nadu, India</h4>
          <span className="education-date">2016 - 2017</span>
          <p><strong>Percentage:</strong> 89 / 100</p>
        </div>
        </div>

      </section>


      {/* Projects Section */}
      <section id="projects" className="projects fade-in">
        <h2>Projects</h2>
        <div className="project-cards">
        <a href="https://revenuintel.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="card">
        <img src={crmImg} alt="CRM System" className="project-img" />
        <h3>Customer Relationship Management (CRM) System</h3>
        <h4>January 2025 - Present</h4>
        <p>
          Developing a CRM with customer management, authentication, and analytics.<br />
          Using React.js, Node.js, and MySQL to build a scalable and efficient customer tracking system.
        </p>
      </div>
      </a>
      <a  style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card">
        <img src={latexImg} alt="Latex Mattress Website" className="project-img" />
        <h3>Latex Mattress E-Commerce site</h3>
        <h4>October 2024 - December 2024</h4>
        <p>
          Designed and developed an e-commerce platform for a latex mattress brand.<br />
          Implemented product display pages, interactive popups, and responsive UI for better user experience.<br />
          Integrated a contact form with email functionality for customer inquiries.
        </p>
      </div>
      </a>
      <a style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card">
        <img src={credifieImg} alt="Credifie - Microfinance Application" className="project-img" />
        <h3>Credifie - Microfinance Application</h3>
        <h4>April 2024 - September 2024</h4>
        <p>
          Developed a loan management system for self-help groups using React.js, Node.js, and MongoDB.<br />
          Implemented authentication, loan disbursement workflows, and group data management.<br />
          Created custom popups and tables to display financial details dynamically.
        </p>
      </div>
      </a>
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
      <div className="flex-contact">
      {/* Contact Info */}
      <div className="contact-info">
        <p><FaPhoneAlt className="contact-icon" /> <strong>Phone:</strong> +91 93452 13423</p>
        <p><FaEnvelope className="contact-icon" /> <strong>Email:</strong> <a href="mailto:karthika8849@gmail.com">karthika8849@gmail.com</a></p>
        <p><FaMapMarkerAlt className="contact-icon" /> <strong>Location:</strong> Thanjavur, Tamil Nadu, India</p>
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
