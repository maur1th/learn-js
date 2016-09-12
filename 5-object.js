const assert = require('assert')

// 1. Object.assign (ES 5)

// Permet de copier toutes propriétés propres d'un ou plusieurs objets vers un
// autre objet
{
  const dog = {
    say() {
      return 'woof'
    },
    getName() {
      return this.name
    },
  }

  const sam = Object.assign({name: 'Sam'}, dog)
  const oliver = Object.assign({name: 'Oliver'}, dog)

  assert(`${sam.say()} I'm ${sam.getName()}` === `woof I'm Sam`)
  assert(`${oliver.say()} I'm ${oliver.getName()}` === `woof I'm Oliver`)
}


// Object.assign permet donc également de faire des copies d'un objet de façon
// succinte
{
  const template = {name: 'default'}
  const remy = Object.assign({}, template)
  remy.name = 'Remy'

  assert(template.name === 'default')
  assert(remy.name === 'Remy')
}


// Object.assign permet également de faire de la `concatenative inheritance`
// c'est-à-dire de la composition d'objets (par opposition à l'héritage)
// Succintement, l'héritage c'est quand on définit ses objets par ce qu'ils
// sont, la composition c'est quand on définit ses objets par ce qu'ils font.
{
  const barker = (state) => ({
    bark: () => 'Woof, I am ' + state.name
  })

  const driver = (state) => ({
    drive: () => state.position = state.position + state.speed
  })

  const murderRobotDog = (name)  => {
  let state = {
    name,
    speed: 100,
    position: 0
  }
  return Object.assign(
        {},
        barker(state),
        driver(state)
    )
  }

  const bruno = murderRobotDog('Bruno')
  assert(bruno.bark() === 'Woof, I am Bruno')
}


// Pour plus d'informations sur l'héritage prototypal, la composition et les
// différences avec l'héritage classique cf. lien dans le fichier README
// Autres fonctions importants liées à l'héritage :
// Object.create()          http://goo.gl/gkNgR4
// Object.defineProperty()  http://goo.gl/ihvqj1



// 2. Fonctions utilitaires

// ES5 : Object.keys retourne une array des clés de l'objet
{
  const msg = {
    from: 'Michelle',
    to: 'Claire',
    text: 'Hey! How are you?',
  }

  assert.deepEqual(Object.keys(msg), ['from', 'to', 'text'])

  // cela permet par exemple d'itérer sur un objet
  Object.keys(msg).map( k => msg[k] = msg[k].toUpperCase())

  assert.deepEqual(msg, {
    from: 'MICHELLE',
    to: 'CLAIRE',
    text: 'HEY! HOW ARE YOU?',
  })
}


// ES 2017 : Le prochain standard EcmaScript permettra également d'itérer sur
// les valeurs et sur les paires clé/valeur
// Il est possible d'utiliser ces fonctionnalités dès aujourd'hui avec des
// polyfills : `npm install -S object.entries object.values`
if ( !Object.entries ) { require('object.entries').shim() }
if ( !Object.values ) { require('object.values').shim() }

{
  const msg = {
    from: 'Michelle',
    to: 'Claire',
    text: 'Hey! How are you?',
  }

  assert.deepEqual(Object.values(msg), ['Michelle', 'Claire', 'Hey! How are you?'])

  assert.deepEqual(Object.entries(msg), [
    ['from', 'Michelle'],
    ['to', 'Claire'],
    ['text', 'Hey! How are you?'],
  ])

  // Object.entries permet d'itérer sur la clé et la valeur simultanément
  Object.entries(msg).filter( ([key, value]) => {
    // do stuff
  })
}
