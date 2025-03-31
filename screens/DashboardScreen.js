import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { TransactionContext } from '../context/TransactionContext';
import styles from '../styles/DashboardScreenStyle';

const DashboardScreen = ({ navigation }) => {
  const { transactions } = useContext(TransactionContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Logout" onPress={() => navigation.replace('Login')} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Button title="Add Transaction" onPress={() => navigation.navigate('AddTransaction')} />
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TransactionDetails', { transaction: item })}>
            <View style={styles.item}>
              <Text>{item.description} - {item.amount}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DashboardScreen;
