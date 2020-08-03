import React from 'react'
import { StyleSheet, View,Text,TouchableOpacity } from 'react-native'



class Solution extends React.Component {

  constructor(props) {
    super(props)
    
  }

 

  render() {
    return (
        <View style={styles.maincontainer}>
          <View style={styles.suivan_container}>
              <TouchableOpacity style={styles.btn_direction}
              onPress={() => this.props.navigation.navigate('Mensuration') }>
              <Text style={[{color:"#fff"},{fontSize:14}]}>SUIVANT</Text>
              </TouchableOpacity>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    maincontainer: {
    flex: 1,
    backgroundColor:"#fff562",
    alignItems:'center',
    justifyContent:'center'
  },
  btn_direction:{
    width:200,
    height:50,
    backgroundColor:"#00a9a6",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
  },
  
})




export default Solution