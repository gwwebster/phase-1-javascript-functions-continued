function saturdayFun(activity = "roller-skate") {
   return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (toDo = "go to the office") {
    return `This Monday, I will ${toDo}.`
}

function wrapAdjective(string = "*") {
    return function (word = "special") {
        return `You are ${string}${word}${string}!`
    }
}

wrapAdjective("%")("a dedicated programmer");