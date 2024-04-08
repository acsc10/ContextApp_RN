import React from 'react';
import {Pressable, Text, View} from 'react-native';
import { styles } from '../../../config/app-theme';
import { useProfileStore } from '../../store/profile-store';

export const ProfileScreen = () => {

  const name = useProfileStore(state => state.name)
  const email = useProfileStore(state => state.email)
  const changeProfile = useProfileStore(state => state.changeProfile)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProfileScreen</Text>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable style={styles.primaryButton} onPress={()=> useProfileStore.setState({name: "Camilo Sanchez"})}>
          <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable style={styles.primaryButton} onPress={()=> changeProfile("Andres", "andres@hotmail.com")}>
          <Text>Cambiar Andres</Text>
      </Pressable>
    </View>
  );
};
