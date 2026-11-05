import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function SuccessScreen() { // <-- В SuccessScreen напиши SuccessScreen
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Заглушка экрана</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.BACKGROUND },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.TEXT },
});