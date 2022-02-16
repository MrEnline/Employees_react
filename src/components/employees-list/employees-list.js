import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';



const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item; //остаточный принцип. Сначала в item ищется id и записывается в переменную id
                                        // затем все остальные значения переменных записываются в itemProps

        return (
            //<EmployeesListItem name = {item.name} salary={item.salary}/>
            //<EmployeesListItem {...item}/>  //спред-оператор идентичен строке выше
            <EmployeesListItem key={id}
                              {...itemProps}
                              onDelete={() => onDelete(id)}
                              onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
                              />
        )
    })

    //2-й способо задания id, если с сервера такие данные не приходят вообще
    //i - индекс элемента и он будет id
    // const elements = data.map((item, i) => {
    //     const {id, ...itemProps} = item; 
    //     return (
    //         <EmployeesListItem key={i}  {...itemProps}/>
    //     )
    // })
          
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;