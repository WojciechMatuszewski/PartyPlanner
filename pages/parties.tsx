import React from 'react';
import styled from '@emotion/styled';
import { Input, Divider, BackTop, Spin } from 'antd';
import PartiesListCardGrid from '@components/Party/PartiesList/PartiesListCardGrid';
import { usePartiesQuery, PartyFragmentFragment } from '@generated/graphql';
import { withApolloAuth } from '@apolloSetup/withApolloAuth';

const PartiesPageWrapper = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 0;
  @media screen and (max-width: 810px) {
    width: 100%;
  }
`;

const PartiesPageGridWrapper = styled.div`
  width: 1100px;
  @media screen and (max-width: 1120px) {
    width: 100%;
    padding: 0 12px;
  }
  @media screen and (max-width: 679px) {
    padding: 0;
  }
`;

const PartiesPageInputWrapper = styled.div`
  width: 800px;
  @media screen and (max-width: 810px) {
    width: 100%;
    padding: 12px;
  }
  margin: 0 auto;
`;

interface Props {
  userId: string;
}
const PartiesPage: React.FC<Props> = ({ userId }) => {
  const { data, loading } = usePartiesQuery({
    variables: {
      where: {
        members_some: {
          id: userId
        }
      }
    }
  });

  if (loading || !data || !data.parties) return <Spin />;

  return (
    <PartiesPageWrapper>
      <PartiesPageInputWrapper>
        <Input.Search placeholder="Search through your parties" size="large" />
        <Divider />
      </PartiesPageInputWrapper>
      <PartiesPageGridWrapper>
        <PartiesListCardGrid
          parties={data.parties as PartyFragmentFragment[]}
        />
      </PartiesPageGridWrapper>
      <BackTop />
    </PartiesPageWrapper>
  );
};

export default withApolloAuth({ userHasToBe: 'authenticated' })(PartiesPage);
