import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUpForm.css";

const SignUpForm = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobileNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid mobile number")
      .required("Mobile Number is required"),
    gender: Yup.string().required("Gender is required"),
    birthday: Yup.date().required("Birthday is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    photo: Yup.mixed().required("Photo is required"),
    department: Yup.string().required("Department is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    gender: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    photo: "",
    department: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="registration-form-container">
      <h2>Student Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <div className="name-fields">
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <Field type="text" name="firstName" />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <Field type="text" name="lastName" />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <Field type="text" name="mobileNumber" />
              <ErrorMessage
                name="mobileNumber"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <Field as="select" name="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="birthday">Birthday:</label>
              <Field type="date" name="birthday" />
              <ErrorMessage name="birthday" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <Field as="select" name="department">
                <option value="">Select Department</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                {/* Add more options as needed */}
              </Field>
              <ErrorMessage
                name="department"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field type="password" name="confirmPassword" />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>

            <br />

            <div className="form-group">
              <label htmlFor="photo">Upload Photo:</label>
              <Field type="file" name="photo" />
              <ErrorMessage name="photo" component="div" className="error" />
            </div>

            <br />

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
