import readingTime from '../utils/readingTime';

document.addEventListener('DOMContentLoaded', () => {
  const RSS_URL = `https://virgool.io/feed/@r3x4w`;
  const API_KEY = 'hdo2vw977qwv9unm4ffjnmij4hmktepej1iqtfjz';

  const postsContainer = document.querySelector('#postsContainer');

  async function getPostThumbnail(postUrl) {
    const response = await fetch(postUrl);
    const data = await response.text();
    const regex = /<meta property="og:image" +content="([^")]*)"/g;
    const match = data.match(regex);
    console.log(match)
  }

  getPostThumbnail('https://virgool.io/@r3x4w/tailwindcss-vs-bootstrap-levvo3w6dw0u')

  fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=${RSS_URL}&api_key=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      const article = document.createElement('article');
      const imgContainer = document.createElement('div');
      const img = document.createElement('img');
      const header = document.createElement('header');
      const bodyContent = document.createElement('div');
      const h3 = document.createElement('h3');
      const a = document.createElement('a');
      const span = document.createElement('span');
      const p = document.createElement('p');
      const footer = document.createElement('footer');
      const footerSpan = document.createElement('span');
      const time = document.createElement('time');

      article.className = 'group relative';
      imgContainer.className =
        'aspect-h-9 aspect-w-16 w-full overflow-hidden rounded-xl bg-gray-200 group-hover:opacity-80';
      img.className =
        'w-full h-full object-center object-cover lg:h-full lg:w-full';
      bodyContent.className = 'mt-4';
      h3.className = 'text-2xl font-bold pb-1';
      a.className = 'text-inherit hover:no-underline';
      span.className = 'absolute inset-0';
      footer.className = 'text-sm text-zinc-500 z-10 relative';
      p.className = 'break-words pb-4';

      data.items.map((item) => {
        getPostThumbnail(item.link).then((res) => {
          img.src = res
        });
        img.alt = item.title;
        img.loading = 'lazy';
        a.href = item.link;
        a.appendChild(document.createTextNode(item.title));
        p.appendChild(
          document.createTextNode(item.description.slice(0, 150).concat('...'))
        );
        time.datetime = item.pubDate;
        footerSpan.appendChild(
          document.createTextNode(`- خواندن ${readingTime(item.content)} دقیقه`)
        );
        time.appendChild(document.createTextNode(item.pubDate));
      });

      imgContainer.appendChild(img);
      a.appendChild(span);
      h3.appendChild(a);
      header.appendChild(h3);
      bodyContent.appendChild(header);
      bodyContent.appendChild(p);
      footerSpan.appendChild(time);
      footer.appendChild(footerSpan);
      article.appendChild(imgContainer);
      article.appendChild(bodyContent);
      article.appendChild(footer);
      postsContainer.appendChild(article);
    })
    .catch(() => {
      const p = document.createElement('p');
      p.appendChild(document.createTextNode('بارگذاری با مشکل مواجه شد.'));
      postsContainer.appendChild(p);
    });
});
