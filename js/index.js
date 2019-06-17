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

// let container = document.querySelector(".container");
// let header = document.querySelector("header");
let navigation = document.querySelector("nav");
let anchor = document.querySelectorAll("a");
let bigHeadline = document.querySelector(".cta-text h1");
let button = document.querySelector("button");
let headerImage = document.querySelector("#cta-img");
let middleImage = document.querySelector(".middle-img");
let header4 = document.querySelectorAll(".text-content h4");
let paragraph = document.querySelectorAll(".text-content p");
let contactHeader = document.querySelector(".contact h4");
let contactP = document.querySelectorAll(".contact p");
let footer = document.querySelector("footer p");

console.log(contactHeader);
console.log(contactP);

anchor[0].textContent = "Services";
anchor[1].textContent = "Product";
anchor[2].textContent = "Vision";
anchor[3].textContent = "Features";
anchor[4].textContent = "About";
anchor[5].textContent = "Contact";

anchor.forEach(anchor => (anchor.style.decoration = "none"));
anchor.forEach(anchor => (anchor.style.coror = "#b0b0b0"));

bigHeadline.innerHTML = "DOM<br> Is<br> Awesome";
button.textContent = "Get Started";
headerImage.src = "./img/header-img.png";
middleImage.src = "./img/mid-page-accent.jpg";

header4[0].textContent = "Features";
header4[1].textContent = "About";
header4[2].textContent = "Services";
header4[3].textContent = "Product";
header4[4].textContent = "Vision";

paragraph[0].textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraph[1].textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraph[2].textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraph[3].textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraph[4].textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

contactHeader.textContent = "Contact";
contactP[0].innerHTML = "123 Way 456 Street<br>Somewhere, USA";
contactP[1].textContent = "1 (888) 888-8888";
contactP[2].textContent = "sales@greatidea.io";

footer.textContent = "Copyright Great Idea! 2018";
