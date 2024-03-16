import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Item = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const FlexSpaceBetween = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
