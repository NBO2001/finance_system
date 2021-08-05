
const dataFilterType = (listData, filterTypes=false) => {
    if(!filterTypes.length){return listData;}
    if(!listData.length){ return listData;}
    let tempArray = [];
    listData.map((obj) => {
        filterTypes.map((type) => {
            if(obj.type === type){
                tempArray.push(obj);
            }
            return true;
        })
        
        return true;
    })
    return tempArray;
}

export default dataFilterType;