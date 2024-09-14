import {Box, Text, Text3D} from '@react-three/drei'
import { AmbientLight, DirectionalLight } from 'three'


function Text3d() {
  return (
    
    <>
        <DirectionalLight position={[10, 10, 5]} intensity={1}/>
        <AmbientLight intensity={0.5}/>
        <Text3D
        font="/path/to/font.json" // Ensure you use a valid font path
        size={1}                  // Height of the text
        height={0.5}              // Thickness of the text
        position={[0, 0, 0]}
      >
        FULL STACK {'\n'}DEVELOPER
        <meshStandardMaterial color={'white'} />
      </Text3D>
      <Box
        args={[10, 1, 0.5]}  // Width, height, and depth of the bounding box
        position={[0, 0, 0]}
        visible={false}     // Set to `true` if you want to see the box
      >
        <meshBasicMaterial color={'white'} wireframe />
      </Box>
        
    </>
  )
}

export default Text3d