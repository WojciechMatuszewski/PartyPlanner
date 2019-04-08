import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import { render, fireEvent, wait, act } from 'react-testing-library';
import LocationTypeahead, {
  UserSearchedLocation
} from '@components/LocationTypeahead';
import * as axiosMapBoxInstanceDep from '@axios/axiosMapBoxInstance';
import { fakeSchedulers } from 'rxjs-marbles/jest';
jest.mock('@axios/axiosMapBoxInstance');
import React from 'react';

const fakeLocation: UserSearchedLocation = {
  placeName: 'fakePlace',
  coords: {
    latitude: 0,
    longitude: 0
  },
  id: '1'
};

// https://stackoverflow.com/questions/53502054/mock-imported-class-in-typescript-with-jest
// whoever answer this deserves an award !
const axiosMapBoxInstanceMock = axiosMapBoxInstanceDep.default as jest.Mocked<
  typeof axiosMapBoxInstanceDep.default
>;

beforeAll(jest.useFakeTimers);

describe('LocationTypeahead', () => {
  it('Correctly applies required props', () => {
    const { getByTestId, container } = render(
      <LocationTypeahead
        onSelect={() => {}}
        disabled={true}
        placeholder={'placeholder'}
      />
    );
    const select = getByTestId('ant-select');
    expect(select).toHaveAttribute('aria-expanded', 'false');
    expect(container.querySelector('.ant-select-disabled')).toBeTruthy();
    expect(
      select.querySelector('.ant-select-selection__placeholder')
    ).toHaveTextContent('placeholder');
  });

  // dropdown items are outside container ?? wtf??
  // TODO:
  // https://github.com/kentcdodds/react-testing-library/issues/243
  it(
    'Calls the API correctly',
    fakeSchedulers(async advance => {
      axiosMapBoxInstanceMock.get.mockRejectedValue({ data: [fakeLocation] });
      const onSelect = jest.fn(() => {});
      const onChange = jest.fn(() => {});
      const { container } = render(
        <LocationTypeahead
          onSelect={onSelect}
          disabled={false}
          onChange={onChange}
          placeholder=""
        />
      );
      const input = container.querySelector('input') as HTMLInputElement;
      act(
        () => void fireEvent.change(input, { target: { value: 'something' } })
      );
      expect(onChange).toHaveBeenCalled();
      expect(onChange).toHaveBeenCalledWith('something');
      await advance(300);
      await wait(() => expect(axiosMapBoxInstanceMock.get).toHaveBeenCalled());
      expect(axiosMapBoxInstanceMock.get).toHaveBeenCalledWith(
        '/geocoding/v5/mapbox.places/something.json?types=address&country=PL&limit=10',
        expect.any(Object)
      );
    })
  );
});
