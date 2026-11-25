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
    </div>
  );
}
