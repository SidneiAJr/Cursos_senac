import { StyleSheet, View, Image } from 'react-native';
import { ImgUnivesal } from '../hooks/components';

const Logo = ({width,height,url,children,alt,resizeMode}:ImgUnivesal) => {
  return (
    <View style={[styles.container,{width,height}]}>
      <Image
        source={{ uri: url }}
        style={[styles.foto,{width,height}]}
        accessibilityLabel={alt}
        resizeMode={resizeMode}
      />
       {children}
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', // centro vertical
    alignItems: 'center',
  },
  foto: {
  },
});