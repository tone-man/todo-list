import TaskCompletionButton from "./TaskCompletionButton";
import TaskDeletionButton from "./TaskDeletionButton";
import TaskDescriptionArea from "./TaskDescriptionArea";

function TaskElement() {
    return (
        <tr>
            <td> <TaskDescriptionArea /> </td>
            <td> <TaskCompletionButton /> </td>
            <td> <TaskDeletionButton /> </td>
        </tr>
    );
}

export default TaskElement;