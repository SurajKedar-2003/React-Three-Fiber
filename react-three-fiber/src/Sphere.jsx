import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

const Sphere =({position, size, color}) => {
    const [isHovered, setisHovered] = useState(false);
    const ref = useRef();
    
    useFrame((state, delta)=>{
        const speed = isHovered ? 2:1
        ref.current.rotation.y+=delta*speed;
        // ref.current.position.z = Math.sin(state.clock.elapsedTime)*3

    })
  return (
    <mesh position={position}
    ref={ref}
    onPointerEnter={(event)=>(event.stopPropagation(), setisHovered(true))}
    onPointerLeave={()=>setisHovered(false)}
    >
        <sphereGeometry args={size}/>
        <meshStandardMaterial color={isHovered?"hotpink" : "lightblue"} wireframe/>
    </mesh>
  )
}

export default Sphere