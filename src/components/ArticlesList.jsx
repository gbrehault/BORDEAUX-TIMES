import useSWR from 'swr';
import "./ArticlesList.css"

const fetcher = (url) => fetch(url).then(res => res.json());

const ArticlesList = () => {
    const { data, isLoading, error } = useSWR('https://dummyjson.com/posts', fetcher);

    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    return (
        <div className="container-max">
            <h1>Articles</h1>
            <ul className="articles" style={{ listStyle: 'none', padding: 0 }}>
                {data?.posts?.map((article) => (
                    <li class="contener"
                        key={article.id}
                        style={{
                            marginBottom: '2rem',
                            padding: '1rem',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            textAlign: 'right'
                        }}
                    >
                        <h2>{article.title}</h2>
                        <p>{article.body}</p>
                        <p><strong>Tags :</strong> {article.tags.join(', ')}</p>
                        <p>👁️ {article.views} - views</p>
                    </li>
                ))}
            </ul>
            <h2>
                <Link to={`/article/${id}`} style={{ color: '#1B3022', textDecoration: 'none' }}>
                    {title}
                </Link>
            </h2>
        </div>
    );
};

export default ArticlesList;