const colors = [
  {
    base: '#FEFAE3',
    sub1: '#9c4766',
    sub2: '#F6EEC6',
  },
  {
    base: '#8F74E3',
    sub1: '#FFFEFF',
    sub2: '#9D92B1',
  },
  {
    base: '#FFDFC2',
    sub1: '#ff8474',
    sub2: '#714F92',
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
