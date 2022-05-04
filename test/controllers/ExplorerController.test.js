const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
    test("Requerimiento 1: Calcular todos los explorers en la mision node", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.length).toBe(10);
    });

    test("Requerimiento 2: Calcular todos los explorers en la mision java", () => {
        const explorersInJava = ExplorerController.getExplorersByMission("java");
        expect(explorersInJava.length).toBe(5);
    });

    test("Requerimiento 3: Obtener los usuarios de los explorers de una mision especifica", () => {
        const usersInNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usersInNode).toStrictEqual(["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]);
    });

    test("Requerimiento 4: Obtener la cantidad de explorers en la mision node", () => {
        const explorersInNode = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorersInNode).toBe(10);
    });

    test("Requerimiento 5: Obtener la cantidad de explorers en la mision java", () => {
        const explorersInJava = ExplorerController.getExplorersAmonutByMission("java");
        expect(explorersInJava).toBe(5);
    });

    test("Prueba 6: se usa score: 1", () => {
        const explorer1Validate = ExplorerController.applyValidationInNumber(1);
        expect(explorer1Validate).toBe(1);
    });

    test("Prueba 7: se usa score: 3", () => {
        const explorer3Validate = ExplorerController.applyValidationInNumber(3);
        expect(explorer3Validate).toBe("FIZZ");
    });

    test("Prueba 8: se usa score: 5", () => {
        const explorer5Validate = ExplorerController.applyValidationInNumber(5);
        expect(explorer5Validate).toBe("BUZZ");
    });

    test("Prueba 9: se usa score: 15", () => {
        const explorer15Validate = ExplorerController.applyValidationInNumber(15);
        expect(explorer15Validate).toBe("FIZZBUZZ");
    });

    test("Requerimiento 5: Obtener los nombres de los explorers de una mision especifica", () => {
        const explorersInNode = ExplorerService.getExplorersNamesByMission("node");
        expect(explorersInNode).toStrictEqual(["Woopa1", "Woopa2", "Woopa3", "Woopa4", "Woopa5", "Woopa11", "Woopa12", "Woopa13", "Woopa14", "Woopa15"]);
    });

    test("Requerimiento 6: Obtener una sola cadena con los nombres de los explorers de una mision especifica", () => {
        const explorersInNode = ExplorerService.getExplorersNamesByMissionInChain("node");
        expect(explorersInNode).toBe("Woopa1, Woopa2, Woopa3, Woopa4, Woopa5, Woopa11, Woopa12, Woopa13, Woopa14, Woopa15");
    });
});