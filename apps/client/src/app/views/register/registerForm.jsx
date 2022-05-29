import React from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerActions } from './register.actions';
import './register.scss';
import * as yup from 'yup';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
function RegisterForm() {
  const dispatch = useDispatch();
  const isloading = useSelector((state) => state.registerState.isLoading);
  const navigate = useNavigate();
  // const chat = useSelector((state)=>state.chat)
  return (
    <Formik
      initialValues={{
        firstName: 'barry',
        lastName: 'allen',
        email: 'barry@dc.com',
        password: '12345678',
      }}
      onSubmit={(values) => {
        dispatch(registerActions.register(values, navigate));
      }}
      validationSchema={yup.object().shape({
        firstName: yup
          .string()
          .matches(/^[a-zA-Z]+$/, 'Only letters allowed')
          .max(25, 'Sorry you exceeding the limit')
          .required('Please, provide your first name!'),
        lastName: yup
          .string()
          .matches(/^[a-zA-Z]+$/, 'Only letters allowed')
          .max(25, 'Sorry you exceeding the limit')
          .required('Please, provide your last name!'),

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
        <div className="register_card">
          <div className="form_field">
            <InputField
              placeholder="First Name"
              name="firstName"
              type="text"
              value={values.firstName}
              onChange={handleChange('firstName')}
              onBlur={() => {
                setFieldTouched('firstName');
              }}
            />
            {touched.firstName && errors.firstName ? (
              <p>{errors.firstName}</p>
            ) : null}
          </div>
          <div className="form_field">
            <InputField
              placeholder="Last Name"
              name="lastName"
              type="text"
              value={values.lastName}
              onChange={handleChange('lastName')}
              onBlur={() => {
                setFieldTouched('lastName');
              }}
            />
            {touched.lastName && errors.lastName ? (
              <p>{errors.lastName}</p>
            ) : null}
          </div>
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

export default RegisterForm;
