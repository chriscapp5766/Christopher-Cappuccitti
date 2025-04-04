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