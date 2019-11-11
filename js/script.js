
$("#about").on("click", function() {
  $("html, body").animate(
    {
      scrollTop: $(".about").offset().top - 20
    },
    500
  );
});

$("#projects").on("click", function() {
  $("html, body").animate(
    {
      scrollTop: $(".projects").offset().top - 20
    },
    500
  );
});

$(".footer .fa-arrow-up").on("click", function() {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    500
  );
});

const username = "etasbasi";
const count = 6;
const sort = "created: asc";
const clientId = "806f9806f13283d4d9c7";
const clientSecret = "7991e22ba6d74351a0427ed27cbdc218e068c6d4";

let listElements = "";

function createListElement({ name, html_url, language, description }) {
  language = language ? language.toLowerCase() : null;
  let icon;
  switch (language) {
    case "java":
      icon = "fab fa-java";
      break;
    case "javascript":
      icon = "fab fa-js-square";
      break;
    case "css":
      icon = "fab fa-css3-alt";
      break;
    case "html":
      icon = "fab fa-html5";
      break;
    default:
      icon = "";
      break;
  }
  listElements += `<li>
    <a href="${html_url}" target="__blank">${name}</a>
    <span><i class="icon ${icon}"></i></span>
    ${description ? `<div class="description">${description}</div>` : ""}
</li>`;
}

$("document").ready(function() {
  fetch(
    `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
  )
    .then((res) => res.json())
    .then((data) => {
      data.map((val) => createListElement(val));
      document.getElementById("github-list").innerHTML = listElements;
    })
    .catch((err) => console.log(err));
});
