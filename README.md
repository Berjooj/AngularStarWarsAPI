# Documentation

## Introduction

Welcome to the swapi, the Star Wars API! This documentation should help you familiarise yourself with the resources
available and how to consume them with HTTP requests. If you're after a native helper library then I suggest you scroll
down and check out what's available. Read through the getting started section before you dive in. Most of your problems
should be solved just by reading through it.

## Getting started

Let's make our first API request to the Star Wars API!

Open up a terminal and use curl or httpie to make an API request for a resource. In the example below, we're trying to
get the first planet, Tatooine:

```
    http swapi.dev/api/planets/1/
```

Here is the response we get:
```

    HTTP/1.0 200 OK
    Content-Type: application/json
    {
    "climate": "Arid",
    "diameter": "10465",
    "gravity": "1 standard",
    "name": "Tatooine",
    "orbital_period": "304",
    "population": "200000",
    "residents": [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/people/2/",
    ...
    ],
    "rotation_period": "23",
    "surface_water": "1",
    "terrain": "Dessert",
    "url": "https://swapi.dev/api/planets/1/"
    }

```

If your response looks slightly different don't panic. This is probably because more data has been added to swapi since we made this documentation.

## Base URL

The Base URL for swapi is:
```
    https://swapi.dev/api/ 
```



###### Source: https://swapi.dev/documentation#intro