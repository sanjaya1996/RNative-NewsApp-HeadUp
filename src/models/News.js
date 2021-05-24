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
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.content = content;
    this.urlToImage = urlToImage;
    this.author = author;
    this.publishedAt = publishedAt;
    this.url = url;
  }
}

export default News;
