const typeColor = (type) => {
    switch(type) {
        case "normal":
            return "#a4acaf";
        case "bug":
            return "#729f3f";
        case "dark":
            return "#707070";
        case "electric":
            return "#eed535";
        case "fighting":
            return "#d56723";
        case "flying":
            return "#3dc7ef";
        case "grass":
            return "#9bcc50";
        case "ice":
            return "#51c4e7";
        case "poison":
            return "#b97fc9";
        case "rock":
            return "#a38c21";
        case "water":
            return "#4592c4";
        case "steel":
            return "#9eb7b8";
        case "psychic":
            return "#f366b9";
        case "ground":
            return "#f7de3f";
        case "ghost":
            return "#7b62a3";
        case "fire":
            return "#fd7d24";
        case "fairy":
            return "#fdb9e9";
        case "dragon":
            return "#53a4cf";
    }
}

export { typeColor };