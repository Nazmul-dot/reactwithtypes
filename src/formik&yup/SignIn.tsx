import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must be more than 2 characters")
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .max(8, 'Must be 8 characters or less')
    .required('Required'),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required('Required'),
  accept: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cpassword: '',
      accept: false
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
      alert("Form submitted successfully!");
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          )}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          )}
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cpassword}
          />
          {formik.touched.cpassword && formik.errors.cpassword && (
            <div style={{ color: "red" }}>{formik.errors.cpassword}</div>
          )}
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="accept"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.accept}
            />
            Accept Terms & Conditions
          </label>
          {formik.touched.accept && formik.errors.accept && (
            <div style={{ color: "red" }}>{formik.errors.accept}</div>
          )}
        </div>

        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
