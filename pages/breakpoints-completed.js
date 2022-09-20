import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const breakpointsCompleted = ({ data }) => {

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
          <div className="div-block aaa bbbb">
            <div className="div-block-58">
              <div className="div-block-59">
                <div className="div-block-61">
                  <div className="div-block-60"><img src="images/1240px.svg" loading="lazy" alt="" /></div>
                  <div className="div-block-60"><img src="images/Group.svg" loading="lazy" alt="" /></div>
                  <div className="div-block-60"><img src="images/Group-1.svg" loading="lazy" alt="" /></div>
                  <div className="div-block-60"><img src="images/Group-2.svg" loading="lazy" alt="" /></div>
                  <div className="div-block-60"><img src="images/Group-3_1.svg" loading="lazy" alt="" /></div>
                </div>
                <div>
                  <div className="html-embed w-embed"><input type="range" min={1} max={100} defaultValue={50} id="myRange" /></div><img src="images/Slider.svg" loading="lazy" alt="" />
                </div>
              </div><img src="images/Group-33883.png" loading="lazy" srcSet="images/Group-33883-p-500.png 500w, images/Group-33883-p-800.png 800w, images/Group-33883-p-1080.png 1080w, images/Group-33883.png 6788w" sizes="(max-width: 1919px) 90vw, 1500px" alt="" />
            </div>
          </div>
        </div>
        <div className="div-block-62">
          <a href="#" className="button-5 w-button">Download Code</a>
          <a href="#" className="button-5 w-button">UPLOAD Code</a>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>


    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/breakpointsCompleted.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default breakpointsCompleted;
