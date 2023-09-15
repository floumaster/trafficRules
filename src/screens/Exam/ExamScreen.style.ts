import { StyleSheet, Dimensions } from "react-native";
import { BLACK } from "shared/const";

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: BLACK
    }
});

export default styles;