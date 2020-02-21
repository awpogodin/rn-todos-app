import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import { Text } from 'native-base';

const NavBar = ({title = 'Navbar'}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>{ title }</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  navbar: {
    height: '25%',
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontWeight: '100',
    fontSize: 50,
    color: '#fff',
    fontFamily: 'sans-serif-thin'
  },
});

export default NavBar;
