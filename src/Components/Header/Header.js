import './Header.css';
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
                            <LinkComponent title="Home" />
                            <LinkComponent title="About" />
                            <li
                                onMouseEnter={() => { setHovered(true) }}
                                onMouseLeave={() => { setHovered(false) }}><a href="#none">Services ˅</a>
                                <SubMenu class={hovered ? "showSubMenu" : "hideSubMenu"} />
                            </li>
                            <LinkComponent title="Portfolio" />
                            <LinkComponent title="Blog" />
                            <LinkComponent title="Contact" />
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

function LinkComponent(props) {
    const [expanded, setExpanded] = useState(false);

    return <li><a href="#none"
        onMouseEnter={() => { setExpanded(true) }}
        onMouseLeave={() => { setExpanded(false) }}>{props.title}</a>
        <div className="nav-link-anim-flex">
            <div className="div1-container" style={{ justifyContent: expanded ? "flex-end" : "flex-start" }}>
                <div className={expanded ? "div1 div1-expand" : "div1 div1-contract"}>
                </div>
            </div>
            <div className="div2-container" style={{ justifyContent: expanded ? "flex-start" : "flex-end" }}>
                <div className={expanded ? "div2 div2-expand" : "div2 div2-contract"}>
                </div>
            </div>
        </div>
    </li>
}