const Validation = {
  required(value, label = "This field") {
    if (value === null || value === undefined || String(value).trim() === "") {
      return `${label} is required.`;
    }

    return null;
  },

  minLength(value, length, label = "This field") {
    if (!value) {
      return null;
    }

    if (String(value).trim().length < Number(length)) {
      return `${label} must be at least ${length} characters.`;
    }

    return null;
  },

  maxLength(value, length, label = "This field") {
    if (!value) {
      return null;
    }

    if (String(value).trim().length > Number(length)) {
      return `${label} must not exceed ${length} characters.`;
    }

    return null;
  },

  mobile(value, label = "Mobile number") {
    if (!value) {
      return null;
    }

    if (!/^[6-9]\d{9}$/.test(String(value).trim())) {
      return `${label} must be a valid 10 digit mobile number.`;
    }

    return null;
  },

  gstin(value, label = "GSTIN") {
    if (!value) {
      return null;
    }

    const gstin = String(value).trim().toUpperCase();

    if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/.test(gstin)) {
      return `${label} must be a valid GSTIN.`;
    }

    return null;
  },

  validateField(value, rules = {}, label = "This field") {
    let error = null;

    if (rules.required) {
      error = this.required(value, label);
    }

    if (!error && rules.minLength) {
      error = this.minLength(value, rules.minLength, label);
    }

    if (!error && rules.maxLength) {
      error = this.maxLength(value, rules.maxLength, label);
    }

    if (!error && rules.type === "mobile") {
      error = this.mobile(value, label);
    }

    if (!error && rules.type === "gstin") {
      error = this.gstin(value, label);
    }

    return error;
  },

  validate(fields = {}) {
    const errors = {};

    Object.entries(fields).forEach(([name, field]) => {
      const error = this.validateField(
        field.value,
        field.rules,
        field.label || name,
      );

      if (error) {
        errors[name] = error;
      }
    });

    return {
      valid: Object.keys(errors).length === 0,
      errors,
    };
  },
};

export default Validation;
