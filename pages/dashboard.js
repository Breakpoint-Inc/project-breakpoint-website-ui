import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const dashboard = ({ data }) => {

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
          <div className="div-block-325 left-side-nav">
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
          <div className="div-block-328 aaa bbb">
            <div className="dashboard-headerr">
              <div>
                <h1 className="heading-149">Dashboard</h1>
              </div>
              <div className="div-block-166">
                <a href="#" className="w-inline-block"><img src="images/Group-60.svg" loading="lazy" alt="" className="image-101" /></a><img src="images/jon-doe-avatar.svg" loading="lazy" alt="" className="image-97" />
                <div className="text-block-76">John Smith</div>
              </div>
            </div>
            <div className="content-wrapper empty-content">
              <div className="div-block-391">
                <div id="w-node-_8bcc7a8f-088c-161d-7b81-d45d4ec8ca4f-636122bf" className="dash-wrapper">
                  <div className="div-block-393"><img src="images/add.svg" loading="lazy" alt="" /></div>
                  <div className="div-block-392">
                    <h1 className="heading-154">ADD PROJECT</h1><img src="images/add-black.svg" loading="lazy" alt="" />
                  </div>
                </div>
                <div id="w-node-c598d4cc-aa1e-ae94-4be4-661646116b1f-636122bf" className="dash-wrapper">
                  <div className="div-block-393"><img src="images/Homepage-v1-1_1.png" loading="lazy" alt="" className="image-104" /></div>
                  <div className="div-block-392 center">
                    <h1 className="heading-154">PROJECT A</h1>
                  </div>
                </div>
                <div id="w-node-_93336426-593b-1552-48fe-783b2dd47aa5-636122bf" className="dash-wrapper">
                  <div className="div-block-393"><img src="images/Rectangle-1770.png" loading="lazy" alt="" className="image-104" /></div>
                  <div className="div-block-392 center">
                    <h1 className="heading-154">PROJECT A</h1>
                  </div>
                </div>
                <div id="w-node-edd096cb-a826-36b7-690d-54b9925283a6-636122bf" className="dash-wrapper">
                  <div className="div-block-393 bg-white"><img src="images/Group-1000001852.png" loading="lazy" alt="" className="image-104" /></div>
                  <div className="div-block-392 center">
                    <h1 className="heading-154">PROJECT A</h1>
                  </div>
                </div>
                <div id="w-node-_4f426b6b-a6f3-8a2c-82e6-92778c567a8a-636122bf" className="dash-wrapper">
                  <div className="div-block-393 bg-white"><img src="images/pink.png" loading="lazy" alt="" className="image-104" /></div>
                  <div className="div-block-392 center">
                    <h1 className="heading-154">PROJECT A</h1>
                  </div>
                </div>
                <div id="w-node-_36379abc-5c11-583a-43a3-ba88e77f0102-636122bf" className="dash-wrapper">
                  <div className="div-block-393 bg-white"><img src="images/system.png" loading="lazy" alt="" className="image-104" /></div>
                  <div className="div-block-392 center">
                    <h1 className="heading-154">PROJECT A</h1>
                  </div>
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
    .readFileSync("public/content/dashboard.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default dashboard;
