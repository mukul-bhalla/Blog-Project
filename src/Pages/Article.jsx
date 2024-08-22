import { useParams } from "react-router-dom";
import articleContent from "./article-content"
const Article = () => {
    const { name } = useParams();
    const article = articleContent.find((article) => article.name === name)
    if (!article)
        return <h1 className="sm:text-4xl text-2xl, font-bold my-6 text-gray-900">No such article found ... </h1>

    return <div className="mb-20">
        <h1 className="sm:text-4xl text-2xl, font-bold my-6 text-gray-900">{article.title} </h1>
        {article.content.map((paragraph, index) => (
            <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
                {paragraph}
            </p>
        ))}

    </div>
}

export default Article;