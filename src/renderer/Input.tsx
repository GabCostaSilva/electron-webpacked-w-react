import * as React from "react";

type props = {value: string}
const Input = ({...props}: props) => {
    console.log(props.value)
    return (
        <div>
        <input type="text" value={props.value}/>
        </div>
    );
}

export default Input;