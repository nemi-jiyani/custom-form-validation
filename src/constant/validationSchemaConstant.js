export const registerValidationSchema = {
    name: {
        required: {
            value: true,
            message: "Name is required"
        },
        minLength: {
            value: 2,
            message: "Enter at least 2 character"
        }
    },
    email: {
        required: {
            value: true,
            message: "E-mail is required"
        },
        pattern: {
            value: /^[^\$@]+@[^\$@]+\.[^\$@]+$/,
            message: "Please Enter valid Email address"
        }
    },
    password: {
        required: {
            value: true,
            message: "Password is required"
        },
        minLength: {
            value: 6,
            message: "Enter at least 6 character"
        }
    },
    confirmPassword: {
        required: {
            value: true,
            message: "Confirm Password is required"
        },
        match: {
            message: "Passwords do not match"
        }
    }
};
export const loginValidationSchema = {
    email: registerValidationSchema.email,
    password: registerValidationSchema.password
};

