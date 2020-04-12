export const validateForm = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
        e.stopPropagation();
        return false;
    } else {
        return true;
    }
};