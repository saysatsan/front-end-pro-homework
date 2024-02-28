const parse = (data) => JSON.parse(data);
const result = [];
const files = ['data.json', 'data2.json'];

let callCounter = 0;

files.forEach((file) =>{
    
    const xmlForData = new XMLHttpRequest();
    xmlForData.open('GET', `${file}`);
    xmlForData.send();
        
    xmlForData.addEventListener('readystatechange', () => {
            
        if(xmlForData.readyState === 4 && xmlForData.status === 200 ){
            const response = parse(xmlForData.responseText);                
            getResult(response.children);                        
        }   
    });         
});

function getResult(data){
    callCounter++;
    data.forEach((item) => result.push(item));

    if(callCounter === files.length) {
        console.log(result);
    }
}
