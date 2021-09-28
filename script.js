const search = document.querySelector('input')
const form = document.querySelector('form')
const searchResults = document.querySelector('.results')
const errorMsg = document.querySelector('.alert')
const line = document.querySelector('hr')

const apiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

