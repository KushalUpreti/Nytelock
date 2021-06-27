import './SearchContainer.css';

function TextSearchBtn(props) {

    return <div className="text-search-button">
        <i className="fas fa-search" ></i>
    </div>
}

export default function SearchContainer(props) {
    return <div className="search-container" style={props.style || null}>
        <form className="search-form">
            <input type="search" placeholder="Search..." />
            <TextSearchBtn />
        </form>
    </div>
}