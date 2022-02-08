import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


//function App() {
    //для того, чтобы реакт перерисовывал только те компоненты, которые реально изменелись,
    //добавляют параметр key или id(они будут приходить с сервера)
    //реакт будет сравнивать текущий элемент с тем, что был раньше и если он изменился и расположен
    //не в конце, а в середине или в начале, то он перерисует только то что изменилось благодаря id
    //данный режим в реакте называется РЕЖИМ СОГЛАСОВАНИЯ
//     const data = [
//         {name: 'Vasya', salary: 800, increase: false, id: 1},
//         {name: 'Petya', salary: 1800, increase: true, id: 2},
//         {name: 'Kolya', salary: 2500, increase: false, id: 3}
//     ];

//     return (
//         <div className="app">
//             <AppInfo/>
            
//             <div className="search-panel">
//                 <AppFilter/>
//                 <SearchPanel/>
//             </div>
//             <EmployeesList data = {data}
//                            onDelete={id => console.log(id)}/>
//             <EmployeesAddForm/>
//         </div>
//     );
// }

//реализуем то что выше, но уже на классах
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                    {name: 'Vasya', salary: 800, increase: false, id: 1},
                    {name: 'Petya', salary: 1800, increase: true, id: 2},
                    {name: 'Kolya', salary: 2500, increase: false, id: 3}
                ]
        }
        this.maxId = 4;
    }

    addItem = (name, salary) => {
        const employee = {
            name: name,
            salary: salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...this.state.data, employee];
            return {
                data: newArr
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            //сложный и длинный вариант
            // const index = data.findIndex(elem => elem.id === id); //получим индекс
            // const beforeArr = data.slice(0, index);
            // const afterArr = data.slice(index + 1);
            // const newArr = [...beforeArr, ...afterArr];
            // return {
            //     data: newArr
            // }
            
            //простой и короткий вариант
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
           return (
                <div className="app">
                    <AppInfo/>
                    
                    <div className="search-panel">
                        <AppFilter/>
                        <SearchPanel/>
                    </div>
                    <EmployeesList data = {this.state.data}
                                   onDelete={this.deleteItem}/>
                    <EmployeesAddForm onAdd={this.addItem}/>
                </div>
        ); 
    }
}

export default App;