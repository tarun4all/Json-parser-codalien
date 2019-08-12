const loadJsonFile = require('load-json-file');
 
(async () => {
    let temp = {}, jobs = 0;
    let arr = await loadJsonFile('all_lataug10.json');
    arr.forEach((element, idx) => {
        if(element.history) {
            jobs +=1;
        }
        temp[element.urlName] = (temp[element.urlName] ? temp[element.urlName] : 0) + 1;
    })
    console.log(Object.keys(temp).length);
    console.log(`Changes => ${jobs}`);
})();