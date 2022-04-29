const Reader = require("./../fizzbuz/lib/utils/Reader");
const ExplorerService = require("./../fizzbuz/lib/services/ExplorerService");

const explorers = Reader.readJsonFile("explorers.json");
console.log(explorers);

console.log(ExplorerService.filterByMission(explorers, "node"));