export const isValidSubject = (subject) => {
    const nameRegex = /^[A-Za-z\s]{3,100}$/;
    return nameRegex.test(subject);
};

export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidTextArea = (text) => {
    const disallowedCharsRegex = /[<>&]/;

    if (disallowedCharsRegex.test(text)) {
        return false;
    }
    return true;
};
