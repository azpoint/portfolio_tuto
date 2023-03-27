import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);

    return (
        <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />

            <mesh castShadow receiveShadow scale={2.75}>
                <sphereGeometry />
                <meshStandardMaterial 
                color="#c1e9ff"
                polygonOffset={-5}
                />
                <Decal 
                map={decal}
                position={[0,0,1]}
                rotation={[ 2 * Math.PI, 0, 6.25]}
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }) => {
    return (
        <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;
