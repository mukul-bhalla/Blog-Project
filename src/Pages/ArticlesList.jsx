import articleContent from "./article-content";

import Articles from "../Components/Articles";

const ArticlesList = () => {
    return <div className="mb-20">
        <h1 className="sm:text-4xl text-2xl, font-bold my-6 text-gray-900 text-center">Articles</h1>
        <Articles articles={articleContent} />

    </div>
}

export default ArticlesList;