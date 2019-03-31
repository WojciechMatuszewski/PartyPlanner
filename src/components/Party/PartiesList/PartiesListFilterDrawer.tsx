import React from 'react';
import {
  Drawer,
  Typography,
  Checkbox,
  Input,
  DatePicker,
  Collapse,
  Button,
  Radio
} from 'antd';

import css from '@emotion/css';
import { AntdSecondaryHeadingColor } from '@shared/styles';
import posed, { PoseGroup } from 'react-pose';
import styled from '@emotion/styled';

import useMedia from '@hooks/useMedia';
import { PartiesListContext } from './PartiesList';
import { PartiesListDrawerActions } from './PartiesListReducer';
import RadioGroup from 'antd/lib/radio/group';
import { RadioChangeEvent } from 'antd/lib/radio';

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
interface Props {
  drawerVisible: boolean;
}
const PartiesListFilterDrawer: React.FC<Props> = ({ drawerVisible }) => {
  const shouldStretchWidth = useMedia('(max-width:450px)');

  const [filterButtonsState] = React.useState<string>('clear');

  const { dispatch } = React.useContext(PartiesListContext);

  function handleRadioChange({ target: { value } }: RadioChangeEvent) {
    // dispatch(PartiesListFilterActions.setOrderByFilterValue(value));
    return value;
  }

  function handleDrawerClose() {
    dispatch(PartiesListDrawerActions.setDrawerHidden());
  }

  return (
    <Drawer
      width={shouldStretchWidth ? '90%' : 400}
      css={[DrawerStyles]}
      visible={drawerVisible}
      closable={true}
      onClose={handleDrawerClose}
      maskClosable={true}
      title="Filtering Criteria"
    >
      <Collapse bordered={false} defaultActiveKey={[]}>
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
          key="orderByFilterValue"
        >
          <RadioGroup defaultValue={undefined} onChange={handleRadioChange}>
            <Radio value="start_ASC">Start date ascending</Radio>
            <br />
            <br />
            <Radio value="start_DESC">End date ascending</Radio>
            <br />
            <br />
            <Radio value={'createdAt_ASC'}>Created date ascending</Radio>
            <br />
            <br />
            <Radio value={'createdAt_DESC'}>Created date descending</Radio>
          </RadioGroup>
        </Collapse.Panel>
      </Collapse>
      <FiltersActionButtons state={filterButtonsState} />
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

const FiltersActionButtons: React.FC<{ state: string }> = ({ state }) => {
  return (
    <PoseGroup>
      {state === 'apply' ? (
        <AnimatedFiltersActionButton key={1}>
          <Button block={true} type="primary">
            Apply filters
          </Button>
        </AnimatedFiltersActionButton>
      ) : state === 'clear' ? (
        <AnimatedFiltersActionButton key={2}>
          <Button block={true} type="danger">
            Clear filters
          </Button>
        </AnimatedFiltersActionButton>
      ) : (
        <div />
      )}
    </PoseGroup>
  );
};

export default React.memo(PartiesListFilterDrawer);
