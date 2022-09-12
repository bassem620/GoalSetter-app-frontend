import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createGoal } from '../features/goals/goalSlice';

const GoalForm = () => {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const onSubmit= e => {
        e.preventDefault();
        if(!text){
            toast.error("Enter your goal text", {hideProgressBar: true, autoClose: 2000});
            return;
        }
        dispatch(createGoal({ text }));
        toast.success('Goal Added', {hideProgressBar: true, autoClose: 2000})
        setText('');
    }
    return (
        <>
        <section className='form'>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
            <label htmlFor='text'>Goal</label>
            <input
                type='text'
                name='text'
                id='text'
                value={text}
                onChange={ e => setText(e.target.value) }
            />
            </div>
            <div className='form-group'>
            <button className='btn btn-block' type='submit'>
                Add Goal
            </button>
            </div>
        </form>
        </section>
        </>
    );
}

export default GoalForm;