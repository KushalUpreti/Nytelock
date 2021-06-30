import React from 'react';
import "./Container.css";

const Container = (props) => {
    return (
        <div style={{
            marginTop: `${props.marginTop}`,
            marginBottom: props.marginBottom || "0"
        }}
            className="nav-link-container">
            {props.children}
        </div>
    );
}

export default Container;