export function validateCredentials(input) {
    let validationErrors = {};

    if (!isValidEmail(input.email)) {
        validationErrors.email = 'Invalid email address. Hmmmm fix that lol.'
    }

    if (!isValidPassword(input.password)) {
        validationErrors.password = 'Invalid password...... Try again bud.'
    }

    if (Object.keys(validationErrors).length > 0) {
        throw validationErrors;
    }
}