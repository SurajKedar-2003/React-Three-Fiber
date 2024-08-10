/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import './App.css'
import {Canvas, useFrame} from "@react-three/fiber"
import Sphere from './Sphere'
import Torus from './Torus'
import TorusKnot from './TorusKnot'

const Cube = ({position, size, color}) =>{
  const ref = useRef();
  useFrame((state, delta)=>{
    ref.current.rotation.x +=delta*3
    ref.current.rotation.y+=delta*10 //incresing speed multiply
    // ref.current.position.z+=delta // this moves toward the user
    //for come back we can use sin function or cos function
    ref.current.position.z = Math.sin(state.clock.elapsedTime)*2
    
  })
  return(
      <mesh position={position} ref={ref}>
          <boxGeometry args={size}/> 
          {/* args={[2, 2, 4]} */}
          {/* <meshBasicMaterial/> */}
          <meshStandardMaterial color={color}/> 
          {/* above matarial want light for that we have to give the light above the mesh */}
      </mesh>
  )
}

function App() {
  
  return (
    <div className='canvas'>
     <Canvas>
        <directionalLight position={[0, 0, 2]} />
        <ambientLight />
        {/* group is used to group them  */}
        {/* <group position={[-3, -1, 0]}>
        <Cube position={[1, 0, 0]} size={[1, 1, 1]} color={'green'} />
        <Cube position={[-1, 0, 0]} size={[1, 1, 1]} color={'red'} />
        <Cube position={[-1, 2, 0]} size={[1, 1, 1]} color={'blue'} />
        <Cube position={[1, 2, 0]} size={[1, 1, 1]} color={'yellow'} />
        </group> */}

        {/* animation */}
        {/* <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={'purple'} /> */}

        {/* work on sphere */}
        {/* <Sphere position={[0, 0, 0]} size={[1, 30, 30]} color={'hotpink'}/> */}
        {/* <Torus position={[-4, 0, 0]} size={[0.8, 0.2, 50, 50]} color={'hotpink'}/>
        <TorusKnot position={[4, 2, 0]} size={[0.5, 0.1, 1000, 50]} color={'red'}/> */}

        {/* INTERACTIONS */}
        <Sphere position={[0, 0, 0]} size={[1, 30, 30]} color={'hotpink'}/>
     </Canvas>
     </div>
  )
}

export default App
