"use client"

const ErrorPosts = ({error}: {error: Error}) => {
  return (
      <h2>Yps, {error.message}</h2>
  );
};

export default ErrorPosts;