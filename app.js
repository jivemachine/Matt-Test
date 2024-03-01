document.addEventListener("DOMContentLoaded", function () {
    // div image container
    let container = document.createElement("div");
    container.className = "root";

    // image on web
    let img = document.createElement('img');
    img.src = "https://historyhustle.com/wp-content/uploads/2018/09/John-Chapman-Johnny-Appleseed-History-Hustle-Stephanie-Weber-preview.jpg"
    img.style = "height: 500px; width: 500px;";
    container.appendChild(img);

    // image locally
    let localImg = document.createElement('img');
    localImg.src = "image.png";
    localImg.style = "height: 500px; width: 500px";
    container.appendChild(localImg)

    // image in folder
    let folderImg = document.createElement("img");
    folderImg.src = "images/anotherImage.png";
    folderImg.style = "height: 500px; width: 500px;";
    container.appendChild(folderImg)

    // final remarks
    let h1 = document.createElement("h1");
    h1Text = document.createTextNode("Hope this helps!");
    h1.appendChild(h1Text);
    h1.className = "h1Text"
    container.appendChild(h1);

    document.body.appendChild(container);
})