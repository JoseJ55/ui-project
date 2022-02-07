import React from 'react';
import "./article.css";

function Article({ imgurl, date, title }) {
  return (
    <div className='gpt3_blog-container_article'>
        <div className='gpt3_blog-container_article-image'>
          <img src={imgurl} alt="blog" />
        </div>
        <div className='gpt3_blog-container_article-content'>
          <div>
            <p>{date}</p>
            <h4>{title}</h4>
          </div>
          <p>Read Full Article</p>
        </div>
    </div>
  );
}

export default Article;
