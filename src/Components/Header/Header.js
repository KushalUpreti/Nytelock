import './Header.css';
// import logo from '../../assets/noname';
import AnimButton from '../AnimButton/AnimButton';
import SearchBtn from '../SearchBtn/SearchBtn';
import SearchContainer from '../SearchContainer/SearchContainer';
import SubMenu from '../SubMenu/SubMenu';
import Sidedrawer from '../SideDrawer/Sidedrawer';
import logo from '../../assets/noname';
import { useState } from 'react';

export default function Header(props) {
    const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);

    const [drawer, setDrawer] = useState(false)

    const showDrawerHandler = () => {
        setDrawer(true)
    }
    const hideDrawerHandler = () => {
        setDrawer(false)
    }

    let headerClass = "";
    if (props.scrollingDown) {
        headerClass = "hide";
    }
    if (!props.scrollingDown) {
        headerClass = "show";
    }
    // if (props.isFixed) {
    //     headerClass += " isFixed";
    // } else {
    //     headerClass = headerClass.replace(" isFixed", "");
    // }

    const clickHandler = () => {
        setClicked(prevState => {
            return !prevState;
        })
    }

    return <header className={headerClass}>
        <div className="header-container">
            <section className="header-flex-container">

                <div className="logo-container">
                    <div className="padded-logo-container">
                        <a href="#none">
                            <img alt="website-logo" src={logo} />
                        </a>
                    </div>
                </div>

                <div className="mid-link-container">
                    <div className="links-container">
                        <ul className="unordered-list">
                            <li><a href="#none">Home</a></li>
                            <li><a href="#none">About</a></li>
                            <li
                                onMouseEnter={() => { setHovered(true) }}
                                onMouseLeave={() => { setHovered(false) }}><a href="#none">Services ˅</a>
                                <SubMenu class={hovered ? "showSubMenu" : "hideSubMenu"} />
                            </li>
                            <li><a href="#none">Portfolio</a></li>
                            <li><a href="#none">Blog</a></li>
                            <li><a href="#none">Contact</a></li>
                        </ul>

                    </div>
                </div>

                <div className="right-container">
                    <div className="component-container">
                        <AnimButton text="Get a Quote" icon="fas fa-comment-dots" link="#none" />
                    </div>
                    <div className="right-search-container">
                        <SearchBtn clicked={clicked} clickHandler={clickHandler} />
                        {clicked ? <SearchContainer clickHandler={clickHandler} /> : null}
                    </div>
                    <div class="HamIcon" onClick={showDrawerHandler}><div></div><div></div><div></div></div>
                </div>
            </section>
            <Sidedrawer show={drawer} close={hideDrawerHandler} />
        </div>
    </header>
}