// ./assets/Components/Input.js
import { TextInput, StyleSheet } from 'react-native';

type Props = {
  placeholder?: string,
  value?: string,
  onChangeText?: (text: string) => void
};

export default function InputCustom({ placeholder, value, onChangeText }: Props) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="gray"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
