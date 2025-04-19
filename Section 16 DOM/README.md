# NOTES:

## Document Object Model:

1. Dont use inline JS
2. User <script> to include JS

## Function:

1. **x.innerHTML** = to get the innerHTML of the chosen x tag
2. **x.style.color** = to change color
3. **document.querySelector("input").click()** = Query selector is like picking an atrribute on HTML and click is the function to click
4. **document.firstElementChild** = to get the first elements
5. **x.length** = to get the length of an element (array length or string length)
6. **x.style.'css'** = can change like font size but the naming use camel case (Reference https://www.w3schools.com/jsref/dom_obj_style.asp)
7. **x.classList.add/remove/toggle("Something")** = This is to add a class and remove a class inside an tag. toogle is for, if the class is already there then remove, if its not there then add.
8. **x.textContent** = to get the text inside the chosen x tag
9. **x.get/setAttribute("href")** = To get/set an attribute inside a tag. with set having 2 parameter ()

## Explanation:

1. Objects inside DOM has **Properties** and **Methods**
2. **Properties** (Describe Object) = Car has colour, number of seats, number of wheels
3. **Methods** (What the object can do) = brake(), drive(), park()

4. There is **getter** (ex: car.colour;) to get the colour of the car
5. There is **setter** (ex: car.numberOfDoors = 4;) to set the properties (num of doors) of the car
6. There is **call** (ex: car.drive()) to get the car to drive

## Selector:

1. getElementsByTagName("h1")[2] = to get all element with h1 inside
2. getElementsByClassName("btn") = self explanatory
3. getElementById("title") = self explanatory
4. x.querySelector("anything like css") = Get one
5. x.querySelectorAll("anything like css") = Get all
