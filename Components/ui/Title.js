import {View,Text,StyleSheet} from 'react-native'

function Title({children}){
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontFamily:'open-sans',
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        padding:12,
        borderWidth:2,
        borderColor:'white',
    },
})

 