import store from "./Redux/index"
import {addMovie} from "./Redux/movies"
import {removeMovie} from "./Redux/movies"
import {getMovie} from "./Redux/movies"
import {addTVShow} from "./Redux/tvShows"
import {removeTVShow} from "./Redux/tvShows"
import {getTVShow} from "./Redux/tvShows"

store.dispatch(addMovie("Star Wars Episode I: Phantom Menace"))
store.dispatch(addMovie("Star Wars Episode II: Attack of the Clones"))
store.dispatch(addMovie("Star Wars Episode III: Revenge of the Sith"))
store.dispatch(addMovie("Star Wars Episode IV: A New Hope"))
store.dispatch(addMovie("Star Wars Episode V: The Empire Strikes Back"))
store.dispatch(addMovie("Star Wars Episode VI: Return of the Jedi"))
store.dispatch(addMovie("Star Wars Episode VII: The Force Awakens"))

store.dispatch(removeMovie("Star Wars Episode VII: The Force Awakens"))

store.dispatch(getMovie)



store.dispatch(addTVShow("Mandalorian"))
store.dispatch(addTVShow("Star Wars The Clone Wars"))
store.dispatch(addTVShow("Star Wars Rebels"))

store.dispatch(removeTVShow("Star Wars Rebels"))

store.dispatch(getTVShow)