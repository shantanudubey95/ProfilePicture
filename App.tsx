import { useState } from 'react';

import ProfilePicture from './src/ProfilePicture';
export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [img, setImg] = useState('');
  return (
    <ProfilePicture
      defaultImage={require('./assets/picture.jpg')}
      setPickedImage={(img: string) => setImg(img)}
    />
  );
}
