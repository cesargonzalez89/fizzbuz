class ExplorerService{

    static filterByMission(explorers, mission){
        const explorersInMission= explorers.filter((explorer) => explorer.mission === mission);
        return explorersInMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);
        return explorersInMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){

    }

}

module.exports = ExplorerService;