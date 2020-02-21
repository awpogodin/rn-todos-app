import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Icon, CheckBox } from 'native-base';

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
      <CheckBox
        style={styles.checkbox}
        color="#2196F3"
        checked={completed}
        onPress={onToggleHandler}
      />
      <Text
        style={completed ? styles.titleDone : styles.title}
        onPress={onToggleHandler}
      >
        { title }
      </Text>
      <Button
        style={styles.btn}
        title="×"
        onPress={onDeleteHandler}
        transparent
      >
        <Icon style={styles.iconBtn} name='ios-remove-circle-outline' />
      </Button>
    </View>
  )
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    marginVertical: 5,
  },
  checkbox: {
    marginRight: 20,
  },
  title: {
    fontWeight: '100',
    fontSize: 18,
    color: '#fff',
  },
  titleDone: {
    fontWeight: '100',
    fontSize: 18,
    color: '#9E9E9E',
    textDecorationLine: 'line-through'
  },
  btn: {
    marginLeft: 'auto'
  },
  iconBtn: {
    color: '#f44336'
  },
});

export default TodosTodo;
