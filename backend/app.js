/*************** Modules Importation ************/
// import express module
const express = require("express");
// import body parser module
const bodyParser = require("body-parser");
/*************** mongoose  Application ************/
//imoport mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');
/*************** Express Application ************/
// creates express application
const app = express();
/*************** models importation  ************/
const Match=require("./models/match")
const Player=require("./models/player")
const Team=require("./models/team");

/*************** App Configuration ************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let matchesTab = [
    { id: 1, scoreOne: 1, scoreTow: 1, teamOne: 'EST', teamTow: 'CA' },
    { id: 2, scoreOne: 5, scoreTow: 1, teamOne: 'RMD', teamTow: 'CA' },
    { id: 3, scoreOne: 2, scoreTow: 7, teamOne: 'EST', teamTow: 'MIL' },
    { id: 4, scoreOne: 3, scoreTow: 1, teamOne: 'JVG', teamTow: 'CA' },
];
let teamsTab = [
    { id: 1, name: "real", owner: "jean", foundation: '1900' },
    { id: 2, name: "MIL", owner: "david", foundation: '1897' },
    { id: 3, name: "PSG", owner: "mohamed", foundation: '1980' },
    { id: 4, name: "BRD", owner: "ziden", foundation: '1678' },
];
let playersTab = [
    { id: 1, name: "cr7", age: "34", nbr: '2', position: 'CA' },
    { id: 2, name: "kroos", age: "34", nbr: '7', position: 'CA' },
    { id: 3, name: "messi", age: "34", nbr: '9', position: 'MIL' },
    { id: 4, name: "haland", age: "34", nbr: '21', position: 'CA' },
];
function generatedId(T) {
    let max;
    if (T.length == 0) {
        max = 0;

    } else {
        max = T[0].id;
        for (let i = 0; i < T.length; i++) {
            if ((T[i].id > max)) {
                max = T[i].id;

            }

        }
    }
    return max + 1;

}

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );

    next();
});


/***************Business Logics ************** */
//search matchs  by score
app.post("/api/matches/search", (req, res) => {
    console.log("here the obj", req.body);
    let matches = [];
    for (let i = 0; i < matchesTab.length; i++) {
        if (matchesTab[i].scoreOne == req.body.scoreOne || matchesTab[i].scoreTow == req.body.scoreTow) {
            matches.push(matchesTab[i]);
        }

    }
    res.json({matches:matches});
});

//business Logic: Add Match
app.post("/api/matches", (req, res) => {
    //instructions
    console.log("Here into BL:Add Match", req.body);
  let matchobj=new Match(req.body);
  matchobj.save();
    res.json({ isAdded: true });
});
//business Logic: Edit Match
app.put("/api/matches", (req, res) => {
    //instructions
    console.log("Here into BL:Edit Match", req.body);
    for (let i = 0; i < matchesTab.length; i++) {
        if (matchesTab[i].id == req.body.id) {
            matchesTab[i] = req.body;
            break;

        }

    }
    res.json({ isEdit: "succes" })
});

//business Logic: Get All Match
app.get("/api/matches", (req, res) => {
    //instructions
    console.log("Here into BL:Get All Match");
    Match.find().then((docs)=>{
        res.json({matches:docs});

    }
    );
  

});
//business Logic: Delete Match By Id
app.delete("/api/matches/:id", (req, res) => {
    //instructions
    console.log("Here into BL:Delete Match By ID", req.params.id);
    for (let i = 0; i < matchesTab.length; i++) {
        if (matchesTab[i].id == req.params.id) {
            matchesTab.splice(i, 1);
            break;


        }
    }
    res.json({ isDeleted: true });


});
//business Logic: Get Match By Id
app.get("/api/matches/:id", (req, res) => {
    //instructions
    console.log("Here into BL:Get Match By ID", req.params.id);
Match.findById(req.params.id).then((doc)=>{
    res.json({ match:doc });
});

});
/********************************** */

//business Logic: Add Team
app.post("/api/teams", (req, res) => {
    //instructions
    console.log("here into BL:Add Team", req.body);
    let teamobj=new Team(req.body);
    teamobj.save();
      res.json({ isAdded: true });
});

//business Logic: Edit Team
app.put("/api/teams", (req, res) => {
    //instructions
    console.log("here into BL:Edit Team", req.body);
    console.log("Here into BL:Edit Match", req.body);
    for (let i = 0; i < teamsTab.length; i++) {
        if (teamsTab[i].id == req.body.id) {
            teamsTab[i] = req.body;
            break;

        }

    }
    res.json({ isEdit: "succes" })
});

//business Logic: Get All Team
app.get("/api/teams", (req, res) => {
    //instructions
    console.log("here into BL:Get All Team");
    Team.find().then((docs)=>{
        res.json({teams:docs});

    }
    );


});
//business Logic: Delete Team By ID
app.delete("/api/teams/:id", (req, res) => {
    //instructions
    console.log("here into BL: Delete Team By ID", req.params.id);
    for (let i = 0; i < teamsTab.length; i++) {
        if (teamsTab[i].id == req.params.id) {
            teamsTab.splice(i, 1);
            break;


        }
    }
    res.json({ isDeleted: true });


});

//business Logic: Get Team By ID
app.get("/api/teams/:id", (req, res) => {
    //instructions
    console.log("here into BL: Get Team By ID", req.params.id);
    Team.findById(req.params.id).then((doc)=>{
        res.json({ team:doc });
    });

});



//business Logic: Add Player
app.post("/api/players", (req, res) => {
    //instructions
    console.log("here into BL:Add Player", req.body);
    let playerobj=new Player(req.body);
    playerobj.save();
      res.json({ isAdded: true });
});

//business Logic: Edit Player
app.put("/api/players", (req, res) => {
    //instructions
    console.log("here into BL:Edit Player", req.body);
    for (let i = 0; i < playersTab.length; i++) {
        if (playersTab[i].id == req.body.id) {
            playersTab[i] = req.body;
            break;

        }

    }
    res.json({ isEdit: "succes" })
});

//business Logic: Get All Player
app.get("/api/players", (req, res) => {
    //instructions
    console.log("here into BL:Get All player");
    Player.find().then((docs)=>{
        res.json({players:docs});

    }
    );
});

//business Logic: Delete Player By ID
app.delete("/api/players:id", (req, res) => {
    //instructions
    console.log("here into BL: Delete Player By ID", req.params.id);
    for (let i = 0; i < playersTab.length; i++) {
        if (playersTab[i].id == req.params.id) {
            playersTab.splice(i, 1);
            break;


        }
    }
    res.json({ isDeleted: true });

});

//business Logic: Get Player By ID
app.get("/api/players/:id", (req, res) => {
    //instructions
    console.log("here into BL: Get Player By ID", req.params.id);
    Player.findById(req.params.id).then((doc)=>{
        res.json({ player:doc });
    });
});


/*************** App Exportation ************/
// make app importable
module.exports = app;