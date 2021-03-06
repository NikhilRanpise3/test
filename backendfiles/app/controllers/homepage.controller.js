const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');


exports.highscore = (req, res) => {
    db.sequelize.query("select q.quizname,u.username, max(qs.score) as score from quizscores qs join users u on qs.userid = u.id join quizzes q ON q.id = qs.quizid group by qs.quizid", 
    { type: QueryTypes.SELECT }).then(data=>{
      res.send(data);
    });
      }


      exports.listquizes = (req, res) => {
        db.sequelize.query("select quizname from quizzes where category = ?",
        {replacement: [req.params.category],  type: QueryTypes.SELECT }).then(data=>{
          res.send(data);
        });
          }
    
          