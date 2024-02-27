import { getData } from './utils.js';

export const projects = ()=>{
    document.querySelector('.github-projects').innerHTML = "";
    getData('./assets/data.json', (e) => {
        for (let i = 0; i < 6; i++){
            const element = e[i];
            console.log(element);
            document.querySelector('.github-projects').innerHTML += `
            <div class="github-cards">
                <h3>${element.name}</h3>
                <div><p>Language:</p><p class="font-bold">${element.language}</p></div>
                <div><p>Created:</p><p class="font-bold">${element.created}</p></div>
                <div>
                    <a href="${element.webpage_url}" target="_blank">Page</a>
                    <a href="${element.repo_url}" target="_blank">Repo</a>
                </div>
            </div>
            `;
        }
    });
}
