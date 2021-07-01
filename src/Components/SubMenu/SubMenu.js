import './SubMenu.css'
export default function SubMenu(props) {
    let class_name = `sub-menu-link-container ${props.class}`;

    return <div className={class_name}>
        <div className="inner-link-container">
            <ul className="unordered-links">
                <li className="hoverable"><a href="#none">Graphic Design And Branding</a></li>
                <li style={{ listStyle: "disc", marginLeft: "20px" }}><a href="#none">Logo Design</a></li>
                <li className="hoverable"><a href="#none">Name Card Design</a></li>
                <li className="hoverable"><a href="#none">Website Design & Development</a></li>
                <li className="hoverable"><a href="#none">Flyer Design</a></li>
                <li className="hoverable"><a href="#none">SEO & Keyword Analysis</a></li>
                <li className="hoverable"><a href="#none">Video Production</a></li>
            </ul>
        </div>
    </div>
}