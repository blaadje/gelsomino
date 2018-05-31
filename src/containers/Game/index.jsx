import './style.css'
import axios from 'axios'
import Modal from '@/containers/Modal'
import Cups from '@/containers/Cups'

export default {
  data() {
    return {
      bonneteauIndex: 0,
      cupAmount: [1, 2, 3], // not cool here i'd rather having a single number and map the number in the render
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

        <Cups 
          cupAmount={this.cupAmount}
          bonneteauIndex={this.bonneteauIndex}
          cupSelected={this.cupSelected}
          chooseCup={this.chooseCup}
      />
      </div>
    )
  }
}

