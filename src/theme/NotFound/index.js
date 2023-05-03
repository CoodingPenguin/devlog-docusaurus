import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import styles from './styles.module.css';


export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <div className={clsx(styles.container)}>
          <div className={styles.background}></div>
          <div className={clsx(styles.title_description)}>
            <div className={clsx(styles.title)}>404</div>
            <div className={clsx(styles.description)}>NOT FOUND</div>
          </div>
        </div>
      </Layout>
    </>
  );
}
