import {axiosService} from "./axios.service";
import {watchCountURL} from "../constants";

const setWatchCount = (views) => axiosService.post(watchCountURL, views)

export {
    setWatchCount
}