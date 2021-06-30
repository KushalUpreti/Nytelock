import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop/Backdrop';
import Container from '../Containers/Container';
import SideNavElem from './SideNavElems/SideNavElem'
import './Sidedrawer.css';

const Sidedrawer = (props) => {

    let style;
    if (props.show) {
        style = {
            transform: "translateX(0)"
        }
    } else {
        style = {
            transform: "translateX(100%)"
        }
    }

    const content =
        <>
            {props.show ? <Backdrop remove={props.close} /> : null}
            <div className="sidedrawer" style={style}>
                <div className="cross-button-container">
                    <i className="fas fa-times" onClick={props.close}></i>
                </div>

                <Container >
                    <SideNavElem shut={props.close} />
                </Container>
            </div>
        </>

    return ReactDOM.createPortal(content, document.getElementById("sidedrawer"));
}

export default Sidedrawer;