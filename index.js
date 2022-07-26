let btn = document.getElementById('btnn')
let crd = document.getElementById('crd')

btn.addEventListener('click', getFacts)

function getFacts() {
  let input = document.getElementById('input-val').value
  let crd_title = document.getElementById('crd-title')
  let crd_txt = document.getElementById('crd-txt')
  // console.log(input);
  if (input != '') {
    crd.classList.remove('d-none')
    fetch(`//numbersapi.com/${input}/`)
      .then((response) => response.text())
      .then((data) => {
        crd_title.innerHTML = input
        crd_txt.innerHTML = data
      })
      .catch((err) => console.error(err))
  }
}



let cpy = document.getElementById('cpy-btn')
cpy.addEventListener('click', cpyTxt)

function cpyTxt() {
  const txtArea = document.createElement('textarea')
  let crd_txt = document.getElementById('crd-txt').innerHTML

  txtArea.value = crd_txt
  document.body.append(txtArea)
  txtArea.select()
  document.execCommand('copy')
  txtArea.remove()
  alert('FACt has been copied successfully.')
}
