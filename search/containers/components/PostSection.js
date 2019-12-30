import React from 'react';
import Article from './Article';


const PostSection = ({ onScrapData }) => {
    return <div>
        <section className="mw7 center avenir">
            <h2 className="baskerville fw1 ph3 ph0-l">{onScrapData.length} Results</h2>
            {onScrapData.length? onScrapData.map((post, index) => {
                return <Article 
                    key={index} 
                    date={post.date} 
                    title={post.title} 
                    salary={post.salary}
                    salaryPeriod={post.salaryPeriod}
                    link={post.link}
                    company={post.company}
                    imageUrl={post.image}/>
            }) : []}

        </section>
    </div>
}

export default PostSection;