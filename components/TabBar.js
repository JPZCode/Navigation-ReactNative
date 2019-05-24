import React from 'react';
import {StyleSheet,View,TouchableOpacity,Text} from 'react-native';

import { withNavigation } from 'react-navigation';

class TabBar extends React.Component{
    
    navigate=route=>{
        const {navigation}=this.props;
        switch(route){
            case "Coloruno":
            navigation.navigate({
                routeName:"Azul"
            })
            break
            case "Colordos":
            navigation.navigate({
                routeName:"Rojo"
            })
            break
        }
    }

    renderTab=({route})=>{
        const {selected}=this.props;
        return(
            <TouchableOpacity style={styles.tab} onPress={()=>this.navigate(route)}>
                <Text>{route}</Text>
                {selected===route&&<View style={styles.tabLine}/>}
            </TouchableOpacity>    
        )
    }
    
    render(){
        return(
            <View style={styles.container}>
                {this.renderTab({route: "Coloruno"})}
                {this.renderTab({route: "Colordos"})}
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  tabLine:{
    position: 'absolute',
    backgroundColor:'green',
    height:4,
    left: 16,
    right:16,
    bottom:5
  }

  });

export default withNavigation(TabBar);