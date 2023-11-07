document.addEventListener('DOMContentLoaded', function() {
    const articlesContainer = document.getElementById('articles');
    const addArticleButton = document.getElementById('addArticle');

    const articles = [];

function renderArticles() {
    articlesContainer.innerHTML = '';
    articles.forEach((article, index) => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        articleDiv.innerHTML = `
            <h2>${article.title}</h2>
            <p class="content hidden">${article.content}</p>
            <button class="show-info">Show Article Info</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;

        const contentParagraph = articleDiv.querySelector('.content');
        const showInfoButton = articleDiv.querySelector('.show-info');

        showInfoButton.addEventListener('click', () => toggleContent(contentParagraph));

        articleDiv.querySelector('.edit').addEventListener('click', () => editArticle(index));
        articleDiv.querySelector('.delete').addEventListener('click', () => deleteArticle(index));

        articlesContainer.appendChild(articleDiv);
    });
}

function toggleContent(contentElement) {
    if (contentElement.classList.contains('hidden')) {
        contentElement.classList.remove('hidden');
    } else {
        contentElement.classList.add('hidden');
    }
}

    function addArticle() {
        const articleTitle = prompt('Enter article name:');
        if (articleTitle !== null && articleTitle.trim() !== '') {
            const articleContent = prompt('Enter article content:');
            if (articleContent !== null) {
                const newArticle = {
                    title: articleTitle,
                    content: articleContent,
                };
                articles.push(newArticle);
                renderArticles();
            }
        }
    }
    function toggleContent(contentElement) {
        if (contentElement.style.display === 'none' || contentElement.style.display === '') {
            contentElement.style.display = 'block';
        } else {
            contentElement.style.display = 'none';
        }
    }

    function editArticle(index) {
        const newContent = prompt('Edit content:', articles[index].content);
        if (newContent !== null) {
            articles[index].content = newContent;
            renderArticles();
        }
    }

    function deleteArticle(index) {
        const confirmation = confirm('Are you sure you want to delete this article?');
        if (confirmation) {
            articles.splice(index, 1);
            renderArticles();
        }
    }

    addArticleButton.addEventListener('click', addArticle);

    renderArticles();
});
