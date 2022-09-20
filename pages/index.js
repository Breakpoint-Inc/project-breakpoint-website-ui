import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const index = ({ data }) => {

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
          <div className="div-block aaa lalala">
            <div className="div-block-2">
              <div className="div-block-4">
                <div className="text-block">Instantly Create Breakpoints With One Click</div>
                <div className="text-block-2">Breakpoint uses artificial intelligence to automatically reformat your designs so they look perfect for every screen size you want. Get started for free today and start cutting your design time in half.</div>
                <a href="#" className="button w-button">Get Started</a>
              </div>
              <div className="div-block-3"><img src="images/Frame-1.svg" loading="lazy" alt="" className="image-7" /></div>
            </div>
            <div className="section-2 aa">
              <div className="container-2 w-container">
                <div className="div-block-32">
                  <div><img src="images/figma-1-logo-1.svg" loading="lazy" alt="" className="image" /></div>
                  <div><img src="images/Sketch-logo-light-1.svg" loading="lazy" alt="" className="image" /></div>
                  <div><img src="images/Adobe_XD-Logo-1.svg" loading="lazy" alt="" className="image" /></div>
                  <div><img src="images/Group-1505.svg" loading="lazy" alt="" className="image" /></div>
                  <div><img src="images/Canva-New-Logo-1.svg" loading="lazy" alt="" className="image" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-block-447">
          <div className="div-block-31">
            <div className="section-2 wf-section">
              <div className="container-2 w-container">
                <div className="div-block-32">
                  <div><img src="images/figma-1-logo-1.svg" loading="lazy" alt="" className="image" /></div>
                  <div><img src="images/Sketch-logo-light-1.svg" loading="lazy" alt="" className="image" /></div>
                  <div><img src="images/Adobe_XD-Logo-1.svg" loading="lazy" alt="" className="image" /></div>
                  <div><img src="images/Group-1505.svg" loading="lazy" alt="" className="image" /></div>
                  <div><img src="images/Canva-New-Logo-1.svg" loading="lazy" alt="" className="image" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wf-section">
          <div className="div-block-33">
            <div className="div-block-34">
              <div className="div-block-36">
                <div className="div-block-8">
                  <div className="div-block-9-title"><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/6271ecbc009df8a30a14ac87_Star.svg" loading="lazy" alt="" />
                    <div className="text-block-5">4.8 Ratings</div>
                  </div>
                  <div className="div-block-9"><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/6271eda2ec98d28e05441704_people.svg" loading="lazy" alt="" />
                    <div className="text-block-5-copy">+836k <span className="text-span">Members</span></div>
                  </div>
                  <p className="paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elit</p>
                  <div className="div-block-9">
                    <div className="text-block-5-copy-joc">Join Our Commuinity</div><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/6271ee6a804b5c16ab57bee7_ArrowRight.svg" loading="lazy" alt="" />
                  </div>
                </div>
                <div className="div-block-8">
                  <div className="div-block-9-title"><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/6271eeb64c4e9c2bad79c526_Trophy.svg" loading="lazy" alt="" />
                    <div className="text-block-5">Benefits</div>
                  </div>
                  <div className="div-block-9-benefits"><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/6271eeccc8b62ffb4d26b513_Ellipse%2014.svg" loading="lazy" alt="" />
                    <div className="text-block-5-benefits">Lorem ipsum dolor sit</div>
                  </div>
                  <p className="paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elit</p>
                  <div className="div-block-9">
                    <div className="text-block-5-copy-joc">Read More</div><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/6271ee6a804b5c16ab57bee7_ArrowRight.svg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
              <div className="div-block-8-3rd">
                <div className="div-block-9-title">
                  <div className="text-block-5---oa">Our Achievement</div>
                </div>
                <div className="text-block-6">Lorem ipsum dolor amet consectetur</div>
                <p className="paragraph-2">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet consectetur adipiscing elit</p>
                <div className="div-block-10">
                  <a href="#" className="link-block-2 w-inline-block">
                    <div className="text-block-7">Get Started</div><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/6271f0ee05f0ce8639a0e4c6_ArrowRight%20(1).svg" loading="lazy" alt="" className="image-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wf-section">
          <div className="div-block-33">
            <div className="div-block-37">
              <div className="div-block-38">
                <div className="text-block-5---oa">Features</div>
                <div className="text-block-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                <p className="paragraph-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>
              </div>
              <div className="div-block-39"><img src="images/Frame_1.svg" loading="lazy" alt="" /></div>
            </div>
          </div>
        </div>
        <div className="wf-section">
          <div className="div-block-33">
            <div className="div-block-37 reverse">
              <div className="div-block-38 rev">
                <div className="text-block-5---oa">Features</div>
                <div className="text-block-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                <p className="paragraph-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>
              </div>
              <div className="div-block-39"><img src="images/Frame-1_1.svg" loading="lazy" alt="" /></div>
            </div>
          </div>
        </div>
        <div className="wf-section">
          <div className="div-block-33 aaaa">
            <div className="div-block-40">
              <div className="text-block-8">Lorem Ipsum</div>
              <div className="text-block-9">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumLorem ipsum dolor sit amet, consectetur adipiscin</div>
              <div className="div-block-41">
                <div className="div-block-42"><img src="images/Group-8.svg" loading="lazy" alt="" className="image-3" />
                  <div className="text-block-8">Lorem Ipsum</div>
                  <div className="text-block-9-copy">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</div>
                </div>
                <div className="div-block-42"><img src="images/Group-8-1.svg" loading="lazy" alt="" className="image-3" />
                  <div className="text-block-8">Lorem Ipsum</div>
                  <div className="text-block-9-copy">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</div>
                </div>
                <div className="div-block-42"><img src="images/Group-8-2.svg" loading="lazy" alt="" className="image-3" />
                  <div className="text-block-8">Lorem Ipsum</div>
                  <div className="text-block-9-copy">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wf-section">
          <div className="div-block-2-copy">
            <div>
              <div className="text-block-16">What our client says</div>
            </div>
            <div className="text-block-17">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem <br />ipsumLorem ipsum dolor sit amet, consectetur adipiscin</div>
            <div data-delay={4000} data-animation="slide" className="slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={500} data-infinite="true">
              <div className="mask w-slider-mask">
                <div className="slide w-slide">
                  <div className="div-block-18">
                    <div className="div-block-19">
                      <div className="div-block-10">
                        <div><img src="images/Ellipse-177.svg" loading="lazy" alt="" /></div>
                        <div className="div-block-21">
                          <div className="text-block-19">Elizabeth Keen</div>
                          <div className="text-block-18">Real estate Owner</div>
                        </div>
                      </div>
                      <div><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/627255c0fcbd8d278eb61b72_Group%201000001740.svg" loading="lazy" alt="" /></div>
                    </div>
                    <div className="div-block-22">
                      <p className="paragraph-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumt”.</p>
                    </div>
                  </div>
                </div>
                <div className="slide w-slide">
                  <div className="div-block-18">
                    <div className="div-block-19">
                      <div className="div-block-10">
                        <div><img src="images/Ellipse-177.svg" loading="lazy" alt="" /></div>
                        <div className="div-block-21">
                          <div className="text-block-19">Elizabeth Keen</div>
                          <div className="text-block-18">Real estate Owner</div>
                        </div>
                      </div>
                      <div><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/627255c0fcbd8d278eb61b72_Group%201000001740.svg" loading="lazy" alt="" /></div>
                    </div>
                    <div className="div-block-22">
                      <p className="paragraph-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumt”.</p>
                    </div>
                  </div>
                </div>
                <div className="slide w-slide">
                  <div className="div-block-18">
                    <div className="div-block-19">
                      <div className="div-block-10">
                        <div><img src="images/Ellipse-177.svg" loading="lazy" alt="" /></div>
                        <div className="div-block-21">
                          <div className="text-block-19">Elizabeth Keen</div>
                          <div className="text-block-18">Real estate Owner</div>
                        </div>
                      </div>
                      <div><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/627255c0fcbd8d278eb61b72_Group%201000001740.svg" loading="lazy" alt="" /></div>
                    </div>
                    <div className="div-block-22">
                      <p className="paragraph-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumt”.</p>
                    </div>
                  </div>
                </div>
                <div className="slide w-slide">
                  <div className="div-block-18">
                    <div className="div-block-19">
                      <div className="div-block-10">
                        <div><img src="images/Ellipse-177.svg" loading="lazy" alt="" /></div>
                        <div className="div-block-21">
                          <div className="text-block-19">Elizabeth Keen</div>
                          <div className="text-block-18">Real estate Owner</div>
                        </div>
                      </div>
                      <div><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/627255c0fcbd8d278eb61b72_Group%201000001740.svg" loading="lazy" alt="" /></div>
                    </div>
                    <div className="div-block-22">
                      <p className="paragraph-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumt”.</p>
                    </div>
                  </div>
                </div>
                <div className="slide w-slide">
                  <div className="div-block-18">
                    <div className="div-block-19">
                      <div className="div-block-10">
                        <div><img src="images/Ellipse-177.svg" loading="lazy" alt="" /></div>
                        <div className="div-block-21">
                          <div className="text-block-19">Elizabeth Keen</div>
                          <div className="text-block-18">Real estate Owner</div>
                        </div>
                      </div>
                      <div><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/627255c0fcbd8d278eb61b72_Group%201000001740.svg" loading="lazy" alt="" /></div>
                    </div>
                    <div className="div-block-22">
                      <p className="paragraph-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumt”.</p>
                    </div>
                  </div>
                </div>
                <div className="slide w-slide">
                  <div className="div-block-18">
                    <div className="div-block-19">
                      <div className="div-block-10">
                        <div><img src="images/Ellipse-177.svg" loading="lazy" alt="" /></div>
                        <div className="div-block-21">
                          <div className="text-block-19">Elizabeth Keen</div>
                          <div className="text-block-18">Real estate Owner</div>
                        </div>
                      </div>
                      <div><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/627255c0fcbd8d278eb61b72_Group%201000001740.svg" loading="lazy" alt="" /></div>
                    </div>
                    <div className="div-block-22">
                      <p className="paragraph-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumt”.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-arrow w-slider-arrow-left"><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/627256a33886882af942fcd8_left.svg" loading="lazy" alt="" className="image-5" /></div>
              <div className="right-arrow w-slider-arrow-right"><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/6272572f129fe3e54bde2c9b_eva_arrow-back-fill.svg" loading="lazy" alt="" className="image-4" /></div>
              <div className="slide-nav w-slider-nav w-slider-nav-invert w-round" />
            </div>
            <div className="div-block-48">
              <div className="div-block-18">
                <div className="div-block-19">
                  <div className="div-block-10">
                    <div><img src="images/Ellipse-177.svg" loading="lazy" alt="" /></div>
                    <div className="div-block-21">
                      <div className="text-block-19">Elizabeth Keen</div>
                      <div className="text-block-18">Real estate Owner</div>
                    </div>
                  </div>
                  <div><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/627255c0fcbd8d278eb61b72_Group%201000001740.svg" loading="lazy" alt="" /></div>
                </div>
                <div className="div-block-22">
                  <p className="paragraph-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumt”.</p>
                </div>
              </div>
              <div className="div-block-18">
                <div className="div-block-19">
                  <div className="div-block-10">
                    <div><img src="images/Ellipse-177.svg" loading="lazy" alt="" /></div>
                    <div className="div-block-21">
                      <div className="text-block-19">Elizabeth Keen</div>
                      <div className="text-block-18">Real estate Owner</div>
                    </div>
                  </div>
                  <div><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/627255c0fcbd8d278eb61b72_Group%201000001740.svg" loading="lazy" alt="" /></div>
                </div>
                <div className="div-block-22">
                  <p className="paragraph-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumt”.</p>
                </div>
              </div>
              <div className="div-block-18">
                <div className="div-block-19">
                  <div className="div-block-10">
                    <div><img src="images/Ellipse-177.svg" loading="lazy" alt="" /></div>
                    <div className="div-block-21">
                      <div className="text-block-19">Elizabeth Keen</div>
                      <div className="text-block-18">Real estate Owner</div>
                    </div>
                  </div>
                  <div><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/627255c0fcbd8d278eb61b72_Group%201000001740.svg" loading="lazy" alt="" /></div>
                </div>
                <div className="div-block-22">
                  <p className="paragraph-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsumt”.</p>
                </div>
              </div>
              <a href="#" className="button-2 w-button">Show more</a>
            </div>
          </div>
        </div>
        <Footer />
        {/* [if lte IE 9]><![endif] */}
      </div>


    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/index.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default index;
