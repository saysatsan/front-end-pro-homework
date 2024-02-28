
const containerSlider = document.createElement('div');
containerSlider.style.display = 'flex';
containerSlider.style.justifyContent = 'center';

const prev = document.createElement('button');
prev.innerText = 'Prev';
prev.style.color = 'black';
prev.style.width = '40px';
prev.style.height = '20px';
prev.style.display = 'none';

let image = document.createElement('img');
image.src = 'images/1.svg';
image.style.width = '300px';
image.style.height = '200px';

const next = document.createElement('button');
next.innerText = 'Next';
next.style.color = 'black';
next.style.width = '40px';
next.style.height = '20px';


containerSlider.appendChild(prev);
containerSlider.appendChild(image);
containerSlider.appendChild(next);
document.body.appendChild(containerSlider);

const imgNames = ["1.svg", "2.svg", "3.svg", "4.svg", "5.svg", "6.svg", "7.svg", "8.svg", "9.svg"];

function slider(){
    let indexNow = 0;
    function showButton(){
        if(indexNow === 8){
            next.style.display = 'none';
        } else if(indexNow === 0){
            prev.style.display = 'none';
        }else if(indexNow > 0 && indexNow < 8){
            next.style.display = 'block';
            prev.style.display = 'block';
        }
    }
    showButton();
    
    next.addEventListener('click', () => {        
        if(indexNow < imgNames.length-1){   
            indexNow++;
            let imgName = imgNames[indexNow];  
            image.src = "images/" + imgName;            
            showButton();
                     
        }         
    });

    prev.addEventListener('click', () => { 
        if(indexNow > 0){
            indexNow--;
            let imgName = imgNames[indexNow];  
            image.src = "images/" + imgName;            
            showButton();
        } 
    });
}

slider();
