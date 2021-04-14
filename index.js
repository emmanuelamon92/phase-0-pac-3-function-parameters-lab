let introduction = name =>{
    return `Hi, my name is ${name}.`

}

let introductionWithLanguage = (name, language) => {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
    
}

let introductionWithLanguageOptional = (name, language = "JavaScript") => {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`

    // let language = "Python"
    // return `Hi, my name is ${name} and I am learning to program in ${language}.`
}