import './LogoStyleContainer.css';
import AnimButton from '../AnimButton/AnimButton';
import LogoChooser from '../LogoChooser/LogoChooser';
import { useState } from 'react';

export default function LogoStyleContainer(props) {
    const [active, setActive] = useState("#ll");

    const activeHandler = (logoLink) => {
        setActive(logoLink);
        props.changeContent(logoLink);
    }

    return <div className="parent-logo-container">
        <div className="common-container">
            <section className="text-button-container">
                <div className="flex-text-button-container">
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
                    <LogoChooser
                        active={active}
                        class="fas fa-italic" link="#ll"
                        logoType={<p>Lettermark <br />Logos</p>} key={1}
                        activeHandler={activeHandler}
                    />
                    <LogoChooser
                        active={active}
                        class="fab fa-weebly" link="#wl"
                        logoType={<p>Wordmark <br />Logos</p>}
                        key={2}
                        activeHandler={activeHandler}
                    />
                    <LogoChooser
                        active={active}
                        class="fas fa-lemon"
                        link="#pml"
                        logoType={<p>Pictorial mark <br />Logos</p>}
                        key={3}
                        activeHandler={activeHandler}
                    />
                    <LogoChooser
                        active={active}
                        class="fab fa-artstation"
                        link="#aml"
                        logoType={<p>Abstract mark <br />Logos</p>}
                        key={4} activeHandler={activeHandler}
                    />
                    <LogoChooser
                        active={active}
                        class="fas fa-theater-masks"
                        link="#ml"
                        logoType={<p>Mascot <br />Logos</p>}
                        key={5} activeHandler={activeHandler}
                    />
                    <LogoChooser
                        active={active}
                        class="fas fa-puzzle-piece"
                        link="#cl"
                        logoType={<p>Combination <br />Logos</p>}
                        key={6} activeHandler={activeHandler}
                    />
                </div>
            </section>
        </div>
    </div>
}