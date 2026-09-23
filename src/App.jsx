import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const elements = document.querySelectorAll(".reveal");

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* ================= NAVBAR ================= */}
      <header className="navbar">

        <a href="#home" className="logo" onClick={closeMenu}>
          Ryan<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="nav-actions">

          <button
            className="theme-button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </header>


      {/* ================= HERO ================= */}
      <main>

        <section className="hero" id="home">

          <div className="hero-background">
            <span className="circle circle-one"></span>
            <span className="circle circle-two"></span>
            <span className="circle circle-three"></span>
          </div>

          <div className="hero-content reveal">

            <div className="hero-text">

              <p className="small-title">
                HELLO, I'M
              </p>

              <h1>
                Ryan <span>Artha Ditha</span>
              </h1>

              <h2>
                Mahasiswa Sistem Informasi
              </h2>

              <p className="hero-description">
                Saya adalah mahasiswa Universitas Negeri Semarang dari
                Program Studi Sistem Informasi yang memiliki ketertarikan
                terhadap teknologi, pengembangan sistem, komunikasi,
                dan pengembangan kemampuan diri.
              </p>

              <div className="hero-buttons">

                <a href="#about" className="button primary">
                  Kenali Saya
                  <span>→</span>
                </a>

                <a
                  href="/CV-Ryan-Artha-Ditha.pdf"
                  download
                  className="button secondary"
                >
                  Download CV
                  <span>↓</span>
                </a>

              </div>

              <div className="hero-social">

                <a
                  href="https://instagram.com/artha_ditha"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>

                <span>•</span>

                <span>Semarang, Indonesia</span>

              </div>

            </div>


            <div className="hero-image">

              <div className="image-glow"></div>

              <div className="image-wrapper">

                <img
                  src="/profile.jpg"
                  alt="Ryan Artha Ditha"
                />

              </div>

              <div className="floating-card card-one">
                <span>🎓</span>
                <div>
                  <small>Student</small>
                  <strong>Sistem Informasi</strong>
                </div>
              </div>

              <div className="floating-card card-two">
                <span>💡</span>
                <div>
                  <small>Focus</small>
                  <strong>Technology</strong>
                </div>
              </div>

            </div>

          </div>

          <div className="scroll-indicator">
            <span></span>
            Scroll Down
          </div>

        </section>


        {/* ================= ABOUT ================= */}
        <section className="section" id="about">

          <div className="section-heading reveal">
            <p>ABOUT ME</p>
            <h2>Tentang Saya</h2>
            <span></span>
          </div>

          <div className="about-grid">

            <div className="about-description reveal">

              <h3>
                Mengenal saya lebih dekat.
              </h3>

              <p>
                Halo! Saya Ryan Artha Ditha, seorang mahasiswa Universitas
                Negeri Semarang yang sedang menempuh pendidikan pada Program
                Studi Sistem Informasi.
              </p>

              <p>
                Saya memiliki ketertarikan terhadap perkembangan teknologi
                informasi dan bagaimana teknologi dapat digunakan untuk
                membantu menyelesaikan berbagai permasalahan secara efektif
                dan efisien.
              </p>

              <p>
                Selain mengembangkan kemampuan akademik, saya juga berusaha
                meningkatkan kemampuan komunikasi, public speaking,
                pengelolaan dokumen digital, serta keterampilan dalam
                mengembangkan dan mempresentasikan sebuah ide.
              </p>

            </div>


            <div className="biodata-card reveal">

              <div className="card-header">
                <span className="card-number">01</span>
                <h3>Biodata</h3>
              </div>

              <div className="biodata-list">

                <div className="biodata-item">
                  <span>Nama</span>
                  <strong>Ryan Artha Ditha</strong>
                </div>

                <div className="biodata-item">
                  <span>Usia</span>
                  <strong>20 Tahun</strong>
                </div>

                <div className="biodata-item">
                  <span>Alamat</span>
                  <strong>Pekalongan</strong>
                </div>

                <div className="biodata-item">
                  <span>Profesi</span>
                  <strong>Mahasiswa</strong>
                </div>

                <div className="biodata-item">
                  <span>Universitas</span>
                  <strong>Universitas Negeri Semarang</strong>
                </div>

                <div className="biodata-item">
                  <span>Program Studi</span>
                  <strong>Sistem Informasi</strong>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= EDUCATION ================= */}
        <section className="section section-alt" id="education">

          <div className="section-heading reveal">
            <p>MY JOURNEY</p>
            <h2>Pendidikan</h2>
            <span></span>
          </div>

          <div className="education-container reveal">

            <div className="education-line"></div>

            <div className="education-item">

              <div className="education-dot"></div>

              <div className="education-content">

                <span className="education-year">
                  2025 — Sekarang
                </span>

                <h3>
                  Universitas Negeri Semarang
                </h3>

                <h4>
                  Program Studi Sistem Informasi
                </h4>

                <p>
                  Menempuh pendidikan di bidang Sistem Informasi dengan
                  mempelajari teknologi informasi, analisis sistem,
                  pengembangan aplikasi, database, pemrograman, serta
                  pengelolaan sistem informasi.
                </p>

              </div>

            </div>


            <div className="education-item">

              <div className="education-dot"></div>

              <div className="education-content">

                <span className="education-year">
                  Pendidikan Sebelumnya
                </span>

                <h3>
                  Pendidikan Menengah
                </h3>

                <h4>
                  Indonesia
                </h4>

                <p>
                  Mengembangkan kemampuan akademik, komunikasi, kerja sama,
                  organisasi, dan berbagai keterampilan yang menjadi dasar
                  untuk melanjutkan pendidikan ke perguruan tinggi.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}
        <section className="section" id="skills">

          <div className="section-heading reveal">
            <p>WHAT I CAN DO</p>
            <h2>Skills</h2>
            <span></span>
          </div>

          <div className="skills-grid">

            <div className="skill-card reveal">

              <div className="skill-icon">
                🎤
              </div>

              <h3>
                Public Speaking
              </h3>

              <p>
                Mampu menyampaikan informasi, ide, dan gagasan secara
                terstruktur serta berkomunikasi di depan individu maupun
                kelompok.
              </p>

              <div className="skill-tag">
                Communication
              </div>

            </div>


            <div className="skill-card reveal">

              <div className="skill-icon">
                💻
              </div>

              <h3>
                Soft File
              </h3>

              <p>
                Memiliki kemampuan dalam mengelola dokumen digital,
                presentasi, file tugas, serta berbagai kebutuhan administrasi
                berbasis digital.
              </p>

              <div className="skill-tag">
                Digital
              </div>

            </div>


            <div className="skill-card reveal">

              <div className="skill-icon">
                📁
              </div>

              <h3>
                Hard File
              </h3>

              <p>
                Mampu mengelola dokumen fisik secara rapi, terstruktur,
                dan sesuai kebutuhan administrasi maupun kegiatan.
              </p>

              <div className="skill-tag">
                Administration
              </div>

            </div>


            <div className="skill-card reveal">

              <div className="skill-icon">
                🧠
              </div>

              <h3>
                Problem Solving
              </h3>

              <p>
                Memiliki kemampuan untuk memahami permasalahan,
                mencari alternatif solusi, dan menentukan langkah yang
                sesuai berdasarkan situasi.
              </p>

              <div className="skill-tag">
                Thinking
              </div>

            </div>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}
        <section className="section section-alt" id="projects">

          <div className="section-heading reveal">
            <p>MY WORK</p>
            <h2>Project & Portfolio</h2>
            <span></span>
          </div>

          <div className="project-grid">

            <div className="project-card reveal">

              <div className="project-number">
                01
              </div>

              <div className="project-icon">
                🌐
              </div>

              <div className="project-content">

                <span>
                  WEB DEVELOPMENT
                </span>

                <h3>
                  Personal Portfolio
                </h3>

                <p>
                  Website portfolio pribadi yang menampilkan profil,
                  pendidikan, kemampuan, serta informasi kontak dalam
                  tampilan modern dan responsif.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>

              </div>

            </div>


            <div className="project-card reveal">

              <div className="project-number">
                02
              </div>

              <div className="project-icon">
                📊
              </div>

              <div className="project-content">

                <span>
                  INFORMATION SYSTEM
                </span>

                <h3>
                  Sistem Informasi
                </h3>

                <p>
                  Project pembelajaran yang berkaitan dengan analisis,
                  perancangan, pengolahan data, dan pengembangan sistem
                  informasi.
                </p>

                <div className="project-tech">
                  <span>System</span>
                  <span>Database</span>
                  <span>Analysis</span>
                </div>

              </div>

            </div>


            <div className="project-card reveal">

              <div className="project-number">
                03
              </div>

              <div className="project-icon">
                🎨
              </div>

              <div className="project-content">

                <span>
                  UI / UX
                </span>

                <h3>
                  Interface Design
                </h3>

                <p>
                  Perancangan antarmuka digital yang memperhatikan
                  kebutuhan pengguna, kemudahan penggunaan, struktur
                  informasi, dan tampilan visual.
                </p>

                <div className="project-tech">
                  <span>UI Design</span>
                  <span>UX</span>
                  <span>Prototype</span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="cta-section reveal">

          <div className="cta-content">

            <span>
              LET'S CONNECT
            </span>

            <h2>
              Mari terhubung dan<br />
              <strong>berkolaborasi.</strong>
            </h2>

            <p>
              Terbuka untuk bertukar ide, berdiskusi, belajar bersama,
              maupun berkolaborasi dalam berbagai kegiatan dan project.
            </p>

            <a
              href="https://wa.me/6280000000000"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-button"
            >
              <span>💬</span>
              Hubungi Saya via WhatsApp
            </a>

          </div>

        </section>


        {/* ================= CONTACT ================= */}
        <section className="section" id="contact">

          <div className="section-heading reveal">
            <p>GET IN TOUCH</p>
            <h2>Kontak Saya</h2>
            <span></span>
          </div>

          <div className="contact-grid">

            <a
              href="https://instagram.com/artha_ditha"
              target="_blank"
              rel="noreferrer"
              className="contact-card reveal"
            >

              <div className="contact-icon">
                📸
              </div>

              <div>
                <small>Instagram</small>
                <h3>@artha_ditha</h3>
              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            <a
              href="https://wa.me/6280000000000"
              target="_blank"
              rel="noreferrer"
              className="contact-card reveal"
            >

              <div className="contact-icon">
                💬
              </div>

              <div>
                <small>WhatsApp</small>
                <h3>Chat with me</h3>
              </div>

              <span className="contact-arrow">
                ↗
              </span>

            </a>


            <a
              href="/CV-Ryan-Artha-Ditha.pdf"
              download
              className="contact-card reveal"
            >

              <div className="contact-icon">
                📄
              </div>

              <div>
                <small>Curriculum Vitae</small>
                <h3>Download CV</h3>
              </div>

              <span className="contact-arrow">
                ↓
              </span>

            </a>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer>

        <div className="footer-logo">
          Ryan<span>.</span>
        </div>

        <p>
          Designed & Developed by Ryan Artha Ditha
        </p>

        <div className="footer-line"></div>

        <small>
          © 2026 Ryan Artha Ditha. All Rights Reserved.
        </small>

      </footer>


      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/6280000000000"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="WhatsApp"
      >
        💬
      </a>

    </div>
  );
}

export default App;