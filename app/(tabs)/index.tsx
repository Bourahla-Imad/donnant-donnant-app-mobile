import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#0f0f0f', '#1a1a1a', '#222']}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Accueil</Text>
        <Text style={styles.subtitle}>Bienvenue !</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: {
    width: '85%',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  title: { color: '#fff', fontSize: 28, fontWeight: '700', textAlign: 'center', marginBottom: 8 },
  subtitle: { color: 'rgba(255,255,255,0.85)', fontSize: 16, textAlign: 'center' },
});
