import React from 'react';
import { LocalizeMeButtonState } from './CreatePartyLocation';
import LocationTypeahead, {
  UserSearchedLocation
} from '@components/LocationTypeahead';
import { Form } from 'antd';
import { connect, FormikContext } from 'formik';
import { CreatePartyFormValues } from './CreatePartyForm';
import uuid from 'uuid/v4';

interface Props {
  state: LocalizeMeButtonState;
}
const CreatePartySearchForLocation: React.FC<
  Props & { formik: FormikContext<CreatePartyFormValues> }
> = ({ formik, state }) => {
  const [controlledInputValue, setControlledInputValue] = React.useState<
    string
  >('');
  const [controlledResults, setControlledResults] = React.useState<
    UserSearchedLocation[]
  >([]);

  React.useEffect(() => {
    if (state.location.placeName.trim() === '') return;
    setControlledInputValue(state.location.placeName);
    setControlledResults([{ ...state.location, id: uuid() }]);
    formik.setFieldValue('location', state.location);
  }, [state.location]);

  return (
    <Form.Item
      help={
        formik.touched.location && formik.errors.location
          ? 'Please enter a valid location'
          : null
      }
      validateStatus={
        formik.touched.location
          ? formik.errors.location
            ? 'error'
            : 'success'
          : undefined
      }
      hasFeedback={true}
    >
      <LocationTypeahead
        onSelect={onLocationSelected}
        onChange={handleSelectOnChange}
        value={controlledInputValue}
        results={controlledResults}
        placeholder={
          state.loading
            ? 'Searching for your location'
            : 'Search for location...'
        }
        disabled={state.loading}
      />
    </Form.Item>
  );

  function onLocationSelected(
    selectedPlaceName: string,
    currentLocationsInState: UserSearchedLocation[]
  ) {
    const { placeName, coords } = currentLocationsInState.filter(
      place => place.placeName === selectedPlaceName
    )[0];
    formik.setFieldValue('location', { placeName, coords });
  }

  function handleSelectOnChange(value: string | undefined) {
    if (value == null) {
      formik.setFieldValue('location', {});
    }
  }
};

export default connect<Props, CreatePartyFormValues>(
  CreatePartySearchForLocation
);
