console.log("We out cheaaaaa")

$(document).ready(()=>{

  fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&list=search&rvprop=content&srsearch=Los+Angeles&origin=*')
    .then(res=>res.json())
    .then((data)=>console.log(data))
})
