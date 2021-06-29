import './LogoStyleContainer.css';
import AnimButton from '../AnimButton/AnimButton';
import LogoChooser from '../LogoChooser/LogoChooser';

export default function LogoStyleContainer() {
    return <div className="parent-logo-container">
        <div className="common-container">
            <section className="text-button-container">
                <div className="flex-text-button-container"> {/* Flex */}
                    <div className="text-encloser">
                        <h5>HOW DO I KNOW WHICH LOGO STYLE IS RIGHT FOR ME?</h5>
                        <h2>Different Types of Logo Styles</h2>
                    </div>
                    <div className="button-encloser">
                        <AnimButton text="Contact us" link="https://www.example.com" icon="fas fa-arrow-right" />
                    </div>
                </div>
            </section>
            <section className="logo-switch-container">
                <div className="flex-logo-switch-container">
                    <LogoChooser class="fas fa-italic" link="#ll" logoType={<p>Lettermark <br />Logos</p>} key={1} />
                    <LogoChooser class="fab fa-weebly" link="#wl" logoType={<p>Wordmark <br />Logos</p>} key={2} />
                    <LogoChooser class="fas fa-lemon" link="#pml" logoType={<p>Pictorial mark <br />Logos</p>} key={3} />
                    <LogoChooser class="fab fa-artstation" link="#aml" logoType={<p>Abstract mark <br />Logos</p>} key={4} />
                    <LogoChooser class="fas fa-theater-masks" link="#ml" logoType={<p>Mascot <br />Logos</p>} key={5} />
                    <LogoChooser class="fas fa-puzzle-piece" link="#cl" logoType={<p>Combination <br />Logos</p>} key={6} />
                </div>
            </section>
        </div>
    </div>
}