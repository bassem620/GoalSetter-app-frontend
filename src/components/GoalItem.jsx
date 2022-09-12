import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';
import { toast } from "react-toastify";

const GoalItem = ({ goal }) => {
    const dispatch = useDispatch();

return (
    <div className='goal'>
        <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
        <h2>{goal.text}</h2>
        <button onClick={() => {
            dispatch(deleteGoal(goal._id));
            toast.info('Goal Deleted', {hideProgressBar: true, autoClose: 3000});
        }} className='close'>
            x
        </button>
    </div>
)
}

export default GoalItem
