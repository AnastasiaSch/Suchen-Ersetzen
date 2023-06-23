
'use strict'

{
  
const $ = q => document.querySelector(q)

const DIV_FLEX_CONTAINER = $('div').classList.add('flex-container') 

const DIV_FLEX_ITEM1 = $('div div:nth-child(1)')
DIV_FLEX_ITEM1.classList.add('flex-item')
DIV_FLEX_ITEM1.classList.add('visible')

const DIV_FLEX_ITEM2 = $('div div:nth-child(2)')
DIV_FLEX_ITEM2.classList.add('flex-item')
DIV_FLEX_ITEM2.classList.add('visible')

const DIV_FLEX_ITEM3 = document.createElement('div')
DIV_FLEX_ITEM3.classList.add('flex-item')
DIV_FLEX_ITEM3.classList.add('visible')
$('.flex-container').appendChild(DIV_FLEX_ITEM3)
const replaceFirstOccurencebtn = $('#replaceFirstOccurencebtn')
DIV_FLEX_ITEM3.appendChild(replaceFirstOccurencebtn)

const DIV_FLEX_ITEM4 = document.createElement('div')
DIV_FLEX_ITEM4.classList.add('flex-item')
DIV_FLEX_ITEM4.classList.add('visible')
$('.flex-container').appendChild(DIV_FLEX_ITEM4)
const replaceAllbtn = $('#replaceAllbtn')
DIV_FLEX_ITEM4.appendChild(replaceAllbtn)


const search = () => {
  $('p').innerHTML = $('p').textContent.replaceAll($('#search').value, `<span>${$('#search').value}</span>`)
}

const replace = () => {
  
  replaceFirstOccurencebtn.addEventListener(
    'click', 
    () => ($('p').innerHTML = $('p').textContent.replace($('#search').value, $('#replace').value).replaceAll($('#search').value, `<span>${$('#search').value}</span>`)),
    )

    replaceAllbtn.addEventListener(
    'click', 
    () => ($('p').innerHTML = $('p').textContent.replaceAll($('#search').value, $('#replace').value)),
    )

}

document.body.addEventListener('input', search)
replace()

}