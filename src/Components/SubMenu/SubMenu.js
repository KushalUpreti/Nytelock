import './SubMenu.css'
export default function SubMenu(props) {
    let class_name = `sub-menu-link-container ${props.class}`;

    return <div className={class_name}>
        <div className="inner-link-container">
            <ul className="unordered-links">
                <li className="hoverable"><a href="https://www.example.com">Graphic Design And Branding</a></li>
                <li style={{ listStyle: "disc", marginLeft: "20px" }}><a href="https://www.example.com">Logo Design</a></li>
                <li className="hoverable"><a href="https://www.example.com">Name Card Design</a></li>
                <li className="hoverable"><a href="https://www.example.com">Website Design & Development</a></li>
                <li className="hoverable"><a href="https://www.example.com">SEO & Keyword Analysis</a></li>
                <li className="hoverable"><a href="https://www.example.com">Video Production</a></li>
            </ul>
        </div>
    </div>
}