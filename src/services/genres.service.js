import {genresURL} from "../constants";
import {axiosService} from "./axios.service";

const genresService = () => axiosService.get(genresURL)

export {
    genresService
}