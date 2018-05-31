import './style.css'
export default {
  props: ['win', 'resetCup'],
  render(h) { // eslint-disable-line no-unused-vars
    return (
      <transition name='fade'>
        {this.win &&
          <div class='Game-win'>
            <div>Vous avez gagner ! Congratz !!!</div>
            <button 
              onClick={() => this.resetCup()}
              class='Button'
            >
              Recommencer
            </button>
          </div>
        }
        {(this.win === false) &&
          <div class='Game-loose'>
            <div>Vous avez avez perdu :(</div>
            <button 
              onClick={() => this.resetCup()}
              class='Button'
            >
              Recommencer
            </button>
          </div>
        }
      </transition>
    )
  }
}

