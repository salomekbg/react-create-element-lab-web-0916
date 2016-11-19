let h1 = React.createElement('h1', {}, 'An Awesome Person');
let p = React.createElement('p', {}, 'Who is learning React');
let li1 = React.createElement('li', {}, 'JavaScript');
let li2 = React.createElement('li', {}, 'React');
let li3 = React.createElement('li', {}, 'Movies');
let li4 = React.createElement('li', {}, 'Ice cream');
let ul = React.createElement('ul', {}, [li1, li2, li3, li4]);

const meInReact =React.createElement('div', {className: 'me'}, [h1, p, ul]);

ReactDOM.render(meInReact, document.getElementById('main'));
