import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers';
import './common/style/index.css';
// import Store from './store';
// import { Provider } from 'react-redux';
// ReactDOM.render(
//     <Provider store={Store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );


ReactDOM.render(
    <App />,
    document.getElementById('root')
);