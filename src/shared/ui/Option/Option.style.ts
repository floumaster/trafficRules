import { StyleSheet } from "react-native";
import { GRAY, GREEN, WHITE } from "shared/const";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 56,
        borderWidth: 1.5,
        borderColor: GRAY,
        borderStyle: 'solid',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 10,
        paddingVertical: 10
    },
    text: {
        color: GRAY,
        fontSize: 16,
        fontWeight: '500',
        width: '85%'
    },
    containerSelected: {
        borderColor: GREEN
    },
    textSelected: {
        color: GREEN
    },
    iconWrapper: {
        borderWidth: 1.5,
        borderColor: GRAY,
        borderStyle: 'solid',
        borderRadius: 50,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 25,
        height: 25,
        marginTop: 2
    },
    iconWrapperSelected: {
        borderColor: GREEN,
        borderWidth: 1.5,
    },
    whitePoint: {
        width: 13,
        height: 13,
        backgroundColor: WHITE,
        borderRadius: 50
    },
    whitePointSelected: {
        backgroundColor: GREEN
    }
});

export default styles;