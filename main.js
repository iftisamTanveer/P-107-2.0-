https://teachablemachine.withgoogle.com/models/7lX8WicKO/

function startClassification()
{
    navigator.mediaDevices.getEserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7lX8WicKO/model.json', modelReady);
}

function modelReady()
{
    clssifier.classify(gotResults);
}