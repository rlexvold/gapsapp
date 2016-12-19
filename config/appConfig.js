function loadConfig(environmentList) {
    let options = require('./default.json')
    let list = environmentList.split(',')
    for (let i = 0; i < list.length; i++) {
        let environment = list[i]
        let fileName = './' + environment + '.json'
        let newOptions = require(fileName)
        options = mergeJSON(options, newOptions)
    }
    return options
}

function mergeJSON(original, newOptions) {
    var mergedJSON = JSON.parse(JSON.stringify(original))

    for (let key in newOptions) {
        if (newOptions[key] && newOptions[key].constructor == Object) {
            mergedJSON[key] = mergeJSON(mergedJSON[key], newOptions[key])
        } else {
            mergedJSON[key] = newOptions[key]
        }
    }
    return mergedJSON
}

module.exports.loadConfig = loadConfig