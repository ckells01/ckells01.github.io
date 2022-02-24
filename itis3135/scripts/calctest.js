
const calculator = document.querySelector(".calculator")
const display = calculator.querySelector(".calculator__display")
const keys = calculator.querySelector(".calculator__keys")

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType

    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove("is-depressed"))

    if (!action) {
      console.log('number key!')
    }

    if (action === "decimal") {
      display.textContent = displayedNum + "."
    }

    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      console.log('operator key!')
    }

    if (action === "clear") {
      console.log("clear key!")
    }
    if (action === 'decimal') {
      console.log('decimal key!')
    }

    if (action === 'clear') {
      console.log('clear key!')
    }

    if (action === 'calculate') {
      console.log('equal key!')
    }

  }
})


