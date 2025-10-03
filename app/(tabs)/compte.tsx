// TODO: première PR — test UI//test:commentaire pour PR import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { supabase } from '../../lib/supabase';

export default function CompteScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => { subscription?.unsubscribe(); };
  }, []);

  const signUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) Alert.alert('Error', error.message);
    else Alert.alert('OK', 'Account created. Check your email if asked.');
  };

  const signIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) Alert.alert('Error', error.message);
  };

  const signOut = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    setLoading(false);
    if (error) Alert.alert('Error', error.message);
  };

  if (session) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
        <Text style={{ fontSize: 18, marginBottom: 12 }}>
          Logged in: {session.user?.email}
        </Text>
        <Pressable
          onPress={signOut}
          style={{ paddingVertical: 12, alignItems: 'center', borderWidth: 1, borderRadius: 8 }}
        >
          <Text>{loading ? 'Loading...' : 'Log out'}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 12 }}>
        Login
      </Text>

      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 8 }}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 12 }}
      />

      <Pressable
        onPress={signIn}
        style={{ paddingVertical: 12, alignItems: 'center', borderWidth: 1, borderRadius: 8 }}
      >
        <Text>{loading ? 'Loading...' : 'Sign in'}</Text>
      </Pressable>

      <View style={{ height: 8 }} />

      <Pressable
        onPress={signUp}
        style={{ paddingVertical: 12, alignItems: 'center', borderWidth: 1, borderRadius: 8 }}
      >
        <Text>{loading ? 'Loading...' : 'Sign up'}</Text>
      </Pressable>
    </View>
  );
}
