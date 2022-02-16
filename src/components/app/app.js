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
                    {name: 'Vasya', salary: 800, increase: false, rise: true, id: 1},
                    {name: 'Petya', salary: 1800, increase: true, rise: false, id: 2},
                    {name: 'Kolya', salary: 2500, increase: false, rise: true, id: 3}
                ]
        }
        this.maxId = 4;
    }

    //добавление в data из state нового сотрудника
    addItem = (name, salary) => {
        const employee = {
            name: name,
            salary: salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newData = [...this.state.data, employee];//оператор расширения в данном случае
            return {
                data: newData
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

    // onToggleIncrease = (id) => {
    //     //первый вариант
    //     // this.setState(({data}) => {
    //     //     const index = data.findIndex(elem => elem.id === id);//найдем index по id
    //     //     const old = data[index]; //получим старый найденный элемент по индексу
    //     //     const newItem = {...old, increase: !old.increase};  //создадим копию старого элемента с заменой значения под ключом increase
    //     //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)] //создадим новый массив, аналогичный data
    //     //     return {
    //     //         data: newArr
    //     //     }
    //     // })

    //     //второй вариант
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, increase: !item.increase} //вернем новый объект на основе старого из data с заменой значения под ключом increase
    //             }
    //             return item;
    //         })
    //     }))
    // }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, rise: !item.rise} //вернем новый объект на основе старого из data с заменой значения под ключом increase
    //             }
    //             return item;
    //         })
    //     }))
    // }

    //реализуем один общий метод для методов onToggleIncrease и onToggleRise
    //prop - изменяемая часть(в нашем случае это либо rise, либо increase)
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]} //вернем новый объект на основе старого из data с заменой значения под ключом increase
                }
                return item;
            })
        }))
    }

    render() {
        const employees =  this.state.data.length;
        const increased =  this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
                
                <div className="search-panel">
                    <AppFilter/>
                    <SearchPanel/>
                </div>

                <EmployeesList data = {this.state.data}
                                onDelete={this.deleteItem}
                                onToggleProp={this.onToggleProp}/>

                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        ); 
    }
}

export default App;