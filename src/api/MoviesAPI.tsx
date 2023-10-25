import axios from 'axios'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import IMovies from '../models/IMovies'


const client = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
  })

  const getMovies = async (): Promise<IMovies[]> => {
    // https://api.themoviedb.org/3/movie/popular?api_key=import.meta.env.VITE_MOVIEDB_API_KEY
    const { data } = await client.get(`popular?api_key=import.meta.env.VITE_MOVIEDB_API_KEY`)
    // await new Promise(resolve => setTimeout(resolve, 5000))
    return data.results
}

export const useGetMovies = (): UseQueryResult<IMovies[], Error> => { 

    return useQuery({
        queryKey: ['popular'],
        queryFn: async () => await getMovies(),
    //    staleTime: Infinity,
    //    cacheTime: Infinity,
     })
}