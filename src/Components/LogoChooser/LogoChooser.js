import './LogoChooser.css';

export default function LogoChooser(props) {
    return <div className="logo-chooser-container">
        <a href={props.link} className="logo-chooser-link">
            <div className="logo-type-image-container">
                <i className={props.class}></i>
            </div>
            <div className="logo-type-text-container">
                {props.logoType}
            </div>
        </a>
    </div>
}