import './style.css'
import axios from 'axios'
import Modal from './Modal'

export default {
  data() {
    return {
      bonneteauIndex: 0,
      cupAmount: [1, 2, 3],
      cupSelected: null,
      win: null,
      winAmount: 0,
      looseAmount: 0
    }
  },
  beforeMount () {
    this.fetchCup()
  },
  
  methods: {
    fetchCup () {
      axios.get('https://www.random.org/integers/?num=1&min=0&max=2&col=1&base=10&format=plain&rnd=new').then((response) => {
        this.bonneteauIndex = response.data
      })
    },
    resetCup () {
      this.fetchCup()
      this.cupSelected = null
      this.win = null
    },
    chooseCup (index) {
      this.cupSelected = index
      if (this.bonneteauIndex === this.cupSelected) {
        this.winAmount++
        this.win = true
      } else {
        this.looseAmount++
        this.win = false
      }
    },
  },
  render(h) { // eslint-disable-line no-unused-vars
    return (
      <div class='Game-wrapper'>
        <div class='Game-scores'>
          <div>Wins: {this.winAmount}</div>
          <div>Looses: {this.looseAmount}</div>
        </div>
        <Modal 
          win={this.win}
          resetCup={this.resetCup}
        />
        <div class='Cup-wrapper'>
          {this.cupAmount.map(({}, index) => {
            if (index === this.bonneteauIndex) {
              return (
                <div class='CupWinning-wrapper'>
                  <div class='Cup-ball' />
                  <img
                    class={`${this.cupSelected === index ? 'isSelected' : ''} GameWrapper-cup`}
                    onClick={() => this.chooseCup(index)}
                    src='https://2100.intervarsity.org/sites/2100/files/red_cup_0.png'
                  />
                </div>
              )
            }
            return (
              <img 
                class={`${this.cupSelected === index ? 'isSelected' : ''} GameWrapper-cup`}
                onClick={() => this.chooseCup(index)}
                src='https://2100.intervarsity.org/sites/2100/files/red_cup_0.png' 
              />
            )
          })}
        </div>
      </div>
    )
  }
}

