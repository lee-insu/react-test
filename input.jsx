import React, { memo } from 'react';

const InputBox = memo((props) => {
    const formRef = React.createRef();
    const submitRef = React.createRef();


const onSubmitEvent = (e) => {
        e.preventDefault();
       const name = submitRef.current.value;
       name && props.onHabit(name);
       submitRef.current.value='';
    }
    return (
        <form ref={formRef} onSubmit={onSubmitEvent}>
            <input ref={submitRef} type="text" name="habit" id=""/>
            <button className="add-button">add</button>
        </form>
    );
}
)
export default InputBox;


