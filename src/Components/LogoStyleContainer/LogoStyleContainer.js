import './LogoStyleContainer.css';
import AnimButton from '../AnimButton/AnimButton';

export default function LogoStyleContainer() {
    return <div className="parent-logo-container">
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
                {/* Logo buttons go here */}
            </div>
        </section>
    </div>
}