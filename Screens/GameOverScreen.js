
import {View,Text,Image,StyleSheet, useWindowDimensions} from 'react-native';
import PrimaryButton from '../Components/ui/PrimaryButton';
import Title from '../Components/ui/Title';

export default function GameOverScreen({userNumber,guessCount,onrestart}){
    const {width,height} = useWindowDimensions()

    let ImageSize = 300

    if (height < 500){
         ImageSize = 150
    }

    return(
        <View style={styles.rootContainer}>
            <Title>GameOver!!!</Title>
            <View style={[styles.imageContainer,{width :ImageSize,height:ImageSize,borderRadius:ImageSize / 2}]}>
                <Image style={styles.image} source= {require('../assets/images/success.png')}/>
            </View>
            <View style={{margin:16,}}>
                <Text style={{fontSize:23}}>Your phone needed {' '}
                    <Text>{guessCount}</Text> rounds to guess the number <Text style={{fontWeight:'bold'}}>{userNumber}</Text></Text>
            </View>
            <PrimaryButton onPress={onrestart}>Start New game</PrimaryButton>
        </View>
    )
}


const styles = StyleSheet.create({
    imageContainer:{
      
        borderColor:'black',
        borderWidth:3,
        margin:36,
     
        overflow:'hidden',
    },
    image:{
        width:'100%',
        height:'100%',
    },
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center',
    }
})
