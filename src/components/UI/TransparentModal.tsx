import React from 'react';
import styled from '@emotion/styled';
import css, { SerializedStyles } from '@emotion/css';
import { Modal } from 'antd';
import { Global } from '@emotion/core';

const BlurredBackgroundStyles = css`
  .global-layout-wrapper {
    filter: blur(8px);
  }
`;

const ModalStyles = css`
  .ant-modal-content {
    box-shadow: none;
    background: transparent;
  }
  display: table;
  .ant-modal-close .anticon {
    color: white;
    font-size: 26px;
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
`;

interface Props {
  onClose: VoidFunction;
  visible: boolean;
  children: React.ReactNode;
  width?: number;
  modalEmotionCss?: SerializedStyles;
  modalBodyEmotionCss?: SerializedStyles;
}
export function TransparentModal({
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
      css={[ModalStyles, modalEmotionCss]}
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
