import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Skeleton from './Skeleton';

const SkeletonCard = () => {
  const {logo, row, spacing, spaceFlex} = styles;
  return (
    <SafeAreaView>
      <View style={logo}>
        <Image source={require('../../assets/AmnilLogo.png')} />
      </View>
      <View style={row}>
        <View style={spacing}>
          <Skeleton variant="circle" width={50} height={50} />
        </View>
        <View style={spaceFlex}>
          <Skeleton width={'100%'} height={50} />
        </View>
      </View>

      <View style={spacing}>
        <Skeleton width={'100%'} height={50} />
      </View>
      <View style={spacing}>
        <Skeleton width={'100%'} height={50} />
      </View>
      <View style={spacing}>
        <Skeleton width={'100%'} height={50} />
      </View>
    </SafeAreaView>
  );
};

export default SkeletonCard;

const styles = StyleSheet.create({
  logo: {
    margin: 5,
    borderRadius: 100,
  },
  row: {
    flexDirection: 'row',
  },
  spacing: {
    margin: 8,
  },
  spaceFlex: {
    margin: 8,
    flex: 1,
  },
});
