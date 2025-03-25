/**
 *
 * @const {HTMLElement} btn
 * @description Get the button element
 */
const btn = document.getElementById('btn');

/**
 * 
 * @event btn#click
 * @description Fetch the JSON file and display the data
 */
btn.addEventListener('click', function() {
    fetch('./text.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const text = document.getElementById('text');
            text.innerHTML = '';
            for (let key in data) {
                text.innerHTML += `<p>${key}: ${data[key]}</p>`;
                text.style.display = 'block';
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
        });
});