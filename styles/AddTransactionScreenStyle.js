import { StyleSheet } from 'react-native';

const AddTransactionScreenStyle = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'flex-start' },
  title: { fontSize: 20, marginBottom: 10, textAlign: 'center' },
  label: { fontSize: 16, marginVertical: 5 },
  dateButton: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    justifyContent: 'center',
    borderColor: '#ccc',
    borderRadius: 4,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  pickerContainer: {
    borderWidth: 1,
    marginBottom: 10,
    borderColor: '#ccc',
    borderRadius: 4,
    height: 50,
    justifyContent: 'center',
  },
  picker: { width: '100%', height: 50 },
});

export default AddTransactionScreenStyle;
