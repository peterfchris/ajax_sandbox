document.getElementById('button').addEventListener('click', loadData)

function loadData(){
  // Create an XHR Object
  const xhr = new XMLHttpRequest()

  // OPEN
  xhr.open('GET', 'data.txt', true)

  console.log('READYSTATE', xhr.readyState)

  // optional - used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState)
  }

  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState)
    if(this.status === 200){
      console.log(this.responseText)
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  xhr.onreadystatechange = function() {
    console.log('READYSTATE', xhr.readyState)
    if(this.status === 200 && this.readyState === 4){
      console.log(this.responseText)
    }
  }

  xhr.onerror = function(){
    console.log('Request error...')
  }

  xhr.send()

  // readyState Values
  // 0: request not initialized
  // 1: sserver connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Satuses
  // 200: 'Ok'
  // 403: 'Forbidden'
  // 404: 'Not Found'
}