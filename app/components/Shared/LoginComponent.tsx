"use client"

import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/router';
import { loginSchema } from '../../schema/FormSchema';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginComponent() {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const router = useRouter();
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting }) => {
                try {
                    setSubmitting(true);
                    // dispatch(loginWithEmailAndPassword(values.email, values.password))
                    router.push("/")
                    setSubmitting(false);
                } catch (error) {
                    console.log(error)
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
                                type="text"
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
                                <Image src={"https://img.icons8.com/external-neu-royyan-wijaya/512/external-eyes-neu-interface-neu-royyan-wijaya.png"} className="cursor-pointer" onClick={handleShowPassword} width={24} height={24} alt="Show Password" />
                            ) : (
                                <Image src={"https://img.icons8.com/external-neu-royyan-wijaya/512/external-eyes-neu-interface-neu-royyan-wijaya-2.png"} className="cursor-pointer" onClick={handleShowPassword} width={24} height={24} alt="Hide Password" />
                            )}
                        </div>
                        <ErrorMessage
                            className="text-red-500"
                            name="password"
                            component="div"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ripple-surface-light 400"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                    <div className="flex justify-end mt-1">
                        <Link className="text-blue-800 font-semibold text-right" href="/recover-password">¿Olvidaste tu contraseña?</Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
