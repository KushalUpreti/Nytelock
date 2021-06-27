import './Header.css';
import logo from '../../assets/noname';
import AnimButton from '../AnimButton/AnimButton';

export default function Header() {
    return <header>
        <div className="header-container">
            <section className="header-flex-container">

                <div className="logo-container">
                    <div className="padded-logo-container">
                        <a href="https://www.nytelock.com">
                            <img alt="website-logo" src={logo} />
                        </a>
                    </div>
                </div>

                <div className="mid-link-container">
                    <div className="links-container">
                        <ul className="unordered-list">
                            <li><a href="https://www.nytelock.com">Home</a></li>
                            <li><a href="https://www.nytelock.com">About</a></li>
                            <li><a href="https://www.nytelock.com">Serivces ˅</a></li>
                            <li><a href="https://www.nytelock.com">Portfolio</a></li>
                            <li><a href="https://www.nytelock.com">Blog</a></li>
                            <li><a href="https://www.nytelock.com">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="right-container">
                    <div className="component-container">
                        <AnimButton text="Get a Quote" icon="fas fa-comment-dots" />
                    </div>
                    <div className="right-search-container">
                        <span>
                            <i className="fas fa-search"></i>
                        </span>

                    </div>
                </div>
            </section>
        </div>
    </header>
}