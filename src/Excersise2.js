import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";


const Excerise2 = ()=>{
    return(
        <View style= {{...styles.container }}>
            <View style={{...styles.box}}>
                <Text style={{...styles.text}}>Hello Word</Text>
            </View>
           
        </View>
    )
}

export default Excerise2;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "pink"
    },
    box:{
        width:100,
        height:100,
        backgroundColor: "aqua",
        justifyContent: "center",
        alignItems:"center"
    },
    text:{
        fontSize: 20,
        fontWeight: "bold"
    }


})

