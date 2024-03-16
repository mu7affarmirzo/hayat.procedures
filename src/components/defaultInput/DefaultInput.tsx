import { Box, IconButton, OutlinedInput, Typography } from '@mui/material';
import { FieldValues, UseFormRegister } from 'react-hook-form';
type propsType = {
  register?: UseFormRegister<FieldValues>;
  inputType?: string;
  label?: string;
  labelStyle?: string;
  placeholder?: string;
  containerStile?: string;
  inputStyle?: string;
  icon?: React.ReactNode;
  iconBg?: string;
  onClick?: () => void;
};
const DefaultInput = (props: propsType) => {
  const {
    register,
    inputType,
    label,
    labelStyle,
    placeholder,
    containerStile,
    inputStyle,
    icon,
    iconBg,
    onClick,
  } = props;
  return (
    <Box
      className={`${
        containerStile ? containerStile : 'flex-col w-[100%]'
      } flex gap-1 `}
    >
      {label ? (
        <Typography className={`${labelStyle} text-[14px] text-[#858585] `}>
          {label}
        </Typography>
      ) : null}

      <OutlinedInput
        className={`${
          inputStyle ? inputStyle : 'w-[100%]'
        } bg-[#fff] h-[40px] `}
        {...(register && register(inputType ?? 'default', { required: true }))}
        placeholder={placeholder}
      />

      {icon ? (
        <>
          <IconButton
            onClick={onClick}
            color="primary"
            aria-label="add to shopping cart"
            className={`${
              iconBg ? iconBg : 'bg-[#64B6F7]'
            }  rounded-none  mx-[3px]`}
          >
            {icon}
          </IconButton>
        </>
      ) : null}
    </Box>
  );
};

export default DefaultInput;
