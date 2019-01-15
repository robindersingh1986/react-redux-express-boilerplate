// function that makes the api request and returns a Promise for response
export default function fetchData(params) {
    return fetch(params.url)
      .then(res => res.json())
      .then(posts => posts);
  
    // return axios({
    //   method: 'get',
    //   url: 'https://jsonplaceholder.typicode.com/posts'
    // });
  }