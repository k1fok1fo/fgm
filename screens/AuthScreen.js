import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

export default function AuthScreen({ navigation }) {
  const [isStudent, setIsStudent] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false); // <-- Переменная для галочки

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Логотип */}
        <View style={styles.logoRow}>
          <View style={styles.logoIcon}>
            <Ionicons name="book" size={20} color="#FFF" />
          </View>
          <Text style={styles.logoText}>умно</Text>
          <View style={styles.logoDot} />
        </View>

        <Text style={styles.title}>Создайте аккаунт</Text>
        <Text style={styles.subtitle}>Новые знания начинаются здесь.</Text>

        {/* Переключатель */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity 
            style={[styles.toggleButton, isStudent && styles.toggleActive]} 
            onPress={() => setIsStudent(true)}
          >
            <Ionicons name="person-outline" size={16} color={isStudent ? COLORS.PRIMARY : COLORS.TEXT_MUTED} />
            <Text style={[styles.toggleText, isStudent && styles.toggleTextActive]}>Ученик</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.toggleButton, !isStudent && styles.toggleActive]} 
            onPress={() => setIsStudent(false)}
          >
            <Text style={[styles.toggleText, !isStudent && styles.toggleTextActive]}>Репетитор</Text>
          </TouchableOpacity>
        </View>

        {/* Поля ввода */}
        <Text style={styles.label}>Имя</Text>
        <TextInput
          style={styles.input}
          placeholder="Как вас зовут?"
          placeholderTextColor={COLORS.TEXT_MUTED}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="you@example.com"
          placeholderTextColor={COLORS.TEXT_MUTED}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Пароль</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Не менее 8 символов"
            placeholderTextColor={COLORS.TEXT_MUTED}
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Ionicons name={isPasswordVisible ? "eye-outline" : "eye-off-outline"} size={20} color={COLORS.TEXT_MUTED} />
          </TouchableOpacity>
        </View>

        {/* Согласие с условиями (ИСПРАВЛЕНО) */}
        <TouchableOpacity 
          style={styles.checkboxRow} 
          onPress={() => setIsAgreed(!isAgreed)} 
          activeOpacity={0.7}
        >
          <View style={[styles.checkbox, isAgreed && styles.checkboxActive]}>
            {isAgreed && <Ionicons name="checkmark" size={14} color="#FFF" />}
          </View>
          <Text style={styles.checkboxText}>Согласен с условиями</Text>
        </TouchableOpacity>

        {/* Кнопка регистрации */}
        <TouchableOpacity 
          style={styles.mainButton} 
          onPress={() => navigation.navigate('MainTabs')} 
        >
          <Text style={styles.mainButtonText}>Зарегистрироваться</Text>
        </TouchableOpacity>

        {/* Разделитель */}
        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>или</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Соцсети */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-google" size={20} color="#DB4437" />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-apple" size={20} color="#000" />
            <Text style={styles.socialText}>Apple</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Уже есть аккаунт? </Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Войти</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.BACKGROUND },
  scrollContent: { padding: 24, paddingTop: 60, paddingBottom: 40 },
  logoRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  logoIcon: { backgroundColor: COLORS.PRIMARY, padding: 6, borderRadius: 8, marginRight: 8 },
  logoText: { fontSize: 22, fontWeight: 'bold', color: COLORS.TEXT },
  logoDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#FF5A5F', marginLeft: 2, marginTop: 10 },
  title: { fontSize: 26, fontWeight: 'bold', color: COLORS.TEXT, textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 14, color: COLORS.TEXT_MUTED, textAlign: 'center', marginBottom: 32 },
  toggleContainer: { flexDirection: 'row', backgroundColor: '#F3F4F6', borderRadius: 12, padding: 4, marginBottom: 24 },
  toggleButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, borderRadius: 10 },
  toggleActive: { backgroundColor: COLORS.BACKGROUND, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2 },
  toggleText: { fontSize: 14, fontWeight: '500', color: COLORS.TEXT_MUTED, marginLeft: 6 },
  toggleTextActive: { color: COLORS.TEXT },
  label: { fontSize: 14, fontWeight: '500', color: COLORS.TEXT, marginBottom: 8 },
  input: { borderWidth: 1, borderColor: COLORS.BORDER, borderRadius: 12, paddingHorizontal: 16, paddingVertical: 14, fontSize: 15, color: COLORS.TEXT, marginBottom: 16 },
  passwordContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: COLORS.BORDER, borderRadius: 12, paddingHorizontal: 16, marginBottom: 16 },
  passwordInput: { flex: 1, paddingVertical: 14, fontSize: 15, color: COLORS.TEXT },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  checkbox: { 
    width: 20, 
    height: 20, 
    borderWidth: 1, 
    borderColor: COLORS.BORDER, 
    borderRadius: 6, 
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkboxActive: { backgroundColor: COLORS.PRIMARY, borderColor: COLORS.PRIMARY },
  checkboxText: { fontSize: 13, color: COLORS.TEXT_MUTED },
  mainButton: { backgroundColor: COLORS.PRIMARY, borderRadius: 12, paddingVertical: 16, alignItems: 'center', marginBottom: 24 },
  mainButtonText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
  dividerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  dividerLine: { flex: 1, height: 1, backgroundColor: COLORS.BORDER },
  dividerText: { marginHorizontal: 12, color: COLORS.TEXT_MUTED, fontSize: 13 },
  socialRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 32 },
  socialButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: COLORS.BORDER, borderRadius: 12, paddingVertical: 14, marginHorizontal: 4 },
  socialText: { fontSize: 14, fontWeight: '500', color: COLORS.TEXT, marginLeft: 8 },
  footer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  footerText: { fontSize: 14, color: COLORS.TEXT_MUTED },
  footerLink: { fontSize: 14, fontWeight: '600', color: COLORS.PRIMARY },
});