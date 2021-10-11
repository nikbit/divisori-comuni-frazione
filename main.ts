input.onButtonPressed(Button.A, function () {
    divisore += 1
    basic.showNumber(divisore)
})
input.onButtonPressed(Button.AB, function () {
    if (num % divisore == 0 && den % divisore == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    divisore += -1
    basic.showNumber(divisore)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    num = randint(2, 30)
    basic.showNumber(num)
    basic.showString("/")
    den = randint(2, 30)
    basic.showNumber(den)
})
let divisore = 0
let den = 0
let num = 0
num = 0
den = 0
