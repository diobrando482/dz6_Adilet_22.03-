//dz6.1
window.onload = function() {
    let count = 0;

    function getData() {
        fetch(`https://jsonplaceholder.typicode.com/todos?_page=${count}`)
            .then(response => response.json())
            .then(data => {
                const dataContainer = document.querySelector('#data-container');
                const task = data[0];
                const taskElem = document.createElement('div');
                taskElem.className = 'task';
                const titleElem = document.createElement('h3');
                titleElem.innerText = task.title;
                const statusElem = document.createElement('p');
                statusElem.className = 'status';
                statusElem.innerText = task.completed ? 'true' : 'false';
                taskElem.appendChild(titleElem);
                taskElem.appendChild(statusElem);
                dataContainer.innerHTML = '';
                dataContainer.appendChild(taskElem);
            })
            .catch(error => {
                console.error('Ошибка получения данных :', error);
            });
    }

    getData();

    document.querySelector('.prev').addEventListener('click', () => {
        count--;
        if (count < 0) {
            count = 0;
        }
        getData();
    });

    document.querySelector('.next').addEventListener('click', () => {
        count++;
        getData();
    });
};
//dz6.2
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))