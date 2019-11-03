import React from 'react';
import styled from '@emotion/styled';
import css, { SerializedStyles } from '@emotion/css';
import { Modal, Typography } from 'antd';
import { Global } from '@emotion/core';

export const TRANSPARENT_MODAL_BREAKPOINT = 678;

const BlurredBackgroundStyles = css`
  .global-layout-wrapper {
    filter: blur(8px);
  }
`;

const TransparentModalStyles = css`
  .ant-modal-content {
    box-shadow: none;
    background: transparent;
  }
  display: table;
  .ant-modal-close .anticon {
    color: white;
    font-size: 26px;
  }
  @media screen and (max-width: ${TRANSPARENT_MODAL_BREAKPOINT}px) {
    .ant-modal-body {
      padding: 12px 4px;
    }
  }
`;

const TransparentModalBodyWrapper = styled.div`
  position: relative;
  h1,
  h2,
  h3,
  h4 {
    color: white;
  }
  .spotify-button {
    margin-top: 24px;
  }
  @media screen and (max-width: ${TRANSPARENT_MODAL_BREAKPOINT}px) {
    .spotify-button {
      margin-top: 8px;
      width: 100%;
    }
  }
`;

const TransparentModalTopWrapper = styled.div`
  display: flex;
  img {
    width: 196px;
    height: 196px;
    border-radius: 6px;
    display: inline-block;
  }
  @media screen and (max-width: ${TRANSPARENT_MODAL_BREAKPOINT}px) {
    flex-direction: column;
    margin-top: 24px;
    img {
      width: 96px;
      height: 96px;
      margin: 0 auto;
    }
  }
`;
const TransparentModalTopInnerWrapper = styled.div`
  margin: 0 auto;
  padding-left: 32px;
  h1.ant-typography,
  h3.ant-typography {
    margin: 0;
  }
  h3.ant-typography {
    margin-top: 12px;
    color: rgba(255, 255, 255, 0.8);
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;

  @media screen and (max-width: ${TRANSPARENT_MODAL_BREAKPOINT}px) {
    text-align: center;
    padding: 0;
    margin-top: 12px;
    h1 {
      font-size: 20px;
    }
    h3.ant-typography {
      font-size: 16px;
      margin-top: 0;
    }
  }
`;

const TransparentModalContentWrapper = styled.div`
  h3 {
    width: 100%;
    color: white;
    padding-top: 24px;
  }

  .list-item-content {
    color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: ${TRANSPARENT_MODAL_BREAKPOINT}px) {
    .ant-list-item {
      padding: 8px;
    }
    h3 {
      font-size: 16px;
    }
  }
`;

interface Props {
  onClose: VoidFunction;
  visible: boolean;
  children: React.ReactNode;
  width?: number;
  modalEmotionCss?: SerializedStyles;
  modalBodyEmotionCss?: SerializedStyles;
}
function TransparentModal({
  onClose,
  visible,
  children,
  width = 650,
  modalEmotionCss,
  modalBodyEmotionCss
}: Props) {
  return (
    <Modal
      className="transparent-modal"
      width={width}
      zIndex={20}
      visible={visible}
      css={[TransparentModalStyles, modalEmotionCss]}
      title={false}
      centered={true}
      closable={true}
      footer={false}
      onCancel={onClose}
      maskStyle={{ background: 'rgba(0,0,0,0.9)' }}
    >
      <TransparentModalBodyWrapper css={[modalBodyEmotionCss]}>
        {children}
        {visible && <Global styles={[BlurredBackgroundStyles]} />}
      </TransparentModalBodyWrapper>
    </Modal>
  );
}

interface TopProps {
  title: string;
  subtitle: string;
  image: string;
}
function TransparentModalTop({ title, subtitle, image }: TopProps) {
  return (
    <TransparentModalTopWrapper>
      <img src={image} />
      <TransparentModalTopInnerWrapper>
        <Typography.Title level={1}>{title}</Typography.Title>
        <Typography.Title level={3}>{subtitle}</Typography.Title>
      </TransparentModalTopInnerWrapper>
    </TransparentModalTopWrapper>
  );
}

interface ContentProps {
  children: React.ReactNode;
}
function TransparentModalContent({ children }: ContentProps) {
  return (
    <TransparentModalContentWrapper>{children}</TransparentModalContentWrapper>
  );
}

TransparentModal.Top = TransparentModalTop;
TransparentModal.Content = TransparentModalContent;

export default TransparentModal;
