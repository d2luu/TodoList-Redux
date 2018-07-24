import {connect} from 'react-redux';
import {toggleOneTask} from '../actions';
import TaskItemComponent from '../components/TaskItemComponent';

const TaskItemContainer = connect()(TaskItemComponent);
export default TaskItemContainer;
