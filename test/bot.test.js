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

    test("Prueba 6: Obtener los nombres de los explorers de una mision especifica", () => {
        const explorersInNode = ExplorerController.getExplorersNamesByMission("node");
        expect(explorersInNode).toStrictEqual(["Woopa1", "Woopa2", "Woopa3", "Woopa4", "Woopa5", "Woopa11", "Woopa12", "Woopa13", "Woopa14", "Woopa15"]);
    });

    test("Prueba 7: Obtener una sola cadena con los nombres de los explorers de una mision especifica", () => {
        const explorersInNode = ExplorerController.getExplorersNamesByMissionInChain("node");
        expect(explorersInNode).toBe("Woopa1, Woopa2, Woopa3, Woopa4, Woopa5, Woopa11, Woopa12, Woopa13, Woopa14, Woopa15");
    });
});