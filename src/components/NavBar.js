import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NavBar = ({title = 'Navbar'}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>{ title }</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  navbar: {
    height: 150,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontWeight: '100',
    fontSize: 50,
    color: '#fff',
  },
});

export default NavBar;
