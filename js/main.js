advice_id = document.querySelector('[data-advice-id]')
advice_qoute = document.querySelector('[data-advice-qoute]')
get_advice_btn = document.querySelector('[data-get-advice-btn]')



get_advice_btn.addEventListener('click', function(e) {
    get_advice()

    // disable the button for 2s because the Advice is cached for 2 seconds. 
    // Any repeat-request within 2 seconds will return the same piece of advice.
    get_advice_btn.style.setProperty('pointer-events', 'none')
    setTimeout(function() {
        get_advice_btn.style.setProperty('pointer-events', 'unset')
    }, 2000)
})

//API----------------------------------------------------------
const adviceslip_api_url = 'https://api.adviceslip.com/advice'

async function get_advice() {
  const response = await fetch(adviceslip_api_url)
  const data = await response.json()

  
  advice_id.innerHTML = data['slip']['id'];
  advice_qoute.innerHTML = data['slip']['advice'];
}
