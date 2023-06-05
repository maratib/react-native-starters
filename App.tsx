import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Alert, Button, Dimensions, Image, SafeAreaView, StyleSheet, StatusBar, Text, TouchableHighlight, View, Platform } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text Clicked");
  // console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="light" backgroundColor="#000" />
      <Text numberOfLines={1} onPress={handlePress} >Open up App.tsx to start working on your app 123! Allow me to create a really long text</Text>

      <TouchableHighlight onPress={() => console.log("Image pressed")}>
        <Image fadeDuration={1000}
          style={{ width: 200, height: 300, backgroundColor: "dodgerblue" }}
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300
          }}
        />
      </TouchableHighlight>

      <Button title="Alert Test" onPress={() =>
        Alert.alert("Caution", "Think before Click",
          [
            { text: "Yes", onPress: () => console.log("Yes is pressed") },
            { text: "No", onPress: () => console.log("No is pressed") }
          ])} />

      <Button title="Prompt Test" onPress={() =>
        Alert.prompt("Prompt", "Think before Click", text => console.log(text))
      }
      />



    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // justifyContent: 'center',
  },
});
