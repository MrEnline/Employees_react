import { Component } from "react";
import "./search-panel.css";

// const SearchPanel = () => {
//     return (
//         <input type="text"
//                className="form-control search-input"
//                placeholder="Найти сотрудника"/>
                
//     );
// }

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);    //вызываем метод из app.js, который был передан с пропсами
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;