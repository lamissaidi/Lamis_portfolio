"use client";

import { useState } from "react";
import {
  ArrowUpRight, ChevronDown, Code2, Cpu, Download, ExternalLink,
  Github, GraduationCap, Mail, MapPin, Menu, Network, Rocket,
  ShieldCheck, Sparkles, Terminal, TestTube2, X
} from "lucide-react";

const skills = {
  "Programming": ["C", "C++", "Python", "Java", "VHDL"],
  "Testing & QA": ["Functional", "Non-Functional", "Regression", "Performance", "Stress", "UAT"],
  "Automation": ["Robot Framework", "Python Drivers", "Vector CANalyzer", "CAPL", "Qt Creator"],
  "Embedded": ["STM32", "Raspberry Pi", "ESP32", "Arduino", "NI Boards", "Digilent Digital Discovery"],
  "Protocols": ["CAN", "I²C", "UART", "SPI", "MQTT", "RS-232", "RS-485", "TCP/IP"],
  "Tools & Methods": ["Jira", "CodeBeamer", "Silk Central", "SQL", "SQLite", "Agile", "HIL"]
};

const experiences = [
  {
    date: "06/2026 — Present",
    title: "Test & Validation Engineer — Test Automation",
    company: "SERMA INTERNATIONAL",
    domain: "Aerospace Department",
    icon: <Rocket size={19} />,
    bullets: [
      "Analyze system requirements and review test scenarios to ensure comprehensive requirements and test coverage.",
      "Design, write, and execute functional test cases and test scenarios using Python and Robot Framework.",
      "Develop automated tests to improve test execution efficiency and contribute to reducing post-release defects.",
      "Develop Python drivers for communication protocols and API-based test interfaces.",
      "Analyze test results, investigate failures, and identify anomalies for correction."
    ],
    tech: "Python · Robot Framework · UART · RS-232/RS-485 · CAN · SPI · Digilent Discovery · WaveForms SDK/API"
  },
  {
    date: "03/2026 — 06/2026",
    title: "Embedded Software Engineer",
    company: "SERMA INTERNATIONAL",
    domain: "Automated Test Bench",
    icon: <Cpu size={19} />,
    bullets: [
      "Develop Python drivers to control and automate laboratory equipment used in the automated test bench.",
      "Create a graphical application for equipment control using Qt Creator and C++.",
      "Integrated 15+ ATP tests into the application and validated their execution and performance.",
      "Conduct integration, system, and acceptance testing.",
      "Develop a Python script to automatically generate ATR (Acceptance Test Results)."
    ],
    tech: "C++ · Python · Qt Creator · NI-9474 · Visual Studio · Power Supply · Multimeter · Calibrator · Relay Switch"
  },
  {
    date: "02/2024 — 03/2026",
    title: "Automotive Audio Test & Validation Engineer",
    company: "SERMA INTERNATIONAL",
    domain: "Client: Renault Alliance",
    icon: <TestTube2 size={19} />,
    bullets: [
      "Configured and tested Hardware-in-the-Loop (HIL) A-IVI automotive systems using Vector CANalyzer and CAPL.",
      "Executed functional, non-functional, regression, non-regression, performance and stress testing.",
      "Validated infotainment functionalities including Apple CarPlay, Android Auto and ADAS.",
      "Designed and executed test cases and scenarios using CodeBeamer and Silk Central.",
      "Tracked and triaged anomalies using Jira, including SQL-based dashboards.",
      "Coordinated test activities, distributed testing tasks, and supported new team members."
    ],
    tech: "Vector CANalyzer · CAPL · Jira · SQL · CodeBeamer · Silk Central · R&S UPP · CAN · HIL · Agile"
  }
];

const projects = [
  {
    number: "01",
    title: "Automated Test Bench",
    description: "A Qt/C++ application and Python driver layer for controlling laboratory equipment and executing acceptance tests.",
    tags: ["C++", "Qt", "Python", "ATP", "ATR"],
    icon: <Terminal size={22} />
  },
  {
    number: "02",
    title: "Test Automation",
    description: "Automated functional validation using Python and Robot Framework, with protocol-specific drivers and API interfaces.",
    tags: ["Python", "Robot Framework", "UART", "CAN", "SPI"],
    icon: <Network size={22} />
  },
  {
    number: "03",
    title: "Automotive HIL Validation",
    description: "HIL validation of A-IVI automotive systems, covering infotainment, audio quality, regression and performance testing.",
    tags: ["CANalyzer", "CAPL", "HIL", "Jira"],
    icon: <ShieldCheck size={22} />
  }
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home" onClick={close}>
          LS<span>.</span>
        </a>

        <div className={`navlinks ${open ? "show" : ""}`}>
          {["About", "Experience", "Projects", "Skills", "Education", "Contact"].map(x =>
            <a key={x} href={`#${x.toLowerCase()}`} onClick={close}>
              {x}
            </a>
          )}
        </div>

        <a className="nav-cta" href="#contact">
          Let's talk <ArrowUpRight size={15}/>
        </a>

        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X/> : <Menu/>}
        </button>
      </nav>

      <section id="home" className="hero section">
        <div className="grid-bg"/>

        <div className="hero-copy">
          <div className="availability">
            <span/> Available for opportunities
          </div>

          <p className="eyebrow">
            TEST & VALIDATION · TEST AUTOMATION · EMBEDDED SOFTWARE
          </p>

          <h1>
            Engineering<br/>
            <em>reliability</em> into<br/>
            every test.
          </h1>

          <p className="lead">
            Polyvalent Computer Engineer working across aerospace and automotive
            systems, with a focus on embedded software, validation and test automation.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#experience">
              Explore my work <ArrowUpRight size={17}/>
            </a>

            <a
              className="button ghost"
              href="/LAMIS_SAIDI_EN_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV <Download size={16}/>
            </a>
          </div>
        </div>

        <div className="hero-orbit">
          <div className="orbit o1"/>
          <div className="orbit o2"/>
          <div className="orbit o3"/>

          <div className="core">
            <Cpu size={44}/>
            <span>
              EMBEDDED<br/>
              SYSTEMS
            </span>
          </div>

          <span className="orb-label l1">PYTHON</span>
          <span className="orb-label l2">C / C++</span>
          <span className="orb-label l3">HIL</span>
        </div>

        <a className="scroll" href="#about">
          Scroll to discover <ChevronDown size={16}/>
        </a>
      </section>

      <section id="about" className="section about">
        <div className="section-head">
          <span>01</span>
          <h2>About me</h2>
        </div>

        <div className="about-grid">
          <div>
            <p className="big-copy">
              I build and validate <strong>embedded systems</strong> where reliability matters.
            </p>
          </div>

          <div className="about-text">
            <p>
              My experience spans Test & Validation, Test Automation and Embedded
              Software across the automotive and aerospace industries.
            </p>

            <p>
              I enjoy turning requirements into robust test scenarios, automating
              repetitive validation tasks, and building the software around a test
              bench that makes engineering teams faster and more confident.
            </p>

            <div className="stats">
              <div>
                <strong>15+</strong>
                <span>ATP tests integrated</span>
              </div>

              <div>
                <strong>2</strong>
                <span>Industry domains</span>
              </div>

              <div>
                <strong>10–15</strong>
                <span>Tickets / month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section dark">
        <div className="section-head">
          <span>02</span>
          <h2>Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((e, i) => (
            <article className="exp" key={e.title}>
              <div className="exp-date">{e.date}</div>

              <div className="exp-line">
                <span>{e.icon}</span>
              </div>

              <div className="exp-card">
                <p className="domain">{e.domain}</p>

                <h3>{e.title}</h3>

                <p className="company">{e.company}</p>

                <ul>
                  {e.bullets.map(b =>
                    <li key={b}>{b}</li>
                  )}
                </ul>

                <p className="tech">{e.tech}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-head">
          <span>03</span>
          <h2>Selected work</h2>
        </div>

        <p className="section-intro">
          A few projects that represent how I approach embedded validation and automation.
        </p>

        <div className="projects">
          {projects.map(p => (
            <article className="project" key={p.number}>
              <div className="project-top">
                <span>{p.number}</span>
                {p.icon}
              </div>

              <h3>{p.title}</h3>

              <p>{p.description}</p>

              <div className="tags">
                {p.tags.map(t =>
                  <span key={t}>{t}</span>
                )}
              </div>

              <div className="project-arrow">
                <ArrowUpRight/>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills dark">
        <div className="section-head">
          <span>04</span>
          <h2>Toolkit</h2>
        </div>

        <div className="skill-grid">
          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-card" key={group}>
              <h3>{group}</h3>

              <div className="tags">
                {items.map(x =>
                  <span key={x}>{x}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-head">
          <span>05</span>
          <h2>Education & certifications</h2>
        </div>

        <div className="edu-grid">
          <article className="edu-card">
            <GraduationCap size={25}/>

            <p className="date">2021 — 2024</p>

            <h3>
              Engineering Degree in Computer Science — Embedded Systems
            </h3>

            <p>
              ESPRIT — Private Higher School of Engineering and Technology
            </p>

            <a
              href="https://esprit.tn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit ESPRIT <ExternalLink size={14}/>
            </a>
          </article>

          <article className="edu-card">
            <GraduationCap size={25}/>

            <p className="date">2018 — 2021</p>

            <h3>
              Preparatory Cycle for Engineering Studies — Technology
            </h3>

            <p>
              IPEIEM — Preparatory Institute for Engineering Studies El Manar
            </p>

            <a
              href="https://ipeiem.rnu.tn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit IPEIEM <ExternalLink size={14}/>
            </a>
          </article>
        </div>

        <div className="certs">

          <div className="cert">
            <span>ISTQB</span>

            <div>
              <h3>Foundation Level — Version 4.0</h3>

              <p>05/2026 · ISTQB</p>

              <a
                href="https://app.skillsclub.com/credentials/MjE1MzU5LTI5YWYwNzBhM2U5MDYyMzRlMzFmMDIzNTA2ZjYzMWI0NzUxMmNhZWM2OGQ5NDJiN2U5N2JjZTQxY2JlNDAxYTkt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate <ExternalLink size={14}/>
              </a>
            </div>
          </div>

          <div className="cert">
            <span>NVIDIA</span>

            <div>
              <h3>Applications of AI for Anomaly Detection</h3>

              <p>11/2023 · NVIDIA</p>

              <a
                href="https://learn.nvidia.com/certificates?id=82c7adcf0728480aa2dc8fc8056a505b"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate <ExternalLink size={14}/>
              </a>
            </div>
          </div>

          <div className="cert">
            <span>NVIDIA</span>

            <div>
              <h3>Applications of AI for Predictive Maintenance</h3>

              <p>11/2023 · NVIDIA</p>

              <a
                href="https://learn.nvidia.com/certificates?id=772dba4730084ab7aba3135cabaf7cb6"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate <ExternalLink size={14}/>
              </a>
            </div>
          </div>

        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="contact-glow"/>

        <div className="section-head">
          <span>06</span>
          <h2>Let's connect</h2>
        </div>

        <h2 className="contact-title">
          Have a project or<br/>
          <em>opportunity</em> in mind?
        </h2>

        <p>
          I'm open to opportunities in Test & Validation, Test Automation and
          Embedded Software, especially in aerospace and automotive environments.
        </p>

        <div className="contact-links">
          <a href="mailto:ls.lamissaidi@gmail.com">
            <Mail size={18}/>
            ls.lamissaidi@gmail.com
            <ArrowUpRight size={16}/>
          </a>

          <a
            href="https://www.linkedin.com/in/lamis-saidi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon/>
            LinkedIn
            <ArrowUpRight size={16}/>
          </a>
        </div>

        <div className="location">
          <MapPin size={16}/>
          Ariana, Tunisia
        </div>
      </section>

      <footer>
        <span>© 2026 Lamis Saidi</span>
        <span>Built for embedded reliability.</span>
      </footer>
    </main>
  );
}

function LinkedinIcon() {
  return <span className="linkedin-icon">in</span>;
}
