import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/DoctorPortal/Button';
import HomeIcon from '../../components/DoctorPortal/HomeIcon';
import PersonIcon from '../../components/DoctorPortal/PersonIcon';

const UltrasoundPrediction = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" size={24} color="black" />
        <Text style={styles.backText}>Edit response</Text>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={styles.predictionText}>
          Our model suggests there is a high chance that your patient may have PCOS.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Report to patient"
            onPress={() => { /* handle press */ }}
            buttonStyle={styles.reportButton}
            textStyle={styles.reportButtonText}
          />
          <Button
            title="Save results"
            onPress={() => { /* handle press */ }}
            buttonStyle={styles.saveButton}
            textStyle={styles.saveButtonText}
          />
        </View>
      </View>
      <View style={styles.bottomNav}>
        <HomeIcon />
        <PersonIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backText: {
    marginLeft: 5,
    color: '#ccc',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  predictionText: {
    fontSize: 18,
    color: '#4a4a4a',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  reportButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f47b7b',
  },
  reportButtonText: {
    color: '#f47b7b',
  },
  saveButton: {
    backgroundColor: '#f47b7b',
    marginTop: 25,
  },
  saveButtonText: {
    color: '#fff',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default UltrasoundPrediction;
