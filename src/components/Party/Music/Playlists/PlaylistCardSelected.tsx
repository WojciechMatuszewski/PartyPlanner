import React from 'react';
import styled from '@emotion/styled';
import posed, { PoseGroup } from 'react-pose';
import { Result, Icon, Button } from 'antd';
import css from '@emotion/css';
import { trapEvent } from '@shared/functionUtils';

const PlaylistCardSelectedWrapper = styled(
  posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 0, opacity: 0 }
  })
)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  z-index: 2;
`;

const ResultStyles = css`
  width: 100%;
  .ant-result-title {
    color: white;
  }
`;

interface Props {
  visible: boolean;
  onDeselect: VoidFunction;
}
export default function PlaylistCardSelected({ visible, onDeselect }: Props) {
  return (
    <PoseGroup>
      {visible && (
        <PlaylistCardSelectedWrapper key={1}>
          <Result
            icon={<Icon type="check-circle" theme="twoTone" />}
            css={ResultStyles}
            title="Playlist Selected"
            extra={[
              <Button
                key={1}
                block={true}
                size="large"
                onClick={trapEvent(onDeselect)}
              >
                Deselect
              </Button>
            ]}
          />
        </PlaylistCardSelectedWrapper>
      )}
    </PoseGroup>
  );
}
