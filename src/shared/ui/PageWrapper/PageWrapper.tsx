import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./PageWrapper.style";
import { PageWrapperProps } from "./types";

const PageWrapper = ({children} : PageWrapperProps) : JSX.Element => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
};

export default PageWrapper