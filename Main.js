/* Selecting the HTML elements */
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArr = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const imgAlts = [
    {"pic1": "Closeup of an eye"},
    {"pic2": "A Rock in the shape of a wave"},
    {"pic3": "White and purple flowers"},
    {"pic4": "A wall from pharoah's tomb"},
    {"pic5": "A closeup of a moth"}
  
  ];

/* Looping through images */
for (let i = 1; i < 6; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${i}.jpg`);
  newImage.setAttribute('alt', imgAlts[i-1]);
  thumbBar.appendChild(newImage);
}


/* Set the src and alt attributes on the large image when a thumbnail is clicked */
thumbBar.addEventListener("click", (event) => {
    displayedImage.setAttribute('src', event.target.getAttribute('src'));
    displayedImage.setAttribute('alt', event.target.getAttribute('alt'));
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});