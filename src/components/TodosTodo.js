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
    <View style={styles.todo} onPress={onToggleHandler}>
      <Text
        style={completed ? styles.titleDone : styles.title}
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
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#9E9E9E',
  },
  title: {
    fontWeight: '100',
    fontSize: 30,
  },
  titleDone: {
    fontWeight: '100',
    fontSize: 30,
    textDecorationLine: 'line-through'
  },
});

export default TodosTodo;
