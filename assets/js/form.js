// ==================== FORM JS ====================
const scriptURL = 'https://script.google.com/macros/s/AKfycbwM2T_ujgXZnmxP2SGpmOAicrwID-hsMWEF2zeUBFPaZmEdr623BzB_Ku-KpwIkIfA2/exec'
const form = document.forms['contact']
const send = document.querySelector('.button-send')
const loading = document.querySelector('.button-loading')
const alert = document.querySelector('.alert')

  form.addEventListener('submit', e => {
    e.preventDefault()

    // sending
    loading.classList.toggle('d-none')
    send.classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // loading
        loading.classList.toggle('d-none')
        send.classList.toggle('d-none')
        alert.classList.toggle('d-none')

        // reset form
        form.reset()

        console.log('Success!', response)
    })
      .catch(error => console.error('Error!', error.message))
  })

  if(alert){
    alert.addEventListener('click', () =>{
      alert.classList.toggle('d-none')
    })
  }