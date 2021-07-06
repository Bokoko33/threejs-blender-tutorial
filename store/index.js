const colors = [
  {
    base: '#9be3de',
    sub1: '#fffdf9',
    sub2: '#ffe3ed',
  },
  {
    base: '#ffc996',
    sub1: '#ff8474',
    sub2: '#583d72',
  },
  {
    base: '#d8e3e7',
    sub1: '#51c4d3',
    sub2: '#126e82',
  },
];

const routeNames = ['index', 'page01', 'page02'];

export const state = () => ({
  currentColors: [],
});

export const mutations = {
  setCurrentColors(state, routeName) {
    let newColors = null;
    const routeNameList = routeNames;

    // ページ数と同じ長さの配色配列から、現在のページの配色を決定
    for (let i = 0; i < routeNameList.length; i++) {
      if (routeName === routeNameList[i]) {
        newColors = colors[i];

        break;
      }
    }

    state.currentColors = newColors;
  },
};
