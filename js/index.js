const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//nav - loop time
for (let i = 0; i < Object.keys(siteContent.nav).length-1; i++){
  let nav = document.querySelector(`nav a:nth-of-type(${i+1})`);
  nav.text = `${siteContent.nav[`nav-item-${i+1}`]}`;
}

document.querySelector("#logo-img").src = siteContent.nav["img-src"];

//cta - section

document.querySelector('h1').textContent = siteContent.cta.h1;

document.querySelector(".cta button").textContent = siteContent.cta.button;

document.querySelector(".cta img").src = siteContent.cta["img-src"];

//main content - h4
mcH4 = document.querySelectorAll(".main-content h4");

mcH4[0].textContent = siteContent["main-content"]["features-h4"];

mcH4[1].textContent = siteContent["main-content"]["about-h4"];

mcH4[2].textContent = siteContent["main-content"]["services-h4"];

mcH4[3].textContent = siteContent["main-content"]["product-h4"];

mcH4[4].textContent = siteContent["main-content"]["vision-h4"];

