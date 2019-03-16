// import React from 'react';
// import { Layout, Menu } from 'antd';
// import css from '@emotion/css';
// import Link from 'next/link';
// import { withRouter, WithRouterProps } from 'next/router';
// import { ApolloConsumer } from 'react-apollo';
// import cookie from 'cookie';
// const LayoutHeaderStyles = css`
//   padding: 0;

//   box-shadow: 0 2px 8px #f0f1f2;
//   z-index: 10;
// `;

// const AppHeader: React.FC<WithRouterProps> = ({ router }) => {
//   return (
//     <Layout.Header css={LayoutHeaderStyles}>
//       <ApolloConsumer>
//         {client => (
//           <Menu
//             selectedKeys={[router && router.pathname ? router.pathname : '/']}
//             theme="light"
//             mode="horizontal"
//             style={{ lineHeight: '64px' }}
//           >
//             <Menu.Item key="/">
//               <Link href="/">
//                 <a>Home</a>
//               </Link>
//             </Menu.Item>
//             <Menu.Item key="/login">
//               <Link href="/login">
//                 <a>Login</a>
//               </Link>
//             </Menu.Item>
//             <Menu.Item key="/register">
//               <Link href="register">
//                 <a>Register</a>
//               </Link>
//             </Menu.Item>
//             <Menu.Item
//               onClick={async () => {
//                 document.cookie = cookie.serialize('token', '', {
//                   maxAge: -1 // Expire the cookie immediately
//                 });
//                 await client.cache.reset();
//                 router && router.push('/login');
//               }}
//             >
//               Logout
//             </Menu.Item>
//           </Menu>
//         )}
//       </ApolloConsumer>
//     </Layout.Header>
//   );
// };

// export default withRouter(AppHeader);
