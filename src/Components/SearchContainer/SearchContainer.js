import './SearchContainer.css';

function TextSearchBtn(props) {

    return <div className="text-search-button" onClick={props.clickHandler}>
        <i className="fas fa-search" ></i>
    </div>
}



export default function SearchContainer(props) {
    const submitHandler = (e) => {
        e.preventDefault();
        props.clickHandler();
    }

    return <div className="search-container" style={props.style || null}>
        <form className="search-form" onSubmit={submitHandler}>
            <input type="search" placeholder="Search..." />
            <TextSearchBtn clickHandler={props.clickHandler} />
        </form>
    </div>
}