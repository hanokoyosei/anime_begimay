import React, { useReducer } from "react";
import axios from "axios";
export const videosContext = React.createContext(); //создаем контекст
const API = "http://localhost:8000/movies";

const INIT_STATE = {
  videos: [],
  details: null,
  edit: null,
  //здесь пишем начальное значение
};
const reducer = (state = INIT_STATE, action) => {
  // создаем кейсы
  switch (action.type) {
    case "GET_VIDEOS":
      return {
        ...state,
        videos: action.payload.data,
      };
    case "GET_DETAILS":
      return {
        ...state,
        details: action.payload.data,
      };
    default:
      return state;
  }
};
const VideosСontextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // получаем dispatch, чтоб менять state
  const createVideo = async (newVideo) => {
    await axios.post(API, newVideo);
    getVideos();
  };
  // пишем функции (пример выше)
  async function getVideos() {
    let res = await axios.get(API);
    console.log(res);
    dispatch({
      type: "GET_VIDEOS",
      payload: res,
    });
  }
  async function getDetails(id) {
    let res = await axios.get(`${API}/${id}`);
    console.log(res);
    dispatch({
      type: "GET_DETAILS",
      payload: res
    })
  }
  async function deleteMovie (id){
    await axios.delete(`${API}/${id}`)
    getVideos()
  }
  return (
    <videosContext.Provider
      value={{
        videos: state.videos,
        details: state.details,
        //  передаем под ключом videos измененный INIT_STATE.videos
        getVideos,
        createVideo,
        getDetails,
        deleteMovie
        // передаем функции
      }}
    >
      {children}
    </videosContext.Provider>
  );
};
export default VideosСontextProvider;
