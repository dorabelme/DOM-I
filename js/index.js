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

//Creating variables for later use
// let container = document.querySelector(".container");
// let header = document.querySelector("header");
let navigation = document.querySelector("nav");
let anchor = document.querySelectorAll("a");
let bigHeadline = document.querySelector(".cta-text h1");
let button = document.querySelector("button");
let headerImage = document.querySelector("#cta-img");
let middleImage = document.querySelector("#middle-img");
let header4 = document.querySelectorAll(".text-content h4");
let paragraph = document.querySelectorAll(".text-content p");
let contactHeader = document.querySelector(".contact h4");
let contactP = document.querySelectorAll(".contact p");
let footer = document.querySelector("footer p");

// Adding text to anchor
anchor[0].textContent = siteContent["nav"]["nav-item-1"];
anchor[1].textContent = siteContent["nav"]["nav-item-2"];
anchor[2].textContent = siteContent["nav"]["nav-item-3"];
anchor[3].textContent = siteContent["nav"]["nav-item-4"];
anchor[4].textContent = siteContent["nav"]["nav-item-5"];
anchor[5].textContent = siteContent["nav"]["nav-item-6"];

// Adding text to cta section and images
bigHeadline.innerHTML = "DOM<br> Is<br> Awesome";
button.textContent = siteContent["cta"]["button"];
headerImage.setAttribute("src", siteContent["cta"]["img-src"]);
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Adding text to main section
header4[0].textContent = siteContent["main-content"]["features-h4"];
header4[1].textContent = siteContent["main-content"]["about-h4"];
header4[2].textContent = siteContent["main-content"]["services-h4"];
header4[3].textContent = siteContent["main-content"]["product-h4"];
header4[4].textContent = siteContent["main-content"]["vision-h4"];

paragraph[0].textContent = siteContent["main-content"]["features-content"];
paragraph[1].textContent = siteContent["main-content"]["about-content"];
paragraph[2].textContent = siteContent["main-content"]["services-content"];
paragraph[3].textContent = siteContent["main-content"]["product-content"];
paragraph[4].textContent = siteContent["main-content"]["vision-content"];

// Adding text to contact part and footer
contactHeader.textContent = siteContent["contact"]["contact-h4"];
contactP[0].innerHTML = "123 Way 456 Street<br>Somewhere, USA";
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];
footer.textContent = siteContent["footer"]["copyright"];

// Extra assignments
const newAnchor = document.createElement("a");
const newAnchor2 = document.createElement("a");
const newNav = Array.from(anchor);
newAnchor.textContent = "Log In";
navigation.appendChild(newAnchor);
newAnchor2.textContent = "Home";
navigation.prepend(newAnchor2);
const finalNav = newNav.concat(newAnchor).concat(newAnchor2);

finalNav.forEach(anchor => (anchor.style.color = "white"));
finalNav.forEach(anchor => (anchor.style.backgroundColor = "black"));
finalNav.forEach(anchor => (anchor.style.padding = "10px 10px 10px 10px"));

footer.style.backgroundColor = "black";
footer.style.color = "white";
footer.style.padding = "20px 0 20px 0";
