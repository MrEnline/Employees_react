import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: 0
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name, salary} = this.state;
        return (
            //value={name} и value={salary} - получают данные из состояния и делают инпуты управляемыми элементами
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        name="name"
                        placeholder="Как его зовут?"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        name="salary"
                        placeholder="З/П в $?"
                        value={salary}
                        onChange={this.onValueChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;