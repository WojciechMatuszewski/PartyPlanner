import React from 'react';
import { Typography } from 'antd';
import { CirclePicker, ColorResult } from 'react-color';

import css from '@emotion/css';
import { connect, FormikContext } from 'formik';
import { CreatePartyForm } from '../CreateParty';

const TitleStyles = css`
  transition: 0.3s ease color;
  margin-bottom: 0 !important;
`;

const SecondaryStyles = css`
  line-height: 1 !important;
  margin-bottom: 12px !important;
  display: block;
`;

interface Props {
  initialColorTint: string;
}

const CreatePartyColorTintSelect: React.FC<
  {
    formik: FormikContext<CreatePartyForm>;
  } & Props
> = ({ formik: { setFieldValue }, initialColorTint }) => {
  const [currentColor, setCurrentColor] = React.useState<string>(
    initialColorTint
  );

  function handleColorChange(color: ColorResult) {
    setCurrentColor(color.hex);
    setFieldValue('colorTint', color.hex);
  }

  return (
    <React.Fragment>
      <Typography.Title
        level={4}
        css={[
          TitleStyles,
          css`
            color: ${currentColor} !important;
          `
        ]}
      >
        Pick a color
      </Typography.Title>
      <Typography.Text type="secondary" css={[SecondaryStyles]}>
        (This color will be used in your calendar)
      </Typography.Text>
      <CirclePicker
        width="100%"
        onChangeComplete={handleColorChange}
        color={currentColor}
      />
    </React.Fragment>
  );
};

export default connect<Props, CreatePartyForm>(CreatePartyColorTintSelect);
