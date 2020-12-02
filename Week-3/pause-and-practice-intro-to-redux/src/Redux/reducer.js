var initState = {timer: 0, display: {miliseconds: 0, seconds: 0, minutes: 0, hours: 0}, laps:[]}

export default function reducer (state=initState, action) {
    switch(action.type){
        case "start": 
        console.log(state.display)
        return {
            ...state, display: {
                ...state.display, miliseconds: state.display.miliseconds < 1000? state.display.miliseconds + 100 : 0,
                seconds: state.display.seconds < 60?
                        state.display.seconds < 60 && state.display.miliseconds > 999?
                        state.display.seconds + 1:
                        state.display.seconds
                        :0,
                minutes: state.display.minutes < 60?
                        state.display.minutes < 60 && state.display.seconds > 59?
                        state.display.minutes + 1:
                        state.display.minutes
                        :0,
                hours: state.display.hours < 60?
                        state.display.hours < 60 && state.display.minutes > 59?
                        state.display.hours + 1:
                        state.display.hours
                        :0,
            }
        }
        case "reset":
            return{
                ...initState 
            }
        case "laps":
            return{
                ...state, laps: state.laps.concat([
                    `${state.display.hours} : ${state.display.minutes} : ${state.display.seconds} : ${state.display.miliseconds}`
                ]),
            }
        default: return state;
    }
}