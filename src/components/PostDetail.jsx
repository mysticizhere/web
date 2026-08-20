function ContentBlock({ block, index }) {
  const key = `${block.type}-${index}`;

  switch (block.type) {
    case 'heading':
      return <h2 className="detail-heading" key={key}>{block.text}</h2>;

    case 'subheading':
      return <h3 className="detail-subheading" key={key}>{block.text}</h3>;

    case 'code':
      return (
        <div className="code-window" key={key}>
          <div className="code-window-bar">
            <span className="code-dot code-dot-red" />
            <span className="code-dot code-dot-yellow" />
            <span className="code-dot code-dot-green" />
            {block.lang && <span className="code-window-lang">{block.lang}</span>}
          </div>
          <pre className="code-window-body"><code>{block.text}</code></pre>
        </div>
      );

    case 'stats':
      return (
        <div className="detail-stats" key={key}>
          {block.items.map((item) => (
            <div className="stat-item" key={item.label}>
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      );

    default:
      return <p className="detail-para" key={key}>{block.text}</p>;
  }
}

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

      {post.content.map((block, index) => (
        <ContentBlock block={block} index={index} key={`${block.type}-${index}`} />
      ))}
    </div>
  );
}
