function generateList(array) {
    
    const ul = document.createElement('ul');

    for (let i of array) {

        const li = document.createElement('li');

        if (Array.isArray(i)) {
            const internalUl = generateList(i);
            li.append(internalUl);
        } else {
            li.textContent = i;
        }

        ul.append(li);
    }

    return ul;
}

const array = [1, [1.1, 1.2], 2, 3, [3.1, 3.2, 3.3], 4];
const output = generateList(array);

const div= document.createElement('div');
div.append(output);
document.body.append(div);

