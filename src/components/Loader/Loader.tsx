import styles from '../Loader/Loader.module.css';
import { BallTriangle } from 'react-loader-spinner';
import React from 'react';

export const LoaderSpinner= ():JSX.Element => {
    return (
      <div className={styles.loader}>
        <BallTriangle
          color="#2e2f32"
          height={200}
          width={200}
        />
      </div>
    );
  }