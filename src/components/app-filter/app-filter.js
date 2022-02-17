
import { Component } from "react";
import "./app-filter.css";

const AppFilter = (props) => {

    //данные для кнопок
    const buttonsData = [
      {name: "all", label: "Все сотрудники"},
      {name: "rise", label: "На повышение"},
      {name: "moreThen1000", label: "З/П выше 1000$"},  
    ];

    //сформируем массив верстки для каждой кнопки
    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;   //в зависимости от того какое значние приходит от родителя
        const clazz = active ? "btn-light" : "btn-outline-light"
        //  !!! ВАЖНО !!!
        //onClick={() => props.onFilterSelect(name)}> если надо передать параметр, 
        //то вызываем функцию onFilterSelect с параметром name через стрелочную
        return (
            <button className={`btn ${clazz}`}
                    type="button"
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}       
            </button>
        )
    })

    //сформируем верстку с кнопками
    return (
        <div className="btn-group">
            {buttons}   
            {/* <button className="btn btn-light"
                    type="button">
                    Все сотрудники        
            </button>
            <button className="btn btn-outline-light"
                    type="button">
                    На повышение        
            </button>
            <button className="btn btn-outline-light"
                    type="button">
                    З/П выше 1000$        
            </button> */}
        </div>
    );
}

//мой вариант
// class AppFilter extends Component {
    
//     constructor(props) {
//         super(props);
//         this.state = {
//             filter: ""
//         }
//     }

//     onUpdateFilter = (e) => {
//         const filter = e.currentTarget.getAttribute("data-filter");
//         this.setState({filter});
//         this.props.onUpdateFilter(filter);
//     }

//     render() {

//         return (
//             <div className="btn-group">
//                 <button className="btn btn-light"
//                         type="button"
//                         data-filter="allEmployees"
//                         onClick={this.onUpdateFilter}>
//                         Все сотрудники        
//                 </button>
//                 <button className="btn btn-outline-light"
//                         type="button"
//                         data-filter="rise"
//                         onClick={this.onUpdateFilter}>
//                         На повышение        
//                 </button>
//                 <button className="btn btn-outline-light"
//                         type="button"
//                         data-filter="moreThen1000"
//                         onClick={this.onUpdateFilter}>
//                         З/П выше 1000$        
//                 </button>
//             </div>
//         )
//     }
// }

export default AppFilter;