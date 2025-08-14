const posts = [
    {
        title: "Metin Şifreleme",
        content: "Verilen bir kelimeyi şifreleme ve şifreli olarak verilen bir kelimeyi veya cümleyi şifrelemeye yarayan basit, web üzerinde çalışan bir araçtır. Kendi içinde şifreler ve şifreleri çözer."
    },
    {
        title: "Diğer Projeler",
        content: "Öbür projelerim etik olmayan hak ihlalleri sebebiyet vereceğinden dolayı kendimce görünmez kılınmıştır."
    }
];

function renderPosts() {
    const postsContainer = document.getElementById('posts');
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        postsContainer.appendChild(postDiv);
    });
}

window.onload = renderPosts;
