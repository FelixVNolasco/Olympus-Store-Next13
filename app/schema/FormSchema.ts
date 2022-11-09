import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
    email: Yup.string()
        .email("Correo no válido")
        .required("El correo electrónico es requerido"),
    password: Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\_\-\.])(?=.{8,})/,
            "Debe de contener al menos 8 carácteres, una Mayúscula, una minúscula, un número y un carácter especial")
        .required("La contraseña es requerida"),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben de coincidir")
        .required("La confirmación es requerida")
});

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Correo no válido")
        .required("El correo electrónico es requerido"),
    password: Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\_\-\.])(?=.{8,})/,
            "La contraseña es al menos 8 carácteres, una Mayúscula, una minúscula, un número y un carácter especial")
        .required("La contraseña es requerida")
});

export const updateSchema = Yup.object().shape({
    email: Yup.string()
        .email("Correo no válido")
        .required("El correo electrónico es requerido"),
    // urlImage: Yup.string()
    password: Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\_\-\.])(?=.{8,})/,
            "Debe de contener al menos 8 carácteres, una Mayúscula, una minúscula, un número y un carácter especial")
        .required("La contraseña es requerida")
});

export const updateDisplayName = Yup.object().shape({
    displayName: Yup.string()
        .required("El Nombre es requerido")
        .min(2, 'Nombre demasiado corto')
        .max(30, 'Nombre demasiado largo'),
})

export const restorePassword = Yup.object().shape({
    password: Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\_\-\.])(?=.{8,})/,
            "Debe de contener al menos 8 carácteres, una Mayúscula, una minúscula, un número y un carácter especial")
        .required("La contraseña es requerida")
})