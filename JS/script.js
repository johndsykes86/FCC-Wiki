$(document).ready(() => {

  $('#search-form').on('submit', function() {
    const search = $('.search').val()
    var url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&list=search&rvprop=content&srsearch=${search}&origin=*`

    fetch(url).then(res => res.json()).then((data) => {
      var results = data.query.search
      console.log(results)

      $('.form').css({
        "-webkit-animation": "search-up .5s linear forwards",
                "animation": "search-up .5s linear forwards"
      })

      $('.container').append(`
        <div class="results"></div>
      `)

      setTimeout(function(){
        results.map((element, key) => {

          $('.results').append(`
              <a href="http://en.wikipedia.org/?curid=${element.pageid}" target="_blank">
              <div class="result">
                <div class="result-key">
                  <h3 class="result-key-number">${key + 1}</h3>
                </div>
                <div class="result-info">
                  <h1 class="result-info-title">${element.title}</h1>
                  <p class="result-info-snippet">${element.snippet}...</p>
                </div>

              </div>
              </a>
            `)
        })
      }, 600)
    }).catch((error) => console.log(error))
    return false
  })

})
