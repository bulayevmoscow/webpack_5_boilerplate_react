console.log('34234234234');
// import styles from  './styles.module.css'
// import styles2 from  './stylestwo.module.scss'
// let a = [1,2,3].map(x => x + 1)
// let b = [1,2,3].at(-2)
// console.log(styles);
// console.log(a,b );

// setTimeout(() => document.body.classList.add(styles2.red), 1)

import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import image from './image.png'

const root = ReactDOM.createRoot(
    // @ts-ignore
    document.getElementById('root') as HTMLDivElement
)
root.render(
    <React.StrictMode>
        <div>hi!
            <img src={image} alt=""/>
        </div>
    </React.StrictMode>
);
