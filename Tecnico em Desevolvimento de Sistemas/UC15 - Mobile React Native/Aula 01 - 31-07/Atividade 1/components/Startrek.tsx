import { StyleSheet, ImageBackground } from 'react-native';

const Startrek = ({ children }) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://img.magnific.com/fotos-gratis/nascer-do-sol-sobre-as-montanhas_23-2152014214.jpg?semt=ais_test_b&w=740&q=80',
      }}
      style={styles.foto}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

export default Startrek

const styles = StyleSheet.create({
  foto: {
    flex: 1,
  },
});