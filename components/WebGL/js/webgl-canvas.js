import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { variable } from './variable';
import { Stage } from './stage';
import desk01 from '~/assets/models/desk01.gltf';

export class WebglCanvas {
  constructor(props) {
    // define
    this.stage = null;
    this.deskMesh = null;
    this.chairMesh = null;

    // set
    this.stage = new Stage();
    this.stage.init(props.$canvas);
    this.stage.renderer.setClearColor(variable.colors[0].base);
  }

  init(routeName) {
    const floorGeo = new THREE.PlaneBufferGeometry(1, 1);
    const floorMat = new THREE.MeshLambertMaterial({
      color: variable.colors[0].base,
      side: THREE.DoubleSide,
    });

    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.position.y = -240;
    floorMesh.rotation.x = Math.PI / 2;
    floorMesh.scale.multiplyScalar(10000);

    this.stage.scene.add(floorMesh);

    const colors = this.getCurrentColors(routeName);
    const loader = new GLTFLoader();

    loader.load(desk01, (data) => {
      const gltf = data;
      this.deskMesh = gltf.scene;
      this.deskMesh.scale.set(500, 500, 500);

      this.setMaterial(this.deskMesh, colors);
      this.stage.scene.add(this.deskMesh);
    });

    loader.load(require('~/assets/models/chair01.gltf').default, (data) => {
      const gltf = data;
      this.chairMesh = gltf.scene;
      this.chairMesh.scale.multiplyScalar(700);
      this.chairMesh.position.set(-200, 0, -700);
      this.chairMesh.rotation.y = 20;

      this.setMaterial(this.chairMesh, colors);
      this.stage.scene.add(this.chairMesh);
    });

    this.loop();
  }

  loop() {
    requestAnimationFrame(this.loop.bind(this));

    this.stage.loop();
  }

  pageTransition(routeName) {
    const newColors = this.getCurrentColors(routeName);

    this.setMaterial(this.deskMesh, newColors);
    this.setMaterial(this.chairMesh, newColors);
  }

  getCurrentColors(routeName) {
    let newColors = null;
    const routeNameList = variable.routeNames;

    for (let i = 0; i < routeNameList.length; i++) {
      if (routeName === routeNameList[i]) {
        newColors = variable.colors[i];

        break;
      }
    }

    return newColors;
  }

  setMaterial(object, colorList) {
    // オブジェクトと色のリストを受け取り、オブジェクトの子要素に色を塗り分ける
    for (const child of object.children) {
      if (child.material) {
        switch (child.material.name) {
          case 'material01':
            child.material.color = new THREE.Color(colorList.sub1);
            break;
          case 'material02':
            child.material.color = new THREE.Color(colorList.sub2);
            break;
          default:
            break;
        }
      }
    }
  }
}
