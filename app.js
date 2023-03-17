let mainDescription = document.querySelector('.desc')

let slideBtn = document.querySelector('.btn-self__slide')

let projectsSection = document.querySelector('#projects')

let aboutSection = document.querySelector('#about')

let sliders = document.querySelectorAll('.slider')

let aboutSkillsInfo = document.querySelectorAll('.skill-item')

let specialNumbers = document.querySelectorAll('.special-number')

let imageContainers = document.querySelectorAll('.image-container')

let dropDown = document.querySelector('.dropdown')

let age = document.querySelector('.age')

let navList = document.querySelector('.nav-list')

let navbar = document.querySelector('.navbar')

let inputs = document.querySelectorAll('.inpt')

let iconSelf = document.querySelectorAll('.icon-self')

let contact = document.querySelector('#contact')

let contactForm = document.querySelector('.contact-form')

const firstName = "Tony Khoury"

const profesion = "Front-End Developer"

let index = 1
let secondIndex = 1
let date = new Date()

age.textContent = `Age: ${date.getFullYear() - 2002}`

window.addEventListener('scroll', () => {
    if (window.scrollY > 200){
        navbar.classList.add('stick')
    }else {
        navbar.classList.remove('stick') 
    }
})

let nameInterval = setInterval(() => {
    mainDescription.children[0].textContent += firstName[index]
    index++
    if (index === firstName.length){
        clearInterval(nameInterval)
    }
}, 70)
let secondInterval = setInterval(() => {
    mainDescription.children[1].textContent += profesion[secondIndex]
    secondIndex++
    if (secondIndex === profesion.length){
        clearInterval(secondInterval)
    }
}, 100)


navList.addEventListener('click', e => {
    if (e.target.getAttribute('data-text').toLowerCase() === 'projects'){
        projectsSection.scrollIntoView()
    } else if (e.target.getAttribute('data-text').toLowerCase() === 'about'){
        aboutSection.scrollIntoView()
    } else if (e.target.getAttribute('data-text').toLowerCase() === 'home'){
        window.scrollTo(0, 0)
    }else if (e.target.getAttribute('data-text').toLowerCase() === 'contact'){
        contact.scrollIntoView()
    }
})
slideBtn.addEventListener('click', () => {
    projectsSection.scrollIntoView()
})
let observer = new IntersectionObserver(enteries => {
    enteries.forEach(entry => {
        if (entry.target.classList.contains('image-container')){
            if (entry.isIntersecting){
                entry.target.classList.add('rise')
            }
        }if (entry.target.classList.contains('special-number')){
            if (entry.isIntersecting){
                entry.target.classList.add('rise-number')
            }
        }if (entry.target.classList.contains('slider')){
            if (entry.isIntersecting){
                entry.target.classList.add('slide')
            }
        }if (entry.target.classList.contains('skill-item')){
            if (entry.isIntersecting){
                entry.target.classList.add('rise')
            }
        }if (entry.target.classList.contains('icon-self')){
            if (entry.isIntersecting){
                entry.target.classList.add('rise')
            }
        }
    })
})

iconSelf.forEach(icon => observer.observe(icon))
aboutSkillsInfo.forEach(item => observer.observe(item))
specialNumbers.forEach(number => observer.observe(number))
imageContainers.forEach(container => observer.observe(container))
sliders.forEach(slider => observer.observe(slider))

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        let index = 0
        let formatted = '';
        let behindInterval = setInterval(() => {
            let text = input.getAttribute('data-textBehind')
            formatted += text[index]
            contactForm.setAttribute('data-behind', formatted.toUpperCase())
            index++
            if (index === text.length){
                clearInterval(behindInterval)
            }
        }, 80)
    })
})