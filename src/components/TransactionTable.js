import React from 'react';
import DataTable from 'react-data-table-component'; // Importing DataTable component

// TransactionTable component to display transactions in a table format
const TransactionTable = ({ transactions }) => {
    // Sort transactions by description
    const sortedTransactions = [...transactions].sort((a, b) => a.description.localeCompare(b.description));

    // Define columns for the table
    const columns = [
        {
            name: 'Date',
            selector: row => row.date,
            sortable: true, // Enable sorting for this column
        },
        {
            name: 'Description',
            selector: row => row.description,
            sortable: true, // Enable sorting for this column
        },
        {
            name: 'Category',
            selector: row => row.category,
        },
        {
            name: 'Amount',
            selector: row => row.amount,
            sortable: true, // Enable sorting for this column
        },
    ];

    // Render the DataTable component with specified columns and data
    return (
        <DataTable
            columns={columns}
            data={sortedTransactions}
            pagination // Enable pagination for the table
        />
    );
};

export default TransactionTable;