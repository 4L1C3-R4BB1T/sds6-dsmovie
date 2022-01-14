import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <Link to="/">
                        <h1>DSMovie</h1>
                    </Link>
                    <a href="https://github.com/4L1C3-R4BB1T" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/4L1C3-R4BB1T</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
