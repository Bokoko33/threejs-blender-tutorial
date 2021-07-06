import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const lightColor = {
  top: 0xffffff,
  bottom: 0xeeeeee,
};

class Stage {
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
      alpha: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvasSize.w, this.canvasSize.h);

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

    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    const light01 = new THREE.HemisphereLight(
      lightColor.top,
      lightColor.bottom,
      0.8
    );
    this.scene.add(light01);

    const light02 = new THREE.DirectionalLight(0xffffff, 0.2);
    light02.position.set(1000, 1000, 0);
    this.scene.add(light02);
  }

  loop() {
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    // サイズを取得
    const width = window.innerWidth;
    const height = window.innerHeight;

    // レンダラーのサイズを調整する
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);

    // カメラのアスペクト比を正す
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
}

export default new Stage();
