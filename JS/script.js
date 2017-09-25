$(document).ready(() => {

  $('#search-form').on('submit', function() {
    const search = $('.search').val()
    var url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&list=search&rvprop=content&srsearch=${search}&origin=*`

    fetch(url).then(res => res.json()).then((data) => {
      var results = data.query.search
      console.log(results)
      results.map((element, key) => {
        $('.results').append(`
            <a href="http://en.wikipedia.org/?curid=${element.pageid}">
            <div class="result">
              <h3 className="result-number">${key + 1}</h3>
              <h1 class="result-title">${element.title}</h1>
              <p class="result-snippet">${element.snippet}</p>
            </div>
            </a>
          `)
      })
    }).catch((error) => console.log(error))
    return false
  })

})
