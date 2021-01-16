import React from 'react';
import styles from './Layout.module.css'


const Layout = (props) => {

    return (
        <React.Fragment>
            <div>Toolbar, Sidedrawer, and Backdrop Components</div>
            <main className={styles.builderArea}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout; 