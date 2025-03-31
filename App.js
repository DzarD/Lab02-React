import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { TransactionContext } from './context/TransactionContext';

export default function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </TransactionContext.Provider>
  );
};
