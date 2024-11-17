const mainContent = document.querySelector('main')

// Get blog content from localStorage
const blogContents = JSON.parse(localStorage.getItem('blogContents')) || []

// Render blog contents

if(blogContents.length > 0 ){
    blogContents.forEach((blogContent) => {
        const card = document.createElement('div')
        card.classList.add('card')

        const title = document.createElement('h2')
        title.textContent = `Title: ${blogContent.title}`


        const content = document.createElement('p')
        content.textContent = `Content: ${blogContent.content}`

        const creator = document.createElement('p')
        creator.textContent = `Posted By: ${blogContent.username}`

        card.append(title, content, creator)
        mainContent.appendChild(card)
    }) 
} else {
    mainContent.innerHTML = `<h1>NOT FOUND 404</h1>`
}


// Handle Back Button
const backBtn = document.querySelector('a')
backBtn.addEventListener('click', () => {
    // window.location.href = '/module04_web_APIs/completed_challenge/my_blog/index.html'
    window.location.href = '/personal_blog_ch04/index.html'
})