const button = document.querySelector('.count')
function Start() {
    let input = document.querySelector('textarea').value;


    let numLetter = 0, numWord = 0, numSen = 0;

    //    Counting the words 
    let wordCount = input.trim()
    for (let i = 0; i < wordCount.length; i++) {
        if (input[i] == ' ') numWord++;
    }


    for (let i = 0; i < input.length; i++) {
        if (input[i] == '.') numSen++;
    }
    // Maths
    let Rtime = Math.ceil(numWord * 0.25)
    let Stime = Math.ceil(numWord * 0.35)

    // Uthao
    const letter = document.querySelector('.letter')
    const word = document.querySelector('.word')
    const sentence = document.querySelector('.sentence')
    const lowerCase = document.querySelector('.ToLowerCase')
    const UpperCase = document.querySelector('.ToUpperCase')
    const ClearTextArea = document.querySelector('.ClearTextArea')
    const RemoveSpace = document.querySelector('.Remove-Space')
    const ReadingTime = document.querySelector('.Reading-Time')
    const SpeakingTime = document.querySelector('.Speaking-Time')

    letter.innerHTML = `Letters : `
    letter.innerHTML += input.length - numWord
    word.innerHTML = `Words : `
    word.innerHTML += numWord + 1
    sentence.innerHTML = `Sentence : `
    sentence.innerHTML += `${numSen}`
    ReadingTime.innerHTML = `Reading Time : `
    ReadingTime.innerHTML += `${Rtime} s`
    SpeakingTime.innerHTML = `Speaking Time : `
    SpeakingTime.innerHTML += `${Stime} s`


    lowerCase.addEventListener('click', function () {
        let resInput = input.toLowerCase();
        document.querySelector('textarea').value = resInput;
    })
    RemoveSpace.addEventListener('click', function () {
        let resInput = input.trim();
        document.querySelector('textarea').value = resInput;
    })
    UpperCase.addEventListener('click', function () {
        let resInput = input.toUpperCase();
        document.querySelector('textarea').value = resInput;
    })

    ClearTextArea.addEventListener('click', function () {
        let resInput = '';
        document.querySelector('textarea').value = resInput;
    })
}
let btn_backgroundColorn = 1
function buttonColor() {
    const b = document.querySelectorAll('button')
    if (btn_backgroundColorn % 2 == 0) {
        b.style.backgroundColor = '#232E3B'
        b.style.color = '#fff'
    } btn_backgroundColorn++
}
let count = 1
function change() {

    if (count % 2 == 1) {
        document.body.style.backgroundColor = "#eeeeee";

        document.body.style.color = "#212121";
        count++
        buttonColor()
    }
    else if (count % 2 == 0) {
        document.body.style.backgroundColor = "#232E3B";
        document.body.style.color = "#fff";
        count++
        buttonColor()
    }
}
