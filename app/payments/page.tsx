'use client';
import React, { useState, useEffect } from 'react';
import { PaystackButton } from 'react-paystack';

const PaymentsPage = () => {
  const publicKey = 'pk_test_e33df513bcf2d1fd7affd081e4e4076acf94f3ed'; // Replace with your actual test key
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [plotAmount, setPlotAmount] = useState('');

  useEffect(() => {
    // Get amount from query param
    const urlParams = new URLSearchParams(window.location.search);
    const amount = urlParams.get('amount') || '';
    setPlotAmount(amount);
  }, []); // Run only once on component mount

  // Get amount from query param
  const urlParams = new URLSearchParams(window.location.search);
  const plotAmount = urlParams.get('amount') || '';

  const componentProps = {
    email,
    amount: Number(plotAmount) * 100, // Convert plot amount to kobo (100 kobo = 1 naira)
    metadata: {
      custom_fields: [
        { display_name: 'Name', variable_name: 'name', value: name },
        { display_name: 'Phone', variable_name: 'phone', value: phone },
        { display_name: 'Company', variable_name: 'company', value: company },
        { display_name: 'Address', variable_name: 'address', value: address },
      ],
    },
    publicKey,
    text: 'Pay Now',
    onSuccess: () =>
      alert('Your payment was successful! Thank you for your support.'),
    onClose: () =>
      alert("Are you sure you don't want to complete your payment?"),
  };

  const styles = {
    container: 'flex justify-center items-center min-h-screen px-4 mt-20 py-16',
    form: 'w-full max-w-lg bg-white py-12 px-10 rounded-xl shadow-lg overflow-hidden',
    input: `block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-sky-500 
            shadow-[rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset]
            transition duration-300 ease-in-out mb-4`,
    button:
      'block w-full px-4 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-700 transition duration-300 ease-in-out mt-6',
    heading: 'text-center text-3xl font-semibold mb-8',
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.heading}>Make Your Payment</h1>
        <input
          type="text"
          placeholder="Full Name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Company (Optional)"
          className={styles.input}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount (NGN)"
          className={styles.input}
          value={plotAmount}
          readOnly // Prevent user input
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className={styles.input}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Billing Address"
          className={styles.input}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <PaystackButton className={styles.button} {...componentProps} />
      </div>
    </div>
  );
};

export default PaymentsPage;
