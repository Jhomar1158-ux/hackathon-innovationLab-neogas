import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { useEffect, useState } from "react";

import { db, ref, onValue } from "../firebase";
import GasBalloon from "./GasBalloon";

const Weather = () => {
  const [flujoVal, setFlujo] = useState(10);

  const flujoValPercentaje = (((10000-flujoVal)/10000)*100).toFixed(2) || 80;

  useEffect(() => {  
    const data = ref(db);
    onValue(data, (snapshot) => {
      setFlujo(snapshot.val().flujoVal.toFixed(2))
    });
    console.log(data);
  }, [db]);

  return (
    <ImageBackground style={styles.container}>
      <View style={styles.tempWrapper}>
        <Text style={styles.mainTitle}>Valvula Casa</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/balonGas1.png')} style={styles.image} />
        <View style={styles.circlesContainer}>
          <GasBalloon flujoPercentaje={flujoValPercentaje}/>
        </View>
        <Text style={styles.imageText}>{flujoValPercentaje}%</Text>
      </View>
      <View style={styles.data}>
        <View style={styles.spacer}></View>
        <View style={styles.dataWrapper}>
          <View style={styles.flujo}>
            <Text style={styles.title2}>Gas utilizado: <Text style={styles.highlight}>{flujoVal}g</Text>/10kg</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Weather;

const styles = StyleSheet.create({
  highlight:{
    fontSize: 30, 
    fontWeight: "bold", 
    color: "#394D5C", 
  },
  circlesContainer:{
    width: 200,
    height: 100,
    zIndex:1,
    position: "absolute",
    top: 44
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 500, 
    height: 500,
  },
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
  },
  tempWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 150,
    fontWeight: "100",
    textAlign: "right",
    color: "white",
    paddingRight: 35,
  },
  data: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  spacer: {
    height: "30%",
  },
  dataWrapper: {
    marginTop:40,
    paddingBottom:8,
    backgroundColor: "#CFDFE8",
    flexDirection: "row",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
  },
  flujo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dataText: {
    fontSize: 20,
    fontWeight: "200",
    color: "black",
    textAlign: "center",
    fontFamily: "Roboto",
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto",
  },
  title2: {
    fontSize: 20,
    fontWeight: "800",
    color: "#394D5C",
    textAlign: "center",
    fontFamily: "Roboto",
  },
  imageText: {
    position: 'absolute',
    top: 100,
    left: 0, 
    right: 0, 
    fontSize: 52,
    fontWeight: 'bold',
    color: '#394D5C',
    textAlign: 'center', 
    zIndex: 5,
  },
  mainTitle: {
    fontSize: 25, 
    fontWeight: 'bold',
    color: '#394D5C',
    textAlign: 'center',
    marginBottom:90,
  },
});
