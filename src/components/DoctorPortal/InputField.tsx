import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

type InputFieldProps = {
  placeholder: string;
  secureTextEntry?: boolean;
  editable?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  secureTextEntry = false,
  editable = true,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        editable={editable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DADADA',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});

export default InputField;
