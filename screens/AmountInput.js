import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function AmountInput({ onAmountInput }) {
  const [amount, setAmount] = useState(""); 

  const handleAmountChange = (text) => {
    setAmount(text);
  };

  const handleNextButton = () => {
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount)) {
      onAmountInput(parsedAmount); 
    } else {
      alert("Por favor, ingrese un monto válido en gramos.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ingrese un monto en gramos"
        value={amount}
        onChangeText={handleAmountChange}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Siguiente" onPress={handleNextButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});
