import { BoxProps, useBox } from '@react-three/cannon';
import { Box, Html } from '@react-three/drei';
import { MeshProps } from '@react-three/fiber';
import { useState } from 'react';

type CardProps = Omit<MeshProps, 'args'> & { 
  size?: number 
};

export default function Card({ size = 1, ...props}: CardProps) {
  const [ref] = useBox(() => ({ mass: 1, ...props as BoxProps }))
  const [hidden, setVisible] = useState(false)
  
  const height = size;
  const width = size * 2;
  const deep = size / 20;

  return (
    <Box ref={ref} args={[width, height, deep]} >
      <meshStandardMaterial color="white" transparent />
      <Html 
        style={{
          opacity: hidden ? 0 : 1,
        }}
        position={[0, 0, deep - 0.01]}
        distanceFactor={4.2}
        occlude
        transform
        onOcclude={(isVisible) => { setVisible(isVisible); return null }}
      >
        <div >
          sfawfaw
        </div>
      </Html>
    </Box>
  );
}