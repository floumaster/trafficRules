import React from "react";
import LinearGradient from 'react-native-linear-gradient';
import { View } from "react-native";
import styles from "./Exam.style";
import PageWrapper from "shared/ui/PageWrapper";
import PrimaryButton from "shared/ui/PrimaryButton";
import ExamOption from "entities/ExamOption";

const Exam = () => {
    return (
        <PageWrapper>
            <ExamOption />
        </PageWrapper>
    )
};

export default Exam
