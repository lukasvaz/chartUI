import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const RoundButton = styled(Button)({
  borderRadius: '100%',
  width: '300px',
  height: '300px',
});

export default function BasicUsage({ onClickHandler }) {
  return (
    <RoundButton
      onClick={() => onClickHandler()}
      variant="outlined"
      color="primary"
    >
      GET
    </RoundButton>
  );
}
