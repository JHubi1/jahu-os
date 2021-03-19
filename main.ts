input.onButtonPressed(Button.A, function () {
    if (a.includes("menu")) {
        a = ""
        // Type code in the next line
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (ab.includes("start")) {
        basic.pause(500)
        Menu(false, false)
    }
    ab = ""
})
input.onButtonPressed(Button.B, function () {
    if (b.includes("menu")) {
        b = ""
        // Type code in the next line
        basic.clearScreen()
    }
})
function Menu (A: boolean, B: boolean) {
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.showArrow(ArrowNames.West)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        # . # . .
        # # # . #
        `)
    basic.pause(100)
    basic.showArrow(ArrowNames.East)
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
    a = "menu"
    b = "menu"
}
let b = ""
let a = ""
let ab = ""
basic.pause(100)
ab = ""
basic.showLeds(`
    . # . . .
    # # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.pause(100)
ab = "start"
basic.forever(function () {
	
})
