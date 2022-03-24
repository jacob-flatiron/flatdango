// Your code here
let poster = document.getElementById('poster')
let title = document.getElementById('title')
let filmItem = document.getElementById('film-item')
let button = document.getElementById('buy-ticket')
let showTime = document.getElementById('showtime')
let img = document.getElementById('img')
let runTime = document.getElementById('run-time')
let ticketNum = document.getElementById('ticket-num')
let description = document.getElementById('description')


let rumTime = document.createElement('run-time')

let films = document.getElementById('films')

const request = async () => {
    let req = await fetch('http://localhost:3000/films')
    let res = await req.json()
    console.log(res)
    res.forEach((element) => {
        
        let img = document.createElement('img')


        films.innerText = element.films
        img.innerHTML = element.poster
        showTime.innerHTML = element.poster
        title.innerText = element.title
        ticketNum.innerHTML = element.tickets_sold
        description.innerHTML = element.description
        filmItem.innerHTML = element.film
        showTimeinnettext = element.showTime

        button.addEventListener('click' () => {
            let ticketNum = --element.ticketNum
            if (ticketNum <= 0) return null 
        })




        img.setAttribute('src', element.poster)


        poster.append(img, title, runTime, description, ticketNum, films, filmItem, showtime)
        
        // poster.appendChild(filmItem)

    })



    }

request()