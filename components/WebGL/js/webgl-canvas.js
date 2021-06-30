import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Stage } from './stage';
import desk01 from '~/assets/models/desk01.gltf';

const lightColor = {
  top: 0xffffff,
  bottom: 0xeeeeee,
};

const materialColor = [0xcc7f82, 0x9dbe5f];

export class WebglCanvas {
  constructor(props) {
    // define
    this.stage = null;

    // set
    this.stage = new Stage();
    this.stage.init(props.$canvas);
  }

  init() {
    const light01 = new THREE.HemisphereLight(
      lightColor.top,
      lightColor.bottom,
      1.0
    );
    this.stage.scene.add(light01);

    const light02 = new THREE.DirectionalLight(0xffffff, 0.5);
    light02.position.set(1000, 1000, 0);
    this.stage.scene.add(light02);

    const floorGeo = new THREE.PlaneBufferGeometry(1, 1);
    const floorMat = new THREE.MeshLambertMaterial({
      color: 0xe0c477,
      side: THREE.DoubleSide,
    });

    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.position.y = -240;
    floorMesh.rotation.x = Math.PI / 2;
    floorMesh.scale.multiplyScalar(10000);

    this.stage.scene.add(floorMesh);

    const loader = new GLTFLoader();

    loader.load(desk01, (data) => {
      const gltf = data;
      const object = gltf.scene;
      object.scale.set(500, 500, 500);

      for (const child of object.children) {
        if (child.material) {
          switch (child.material.name) {
            case 'material01':
              child.material.color = new THREE.Color(materialColor[0]);
              break;
            case 'material02':
              child.material.color = new THREE.Color(materialColor[1]);
              break;
            default:
              break;
          }
        }
      }

      this.stage.scene.add(object);
    });

    loader.load(require('~/assets/models/chair01.gltf').default, (data) => {
      const gltf = data;
      const object = gltf.scene;
      object.scale.multiplyScalar(700);
      object.position.set(-200, 0, -700);
      object.rotation.y = 20;

      for (const child of object.children) {
        if (child.material) {
          switch (child.material.name) {
            case 'material01':
              child.material.color = new THREE.Color(materialColor[0]);
              break;
            case 'material02':
              child.material.color = new THREE.Color(materialColor[1]);
              break;
            default:
              break;
          }
        }
      }

      this.stage.scene.add(object);
    });

    this.loop();
  }

  loop() {
    requestAnimationFrame(this.loop.bind(this));

    this.stage.loop();
  }
}
