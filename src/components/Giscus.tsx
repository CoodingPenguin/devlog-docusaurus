import React from 'react';
import Giscus from '@giscus/react';
import {useColorMode} from '@docusaurus/theme-common';

const GiscusComment = () => {
  const {colorMode} = useColorMode();
  const giscusTheme = colorMode === 'light' ? 'light' : 'dark';
  return (
    <div>
      <Giscus
        id='comments'
        repo='CoodingPenguin/devlog'
        repoId='R_kgDOI3OU9Q'
        category='댓글'
        categoryId='DIC_kwDOI3OU9c4CUdU0'
        mapping='pathname'
        reactionsEnabled='0'
        emitMetadata='0'
        inputPosition='bottom'
        strict='0'
        lang='ko'
        theme={giscusTheme}
      />
    </div>
  )
};

export default GiscusComment;