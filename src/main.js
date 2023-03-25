console.log('34234234234');
import styles from  './styles.module.css'
import styles2 from  './stylestwo.module.scss'
// let a = [1,2,3].map(x => x + 1)
// let b = [1,2,3].at(-2)
// console.log(styles);
// console.log(a,b );

// setTimeout(() => document.body.classList.add(styles2.red), 1)

import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('root')
)
root.render(
    <React.StrictMode>
        <h1>hi!</h1>
    </React.StrictMode>
);
