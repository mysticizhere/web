// Carries the same angled brown band as the intro section.
export default function Blog({ posts, onOpenPost }) {
  return (
    <section id="blog" className="section band">
      <div className="section-head" data-reveal="">
        <div className="kicker">Blog</div>
      </div>

      <div className="post-list">
        {posts.map((post) => (
          <a
            href="#"
            key={post.id}
            onClick={onOpenPost(post.id)}
            className="post"
            data-reveal=""
            data-cursor-hover=""
          >
            <div className="post-meta">{post.date} · {post.readTime}</div>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-excerpt">{post.excerpt}</p>

            <div className="tag-row">
              {post.tags.map((tag) => (
                <span className="tag tag-accent" key={tag}>{tag}</span>
              ))}
            </div>

            <span className="post-more">Read post →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
