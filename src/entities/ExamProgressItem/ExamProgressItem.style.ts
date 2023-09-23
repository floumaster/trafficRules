import { StyleSheet } from "react-native";
import { GRAY, GREEN, LIGHT_GRAY, ORANGE, RED, WHITE } from "shared/const";

const styles = StyleSheet.create({
    container: {
        width: 30,
        backgroundColor: LIGHT_GRAY,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    currentItemContainer: {
        backgroundColor: ORANGE
    },
    rightItemContainer: {
        backgroundColor: GREEN
    },
    wrongItemContainer: {
        backgroundColor: RED
    },
    whiteText: {
        color: WHITE
    }
});

export default styles;