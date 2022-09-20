import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const aboutUs = ({ data }) => {

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
          <div className="div-block-copy aaa">
            <div className="div-block-91">
              <h1 className="heading-61">About Us</h1>
              <p className="paragraph-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lobortis. Pellentesque quis aliquet nulla. Phasellus ut augue sit amet erat sodales lacinia. Mauris ultricies nibh eu eleifend ornare. Mauris sit amet fermentum tortor. Suspendisse potenti.</p>
              <div className="div-block-92">
                <a href="#" className="button-19 w-button">Get Started</a>
              </div>
            </div>
          </div>
          <div className="div-block-94">
            <h1 className="heading-62">Our Values</h1>
            <div className="div-block-95">
              <div className="div-block-96"><img src="images/Frame-1_3.svg" loading="lazy" alt="" className="image-42" />
                <h1 className="heading-63">Lorem ipsum dolor sit amet</h1>
                <p className="paragraph-17">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan accumsan euismod. Ut nec elementum eros. Proin non velit at leo pretium elementum. Cras rutrum quam nisi, eget venenatis lacus imperdiet at.</p>
              </div>
              <div className="div-block-96"><img src="images/Frame-2_1.svg" loading="lazy" alt="" className="image-42" />
                <h1 className="heading-63">Lorem ipsum dolor sit amet</h1>
                <p className="paragraph-17">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan accumsan euismod. Ut nec elementum eros. Proin non velit at leo pretium elementum. Cras rutrum quam nisi, eget venenatis lacus imperdiet at.</p>
              </div>
              <div className="div-block-96 _3"><img src="images/Frame-3_1.svg" loading="lazy" alt="" className="image-42" />
                <h1 className="heading-63">Lorem ipsum dolor sit amet</h1>
                <p className="paragraph-17">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan accumsan euismod. Ut nec elementum eros. Proin non velit at leo pretium elementum. Cras rutrum quam nisi, eget venenatis lacus imperdiet at.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="wf-section">
          <div className="div-block-425">
            <div className="div-block-426">
              <div className="div-block-99">
                <h1 className="heading-64">Our Team</h1>
                <div className="div-block-105">
                  <div data-delay={4000} data-animation="slide" className="slider-5 w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={500} data-infinite="true">
                    <div className="w-slider-mask">
                      <div className="slide-7 w-slide">
                        <div className="div-block-100">
                          <div className="div-block-101"><img src="images/Mask-Group-2.png" loading="lazy" alt="" />
                            <h3 className="heading-65">William Jones</h3>
                            <h5 className="heading-66">Chief Executive Officer</h5>
                          </div>
                          <div className="div-block-102"><img src="images/Mask-Group-3.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Kenneth Boyle</h3>
                            <h5 className="heading-66">Chief Financial Officer</h5>
                          </div>
                          <div className="div-block-103"><img src="images/Mask-Group-4.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Stephanie Johnson</h3>
                            <h5 className="heading-66">Chief Marketing Officer</h5>
                          </div>
                          <div className="div-block-104"><img src="images/Mask-Group-5.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Georgina Wilson</h3>
                            <h5 className="heading-66">Human Resources</h5>
                          </div>
                        </div>
                      </div>
                      <div className="slide-8 w-slide">
                        <div className="div-block-100">
                          <div className="div-block-101"><img src="images/Mask-Group-2.png" loading="lazy" alt="" />
                            <h3 className="heading-65">William Jones</h3>
                            <h5 className="heading-66">Chief Executive Officer</h5>
                          </div>
                          <div className="div-block-102"><img src="images/Mask-Group-3.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Kenneth Boyle</h3>
                            <h5 className="heading-66">Chief Financial Officer</h5>
                          </div>
                          <div className="div-block-103"><img src="images/Mask-Group-4.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Stephanie Johnson</h3>
                            <h5 className="heading-66">Chief Marketing Officer</h5>
                          </div>
                          <div className="div-block-104"><img src="images/Mask-Group-5.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Georgina Wilson</h3>
                            <h5 className="heading-66">Human Resources</h5>
                          </div>
                        </div>
                      </div>
                      <div className="slide-8 w-slide">
                        <div className="div-block-100">
                          <div className="div-block-101"><img src="images/Mask-Group-2.png" loading="lazy" alt="" />
                            <h3 className="heading-65">William Jones</h3>
                            <h5 className="heading-66">Chief Executive Officer</h5>
                          </div>
                          <div className="div-block-102"><img src="images/Mask-Group-3.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Kenneth Boyle</h3>
                            <h5 className="heading-66">Chief Financial Officer</h5>
                          </div>
                          <div className="div-block-103"><img src="images/Mask-Group-4.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Stephanie Johnson</h3>
                            <h5 className="heading-66">Chief Marketing Officer</h5>
                          </div>
                          <div className="div-block-104"><img src="images/Mask-Group-5.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Georgina Wilson</h3>
                            <h5 className="heading-66">Human Resources</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="left-arrow-4 w-slider-arrow-left">
                      <div className="w-icon-slider-left" />
                    </div>
                    <div className="right-arrow-4 w-slider-arrow-right">
                      <div className="icon-5 w-icon-slider-right" /><img src="images/Vector-46.svg" loading="lazy" alt="" />
                    </div>
                    <div className="slide-nav-4 w-slider-nav w-round" />
                  </div>
                </div>
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{ __html: "\n.w-slider-dot.w-active{\nbackground-color:#0066FF;\nwidth:12.53px;\nheight:12.53px;\nmargin:0 0 -2px;\npadding:0;\n}\n.w-slider-dot{\nbackground-color:#0066FF80;\nwidth:8.53px;\nheight:8.53px;\nmargin:0;\npadding:0;\n}\n" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wf-section">
          <div className="div-block-425">
            <div className="div-block-426">
              <div className="div-block-99">
                <div className="div-block-105-copy">
                  <div className="div-block-427"><img src="images/Frame-4_1.svg" loading="lazy" alt="" className="image-110" /></div>
                  <div className="div-block-428">
                    <h3 className="heading-171">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                    <div className="text-block-82">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</div>
                  </div>
                </div>
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{ __html: "\n.w-slider-dot.w-active{\nbackground-color:#0066FF;\nwidth:12.53px;\nheight:12.53px;\nmargin:0 0 -2px;\npadding:0;\n}\n.w-slider-dot{\nbackground-color:#0066FF80;\nwidth:8.53px;\nheight:8.53px;\nmargin:0;\npadding:0;\n}\n" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
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
        <Footer />
        {/* [if lte IE 9]><![endif] */}
      </div>


    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/aboutUs.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default aboutUs;
