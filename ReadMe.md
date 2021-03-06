# Dino Sprint Namer
[![NPM Version](https://img.shields.io/npm/v/dino-sprint-namer.svg)](https://www.npmjs.com/package/dino-sprint-namer) ![Node Publish](https://github.com/edm00se/dino-sprint-namer/workflows/Node%20CI/badge.svg) ![Node Build](https://github.com/edm00se/dino-sprint-namer/workflows/Release/badge.svg) [![Code Coverage](https://img.shields.io/codecov/c/github/edm00se/dino-sprint-namer.svg)](https://codecov.io/gh/edm00se/dino-sprint-namer) [![License](https://img.shields.io/npm/l/dino-sprint-namer.svg)](https://www.npmjs.com/package/dino-sprint-namer#license)

Provides a dinosaur sprint name in the format of `<adjective> <dinosaur>`.

## Installation

```sh
npm install --global dino-sprint-namer
```

## Usage

### Try CLI

```sh
npx dino-sprint-namer (a)
```

### CLI

To use, invoke the CLI tool via:

```sh
dino-sprint-namer (a)
```

### Module

```js
const dinos = require('dino-sprint-namer');

console.log('random dino: ', dinos.random());
console.log('dino that starts with a: ', dinos.startsWith('a'));
```

### Specifying Starting Letter

An optional starting letter can be specified as an argument. This will cause both the adjective (first word) and dinosaur name to start with the corresponding letter.

### Updating

To rebuild the array of dinosaurs from `dinos.js`:

- navigate to [the A-Z listing](http://www.nhm.ac.uk/discover/dino-directory/name/name-az-all.html)
  - this must be done in a browser from the site, as they use the appropriate CORS and CSP headers to prevent fetching from another origin
- in js console, execute:
  ```js
  var list = document.querySelector('.dinosaurfilter--container');
  var dinoList = Array.from(list.querySelectorAll('p.dinosaurfilter--name')).map(el => el.innerText.trim());
  var dinoAr = Array.from(list.querySelectorAll('p.dinosaurfilter--name')).map(el => {
    return {
      name: el.innerText.trim(),
      url: el.parentElement.href
    };
  });
  console.log(dinoAr);
  ```

### Images

The `dinos.js` array includes a reference to the dinosaur specific page. From that page, the image can be grabbed as such:

```js
var article = document.querySelector('dinosaur--container');
var img = article.querySelector('img.dinosaur--image');
```

A future feature is to include an image from the resulting:

- top clipart search result (a la "I'm feeling lucky" from Google) for the adjective
- the selected dinosaur

## Inspiration

To eliminate the madness of semi-randomly selecting dinosaur names as sprint names, this should provide a consistent naming scheme and ability to provision the starting letter, for progression.

## Credits

I'm grabbing the list of dinosaurs from [The Natural History Museum of the UK](http://www.nhm.ac.uk/).

## License

MIT
