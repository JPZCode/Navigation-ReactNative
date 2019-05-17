import React from 'react';
import { StyleSheet, View , Text, TouchableOpacity} from 'react-native';

 class TabBar extends React.Component {

  navigate=route=>{
    const {navigate}=this.props;
    switch(route){
      case "Coloruno":
        navigation.navigate({
          routeName: "Coloruno"
      })
      break
      case "Colordos":
        navigation.navigate({
          routeName: "Colordos"
      })
      break
    }
  }
  rederTab=({route}) => {
    const {selected}=this.props;
    return(
      <TouchableOpacity
        onPress={()=>this.navigate(route)}>
        <Text>route</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return(
      <View>
        {this.renderTab({route:"Coloruno"})}
        {this.renderTab({route:"Colordos"})}
      </View>
    );
  }
}

export default withNavigation(TabBar);

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#eeeeee'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});