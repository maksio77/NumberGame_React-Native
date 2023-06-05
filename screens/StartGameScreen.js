import { TextInput, StyleSheet, View, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";

import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

export default function StartGameScreen({onPickNumber}) {
      const [enteredNumber, setEnteredNumber] = useState('');

      const {width, height} = useWindowDimensions();

      function numberInputHandler (enteredText) {
            setEnteredNumber(enteredText);
      };

      function resetInputHandler () {
            setEnteredNumber('');
      };

      function confirmInputHandler () {
            const chosenNumber = parseInt(enteredNumber);

            if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
                  Alert.alert(
                        'Invalid number', 
                        'Number has to be a number between 1 and 99.', 
                        [{ text : 'Okey', style : 'destructive', onPress: resetInputHandler}]
                  );
                  return;
            }

            onPickNumber(chosenNumber);
      };

      const marginTopDistance = height < 380 ? 30 : 100;

      return (
            <ScrollView style={styles.screen}>
                  <KeyboardAvoidingView style={styles.screen} behavior="position">
                        <Card>
                              <Title>Guess My Number</Title>
                              <View style={[styles.inputContainer, {marginTop: marginTopDistance}]}>
                                    <InstructionText>Enter a Number</InstructionText>
                                    <TextInput 
                                          style={styles.numberInput} 
                                          maxLength={2} 
                                          keyboardType="number-pad"
                                          autoCapitalize="none"
                                          autoCorrect={false}
                                          value={enteredNumber}
                                          onChangeText={numberInputHandler}
                                    />
                                    <View style={styles.buttonsContainer}>
                                          <View style={styles.buttonContainer}>
                                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                                          </View>
                                          <View style={styles.buttonContainer}>
                                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                                          </View>
                                    </View>
                              </View>
                        </Card>
                  </KeyboardAvoidingView>
            </ScrollView>
      )
}

//const deviceHeight =  Dimensions.get('window').height;

const styles = StyleSheet.create({
      screen: {
            flex: 1,
      },
      inputContainer: {
            padding: 16,
            //marginTop: deviceHeight < 380 ? 30 : 100,
            backgroundColor: Colors.primary800,
            marginHorizontal: 24,
            borderRadius: 8,
            elevation: 4,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.25,
            justifyContent: 'center',
            alignItems: 'center',
      },
      numberInput: {
            height: 50,
            width: 50,
            fontSize: 32,
            borderBottomColor: Colors.accent500,
            borderBottomWidth: 2,
            color: Colors.accent500,
            marginVertical: 8,
            fontWeight: 'bold',
            textAlign: 'center',
      },
      buttonsContainer: {
            flexDirection: 'row',
      },
      buttonContainer : {
            flex: 1,
      },
});