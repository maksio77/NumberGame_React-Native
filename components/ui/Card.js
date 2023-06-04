import { StyleSheet, View } from "react-native";


export default function Card({children}) {
      return(
            <View style={styles.rootConteiner}>{children}</View>
      );
}

const styles = StyleSheet.create({
      rootConteiner: {
            flex: 1,
            marginTop: 100,
            alignItems: 'center',
      },
});