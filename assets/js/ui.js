export class UI {
    constructor() {
    }

    displayGames(games) {
        let container = document.querySelector('#gameData');
        games.forEach(game => {
            let card = this.renderCard(
                game.id,
                game.title,
                game.thumbnail,
                game.short_description,
                game.genre,
                game.platform
            );
            container.innerHTML += card;
        });

    }

    displayGame(game) {
    }

    renderCard(id, title, thumbnail, short_description, genre, platform) {
        return `<div class="col">
            <div data-id="${id}" class="card h-100 bg-transparent" role="button" "="">
                <div class=" card-body">
                    <figure class="position-relative">
                        <img class="card-img-top object-fit-cover h-100" src="${thumbnail}">
                    </figure>
                    <figcaption>

                        <div class="hstack justify-content-between">
                            <h3 class="h6 small">${title}</h3>
                            <span class="badge text-bg-primary p-2">Free</span>
                        </div>

                        <p class="card-text small text-center opacity-50">
                           ${short_description}
                        </p>

                    </figcaption>
                </div>

                <footer class="card-footer small hstack justify-content-between">

                    <span class="badge badge-color">${genre}</span>
                    <span class="badge badge-color">${platform}</span>

                </footer>
            </div>
        </div>`
    }

    displayDetails(data) {
        const content = `
        <div class="col-md-4">
        <img src="${data.thumbnail}" class="w-100" alt="image details" />
     </div>
     <div class="col-md-8">
        <h3>Title: ${data.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
        <p class="small">${data.description}</p>
        <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
     </div>
        
        `;

        document.getElementById("detailsContent").innerHTML = content;
    }
}

