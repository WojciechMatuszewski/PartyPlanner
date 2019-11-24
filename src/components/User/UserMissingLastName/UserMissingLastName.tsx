import React from 'react';
import styled from '@emotion/styled';
import UserMissingLastNameForm from './UserMissingLastNameForm';
import { Typography } from 'antd';
import useMedia from '@hooks/useMedia';
import axios from 'axios';
import { Colors } from '@shared/styles';

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  @media screen and (max-width: 669px) {
    padding: 12px;
  }
`;

const FormAndTitleWrapper = styled.div`
  width: 400px;
  border-left: 2px dashed #d9d9d9;
  padding-left: 32px;

  h1 {
    border-bottom: 3px solid ${Colors.AntdBlue};
    display: inline-block;
    padding-bottom: 6px;
  }

  @media screen and (max-width: 1000px) {
    border-left: none;
    padding-top: 24px;
    padding-left: 0;
  }

  @media screen and (max-width: 669px) {
    width: 100%;
    padding-left: 0;

    h1 {
      font-size: 21px;
    }
  }
`;

const ImageWrapper = styled.div`
  padding-right: 32px;
  display: grid;
  flex: 1;
  height: 100%;

  img {
    max-height: 600px;
    width: 100%;
    height: 100%;
    min-height: 1px;
    align-self: center;
    display: block;
  }

  @media screen and (max-width: 1000px) {
    height: auto;
    padding: 0;
    flex: 1;
    img {
      height: 100%;
    }
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    height: 100%;
    flex: 0;
    img {
      width: auto;
    }
  }

  @media screen and (max-width: 669px) {
    flex: 0;

    img {
      height: auto;
    }
  }
`;
interface Props {
  jtw: string;
  onDone: VoidFunction;
}
export default function UserMissingLastName({ jtw, onDone }: Props) {
  const isOnMobile = useMedia('(max-width:669px)');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  async function handleSubmit({ lastName }: { lastName: string }) {
    setError(false);
    setLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_ENDPOINT_URL}/users/patchMissingLastName`,
        { lastName },
        {
          headers: {
            Authorization: `Bearer ${jtw}`
          }
        }
      );
      setLoading(false);
      onDone();
    } catch (e) {
      setError(true);
    }
  }

  return (
    <ContentWrapper>
      <ImageWrapper>
        <img src="/static/missing-last-name.svg" />
      </ImageWrapper>
      <FormAndTitleWrapper>
        <Typography.Title>One more thing!</Typography.Title>
        <Typography.Paragraph>
          We could not extract your last name, please provide it below.
        </Typography.Paragraph>
        <UserMissingLastNameForm
          error={error}
          loading={loading}
          isOnMobile={isOnMobile}
          onSubmit={handleSubmit}
        />
      </FormAndTitleWrapper>
    </ContentWrapper>
  );
}
