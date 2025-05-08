document.addEventListener('DOMContentLoaded', function() {
    const blogPostsSection = document.querySelector('.blog-posts');
    const recentPostsList = document.getElementById('recent-posts');

    // Sample Blog Post Data (You'd likely fetch this from a database or API)
    const blogPosts = [
        {
            title: "Getting Started with JavaScript",
            content: "This is a beginner's guide to JavaScript. We'll cover variables, data types, and basic syntax.",
            date: "2023-10-27"
        },
        {
            title: "Understanding CSS Layout",
            content: "Learn about different CSS layout techniques, including Flexbox and Grid.",
            date: "2023-10-26"
        },
        {
            title: "Introduction to HTML5",
            content: "A comprehensive overview of HTML5 features and best practices.",
            date: "2023-10-25"
        }
    ];

    // Function to create a blog post element
    function createBlogPostElement(post) {
        const article = document.createElement('article');
        article.classList.add('blog-post');

        const title = document.createElement('h2');
        title.textContent = post.title;

        const content = document.createElement('p');
        content.textContent = post.content;

        const date = document.createElement('small');
        date.textContent = `Published: ${post.date}`;

        article.appendChild(title);
        article.appendChild(content);
        article.appendChild(date);

        return article;
    }

    // Add blog posts to the page
    blogPosts.forEach(post => {
        const postElement = createBlogPostElement(post);
        blogPostsSection.appendChild(postElement);
    });

    // Add recent posts to the sidebar
    blogPosts.slice(0, 3).forEach(post => { // Get the first 3 posts
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#'; // Replace with actual link to the post
        link.textContent = post.title;
        listItem.appendChild(link);
        recentPostsList.appendChild(listItem);
    });
});