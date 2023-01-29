import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const navigationDetails = props =>{
    props.navigation.navigate('Home')
}


const Movies = props => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Movies Screen</Text>
        <Button onPress={()=> navigationDetails(props)} title='Go To Home'/>
      </View>
    );
  }

  export default Movies