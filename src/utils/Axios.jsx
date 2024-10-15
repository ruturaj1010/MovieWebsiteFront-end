import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmUwZDk5YzI4MWFhYjYwZTE1NWIyMmJkNTdlNTU0OCIsIm5iZiI6MTcyOTAxODA4OC45OTMyMDcsInN1YiI6IjY3MGViNjQ3OWYzNTMxZTZiMjZjOTNlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GHeKH4YK4U8BYx_RVETX_QuGxa4KHazYk0zfGUBSYXM'
    }
})

export default instance;