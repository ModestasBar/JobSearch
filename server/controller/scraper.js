const handleScrap = async (RequestPromise, Cheerio, req) => {
  const uri = `http://www.cvbankas.lt/?miestas=${req.body.url}&keyw=${req.body.keyw.split(' ').join('+')}`;
  console.log(uri);

  const options = {
    uri,
    transform(bodys) {
      return Cheerio.load(bodys);
    },
  };

  return RequestPromise(options)
    .then(($) => {
      const articles = [];
      $('.list_article').each(function () {
        const article = {
          title: $(this)
            .find('h3.list_h3')
            .text()
            .trim(),
          company: $(this)
            .find('span.dib')
            .text()
            .trim(),
          image: $(this)
            .find('img')
            .attr('src'),
          salary: $(this)
            .find('span.salary_amount')
            .text()
            .trim(),
          salaryPeriod: $(this)
            .find('span.salary_period')
            .text()
            .trim(),
          date: $(this)
            .find('span.txt_list_2')
            .text()
            .trim(),
          link: $(this)
            .find('a.list_a')
            .attr('href'),
        };
        articles.push(article);
      });
      return articles;
    });
};

module.exports = handleScrap;
