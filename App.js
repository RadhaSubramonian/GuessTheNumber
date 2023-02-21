import { StatusBar } from 'expo-status-bar';
import {View,StyleSheet,ImageBackground,SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './Screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function App() {

  const [userNumber,setUserNumber] = useState()
  const[gameIsOver,setgameIsOver] = useState(true)
  const [guessCount,setGuessCount] = useState(0)
  

  function restarthandler(){
    setUserNumber(null);
    setGuessCount(0);
  }
  const [fontsLoaded] = useFonts({
    'open-sans' : require('./assets/fonts/OpenSans-Bold.ttf')
  })
  

  function getpickedNumber(pickedNumber){
    setUserNumber(pickedNumber)
    setgameIsOver(false)
  }
  function gameOverhandler(numberlen){
    setgameIsOver(true)
    setGuessCount(numberlen)
  }

  let screens =  <StartGameScreen onPickNumber={getpickedNumber}/>

  if(userNumber){
    screens = <GameScreen userNumber={userNumber}
                          ongameOver={gameOverhandler}/>
  }

  if(gameIsOver && userNumber){
    screens = <GameOverScreen userNumber={userNumber}
    guessCount={guessCount} onrestart={restarthandler}/>
  }

  return (
    
    <LinearGradient colors={[ '#4e0329','#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
            source={require('./assets/images/background.png')}
            
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}>
        <SafeAreaView  style={styles.rootScreen}>
            {screens}
        </SafeAreaView>
     </ImageBackground>
    </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity:0.3,
  }
}
)