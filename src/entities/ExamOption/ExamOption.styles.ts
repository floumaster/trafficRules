import { StyleSheet } from "react-native";
import { GREEN, ORANGE, RED } from "shared/const";

const styles = StyleSheet.create({
    iconWrapperSelected: {
        backgroundColor: GREEN
    },
    successContainer: {
        borderColor: GREEN
    },
    successText: {
        color: GREEN
    },
    successIconWrapper: {
        backgroundColor: GREEN,
        borderColor: GREEN
    },
    failureContainer: {
        borderColor: RED
    },
    failureText: {
        color: RED
    },
    failureIconWrapper: {
        backgroundColor: RED,
        borderColor: RED
    },
    selectedContainer: {
        borderColor: ORANGE
    },
    selectedText: {
        color: ORANGE
    },
    selectedIconWrapper: {
        backgroundColor: ORANGE,
        borderColor: ORANGE
    }
});

export default styles;