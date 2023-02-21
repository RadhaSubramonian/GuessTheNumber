import { useState,useEffect } from 'react';
import {View,Text,StyleSheet,Alert, FlatList,useWindowDimensions} from 'react-native'
import Title from '../Components/ui/Title'
import NumberContainer from '../Components/ui/game/NumberContainer';
import PrimaryButton from '../Components/ui/PrimaryButton';
import Card from '../Components/ui/Card';
import {Ionicons} from '@expo/vector-icons';
import GuessLog from '../Components/GuessLog';

function generaterandNumbtwn(min,max,exclude){
    

    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude){
        return generaterandNumbtwn(min,max,exclude)
    }
    else{
        return rndNum
    }
}
let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({userNumber,ongameOver}){

    const {width,height} = useWindowDimensions();
    const initialGuess = generaterandNumbtwn(1,100,userNumber)
    const [currentGuess,setCurrentGuess] = useState(initialGuess)
    const [logRound,setlogRound] = useState([initialGuess])

    useEffect(()=>{
        if(currentGuess === userNumber)
        {
            ongameOver(logRound.length);
            minBoundary = 1;
            maxBoundary = 100;
        }
        },[currentGuess,userNumber,ongameOver]
    )

    function nextGuessHandler(direction){
        if((direction === 'lower' && currentGuess < userNumber) || 
          (direction === 'higher' && currentGuess > userNumber))
          {
            Alert.alert('lie','you are lieing',[{text:'sorry'}])
            return;
          }
        if (direction === 'lower')
        {
            maxBoundary = currentGuess
        }
        else {
            minBoundary = currentGuess + 1
        }
        const newRndNumber = generaterandNumbtwn(minBoundary,maxBoundary,currentGuess)
        setCurrentGuess(newRndNumber)
        setlogRound(prevRounds => [...prevRounds,newRndNumber] )
    }
    let content = (
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card >
                <Text style={{color:'white',paddingBottom:15,}}>Lower or Higher?</Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                        <Ionicons name="md-remove" size={24} color="white"/>
                    </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'higher')}>
                    <Ionicons name="md-add" size={24} color="white"/></PrimaryButton>
                </View>
            </Card>
        </>
    )

    if(height < 500){
        content = (
            <>
                 <Text style={{color:'white',paddingVertical:10,}}>Lower or Higher?</Text>
                 <View style={styles.buttonContainer}>
                    <View style={{marginTop:43,}}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                        <Ionicons name="md-remove" size={24} color="white"/>
                    </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={{marginTop:43,}}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'higher')}>
                    <Ionicons name="md-add" size={24} color="white"/></PrimaryButton>
                    </View>
                </View>
            </>
        )
    }
    return(
        <View style={styles.mainContainer}>
           <Title>Opponents Guess</Title>
           {content}
            <View style={{flex:1,marginTop:10,}}>
                {/* {logRound.map(item => <Text key={item} >{item}</Text>)} */}
                <FlatList 
                    data={logRound}
                    renderItem={itemData => <GuessLog roundNum ={itemData.index} guess={itemData.item}/>}
                    keyExtractor={(item) => item}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        padding:24,
        alignItems:'center',
    },
    buttonContainer:{
        flexDirection:'row',
    }
})