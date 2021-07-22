input.onButtonPressed(Button.A, function () {
    soundExpression.giggle.play()
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallDiamond)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    soundExpression.twinkle.play()
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallSquare)
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})
