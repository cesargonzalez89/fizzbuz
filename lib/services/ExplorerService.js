class ExplorerService{

    static filterByMission(explorers, mission){
        const explorersInMission= explorers.filter((explorer) => explorer.mission === mission);
        return explorersInMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInMission = this.filterByMission(explorers, mission);
        return explorersInMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInMission = this.filterByMission(explorers, mission);
        const explorersUsernamesByMission = explorersInMission.map((explorer) => explorer.githubUsername);
        return explorersUsernamesByMission;
    }

    static getExplorersNamesByMission(explorers, mission){
        const explorersInMission = this.filterByMission(explorers, mission);
        const explorersNamesByMission = explorersInMission.map((explorer) => explorer.name);
        return explorersNamesByMission;
    }

    static getExplorersNamesByMissionInChain(explorers, mission){
        const explorersNamesByMission = this.getExplorersNamesByMission(explorers, mission);
        let namesInChain = "";
        
        explorersNamesByMission.forEach(explorerName => {
            if(namesInChain.length>0){
                namesInChain = namesInChain.concat(", ", explorerName);
            }else{
                namesInChain = namesInChain.concat("", explorerName);
            }
        });

        return namesInChain;
    }
}

module.exports = ExplorerService;