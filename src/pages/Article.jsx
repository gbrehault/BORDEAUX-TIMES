import { useParams } from 'react-router-dom';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json());

const Article = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useSWR(id ? `https://dummyjson.com/posts/${id}` : null, fetcher);

    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    return (
        <div className="container-max">
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <p><strong>Tags :</strong> {data.tags?.join(', ')}</p>
            <p>👍 {data.reactions?.likes} | 👎 {data.reactions?.dislikes} | 👁️ {data.views}</p>
        </div>
    );
};

export default Article;