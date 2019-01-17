export const getShowsService = (query) => {
    return fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then(results => results.json())
}
