import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';

export const initGUI = (objectGroup) => {
  // dat gui 作成
  const gui = new GUI();

  const guiParams = {
    groupX: 0,
    groupY: 0,
    groupZ: 0,
    deskX: 0,
    deskY: 0,
    deskZ: 0,
    deskRX: 0,
    deskRY: 0,
    deskRZ: 0,
    chair01X: 0,
    chair01Y: 0,
    chair01Z: 0,
    chair01RX: 0,
    chair01RY: 0,
    chair01RZ: 0,
    chair02X: 0,
    chair02Y: 0,
    chair02Z: 0,
    chair02RX: 0,
    chair02RY: 0,
    chair02RZ: 0,
  };
  gui.add(guiParams, 'groupX', -999, 999).onChange(() => {
    objectGroup.mesh.position.x = guiParams.groupX;
  });
  gui.add(guiParams, 'groupY', -999, 999).onChange(() => {
    objectGroup.defaultPos.y = guiParams.groupY;
  });
  gui.add(guiParams, 'groupZ', -999, 999).onChange(() => {
    objectGroup.mesh.position.z = guiParams.groupZ;
  });
  gui.add(guiParams, 'deskX', -999, 999).onChange(() => {
    objectGroup.children[0].mesh.position.x = guiParams.deskX;
  });
  gui.add(guiParams, 'deskY', -999, 999).onChange(() => {
    objectGroup.children[0].defaultPos.y = guiParams.deskY;
  });
  gui.add(guiParams, 'deskZ', -999, 999).onChange(() => {
    objectGroup.children[0].mesh.position.z = guiParams.deskZ;
  });
  gui.add(guiParams, 'deskRX', 0, 2 * Math.PI, 0.01).onChange(() => {
    objectGroup.children[0].mesh.rotation.x = guiParams.deskRX;
  });
  gui.add(guiParams, 'deskRY', 0, 2 * Math.PI, 0.01).onChange(() => {
    objectGroup.children[0].mesh.rotation.y = guiParams.deskRY;
  });
  gui.add(guiParams, 'deskRZ', 0, 2 * Math.PI, 0.01).onChange(() => {
    objectGroup.children[0].mesh.rotation.z = guiParams.deskRZ;
  });
  gui.add(guiParams, 'chair01X', -999, 999).onChange(() => {
    objectGroup.children[1].mesh.position.x = guiParams.chair01X;
  });
  gui.add(guiParams, 'chair01Y', -999, 999).onChange(() => {
    objectGroup.children[1].defaultPos.y = guiParams.chair01Y;
  });
  gui.add(guiParams, 'chair01Z', -999, 999).onChange(() => {
    objectGroup.children[1].mesh.position.z = guiParams.chair01Z;
  });
  gui.add(guiParams, 'chair01RX', 0, 2 * Math.PI, 0.01).onChange(() => {
    objectGroup.children[1].mesh.rotation.x = guiParams.chair01RX;
  });
  gui.add(guiParams, 'chair01RY', 0, 2 * Math.PI, 0.01).onChange(() => {
    objectGroup.children[1].mesh.rotation.y = guiParams.chair01RY;
  });
  gui.add(guiParams, 'chair01RZ', 0, 2 * Math.PI, 0.01).onChange(() => {
    objectGroup.children[1].mesh.rotation.z = guiParams.chair01RZ;
  });
  gui.add(guiParams, 'chair02X', -999, 999).onChange(() => {
    objectGroup.children[2].mesh.position.x = guiParams.chair02X;
  });
  gui.add(guiParams, 'chair02Y', -999, 999).onChange(() => {
    objectGroup.children[2].defaultPos.y = guiParams.chair02Y;
  });
  gui.add(guiParams, 'chair02Z', -999, 999).onChange(() => {
    objectGroup.children[2].mesh.position.z = guiParams.chair02Z;
  });
  gui.add(guiParams, 'chair02RX', 0, 2 * Math.PI, 0.01).onChange(() => {
    objectGroup.children[2].mesh.rotation.x = guiParams.chair02RX;
  });
  gui.add(guiParams, 'chair02RY', 0, 2 * Math.PI, 0.01).onChange(() => {
    objectGroup.children[2].mesh.rotation.y = guiParams.chair02RY;
  });
  gui.add(guiParams, 'chair02RZ', 0, 2 * Math.PI, 0.01).onChange(() => {
    objectGroup.children[2].mesh.rotation.z = guiParams.chair02RZ;
  });
};
