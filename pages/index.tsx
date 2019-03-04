import React from 'react';
import styled from '@emotion/styled';
import { ApolloConsumer } from 'react-apollo';
const StyledDiv = styled.div`
  width: 100px;
  background: red;
  height: 100px;
`;

const Index: React.FC = () => {
  return (
    <div>
      <ApolloConsumer>
        {client => {
          console.log(client);
          return <div>Works</div>;
        }}
      </ApolloConsumer>
    </div>
  );
};

export default Index;
