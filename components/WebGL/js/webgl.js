// import * as THREE from 'three';
// import { gsap } from 'gsap';
import { variable } from '../../common/js/variable';
import stage from './stage';
// import background from './background';
import { ObjectGroup } from './object-group';
// import { initGUI } from './gui';

let resizeTimeoutId = 0;

export class WebGL {
  constructor(props) {
    // define
    this.props = props;
    this.objectGroup = null;
    this.time = 0;

    stage.init(props.$canvas);
  }

  init(routeName, objectMarker) {
    // モデル作成
    const colorList = this.getCurrentColors(routeName);
    this.objectGroup = new ObjectGroup(objectMarker);
    this.objectGroup.initModel(colorList);

    // 背景色設定
    // background.init(colorList);
    // this.props.$wrapper.style.backgroundColor = colorList.base;

    // initGUI(this.objectGroup);

    // リサイズ
    window.addEventListener('resize', () => {
      // setTimeout()がセットされていたら無視
      if (resizeTimeoutId) return;

      resizeTimeoutId = setTimeout(() => {
        this.resize();
        resizeTimeoutId = 0;
      }, 500);
    });

    this.loop();
  }

  loop() {
    requestAnimationFrame(this.loop.bind(this));

    stage.loop();
    this.objectGroup.update(this.time);

    this.time++;
  }

  pageTransition(routeName) {
    const newColors = this.getCurrentColors(routeName);

    // background.changeColor(newColors);
    // gsap.to(this.props.$wrapper, {
    //   backgroundColor: newColors.base,
    //   duration: 2,
    //   ease: 'Power2.easeInOut',
    // });

    this.objectGroup.colorChangeAnimation(newColors);
    this.objectGroup.rotateAnimation();
  }

  getCurrentColors(routeName) {
    let newColors = null;
    const routeNameList = variable.routeNames;

    // ページ数と同じ長さの配色配列から、現在のページの配色を決定
    for (let i = 0; i < routeNameList.length; i++) {
      if (routeName === routeNameList[i]) {
        newColors = variable.colors[i];

        break;
      }
    }

    return newColors;
  }

  resize() {
    stage.resize();

    this.objectGroup.resetPosition();
  }
}
