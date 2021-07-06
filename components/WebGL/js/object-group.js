import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';
import stage from './stage';
import { Furniture } from './furniture';
import deskGLTF from '~/assets/models/desk01.gltf';
import chairGLTF from '~/assets/models/chair01.gltf';

const loader = new GLTFLoader();
const loadModel = (model) => {
  return new Promise((resolve, reject) => {
    loader.load(model, (data) => {
      resolve(data);
    });
  });
};

export class ObjectGroup {
  constructor(marker) {
    // define
    this.mesh = null;
    this.children = [];
    this.marker = null;

    // set
    this.mesh = new THREE.Group();
    this.marker = marker;
  }

  async initModel(colorList) {
    const deskData = await loadModel(deskGLTF);
    const chairData = await loadModel(chairGLTF);
    const deskModel = deskData.scene;
    const chairModel = chairData.scene;

    const desk = new Furniture(
      deskModel,
      new THREE.Vector3(0, -10, 0),
      new THREE.Vector3(0.67, 0.6, 0)
    );
    const chair01 = new Furniture(
      chairModel.clone(),
      new THREE.Vector3(-115, 200, 0),
      new THREE.Vector3(0.7, 2.4, 0)
    );
    const chair02 = new Furniture(
      chairModel.clone(),
      new THREE.Vector3(160, -220, 0),
      new THREE.Vector3(5.7, 5.3, 0)
    );

    // マーカーの位置からグループの位置を決定
    const x = this.marker.getBoundingClientRect().left - window.innerWidth / 2;
    this.mesh.position.x = x;

    // グループにメッシュを追加
    this.mesh.add(desk.mesh);
    this.mesh.add(chair01.mesh);
    this.mesh.add(chair02.mesh);

    // インスタンスとしても持っておく
    this.children = [desk, chair01, chair02];

    // 色をセット
    this.setMaterial(colorList);

    // シーンに追加
    stage.scene.add(this.mesh);
  }

  setMaterial(colorList) {
    // オブジェクトと色のリストを受け取り、オブジェクトの子要素に色を塗り分ける
    for (const model of this.children) {
      for (const child of model.mesh.children) {
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

  update(time) {
    for (const obj of this.children) {
      obj.update(time);
    }
  }

  resetPosition() {
    // マーカーの位置からグループの位置を決定
    const x = this.marker.getBoundingClientRect().left - window.innerWidth / 2;
    this.mesh.position.x = x;
  }

  rotateAnimation() {
    const rotateValue = Math.PI * 4;
    gsap.to(this.mesh.rotation, {
      y: `+=${rotateValue}`,
      duration: 2,
      ease: 'Power2.easeInOut',
    });
  }

  colorChangeAnimation(colorList) {
    for (const model of this.children) {
      for (const child of model.mesh.children) {
        if (child.material) {
          let newColor = null;
          switch (child.material.name) {
            case 'material01':
              newColor = new THREE.Color(colorList.sub1);
              break;
            case 'material02':
              newColor = new THREE.Color(colorList.sub2);
              break;
            default:
              break;
          }

          gsap.to(child.material.color, {
            r: newColor.r,
            g: newColor.g,
            b: newColor.b,
            duration: 2,
            ease: 'Power2.easeInOut',
          });
        }
      }
    }
  }
}
