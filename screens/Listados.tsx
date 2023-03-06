import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";

function Listados(): JSX.Element{
    const nombres = HARDCODED.results;
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>TAREAS</Text>
            <ScrollView style={{maxHeight:'90%'}}>
                <View style={styles.grid}>
                    {nombres.map(nombre=>(
                        <Card key={nombre.name} name={nombre.name}/>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Button onPress={() =>{
                    console.log('Boton apretado')
                    }}
                    title='Agregar Tarea'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
    },
    grid: {
    },
    titulo:{
        fontSize:30,
        textAlign:'center',
        color:'black',
        fontWeight: 'bold',
    },
    buttonContainer:{
        marginHorizontal:80,
    },

});
    
export default Listados;

const HARDCODED = {
    results:[
        {name:'Coti'},
        {name:'Fede'},
        {name:'Mati'},
        {name:'Cata'},
        {name:'Cande'},
        {name:'Mica'},
        {name:'Benja'},
        {name:'Mariana'},
        {name:'Elea'},
        {name:'Edu'},
        {name:'Pancho'},
        {name:'Juli'},
        {name:'Tek'},
        {name:'Fran'},
        {name:'Francesco'},
        {name:'Julia'},
        {name:'Fernanda'},
        {name:'Fernando'},
    ],
};
