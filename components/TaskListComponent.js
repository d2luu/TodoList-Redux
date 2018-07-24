import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import TaskItemComponent from './TaskItemComponent';
import TaskItemContainer from '../containers/TaskItemContainer';

export default class TaskListComponent extends Component {

  render() {
    return (
      <FlatList
        data={this.props.tasks}
        renderItem={({item, index}) => {
          return (
            <TaskItemContainer
              {...item}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      >
        <Text>Component</Text>
      </FlatList>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});