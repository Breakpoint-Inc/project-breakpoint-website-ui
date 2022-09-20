import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const pricing = ({ data }) => {

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        {/* Title Tag */}
        <title>{data.titleTag}</title>

        {/* Meta Description */}
        <meta content={data.metaDescription} name="description" />

        {/* OG Title */}
        <meta content={data.ogTitle} property="og:title" />

        {/* OG Description */}
        <meta content={data.ogDescription} property="og:description" />

        {/* OG Image */}
        <meta content={data.ogImage} property="og:image" />

        {/* Twitter Title */}
        <meta content={data.twitterTitle} property="twitter:title" />

        {/* Twitter Description */}
        <meta content={data.twitterDescription} property="twitter:description" />

        {/* Twitter Image */}
        <meta content={data.twitterImage} property="twitter:image" />

        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        {/* Favicon*/}
        <link href="images/favicon.png" rel="icon" type="image/png" />

        {/* Webclip */}
        <link href="images/webclip.png" rel="apple-touch-icon" />

        {/* Fall Back CSS */}
        {/* [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] */}
      </Head>

      <div>
        <Header />
        <div className="section-3 wf-section">
          <div className="div-block aaa bb">
            <div className="section-1-pricing">
              <div className="section-1-pricing-wrap">
                <h1 className="heading-15 aaa">Pricing &amp; Plans</h1>
                <div className="text-block-83">This is some text inside of a div block.Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                <div className="div-block-429">
                  <div className="div-block-434">
                    <div>
                      <h1 className="heading-14">Sales +</h1>
                      <h1 className="heading-13 hide">$99/mo</h1>
                      <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
                      <div className="div-block-436" />
                      <h1 className="heading-16">What’s included</h1>
                      <div className="div-block-431">
                        <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                          <h1 className="heading-12">Eget nunc scelerisque viverra</h1>
                        </div>
                        <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                          <h1 className="heading-12">Mauris in aliquam</h1>
                        </div>
                        <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                          <h1 className="heading-12">Nunc faucibus a pellentesque sit</h1>
                        </div>
                        <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                          <h1 className="heading-12">Ut sem viverra aliquet</h1>
                        </div>
                        <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                          <h1 className="heading-12">Pretium vulputate sapien</h1>
                        </div>
                      </div>
                    </div>
                    <div className="div-block-435">
                      <a href="#" className="link-block-16 w-inline-block">
                        <h1 className="heading-172">schedule an appointment</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                      </a>
                    </div>
                  </div>
                  <div className="div-block-432">
                    <h1 className="heading-14">Marketing +</h1>
                    <h1 className="heading-13 hide">$499/mo</h1>
                    <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="div-block-436" />
                    <h1 className="heading-16">What’s included</h1>
                    <div className="div-block-431">
                      <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                        <h1 className="heading-12">Eget nunc scelerisque viverra</h1>
                      </div>
                      <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                        <h1 className="heading-12">Mauris in aliquam</h1>
                      </div>
                      <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                        <h1 className="heading-12">Nunc faucibus a pellentesque sit</h1>
                      </div>
                      <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                        <h1 className="heading-12">Ut sem viverra aliquet</h1>
                      </div>
                      <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                        <h1 className="heading-12">Pretium vulputate sapien</h1>
                      </div>
                    </div>
                    <div className="div-block-435">
                      <a href="#" className="link-block-16 _2nd w-inline-block">
                        <h1 className="heading-172">schedule an appointment</h1><img src="images/ArrowRight_2.svg" loading="lazy" alt="" className="image-61" />
                      </a>
                    </div>
                  </div>
                  <div className="div-block-433">
                    <h1 className="heading-14">Super +</h1>
                    <h1 className="heading-13 hide">$499/mo</h1>
                    <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="div-block-436" />
                    <h1 className="heading-16">What’s included</h1>
                    <div className="div-block-431">
                      <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                        <h1 className="heading-12">Eget nunc scelerisque viverra</h1>
                      </div>
                      <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                        <h1 className="heading-12">Mauris in aliquam</h1>
                      </div>
                      <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                        <h1 className="heading-12">Nunc faucibus a pellentesque sit</h1>
                      </div>
                      <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                        <h1 className="heading-12">Ut sem viverra aliquet</h1>
                      </div>
                      <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                        <h1 className="heading-12">Pretium vulputate sapien</h1>
                      </div>
                    </div>
                    <div className="div-block-435">
                      <a href="#" className="link-block-16 w-inline-block">
                        <h1 className="heading-172">schedule an appointment</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                      </a>
                    </div>
                  </div>
                </div>
                <div data-current="Tab 2" data-easing="ease" data-duration-in={300} data-duration-out={100} className="tabs hide w-tabs">
                  <div className="tabs-menu-2 w-tab-menu">
                    <a data-w-tab="Tab 1" className="tab-link-tab-1 w-inline-block w-tab-link">
                      <div>Monthly</div>
                    </a>
                    <a data-w-tab="Tab 2" className="tab-link-tab-2 w-inline-block w-tab-link w--current">
                      <div>Yearly</div>
                    </a>
                  </div>
                  <div className="w-tab-content">
                    <div data-w-tab="Tab 1" className="w-tab-pane">
                      <div className="div-block-429">
                        <div className="div-block-434">
                          <div>
                            <h1 className="heading-14">Basic</h1>
                            <h1 className="heading-13">$99/mo</h1>
                            <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
                            <div className="div-block-436" />
                            <h1 className="heading-16">What’s included</h1>
                            <div className="div-block-431">
                              <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                                <h1 className="heading-12">Eget nunc scelerisque viverra</h1>
                              </div>
                              <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                                <h1 className="heading-12">Mauris in aliquam</h1>
                              </div>
                              <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                                <h1 className="heading-12">Nunc faucibus a pellentesque sit</h1>
                              </div>
                              <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                                <h1 className="heading-12">Ut sem viverra aliquet</h1>
                              </div>
                              <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                                <h1 className="heading-12">Pretium vulputate sapien</h1>
                              </div>
                            </div>
                          </div>
                          <div className="div-block-435">
                            <a href="#" className="link-block-16 w-inline-block">
                              <h1 className="heading-172">Start fre trial</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                            </a>
                          </div>
                        </div>
                        <div className="div-block-432">
                          <h1 className="heading-14">Plus</h1>
                          <h1 className="heading-13">$499/mo</h1>
                          <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
                          <div className="div-block-436" />
                          <h1 className="heading-16">Everything in basic +</h1>
                          <div className="div-block-431">
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Eget nunc scelerisque viverra</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Mauris in aliquam</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Nunc faucibus a pellentesque sit</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Ut sem viverra aliquet</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Pretium vulputate sapien</h1>
                            </div>
                          </div>
                          <div className="div-block-435">
                            <a href="#" className="link-block-16 w-inline-block">
                              <h1 className="heading-172">Start fre trial</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                            </a>
                          </div>
                        </div>
                        <div className="div-block-433">
                          <h1 className="heading-14">Growth</h1>
                          <h1 className="heading-13">$499/mo</h1>
                          <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
                          <div className="div-block-436" />
                          <h1 className="heading-16">Everything in Pro +</h1>
                          <div className="div-block-431">
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Eget nunc scelerisque viverra</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Mauris in aliquam</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Nunc faucibus a pellentesque sit</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Ut sem viverra aliquet</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Pretium vulputate sapien</h1>
                            </div>
                          </div>
                          <div className="div-block-435">
                            <a href="#" className="link-block-16 w-inline-block">
                              <h1 className="heading-172">Start fre trial</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                      <div className="div-block-429">
                        <div className="div-block-434">
                          <div>
                            <h1 className="heading-14">Basic</h1>
                            <h1 className="heading-13">$99/mo</h1>
                            <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
                            <div className="div-block-436" />
                            <h1 className="heading-16">What’s included</h1>
                            <div className="div-block-431">
                              <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                                <h1 className="heading-12">Eget nunc scelerisque viverra</h1>
                              </div>
                              <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                                <h1 className="heading-12">Mauris in aliquam</h1>
                              </div>
                              <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                                <h1 className="heading-12">Nunc faucibus a pellentesque sit</h1>
                              </div>
                              <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                                <h1 className="heading-12">Ut sem viverra aliquet</h1>
                              </div>
                              <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                                <h1 className="heading-12">Pretium vulputate sapien</h1>
                              </div>
                            </div>
                          </div>
                          <div className="div-block-435">
                            <a href="#" className="link-block-16 w-inline-block">
                              <h1 className="heading-172">Start fre trial</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                            </a>
                          </div>
                        </div>
                        <div className="div-block-432">
                          <h1 className="heading-14">Plus</h1>
                          <h1 className="heading-13">$499/mo</h1>
                          <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
                          <div className="div-block-436" />
                          <h1 className="heading-16">Everything in basic +</h1>
                          <div className="div-block-431">
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Eget nunc scelerisque viverra</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Mauris in aliquam</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Nunc faucibus a pellentesque sit</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Ut sem viverra aliquet</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Pretium vulputate sapien</h1>
                            </div>
                          </div>
                          <div className="div-block-435">
                            <a href="#" className="link-block-16 w-inline-block">
                              <h1 className="heading-172">Start fre trial</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                            </a>
                          </div>
                        </div>
                        <div className="div-block-433">
                          <h1 className="heading-14">Growth</h1>
                          <h1 className="heading-13">$499/mo</h1>
                          <p className="paragraph-15">Lorem ipsum dolor sit amet consectetur.</p>
                          <div className="div-block-436" />
                          <h1 className="heading-16">Everything in Pro +</h1>
                          <div className="div-block-431">
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Eget nunc scelerisque viverra</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Mauris in aliquam</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Nunc faucibus a pellentesque sit</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Ut sem viverra aliquet</h1>
                            </div>
                            <div className="div-block-430"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                              <h1 className="heading-12">Pretium vulputate sapien</h1>
                            </div>
                          </div>
                          <div className="div-block-435">
                            <a href="#" className="link-block-16 w-inline-block">
                              <h1 className="heading-172">Start fre trial</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-61" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>


    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/pricing.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default pricing;
