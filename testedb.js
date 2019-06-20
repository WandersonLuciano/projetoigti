var Sequelize = require('sequelize'),
    sequelize = new Sequelize('lirows','root','root',{
        host:'localhost',
        dialect: 'mariadb',
        port: 3306,
        operatorsAliases: false
    })
    sequelize.authenticate().then(
        function(err){ console.log("Conexão Estabelecida")},
        function(err){ console.log("Erro! Não foi possível Conectar", err)},


    )