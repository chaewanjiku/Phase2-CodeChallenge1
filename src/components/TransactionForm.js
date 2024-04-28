import React, { useState } from 'react';

// TransactionForm component for adding new transactions
const TransactionForm = ({ onAddTransaction }) => {
  // State hooks for form fields
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new transaction object with random ID
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      date,
      description,
      category,
      amount
    };
    // Call onAddTransaction function with the new transaction
    onAddTransaction(newTransaction);
    // Reset form fields
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit} style={{ margin: "5px auto"}}>
      {/* Date input */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{
            margin: "10px",
            width: "250px",
            height: "30px"
        }}
      />
      {/* Description input */}
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
            margin: "10px",
            width: "250px",
            height: "30px"
        }}
      />
      {/* Category input */}
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
            margin: "10px",
            width: "250px",
            height: "30px"
        }}
      />
      {/* Amount input */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{
            margin: "10px",
            width: "250px",
            height: "30px"
        }}
      />
      {/* Submit button */}
      <div>
        <button style={{margin: "10px 80px", display: "block",    width: "150px",      height: "20px"}}type="submit">Add Transaction</button>
      </div>
    </form>
  );
};

export default TransactionForm;