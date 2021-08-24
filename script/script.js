function clearInput () {
  document.querySelector('#textArea').value = '';
}

document.querySelector('#inputForm').addEventListener('submit', (e) => {
  e.preventDefault();

  let list = document.createElement('li');
  let inputValue = document.querySelector('#textArea').value;
  let listValue = document.createTextNode(inputValue);
  list.appendChild(listValue);

  if (inputValue !== '') {
    document.querySelector('#list').appendChild(list);
    clearInput ();
  } else {
    clearInput ();
  }
})