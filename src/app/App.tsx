import styles from './App.module.css';
import { Canvas } from '@react-three/fiber';
import Card from '../card';
import { Box, Html, OrbitControls, Plane } from '@react-three/drei';
import UserInterface from '../user-interface';
import { Physics, useBox, usePlane } from '@react-three/cannon';

function CollisionPlane({children, ...props}) {
  const [ref] = usePlane(() => ({ ...props }))
  return (
    <Plane ref={ref} {...props} >
      {children}
    </Plane>
  )
}

function App() {

  return (
    <div className={styles.App}>
      <Canvas shadows={true}>

        <ambientLight color="white" intensity={0.8}  />
        <pointLight 
          position={[10, 10, 10]}
          castShadow 
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        
      
        
        <Physics>
          <CollisionPlane receiveShadow args={ [1000, 1000] } rotation={[-Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color={"#5da130"} />
          </CollisionPlane>
          <Card  receiveShadow size={1} position={[0, 1, 0]}/>
        </Physics>
        <Box castShadow  position={[1, 1, 1]}>
          <meshStandardMaterial />
        </Box>

        <OrbitControls enablePan={true} enableZoom={false} maxPolarAngle={Math.PI / 3} enableRotate={true} />
        <camera>
          <Html 
            className={styles.interfaceWrapper}
            calculatePosition={(el, camera, size) => {
              return [window.innerWidth / 2, window.innerHeight / 2];
            }}
            style={{
              zIndex: 100,
            }}
          >
           <UserInterface />
          </Html>
        </camera>
      </Canvas>
    </div>
  );
}

export default App;
