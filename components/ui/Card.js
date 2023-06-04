import { StyleSheet, View, Dimensions } from "react-native";


export default function Card({children}) {
      return(
            <View style={styles.rootConteiner}>{children}</View>
      );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
      rootConteiner: {
            flex: 1,
            marginTop: deviceWidth < 380 ? 18 : 36,
            alignItems: 'center',
      },
});