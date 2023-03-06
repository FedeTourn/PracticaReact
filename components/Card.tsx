import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Card=({name})=> {

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>{name}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:10,
        padding:10,
        marginBottom:10,
        marginHorizontal:10,
    },
    texto:{
        fontSize:20,
    }
});

export default Card;