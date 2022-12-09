import React from "react";
import ContentLoader from "react-content-loader";

function PostLoading(props) {
  return (
    <ContentLoader
      speed={2}
      height={268}
      viewBox="0 0 1000 268"
      backgroundColor="#f3f3f3"
      foregroundColor="#d6dcff"
      style={{ width: "100%", maxWidth: "1000px" }}
      {...props}
    >
      <rect x="1" y="12" rx="8" ry="8" width="86" height="37"></rect>
      <rect x="820" y="22" rx="8" ry="8" width="83" height="20"></rect>
      <rect x="0" y="75" rx="8" ry="8" width="621" height="32"></rect>
      <rect x="0" y="132" rx="3" ry="3" width="868" height="12"></rect>
      <rect x="0" y="153" rx="3" ry="3" width="768" height="12"></rect>
      <rect x="0" y="175" rx="3" ry="3" width="650" height="12"></rect>
    </ContentLoader>
  );
}

export default PostLoading;
