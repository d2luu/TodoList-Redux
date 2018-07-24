import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {addNewTask} from '../actions';

export default class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskName: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          keyboardType='default'
          placeholder='Enter task name'
          autoCapitalize={'none'}
          onChangeText={
            (text) => {
              this.setState({newTaskName: text});
            }
          }
        />
        <TouchableOpacity
          style={styles.button}
          underlayColor={'blue'}
          onPress={event => {
            if (!this.state.newTaskName.trim()) {
              return;
            }
            // TODO: use redux container here
            this.props.onClickAdd(this.state.newTaskName);
          }}
        >
          <Text style={{fontSize: 24, color: 'blue'}}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 64,
  },
  textInput: {
    height: 40,
    width: 200,
    margin: 10,
    padding: 10,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
  },
  button: {
    marginRight: 10,
  },
});