import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';

import styles from './styles.module.css'

export default function BlogLayout(props) {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  return (
    <Layout {...layoutProps}>
      <div className={clsx(styles.blogLayout, 'container', 'margin-vert--lg')}>
        <div className="row">
          <BlogSidebar sidebar={sidebar}/>
          <main
            className={clsx('col', {
              'col--6': hasSidebar,
              'col--9 col--offset-1': !hasSidebar,
            })}
            itemScope
            itemType="http://schema.org/Blog">
            {children}
          </main>
          {toc && <div className={clsx(styles.blogToc, 'col', 'col--3')}>{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
