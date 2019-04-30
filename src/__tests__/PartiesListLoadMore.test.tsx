import React from 'react';
import 'react-testing-library/cleanup-after-each';
import { render, fireEvent } from 'react-testing-library';
import PartiesListLoadMore from '@components/Party/PartiesList/PartiesListLoadMore';

describe('PartiesListLoadMoreButton', () => {
  it('Stays hidden then it suppose to', () => {
    const { container } = render(
      <PartiesListLoadMore
        isLoadingMore={false}
        canLoadMore={false}
        hasResults={false}
        onLoadMoreButtonClick={() => {}}
      />
    );
    expect(container.textContent).toBe('');
    expect(container.innerHTML).toBe('');
  });
  it('Shows spinner when loading more', () => {
    const { getByTestId } = render(
      <PartiesListLoadMore
        isLoadingMore={true}
        canLoadMore={true}
        hasResults={true}
        onLoadMoreButtonClick={() => {}}
      />
    );
    expect(getByTestId('loadMoreSpinner')).toBeDefined();
    expect(getByTestId('loadMoreSpinner').getAttribute('class')).toContain(
      'ant-spin-spinning'
    );
  });
  it('Correctly calls onLoadMore', () => {
    const onLoadMore = jest.fn();
    const { getByTestId } = render(
      <PartiesListLoadMore
        isLoadingMore={false}
        hasResults={true}
        canLoadMore={true}
        onLoadMoreButtonClick={onLoadMore}
      />
    );
    fireEvent.click(getByTestId('loadMoreButton'));
    expect(onLoadMore).toHaveBeenCalled();
  });
});
