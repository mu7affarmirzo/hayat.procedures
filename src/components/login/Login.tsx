import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { Item } from '../../themes/customItems';
import LoadingButton from '../buttons/loadingButton';
import LoginHook from './LoginHook';
import {
  CloseOutlined,
  ErrorOutlineOutlined,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';

const Login = () => {
  const {
    isError,
    values,
    checkInput,
    handleLogin,
    handleChange,
    handleClickShowPassword,
    isLoading,
    isSuccess,
  } = LoginHook();
  return (
    <>
      <Box className="w-[744px] max-w-[774px] h-[100vh] px-[87px] bg-[#fff] flex justify-center  items-center ">
        <Box className="w-full">
          <Typography
            variant={'inherit'}
            component="div"
            className="text-center font-light text-4xl text-black mb-8  font-inter"
          >
            Вход в систему Госпиталь
            <Typography
              variant={'inherit'}
              component="span"
              className="text-[#F1141E] text-[28px] uppercase font-bold leading-normal block font-inter"
            >
              Hayat Medical Center
            </Typography>
          </Typography>

          <FormGroup>
            <FormControl
              error={values.isLoginValid === false}
              className="w-full , mb-7 , mt-4"
              variant="outlined"
            >
              <InputLabel>Логин</InputLabel>
              <OutlinedInput
                type="text"
                label="Логин"
                value={values.email}
                onChange={handleChange('email')}
                onBlur={(e: any) => checkInput(e, 'login')}
              />
              {values.isLoginValid === false && (
                <FormHelperText error>
                  Ведите более трех символов
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              error={values.isPasswordValid === false}
              className="w-full , mb-7 "
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Пароль
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                onChange={handleChange('password')}
                onBlur={(e: any) => checkInput(e, 'password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {values.isPasswordValid === false && (
                <FormHelperText error>
                  Введите более трех символов
                </FormHelperText>
              )}
            </FormControl>

            {isError && (
              <Box className="w-full,text-center , justify-between , bg-red-600 , h-4, px-4 , rounded , mb-4 , flex-1">
                <div className="text-center">
                  <ErrorOutlineOutlined sx={{ color: '#fff' }} />
                  <Typography component={'span'}>
                    Логин или пароль введен неправильно
                  </Typography>
                </div>
                <CloseOutlined sx={{ color: '#fff' }} />
              </Box>
            )}

            <Item
              sx={{
                justifyContent: 'space-between',
                paddingRight: '16px',
                marginBottom: '10px',
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ height: '40px' }}
                    onChange={() => console.log('password')}
                  />
                }
                label="Запомните пароль"
              />

              <Link
                href="#/"
                underline="none"
                color="primary"
                fontWeight="500"
                className="text-sm font-sans uppercase font-normal"
              >
                Забыли пароль ?
              </Link>
            </Item>
            <Item
              sx={{
                justifyContent: 'space-between',
                paddingRight: '16px',
                marginBottom: '30px',
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ height: '10px' }}
                    onChange={() => console.log('password')}
                  />
                }
                label="Дежурный врач"
              />
            </Item>

            <LoadingButton
              sxSize={{ height: '42px' }}
              disabled={
                values.isLoginValid === true && values.isPasswordValid === true
              }
              onClick={handleLogin}
              variant="contained"
              loading={isLoading}
              isDone={isSuccess}
            >
              Вход в систему
            </LoadingButton>
          </FormGroup>
        </Box>
      </Box>
    </>
  );
};

export default Login;
