import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const TorusKnot =({position, size, color}) => {
    const ref = useRef();
    useFrame((state, delta)=>{
        ref.current.rotation.x+=delta;
        ref.current.position.y = Math.sin(state.clock.elapsedTime)*3

    })
    return (
      <mesh position={position} ref={ref}>
          <torusKnotGeometry args={size}/>
          <meshStandardMaterial color={color}/>
      </mesh>
    )
  }
  
  export default TorusKnot;