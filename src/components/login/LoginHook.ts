import { useNavigate } from 'react-router-dom';
import { useReduxDispatch } from '../../hooks/useReduxHook';
import { useLoginMutation } from '../../store/login/LoginService';
import { ILoginState } from '../../types/authTypes';
import { useCallback, useEffect, useState } from 'react';
import { StorageService } from '../../api/StorageService';
import { loginSuccess } from '../../store/login/LoginSlice';

const LoginHook = () => {
  const [fetchLogin, { isError, data, isSuccess, isLoading }] =
    useLoginMutation();
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState<ILoginState>({
    email: '',
    password: '',
    showPassword: false,
    isLoginValid: null,
    isPasswordValid: null,
    rememberMe: false,
  });

  const parseJwt = (token: string) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    if (data) {
      StorageService.save('token', data.access);
      StorageService.save('refresh', data.refresh);
      console.log(parseJwt(data.access).user_role, 'decode accses');
      dispatch(loginSuccess(data.access));
      console.log(data.access, 'accses token ');
    }
  }, [data, dispatch, navigate]);
  const handleChange =
    (prop: keyof ILoginState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const checkInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {
    const value: string = event.target.value;
    if (type === 'login') {
      setValues({ ...values, isLoginValid: value.length > 3 });
    } else if (type === 'password') {
      setValues({ ...values, isPasswordValid: value.length > 0 });
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  const handleLogin = useCallback(async () => {
    try {
      await fetchLogin({
        email: values.email,
        password: values.password,
      });
    } catch (error) {
      console.log(error);
    }
  }, [fetchLogin, values.email, values.password]);

  return {
    handleChange,
    handleLogin,
    values,
    checkInput,
    isError,
    handleClickShowPassword,
    handleMouseDownPassword,
    isLoading,
    isSuccess,
  };
};
export default LoginHook;
