let fs = require('fs')

module.exports = {
    getSkills : JSON.parse(fs.readFileSync('./src/data/skills.json', 'utf-8')),
    getProyects : JSON.parse(fs.readFileSync('./src/data/proyects.json', 'utf-8')),
    writeSkillJSON : (dataBase) => {
        fs.writeFileSync('./src/data/skills.json', JSON.stringify(dataBase), "utf-8")
    },
    writeProyectJSON : (dataBase) => {
        fs.writeFileSync('./src/data/proyect.json', JSON.stringify(dataBase), "utf-8")
    }
}