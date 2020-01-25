import React from "react";

const Article = ({
  date,
  title,
  salary,
  link,
  salaryPeriod,
  company,
  imageUrl
}) => (
  <div>
    <article className="bt bb b--black-10">
      <a className="db ph3 ph0-l pv-1 no-underline black dim" href={link}>
        <div className="flex flex-column flex-row-ns items-center">
          <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns center pt1 pt0-l">
            <img src={imageUrl} className="db center" alt="" />
          </div>
          <div className="w-100 w-60-ns pl3-ns">
            <h1 className="f3 fw1 baskerville mt1 lh-title">{title}</h1>
            <p className="f6 f7-l lh-copy">
              <b>Post time:</b> {date}
            </p>
            <p className="f6 f7-l lh-copy">
              <b>Salary:</b> {salary}
              {salaryPeriod || "-"}
            </p>
            <p className="f6 f7-l lh-copy">
              <b>Company:</b> {company}
            </p>
          </div>
        </div>
      </a>
    </article>
  </div>
);

export default Article;
