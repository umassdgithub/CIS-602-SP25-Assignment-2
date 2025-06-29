document.addEventListener("DOMContentLoaded", () => {
    
   const paintings = JSON.parse(content);
   const details = document.querySelector("#details");
   const list = document.querySelector("#paintings ul");
   const figure = document.querySelector("#details figure");

   generateThumbList(list, paintings);

   function generateThumbList(list, paintings) 
   {
    
      // in this section we loop through list of paintings and create <li><img></li>
      for (p of paintings) {
         const item = document.createElement('li');
         const thumb = document.createElement('img');
         thumb.src = "images/small/" + p.id + ".jpg";
         thumb.alt = p.title;
         thumb.dataset.id = p.id;
         item.appendChild(thumb);
         list.appendChild(item);
      }
 
      // Next we want to make an event listener to the list, such
      // that when clicking on each thumbnail, the large size painting
      // Should be displayed in the <figure>
      // Part 1: Complete this code: (40 points)
      
    /* 
    
    list.addEventListener('click', (e)=>{
      if(e.target....) (20 points)
      {
        displayPaintingLarge(....)  (20 points)
    }
      
        })
    */

      // Make the displayPaintingLarge function to load the image in figure
      //Part 2: Complete this part of the code: (60 points)

         /*

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
*/

      function displayFeatures(features) 
      {
         for (let f of features) {
               displaySingleFeatureRectangle(f);
         }
      }

      function displaySingleFeatureRectangle(feature) 
      {
         let rect = document.createElement('div');
         rect.className = "box";
         rect.style.position = "absolute";
         rect.style.left = feature.upperLeft[0] + "px";
         rect.style.top = feature.upperLeft[1] + "px";
         rect.style.width = (feature.lowerRight[0] - feature.upperLeft[0]) + "px";
         rect.style.height = (feature.lowerRight[1] - feature.upperLeft[1]) + "px";
         
         // add event handlers for the feature rectangle
         rect.addEventListener('mouseover', function (e) {
            document.querySelector("#description").textContent = feature.description;
         });
         rect.addEventListener('mouseout', function (e) {
            document.querySelector("#description").textContent = "";
         });         
         // add the feature rectangle to the <figure> parent
         figure.appendChild(rect);
      }
   }
})
