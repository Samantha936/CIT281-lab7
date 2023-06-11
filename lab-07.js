class CustomError extends Error {
    constructor(errors) {
        super(errors);
    }
}
function throwGenericError() {
    throw new Error ("Generic error");
}

function throwCustomError() {
    throw new CustomError("Custom Error");
}

console.log("Force Generic error");
try {
console.log("Generic error try block");
    throwGenericError();
} catch (err) {
    console.log("Generic error catch block");
    console.log("Error:", err.message)
    } finally {
        console.log("Generic Error finally block");
    }

console.log("Force Custom error");
try {
console.log("Custom error try block");
throw CustomError();
} catch (err) {
    console.log("Custom error catch block");
    console.log("CustomError:", err.message);
} finally {
    console.log("Custom error finally block");
}

