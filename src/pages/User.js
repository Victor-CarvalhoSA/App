import React, { useEffect } from 'react';
import {View, Text, AsyncStorage } from 'react-native';;

export default function User(){
    useEffect(() => {
        AsyncStorage.getItem('id').then(id => {
            const id = id.trim();
            setId(id);
        })
    }, []);
    return ( <SafeAreaView style = {styles.container}>
        <Image style = {styles.image} source = {require('../../assets/logo-faccar.png')}/>
        

    </SafeAreaView>
)};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    image: {
        height: 150,
        marginTop: 30,
        alignSelf: "center",
        resizeMode:"contain"
    }, title: {
        fontSize: 26,
        paddingLeft: 10,
        marginTop: 15,
    }
});