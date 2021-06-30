import './TextContent.css';
import Canvas from '../Canvas/Canvas';

export default function TextContent(props) {
    let { title, para1, para2, logoLink } = props.content;

    return <section className="text-n-logo-container">
        <Canvas totalParticles={50} />
        <div className="padded-textnlogo-container">
            <div className="flex-text-n-logo-container">
                <div className="logo-text-content">
                    <h2>{title}</h2>
                    <p>{para1}</p>
                    <br />
                    <p>{para2}</p>
                </div>
                <div className="logo-image-content">
                    <img alt="logo-type-images" src={logoLink} />
                </div>
            </div>
        </div>
    </section>
}