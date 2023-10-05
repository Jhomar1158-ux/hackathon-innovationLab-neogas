import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function AmountInput({ onAmountInput }) {
  const [amount, setAmount] = useState(""); // Estado para el monto ingresado

  // Función para manejar el cambio en el input de monto
  const handleAmountChange = (text) => {
    setAmount(text);
  };

  // Función para manejar el botón "Siguiente"
  const handleNextButton = () => {
    // Validar el monto ingresado si es necesario
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount)) {
      onAmountInput(parsedAmount); // Pasar el monto ingresado al componente principal
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
