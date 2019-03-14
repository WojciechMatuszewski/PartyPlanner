// TODO:

describe('CreatePartyLocation', () => {
  it('works', () => undefined);
});

// import React from 'react';
// import { render, fireEvent } from 'react-testing-library';
// import CreatePartyLocation from '@components/Party/CreateParty/CreatePartyLocation';
// import 'react-testing-library/cleanup-after-each';
// import 'jest-dom/extend-expect';
// import { Formik } from 'formik';
// import * as userLocation from '@hooks/useUserLocation';
// import axios from 'axios';

// const fakePosition: Position = {
//   coords: {
//     latitude: 1,
//     longitude: 1,
//     accuracy: 1,
//     altitude: null,
//     altitudeAccuracy: null,
//     heading: null,
//     speed: null
//   },
//   timestamp: 1
// };

// axios.get = jest.fn(() => console.log('get called!'));

// const mockedGetCurrentPosition = jest.fn(successCb => {
//   successCb(fakePosition);
// });
// const noop = () => {};

// const TestForm: React.SFC<any> = p => (
//   <Formik onSubmit={noop} initialValues={{ location: '' }} {...p} />
// );

// describe('Create Party Location', () => {
//   it('Correctly works when navigator gives coords', () => {
//     (global as any).navigator.geolocation = {
//       getCurrentPosition: mockedGetCurrentPosition
//     };
//     const { getByTestId, debug } = render(
//       <TestForm render={() => <CreatePartyLocation />} />
//     );
//     const localizeMeButton = getByTestId('LocalizeMeButton');
//     fireEvent.click(localizeMeButton);
//     // debug();
//   });
// });
