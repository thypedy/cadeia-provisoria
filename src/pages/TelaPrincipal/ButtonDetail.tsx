import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './ButtonDetail.css';

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import React, { useRef, useState, useEffect} from 'react';
import { PointerLockControls } from '@react-three/drei';

function Model(props:any) {
  const meshRef:any = useRef();
  const gltf = useLoader(GLTFLoader, '../../../public/3d/small_modern_bedroom.glb');
  console.log(gltf);
  // useFrame((state,delta) => (meshRef.current.rotation.y += delta));
  return(
    <primitive ref={meshRef}
    object={gltf.scene}
    position={[0, 0.5, 5]}
    children-0-castShadow
    />
  )
}

const ButtonDetail: React.FC = () => {
  return (
      
      <IonContent fullscreen>
<Canvas>
  <Model>

  </Model>

< PointerLockControls/>


  <ambientLight/>
  </Canvas>      </IonContent>
  );
};

export default ButtonDetail;