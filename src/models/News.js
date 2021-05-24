class News {
  constructor(
    id,
    title,
    description,
    content,
    urlToImage,
    author,
    publishedAt,
    url,
    category,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.content = content;
    this.urlToImage = urlToImage;
    this.author = author;
    this.publishedAt = publishedAt;
    this.url = url;
    this.category = category;
  }
}

export default News;
