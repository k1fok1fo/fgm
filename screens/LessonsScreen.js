import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function LessonsScreen() { // <-- Поменяли название!
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Уроки</Text>
      <Text style={styles.subtitle}>Здесь будет расписание</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.BACKGROUND },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.TEXT },
  subtitle: { fontSize: 16, color: COLORS.TEXT_MUTED, marginTop: 10 }
});