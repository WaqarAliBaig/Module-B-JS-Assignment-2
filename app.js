const array_of_objects = [
  {
    id: 1,
    title: "First project",
    description:
      "Adobe Spark* is an online creative application and integrated storytelling platform. With the platform, users can create and customize all sorts of visuals to share knowledge in an interactive manner. Created on May 2016, the tool is comprised of three separate design applications: Post (graphic design), Page (web design), and Video.",
    image_url:
      "https://celt.indiana.edu/resources/pedagogical/adobe/media_10874da5d3724941c06153f2e7758bd85924d788c.webp",
  },
  {
    id: 2,
    title: "Second project",
    description:
      "Adobe Spark* is an online creative application and integrated storytelling platform. With the platform, users can create and customize all sorts of visuals to share knowledge in an interactive manner. Created on May 2016, the tool is comprised of three separate design applications: Post (graphic design), Page (web design), and Video.",
    image_url:
      "https://celt.indiana.edu/resources/pedagogical/adobe/media_10874da5d3724941c06153f2e7758bd85924d788c.webp",
  },
  {
    id: 3,
    title: "Third project",
    description:
      "Adobe Spark* is an online creative application and integrated storytelling platform. With the platform, users can create and customize all sorts of visuals to share knowledge in an interactive manner. Created on May 2016, the tool is comprised of three separate design applications: Post (graphic design), Page (web design), and Video.",
    image_url:
      "https://celt.indiana.edu/resources/pedagogical/adobe/media_10874da5d3724941c06153f2e7758bd85924d788c.webp",
  },
  {
    id: 4,
    title: "Forth project",
    description:
      "Adobe Spark* is an online creative application and integrated storytelling platform. With the platform, users can create and customize all sorts of visuals to share knowledge in an interactive manner. Created on May 2016, the tool is comprised of three separate design applications: Post (graphic design), Page (web design), and Video.",
    image_url:
      "https://celt.indiana.edu/resources/pedagogical/adobe/media_10874da5d3724941c06153f2e7758bd85924d788c.webp",
  },
  {
    id: 5,
    title: "Fifth project",
    description:
      "Adobe Spark* is an online creative application and integrated storytelling platform. With the platform, users can create and customize all sorts of visuals to share knowledge in an interactive manner. Created on May 2016, the tool is comprised of three separate design applications: Post (graphic design), Page (web design), and Video.",
    image_url:
      "https://celt.indiana.edu/resources/pedagogical/adobe/media_10874da5d3724941c06153f2e7758bd85924d788c.webp",
  },

  {
    id: 6,
    title: "Sixth project",
    description:
      "Adobe Spark* is an online creative application and integrated storytelling platform. With the platform, users can create and customize all sorts of visuals to share knowledge in an interactive manner. Created on May 2016, the tool is comprised of three separate design applications: Post (graphic design), Page (web design), and Video.",
    image_url:
      "https://celt.indiana.edu/resources/pedagogical/adobe/media_10874da5d3724941c06153f2e7758bd85924d788c.webp",
  },
];

const newCard = document.getElementById("cards");

const myContent = array_of_objects.map((project, index) => {
  return `
    <div class="col">
      <div class="card" style="width: 18rem">
        <img class="card-img-top" src="${project.image_url}" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>`;
});

newCard.innerHTML = myContent;
