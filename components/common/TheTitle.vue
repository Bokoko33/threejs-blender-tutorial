<template>
  <div ref="title" class="title">
    <p ref="tag" class="title-tag">
      #Three.js #WebGL #blender #3D #creativecoding
    </p>
    <h1 ref="copy" class="title-main">
      <span class="title-main__group">Three.js &amp; Blender</span>
      <span class="title-main__group">Tutorial</span>
    </h1>
    <p ref="sub" class="title-sub">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  data() {
    return {
      titleGroup: [],
    };
  },
  mounted() {
    this.$refs.title.style.color = this.$store.state.currentColors.sub1;

    // タイトルを分割
    this.titleGroup = [
      ...this.$refs.copy.querySelectorAll('.title-main__group'),
    ];
    for (const el of this.titleGroup) {
      el.innerHTML = this.splitText(el);
      el.char = el.querySelectorAll('span');
    }
  },
  methods: {
    changeColor() {
      gsap.to(this.$refs.tag, {
        color: this.$store.state.currentColors.sub1,
        duration: 2,
        ease: 'Power3.easeInOut',
      });
      gsap.to(this.$refs.sub, {
        color: this.$store.state.currentColors.sub1,
        duration: 2,
        ease: 'Power3.easeInOut',
      });
    },
    staggerAnimation() {
      const tl = gsap.timeline();

      tl.to(this.titleGroup[0].char, {
        yPercent: -120,
        stagger: 0.05,
        ease: 'Power3.easeInOut',
      })
        .to(
          this.titleGroup[1].char,
          {
            yPercent: -120,
            stagger: 0.05,
            ease: 'Power3.easeInOut',
          },
          '<+=0.3'
        )
        .to(
          this.titleGroup[0].char,
          {
            opacity: 0,
            duration: 0.01,
          },
          '+=0.01'
        )
        .to(
          this.titleGroup[1].char,
          {
            opacity: 0,
            duration: 0.01,
          },
          '<'
        )
        .to(
          this.titleGroup[0].char,
          {
            yPercent: 120,
            duration: 0.01,
          },
          '+=0.01'
        )
        .to(
          this.titleGroup[1].char,
          {
            yPercent: 120,
            duration: 0.01,
          },
          '<'
        )
        .to(
          this.titleGroup[0].char,
          {
            opacity: 1,
            color: this.$store.state.currentColors.sub1,
            duration: 0.01,
          },
          '+=0.01'
        )
        .to(
          this.titleGroup[1].char,
          {
            opacity: 1,
            color: this.$store.state.currentColors.sub1,
            duration: 0.01,
          },
          '<'
        )
        .to(
          this.titleGroup[0].char,
          {
            yPercent: 0,
            stagger: 0.05,
            ease: 'Power3.easeInOut',
          },
          '+=0.1'
        )
        .to(
          this.titleGroup[1].char,
          {
            yPercent: 0,
            stagger: 0.05,
            ease: 'Power3.easeInOut',
          },
          '<+=0.3'
        );
    },
    splitText(target) {
      const nodes = [...target.childNodes];

      let spanWrapText = '';

      nodes.forEach((node) => {
        if (node.nodeType === 3) {
          // テキストの場合
          const text = node.textContent.replace(/\r?\n/g, ''); // テキストから改行コード削除
          // spanで囲んで連結
          spanWrapText += text.split('').reduce((acc, v) => {
            v = v.replace(' ', '&nbsp;'); // スペースは正規表現で挟まないと幅がなくなる
            return acc + `<span style="display: inline-block;">${v}</span>`;
          }, '');
        } else {
          // テキスト以外
          // <br>などテキスト以外の要素をそのまま連結
          spanWrapText += node.outerHTML;
        }
      });

      return spanWrapText;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  font-family: 'Noto Sans', sans-serif;
  letter-spacing: 0.05em;
}
.title {
  padding-top: 20vh;
  color: var(--current-color-sub1);
}

.title-tag {
  font-size: min(2vw, 18px);
}

.title-main {
  display: block;
  font-size: min(5.8vw, 90px);
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  margin-top: 16px;
}

.title-main__group {
  display: block;
  overflow: hidden;
}

.title-sub {
  position: relative;
  width: min(38vw, 600px);
  line-height: 1.8;
  margin-top: 56px;
  font-size: min(2vw, 18px);

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 4em;
    height: 1px;
    background-color: currentColor;
    left: 0;
    top: -8px;
  }
}
</style>
