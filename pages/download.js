import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const download = ({ data }) => {

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
        <div className="dashboard-div max-height-100vh">
          <div className="mobile-header">
            <div className="div-block-384"><img src="images/Vector.svg" loading="lazy" alt="" className="image-98" /><img src="images/Group-3_2.svg" loading="lazy" alt="" className="image-100 b" /></div>
            <div>
              <div className="div-block-166">
                <a href="#" className="w-inline-block"><img src="images/Group-60.svg" loading="lazy" alt="" className="image-99" /></a><img src="images/Rectangle-402_1Rectangle-402.png" loading="lazy" alt="" className="image-97" />
                <div className="text-block-76">John Smith</div>
              </div>
            </div>
          </div>
          <div className="div-block-327">
            <div className="div-block-325 left-side-nav hide">
              <div className="div-block-316">
                <div className="div-block-326"><img src="images/Group-3_2.svg" loading="lazy" alt="" className="logo" /></div>
                <div className="div-block-319">
                  <a href="#" className="link-block-31 highlight w-inline-block">
                    <div className="div-block-166"><img src="images/dash.svg" loading="lazy" alt="" className="image-85" /></div>
                  </a>
                  <a href="#" className="link-block-31 w-inline-block">
                    <div className="div-block-166"><img src="images/Frame-1_2.svg" loading="lazy" alt="" className="image-85" /></div>
                  </a>
                  <a href="#" className="link-block-31 w-inline-block">
                    <div className="div-block-166"><img src="images/Frame-2.svg" loading="lazy" alt="" className="image-85" /></div>
                  </a>
                  <a href="#" className="link-block-31 w-inline-block">
                    <div className="div-block-166"><img src="images/Frame-3.svg" loading="lazy" width={18} alt="" className="image-85" /></div>
                  </a>
                  <a href="#" className="link-block-31 w-inline-block">
                    <div className="div-block-166"><img src="images/Frame-4.svg" loading="lazy" width={18} alt="" className="image-85" /></div>
                  </a>
                  <a href="#" className="link-block-31 w-inline-block">
                    <div className="div-block-166"><img src="images/Frame-5.svg" loading="lazy" width={18} alt="" className="image-85" /></div>
                  </a>
                </div>
              </div>
              <div className="div-block-316">
                <a href="#" className="link-block-31 w-inline-block">
                  <div className="div-block-166"><img src="images/Frame-6.svg" loading="lazy" alt="" className="image-85" /></div>
                </a>
              </div>
            </div>
            <div className="div-block-328 aaa bbb new-100">
              <div className="dashboard-headerr">
                <div>
                  <h1 className="heading-149">Dashboard</h1>
                </div>
                <div className="div-block-166">
                  <a href="#" className="w-inline-block"><img src="images/Group-60.svg" loading="lazy" alt="" className="image-101" /></a><img src="images/jon-doe-avatar.svg" loading="lazy" alt="" className="image-97" />
                  <div className="text-block-76">John Smith</div>
                </div>
              </div>
              <div className="content-wrapper empty-content aaa" />
            </div>
          </div>
        </div>
        <div className="export-code-popup">
          <div className="div-block-445">
            <div className="div-block-444">
              <div>
                <h1 className="heading-174">Export Code</h1>
              </div>
              <div><img src="https://uploads-ssl.webflow.com/62a1a68347d84370532e079a/6307900ee7caf15bea1edee4_Group%2033880.svg" loading="lazy" alt="" /></div>
            </div>
            <div data-current="Tab 2" data-easing="ease" data-duration-in={300} data-duration-out={100} className="w-tabs">
              <div className="tabs-menu-3 w-tab-menu">
                <a data-w-tab="Tab 2" className="tab-link-tab-1-2 w-inline-block w-tab-link w--current">
                  <div className="text-block-87">HTML</div>
                </a>
                <a data-w-tab="Tab 3" className="tab-link-tab-1-2 w-inline-block w-tab-link">
                  <div className="text-block-87">CSS</div>
                </a>
                <a data-w-tab="Tab 4" className="tab-link-tab-1-2 w-inline-block w-tab-link">
                  <div className="text-block-87">JS</div>
                </a>
                <a data-w-tab="Tab 5" className="tab-link-tab-1-2 w-inline-block w-tab-link">
                  <div className="text-block-87">ASSETS</div>
                </a>
              </div>
              <div className="tabs-content-2 w-tab-content">
                <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active"><img src="images/Frame-38.png" loading="lazy" srcSet="images/Frame-38-p-500.png 500w, images/Frame-38.png 600w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 72vw, (max-width: 1439px) 45vw, 600px" alt="" className="image-70" /></div>
                <div data-w-tab="Tab 3" className="w-tab-pane"><img src="images/Frame-38.png" loading="lazy" srcSet="images/Frame-38-p-500.png 500w, images/Frame-38.png 600w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 72vw, (max-width: 1439px) 45vw, 600px" alt="" className="image-70" /></div>
                <div data-w-tab="Tab 4" className="w-tab-pane"><img src="images/Frame-38.png" loading="lazy" srcSet="images/Frame-38-p-500.png 500w, images/Frame-38.png 600w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 72vw, (max-width: 1439px) 45vw, 600px" alt="" className="image-70" /></div>
                <div data-w-tab="Tab 5" className="w-tab-pane"><img src="images/Frame-38.png" loading="lazy" srcSet="images/Frame-38-p-500.png 500w, images/Frame-38.png 600w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 72vw, (max-width: 1439px) 45vw, 600px" alt="" className="image-70" /></div>
              </div>
            </div>
            <a href="#" className="submit-button-4 short w-button">DOWNLOAD</a>
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>


    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/download.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default download;
