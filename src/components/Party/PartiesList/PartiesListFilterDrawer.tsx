import React from 'react';
import {
  Drawer,
  Typography,
  Checkbox,
  Input,
  DatePicker,
  Button,
  Radio
} from 'antd';
import { isEqual } from 'lodash';
import css from '@emotion/css';
import posed, { PoseGroup } from 'react-pose';
import styled from '@emotion/styled';
import useMedia from '@hooks/useMedia';
import { PartiesListContext } from './PartiesList';
import {
  PartiesListDrawerActions,
  PartiesListFilterActions,
  PartiesListFilters
} from './PartiesListReducer';
import { RadioChangeEvent } from 'antd/lib/radio';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const DrawerStyles = css`
  .ant-drawer-body {
    padding: 24px 24px;
    padding-top: 0;
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

const FiltersPaneWrapper = styled.div`
  width: 100%;
  padding-right: 24px;

  box-sizing: content-box;
  h4 {
    margin-top: 18px;
    margin-bottom: 8px;
  }
  & > div:first-of-type {
    margin-top: 26px;
  }
  padding-bottom: 24px;
`;

const FilterPaneCategory = styled.div`
  width: 100%;
  margin-top: 18px;
  margin-bottom: 26px;

  .ant-checkbox-wrapper,
  .ant-radio-wrapper {
    margin-bottom: 8px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  .ant-calendar-picker {
    width: 100%;
  }
`;

interface Props {
  drawerVisible: boolean;
  filters: PartiesListFilters;
}
const PartiesListFilterDrawer: React.FC<Props> = ({
  drawerVisible,
  filters
}) => {
  const shouldStretchWidth = useMedia('(max-width:450px)');
  const [filterButtonsState, setFilterButtonsState] = React.useState<string>(
    'hidden'
  );
  const { dispatch } = React.useContext(PartiesListContext);

  const filtersRef = React.useRef<PartiesListFilters>(filters);

  React.useEffect(() => {
    if (!drawerVisible) return;
    if (Object.keys(filters).length > 0) {
      setFilterButtonsState('clear');
    }
  }, [drawerVisible]);

  React.useEffect(() => {
    if (Object.keys(filters).length === 0) return;
    if (isEqual(filters, filtersRef)) return;
    setFilterButtonsState('apply');
    filtersRef.current = filters;
  }, [filters]);

  function handleRadioChange({ target: { value } }: RadioChangeEvent) {
    dispatch(
      PartiesListFilterActions.addFilter({
        filterName: 'orderBy',
        value,
        variablesType: 'orderBy',
        displayText: `Ordered by ${value}`
      })
    );
  }

  function handleFiltersApply() {}
  function handleFiltersClear() {
    setFilterButtonsState('hidden');
    dispatch(PartiesListFilterActions.removeAllFilters());
  }

  function handleCheckboxChange(e: CheckboxChangeEvent) {
    if (e.target.checked) {
      dispatch(
        PartiesListFilterActions.addFilter({
          filterName: 'public',
          value: true,
          variablesType: 'where',
          displayText: 'Also show public parties'
        })
      );
    } else {
      dispatch(PartiesListFilterActions.removeFilter('public'));
    }
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
      <FiltersPaneWrapper>
        <FilterPaneCategory>
          <Typography.Title level={4} style={{ color: ' #595959' }}>
            Type
          </Typography.Title>
          <Checkbox
            onChange={handleCheckboxChange}
            checked={Boolean(filters['public'])}
          >
            Public
          </Checkbox>
        </FilterPaneCategory>
        <FilterPaneCategory>
          <Typography.Title level={4} style={{ color: ' #595959' }}>
            Sort
          </Typography.Title>
          <Radio.Group
            defaultValue={undefined}
            value={filters['orderBy'] ? filters['orderBy'].value : undefined}
            onChange={handleRadioChange}
          >
            <Radio value="createdAt_ASC">Creation Date</Radio>
            <br />
            <Radio value="start_ASC">Start Date</Radio>
          </Radio.Group>
        </FilterPaneCategory>
        <FilterPaneCategory>
          <Typography.Title level={4} style={{ color: ' #595959' }}>
            Created by
          </Typography.Title>
          <Input.Search placeholder="Search by user name..." />
        </FilterPaneCategory>
        <FilterPaneCategory>
          <Typography.Title level={4} style={{ color: ' #595959' }}>
            Happens at
          </Typography.Title>
          <DatePicker />
        </FilterPaneCategory>
        <FilterPaneCategory>
          <Typography.Title level={4} style={{ color: '#595959' }}>
            At given location
          </Typography.Title>
          <Input.Search placeholder="Search by location name..." />
        </FilterPaneCategory>
      </FiltersPaneWrapper>
      <FiltersActionButtons
        onClear={handleFiltersClear}
        onApply={handleFiltersApply}
        state={filterButtonsState}
      />
    </Drawer>
  );
};

const PosedFilterActionButton = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 100
    }
  },
  exit: {
    y: 40,
    opacity: 0,
    transition: {
      ease: 'linear',
      duration: 100
    }
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
interface FiltersActionButtonsProps {
  state: string;
  onClear: VoidFunction;
  onApply: VoidFunction;
}
const FiltersActionButtons: React.FC<FiltersActionButtonsProps> = ({
  state,
  onClear,
  onApply
}) => {
  return (
    <PoseGroup>
      {state === 'apply' ? (
        <AnimatedFiltersActionButton key={1}>
          <Button onClick={onApply} block={true} type="primary">
            Apply filters
          </Button>
        </AnimatedFiltersActionButton>
      ) : state === 'clear' ? (
        <AnimatedFiltersActionButton key={2}>
          <Button onClick={onClear} block={true} type="danger">
            Clear filters
          </Button>
        </AnimatedFiltersActionButton>
      ) : (
        []
      )}
    </PoseGroup>
  );
};

export default React.memo(PartiesListFilterDrawer);
