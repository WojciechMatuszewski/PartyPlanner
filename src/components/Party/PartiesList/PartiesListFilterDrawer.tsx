import React from 'react';
import {
  Drawer,
  Typography,
  Checkbox,
  Input,
  DatePicker,
  Collapse,
  Button
} from 'antd';

import css from '@emotion/css';
import { AntdSecondaryHeadingColor } from '@shared/styles';
import posed, { PoseGroup } from 'react-pose';
import styled from '@emotion/styled';
import { isBrowser } from '@apolloSetup/initApollo';
import useMedia from '@hooks/useMedia';

const DrawerFilterCategoryTitleStyles = css`
  margin-bottom: 0 !important;
  color: ${AntdSecondaryHeadingColor} !important;
`;

const DrawerStyles = css`
  .ant-drawer-body {
    padding: 24px 24px;
  }
  .ant-collapse .ant-collapse-item .ant-collapse-header .anticon {
    left: initial;
    right: 0;
  }
  .ant-collapse-item:last-of-type {
    border: 0;
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    padding: 12px;
    padding-left: 0;
    padding-right: 0;
  }
  .ant-collapse-content-box {
    padding-left: 0;
    padding-right: 0;
  }
  .ant-calendar-picker {
    padding: 0;
  }
  .ant-collapse-content-box > * {
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const PartiesListFilterDrawer: React.FC = () => {
  const shouldStretchWidth = useMedia('(max-width:450px)');

  return (
    <Drawer
      width={shouldStretchWidth ? '90%' : 400}
      css={[DrawerStyles]}
      visible={false}
      closable={true}
      //   onClose={handleDrawerClose}
      maskClosable={true}
      title="Filtering Criteria"
    >
      <Collapse bordered={false}>
        <Collapse.Panel
          header={
            <Typography.Title css={[DrawerFilterCategoryTitleStyles]} level={4}>
              Availability
            </Typography.Title>
          }
          key="1"
        >
          <Checkbox>Show public parties</Checkbox>
          <DatePicker.RangePicker placeholder={['Starts', 'Ends']} />
        </Collapse.Panel>
        <Collapse.Panel
          header={
            <Typography.Title css={[DrawerFilterCategoryTitleStyles]} level={4}>
              Created by
            </Typography.Title>
          }
          key="2"
        >
          <Input placeholder="Enter your friend's name" />
        </Collapse.Panel>
        <Collapse.Panel
          header={
            <Typography.Title css={[DrawerFilterCategoryTitleStyles]} level={4}>
              Sort
            </Typography.Title>
          }
          key="3"
        >
          <Checkbox>Start date ascending</Checkbox>
          <br />
          <Checkbox>End date ascending</Checkbox>
          <br />
          <Checkbox>Created date ascending</Checkbox>
          <br />
          <Checkbox>Created date descending</Checkbox>
        </Collapse.Panel>
      </Collapse>
      <FiltersActionButtons />
    </Drawer>
  );
};

const PosedFilterActionButton = posed.div({
  enter: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: 40,
    opacity: 0
  }
});

const FilterActionButtonStyles = css`
  position: absolute;
  height: 46px;
  bottom: 0;
  width: 100%;
  border: 0;
  left: 0;
  padding: 0;
  button {
    height: 100%;
    padding: 0;
    border-radius: 0;
  }
`;

const AnimatedFiltersActionButton = styled(PosedFilterActionButton)`
  ${FilterActionButtonStyles};
`;

const FiltersActionButtons: React.FC = () => {
  const [visible, setVisible] = React.useState<boolean>();

  React.useEffect(() => {
    if (!isBrowser()) return;
    setInterval(() => {
      setVisible(Math.random() > 0.5);
    }, 2000);
  }, []);

  return (
    <PoseGroup>
      {visible ? (
        <AnimatedFiltersActionButton key={1}>
          <Button block={true} type="primary">
            Apply filters
          </Button>
        </AnimatedFiltersActionButton>
      ) : (
        <AnimatedFiltersActionButton key={2}>
          <Button block={true} type="danger">
            Clear filters
          </Button>
        </AnimatedFiltersActionButton>
      )}
    </PoseGroup>
  );
};

export default PartiesListFilterDrawer;
