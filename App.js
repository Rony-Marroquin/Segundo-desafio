import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Image,Button, } from 'react-native';
import Constants from 'expo-constants';



export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        setImageUrl(dog.message);
        setIsLoading(false);
      });
  }, []);

  const fetchRandomDog = () => { /* ⬅️ función para obtener un perrito aleatorio */
    setIsLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((dog) => {
        setImageUrl(dog.message);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return (
      <View>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View>
      <Image 
      source={ {uri: "https://dog.ceo/api/breeds/image/random"}}/>
      

      <Button 
      
        title="Precionar"
        onPress={() => fetchRandomDog }
      />
    </View>
  );

  
}

