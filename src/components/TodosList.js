import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import TodosTodo from "./TodosTodo";

const TodosList = ({todos, onToggle, onDelete}) => {

  return (
    <ScrollView>
      {todos.length > 0 ? (todos.map(todo => (
          <TodosTodo
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      ) : (
        <Text style={styles.noTodos}>У вас нет задач</Text>
      )}
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  noTodos: {
    marginTop: 80,
    fontWeight: '300',
    fontSize: 26,
    textAlign: 'center',
  },
});

export default TodosList;
