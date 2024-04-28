import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';
import SearchBar from './components/SearchBar';

// Default transactions data
const defaultTransactions = [
  {
    date: '2019-12-01',
    description: 'Paycheck from Bobs Burgers',
    category: 'Income',
    amount: 1000.00,
},
{
    date: '2019-12-01',
    description: 'South by Southwest Quinoa Bowl at Fresh & Co',
    category: 'Food',
    amount: -10.55,
},
{
    date: '2019-12-02',
    description: 'South by Southwest Quinoa Bowl at Fresh & Co',
    category: 'Food',
    amount: -10.55,
},
{
    date: '2019-12-04',
    description: 'Sunglasses ,Urban Outfitters',
    category: 'Fashion',
    amount: -24.99,
},
{
    date: '2019-12-06',
    description: 'Venmo,AlicePays you for Burrito',
    category: 'Food',
    amount: 8.75,
},
{
    date: '2019-12-06',
    description: 'Chipotle',
    category: 'Food',
    amount: -17.59,
}
 
];

// App component definition
function App() {
  // State for transactions and filtered transactions
  const [transactions, setTransactions] = useState(defaultTransactions);
  const [filteredTransactions, setFilteredTransactions] = useState(defaultTransactions);

    // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions(prevFilteredTransactions => [...prevFilteredTransactions, newTransaction]);
  };

  // Function to handle search
  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  // App component JSX
  return (
    <div>
      <div style={{ backgroundColor: 'rgb(116,31,196)', padding: '10px', marginTop: '10px' }}>
        <h1 style={{ textAlign: 'center' }}>The Royal Bank of Flairon</h1>
      </div>
      <div style={{ marginBottom: '20px', marginTop: '10px' }}>
        <SearchBar onSearch={handleSearch} />
      </div>
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;