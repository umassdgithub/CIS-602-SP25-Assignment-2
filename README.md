# Assignment 2: Interactive Painting Gallery

This assignment focuses on understanding and manipulating the DOM using JavaScript. You'll work with event listeners, dynamic element creation, and data binding to build an interactive painting gallery. We will use "Delegation + Mouse Event Handling" on list.

## Overview

The application displays a list of painting thumbnails. When a user clicks on a thumbnail, the corresponding large painting is displayed along with its details and highlighted feature boxes.

You are provided with the skeleton of the JavaScript code and will need to complete two main parts:

---

## Complete the missing code

I have removed some part of the code and added ... and the points for each missing part

### Part 1: Make Thumbnails Clickable (40 points)

You need to attach an event listener to the list of thumbnails. When a thumbnail is clicked, the application should display the large version of the painting.

**Complete the following code:**

```javascript
    list.addEventListener('click', (e)=>{
      if(e.target....) (20 points)
      {
        displayPaintingLarge(....)  (20 points)
    }
```

### Part 2: Display Painting Details (60 points)

Implement the displayPaintingLarge function to load and show the selected painting's full image and details, including title, artist, and interactive features.

Complete this function:

```javascript

function displayPaintingLarge(clickedThumbImage) {
    // retrieve the painting id from data-id attribute
    let id = clickedThumbImage...... (10 points);
    // find that painting in array
    const painting = paintings.find( .... (10 points));
    // display the found painting
    document.querySelector("#title").textContent = ..... (10 points)
    document.querySelector("#artist").textContent = ...... (10 points)
    let image = document.createElement('img');
    image.src = ..... (10 points)
    // clear previous features
    figure.innerHTML = ...... (10 points);
    // display all features for this painting
    displayFeatures(painting.features);
    // add painting to image
    figure.appendChild(image);
}
```

### Project Structure

```plaintext
index.html
scripts/
  └── script.js  <-- Complete your JavaScript code here
images/
  ├── small/     <-- Thumbnails
  └── large/     <-- Large painting images
data/
  └── paintings.json  <-- Paintings metadata
style.css
README.md
```


### Project Structure

```plaintext
index.html
scripts/
  └── script.js  <-- Complete your JavaScript code here
images/
  ├── small/     <-- Thumbnails
  └── large/     <-- Large painting images
data/
  └── paintings.json  <-- Paintings metadata
style.css
README.md
```

## Final Look

The finalized code, should look like the screen recording below:

![Final Look](./img/review.gif)