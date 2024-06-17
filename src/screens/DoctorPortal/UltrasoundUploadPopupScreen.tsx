import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeIcon from '../../components/DoctorPortal/HomeIcon';
import PersonIcon from '../../components/DoctorPortal/PersonIcon';

const UltrasoundUploadPopupScreen = ({ navigation }) => {
  const handleUpload = () => {
    // Handle the upload logic here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Jane Appleseed’s Dashboard</Text>
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <Icon name="cloud-upload-outline" size={50} color="#000" />
        </TouchableOpacity>
        <Text style={styles.uploadText}>Tap to upload from Camera Roll</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 20,
  },
  uploadContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 400,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
  },
  uploadButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 20,
  },
  uploadText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
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

export default UltrasoundUploadPopupScreen;
