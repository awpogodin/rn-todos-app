import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const TodosTodo = ({todo, onToggle, onDelete}) => {
  const {title, completed, id} = todo;

  const onToggleHandler = () => {
    onToggle(id);
  };

  const onDeleteHandler = () => {
    onDelete(id);
  };

  return (
    <View style={styles.todo}>
      <Text
        style={completed ? styles.titleDone : styles.title}
        onPress={onToggleHandler}
      >
        { title }
      </Text>
      <Button
        title="×"
        color="#f44336"
        onPress={onDeleteHandler}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    margin: 5,
    // backgroundColor: '#212121',
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: '#fff',
    // borderRadius: 15,
  },
  title: {
    fontWeight: '100',
    fontSize: 30,
    color: '#fff',
  },
  titleDone: {
    fontWeight: '100',
    fontSize: 30,
    color: '#fff',
    textDecorationLine: 'line-through'
  },
});

export default TodosTodo;
