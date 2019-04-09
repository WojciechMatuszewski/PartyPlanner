import React from 'react';
import Typeahead from '@hooks/useBetterTypeahead';
import axios from 'axios';

const Test: React.FC = () => {
  async function fetchFunction(val: string) {
    const test: Promise<object> = fetch('');
    const ala = await test;
  }

  function responseTransformFunction(val: object) {
    return val;
  }
  function onResult(result: object) {
    console.log(result);
  }

  function onChangeTransform(e: React.ChangeEvent<HTMLInputElement>) {
    return e.currentTarget.value;
  }

  const { subject } = Typeahead({
    fetchFunction,
    responseTransformFunction,
    onResult,
    onChangeTransformFunction: onChangeTransform
  });
  return <div>works</div>;
};
