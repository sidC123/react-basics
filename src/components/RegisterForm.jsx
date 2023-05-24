/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from '@material-ui/core';
import * as Yup from "yup";

const RegisterForm = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
    }

    const phoneRegEx = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3, "first name must be atleast 3 characters long").max(15, "first name must be atmost 15 characters long").required('This field is required'),
        lastName: Yup.string().min(3, "last name must be atleast 3 characters long").max(15, "Last name  must be atmost 15 characters long").required('This field is required'),
        email: Yup.string().email("Kindly add a valid email address").required("This field is required"),
        phone: Yup.string().matches(phoneRegEx, "this is not a valid phone number").min(10, "phone number must be 10 digit long").required("Phone number is a required field"),
        password: Yup.string().min(8, 'Minimun character should be 8').required('Required'),
    })


    const onSubmit = () => {
        alert("hey")
    }

    return (
        <div className='w-50 m-auto'>
            <h1>RegisterForm</h1>

            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                {(props) => (
                    <Form>
                        {console.log(props)}
                        <Field
                            as={TextField}
                            className="w-100"
                            label="First Name"
                            name="firstName"
                            helperText={<ErrorMessage name="firstName" />}
                            error={props.errors.firstName && props.touched.firstName}
                        />
                        <Field
                            as={TextField}
                            className="w-100"
                            label="Last Name"
                            name="lastName"
                            helperText={<ErrorMessage name="firstName" />}
                            error={props.errors.lastName && props.touched.lastName} />
                        <Field
                            as={TextField}
                            className="w-100"
                            label="Email"
                            name="email"
                            helperText={<ErrorMessage name="firstName" />}
                            error={props.errors.email && props.touched.email}
                        />
                        <Field
                            as={TextField}
                            className="w-100"
                            label="Phone"
                            name="phone"
                            helperText={<ErrorMessage name="firstName" />}
                            error={props.errors.phone && props.touched.phone}
                        />
                        <Field
                            as={TextField}
                            className="w-100"
                            label="Password"
                            name="password"
                            helperText={<ErrorMessage name="firstName" />}
                            error={props.errors.password && props.touched.password}
                        />

                        <button type="submit" className='btn btn-success mt-5'>Sign Up</button>
                    </Form>
                )
                }
            </Formik>

        </div>
    )
}

export default RegisterForm