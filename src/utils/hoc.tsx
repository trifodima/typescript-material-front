import React from 'react';

// interface ILayout {
//   Layout(): React.FunctionComponent,
//   Component(): React.FunctionComponent,
// }
const withLayout = (Layout: any, Component: any): any => {
  return () => (
    <Layout>
      <Component />
    </Layout>
  )
};
export default withLayout;
