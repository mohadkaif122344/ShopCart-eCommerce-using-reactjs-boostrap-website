import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();

  const result = blog.filter((b) => b.id === Number(id));

  return (
    <div>
      <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    <ul className="lab-ul">
                                      {item.metaList.map((val, i) => (
                                        <li key={i}>
                                          <i className={val.iconName}></i>
                                          {val.text}
                                        </li>
                                      ))}
                                    </ul>
                                  </ul>
                                </div>
                              </div>
                              <p className="text-center">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Facilis id aperiam corporis
                                magnam iure repudiandae deleniti, atque rem
                                nulla maxime, temporibus beatae totam, officia
                                ea sequi accusamus. Voluptas, quidem suscipit.
                                Doloremque voluptatem iure optio delectus minus
                                debitis necessitatibus cumque veniam
                                consequuntur animi, praesentium sequi quibusdam
                                at aspernatur voluptas! Ab, voluptatum
                                provident! Blanditiis voluptatem ut fugiat
                                aliquid itaque. Sit esse ab ipsum illum corrupti
                                voluptatibus vero soluta reprehenderit modi
                                distinctio fugit sed natus nemo nulla eaque in
                                ex, atque, neque ducimus illo ipsam? Omnis velit
                                ullam earum et nisi, quaerat exercitationem a
                                beatae hic placeat! Autem officia error quos
                                voluptate deleniti quidem asperiores ad minima
                                expedita, nostrum, sit voluptates ipsum eveniet
                                dolore debitis itaque pariatur commodi nemo
                                consequatur! Iste nesciunt aspernatur temporibus
                                mollitia quas debitis exercitationem velit
                                dolorem, fugit, doloremque iure provident
                                impedit molestiae nam, voluptatibus veritatis
                                possimus ipsam consequuntur nihil maxime fuga
                                sunt. Consequatur quas molestias optio facilis
                                fuga beatae?
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
