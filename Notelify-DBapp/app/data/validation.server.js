/*
*   Server-side validation for the app.
*/
 
// Server-side Login and Create user validation
function isValidEmail(value) {
    return value && value.includes('@');
}
function isValidPassword(value) {
    return value && value.trim().length >= 7;
}
 
export function validateCredentials(input) {
    let validationErrors = {};

    if (!isValidEmail(input.email)) {
        validationErrors.email = 'Invalid email address. Hmmmm fix that lol.'
    }

    if (!isValidPassword(input.password)) {
        validationErrors.password = 'Password is too short. 7 characters is the minimum'
    }

    if (Object.keys(validationErrors).length > 0) {
        throw validationErrors;
    }
}

// Server-side User Input validation
function isValidTitle(value) {
    return value && value.trim().length > 0 && value.trim().length <= 30;
}

function isValiedContent(value) {
    return value
}

export function validateUserInput(input) {
    let validationErrors ={};
    if (!isValidTitle(input.title)) {
        validationErrors.title = "You tried to do something cheeky. Enter a title within 30 characters pls."
    }

    if (!isValiedContent(input.content)) {
        validationErrors.content = "Okay, you need something in your note bud. Put something in there lul."
    }

    if (Object.keys(validationErrors).length > 0) {
        throw validationErrors
    }
}