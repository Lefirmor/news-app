export default function createmarkup({
  publishedDate,
  sectionName,
  articleTitle,
  shortDescription,
  urlOriginalArticle,
  imgUrl,
  articleId,
}) {
//   const cardItems = data.map(({
//     publishedDate,
//     sectionName,
//     articleTitle,
//     urlOriginalArticle,
//     imgUrl
//     }) => {

  let cardItems = '';
  return (cardItems = `
      <article class="card" id="${articleId}">
        <div class="card__img-container">
          <img class="card__img" src="${imgUrl}" alt="${articleTitle}">
          <p class="card__section-name">
            ${sectionName}
          </p>
          <button class="card__btn" type="button">
            Add to favorite
          </button>
        </div>
        <h2 class="card__title">
          ${articleTitle}
        </h2>
        <p class="card__text">${shortDescription}</p>
        <div class="card__bottom">
          <span class="card__date">
            ${publishedDate}
          </span>
          <a class="card__read-more-search"
            href="${urlOriginalArticle}" target="_blank"
          >
            Read more
          </a>
        </div>
      </article>
    `);
  };