import {axiosService} from "./axios.service";
import {showURL} from "../constants";

const getShowsInfo = (episode, series) => axiosService.get(showURL+(episode ?`&episode=${episode}` : '') + (series ?`&series=${series}` : ''))



export {
    getShowsInfo
}