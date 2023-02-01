//API----------------------------------------------------------
const adviceslip_api_url = 'https://api.adviceslip.com/advice'

async function get_advice() {
  const response = await fetch(adviceslip_api_url)
  const data = await response.json()

  console.log(data)
  console.log(data['slip']['id'])
  console.log(data['slip']['advice'])
}
