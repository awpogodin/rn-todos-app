import React from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

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
      />
      <Button
        title='Добавить'
        onPress={onSubmitHandler}
      />
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
    width: '70%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#212121'
  },
});

export default AddTodo;
