import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from './login.actions';
import './login.scss';
import * as yup from 'yup';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
function LoginForm() {
  const dispatch = useDispatch();
  const isloading = useSelector((state) => state.registerState.isLoading);
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        email: 'barry@dc.com',
        password: '12345678',
      }}
      onSubmit={(values) => {
        dispatch(loginActions.login(values, navigate));
      }}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .email()
          .max(50, 'Sorry you exceeding the limit')
          .required(),
        password: yup
          .string()
          .min(6, 'Password must be at least 8 characters')
          //   .matches(
          //     /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          //     'Must contain one UpperCase,one Lowercase,one special character,one number'
          //   )
          .required(),
      })}
    >
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <div className="login_card">
          <div className="form_field">
            <InputField
              placeholder="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              onBlur={() => {
                setFieldTouched('email');
              }}
            />
            {touched.email && errors.email ? <p>{errors.email}</p> : null}
          </div>
          <div className="form_field">
            <InputField
              placeholder="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange('password')}
              onBlur={() => {
                setFieldTouched('password');
              }}
            />
            {touched.password && errors.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>
          <div className="form_field">
            <Button
              disabled={isloading}
              text="submit"
              type="submit"
              onClick={handleSubmit}
            />
          </div>
        </div>
      )}
    </Formik>
  );
}

export default LoginForm;
