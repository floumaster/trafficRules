import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    answersList: {
        width: '100%',
        rowGap: 20,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'flex-end'
    }
});

export default styles;