"use client"

import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signupSchema } from '../../schema/FormSchema';
import Image from 'next/image';

export default function SignupComponent() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <Formik
            initialValues={{ email: "", password: "", passwordConfirm: "" }}
            validationSchema={signupSchema}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    setSubmitting(true);
                    // dispatch(signupWithEmailAndPassword(values.email, values.password));
                    // navigate("/auth/login");
                    setSubmitting(false);
                } catch (error) {
                    console.log(error);
                    setSubmitting(false);
                }
            }}
        >

            {({ isSubmitting }) => (
                <Form>
                    <div className="flex flex-col mb-4">
                        <label className="mb-1" htmlFor="email">
                            Correo Electrónico
                        </label>
                        <div className="">
                            <Field
                                className="w-full p-1 border-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600/90"
                                type="email"
                                name="email"
                            />
                        </div>
                        <ErrorMessage
                            className="text-red-500"
                            name="email"
                            component="div"
                        />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="mb-1" htmlFor="password">
                            Contraseña
                        </label>
                        <div className="flex items-center">
                            <Field
                                className="w-full p-1 mr-1 border-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600/90"
                                type={showPassword ? "text" : "password"}
                                name="password"
                            />
                            {showPassword ? (
                                <Image src={"https://img.icons8.com/external-neu-royyan-wijaya/512/external-eyes-neu-interface-neu-royyan-wijaya.png"} className="cursor-pointer" onClick={() => setShowPassword(!showPassword)} width={24} height={24} alt="Show Password" />
                            ) : (
                                <Image src={"https://img.icons8.com/external-neu-royyan-wijaya/512/external-eyes-neu-interface-neu-royyan-wijaya-2.png"} className="cursor-pointer" onClick={() => setShowPassword(!showPassword)} width={24} height={24} alt="Hide Password" />
                            )}
                        </div>
                        <ErrorMessage
                            className="text-red-500"
                            name="password"
                            component="div"
                        />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label className="mb-1" htmlFor="passwordConfirm">
                            Confirmar Contraseña
                        </label>
                        <div className="flex items-center">
                            <Field
                                className="w-full p-1 mr-1 border-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600/90"
                                type={showConfirmPassword ? "text" : "password"}
                                name="passwordConfirm"
                            />
                            {showConfirmPassword ? (
                                <Image src={"https://img.icons8.com/external-neu-royyan-wijaya/512/external-eyes-neu-interface-neu-royyan-wijaya.png"} className="cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)} width={24} height={24} alt="Show Password" />
                            ) : (
                                <Image src={"https://img.icons8.com/external-neu-royyan-wijaya/512/external-eyes-neu-interface-neu-royyan-wijaya-2.png"} className="cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)} width={24} height={24} alt="Hide Password" />
                            )}
                        </div>
                        <ErrorMessage
                            className="text-red-500"
                            name="passwordConfirm"
                            component="div"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ripple-surface-light400"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Registrarse
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
