import './App.css'
import { PointerLockControls, Sky } from "@react-three/drei";
import { Ground } from "./components/Ground";
import {Physics} from "@react-three/rapier";
import {Player} from "./components/Player";
import {Cubes} from "./components/Cube.jsx";

function App() {


  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1.5} />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Player />
        <Cubes />
      </Physics>
    </>
  )
}

export default App
