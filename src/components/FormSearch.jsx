import { useState } from "react"

const FormSearch = ({ onSubmit }) => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [noResult, setNoResult] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        const query = e.target.search.value;
        setLoading(true);
        setNoResult(false);

        try {
            const res = await fetch(`https://dummyjson.com/posts/search?q=${query}`);
            const data = await res.json();

            if (data?.posts?.length > 0) {
                onSubmit(query);
            } else {
                setNoResult(true);
            }
        } catch (error) {
            console.error("Erreur de recherche :", error);
            setNoResult(true);
        } finally {
            setLoading(false);
            e.target.reset();
        }
    }

    return (
        <>
            <form className="form-search" onSubmit={submit}>
                <input
                    placeholder="Search Articles"
                    type="text"
                    name="search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {loading && <p>Chargement...</p>}
            {noResult && <p>Aucun résultat trouvé</p>}
        </>
    )
}

export default FormSearch