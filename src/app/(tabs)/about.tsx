
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>About Me</Text>

        <Text style={styles.heading}>Who Am I?</Text>

        <Text style={styles.text}>
          Hi! I am a student at Šolski center Velenje in
          Slovenia. I study computer science and learn
          about programming, websites and computer systems.
        </Text>

        <Text style={styles.heading}>My Interests</Text>

        <Text style={styles.text}>
          I enjoy playing video games, especially Hollow
          Knight. I am also interested in programming and
          creating my own projects. I like learning how
          games work and how they are made.
        </Text>

        <Text style={styles.heading}>A Little More About Me</Text>

        <Text style={styles.text}>
          I think games can be more than just entertainment.
          They can have interesting stories, memorable
          characters and worlds that make you want to explore
          every corner.
        </Text>

        <Text style={styles.joke}>
          Yeap, this is the part where I am supposed
          to write something about myself.
        </Text>

        <Text style={styles.footer}>
          Thanks for visiting my app!
        </Text>

        <Link href="/" style={styles.backButton}>
          ← Back to Home
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101923',
  },
  content: {
    padding: 24,
  },
  title: {
    color: '#F1F5F9',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heading: {
    color: '#8AB8D8',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    color: '#D0D9E2',
    fontSize: 15,
    lineHeight: 24,
  },
  joke: {
    color: '#A7C4D9',
    fontSize: 15,
    fontStyle: 'italic',
    lineHeight: 24,
    marginTop: 28,
    textAlign: 'center',
  },
  footer: {
    color: '#71889A',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 28,
  },
  backButton: {
    width: '100%',
    overflow: 'hidden',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#536777',
    color: '#E0EAF2',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
});
