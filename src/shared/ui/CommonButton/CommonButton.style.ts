import { StyleSheet } from "react-native";
import { BLACK, WHITE } from "shared/const";

export const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 60,
        color: BLACK,
        borderWidth: 1,
        borderColor: BLACK,
        borderStyle: 'solid',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        borderRadius: 12,
        backgroundColor: WHITE
    },
    leftIconContainer: {
        
    },
    rightIconContainer: {

    },
    text: {
        fontSize: 16,
        color: BLACK
    }
});