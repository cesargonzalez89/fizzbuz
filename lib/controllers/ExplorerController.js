const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");
const Reader = require("./../../lib/utils/Reader");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static applyValidationInExplorer(number){
        return FizzbuzzService.applyValidationInExplorer(number);
    }

    static applyValidationInNumber(explorer){
        return FizzbuzzService.applyValidationInNumber(explorer);
    }

    static getExplorersNamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersNamesByMission(explorers, mission);
    }

    static getExplorersNamesByMissionInChain(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersNamesByMissionInChain(explorers, mission);
    }
}

module.exports = ExplorerController;