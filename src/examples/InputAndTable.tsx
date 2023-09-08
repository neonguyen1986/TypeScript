import { ChangeEvent, useEffect, useState } from "react";
import './InputAndTable.scss'

export interface IMyObject {
    name: string;
    age: number | '';
    city: string;
};

const InputAndTable = () => {
    const [name, setName] = useState<string>("John Doe");
    const [age, setAge] = useState<number | ''>(30);
    const [city, setCity] = useState<string[]>(["Toronto", "Ottawa", "Mississauga"]);
    const [selectedCity, setSelectedCity] = useState<string>("");

    const [userArr, setUserArr] = useState<IMyObject[]>([])

    const handleChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = parseInt(e.target.value, 10)
        const parsedAge = Number.isNaN(inputValue) ? '' : inputValue;
        setAge(parsedAge)
    }
    const handleClickSubmit = () => {
        let tempArr: IMyObject[] = [...userArr]
        tempArr.push({
            name: name,
            age: age,
            city: selectedCity,
        })
        setUserArr(tempArr)
    }

    // console.log("=======check state:", selectedCity)
    return (
        <div className="input-select-table-container">
            <div>
                Input Option and Table with TypeScript
            </div>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Age:</label>
                <input type="text"
                    value={age === '' ? '' : age}
                    onChange={handleChangeAge} />
            </div>
            <div>
                <label>City:</label>
                <select value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                >
                    <option value=''>Choose City</option>
                    {city?.length > 0 &&
                        city.map((item, index) => {
                            return (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            <button onClick={handleClickSubmit}>
                Submit
            </button>
            <div className="ist-table">
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                        {userArr?.length > 0 &&
                            userArr.map((item, index) => {
                                return (
                                    <tr key={index}>

                                        <td >{item.name}</td>
                                        <td >{item.age}</td>
                                        <td >{item.city}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default InputAndTable;