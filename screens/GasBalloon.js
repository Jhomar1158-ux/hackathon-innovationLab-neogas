import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

const GasBalloon = ({ flujoPercentaje }) => {
    const maxCircles = 100; 

    const [gasCircles, setGasCircles] = useState(() =>
        Array.from({ length: maxCircles }, () => true)
    );

    useEffect(() => {
        // Calcula cuántos círculos deben estar llenos en función del porcentaje
        const filledCirclesCount = Math.floor((flujoPercentaje / 100) * maxCircles);

        // Actualiza el estado de gasCircles
        setGasCircles((prevCircles) => {
            return prevCircles.map((_, index) => index < filledCirclesCount);
        });
    }, [flujoPercentaje]);

    return (
        <View style={styles.container}>
            {gasCircles.map((isFilled, index) => (
                <View
                    key={index}
                    style={[
                        styles.circle,
                        isFilled ? styles.filledCircle : styles.emptyCircle,
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: "#77A3E3",
        margin: 5,
    },
    filledCircle: {
        backgroundColor: "#77A3E3", // Color de los círculos llenos
    },
    emptyCircle: {
        backgroundColor: "#EFF3F8", // Color de los círculos vacíos
    },
});

export default GasBalloon;
