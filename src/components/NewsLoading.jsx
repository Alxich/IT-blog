import React from "react";
import ContentLoader from "react-content-loader";

function NewsLoading({ props }) {
  return (
    <ContentLoader
      speed={2}
      width={329}
      height={100}
      viewBox="0 0 329 107"
      backgroundColor="#f3f3f3"
      foregroundColor="#d6dcff"
      {...props}
    >
      <rect x="0" y="15" rx="5" ry="5" width="329" height="10" />
      <rect x="0" y="45" rx="5" ry="5" width="329" height="10" />
      <rect x="0" y="75" rx="5" ry="5" width="329" height="10" />
    </ContentLoader>
  );
}

export default NewsLoading;
