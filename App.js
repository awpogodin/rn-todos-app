import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from "./src/components/NavBar";
import TodosList from "./src/components/TodosList";
import AddTodo from "./src/components/AddTodo";

const initTodos = [
  {id: '1', title: 'Купить хлеб', completed: false},
  {id: '2', title: 'Купить молоко', completed: true},
  {id: '3', title: 'Купить масло', completed: false},
];

export default function App() {
  const [todos, setTodos] = React.useState([...initTodos]);

  const addTodo = (title) => {
    if (title.trim()) {
      const newTodo = {
        id: Date.now().toString(),
        title,
        completed: false
      };
      setTodos((prevState) => [
        ...prevState,
        newTodo,
      ])
    }
  };

  const toggleTodo = id => {
    setTodos((prevState) => {
      return prevState.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed}
        }
        return todo;
      })
    })
  };

  const deleteTodo = id => {
    setTodos((prevState) => {
      return prevState.filter(todo => todo.id !== id)
    })
  };

  return (
    <View style={styles.container}>
      <NavBar title="todos" />
      <AddTodo onSubmit={addTodo}/>
      <TodosList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
