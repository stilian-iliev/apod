window.addEventListener("load", () => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(r => r.json())
    .then(data => {
        document.querySelector("#picture").src = data.url;
        document.querySelector("#explanation").textContent = data.explanation;
        document.querySelector("#title").textContent = data.title;
    })
});