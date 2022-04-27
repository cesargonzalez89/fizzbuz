class ExplorerService{

    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInNode;
    }

    static getAmountOfExplorersByMission(explorers, mission){

    }

    static getExplorersUsernamesByMission(explorers, mission){

    }

}

module.exports = ExplorerService;