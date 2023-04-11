//Create a message welcoming them to my personal website
//Add the script tag 

const wel = 'Welcome'
const t = 'to' 
const m = 'my' 
const p = 'personal'
const w = 'website' 

alert(`${wel} ${t} ${m} ${p} ${w} !`)
console.log('test')

const form = document.querySelector("#form")
   const submitButton = document.querySelector("#submitButton")
   const scriptURL = 'https://script.google.com/macros/s/AKfycbxLZTlgHBunzjDAyvzTFB9AAQZS2vGT4hSZKlfMDVMQrrHEQwKDYO2-fo05BNfFegYWVg/exec'

   form.addEventListener('submit', e => {
     submitButton.disabled = true
     e.preventDefault()
     let requestBody = new FormData(form)
     fetch(scriptURL, { method: 'POST', body: requestBody})
       .then(response => {
          alert('Success!', response)
          submitButton.disabled = false
          console.log('press')
         })
       .catch(error => {
       alert('Error!', error.message)
         submitButton.disabled = false

       }
       )
   })
