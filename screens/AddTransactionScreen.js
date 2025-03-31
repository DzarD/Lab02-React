import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { TransactionContext } from '../context/TransactionContext';
import styles from '../styles/AddTransactionScreenStyle';

const AddTransactionScreen = ({ navigation }) => {
  const { addTransaction } = useContext(TransactionContext);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
    
  //crossplatform supp
  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };
    //
  const handleAmountBlur = () => {
    if (amount) {
      const numAmount = parseFloat(amount);
      if (!isNaN(numAmount)) {
        setAmount(numAmount.toFixed(2));
      }
    }
  };
  //handle add transaction
  const handleAdd = () => {
    if (!date || !amount || !description || !location || !type || !category) {
      alert('Please fill ALL fields');
      return;
    }
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) {
      alert('Invalid amount');
      return;
    }
    const newTransaction = {
      date: date.toLocaleDateString(),
      amount: numAmount.toFixed(2),
      description,
      location,
      type,
      category,
    };
    addTransaction(newTransaction);
    navigation.goBack();
  };
// form
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Transaction</Text>

      <Text style={styles.label}>Date</Text>
      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.dateButton}
      >
        <Text>{date.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <Text style={styles.label}>Amount</Text>
      <TextInput
        placeholder="69.69"
        value={amount}
        onChangeText={setAmount}
        style={styles.input}
        keyboardType="numeric"
        onBlur={handleAmountBlur}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <Text style={styles.label}>Location</Text>
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />

      <Text style={styles.label}>Type</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={type}
          style={styles.picker}
          onValueChange={(itemValue) => setType(itemValue)}
        >
          <Picker.Item label="-- Select Type --" value="" />
          <Picker.Item label="Debit" value="Debit" />
          <Picker.Item label="Credit" value="Credit" />
          <Picker.Item label="Refund" value="Refund" />
        </Picker>
      </View>

      <Text style={styles.label}>Category</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={category}
          style={styles.picker}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label="-- Select Category --" value="" />
          <Picker.Item label="Shopping" value="Shopping" />
          <Picker.Item label="Travel" value="Travel" />
          <Picker.Item label="Utility" value="Utility" />
          <Picker.Item label="Groceries" value="Groceries" />
          <Picker.Item label="Entertainment" value="Entertainment" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      <Button title="ADD TRANSACTION" onPress={handleAdd} />
    </View>
  );
};

export default AddTransactionScreen;
