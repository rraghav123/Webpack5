/*
As we look at packages like react-native, react-art, react-canvas, and react-three, it's become clear that the beauty and essence of React
has nothing to do with browsers or the DOM.

To make this more clear and to make it easier to build more environments that React can render to, we're splitting the
main react package into two: react and react-dom. Fundamentally, the idea of React has nothing to do with browsers,
 they just happen to be one of many targets for rendering trees of components into.The ReactDOM package has allowed the
  developers to remove any non-essential code from the React package and move it into a more appropriate repository.
*/
import { render } from 'react-dom';
import App from './components/App';

render(<App />, document.getElementById('root'));
