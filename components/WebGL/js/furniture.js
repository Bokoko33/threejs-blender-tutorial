export class Furniture {
  constructor(model, position, rotation) {
    // define
    this.mesh = model;
    this.defaultPos = position;
    this.scale = 180;
    this.flowSpeed = 0.03;
    this.flowValue = 5;
    this.flowOffset = Math.random() * Math.PI * 2;

    // set
    this.mesh.position.set(
      this.defaultPos.x,
      this.defaultPos.y,
      this.defaultPos.z
    );
    this.mesh.scale.set(this.scale, this.scale, this.scale);
    this.mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  }

  update(time) {
    const angle = time * this.flowSpeed + this.flowOffset;
    this.mesh.position.y = this.defaultPos.y + Math.sin(angle) * this.flowValue;
  }
}
