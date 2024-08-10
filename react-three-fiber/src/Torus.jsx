import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Torus =({position, size, color}) => {
    const ref = useRef();
    useFrame((state, delta)=>{
        ref.current.rotation.y+=delta;
        ref.current.position.x = Math.sin(state.clock.elapsedTime)*3

    })
    return (
      <mesh position={position} ref={Ref}>
          <torusGeometry args={size}/>
          <meshStandardMaterial color={color}/>
      </mesh>
    )
  }
  
  export default Torus;