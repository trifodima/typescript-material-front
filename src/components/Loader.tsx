import React from 'react';
import Skeleton from "@material-ui/lab/Skeleton";

const Loader = () => {
  return (
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={200} height={200} />
      <Skeleton variant="rect" width={500} height={200} />
    </div>
  );
};

export default Loader;
