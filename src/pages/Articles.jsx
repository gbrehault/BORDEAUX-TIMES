import useSWR from 'swr';
import "./Articles.css"
import { Link } from 'react-router-dom'

const fetcher = (url) => fetch(url).then(res => res.json());

const Articles = () => {
    const { data, error, isLoading } = useSWR('https://dummyjson.com/posts', fetcher);

    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    return (
        <div className="container-max">
            <h1>Articles</h1>
            <ul className="articles" style={{ listStyle: 'none', padding: 0 }}>
                {data?.posts?.map((article) => (
                    <li key={article.id} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
                        <Link to={`/article/${article.id}`} style={{ color: '#1B3022', textDecoration: 'none' }}>
                            <h2>{article.title}</h2>
                            <p>{article.body}</p>
                            <p><strong>Tags :</strong> {article.tags.join(', ')}</p>
                            <p>👁️ {article.views} - views</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Articles;