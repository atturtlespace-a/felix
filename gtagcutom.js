//Custom Events 

// Login button
let gtmLoginBtn = document.querySelectorAll("[data-gtm='login']");

function gtmLoginPush() {
  dataLayer.push({
    event: "nav_click",
    clickType: "login",
  });
}

gtmLoginBtn.forEach(function (gtmLoginButton) {
  gtmLoginButton.addEventListener("click", gtmLoginPush);
});

// Treatment Buttons in the Nav Menu
let gtmTreatmentBtn = document.querySelectorAll("[datagtm='treatment']");

function navLinkButtonPush(buttonText) {
  dataLayer.push({
    event: "nav_click",
    clickType: buttonText,
  });
}

gtmTreatmentBtn.forEach((button) => {
  button.addEventListener("click", function () {
    let buttonText = this.textContent || this.innerText; // Get the text inside the button
    navLinkButtonPush(buttonText);
  });
});

// Get Started Buttons with Page Name
let getStartedBtnOnPage = document.querySelectorAll("[datagtm='getstarted']");

function getStartedBtnPush() {
  let pageElements = document.querySelectorAll("[data-pagename]");
  let pageName =
    pageElements.length > 0
      ? pageElements[0].getAttribute("data-pagename")
      : "unknown";

  dataLayer.push({
    event: "btn_click",
    clickType: "get_started",
    pageName: pageName,
  });
}

getStartedBtnOnPage.forEach(function (btn) {
  btn.addEventListener("click", getStartedBtnPush);
});

// Treatment and Medication Toggle
let toggleTreatmentMedication = document.querySelectorAll(
  "[datagtm='toggletremed']"
);

function toggleTreatmentMedicationPush() {
  dataLayer.push({
    event: "nav_click",
    clickType: "treatment_medication_toggle",
  });
}

toggleTreatmentMedication.forEach(function (btn) {
  btn.addEventListener("click", toggleTreatmentMedicationPush);
});

//Show more reviews
let showMoreReviews = document.querySelectorAll("[datagtm='showreviews']");

function showMoreBtnPush() {
  dataLayer.push({
    event: "nav_click",
    clickType: "show_more_reviews",
  });
}

showMoreReviews.forEach(function (btn) {
  btn.addEventListener("click", showMoreBtnPush);
});

//"Learn More about Medication" button

let learnMoreMedication = document.querySelectorAll("[datagtm='learnmore']");

function learnMoreBtnPush() {
  dataLayer.push({
    event: "nav_click",
    clickType: "medication_learn_more",
  });
}

learnMoreMedication.forEach(function (btn) {
  btn.addEventListener("click", learnMoreBtnPush);
});

//Successful "Reveal info

let btnReveal = document.querySelectorAll("[datagtm='btnreveal']");

function SuccessfulRevealDIN() {
  // Delay the execution of the function inside setTimeout by 500 milliseconds
  setTimeout(function () {
    let gate = document.querySelector("#gate"); // Use querySelector for single element

    // Check if the element with ID 'gate' does NOT contain the class 'show'
    if (!gate.classList.contains("show")) {
      dataLayer.push({
        event: "nav_click",
        clickType: "din_reveal_success",
      });
    }
  }, 500); // 500 milliseconds delay
}

btnReveal.forEach(function (btn) {
  btn.addEventListener("click", SuccessfulRevealDIN);
});

//Further Reading button

let furtherReadingBtn = document.querySelectorAll("[datagtm='furtherbtn']");

function furtherMoreBtnPush() {
  dataLayer.push({
    event: "nav_click",
    clickType: "further_reading",
  });
}

furtherReadingBtn.forEach(function (btn) {
  btn.addEventListener("click", furtherMoreBtnPush);
});
