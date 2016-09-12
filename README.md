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
- Fichier de configuration : `.babelrc`
- Transpiler (via le script `build` du `package.json`)
```sh
> npm run build script.js
```

## ESLint
ESLint est un descendant de JSHint et JSLint. Plus modulaire, il permet une plus grande granularité dans les [options de linting proposées](http://eslint.org/docs/rules/) et peut utiliser un parser custom pour, par exemple, utiliser Babel (et donc pouvoir analyser un code dont par défaut, il ne prend pas encore en charge la syntaxe).
- Installation
```sh
> npm install --save-dev eslint babel-eslint
```
- Fichier de configuration : `.eslintrc`
- Analyser (via le script `lint` du `package.json`)
```sh
> npm run lint script.js
```

## Liens
- [The Two Pillars of JavaScript - Parts 1 & 2](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3) ([code examples](https://github.com/learn-javascript-courses/composition-examples#composition-examples))
- [Babel](https://babeljs.io/docs/setup/#installation)
- [es5-shim](https://github.com/es-shims/es5-shim)
- [Getting Started with ESLint](http://eslint.org/docs/user-guide/getting-started)
- [Configuring ESLint](http://eslint.org/docs/user-guide/configuring)
- [Lint Like It’s 2015](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48)
