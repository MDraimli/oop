import { UI } from './ui.js';

export class Game {
    constructor({
        id
    }) {
        this.id = id;
        this.getGame(id);
        document.querySelector('.btn-close').addEventListener('click', () => this.close());
    }

    close() {
        document.querySelector(".loading").classList.add('d-none');
        document.querySelector('.games').classList.remove('d-none');
        document.querySelector('.details').classList.add('d-none');
    }

    async getGame(id) {
        document.querySelector(".loading").classList.remove('d-none');
        const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '365b53fabamsh2252037ddec51dcp19bf89jsnfb30aead9acd',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            document.querySelector(".loading").classList.add('d-none');
            document.querySelector('.games').classList.add('d-none');
            document.querySelector('.details').classList.remove('d-none');

            let result = await response.json();
            let ui = new UI();
            ui.displayDetails(result);

        } catch (error) {
        }

    }
}
