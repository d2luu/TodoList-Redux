import {connect} from 'react-redux';
import {addNewTask} from '../actions';
import AddComponent from '../components/AddComponent';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (inputTaskName) => {
      dispatch(addNewTask(inputTaskName));
    },
  };
};

const AddContainer = connect(mapStateToProps, mapDispatchToProps)(AddComponent);
export default AddContainer;
