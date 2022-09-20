import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const pixelsWhatBreakpoints3 = ({ data }) => {

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
        <div className="div-block-148 no-vh">
          <div className="div-block-147 _100">
            <div className="mobile-mwnu">
              <div className="ham-menu mob"><img src="images/ham-menu.svg" loading="lazy" alt="" /></div>
              <div className="dashboard-header menu-db mob wf-section">
                <div className="div-block-139">
                  <div className="div-block-150" />
                  <div className="div-block-141"><img src="images/bell-icon.svg" loading="lazy" alt="" className="image-58" /><img src="images/jon-doe-avatar.svg" loading="lazy" alt="" className="image-59" />
                    <h1 className="heading-70">John Doe</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="ham-menu"><img src="images/ham-menu.svg" loading="lazy" alt="" /></div>
            <div className="div-block-135 v2">
              <div className="div-block-131 auto">
                <div className="div-block-153 v2">
                  <div className="div-block-144 v2">
                    <div className="div-block-154 v2">
                      <div className="div-block-155 bg-transparent ad">
                        <h1 className="heading-73 aaa">What Sizes Do You Want <br />For Your Breakpoints</h1>
                        <div className="div-block-161">
                          <div className="div-block-162">
                            <h1 className="heading-76">1920px -</h1>
                            <div><img src="images/Icon_1.svg" loading="lazy" alt="" /><img src="images/bin.svg" loading="lazy" alt="" className="image-68" /></div>
                          </div>
                          <div className="div-block-162">
                            <h1 className="heading-76">1920px -</h1>
                            <div><img src="images/Icon_1.svg" loading="lazy" alt="" /><img src="images/bin.svg" loading="lazy" alt="" className="image-68" /></div>
                          </div>
                          <div className="div-block-162">
                            <h1 className="heading-76">1920px -</h1>
                            <div><img src="images/Icon_1.svg" loading="lazy" alt="" /><img src="images/bin.svg" loading="lazy" alt="" className="image-68" /></div>
                          </div>
                          <div className="div-block-162">
                            <h1 className="heading-76">1920px -</h1>
                            <div><img src="images/Icon_1.svg" loading="lazy" alt="" /><img src="images/bin.svg" loading="lazy" alt="" className="image-68" /></div>
                          </div>
                          <div className="div-block-162">
                            <h1 className="heading-76">1920px -</h1>
                            <div><img src="images/Icon_1.svg" loading="lazy" alt="" /><img src="images/bin.svg" loading="lazy" alt="" className="image-68" /></div>
                          </div>
                          <div className="div-block-162 center">
                            <h1 className="heading-76">Add New</h1>
                          </div>
                          <div className="div-block-162 center button-blue">
                            <h1 className="heading-76 white">Create</h1>
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
    .readFileSync("public/content/pixelsWhatBreakpoints3.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default pixelsWhatBreakpoints3;
