import axiosClient from "./axiosClient";
import { ICategory } from '../interfaces/ICategory'
import { IMovieType } from '../interfaces/IMovieType'
import { ITvType } from '../interfaces/ITvType'


export const category:ICategory ={
  movie: 'movie',
  tv: 'tv'
}

export const movieType:IMovieType={
  upcoming: 'upcoming',
  popular: 0,
  top_rated: 0,
  // type: ''

}

export const tvType:ITvType={
  popular: 0,
  top_rated: 0,
  on_the_air: false,
  // type: ''
}

const tmdbApi ={
  getMoviesList: (type:number, params:any)=>{
    const url = 'movie/' + movieType[type]
    return axiosClient.get(url, params)
  },
  getTvList: (type:number, params:any)=>{
    const url = 'movie/' + TvType[type]
    return axiosClient.get(url, params)
  },
  getVideos: (cate:any, id:number)=>{
    const url = category[cate] + '/' + id + '/videos'
    return axiosClient.get(url, {params:{}})
  },
  search: (cate:any, params:any)=>{
    const url = 'search/'+ id + category[cate]
    return axiosClient.get(url, params)
  },
  details: (cate:any,id:number, params:any)=>{
    const url = category[cate] + '/' + id
    return axiosClient.get(url, params)
  },
  credits: (cate:any,id:number)=>{
    const url = category[cate] + '/' + id + '/credits'
    return axiosClient.get(url, {params:{}})
  },
  similar: (cate:any,id:number )=>{
    const url = category[cate] + '/' + id + '/similar'
    return axiosClient.get(url, {params:{}})
  },
  
}

export default tmdbApi