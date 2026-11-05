import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function TutorDetailScreen() { // <-- Поменяли на TutorDetailScreen
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Анкета специалиста</Text>
      <Text style={styles.subtitle}>Здесь будет профиль репетитора</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.BACKGROUND },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.TEXT },
  subtitle: { fontSize: 16, color: COLORS.TEXT_MUTED, marginTop: 10 }
});