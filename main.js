console.log('Hello World');
// const url = 'https://api.github.com/users/codesweat';
// fetch(url)


fetch('https://api.github.com/users/codesweat')
    .then((response) => response.json())
    .then((data) => {
        const root = document.getElementById('root');      
        console.log(root);
        console.log(root.innerHTML)
        root.innerHTML = `
            <div id="content" class="content">
                <p>GitHub Username: ${data.login}</p>
                <img src=${data.avatar_url} width="300"/>
                <h3>${data.name}</h3>
            </div>
        `
       
        // let username = document.createElement('h3')
        // username.innerText = data.login
        // root.appendChild(username)
    })

     // fetch request to get my repos
     fetch('https://api.github.com/users/codesweat/repos')
     .then((response) => response.json())
     .then((repos) => {
         for (let repo of repos) {
             console.log("repo", repo)
             console.log("repos", repos)
             let contentDiv = document.getElementById("content")
             contentDiv.innerHTML += `
                 <div class="repo">
                     ${repo.name}
                 <div/>
             `
         }
     })