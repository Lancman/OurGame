import { RigidBody } from "@react-three/rapier";
import cubes from "../cubes.json";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import floorTexture from "../assets/dirt.jpg";

export const Cubes = () => {
	return cubes.map((coords, index) => <Cube key={index} position={coords} />);
};

const Cube = (props) => {
	const texture = useTexture(floorTexture);
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

	return (
		<RigidBody {...props}>
			<mesh castShadow receiveShadow>
				<boxGeometry />
				<meshStandardMaterial map={texture} color="gray" />
			</mesh>
		</RigidBody>
	);
};
