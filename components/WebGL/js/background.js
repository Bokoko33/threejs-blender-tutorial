import * as THREE from 'three';
// import { gsap } from 'gsap';
import vertexShader from '../glsl/background.vert';
import fragmentShader from '../glsl/background.frag';
import stage from './stage';

class Background {
  constructor() {
    this.mesh = null;
    this.uniforms = null;
  }

  init(colors) {
    this.uniforms = {
      uColor: { value: new THREE.Color(colors.base) },
    };
    const geo = new THREE.PlaneBufferGeometry(2, 2);
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader,
      depthTest: false,
    });

    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.renderOrder = -1;
    stage.scene.add(this.mesh);
  }

  changeColor(colors) {
    //
  }
}

export default new Background();
