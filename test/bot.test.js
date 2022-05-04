const ExplorerController = require("./../lib/controllers/ExplorerController");

describe("Test para bot", () => {
    test("Prueba 5: se usa score: 1", () => {
        const explorer1Validate = ExplorerController.applyValidationInNumber(1);
        expect(explorer1Validate).toBe(1);
    });

    test("Prueba 5: se usa score: 3", () => {
        const explorer3Validate = ExplorerController.applyValidationInNumber(3);
        expect(explorer3Validate).toBe("FIZZ");
    });

    test("Prueba 5: se usa score: 5", () => {
        const explorer5Validate = ExplorerController.applyValidationInNumber(5);
        expect(explorer5Validate).toBe("BUZZ");
    });

    test("Prueba 5: se usa score: 15", () => {
        const explorer15Validate = ExplorerController.applyValidationInNumber(15);
        expect(explorer15Validate).toBe("FIZZBUZZ");
    });
});