import { Link } from 'expo-router';

import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MoreInfoScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>About Hollow Knight</Text>

        <Text style={styles.text}>
          Hollow Knight is a 2D action-adventure game developed
          by Team Cherry and released in 2017. The game takes
          place in Hallownest, an ancient underground kingdom.
        </Text>

        <Text style={styles.heading}>Gameplay</Text>

        <Text style={styles.text}>
          You control a small knight who explores the world,
          fights enemies and discovers new abilities. There
          are many challenging bosses, and each area has its
          own enemies and secrets.
        </Text>

        <Text style={styles.heading}>The World</Text>

        <Text style={styles.text}>
          Hallownest is full of forgotten places, mysterious
          characters and hidden stories. Players can explore
          different areas, find secret locations and learn
          more about the kingdom.
        </Text>

        <Text style={styles.heading}>Why Is It Special?</Text>

        <Text style={styles.text}>
          The game is known for its atmosphere, hand-drawn
          art, music and challenging gameplay. It gives
          players a lot of freedom to explore and discover
          things on their own.
        </Text>

        <Text style={styles.footer}>
          Developed by Team Cherry
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
    fontSize: 28,
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
  footer: {
    color: '#71889A',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 16,
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
