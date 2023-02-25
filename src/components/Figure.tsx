import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isUrl from '@site/src/utils/isUrl';

type FigureProps = {
  src: string;
  caption?: string;
  captionLink?: string;
  alt?: string;
  hasBorder?: boolean;
}

const Figure = ({src, caption, captionLink, alt, hasBorder = false}: FigureProps) => (
  <figure style={{textAlign: 'center', marginLeft: 0, marginRight: 0}}>
    <img src={useBaseUrl(src)} alt={alt || caption} style={{borderRadius: '8px', border: hasBorder ? '1px solid #dfdfdf' : 'none'}} width='100%'/>
    <figcaption style={{fontSize: '85%', fontStyle: 'italic', opacity: '70%', fontWeight: '600'}}>
      {
        captionLink && isUrl(captionLink) ? (
          <div>
            <span>출처: </span>
            <a href={captionLink}>{caption || captionLink}</a>
          </div>
        ) : caption
      }
    </figcaption>
  </figure>
);

export default Figure;