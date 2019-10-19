import React from 'react';
import GraphqlInlineError from '@components/GraphqlInlineError';
import { Button } from 'antd';

interface Props {
  onRetry: VoidFunction;
  retryLoading: boolean;
}

export default function CreatePlaylistError({ onRetry, retryLoading }: Props) {
  return (
    <GraphqlInlineError>
      <Button onClick={onRetry} loading={retryLoading} type="danger">
        Retry
      </Button>
    </GraphqlInlineError>
  );
}
