export const numTemp = num => {
    if (!num) {
        return num
    }
    return `${Math.round(num)}°`
}

export const roseOfWind = num => {
    

    if (num >= 0 && num < 22.5) {
        return "Северный"
    }
    if (num >= 22.5 && num < 67.5) {
        return "Северо-Восточный"
    }
    if (num >= 67.5 && num < 112.5) {
        return "Восточный"
    }
    if (num >= 112.5 && num < 157.5) {
        return "Юго-Восточный"
    }
    if (num >= 157.5 && num < 202.5) {
        return "Южный"
    }
    if (num >= 202.5 && num < 247.5) {
        return "Юго-Западный"
    }
    if (num >= 247.5 && num < 292.5) {
        return "Западный"
    }
    if (num >= 292.5 && num < 337.5) {
        return "Северо-Западный"
    }
    if (num >= 337.5) {
        return "Северный"
    }
    console.log(num)
  
}
   


