import { StyleSheet } from 'react-native';

const LoginScreenStyle = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title1 : { fontSize: 30, marginBottom: 30, textAlign: 'center' },
  title2: { fontSize: 20, marginBottom: 15, textAlign: 'center' },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 5,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default LoginScreenStyle;
