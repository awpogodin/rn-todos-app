import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Text, Button, Icon } from 'native-base';

const AddTodo = ({ onSubmit }) => {
  const [inputValue, setInputValue] = React.useState('');

  const onSubmitHandler = () => {
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={v => setInputValue(v)}
        placeholder="Введите задачу"
        placeholderTextColor="#9E9E9E"
      />
      <Button
        large
        title='+'
        onPress={onSubmitHandler}
        transparent
      >
        <Icon style={styles.iconBtn} name='ios-add-circle-outline' />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 2,
    borderStyle: 'solid',
    paddingVertical: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    color: '#fff',
  },
  iconBtn: {
    color: '#fff'
  },
});

export default AddTodo;
