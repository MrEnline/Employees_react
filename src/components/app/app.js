

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


function App() {
    const data = [
        {name: 'Vasya', salary: 800, increase: false},
        {name: 'Petya', salary: 1800, increase: true},
        {name: 'Kolya', salary: 2500, increase: false}
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