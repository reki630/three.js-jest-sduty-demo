import React, { Component } from "react";

import * as THREE from "three";

function ThreeDemo() {
  const drawThree = () => {
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    let scene = new THREE.Scene();

    let material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    let geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, 10, 0));
    geometry.vertices.push(new THREE.Vector3(10, 0, 0));

    let line = new THREE.Line(geometry, material);
    scene.add(line);
    renderer.render(scene, camera);
  };

  React.useEffect(() => {
    drawThree();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          drawThree();
        }}
      ></button>
      <div id="demo-content"></div>
      <style jsx>{`
        #demo-content {
          width: 300px;
          height: 300px;
        }
      `}</style>
    </div>
  );
}

// class ThreeDemo extends Component {
//   componentDidMount() {
//     this.drawThree();
//   }

//   drawThree = () => {
//     let renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     let camera = new THREE.PerspectiveCamera(
//       45,
//       window.innerWidth / window.innerHeight,
//       1,
//       500
//     );
//     camera.position.set(0, 0, 100);
//     camera.lookAt(0, 0, 0);

//     let scene = new THREE.Scene();

//     let material = new THREE.LineBasicMaterial({ color: 0x0000ff });
//     let geometry = new THREE.Geometry();
//     geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
//     geometry.vertices.push(new THREE.Vector3(0, 10, 0));
//     geometry.vertices.push(new THREE.Vector3(10, 0, 0));

//     let line = new THREE.Line(geometry, material);
//     scene.add(line);
//     renderer.render(scene, camera);
//   };
//   render() {
//     return (
//       <div>
//         <button
//           onClick={() => {
//             this.drawThree();
//           }}
//         ></button>
//         <div id="demo-content"></div>
//         <style jsx>{`
//           #demo-content {
//             width: 300px;
//             height: 300px;
//           }
//         `}</style>
//       </div>
//     );
//   }
// }
export default ThreeDemo;
