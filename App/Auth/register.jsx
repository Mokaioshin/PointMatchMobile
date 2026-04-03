import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // "user", "coach", "referee"
  const [image, setImage] = useState(null); // URI de l'image sélectionnée

  // Choisir une image depuis la galerie
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const register = async () => {
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('role', role);

      if (image) {
        formData.append('avatar', {
          uri: image,
          name: 'avatar.jpg',
          type: 'image/jpeg',
        });
      }

      // Mock fetch pour tester l’UI sans backend
      const response = { ok: true, json: async () => ({ message: 'Compte créé !' }) };
      const data = await response.json();

      if (!response.ok) {
        Alert.alert('Erreur', data.message || 'Erreur inconnue');
        return;
      }

      Alert.alert('Succès', 'Compte créé !');
      // navigation.navigate('Home'); // Décommente quand navigation ready

    } catch (error) {
      console.error(error);
      Alert.alert('Erreur', 'Problème de connexion au serveur');
    }
  };

  return (
    <View style={{ padding: 20, gap: 10 }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, padding: 8, borderRadius: 5 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{ borderWidth: 1, padding: 8, borderRadius: 5 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 8, borderRadius: 5 }}
      />

      <Button title="Choisir une image" onPress={pickImage} />
      {image && <Text>Image sélectionnée : {image}</Text>}

      <Button title="Register" onPress={register} />
    </View>
  );
}
