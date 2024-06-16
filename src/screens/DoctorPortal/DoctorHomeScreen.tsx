import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../../components/DoctorPortal/InputField';
import Button from '../../components/DoctorPortal/Button';

const DoctorHomeScreen: React.FC = () => {
  const handleContinue = () => {
    // Handle continue button press
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login with your healthcare provider credentials</Text>
      <InputField placeholder="Username" />
      <InputField placeholder="OneHealth ID" editable={false} />
      <Text style={styles.infoText}>Must be a valid OneHealth ID in Canada.</Text>
      <Button title="Continue →" onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    // fontFamily: 'Inter-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  infoText: {
    // fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#A0A0A0',
    marginBottom: 20,
  },
});

export default DoctorHomeScreen;
