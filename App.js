import React, {useEffect} from 'react';
import { AsyncStorage, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import NavBar from "./src/components/NavBar";
import TodosList from "./src/components/TodosList";
import AddTodo from "./src/components/AddTodo";

const STORAGE = 'Todos';

// const initTodos = [
//   {id: '1', title: 'Купить хлеб', completed: false},
//   {id: '2', title: 'Купить молоко', completed: true},
//   {id: '3', title: 'Купить масло', completed: false},
// ];

export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    const loadAsync = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      await _retrieveData();
      setIsReady(true);
    };

    loadAsync();
  }, []);

  useEffect(() => {
    const asyncStoreData = async () => {
      await _storeData();
    };

    asyncStoreData();
  }, [todos]);

  const _storeData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE, JSON.stringify(todos));
    } catch (error) {
      // Error saving data
    }
  };

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE);
      if (value !== null) {
        setTodos(JSON.parse(value));
      }
    } catch (error) {
      // Error retrieving data
    }
  };

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
      {isReady ? (
        <>
          <NavBar title="todos" />
          <AddTodo onSubmit={addTodo}/>
          <TodosList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          />
        </>
      ) : (
        <AppLoading />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
