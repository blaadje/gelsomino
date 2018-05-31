<template>
  <div class="starter-template">
    <div class="row">
      <div class="col-xs-12">
        <h1>Le Bonneteau</h1>
      </div>
      <div class="col-xs-6">
        <p>Le bonneteau est un jeu d'argent, un jeu de dupes de l'ordre de l'escroquerie, proposé à la sauvette sur les marchés et dans les lieux statics. Il est pratiqué au moins depuis le xive siècle en France, et encore dans de nombreux pays.</p>
        <a href="https://fr.wikipedia.org/wiki/Bonneteau">enfin d'après wikipédia en tout cas…</a>
        <h2>Règles</h2>
        <p>Le but du jeu est assez simple, on montre un objet, puis on le cache sous l'une des trois propositions.
            Qui peuvent être des cartes ou des gobelets qui cachent un dé. Dans notre cas: des coquillages et une perle. (On est de grands poètes chez back market).
            Ensuite, on mélange les propositions et l'utilisateur doit faire un choix pour retrouver son objet.
            On lui dit si il a perdu ou gagné.</p>
      </div>
      <div class="col-xs-4">
        <img src="http://jamiemason.github.io/front-end-engineer-interview-exercise/static/cat-game-of-shells.gif">
      </div>
    </div>
    <div class="row">
      <div class="col-xs-8">
        <h2>L'objectif de cet entretien</h2>
        <p>$$$$VARNAME$$$$ ta mission si tu l'acceptes, est de <strong>coder un petit jeu de bonneteau</strong></p>
        <p>
          L'objectif prioritaire étant de fournir un jeu qui marche. <em>Parcequ'on aimerait bien pouvoir s'amuser ici. ;)</em><br>
        </p>
        <h2>Le code</h2>
        <p>Il faut réaliser une application en javascript qui effectue un call XHR vers cette url: <pre>https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new</pre>
          Cette API renvoie une valeur entre 0 et 2 de manière aléatoire. Il faut l'utiliser pour définir au moment du mélange sous quel coquillage se cache la perle.
        </p>
        <p>Pour le code tu peux utiliser tous les frameworks que tu veux. Et te documenter comme tu veux sur google, stackoverflow etc… <br>
          Tu as une liberté totale sur les éventuels styles ou animations. Je te fournis 2 images, tu peux les utiliser si tu le souhaite ou utiliser complètement autrechose.
        </p>
        <p>
          On parlera ensuite de ce que tu as fais et ce que tu aurais voulu faire.
          <br>
          <strong>Amuse-toi bien !</strong>
        </p>
        <br>
        <img src="static/logo.png" style="max-width: 20.7rem; display: block; margin-top: 0rem; margin-bottom: 0.7rem ">
        <p>L'Équipe des dev de Backmarket</p>
        <h2 style="margin-top:5rem">Ressources</h2>
        <img src="static/pearl.jpeg">
        <img src="static/shell.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
