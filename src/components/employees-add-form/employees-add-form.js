import { Component } from 'react';

//import './employees-add-form.css';
import './employees-add-form.scss';

// const EmployeesAddForm = ({onAddItem}) => {
    
//     return (
//         <div className="app-add-form">
//             <h3>Добавьте нового сотрудника</h3>
//             <form
//                 className="add-form d-flex">
//                 <input type="text"
//                     className="form-control new-post-label"
//                     placeholder="Как его зовут?"/>
//                 <input type="number"
//                     className="form-control new-post-label"
//                     placeholder="З/П в $?" />

//                 <button type="submit"
//                         className="btn btn-outline-light">Добавить</button>
//             </form>
//         </div>
//     )
// }

class EmployeesAddForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: ""
        }  
    }

    //т.к. инпутов 2, то можно сделать для них один метод с помощью аттрибута name в каждом из них 
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault(); //отмена в форме
        // Можно еще и сообщения добавлять, подсветку, атрибуты minlength и тд.
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary)
        this.setState({
            name: '',
            salary: ''
        })
    }
    
    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        name='salary'
                        value={salary}
                        placeholder="З/П в $?" 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.onSubmit}>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;