import { Link } from 'react-router-dom';
import "../styles/navbar_menu.css"
import '../styles/Home.css'; 
import pokeballIcon from '../icons/pokeball.png';

export const Home = () => {
    return (
        <div className="home-container">
      <div className="home-content">
        
        <div className="project-badge">PORTFOLIO PROJECT 2026</div>

        <h1 className="home-title">
          POKEDEX <span className="highlight">MANAGER</span>
        </h1>
        
        <p className="home-subtitle">
          Una aplicación Fullstack para la gestión y análisis de Pokémon.
          Desarrollada con arquitectura moderna y diseño Pixel-Perfect.
        </p>

        <div className="tech-stack">
          <span className="tech-pill">⚛️ React JS</span>
          <span className="tech-pill">🎨 CSS3 Retro</span>
          <span className="tech-pill">🔌 REST API</span>
          <span className="tech-pill">📱 Responsive</span>
        </div>

        <div className="home-actions">
          <Link to="/login" className="btn-start">
            PRESS START
          </Link>
          <a href="https://github.com/Gadieiru" target="_blank" rel="noreferrer" className="btn-github">
            VER CÓDIGO GITHUB
          </a>
        </div>

        <div className="developer-credit">
          <p>Designed & Coded by <strong>Gadiel</strong></p>
        </div>
      </div>

      <div className="floating-pokeball">
        <img src={pokeballIcon} alt="Pokeball Decorativa" />
      </div>
    </div>
    )
}