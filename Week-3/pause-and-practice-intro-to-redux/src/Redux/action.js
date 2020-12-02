

export function start (startTime=0) {
    return({
        type: "start",
        data: startTime
    })
}
export function reset () {
    return({
        type: "reset",
    })
}
export function laps () {
    return({
        type: "laps",
    })
}