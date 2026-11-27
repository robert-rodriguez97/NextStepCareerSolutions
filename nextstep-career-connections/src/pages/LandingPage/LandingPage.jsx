import Navbar from "../../components/Navbar.jsx";
import "./landingpage.css";

export default function LandingPage() {
  return (
    <div className="main-container">
      <div className="navbar-container bg-light">
        <Navbar />
      </div>
      <div className="hero-container">
        <div className="hero-text-content">
          <label className="hero-label">
            {" "}
            <div className="label-circle"></div>
            Vanguard Career Guidance
          </label>

          <div className="heading-main">
            <h1>NextStep Career Solutions</h1>
            <h2 className="heading-sub">
              Your goals. Your potential. Your next opportunity.
            </h2>
          </div>
          <div className="hero-paragraph-container">
            <p className="hero-paragraph">
              We provide professional career development and employment support
              services desighned to help individuals improve their professional
              imagem, strengthen their job applications, and navigate the job
              search process with confidence. Our services focus on creating
              professional resumes, developing effective cover letters, updating
              existing resumes and providing job search assitance tailored to
              each client's career goals.
            </p>
          </div>
          <div className="hero-btns-container">
            <button className="hero-btn-primary">Explore Services</button>
            <button className="hero-btn-secondary">Contact Us</button>
          </div>
        </div>
        <div className="hero-img">
          <img src="https://t3.ftcdn.net/jpg/02/08/75/34/360_F_208753444_wxbyQdNk3HptqXepy0bW32KUvqh1jZ7V.jpg" />
        </div>
      </div>
      <section className="mission-section">
        <div className="mission-heading-container">
          <span className="mission-span">Our Foundation & Purpose</span>
          <h2 className="mission-heading">
            Empowering Your Pathway to
            <br /> Sustainable Success
          </h2>
        </div>
        <div className="mission-content">
          <div className="mission-block-one">
            <p className="mission-paragraph-bold">
              At NextStep Career Solutions, we believe everyone deserves the
              opportunity to build a successful and fulfilling career. Our
              mission is to empower individuals by providing personalized
              employment support, career guidance, and resources that help them
              move forward with confidence.
            </p>
            <p className="mission-paragraph-light">
              We offer practical, career-focused services designed to help
              individuals navigate the job market, strengthen their professional
              skills, and pursue new employment opportunites. Whether you are
              entering the workforce, looking for a career change, returning to
              employment, or seeking opportunites for professional growth, we
              are here to help you take your next step.
            </p>
            <div className="mission-statement-container">
              <h4 className="mission-statement-heading">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mission-svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                  />
                </svg>
                Mission Statement
              </h4>
              <p className="mission-statement-paragraph">
                "Our mission is to empower individuals to achieve their career
                goals by providing personalized support, practical resources,
                and expert guidance throughout their professional journey."
              </p>
            </div>
          </div>
          <div className="mission-block-two">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mission-star-svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>

            <h3 className="mission-heading-secondary">
              What Makes The
              <br /> Business Unique
            </h3>
            <p className="mission-paragraph-two">
              Our approach combines personalized career support with
              <br /> practical employment knowledge. We understand the
              <br />
              importance of presenting each individual's experience,
              <br /> skills, and qualifications in a professional way that
              attracts
              <br /> employers and helps them stand out in today's competitive
              job market.
            </p>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-heading-container">
          <div className="about-heading-left">
            <span className="mission-span">Professional Leadership</span>
            <h2 className="mission-heading">
              About Us/Professional
              <br /> Background
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
