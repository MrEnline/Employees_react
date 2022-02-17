import { Component } from "react/cjs/react.production.min";
import "./employees-list-item.css";

   const EmployeesListItem = (props) => {
   
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         increase: false,
    //         rise: false
    //     }
    // }
    
    // //используем callback внутри setState, т.к. зависим от предыдущего состояния increase
    // onIncrease = () => {
    //     this.setState(({increase}) => ({
    //         increase: !increase
    //     }))
    // }

    // onAddLikeClass = () => {
    //     this.setState(({rise}) => ({
    //         rise: !rise
    //     }))
    // }

        //const {name, salary, increase} = this.props;
        const {name, salary, onDelete, onToggleProp, increase, rise} = props;
        //const {increase, rise} = this.state;
        //добавляем класс в зависимости от флага в массиве в компоненте app.js
        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += ' increase';
        }
        if (rise) {
            classNames += ' like';
        }
        
        return (
            <li className={classNames}>
                <span className="list-group-item-label" 
                      onClick={onToggleProp} 
                      data-toggle="rise"
                      style={{fontSize: 40, color: 'red', transition: 'all', WebkitTransition: 'all', msTransition:'all'}}
                      >{name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleProp} data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
}

//const EmployeesListItem = (props) => {
// const EmployeesListItem = ({name, salary, increase}) => {
   
//     //добавляем класс в зависимости от флага в массиве в компоненте app.js
//     let classNames = "list-group-item d-flex justify-content-between";
//     if (increase)
//         classNames += ' increase';
    
//     return (
//         <li className={classNames}>
//             <span className="list-group-item-label">{name}</span>
//             <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
//             <div className='d-flex justify-content-center align-items-center'>
//                 <button type="button"
//                     className="btn-cookie btn-sm">
//                     <i className="fas fa-cookie"></i>
//                 </button>

//                 <button type="button"
//                         className="btn-trash btn-sm">
//                     <i className="fas fa-trash"></i>
//                 </button>
//                 <i className="fas fa-star"></i>
//             </div>
//         </li>
//     )
// }

export default EmployeesListItem;