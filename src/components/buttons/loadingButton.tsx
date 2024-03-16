import { Check } from '@mui/icons-material';
import { Button, CircularProgress } from '@mui/material';
import { FC } from 'react';

interface LoadingButtonProps {
  loading?: boolean;
  onClick?: () => void;
  isDone?: boolean;
  disabled?: boolean;
  classes?: string;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  sxSize?: React.CSSProperties;
  children?: string;
}

const LoadingButton: FC<LoadingButtonProps> = ({
  loading,
  onClick,
  isDone,
  disabled,
  classes,
  children,
  variant = 'contained',
  sxSize,
}) => {
  const renderButtonContent = () => {
    if (isDone) {
      return <Check />;
    } else if (loading) {
      return <CircularProgress size={20} />;
    } else {
      return children;
    }
  };

  const buttonStyles = {
    backgroundColor: !disabled ? 'bg-gray-300' : '#007DFF',
  };

  return (
    <Button
      className={classes}
      onClick={onClick}
      variant={variant}
      disabled={!disabled}
      sx={{ ...buttonStyles, ...sxSize }}
    >
      {renderButtonContent()}
    </Button>
  );
};

export default LoadingButton;
