export default function PostDetail({ post, onBack }) {
  return (
    <div className="detail">
      <a href="#" onClick={onBack} className="back-link">← Back to all posts</a>

      <div className="detail-meta">{post.date} · {post.readTime}</div>
      <h1 className="detail-title">{post.title}</h1>

      <div className="tag-row detail-tags">
        {post.tags.map((tag) => (
          <span className="tag tag-accent" key={tag}>{tag}</span>
        ))}
      </div>

      <div className="detail-cover hatch">ARTICLE COVER IMAGE</div>

      {post.content.map((para) => (
        <p className="detail-para" key={para.slice(0, 40)}>{para}</p>
      ))}
    </div>
  );
}
