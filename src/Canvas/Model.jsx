import { useLoader } from '@react-three/fiber';
import _ from 'lodash';
import { useEffect, useState } from 'react';
// アニメーションを使う場合
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Model = () => {
  const gltf = useLoader(GLTFLoader, `${process.env.PUBLIC_URL}/usa.glb`);
  // 回転
  const rotateRef = useRef();
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    rotateRef.current.rotation.y = a * 0.3;
  });
  const [dispWidth, setDispWidth] = useState(window.innerWidth);
  const [scale, setScale] = useState(15);
  useEffect(() => {
    setDispWidth(window.innerWidth);
    if (dispWidth >= 600 && dispWidth <= 950) {
      // Tablet
      setScale(10);
    }
    if (dispWidth <= 600) {
      // smartPhone
      setScale(7);
    }
  }, []);

  return (
    // scaleでモデルのサイズを変更。レスポンシブにする。
    <mesh ref={rotateRef} scale={scale}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};
