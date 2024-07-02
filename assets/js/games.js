import { UI } from './ui.js';
import { Game } from './game.js';

export class Games {
    constructor() {
        this.games = [];
        /// get first category
        let link = document.querySelector('.nav-link.active');
        this.getGames(link.getAttribute('data-category'));
        this.initEvents();
    }

    initEvents() {
        let links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                /// remove active class from all links
                links.forEach(l => {
                    l.classList.remove('active');
                });
                /// add active class to the clicked link
                e.target.classList.add('active');

                let category = e.target.getAttribute('data-category');
                this.getGames(category);
            });
        });
    }

    async getGames(category = null) {
        /// showing loading screen
        let loading = document.querySelector('.loading');
        loading.classList.remove('d-none');
        let url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
        if (category != null) {
            url += '?category=' + category;
        }
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '365b53fabamsh2252037ddec51dcp19bf89jsnfb30aead9acd',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        this.games = await fetch(url, options)
            .then(response => response.json())
            .then(data => {
                return data
            });

        let ui = new UI();
        ui.displayGames(this.games);


        /// handle card click event
        let cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click',function(e) {
                let id = this.getAttribute('data-id');
                new Game(id);
            });
        });

        /// hiding loading screen
        loading.classList.add('d-none');
    }
}


