import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export class Stage {
  constructor() {
    this.$canvas = null;
    this.canvasSize = {
      w: 0,
      h: 0,
    };

    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.controls = null;
  }

  init($canvas) {
    this.$canvas = $canvas;
    this.canvasSize = {
      w: $canvas.clientWidth,
      h: $canvas.clientHeight,
    };

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.$canvas,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvasSize.w, this.canvasSize.h);
    this.renderer.setClearColor(0x000000);

    this.scene = new THREE.Scene();

    const fov = 45;
    const fovRad = (fov / 2) * (Math.PI / 180);
    const dist = this.canvasSize.h / 2 / Math.tan(fovRad);
    this.camera = new THREE.PerspectiveCamera(
      fov,
      this.canvasSize.w / this.canvasSize.h,
      0.1,
      10000
    );
    this.camera.position.z = dist;

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }

  loop() {
    this.renderer.render(this.scene, this.camera);
  }
}
