import { ReactComponent as Logo } from 'assets/img/logo.svg';
import './styles.css';

function Footer() {
    return (
        <footer className="mt-auto py-3">
            <div className="container">
                <Logo />
                <p>
                    <small>
                        <strong>Semana Spring React</strong><br />
                        Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig"
                            target="_blank" rel="noreferrer">@devsuperior.ig</a>
                    </small>
                </p>
            </div>
        </footer>
    );
}

export default Footer;