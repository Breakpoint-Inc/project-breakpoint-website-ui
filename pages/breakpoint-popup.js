import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const breakpointPopup = ({ data }) => {

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
          <div className="div-block aaa">
            <div className="div-block-49">
              <div className="div-block-50 hide">
                <div className="text-block-24">SIGN&nbsp;UP</div>
                <div className="div-block-51">
                  <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get"><label htmlFor="name" className="field-label">Name*</label><input type="text" className="text-field w-input" maxLength={256} name="name" data-name="Name" placeholder="Enter your username" id="name" required /><label htmlFor="Email" className="field-label">Email*</label><input type="email" className="text-field w-input" maxLength={256} name="Email" data-name="Email" placeholder="Enter your email address" id="Email" required /><input type="submit" defaultValue="SIGN UP" data-wait="Please wait..." className="submit-button w-button" /></form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-block-14">
                <div className="text-block-25">Sign Up</div>
                <div className="div-block-15">
                  <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" method="get"><label htmlFor="name" className="field-label-2">Name*</label><input type="text" className="text-field-2 w-input" maxLength={256} name="name" data-name="Name" placeholder="Enter your username" id="name" /><label htmlFor="Email" className="field-label-2">Email Address*</label><input type="text" className="text-field-2 w-input" maxLength={256} name="Email" data-name="Email" placeholder="Enter your email address" id="Email" /><input type="submit" defaultValue="SIGN UP" data-wait="Please wait..." className="submit-button-2 w-button" />
                      <div className="submit-button-2 google">
                        <div className="div-block-17"><img src="images/Google-logo.svg" loading="lazy" alt="" className="image-9" />
                          <div>Sign up with Google</div>
                        </div>
                      </div>
                      <div className="submit-button-2 facebook">
                        <div className="div-block-17"><img src="images/logo-googleg-48dp.svg" loading="lazy" alt="" className="image-9" />
                          <div>Sign up with Facebook</div>
                        </div>
                      </div>
                      <div className="text-block-10">By continuing your agree to our privacy policy and terms and conditions.</div>
                      <div className="text-block-11">Already have an account? <a href="#" className="link-2">Sign in</a>
                      </div>
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-4 wf-section" />
        <div className="div-block-54">
          <div className="div-block-14-bp-dbp"><img src="images/Icon.svg" loading="lazy" alt="" className="image-12" />
            <div className="text-block-27">What Breakpoints Do You Want</div>
            <div className="div-block-23">
              <div className="form-block w-form">
                <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form">
                  <div data-w-id="102b9cdd-dd3f-19fd-274f-6572f298506a" className="div-block-24 _1"><img src="images/akar-icons_desktop-device.svg" loading="lazy" alt="" />
                    <div className="text-block-26">Desktop</div>
                  </div>
                  <div className="div-block-24"><img src="images/akar-icons_tablet-device.svg" loading="lazy" alt="" />
                    <div className="text-block-26">Tablet</div>
                  </div>
                  <div className="div-block-24 _3"><img src="images/akar-icons_mobile-device-1.svg" loading="lazy" alt="" />
                    <div className="text-block-26">Mobile</div>
                  </div>
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            <div className="div-block-25">
              <div className="div-block-26">
                <div>
                  <div className="text-block-28">1 Layer 20</div>
                </div>
                <div className="div-block-56">
                  <div className="text-block-28">1920 px -</div>
                  <a href="#" className="link-block w-inline-block"><img src="images/Icon-7.svg" loading="lazy" alt="" className="image-11" /></a>
                  <a href="#" className="link-block-del w-inline-block"><img src="images/Icon-8.svg" loading="lazy" alt="" className="image-11" /></a>
                </div>
              </div>
              <div className="div-block-26">
                <div>
                  <div className="text-block-28">1 Layer 20</div>
                </div>
                <div className="div-block-56">
                  <div className="text-block-28">1440 px -</div>
                  <a href="#" className="link-block w-inline-block"><img src="images/Icon-7.svg" loading="lazy" alt="" className="image-11" /></a>
                  <a href="#" className="link-block-del w-inline-block"><img src="images/Icon-8.svg" loading="lazy" alt="" className="image-11" /></a>
                </div>
              </div>
              <div className="div-block-26">
                <div>
                  <div className="text-block-28">1 Layer 20</div>
                </div>
                <div className="div-block-56">
                  <div className="text-block-28">720 px -</div>
                  <a href="#" className="link-block w-inline-block"><img src="images/Icon-7.svg" loading="lazy" alt="" className="image-11" /></a>
                  <a href="#" className="link-block-del w-inline-block"><img src="images/Icon-8.svg" loading="lazy" alt="" className="image-11" /></a>
                </div>
              </div>
              <div className="div-block-26">
                <div className="div-block-57">
                  <a href="#" className="link-block-plus w-inline-block"><img src="images/Vector-3.svg" loading="lazy" alt="" className="image-11" /></a>
                </div>
              </div>
            </div>
            <div className="div-block-55">
              <a href="toggle.html" className="button-4 w-button">Create</a>
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
    .readFileSync("public/content/breakpointPopup.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default breakpointPopup;
