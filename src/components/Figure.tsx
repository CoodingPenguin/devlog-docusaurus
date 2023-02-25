import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isUrl from '@site/src/utils/isUrl';

type FigureProps = {
  src: string;
  caption: string;
  alt?: string;
}

const Figure = ({src, caption, alt}: FigureProps) => (
  <figure style={{textAlign: 'center', marginLeft: 0, marginRight: 0}}>
    <img src={useBaseUrl(src)} alt={alt || caption} style={{borderRadius: '8px'}} width='100%'/>
    <figcaption style={{fontSize: '85%', fontStyle: 'italic', opacity: '70%', fontWeight: '600'}}>
      {
        isUrl(caption) ? (
          <div>
            <span>출처: </span>
            <a href={caption}>{caption}</a>
          </div>
        ) : caption
      }
    </figcaption>
  </figure>
);

export default Figure;