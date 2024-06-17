import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../components/DoctorPortal/Button';

const PatientDashboardScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Jane Appleseed’s Dashboard</Text>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Text style={styles.profileImageText}>J</Text>
        </View>
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Jane Appleseed</Text>
          <Text style={styles.profileAge}>56 yrs</Text>
        </View>
      </View>
      <View style={styles.healthDetailsContainer}>
        <Text style={styles.sectionHeader}>Health Details</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLabel}>First Name</Text>
            <Text style={styles.tableCellValue}>Jane</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLabel}>Last Name</Text>
            <Text style={styles.tableCellValue}>Appleseed</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLabel}>Date of Birth</Text>
            <Text style={styles.tableCellValue}>June 14, 1990</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellLabel}>Blood Type</Text>
            <Text style={styles.tableCellValue}>Not set</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Upload patient’s ultrasounds"
          onPress={() => { /* handle press */ }}
        />
        <Button
          title="Explore patient’s symptoms"
          onPress={() => { /* handle press */ }}
          buttonStyle={styles.exploreButton}
          textStyle={styles.exploreButtonText}
        />
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
    alignSelf: 'flex-start',
  },
  backText: {
    fontSize: 20,
    color: '#000',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  profileImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageText: {
    fontSize: 24,
    color: '#fff',
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileAge: {
    fontSize: 14,
    color: '#666',
  },
  healthDetailsContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableCellLabel: {
    fontSize: 16,
    color: '#666',
  },
  tableCellValue: {
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  exploreButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f47b7b',
  },
  exploreButtonText: {
    color: '#f47b7b',
  },
});

export default PatientDashboardScreen;
