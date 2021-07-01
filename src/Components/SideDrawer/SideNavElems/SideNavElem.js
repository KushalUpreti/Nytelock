import { useState } from 'react';
import './SideNavElem.css'

const SideNavElem = (props) => {
    const [open, setOpen] = useState(false);

    const subMenuHandler = () => {
        setOpen(prev => !prev);
    }

    return (
        <>
            <ul className="side-nav-elems">
                <li>
                    <a href="#none" onClick={props.shut} >Home</a>
                </li>
                <li>
                    <a href="#none" onClick={props.shut} >About</a>
                </li>
                <li>
                    <a href="#none" onClick={subMenuHandler} >Services &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-caret-down"></i></a>
                    <div class={open ? "sub-menu-container sub-menu-show" : "sub-menu-container sub-menu-hide"}>
                        <ul className="sub-menu-ul">
                            <li>
                                <a href="#none" onClick={props.shut} >Graphic Design And Branding</a>
                            </li>
                            <li>
                                <a href="#none" onClick={props.shut} >Logo Design</a>
                            </li>
                            <li >
                                <a style={{ color: "black" }} href="#none" onClick={props.shut} >Name Card Design</a>
                            </li>
                            <li>
                                <a href="#none" onClick={props.shut} >Website Design & Development</a>
                            </li>
                            <li>
                                <a href="#none" onClick={props.shut} >Flyer Design</a>
                            </li>
                            <li>
                                <a href="#none" onClick={props.shut} >SEO & Keyword Analysis</a>
                            </li>
                            <li>
                                <a href="#none" onClick={props.shut} >Video Production</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#none" onClick={props.shut} >Portfolio</a>
                </li>
                <li>
                    <a href="#none" onClick={props.shut} >Blog</a>
                </li>
                <li>
                    <a href="#none" onClick={props.shut} >Contact</a>
                </li>
                <li>
                    <a href="#none" onClick={props.shut} >Get a Quote</a>
                </li>
            </ul>
        </>
    )
}

export default SideNavElem;