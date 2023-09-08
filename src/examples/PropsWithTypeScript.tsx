import { ChangeEvent, useEffect, useState } from "react";
import './InputAndTable.scss'

interface IProps {
    name: string,
    age: number,
    address?: string, //optional: nghĩa là có hay ko đều đc
}

const PropsWithTypeScript = (props: IProps) => {
    // const person = {
    //     name: 'Minh',
    //     age: 37,
    //     address: 'Canada'
    // }
    const { name, age, address = 123 } = props;

    return (
        <div>
            Name: {name}<br />
            Age:{age}<br />
            Address: {address}
        </div>

    )
}

export default PropsWithTypeScript;