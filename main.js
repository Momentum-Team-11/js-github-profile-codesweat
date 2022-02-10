console.log('Hello World');
// const url = 'https://api.github.com/users/codesweat';
// fetch(url)


fetch('https://api.github.com/users/codesweat')
    .then((response) => response.json())
    .then((data) => {
        const root = document.getElementById('root');      
        console.log(root);
        console.log(root.innerHTML)
        // container div starts line 14
        root.innerHTML = `
            <div id="content" class="content is-flex is-align-content-space-between is-flex-direction-column p*">
                <section id="laguid-lavender" class="box is-flex section is-justify-content-space-between is-align-items-center"> 
                <figure class="image is-128x128">
                    <img class="is-rounded" src=${data.avatar_url} width="300"/>
                    </figure>
                    <h3>${data.name}</h3> 
                </section>
                <section class="box is-flex is-align-items-center section is-justify-content-space-between">
                    <div class="is-flex is-flex-direction-column">
                        <p>Location: ${data.location}</p>
                        <p>GitHub Username: ${data.login}</p>
                        <a href=${data.html_url} target="_blank">GitHub URL: ${data.html_url}</a>
                    </div>
                    <p class="is-flex is-align-items-center">${data.bio}</p>
                </section>
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
         content.innerHTML += `
            <section id="repos" class="box section is-flex is-flex-direction-column">
                <h4>Github Repos</h4> 
            </section>
         `
         for (let repo of repos) {
             console.log("repo", repo)
             console.log("repos", repos)
             let repoDiv = document.getElementById("repos")
             repoDiv.innerHTML += ` 
             <a href=${repo.html_url} target="_blank">
                     ${repo.name}
                 </a>
             `
         }
     })