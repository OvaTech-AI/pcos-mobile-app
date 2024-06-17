import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoadingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>We’re running our model, please wait...</Text>
      <View style={styles.progressBar}>
        <View style={styles.progress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  message: {
    fontSize: 18,
    color: '#4a4a4a',
    marginBottom: 20,
    textAlign: 'center',
  },
  progressBar: {
    width: '50%',
    height: 20,
    backgroundColor: '#f0e1e1',
    borderRadius: 20,
    overflow: 'hidden',
  },
  progress: {
    width: '50%',
    height: '100%',
    backgroundColor: '#d3a5a5',
    borderRadius: 20,
  },
});

export default LoadingPage;
