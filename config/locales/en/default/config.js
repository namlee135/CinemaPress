module.exports = {
  "database": {
    "key": "FREE",
    "date": ""
  },
  "protocol": "http://",
  "subdomain": "",
  "botdomain": "",
  "botdomains": "",
  "domain": "example.com",
  "bomain": "",
  "alt": {
    "botdomain": "",
    "bomain": ""
  },
  "ru": {
    "domain": "",
    "subdomain": "",
    "bomain": "",
    "botdomain": "",
    "random": 0
  },
  "dns": {
    "cloudflare": {
      "email": "",
      "key": "",
      "proxied": "true"
    }
  },
  "blacklist": 0,
  "email": "support@example.com",
  "theme": "default",
  "country": "US",
  "language": "en",
  "random": 0,
  "homepage": "example.com",
  "redirect": {
    "from": [],
    "to": []
  },
  "geolite2": {
    "countries": [],
    "ips": []
  },
  "image": {
    "save": 1
  },
  "cache": {
    "time": 3600
  },
  "pagespeed": 0,
  "loadavg": {
    "one": 1200,
    "five": 960,
    "fifteen": 720,
    "message": "The server is overloaded by [percent] please come back later."
  },
  "publish": {
    "start": 400000,
    "stop": 10000000,
    "every" : {
      "hours": 2,
      "movies": 4
    },
    "text": 0,
    "required": [
      "poster"
    ],
    "thematic": {
      "type": "",
      "year": "",
      "genre": "",
      "country": "",
      "actor": "",
      "director": "",
      "query_id": "",
      "search": "",
      "kp_vote": 0,
      "imdb_vote": 0
    },
    "indexing": {
      "condition": ""
    }
  },
  "default": {
    "count": 15,
    "sorting": "kinopoisk-vote-up",
    "pages": 4,
    "lastpage": 0,
    "days": 0,
    "image": "/themes/default/public/desktop/img/player.png",
    "votes": {
      "kp": 5000,
      "imdb": 5000
    },
    "donotuse": ["actor","director","search"],
    "categories": {
      "countries": ["USA","France","Japan","Britain","Spain","Italy","Canada","India","Germany","Poland"],
      "genres": ['anime','biography','action','western','military','detective','children','adults','documentary','drama','game','history','comedy','concert','short film','crime','melodrama','music','cartoon','musical','news','adventure','real TV','family','sport','talk show','thriller','horrors','fantastic','film-noir','fantasy','ceremony'],
      "years": ["2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010"]
    },
    "types": {
      "movie": "!cartoon !anime !short !show !news !real !ceremony !concert !children !documentary",
      "serial": "!anime !short",
      "mult": "cartoon | children !anime !short",
      "multserial": "cartoon | children !anime !short",
      "anime": "anime",
      "tv": "show | news | real | ceremony | concert"
    },
    "moment": "DD MMM YYYY",
    "loc": 2000,
    "tag": 2000,
    "tags": {
      "list": ["year","genre"],
      "format": "[Type] [year] [genre] [country]"
    }
  },
  "codes": {
    "head": "",
    "footer": "<script>window.lazyLoadOptions = {};</script>\n<script async src='https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.3.0/dist/lazyload.min.js'></script>",
    "robots": "User-agent: *\nDisallow: /\nDisallow: /type/*/*\nDisallow: /type-*/*\nDisallow: /movie/*/*\nDisallow: /movie-*/*\nDisallow: /year/*/*\nDisallow: /year-*/*\nDisallow: /genre/*/*\nDisallow: /genre-*/*\nDisallow: /country/*/*\nDisallow: /country-*/*\nDisallow: /director/*/*\nDisallow: /director-*/*\nDisallow: /actor/*/*\nDisallow: /actor-*/*\nDisallow: /search\nDisallow: /*?sorting*\nDisallow: /*?tag*\nDisallow: /*?q*\nDisallow: /*?random*\nDisallow: /*?PageSpeed*\nDisallow: /*?desktop*\nDisallow: /*?year*\nDisallow: /*?genre*\nDisallow: /*?country*\nDisallow: /iframe\nDisallow: /noindex\nDisallow: /mobile-version/type/*/*\nDisallow: /mobile-version/type-*/*\nDisallow: /mobile-version/movie/*/*\nDisallow: /mobile-version/movie-*/*\nDisallow: /mobile-version/year/*/*\nDisallow: /mobile-version/year-*/*\nDisallow: /mobile-version/genre/*/*\nDisallow: /mobile-version/genre-*/*\nDisallow: /mobile-version/country/*/*\nDisallow: /mobile-version/country-*/*\nDisallow: /mobile-version/director/*/*\nDisallow: /mobile-version/director-*/*\nDisallow: /mobile-version/actor/*/*\nDisallow: /mobile-version/actor-*/*\nDisallow: /mobile-version/search\nDisallow: /mobile-version/*?sorting*\nDisallow: /mobile-version/*?tag*\nDisallow: /mobile-version/*?q*\nDisallow: /mobile-version/*?random*\nDisallow: /mobile-version/*?PageSpeed*\nDisallow: /mobile-version/*?desktop*\nDisallow: /mobile-version/*?year*\nDisallow: /mobile-version/*?genre*\nDisallow: /mobile-version/*?country*\nDisallow: /mobile-version/iframe\nDisallow: /mobile-version/noindex\nDisallow: /tv-version\nDisallow: /admin*"
  },
  "index": {
    "type": {
      "name": "Top [type]",
      "keys": "",
      "sorting": "kinopoisk-rating-up",
      "count": 15,
      "order": 2
    },
    "year": {
      "name": "Top movies from [year]",
      "keys": "2020",
      "sorting": "premiere-up",
      "count": 15,
      "order": 3
    },
    "genre": {
      "name": "Top movies from [genre]",
      "keys": "",
      "sorting": "imdb-vote-up",
      "count": 10,
      "order": 4
    },
    "country": {
      "name": "Top movies from [country]",
      "keys": "",
      "sorting": "imdb-rating-up",
      "count": 10,
      "order": 5
    },
    "actor": {
      "name": "Top movies with [actor]",
      "keys": "",
      "sorting": "kinopoisk-vote-up",
      "count": 10,
      "order": 6
    },
    "director": {
      "name": "Top movies with [director]",
      "keys": "",
      "sorting": "kinopoisk-vote-up",
      "count": 10,
      "order": 7
    },
    "ids": {
      "name": "New movies",
      "keys": "",
      "count": 10,
      "order": 1
    },
    "count": {
      "type": "year",
      "key": "2020",
      "sorting": "premiere-up"
    },
    "link": 0
  },
  "titles": {
    "index": "Information catalog of movies",
    "year" : "Movies from [year] [sorting] [page]",
    "years" : "Movies by year",
    "genre": "Movies from [genre] [sorting] [page]",
    "genres" : "Movies by genre",
    "country": "Movies from [country] [sorting] [page]",
    "countries": "Films by country",
    "actor": "Movies with [actor] [sorting] [page]",
    "actors": "Most popular actors",
    "director": "Movies that directed [director] [sorting] [page]",
    "directors": "Most popular directors",
    "type": "[Type] [year] [genre] [country] [sorting] [page]",
    "search" : "Search «[search]» [sorting] [page]",
    "num": "on page [num]",
    "movie": {
      "movie": "(movies) { Movie «[title]» }\n(series) { TV-Series «[title]» }\n(cartoons) { Cartoon «[title]» }\n(animated) { Animated «[title]» }\n(anime) { Anime «[title]» }\n(tv) { TV-show «[title]» }\n(default) { «[title]» }",
      "online": "[title] online",
      "download": "[title] download",
      "trailer": "[title] trailer",
      "picture": "[title] picture"
    },
    "sorting": {
      "kinopoisk-rating-up": "sorted by rating KP",
      "kinopoisk-rating-down": "sorted by rating KP",
      "imdb-rating-up": "sorted by rating IMDb",
      "imdb-rating-down": "sorted by rating IMDb",
      "kinopoisk-vote-up": "sorted by popularity on KP",
      "kinopoisk-vote-down": "sorted by popularity on KP",
      "imdb-vote-up": "sorted by popularity on IMDb",
      "imdb-vote-down": "sorted by popularity on IMDb",
      "year-up": "sorted by year",
      "year-down": "sorted by year",
      "premiere-up": "sorted by premiere",
      "premiere-down": "sorted by premiere"
    }
  },
  "h1": {
    "index": "All movies in the world",
    "year" : "Movies from [year] [sorting] [page]",
    "years" : "Movies by year",
    "genre": "Movies from [genre] [sorting] [page]",
    "genres" : "Movies by genre",
    "country": "Movies from [country] [sorting] [page]",
    "countries": "Films by country",
    "actor": "Movies with [actor] [sorting] [page]",
    "actors": "Most popular actors",
    "director": "Movies that directed [director] [sorting] [page]",
    "directors": "Most popular directors",
    "type": "[Type] [year] [genre] [country] [sorting] [page]",
    "search" : "Search «[search]» [sorting] [page]",
    "num": "on page [num]",
    "movie": {
      "movie": "[title] [year]",
      "online": "[title] [year] online",
      "download": "[title] [year] download",
      "trailer": "[title] [year] trailer",
      "picture": "[title] [year] picture"
    },
    "sorting": {
      "kinopoisk-rating-up": "sorted by rating KP",
      "kinopoisk-rating-down": "sorted by rating KP",
      "imdb-rating-up": "sorted by rating IMDb",
      "imdb-rating-down": "sorted by rating IMDb",
      "kinopoisk-vote-up": "sorted by popularity on KP",
      "kinopoisk-vote-down": "sorted by popularity on KP",
      "imdb-vote-up": "sorted by popularity on IMDb",
      "imdb-vote-down": "sorted by popularity on IMDb",
      "year-up": "sorted by year",
      "year-down": "sorted by year",
      "premiere-up": "sorted by premiere",
      "premiere-down": "sorted by premiere"
    }
  },
  "descriptions": {
    "index": "How many films have you seen at the moment? Most likely, quite a few, several hundred, and maybe thousands, if you are an avid moviegoer and do not imagine an evening, without viewing one or several films. Either you probably very much like serials and spend the evenings watching several series of an entertaining series. Whatever it was, We are very pleased that you have chosen our site as a platform for discussion and discussion with the same film enthusiasts as you. Sit back comfortably, make tea and start <span style='text-decoration:line-through'>screaming</span> criticism :)",
    "year" : "Movies from [year]",
    "years" : "Movies by year",
    "genre": "Movies from [genre]",
    "genres" : "Movies by genre",
    "country": "Movies from [country]",
    "countries": "Films by country",
    "actor": "Movies with [actor]",
    "actors": "Most popular actors",
    "director": "Movies that directed [director]",
    "directors": "Most popular directors",
    "type": "[Type] [year] [genre] [country]",
    "search" : "Search «[search]»",
    "movie": {
      "movie": "The picture «[title]» was released in [year] year and immediately won the attention of viewers in different parts of the earth. Film genre [genre] has always been very popular, moreover, when they are shot by such eminent directors as [director]. The country that put a hand to this film is considered [country], because viewers can already approximately imagine the level of [color|logic|art|pictures] for similar creations.",
      "online": "[title] online",
      "download": "[title] download",
      "trailer": "[title] trailer",
      "picture": "[title] picture"
    }
  },
  "sorting": {
    "kinopoisk-rating-up": "Rated KP ⬆",
    "kinopoisk-rating-down": "Rated KP ⬇",
    "imdb-rating-up": "Rated IMDb ⬆",
    "imdb-rating-down": "Rated IMDb ⬇",
    "kinopoisk-vote-up": "Popularity KP ⬆",
    "kinopoisk-vote-down": "Popularity KP ⬇",
    "imdb-vote-up": "Popularity IMDb ⬆",
    "imdb-vote-down": "Popularity IMDb ⬇",
    "year-up": "Year ⬆",
    "year-down": "Year ⬇",
    "premiere-up": "Premiere ⬆",
    "premiere-down": "Premiere ⬇"
  },
  "urls": {
    "prefix_id": "id",
    "unique_id": 0,
    "separator": "-",
    "translit": 0,
    "movie_url": "[prefix_id][separator][title]",
    "movie": "movie",
    "year" : "year",
    "genre": "genre",
    "country": "country",
    "actor": "actor",
    "director": "director",
    "type": "type",
    "search" : "search",
    "sitemap" : "sitemap",
    "admin": "admin-secret",
    "types": {
      "serial": "series",
      "movie": "movies",
      "mult": "cartoons",
      "multserial": "animated",
      "tv": "tv",
      "anime": "anime"
    },
    "movies": {
      "online": "",
      "download": "",
      "trailer": "",
      "picture": ""
    },
    "noindex": "noindex",
    "slash": "/"
  },
  "l": {
    "more": "More",
    "home": "Home",
    "information": "Information",
    "online": "Online",
    "download": "Download",
    "trailer": "Trailer",
    "picture": "Picture",
    "episode": "Episode",
    "movies": "Movies",
    "series": "Series",
    "cartoons": "Cartoons",
    "animated": "Animated",
    "tv": "TV",
    "anime": "Anime",
    "collection": "Collection",
    "collections": "Collections",
    "season": "Season",
    "year": "Year",
    "years": "Years",
    "genre": "Genre",
    "genres": "Genres",
    "actor": "Actor",
    "actors": "Actors",
    "director": "Director",
    "directors": "Directors",
    "country": "Country",
    "countries": "Countries",
    "quality": "Quality",
    "translate": "Translate",
    "premiere": "Premiere",
    "rating": "Rating",
    "kp": "KP",
    "imdb": "IMDb",
    "episodes": "episodes",
    "storyline": "Storyline",
    "later": "Watch later",
    "continue": "Continue",
    "saved": "Saved",
    "allCategories": "All categories",
    "allYears": "All years",
    "allGenres": "All genres",
    "allCountries": "All countries",
    "allActors": "All actors",
    "allDirectors": "All directors",
    "watched": "You recently watched",
    "search": "Search",
    "share": "Share",
    "subscribe": "Subscribe",
    "vk": "VK",
    "facebook": "facebook",
    "twitter": "Twitter",
    "google": "Google",
    "telegram": "Telegram",
    "youtube": "YouTube",
    "instagram": "Instagram",
    "up": "Up",
    "soon": "Coming soon",
    "contacts": "Contacts",
    "news": "News",
    "menu": "Menu",
    "comments": "Comments",
    "movieTitle": "Movie title",
    "votes": "votes",
    "hide": "Hide",
    "navigation": "Navigation",
    "and": "and",
    "overall": "Overall",
    "premieres": "Premieres",
    "popular": "Popular",
    "top": "Top",
    "sorting": "Sorting",
    "tags": "Tags",
    "mentions": "Mentions",
    "said": "said",
    "full": "Full version",
    "original": "Original",
    "submit": "Submit",
    "like": "Like",
    "dislike": "Dislike",
    "reply": "Reply",
    "bold": "bold",
    "italic": "italic",
    "spoiler": "spoiler",
    "username": "User name",
    "yes": "Yes",
    "not": "Not",
    "comment": "Comment...",
    "notFound": "This page is not on the site. Maybe you made a mistake in the URL or it is an internal site error, which the administrator already knows and is taking steps to fix it.",
    "notMobile": "Mobile version of the site is not activated. The site adapts to the screen and is equally beautifully displayed, both on large screens and on mobile devices running iOS, Android or WindowsPhone.",
    "notTv": "TV version of the site is not activated.",
    "lucky": "I'm Feeling Lucky",
    "random": "Random movie from category",
    "results": "All results",
    "moreEpisodes": "show more episodes",
    "downloading": "Download",
    "safety": "Safety",
    "instruction": "Instruction",
    "legal": "Images/videos may be subject to copyright. Learn More"
  }
};