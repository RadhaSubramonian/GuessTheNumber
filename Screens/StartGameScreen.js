import { Alert, Button, StyleSheet, Text, TextInput, View,useWindowDimensions } from 'react-native';
import PrimaryButton from '../Components/ui/PrimaryButton'
import { useState } from 'react';
import Colors from '../constants/colors';
import Title from '../Components/ui/Title';
import Card from '../Components/ui/Card';

export default function StartGameScreen(props){
    const [enteredNumber,setEnteredNumber] = useState('') 

    const {width,height} = useWindowDimensions()

    
    const marginTopdi = (width > 400) ? 30 : 100
    

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
    }
    function resetInputhandler(){
        setEnteredNumber('')
    }
    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber)

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)
        {
            Alert.alert("Invalid Number",
                'Number has to be between 1 to 99',
                [{text:'okay',style:'destructive', onPress:{resetInputhandler}}])
            return;
        }
        props.onPickNumber(chosenNumber)
    }
    return(
        <View style={styles.appContainer}>
            <View style={[styles.title,{marginTop:marginTopdi}]}>
            {/* <Text>Guess my number</Text> */}
                <Title>Guess My Number</Title>
            </View>
            <Card>
                <Text style={styles.enterTitle}>Enter a Number</Text>
                <TextInput style={styles.input}
                            maxLength={2}
                            keyboardType="number-pad"
                            onChangeText={numberInputHandler}
                            value={enteredNumber}/>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputhandler}>Reset</PrimaryButton>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      justifyContent:'flex-start',
      alignItems:'center',
    },
    title:{
        // marginTop:150,
        marginBottom:50,
        padding:20,
    },
    input:{
      borderBottomWidth:2,
      borderBottomColor:Colors.primary600,
      fontSize:25,
      width:40,
      marginHorizontal:120,
      marginVertical:20,
      color:'#ddb52f',
      fontWeight:'bold',
      textAlign:'center',
    },
    enterTitle:{
      textAlign:'center',
      color:'white',
    },
    buttonContainer:{
      flexDirection:'row',
      justifyContent:'space-around',  
    },
  });
  