/* Develop by Cristian Diaz */
/* Capture event click */
document.querySelector(".js-go").addEventListener('click', function() {
    var input = document.querySelector('input').value;
    clearScn(input);
});
/* and capture of keys (Enter key) */
document.querySelector(".js-userinput").addEventListener('keyup', function(e) {
    var input = document.querySelector('input').value;
    if(e.which === 13) {
        clearScn(input);
    }
});
/* Doing a request to API */
function requ(text) {
    var url = `http://api.giphy.com/v1/gifs/search?q=${text}&api_key=dc6zaTOxFJmzC`;
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load', function(e) {
        var data = e.target.response;
        appendDOM(data);
    });
};
/* Append the results to the DOM, where the page is loaded */
function appendDOM(input) {
    var response = JSON.parse(input);
    var imgUrls = response.data;
    imgUrls.forEach(function(image) {
        var src = image.images.fixed_height.url;
        var container = document.querySelector(".js-container");        
        container.innerHTML += `<img src="${src}" class="container-image">`;
    });
};
/* Clear the screen, and call requ() function to append the result */
function clearScn(input) {
    var container = document.querySelector(".js-container");
    container.innerHTML = "";
    requ(input);
};