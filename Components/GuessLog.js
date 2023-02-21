import {View,Text,StyleSheet} from 'react-native'


export default function GuessLog({roundNum,guess}){
    return (
        <View style={styles.ListItem}>
            <Text>#{roundNum}</Text>
            <Text>Opponents Guess:{guess}</Text>
    </View>
    )
}


const styles = StyleSheet.create({
    ListItem:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:'#ddb52f',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius:3,
    }
})