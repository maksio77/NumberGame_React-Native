import { View, Image, StyleSheet, Text, useWindowDimensions, ScrollView } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
      const {width, height} = useWindowDimensions();

      let imageSize = 300;
      
      if(width < 380) {
            imageSize = 150;
      }

      if(height < 400) {
            imageSize = 80;
      }

      const imageStyle = {
            width: imageSize,
            height: imageSize,
            borderRadius: imageSize / 2,
      }

      return (
            <ScrollView style={styles.screen}>
                  <View style={styles.rootConteiner}>
                        <Title>GAME OVER!</Title>
                        <View style={styles.imageContainer}>
                              <Image style={[styles.image, imageStyle]} source={require('../assets/images/success.png')}/>
                        </View>
                        <Text style={styles.summaryText}>
                              Your phone needed <Text style={styles.highLight}>{roundsNumber}</Text> rounds
                              to guess the number <Text style={styles.highLight}>{userNumber}</Text>.
                        </Text>
                        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
                  </View>
            </ScrollView>
      )
}

// const deviceWidth = Dimensions.get('window').width;
// const deviceHeigth = Dimensions.get('window').height;

const styles = StyleSheet.create({
      screen: {
            flex: 1,
      },
      rootConteiner: {
            flex: 1,
            padding: 24,
            justifyContent: 'center',
            alignItems: 'center',
      },
      imageContainer: {
            // width: deviceWidth || deviceHeigth < 380 ? 150 : 300,
            // height: deviceWidth || deviceHeigth < 380 ? 150 : 300,
            // borderRadius: deviceWidth || deviceHeigth < 380 ? 75 : 150,
            //borderWidth: 3,
            borderColor: Colors.primary800,
            overflow: 'hidden',
            margin: 36,
      },
      image: {
            width: '100%',
            height: '100%',
      },
      summaryText: {
            fontFamily: 'open-sans',
            fontSize: 24,
            textAlign: 'center',
            marginBottom: 15,
      },
      highLight: {
            fontFamily: 'open-sans-bold',
            color: Colors.primary500,
      }
});