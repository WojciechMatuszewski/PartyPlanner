import React from 'react';
import {
  PartiesListFilters,
  PartiesListDrawerActions,
  PartiesListFilterActions
} from '../PartiesListReducer';
import useMedia from '@hooks/useMedia';
import css from '@emotion/css';
import { Drawer } from 'antd';
import PartiesListFilterDrawerContent from './PartiesListFilterDrawerContent';
import PartiesListFilterDrawerButtons from './PartiesListFilterDrawerButtons';
import { isEqual } from 'lodash';
import { PartiesListContext } from '../PartiesList';

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

interface Props {
  filters: PartiesListFilters;
  drawerVisible: boolean;
  onFiltersChanged: VoidFunction;
}

const PartiesListFilterDrawer: React.FC<Props> = props => {
  const lastFiltersRef = React.useRef<PartiesListFilters>(props.filters);
  const shouldStretchWidth = useMedia('(max-width:450px)');
  const [filtersButtonsState, setFiltersButtonsState] = React.useState<string>(
    'hidden'
  );
  const { dispatch } = React.useContext(PartiesListContext);

  const hasFiltersOnVisible = React.useCallback(
    () => Object.keys(props.filters).length > 0 && props.drawerVisible,
    [props.drawerVisible, props.filters]
  );

  const filtersEqualToLastOpen = React.useCallback(
    () => isEqual(props.filters, lastFiltersRef.current),
    [props.filters]
  );

  // check if there are any filters applied when opening
  React.useEffect(() => {
    if (hasFiltersOnVisible()) {
      setFiltersButtonsState('clear');
    }
    if (!props.drawerVisible) {
      lastFiltersRef.current = props.filters;
    }
    // return () => void (lastFiltersRef.current = props.filters);
  }, [props.drawerVisible]);

  // check if filters changed from the last 'drawerVisible == true' state
  React.useEffect(() => {
    if (Object.keys(props.filters).length === 0) {
      return setFiltersButtonsState('hidden');
    }
    if (Object.keys(props.filters) < Object.keys(lastFiltersRef.current)) {
      return void (lastFiltersRef.current = props.filters);
    }
    if (filtersEqualToLastOpen()) {
      return setFiltersButtonsState('clear');
    }
    setFiltersButtonsState('apply');
  }, [props.filters]);

  return (
    <Drawer
      width={shouldStretchWidth ? '90%' : 400}
      css={[DrawerStyles]}
      visible={props.drawerVisible}
      closable={true}
      onClose={handleDrawerClose}
      maskClosable={true}
      title="Filtering Criteria"
    >
      <PartiesListFilterDrawerContent filters={props.filters} />
      <PartiesListFilterDrawerButtons
        state={filtersButtonsState}
        onApply={handleOnFiltersApply}
        onClear={handleOnFiltersClear}
      />
    </Drawer>
  );

  // **** //
  function handleDrawerClose() {
    dispatch(PartiesListDrawerActions.setDrawerHidden());
    if (!filtersEqualToLastOpen()) {
      props.onFiltersChanged();
    }
  }

  function handleOnFiltersApply() {
    dispatch(PartiesListDrawerActions.setDrawerHidden());
    props.onFiltersChanged();
    // refetch here
  }

  function handleOnFiltersClear() {
    dispatch(PartiesListFilterActions.removeAllFilters());
  }
};

export default PartiesListFilterDrawer;
