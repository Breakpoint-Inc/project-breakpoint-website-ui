import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const pixelsCodeOrDesignsPage = ({ data }) => {

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

      <div className="dashboard-div">
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
              <div className="logo-block-dashboard"><img src="images/Group-3_2.svg" loading="lazy" alt="" className="image-108" />
                <h1 className="heading-149">Dashboard</h1>
              </div>
              <div className="div-block-166">
                <a href="#" className="w-inline-block"><img src="images/Group-60.svg" loading="lazy" alt="" className="image-101" /></a><img src="images/jon-doe-avatar.svg" loading="lazy" alt="" className="image-97" />
                <div className="text-block-76">John Smith</div>
              </div>
            </div>
            <div className="wrap-section1-mu aaa aaaaa min-height-80vh">
              <h1 className="heading-153">What Do You Want To Create Breakpoints For</h1>
              <div className="div-block-388">
                <div className="div-block-389"><img src="images/Group-1000001850.svg" loading="lazy" alt="" className="image-102" />
                  <p className="paragraph-6">Code</p>
                </div>
                <div className="div-block-390"><img src="images/Group-1000001849.svg" loading="lazy" alt="" className="image-102" />
                  <p className="paragraph-6">Designs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* [if lte IE 9]><![endif] */}


    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/pixelsCodeOrDesignsPage.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default pixelsCodeOrDesignsPage;
