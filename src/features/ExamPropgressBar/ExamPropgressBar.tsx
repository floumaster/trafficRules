import React, { useState, useRef, useCallback, useEffect, FC } from 'react';
import { View, Animated, TouchableOpacity, ScrollView } from 'react-native';
import ExamProgressItem from 'entities/ExamProgressItem';
import styles from './ExamPropgressBar.style';
import { ExamProgressBarProps } from './types';

let timeoutInstatance: ReturnType<typeof setTimeout>;

const ExamProgressBar: FC<ExamProgressBarProps> = ({ userProgress, goToQuestion, currentQuestionId, rightAnswers }) => {

    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const [lastTouchTime, setLastTouchTime] = useState<number>(Date.now())
    const containerHeight = useRef(new Animated.Value(3)).current;


    const hideContainer = useCallback(() => {
        Animated.timing(containerHeight, {
            toValue: 3,
            duration: 100,
            useNativeDriver: false,
            }).start(() => {
                setIsExpanded(false)
            });
    }, [])

    const expandContainer = useCallback(() => {
        Animated.timing(containerHeight, {
            toValue: 30,
            duration: 100,
            useNativeDriver: false,
            }).start(() => {
                setIsExpanded(true)
            });
    }, [])

    const changeTouchEnd = useCallback(() => {
        setLastTouchTime(Date.now())
    }, [])

    const handleTouchEnd = useCallback(() => {
        changeTouchEnd()
        expandContainer()
    }, [expandContainer, changeTouchEnd])


    useEffect(() => {
        if(isExpanded){
            if(timeoutInstatance){
                clearTimeout(timeoutInstatance);
            }
            timeoutInstatance = setTimeout(hideContainer, 3000);
        }
        return () => clearTimeout(timeoutInstatance);
    }, [lastTouchTime])


    return (
        <View style={styles.container} >
            <ScrollView horizontal onTouchEnd={handleTouchEnd} onScrollEndDrag={changeTouchEnd}>
                <Animated.View style={[styles.progressBar, { height: containerHeight }]}>
                    {
                        userProgress.map((item, index) => {
                            return <ExamProgressItem
                                number={index + 1}
                                id={item.questionId}
                                answerId={item.answerId}
                                key={item.questionId}
                                currentQuestionId={currentQuestionId}
                                rightAnswers={rightAnswers}
                                goToQuestion={goToQuestion}
                            />
                        })
                    }
                </Animated.View>
            </ScrollView>
        </View>
    )
};

export default ExamProgressBar;