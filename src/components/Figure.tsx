import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FigureProps = {
  src: string;
  caption: string;
  alt?: string;
}

const Figure = ({src, caption, alt}: FigureProps) => (
  <figure style={{textAlign: 'center', marginLeft: 0, marginRight: 0}}>
    <img src={useBaseUrl(src)} alt={alt || caption} style={{borderRadius: '8px'}} width='100%'/>
    <figcaption style={{fontSize: '85%', fontStyle: 'italic', color: '#888888', fontWeight: '600'}}>{caption}</figcaption>
  </figure>
);

export default Figure;