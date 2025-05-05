import { useState } from 'react';
import useSWR from 'swr';
import FormSearch from '../components/FormSearch';
import "./Home.css"
const Home = () => {
    const [search, setSearch] = useState('');
    const { data, isLoading, error } = useSWR(['/posts', search], async ([path, search]) => {
        const response = await fetch(`https://dummyjson.com/posts/search?q=${search}`);
        console.log(response)
        return response.json();
    })
    return (
        <div>
            <h1>Bordeaux Times - Une ville à la une</h1>
            <FormSearch onSubmit={setSearch} />
        </div>
    )
}


export default Home

