# Tour d'horizon ES5 & ES2015
## Initialiser le répertoire
```sh
> npm init -f
```

## IE8
IE8 [ne prend pas en charge ES5](http://kangax.github.io/compat-table/es5/#ie8) mais sa propre variante de Javascript ([JScript](http://goo.gl/EKFi48)) basée sur ES3. La seule façon d'utiliser ES5 ou plus récent sur IE8 est de passer par une couche de compatibilité qui va émuler ES5 : [es5-shim](https://github.com/es-shims/es5-shim).

Attention toutefois, voici [ce qu'en dit Facebook](https://facebook.github.io/react/docs/working-with-the-browser.html) :
> We don't support older browsers that don't support ES5 methods, but you may find that your apps do work in older browsers if polyfills such as es5-shim and es5-sham are included in the page. **You're on your own if you choose to take this path.**

## Babel
Babel permet de transformer (transpiler) du code ES2015 en ES5, le rendant ainsi compatible à tous les navigateurs depuis IE9 (inclus).
- Installation
```sh
> npm install --save-dev babel-cli babel-preset-es2015
```
- `.babelrc`
```json
{
  "presets": ["es2015"]
}
```
- `package.json`
```json
{
  "scripts": {
    "build": "babel"
  }
}
```
- Transpiler :
```sh
> npm run build script.js
```

## Liens
- [Node](https://nodejs.org/en/)
- [Babel](https://babeljs.io/docs/setup/#installation)
- [es5-shim](https://github.com/es-shims/es5-shim)
