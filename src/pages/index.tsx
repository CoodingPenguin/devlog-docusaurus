import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './styles.module.css';

function HomepageProfile() {
  return (
    <header className={styles.profile}>
      <div className="container">
        <h1 className={styles.profile__title}>코딩하는펭귄</h1>
        <p className={styles.profile__description}>☕️와 🌳를 좋아하는 개발자</p>
        <div className={styles.profile__image}>
          <img src="https://avatars.githubusercontent.com/u/37505775?v=4" alt="GitHub Profile Image"/>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}
    >
      <HomepageProfile />
    </Layout>
  );
}
