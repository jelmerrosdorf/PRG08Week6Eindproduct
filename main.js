import { DecisionTree } from "./libraries/decisiontree.js"

const submitButton = document.getElementById("submit")

function loadSavedModel() {
    fetch("./data/model.json")
        .then((response) => response.json())
        .then((model) => modelLoaded(model))
}

function modelLoaded(model) {
    let decisionTree = new DecisionTree(model)

    let capShape = document.getElementById('cap-shape').value
    let capSurface = document.getElementById('cap-surface').value
    let capColor = document.getElementById('cap-color').value
    let bruises = document.getElementById('bruises').value
    let odor = document.getElementById('odor').value
    let gillAttachment = document.getElementById('gill-attachment').value
    let gillSpacing = document.getElementById('gill-spacing').value
    let gillSize = document.getElementById('gill-size').value
    let gillColor = document.getElementById('gill-color').value
    let stalkShape = document.getElementById('stalk-shape').value
    let stalkRoot = document.getElementById('stalk-root').value
    let stalkSurfaceAboveRing = document.getElementById('stalk-surface-above-ring').value
    let stalkSurfaceBelowRing = document.getElementById('stalk-surface-below-ring').value
    let stalkColorAboveRing = document.getElementById('stalk-color-above-ring').value
    let stalkColorBelowRing = document.getElementById('stalk-color-below-ring').value
    let veilType = document.getElementById('veil-type').value
    let veilColor = document.getElementById('veil-color').value
    let ringNumber = document.getElementById('ring-number').value
    let ringType = document.getElementById('ring-type').value
    let sporePrintColor = document.getElementById('spore-print-color').value
    let habitat = document.getElementById('habitat').value
    

    // make prediction with user input
    let mushroom = {
        'cap-shape': `${capShape}`,
        'cap-surface': `${capSurface}`,
        'cap-color': `${capColor}`,
        'bruises': `${bruises}`,
        'odor': `${odor}`,
        'gill-attachment': `${gillAttachment}`,
        'gill-spacing': `${gillSpacing}`,
        'gill-size': `${gillSize}`,
        'gill-color': `${gillColor}`,
        'stalk-shape': `${stalkShape}`,
        'stalk-root': `${stalkRoot}`,
        'stalk-surface-above-ring': `${stalkSurfaceAboveRing}`,
        'stalk-surface-below-ring': `${stalkSurfaceBelowRing}`,
        'stalk-color-above-ring': `${stalkColorAboveRing}`,
        'stalk-color-below-ring': `${stalkColorBelowRing}`,
        'veil-type': `${veilType}`,
        'veil-color': `${veilColor}`,
        'ring-number': `${ringNumber}`,
        'ring-type': `${ringType}`,
        'spore-print-color': `${sporePrintColor}`,
        'habitat': `${habitat}`
    }

    let prediction = decisionTree.predict(mushroom)
    
    if(prediction === 'p') {
        document.getElementById("result").innerHTML = `This mushroom is poisonous`
    }
    if(prediction === 'e') {
        document.getElementById("result").innerHTML = `This mushroom is edible`
    }
}

submitButton.addEventListener("click", loadSavedModel)