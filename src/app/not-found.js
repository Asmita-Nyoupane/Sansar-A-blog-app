import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div>Not Found</div>
      <p>Sorry, the page you are lppking for doesn't exist</p>
      <Link href="/">Return Home</Link>
    </>
  );
};

export default NotFound;
