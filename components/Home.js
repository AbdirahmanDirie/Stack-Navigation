import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const navigationDetails = props =>{
    props.navigation.navigate('Movies')
}


const Home = props => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button onPress={()=> navigationDetails(props)} title='Go To Movies'/>
      </View>
    );
  }

  export default Home