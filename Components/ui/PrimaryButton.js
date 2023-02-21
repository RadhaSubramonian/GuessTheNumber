import {View,Text,Pressable,StyleSheet} from 'react-native';

function PrimaryButton(props){
    return(
            <View style={styles.buttonOuterContainer}>
                 <Pressable
                        style={styles.buttonInnerContainer} 
                        android_ripple={{color:'white'}}
                        onPress={props.onPress}>
                     <Text style={styles.buttonText}>{props.children}</Text>
                </Pressable>
            </View>
        
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        overflow:'hidden',
    },
    buttonInnerContainer: {
        backgroundColor:'#72063c',
        paddingVertical:4,
        paddingHorizontal:16, 
    },
    buttonText:{
        paddingVertical:8,
        paddingHorizontal:16,
        color:'white',
    },
})