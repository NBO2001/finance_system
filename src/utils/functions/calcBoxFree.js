
const calcBoxFree = (values) => {
     if(!values) return false;

     const desps = values.desp + values.invs;

     const box = (values.recp - desps).toFixed(2);

     return parseFloat(box);
}

export default calcBoxFree;