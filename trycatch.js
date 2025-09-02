function validateAge(ageInput) {
    try {
        const age = Number(ageInput);

        if (isNaN(age)) {
            throw new Error("Age must be a number");
        }
        if (age < 0) {
            throw new Error("Age cannot be negative");
        }
        console.log("Age is valid");
    } catch (error) {
        console.log(error.message);
    }
}


validateAge("tewnty");  // Output: Age must be a number
validateAge("-5");      // Output: Age cannot be negative
validateAge("25");      // Output: Age is valid