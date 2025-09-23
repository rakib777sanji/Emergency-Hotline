
## Create Readme
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer:
* getElementById = Selects a single element by its id attribute, returns a single Element object, or null if not found, syntax: document.getElementById('idName'), IDs must be unique in a document.

* getElementsByClassName = Selects all elements with a given class name, returns an HTMLCollection (array-like, live collection) of elements, syntax: document.getElementsByClassName('className'), syntax: document.querySelector('CSS selector')

* querySelector = Selects the first element that matches a CSS selector, returns a single Element object, or null if not found, 

* querySelectorAll = Selects all elements that match a CSS selector, returns a NodeList (array-like, static collection) of elements, syntax: document.querySelectorAll('CSS selector'), 

2. How do you **create and insert a new element into the DOM**?
Answer:
* First you need to create a new element const newElement = document.createElement("p")
* NewElement can be given some text or style. newElement.textContent = "new paragraph"; newElement.style.color= "red"
*  You need to select where to add the DOM. const container = document.getElementById("container"); container.appendChild(newElement);

3. What is **Event Bubbling** and how does it work?
Answer:
* When an event (like a click) on a child element automatically triggers the same event on all its parent elements — bubbling upward from target → root.
* Works by default — click a button inside a div? The div’s click handler fires too — unless you call event.stopPropagation().

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:
* Attach one event listener to a parent element to handle events from multiple child elements — leveraging event bubbling.
*  Useful For >  Saves memory (no listener per child), Works for dynamically added elements, Cleaner, more scalable code — especially for lists, grids, or menus.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:
* preventDefault() > Stops the default browser action (e.g., form submit, link navigation) — but event still bubbles up.

* stopPropagation() > Stops the event from bubbling up to parent elements — but default behavior still happens (unless also prevented).
