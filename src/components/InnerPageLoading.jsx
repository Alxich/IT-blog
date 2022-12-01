import React from "react";
import ContentLoader from "react-content-loader";

function InnerPageLoading(props) {
  return (
    <ContentLoader
      height="1000"
      width="1390"
      viewBox="0 0 1390 900"
      backgroundColor="#f3f3f3"
      foregroundColor="#d6dcff"
      {...props}
    >
      <rect x="15" y="15" rx="4" ry="4" width="1390" height="300"></rect>
      <rect x="15" y="360" rx="2" ry="2" width="1390" height="500"></rect>
      <rect x="15" y="870" rx="2" ry="2" width="170" height="20"></rect>
      <rect x="220" y="870" rx="2" ry="2" width="170" height="20"></rect>
    </ContentLoader>
  );
}

export default InnerPageLoading;
