import {Pressable, Text, View} from 'react-native';
import { styles } from '../../../config/app-theme';
import { useCounterStore } from '../../store/counter-store';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export const SettingsScreen = () => {
  const count = useCounterStore( state => state.count)
  const increment = useCounterStore(state => state.increment);
  const decrement = useCounterStore(state => state.decrement);

  const navigator = useNavigation();

  useEffect(()=>{
    navigator.setOptions({
      title: `Count: ${count}`
    })
  },[count])
  return (
    <View>
      <Text style={styles.title}>Count: {count}</Text>

      <Pressable style={styles.primaryButton} onPress={()=> increment(1)}>
          <Text>Increment (+) </Text>
      </Pressable>

      <Pressable style={styles.primaryButton} onPress={()=> decrement(1)}>
          <Text>Decrement (-)</Text>
      </Pressable>
    </View>
  );
};
