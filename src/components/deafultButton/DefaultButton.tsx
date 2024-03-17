import { Button, Typography } from '@mui/material';

type propsType = {
  classStyle?: string;
  title?: string;
  icon?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  onClick?: () => void;
  disabled?: boolean;
  submitType?: 'button' | 'submit' | 'reset' | undefined;
};
const DefaultButton = (props: propsType) => {
  const { classStyle, title, icon, variant, onClick, disabled, submitType } =
    props;
  return (
    <Button
      onClick={onClick}
      variant={variant ? variant : 'contained'}
      startIcon={icon}
      disabled={disabled}
      type={submitType}
      className={`${classStyle}  ${
        disabled ? 'opacity-50 bg-gray-300' : 'opacity-100 bg-[#2196F3]'
      } text-[14px]  capitalize   h-[46px] text-[#fff] w-full`}
    >
      <Typography className="text-[#fff]">{title}</Typography>
    </Button>
  );
};

export default DefaultButton;
