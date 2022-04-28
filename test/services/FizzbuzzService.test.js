const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Test para ExplorerService", () => {
    test("Prueba 1: se usa score: 1", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const explorer1Validate = FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 
        expect(explorer1Validate).toStrictEqual({name: "Explorer1", score: 1, trick: 1});
    });

    test("Prueba 2: se usa score: 1", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        const explorer3Validate = FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(explorer3Validate).toStrictEqual({name: "Explorer3", score: 3, trick: "FIZZ"});
    });

    test("Prueba 3: se usa score: 5", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        const explorer5Validate = FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"} 
        expect(explorer5Validate).toStrictEqual({name: "Explorer5", score: 5, trick: "BUZZ"});
    });

    test("Prueba 4: se usa score: 15", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        const explorer15Validate = FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(explorer15Validate).toStrictEqual({name: "Explorer15", score: 15, trick: "FIZZBUZZ"});
    });
});