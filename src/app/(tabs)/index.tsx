
import { Link } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../pics/Main_Pic.png')}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.title}>Hollow Knight</Text>

        <Text style={styles.tagline}>
          Explore. Fight. Discover.
        </Text>

        <Text style={styles.description}>
          Hollow Knight is a 2D action-adventure game developed
          by Team Cherry. It takes place in Hallownest, a
          mysterious underground kingdom full of strange
          creatures, hidden places and dangerous enemies.
        </Text>

        <Text style={styles.description}>
          I like this game because of its atmosphere,
          interesting lore, challenging boss fights and
          the freedom to explore the world.
        </Text>

        <Link href="/more-inf" style={styles.button}>
          More About the Game →
        </Link>

        <Link href="/about" style={styles.secondButton}>
          About Me →
        </Link>

        <Text style={styles.footer}>
          My favourite game
        </Text>
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
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 500,
    borderRadius: 12,
    marginBottom: 24,
    backgroundColor: '#172B46',
  },
  title: {
    color: '#F1F5F9',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tagline: {
    color: '#8AB8D8',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 24,
  },
  description: {
    color: '#D0D9E2',
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    width: '100%',
    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor: '#DCEAF3',
    color: '#152636',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 12,
  },
  secondButton: {
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
  footer: {
    color: '#71889A',
    fontSize: 12,
    marginTop: 28,
    marginBottom: 12,
  },
});
