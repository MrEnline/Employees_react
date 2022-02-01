

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


function App() {
    //для того, чтобы реакт перерисовывал только те компоненты, которые реально изменелись,
    //добавляют параметр key или id(они будут приходить с сервера)
    //реакт будет сравнивать текущий элемент с тем, что был раньше и если он изменился и расположен
    //не в конце, а в середине или в начале, то он перерисует только то что изменилось благодаря id
    //данный режим в реакте называется РЕЖИМ СОГЛАСОВАНИЯ
    const data = [
        {name: 'Vasya', salary: 800, increase: false, id: 1},
        {name: 'Petya', salary: 1800, increase: true, id: 2},
        {name: 'Kolya', salary: 2500, increase: false, id: 3}
    ];

    return (
        <div className="app">
            <AppInfo/>
            
            <div className="search-panel">
                <AppFilter/>
                <SearchPanel/>
            </div>
            <EmployeesList data = {data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;