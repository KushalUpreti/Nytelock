import './SearchBtn.css';

export default function SearchBtn(props) {

    return <div className="search-button" onClick={props.clickHandler}>
        <i className={!props.clicked ? "fas fa-search" : "fas fa-times"}></i>
    </div>
}