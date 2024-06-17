import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeIcon from '../../components/DoctorPortal/HomeIcon';
import PersonIcon from '../../components/DoctorPortal/PersonIcon';

const UltrasoundUploadedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Jane’s ultrasound</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.subHeader}>Image preview</Text>
        <Image
          source={{ uri: 'path/to/ultrasound/image.jpg' }} // Replace with actual image path later
          style={styles.imagePreview}
        />
        <Text style={styles.subHeader}>Uploaded files</Text>
        <View style={styles.fileContainer}>
          <Icon name="document-outline" size={24} color="black" />
          <Text style={styles.fileName}>Example-Ultrasound.JPG</Text>
          <TouchableOpacity style={styles.removeButton}>
            <Icon name="close-outline" size={20} color="red" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
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
    paddingTop: 100,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#4a4a4a',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeader: {
    fontSize: 16,
    color: '#999',
    marginVertical: 10,
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  fileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  fileName: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  removeButton: {
    padding: 5,
  },
  continueButton: {
    backgroundColor: '#453A87',
    width: 250,
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 16,
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

export default UltrasoundUploadedScreen;
