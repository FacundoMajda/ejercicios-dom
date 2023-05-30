let cardContainer = document.getElementById("card-container");

let data = [
  {
    title: "Artículo 1",
    description:
      "Lorem ipsum dolor sit ame  t, consectetur adipiscing elit. Vivamus et libero ut dolor pretium sagittis id id ante. Proin viverra, purus in lacinia hendrerit, lectus neque placerat velit, vel convallis lorem mi in enim. Aenean vulputate augue non dui scelerisque, eget pellentesque neque accumsan. Suspendisse sed augue purus. Nunc id ex vel libero pretium feugiat. Aenean tempor congue ante.",
    image: "https://source.unsplash.com/random/300x200",
  },
  {
    title: "Artículo 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et libero ut dolor pretium sagittis id id ante. Proin viverra, purus in lacinia hendrerit, lectus neque placerat velit, vel convallis lorem mi in enim. Aenean vulputate augue non dui scelerisque, eget pellentesque neque accumsan. Suspendisse sed augue purus. Nunc id ex vel libero pretium feugiat. Aenean tempor congue ante.",
    image: "https://source.unsplash.com/random/300x200",
  },
  {
    title: "Artículo 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et libero ut dolor pretium sagittis id id ante. Proin viverra, purus in lacinia hendrerit, lectus neque placerat velit, vel convallis lorem mi in enim. Aenean vulputate augue non dui scelerisque, eget pellentesque neque accumsan. Suspendisse sed augue purus. Nunc id ex vel libero pretium feugiat. Aenean tempor congue ante.",
    image: "https://source.unsplash.com/random/300x200",
  },
];

data.forEach((item) => {
  let card = document.createElement("div");
  card.classList.add("card");

  let title = document.createElement("h2");
  title.textContent = item.title;

  let description = document.createElement("p");
  description.textContent = item.description;

  let image = document.createElement("img");
  image.src = item.image;

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(image);

  cardContainer.appendChild(card);
});
