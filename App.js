import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Weather from "./screens/Weather";
import Navbar from "./screens/ Navbar";
import BottomBar from "./screens/BottomBar";


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.spacer}></View>
      <Navbar/> 
      <Weather/>
      <BottomBar
        onLeftPress={() => {
          console.log("press NOTIFICACIONES");

          }}
          onCenterPress={() => {
              console.log("press COMPRAR GAS");
              
          }}
          onRightPress={() => {
              console.log("press HISTORIAL");

            }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacer: {
    height: "3.5%",
  },
});
