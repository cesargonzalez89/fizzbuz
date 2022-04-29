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
});