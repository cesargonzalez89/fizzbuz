const Reader = require("./../../../fizzbuz/lib/utils/Reader");

describe("Test para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una mision", () => {
        const explorersRead = Reader.readJsonFile("explorers.json");
        expect(explorersRead.length).toBe(15);
    });
});


