function time(arrowAngle) {
    let angle = parseFloat(arrowAngle)

    if (isNaN(angle)) return

    let y = arrowAngle - Math.floor(arrowAngle / 360).toFixed(2) * 360
    let z = Math.floor(y).toFixed(0)
    let x = y-z

    let h, m, s;
    if (y < 30) {
        h = 0
        m = +((y-h*30)*2).toFixed(2)
        s = +((m - Math.floor(m).toFixed(0))*60).toFixed(0)
    } else if (y < 60) {
        h = 1
        m = +((y-h*30)*2).toFixed(2)
        s = +((m - Math.floor(m).toFixed(0))*60).toFixed(0)
    } else if (y < 90) {
        h = 2
        m = +((y-h*30)*2).toFixed(2)
        s = +((m - Math.floor(m).toFixed(0))*60).toFixed(0)
    } else if (y < 120) {
        h = 3
        m = +((y-h*30)*2).toFixed(2)
        s = +((m - Math.floor(m).toFixed(0))*60).toFixed(0)
    } else if (y < 150) {
        h = 4
        m = +((y-h*30)*2).toFixed(2)
        s = +((m - Math.floor(m).toFixed(0))*60).toFixed(0)
    } else if (y < 180) {
        h = 5
        m = +((y-h*30)*2).toFixed(2)
        s = +((m - Math.floor(m).toFixed(0))*60).toFixed(0)
    } else if (y < 210) {
        h = 6
        m = +((y-h*30)*2).toFixed(2)
        s = +((m - Math.floor(m).toFixed(0))*60).toFixed(0)
    } else if (y < 240) {
        h = 7
        m = +((y-h*30)*2).toFixed(2)
        s = +((m - Math.floor(m).toFixed(0))*60).toFixed(0)
    } else if (y < 270) {
        h = 8
        m = +((y-h*30)*2).toFixed(2)
        s = +((m - Math.floor(m).toFixed(0))*60).toFixed(0)
    } else if (y < 300) {
        h = 9
        m = +((y-h*30)*2).toFixed(2)
        s = +((m - Math.floor(m).toFixed(0))*60).toFixed(0)
    } else if (y < 330) {
        h = 10
        m = +((y-h*30)*2).toFixed(2)
        s = +((m - Math.floor(m).toFixed(0))*60).toFixed(0)
    } else if (y < 360) {
        h = 11
        m = +((y-h*30)*2).toFixed(2)
        s = +((m - Math.floor(m).toFixed(0))*60).toFixed(0)
    }

    console.log([h.toString(),m.toFixed(0),s.toString()])
    return [h.toString(),m.toFixed(0),s.toString()]
}

time(344.324)