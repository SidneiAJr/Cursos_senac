import { StyleSheet, View, Image } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://img.icons8.com/ios/50/apple-calculator.png' }}
        style={styles.foto}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', // centro vertical
    alignItems: 'center',
    marginTop: 55, 
    backgroundColor: 'rgba(255, 255, 255, 0.39)' ,
    borderRadius: 50   // centro horizontal
  },
  foto: {
    width: 150,
    height: 150,
  },
});