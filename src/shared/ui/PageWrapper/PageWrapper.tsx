import React, { FC } from "react";
import { SafeAreaView } from "react-native";
import styles from "./PageWrapper.style";
import { PageWrapperProps } from "./types";

const PageWrapper: FC<PageWrapperProps> = ({children}) => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
};

export default PageWrapper