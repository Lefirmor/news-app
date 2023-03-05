export default function createmarkup({
  publishedDate,
  sectionName,
  articleTitle,
  shortDescription,
  urlOriginalArticle,
  imgUrl,
  articleId
}) {
  // const cardItems = data.map(({ publishedDate, sectionName, articleTitle, urlOriginalArticle, imgUrl }) => {
    let textLength = shortDescription;
    if (shortDescription.length > 110) {
        const spaceIndex = shortDescription.indexOf(" ", 110);
        if (spaceIndex > 0) {
            textLength = shortDescription.slice(0, spaceIndex) + "...";
        }
    }
    console.log("publishedDate", publishedDate);
  return (`
        <div class="card__search">
            <div>
            <img class="card__image" src="${imgUrl}" alt="${articleTitle}" />
            <p class="card__job"><span>${sectionName} searchig</span></p>
            <button class="card__favorite" data-id=${articleId}>
                <span>Add to favorite</span>
            </button>
            </div>
            <div class="card__header">
            <h2>
                <span>${articleTitle}</span>
            </h2>
            </div>
            <div>
            <p class="card__text">
                <span>${textLength}</span>
            </p>
            </div>
            
            <div>
            <p class="card__data">
                <span>${publishedDate}</span>
            </p>
            <a href="${urlOriginalArticle}" class="card__more" rel="stylesheet" target="_blank">
                <span>Read more</span>
            </a>
            </div>
        </div>
    `);
}
