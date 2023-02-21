
import {View,Text,StyleSheet} from 'react-native';



export default function Card({children}){
    return(
        <View style={styles.Card}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    Card:{
        borderWidth:1,
        borderColor:'black',
        width:'70%',
        backgroundColor:'#4e0329',
        elevation:4,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        padding:30,
        
      },
})