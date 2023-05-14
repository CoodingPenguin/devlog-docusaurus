import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import isUrl from "@site/src/utils/isUrl";
import { useWindowSize } from "@docusaurus/theme-common";

type FigureProps = {
  src: string;
  caption?: string;
  captionLink?: string;
  alt?: string;
  hasBorder?: boolean;
  width?: string;
  background?: string;
};

const Figure = ({
  src,
  caption,
  captionLink,
  alt,
  hasBorder = false,
  width,
  background,
}: FigureProps) => {
  const windowSize = useWindowSize();
  const onDevice = windowSize === "mobile";

  return (
    <figure
      style={{
        textAlign: "center",
        marginLeft: 0,
        marginRight: 0,
        width: onDevice ? "100%" : width,
      }}
    >
      <img
        src={useBaseUrl(src)}
        alt={alt || caption}
        style={{
          borderRadius: "8px",
          border: hasBorder ? "1px solid #dfdfdf" : "none",
          padding: hasBorder ? "12px" : "none",
          background: background || "white",
        }}
        width="100%"
      />
      <figcaption
        style={{
          fontSize: "85%",
          fontStyle: "italic",
          opacity: "70%",
          fontWeight: "600",
        }}
      >
        {captionLink && isUrl(captionLink) ? (
          <div>
            <span>출처: </span>
            <a href={captionLink} target="_blank">
              {caption || captionLink}
            </a>
          </div>
        ) : (
          caption
        )}
      </figcaption>
    </figure>
  );
};

export default Figure;
