import axios from "axios";

const API = {
  // Retrieves all quotes from the db
  getArticle: function() {
    return axios.get("/api/articles");
  },
  // Saves a new quote to the db
  saveArticle: function(text) {
    return axios.post("/api/articles", { text });
  },
  // Deletes a quote from the db
  deleteArticle: function(id) {
    return axios.delete(`/api/articles/${id}`);
  },
  // Toggles a quote's favorite property in the db
  favoriteArticle: function(quote) {
    article.favorited = !article.favorited;
    const { _id, favorited } = article;
    return axios.patch(`/api/articles/${_id}`, { favorited });
  }
};

export default API;
