import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import UnderConstruction from "@site/src/components/UnderConstruction";

export default function BookReview() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <UnderConstruction />
    </Layout>
  );
}
