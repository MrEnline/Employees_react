
import { Component } from "react";
import "./app-filter.css";

// const AppFilter = () => {
//     return (
//         <div className="btn-group">
//             <button className="btn btn-light"
//                     type="button">
//                     Все сотрудники        
//             </button>
//             <button className="btn btn-outline-light"
//                     type="button">
//                     На повышение        
//             </button>
//             <button className="btn btn-outline-light"
//                     type="button">
//                     З/П выше 1000$        
//             </button>
//         </div>
//     );
// }

class AppFilter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            filter: ""
        }
    }

    onUpdateFilter = (e) => {
        const filter = e.currentTarget.getAttribute("data-filter");
        this.setState({filter});
        this.props.onUpdateFilter(filter);
    }

    render() {

        return (
            <div className="btn-group">
                <button className="btn btn-light"
                        type="button"
                        data-filter="allEmployees"
                        onClick={this.onUpdateFilter}>
                        Все сотрудники        
                </button>
                <button className="btn btn-outline-light"
                        type="button"
                        data-filter="increase"
                        onClick={this.onUpdateFilter}>
                        На повышение        
                </button>
                <button className="btn btn-outline-light"
                        type="button"
                        data-filter="salaryUp1000"
                        onClick={this.onUpdateFilter}>
                        З/П выше 1000$        
                </button>
            </div>
        )
    }
}

export default AppFilter;