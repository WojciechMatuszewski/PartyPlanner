import React from 'react';
import { Formik, Field } from 'formik';
import {
  CreatePartyValidationSchema,
  CreatePartyFormValues,
  MAX_PARTY_DAYS
} from '../CreateParty/CreatePartyForm';
import { PartyDashboardParty } from '@pages/party-dashboard';
import { Form, Icon, Switch, DatePicker, Button, Alert } from 'antd';

import { curry } from 'ramda';
import {
  getFormItemValidateStatus,
  getFormItemError
} from '@shared/formikFieldUtils';
import FormikInputField from '@shared/FormikInputField';

import moment from 'moment';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import CreatePartyLocation from '../CreateParty/CreatePartyLocation';
import CreatePartyColorTintSelect from '../CreateParty/CreatePartyColorTintSelect';

interface Props {
  party: PartyDashboardParty;
  onCancel: VoidFunction;
  loading: boolean;
  error: boolean;
  onSubmit: (values: CreatePartyFormValues) => void;
}

export default function EditPartyForm({
  party,
  onCancel,
  onSubmit,
  error,
  loading
}: Props) {
  const initialValuesRef = React.useRef<CreatePartyFormValues>({
    title: party.title,
    description: party.description,
    colorTint: party.colorTint,
    location: {
      coords: party.location,
      placeName: party.location.placeName
    },
    isPublic: Boolean(party.isPublic),
    date: [moment(party.start), moment(party.end)],
    invitedFriends: []
  });

  const [firstPickedDate, setFirstPickedDate] = React.useState<
    moment.Moment | undefined
  >(initialValuesRef.current.date[0]);

  function shouldDateBeDisabled(
    dateToDecideTo: moment.Moment | undefined
  ): boolean {
    if (!dateToDecideTo || !firstPickedDate) return false;
    return (
      Math.abs(dateToDecideTo.diff(firstPickedDate, 'days')) > MAX_PARTY_DAYS
    );
  }

  function handleDatePickerCalendarChange([firstDate]: RangePickerValue) {
    setFirstPickedDate(firstDate);
  }

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={CreatePartyValidationSchema}
      initialValues={initialValuesRef.current}
    >
      {({ handleSubmit, setFieldValue, errors, touched, values, dirty }) => (
        <Form onSubmit={handleSubmit}>
          <Field
            component={FormikInputField}
            name="title"
            id="title"
            formItemProps={{ label: 'Title', htmlFor: 'title', colon: false }}
            prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
          <Field
            component={FormikInputField}
            name="description"
            type="textArea"
            placeholder="Party description"
            id="description"
            formItemProps={{
              label: 'Description',
              htmlFor: 'description',
              colon: false
            }}
            autoSize={{ minRows: 2 }}
          />
          <Form.Item
            label="Party location"
            colon={false}
            style={{ marginBottom: 0 }}
          >
            <CreatePartyLocation useMobileStyles={true} />
          </Form.Item>
          <Form.Item
            label="Date"
            colon={false}
            hasFeedback={true}
            validateStatus={getFormItemValidateStatus(
              errors as any,
              touched as any,
              'date'
            )}
            help={getFormItemError(errors as any, touched as any, 'date')}
          >
            <DatePicker.RangePicker
              onChange={dates => setFieldValue('date', dates)}
              name="date"
              defaultValue={values.date}
              disabledDate={shouldDateBeDisabled}
              onCalendarChange={handleDatePickerCalendarChange}
              showTime={{ format: 'hh:mm', use12Hours: false }}
              format="YYYY-MM-DD HH:mm"
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item>
            <CreatePartyColorTintSelect
              initialColorTint={initialValuesRef.current.colorTint}
            />
          </Form.Item>

          <Form.Item label="Public" colon={false}>
            <Switch
              title="Public"
              onChange={curry(setFieldValue)('isPublic')}
              checkedChildren={<Icon type="check" />}
              unCheckedChildren={<Icon type="close" />}
              defaultChecked={party.isPublic}
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              disabled={!dirty}
              style={{ marginRight: 12 }}
            >
              Save
            </Button>
            <Button disabled={loading} onClick={onCancel}>
              Cancel
            </Button>
          </Form.Item>
          {error && (
            <Alert type="error" message="Something went wrong, try again" />
          )}
        </Form>
      )}
    </Formik>
  );
}
