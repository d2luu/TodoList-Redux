import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {toggleOneTask} from '../actions';

export default class TaskItemComponent extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={e => {
            // TODO: use container here
          }}
        />
        <Text style={{
          margin: 20,
          color: this.props.completed === true ? 'darkgreen' : 'black',
        }}>
          {this.props.taskName}
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});