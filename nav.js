let openButton = document.querySelectorAll('[menu="open"]');
let closeButton = document.querySelectorAll('[menu="close"]');
let navPanel = document.querySelector('[menu="nav"]');

let getMenuFirstList = document.querySelector('[menu-list="first"]');

let menuFirstPanel = document.querySelector('[menu="firstpanel"]');
let menuSecondPanel = document.querySelector('[menu="secondpanel"]');

// console.log(menuFirstPanel, menuSecondPanel);
let getMenuFirstListItems = getMenuFirstList.querySelectorAll(
  '[menu-list-first="item"]'
);
let getMenuSecondListItems = menuSecondPanel.querySelectorAll(
  '[menu-list-second="item"]'
);

let gobackButtons = document.querySelectorAll('[menu="goback"]');

function showNavPanel() {
  navPanel.classList.add("active");
}

function hideNavPanel() {
  navPanel.classList.remove("active");
  // Select all elements inside navPanel that have the 'active' class
  let activeElements = navPanel.querySelectorAll(".active");

  // Iterate over each element and remove the 'active' class
  activeElements.forEach((el) => el.classList.remove("active"));
}

// Loop through openButtons and add a click event listener to each one
for (let i = 0; i < openButton.length; i++) {
  openButton[i].addEventListener("click", showNavPanel);
}

for (let i = 0; i < closeButton.length; i++) {
  closeButton[i].addEventListener("click", hideNavPanel);
  removeActiveClassToPanels();
}

function removeActiveClassFromMenuItems() {
  getMenuSecondListItems.forEach((item) => {
    item.classList.remove("active");
  });
}

for (let i = 0; i < gobackButtons.length; i++) {
  gobackButtons[i].addEventListener("click", () => {
    removeActiveClassToPanels(); // Call the function to remove active class from panels
    removeActiveClassFromMenuItems(); // Call the function to remove active class from menu items
  });
}

// Listen for the Escape key press
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    hideNavPanel();
  }
});

// Define a function to add the "active" class to both panels
function addActiveClassToPanels() {
  menuFirstPanel.classList.add("active");
  menuSecondPanel.classList.add("active");
}

function removeActiveClassToPanels() {
  menuFirstPanel.classList.remove("active");
  menuSecondPanel.classList.remove("active");
}

// Add a click event listener to each menu item
getMenuFirstListItems.forEach((item, i) => {
  item.addEventListener("click", addActiveClassToPanels);
});

//console.log(getMenuSecondListItems, getMenuFirstListItems);

for (let i = 0; i < getMenuFirstListItems.length; i++) {
  getMenuFirstListItems[i].addEventListener("click", function () {
    getMenuSecondListItems[i].classList.add("active");
  });
}

// Existing code...

// New function to handle document click
function handleOutsideClick(event) {
  // Check if the click is outside the navPanel and if navPanel is active
  if (
    !navPanel.contains(event.target) &&
    navPanel.classList.contains("active")
  ) {
    hideNavPanel();
  }
}

// Add event listener to the document
document.addEventListener("click", handleOutsideClick, true);

// Select all elements with the attribute [menu='medication']
let openMedicationPanel = document.querySelectorAll("[menu='medication']");

// Select the element with the ID 'Medication'
let medicationButton = document.querySelector("#Medications");

// Add a click event listener to each button in openMedicationPanel
openMedicationPanel.forEach((button) => {
  button.addEventListener("click", function () {
    // Find the parent div of medicationButton with the attribute [menu-list-first="item"]
    let parentDiv = medicationButton.closest('div[menu-list-first="item"]');

    // console.log(parentDiv);
    // Check if the parentDiv exists and is not null
    if (parentDiv) {
      // Trigger a click event on the found parent div
      parentDiv.click();
      showNavPanel();
    }
  });
});

let typeSplit = new SplitType("[split]", {
  types: "lines, words, chars",
  tagName: "span"
});


document.addEventListener("DOMContentLoaded", function () {
  let imgcross = document.querySelector("[imgcross]");
  var imageUrl = imgcross.src;
  console.log(imageUrl);
  var lines = document.querySelectorAll(".line");

  // Store the initial width of the window when the page loads
  var initialWidth = window.innerWidth;

  // Function to add or remove images based on screen width
  function updateImages() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      // Screen width is less than 768px
      lines.forEach(function (line) {
        // Add image if not already present
        if (!line.querySelector(".cross-line")) {
          var img = document.createElement("img");
          img.src = imageUrl;
          img.loading = "lazy";
          img.alt = "";
          img.className = "cross-line";
          line.appendChild(img);

          // Make the line position relative
          line.style.position = "relative";
        }
      });
    } else {
      // Screen width is greater than 768px
      lines.forEach(function (line) {
        // Remove image if present
        var img = line.querySelector(".cross-line");
        if (img) {
          line.removeChild(img);
        }

        // Reset the line position
        line.style.position = "";
      });
    }
  }

  // Function to handle window resize
  function handleResize() {
    // Calculate the change in width
    var widthChange = Math.abs(window.innerWidth - initialWidth) / initialWidth;

    // Check if the change is more than 20%
    if (widthChange > 0.2) {
      // Reload the page
      window.location.reload();
    } else {
      // Otherwise, update images as before
      updateImages();
    }
  }

  // Call the function initially and on resize
  updateImages();
  window.addEventListener("resize", handleResize);
});
