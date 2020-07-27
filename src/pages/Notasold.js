import React, { useEffect, useState } from 'react';
import {SafeAreaView, ScrollView,StyleSheet, Text, View} from 'react-native';

import StyleTemplate from '../../assets/Style/Template'
import NotasList from '../../src/components/NotasList'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Notas( {navigation} ) {
    const [Notas, setNotas] = useState([])

    useEffect(() => {
        setNotas(['React', 'Java', 'Tópicos', 'Redes', 'Banco de dados'])
    }, []);

    function BackIndex(){
        navigation.navigate('Index')
    }


    return (
        <SafeAreaView style={StyleTemplate.container}>
            <ScrollView style={StyleTemplate.scroll}>
                <Text style={StyleTemplate.titulo}> Notas</Text>
                <View>
                    {Notas.map((materias => <NotasList materias = {materias} />))}
                </View>
                <View>
                    <TouchableOpacity onPress={BackIndex}>
                        <Text style = {style.back2Index} > Voltar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    back2Index : {
        color: '#000',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    }
})