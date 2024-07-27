import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
// import LottieView from 'lottie-react-native';

// interface SplashProps {
//   setIsLoading: Dispatch<SetStateAction<boolean>>;
// }

const Splash = () => {
  const {container, imgContainer} = styles;

  return (
    <View style={container}>
      <View style={imgContainer}>
        <Image source={require('../../assets/AmnilLogo.png')} />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  logoStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
