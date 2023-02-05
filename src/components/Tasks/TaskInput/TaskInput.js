import React, {useState} from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
    const [inputText, setInputText] = useState("");
    const [isInputValid, setIsInputValid] = useState(true);

    const taskInputChangeHandler = (event) => {
        if(event.target.value.trim().length > 0) {
            setIsInputValid(true)
        }
        setInputText(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (inputText.trim().length === 0) {
            setIsInputValid(false)
            return
        }
        props.onAddTask(inputText);
        setInputText('')
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label
                style={{color: !isInputValid ? 'red' : 'black' }}
                >Задачи</label>
                <input style={{borderColor: !isInputValid ? 'red' : 'black'}} value={inputText} type="text" onChange={taskInputChangeHandler}/>
            </div>
            <Button type="submit">Добавить Задачу</Button>
        </form>
    );
};

export default TaskInput;