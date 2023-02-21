import {View,Text,StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function NumberContainer({children}){
    return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children} </Text>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth:4,
        borderColor:'#ddb52f',
        padding:24,
        paddingHorizontal:100,
        margin:24,
        borderRadius:8,
        alignItems:'stretch',
        justifyContent:'center',

    },
    numberText:{
        color:'#ddb52f',
        fontSize:30,
        fontWeight:'bold',
    },
})