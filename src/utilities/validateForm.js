
export const validateField = (name, value, formData, schema) => {
    const rules = schema[name];
    if (!rules) return "";

    if (rules.required?.value && !value?.trim()) {
        return rules.required.message;
    }
    if (rules.minLength?.value && value.length < rules.minLength.value) {
        return rules.minLength.message;
    }
    if (rules.pattern?.value && !rules.pattern.value.test(value)) {
        return rules.pattern.message;
    }
    if (name === "confirmPassword" && value !== formData.password) {
        return rules.match.message;
    }
    return "";
};

export const validateForm = (formData, schema) => {
    const newErrors = {};

    Object.keys(schema).forEach((field) => {
        const error = validateField(field, formData[field], formData, schema);
        if (error) {
            newErrors[field] = error;
        }
    });


    return newErrors;
}
