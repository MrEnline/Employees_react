import "./app-info.css";

const AppInfo = ({numEmployees, numRiseEmployees}) => {
    
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {numEmployees}</h2>
            <h2>Премию получат: {numRiseEmployees}</h2>
        </div>
    )
}

export default AppInfo;