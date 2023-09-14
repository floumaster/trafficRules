import { StyleSheet, Dimensions } from "react-native";
import { BACKGROUND_DARK_BLUE } from "shared/const";

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: BACKGROUND_DARK_BLUE,
        padding: 10
    }
});

export default styles;