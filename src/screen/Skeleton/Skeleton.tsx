import {Animated, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';

interface SkeletonProps {
  variant?: 'box' | 'circle';
  width: string | number;
  height: number;
}
const gray = '#708090';

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  variant = 'box',
}) => {
  const opacity = useRef(new Animated.Value(0.3));

  let borderRadius = 0;

  if (variant === 'circle') {
    borderRadius =
      typeof height === 'string' ? parseInt(height, 10) / 2 : height / 2;
  }
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
        }),
      ]),
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        {opacity: opacity.current, height, width, borderRadius},
        styles.skeleton,
      ]}
    />
  );
};

export default Skeleton;

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: `${gray}`,
  },
});
