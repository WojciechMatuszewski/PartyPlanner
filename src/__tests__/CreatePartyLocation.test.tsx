import React from 'react';
import { render } from 'react-testing-library';
import * as Hook from '@hooks/useUserLocation';
import CreatePartyLocation from '@components/Party/CreateParty/CreatePartyLocation';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import { Formik } from 'formik';

// TODO:
// how do i test this thing

const fakePosition: Position = {
  coords: {
    latitude: 1,
    longitude: 1,
    accuracy: 1,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  },
  timestamp: 1
};

const mockedGetCurrentPosition = jest.fn(successCb => {
  successCb(fakePosition);
});
const noop = () => {};

const TestForm: React.SFC<any> = p => (
  <Formik onSubmit={noop} initialValues={{ location: '' }} {...p} />
);

describe('Create Party Location', () => {
  it('Correctly works when navigator gives coords', () => {
    (global as any).navigator.geolocation = {
      getCurrentPosition: mockedGetCurrentPosition
    };
    const spy = jest.spyOn(Hook, 'getAddress');
    spy.mockImplementation(
      ({ latitude, longitude }) =>
        new Promise(() => ({
          data: {
            features: [{ place_name: 'ala', coords: { latitude, longitude } }]
          }
        }))
    );
    render(<TestForm render={() => <CreatePartyLocation />} />);
    spy.mockClear();
  });
});
