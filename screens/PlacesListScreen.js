import React from 'react';
import { View, Text, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";

const PlacesListScreen = () => {
    return (
        <View>
            <Text>PlacesListScreen</Text>
        </View>
    );
};

PlacesListScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'All Places',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Add Place"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => {
                        navigation.navigate('NewPlace')
                    }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({})

export default PlacesListScreen;