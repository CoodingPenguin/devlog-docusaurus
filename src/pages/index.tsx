import React, { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { differenceInCalendarYears } from "date-fns";
import styles from "./styles.module.css";

function HomepageProfile() {
  const [hover, setHover] = useState(false);
  const yearsSinceBeingDeveloper = differenceInCalendarYears(
    new Date(),
    new Date(2021, 9, 1)
  );
  let developerLevel;
  if (yearsSinceBeingDeveloper <= 1) {
    developerLevel = "신입";
  } else if (yearsSinceBeingDeveloper <= 3) {
    developerLevel = "주니어";
  } else if (yearsSinceBeingDeveloper <= 8) {
    developerLevel = "미드 레벨";
  } else {
    developerLevel = "시니어";
  }

  return (
    <header className={styles.profile}>
      <div className="container">
        <h1 className={styles.profile__title}>코딩하는펭귄</h1>
        <div className={styles.profile__image}>
          <img
            src="https://avatars.githubusercontent.com/u/37505775?v=4"
            alt="GitHub Profile Image"
          />
        </div>
        <p className={styles.profile__description}>
          <span
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover ? <strong>드립 커피</strong> : "☕️"}
          </span>
          와{" "}
          <span
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover ? <strong>그루트</strong> : "🌳"}
          </span>
          {`를 좋아하는 ${developerLevel} 개발자`}
        </p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageProfile />
    </Layout>
  );
}
