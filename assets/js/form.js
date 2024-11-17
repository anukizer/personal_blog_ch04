const usernameInput = document.querySelector('#username')
const titleInput = document.querySelector('#title')
const contentInput = document.querySelector('#content')
const submitBtn = document.querySelector('#submitBtn')

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()

    const username = usernameInput.value.trim()
    const title = titleInput.value.trim()
    const content = contentInput.value.trim()


    if(!username || !title || !content){
        alert("Please provide data")
        return
    }

    //Create blog content object
    const blogContent = {username, title, content}

    // Retrieve the blog content from localStorage or initialize empty array
    const blogContents = JSON.parse(localStorage.getItem('blogContents')) || []

    blogContents.push(blogContent)

    //Store the blog content array in localStorage
    localStorage.setItem('blogContents', JSON.stringify(blogContents))

    //Redirect to the blog.html where content is rendered
    // window.location.href = '/module04_web_APIs/completed_challenge/my_blog/blog.html'
    window.location.href = '/personal_blog_ch04/blog.html'

})

