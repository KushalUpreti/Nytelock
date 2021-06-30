import './TextContent.css';
import Canvas from '../Canvas/Canvas';

export default function TextContent(props) {
    return <section className="text-n-logo-container">
        <Canvas totalParticles={50} />
        <div className="padded-textnlogo-container">
            <div className="flex-text-n-logo-container">
                <div className="logo-text-content">
                    <h2>Lettermark Logos</h2>
                    <p>A Monogram or lettermark is a typography-based logo that’s comprised of a few letters, usually a company’s initials. The lettermark is all about simplicity.</p>
                    <br />
                    <p>By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name. </p>
                </div>
                <div className="logo-image-content">
                    <img alt="logo-type-images" src="https://nytelock.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-20-at-12.58.49-AM-1536x503.png" />
                </div>
            </div>
        </div>
    </section>
}