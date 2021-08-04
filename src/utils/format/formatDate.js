
const formatDate = (date) => {
    if(!date){return false;}
    let dataSplit = date.split("T");
    dataSplit = dataSplit[0].split("-");
    const finalDate = `${dataSplit[2]}/${dataSplit[1]}/${dataSplit[0]}`
    return finalDate;
}

export default formatDate;