window.addEventListener("load", ()=>{
  var url = "https://crossorigin.me/http://bible-api.com/";
  var id = document.querySelector(".api");
  var append = "john+1:1";
  console.log(url + append)


  // Process with Fetch
    let promise = fetch("https://crossorigin.me/https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10");
    promise.then(response => {
      return response.json();
    })
      .then(data=>{
      id.innerHTML = data.text;
    })
    .catch((error)=> {throw error})
});
