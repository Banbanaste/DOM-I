const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// adding text to nav bar links
const navBar = document.getElementsByTagName("a");

for (let i = 0; i < 6; i++) {
  navBar[i].textContent = siteContent["nav"][`nav-item-${i}`];
}

// header & cta
// adding header h1 text
document.querySelector(".cta .cta-text h1").innerHTML =
  "DOM <br/> is <br/> Awesome";

// adding cta btn
document.querySelector(".cta .cta-text button").textContent =
  siteContent["cta"].button;

// adding header img
document.querySelector(".cta img").src = siteContent["cta"]["img-src"];

// main content
// adding heading and p content
let h4Array = [];
let pArray = [];
Object.keys(siteContent["main-content"]).forEach(key => {
  if (key.indexOf("h4") !== -1) {
    h4Array.push(key);
  } else if (key.indexOf("content") !== -1) {
    pArray.push(key);
  }
});
for (let j = 0; j < h4Array.length; j++) {
  document.querySelectorAll(".main-content h4")[j].textContent =
    siteContent["main-content"][`${h4Array[j]}`];
  document.querySelectorAll(".main-content p")[j].textContent =
    siteContent["main-content"][`${pArray[j]}`];
}

// adding image
document.querySelector(".main-content img").src =
  siteContent["main-content"]["middle-img-src"];

// contact section
// adding content
const contactElem = document.querySelectorAll(".contact *");
const contactElemKeys = Object.keys(siteContent["contact"]);
for (let l = 0; l < contactElem.length; l++) {
  contactElem[l].textContent = siteContent["contact"][`${contactElemKeys[l]}`];
}

// footer section
document.querySelector("footer p").textContent =
  siteContent["footer"]["copyright"];

// adding new content
document.querySelectorAll("nav a").forEach(link => {
  link.style.color = "green";
});
document.querySelector("a:first-child").prepend("Hello ->");
document.querySelector("a:last-child").append(" <- World");

// stretch goal

function changeColor(e) {
  document.body.style.backgroundColor = "red";
  document.querySelector("button").addEventListener("click", changeColorBack);
}

function changeColorBack(e) {
  document.body.style.backgroundColor = "white";
  document.querySelector("button").addEventListener("click", changeColor);
}

document.querySelector("button").addEventListener("click", changeColor);
