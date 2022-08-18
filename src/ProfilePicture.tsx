import { Canvas, Paint, Path, Skia } from '@shopify/react-native-skia';
import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

const ProfilePicture = () => {
  const padding = 40;
  const strokeWidth = 18;
  const screenWidth = Dimensions.get('window').width;
  const viewWidth = screenWidth - 2 * padding;
  const drawWidth = viewWidth - strokeWidth * 2;
  const path = Skia.Path.Make();
  path.addArc({ x: strokeWidth, y: strokeWidth, width: drawWidth, height: drawWidth }, 35, 330);
  return (
    <View
      style={{
        flex: 1,
        margin: padding,
        height: viewWidth,
        width: viewWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/picture.jpg')}
        style={{
          height: drawWidth,
          width: drawWidth,
          borderRadius: drawWidth,
          position: 'absolute',
        }}
      />
      <Canvas style={{ height: viewWidth, width: viewWidth, position: 'absolute' }}>
        <Path path={path} color="transparent">
          <Paint style="stroke" strokeWidth={strokeWidth} strokeCap="round" color="#04825C" />
        </Path>
      </Canvas>
      <Text style={{ fontWeight: '600', fontSize: 15, marginTop: 400 }}>Astha Thakur</Text>
    </View>
  );
};

export default ProfilePicture;
