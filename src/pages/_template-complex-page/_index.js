import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.modules.css';

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p className={styles.container}>
          Support page
        </p>
      </div>
    </Layout>
  );
}

export default Hello;