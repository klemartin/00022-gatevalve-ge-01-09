input.onButtonPressed(Button.A, function () {
    if (mod == 0) {
        if (kiBeMenetStatusz == 1) {
            kitronik.motorOn(kitronik.Motors.Motor1, kitronik.MotorDirection.Forward, forgasSebesseg)
            basic.pause(forgasido)
            kitronik.motorOn(kitronik.Motors.Motor1, kitronik.MotorDirection.Forward, 0)
            for (let index = 0; index < 5; index++) {
                eloreKorrekcio()
                basic.pause(100)
            }
            kiBeMenetStatusz = 0
        }
    } else if (mod == 1) {
        eloreKorrekcio()
    }
})
function hatraKorrekcio () {
    kitronik.motorOn(kitronik.Motors.Motor1, kitronik.MotorDirection.Reverse, gyorsForgasSebesseg)
    basic.pause(gyorsForgasido)
    kitronik.motorOn(kitronik.Motors.Motor1, kitronik.MotorDirection.Forward, 0)
}
function eloreKorrekcio () {
    kitronik.motorOn(kitronik.Motors.Motor1, kitronik.MotorDirection.Forward, gyorsForgasSebesseg)
    basic.pause(gyorsForgasido)
    kitronik.motorOn(kitronik.Motors.Motor1, kitronik.MotorDirection.Forward, 0)
}
input.onButtonPressed(Button.AB, function () {
    if (mod == 0) {
        mod = 1
    } else if (mod == 1) {
        mod = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (mod == 0) {
        if (kiBeMenetStatusz == 0) {
            kitronik.motorOn(kitronik.Motors.Motor1, kitronik.MotorDirection.Reverse, forgasSebesseg)
            basic.pause(forgasido)
            kitronik.motorOn(kitronik.Motors.Motor1, kitronik.MotorDirection.Reverse, 0)
            kiBeMenetStatusz = 1
        }
    } else if (mod == 1) {
        hatraKorrekcio()
    }
})
let mod = 0
let kiBeMenetStatusz = 0
let gyorsForgasSebesseg = 0
let forgasSebesseg = 0
let gyorsForgasido = 0
let forgasido = 0
forgasido = 600
gyorsForgasido = 20
forgasSebesseg = 40
gyorsForgasSebesseg = 90
kiBeMenetStatusz = 0
mod = 0
basic.forever(function () {
    if (mod == 0) {
        basic.showNumber(kiBeMenetStatusz)
    } else {
        basic.showString("javitas mod")
    }
})
