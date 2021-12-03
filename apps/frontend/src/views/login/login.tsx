import { PrimaryButton, Spinner, Text, TextField } from '@fluentui/react';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { RootState } from '../../state';
import { useLoginMutation } from '../../state/api/user';
import { LoginReq } from './types';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

export * from './login-alert';

const Login = () => {
  const account = useSelector((state: RootState) => state.account);
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (userCredential: LoginReq) => {
    try {
      login(userCredential);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (account.isLogin) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account.isLogin]);

  const formik = useFormik<LoginReq>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div
      style={{
        margin: 'auto',
        maxWidth: '480px',
      }}
    >
      <Text variant="large" as="h2" block={true}>
        Login
      </Text>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.username}
          value={formik.values.username}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.password}
          value={formik.values.password}
        />
        <br />
        {isLoading ? (
          <Spinner
            label="Wait, wait..."
            ariaLive="assertive"
            labelPosition="right"
          />
        ) : (
          <PrimaryButton
            text="Login"
            type="submit"
            disabled={isLoading}
          ></PrimaryButton>
        )}
      </form>
    </div>
  );
};

export default Login;
