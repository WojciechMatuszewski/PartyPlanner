import React from 'react';
import GraphqlInlineError from '@components/GraphqlInlineError';
import { Button } from 'antd';

interface Props {
  onRetry: VoidFunction;
  retryLoading: boolean;
}

export default function CreatePlaylistError({ onRetry, retryLoading }: Props) {
  return (
    <GraphqlInlineError title="Could not create your playlist">
      <Button onClick={onRetry} loading={retryLoading} type="danger">
        Retry
      </Button>
    </GraphqlInlineError>
  );
}
