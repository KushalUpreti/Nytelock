import { useState } from 'react';
import './LogoChooser.css';

export default function LogoChooser(props) {

    let aClassname = `logo-chooser-link${props.active === props.link ? " logo-chooser-link-active" : " logo-chooser-link-deactive"}`;
    let logoTypeImageContaienrClass =
        `logo-type-image-container${props.active === props.link ? " logo-type-image-container-active" : " logo-type-image-container-deactive"}`;

    let logoChooserContainerClass =
        `logo-chooser-container${props.active === props.link ? " logo-chooser-container-active" : " logo-chooser-container-deactive"}`;

    let arrowClass = "arrow";

    return <div className={logoChooserContainerClass} onClick={() => { props.activeHandler(props.link) }}>
        <a href={props.link} className={aClassname}>
            <div className={logoTypeImageContaienrClass}>
                <i className={props.class}></i>
            </div>
            <div className="logo-type-text-container">
                {props.logoType}
            </div>
        </a>
        {props.active === props.link ? <div className={arrowClass} /> : null}
    </div>
}