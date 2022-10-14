import { useEffect, useRef } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

export const Three = () => {
  const mountRef = useRef();

  // --------------------------------------------
  // scene、camera、rendererの設定を初期表示時に行う.
  // マウント後でないとcanvasのサイズが取得できないため、
  // useEffect内で処理を行なっている。
  // --------------------------------------------
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    // レンダリング
    const currentElm = mountRef.current;
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentElm.appendChild(renderer.domElement);
    // オブジェクトを回転させるときに参照したいため、ここで変数を宣言します
    var object_switch = null;
    // オブジェクトを読み込む
    const mtlLoader = new MTLLoader();
    mtlLoader.load(`${process.env.PUBLIC_URL}/myroom.vox.mtl`, (materials) => {
      materials.preload();
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(`${process.env.PUBLIC_URL}/myroom.vox.obj`, (object) => {
        const mesh = object;
        object_switch = object;
        scene.add(mesh);
      });
    });
    camera.position.z = 5;
    // オブジェクトを照らすために環境光源を追加する
    const light = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(light);
    const animate = function () {
      requestAnimationFrame(animate);
      // そのまま書くとオブジェクトが読み込まれる前に動いてしまうので、ifで括っておく
      if (object_switch) {
        object_switch.rotation.x += 0.01;
        object_switch.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      currentElm.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
};
