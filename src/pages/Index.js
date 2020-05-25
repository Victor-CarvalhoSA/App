import React from 'react';
import {SafeAreaView, StyleSheet, Text } from 'react-native';

export default function Index({navigation}){
    async function handleSubmit(){
        navigation.navigate('User')
    }
    return (
        <SafeAreaView style = {style.container}>
            <Text style = {style.text} onPress = {handleSubmit} >Usuarios</Text>
            <Text style = {style.text} onPress = {handleSubmit} >Notas</Text>

        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, text:{
        color:"#00"
    }
});