import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Buttons from './Buttons';
import Buttons2 from './Buttons2';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

function HomeScreen({ navigation }) {
  function infos() {
    alert(" \n \n Applications de localisation \n \n \n By Devyan314");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}></Text>
      <Buttons onPress={() => navigation.navigate('Carte')}>Carte</Buttons>
      <Text style={styles.paragraph}></Text>
      <Buttons onPress={() => navigation.navigate('Localisation')}>Localisation</Buttons>
      <Text style={styles.paragraph}></Text>
      <Buttons2 onPress={() => infos()}>Infos</Buttons2>
      <Text style={styles.paragraph}></Text>
      <Image
        source={{
          uri: 'https://img.devyan314.com/iconeDevV2.png',
        }}
        style={{width: 220, height: 200, margin: 15}}
      />
    </View>
  );
}

function CarteScreen() {
    const [mapRegion, setmapRegion] = useState({
      latitude: 41.24,
      longitude: 2.10,
    });
    return (
      <View style={styles.containerGPS}>
        <MapView
          style={{ alignSelf: 'stretch', height: '100%' }}
          region={mapRegion}
        />
      </View>
    );
}


function LocalisationScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  const [mapRegion, setmapRegion] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  mapRegion.latitude = location ? location.coords.latitude : null;
  mapRegion.longitude = location ? location.coords.longitude : null;
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Latitude: {location ? location.coords.latitude : null}</Text>
      <Text style={styles.paragraph}>Longitude: {location ? location.coords.longitude : null}</Text>
      <Text style={styles.paragraph}>{setmapRegion.latitude}</Text>
      <Text style={styles.paragraph}>{setmapRegion.Longitude}</Text>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion} 
      > 
        <Marker coordinate={mapRegion} title='Marker' />
      </MapView> 
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Carte" component={CarteScreen} />
        <Stack.Screen name="Localisation" component={LocalisationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  paragraph: {
    marginTop: 15
  },
  containerGPS: {
    flex: 1,
  },
});

export default App;