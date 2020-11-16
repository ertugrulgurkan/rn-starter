import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  //console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>
        Hi there!
      </Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate('Exersize')}
        title="Go to Exersise Demo"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to ImageScreen Demo"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Exersize Demo"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Exersize Demo"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Screen Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
