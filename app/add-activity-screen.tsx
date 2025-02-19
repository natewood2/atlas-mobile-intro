import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function AddActivityScreen(): React.ReactElement {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Activity Screen</Text>
        <Link href={"/"} style={styles.button}>
            <Text style={styles.buttonText}>Go back</Text>
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#A9A9A9',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'white',
    },
    button: {
      backgroundColor: '#012345',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
});