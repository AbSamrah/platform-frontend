import React from "react";

function RecentPosts() {
  return (
    <section id="recent-posts" className="recent-posts">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Recent Blog Posts</h2>
          <p>
            In commodi voluptatem excepturi quaerat nihil error autem voluptate
            ut et officia consequuntu
          </p>
        </div>
        <div className="row gy-4">
          <div className="col-xl-3 col-md-6">
            <article>
              <div className="post-img">
                <img
                  src="/assets/img/blog/blog-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <p className="post-category">Politics</p>
              <h2 className="title">
                <a href="blog-details.html">
                  Dolorum optio tempore voluptas dignissimos
                </a>
              </h2>
              <div className="d-flex align-items-center">
                <img
                  src="/assets/img/blog/blog-author.jpg"
                  alt=""
                  className="img-fluid post-author-img flex-shrink-0"
                />
                <div className="post-meta">
                  <p className="post-author">Maria Doe</p>
                  <p className="post-date">
                    <time dateTime="2022-01-01">Jan 1, 2022</time>
                  </p>
                </div>
              </div>
            </article>
          </div>
          {/* Repeat for other post articles... */}
        </div>
      </div>
    </section>
  );
}

export default RecentPosts;
