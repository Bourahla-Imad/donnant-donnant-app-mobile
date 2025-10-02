import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, size }) => (<Ionicons name="home-outline" color={color} size={size} />) }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore', tabBarIcon: ({ color, size }) => (<Ionicons name="compass-outline" color={color} size={size} />) }} />
      <Tabs.Screen name="compte" options={{ title: 'Compte', tabBarIcon: ({ color, size }) => (<Ionicons name="person-circle-outline" color={color} size={size} />) }} />
    </Tabs>
  );
}
