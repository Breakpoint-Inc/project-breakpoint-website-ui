import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const generalSetting = ({ data }) => {

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
        <div className="payment-popup">
          <div className="poopup-form-wrapper">
            <div className="div-block-422">
              <h1 className="heading-168">Edit Payment information</h1><img src="images/Icon.svg" loading="lazy" data-w-id="053e88f2-77da-f79f-1757-4abe673cc985" alt="" className="close-button" />
            </div>
            <div className="div-block-446">
              <h3 className="heading-169">Payment method</h3><img src="images/Rectangle-4239.svg" loading="lazy" alt="" className="image-105" /><img src="images/Group-1000001753.svg" loading="lazy" alt="" className="image-106" />
              <div className="form-block-10 w-form">
                <form id="email-form-3" name="email-form-3" data-name="Email Form 3" method="get"><label htmlFor="Card-Details" className="card-label">Card Details *</label>
                  <div className="div-block-146"><input type="text" className="input-filed-db card-details spacing new w-input" maxLength={256} name="name" data-name="Name" placeholder="0000 0000 0000 000" id="name" /><input type="text" className="input-filed-db card-details data no-card new w-input" maxLength={256} name="MM-YY" data-name="MM /YY" placeholder="MM /YY" id="MM-YY" /><input type="text" className="input-filed-db card-details data no-card new w-node-a01f55c6-fb4c-1789-ff50-075c32410b09-0b0facc0 w-input" maxLength={256} name="CVV" data-name="CVV" placeholder="CVV" id="CVV" /><input type="text" className="input-filed-db card-details data last no-card new w-node-a01f55c6-fb4c-1789-ff50-075c32410b0a-0b0facc0 w-input" maxLength={256} name="ZIP-Code" data-name="ZIP Code" placeholder="ZIP Code" id="ZIP-Code" /></div><label htmlFor="email-2" className="card-label">Name *</label><input type="text" className="card-input w-input" maxLength={256} name="Name" data-name="Name" placeholder id="Name-3" required /><label htmlFor="email-2" className="card-label">Email *</label><input type="email" className="card-input w-input" maxLength={256} name="Email" data-name="Email" placeholder id="Email-3" required /><label htmlFor="Billing-address" className="card-label">Billing address</label><input type="email" className="card-input w-input" maxLength={256} name="Billing-address" data-name="Billing address" placeholder id="Billing-address" required /><input type="submit" defaultValue="Save and Continue" data-wait="Please wait..." className="card-button w-button" />
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
              <div className="content-wrapper">
                <h1 className="heading-155">General Settings</h1>
                <div className="div-block-394 _90">
                  <div className="div-block-395">
                    <h1 className="heading-156">Settings</h1>
                    <div data-current="Tab 1" data-easing="ease" data-duration-in={300} data-duration-out={100} className="w-tabs">
                      <div className="tabs-menu w-tab-menu">
                        <a data-w-tab="Tab 1" className="tab-link w-inline-block w-tab-link w--current">
                          <div>Settings</div>
                        </a>
                        <a data-w-tab="Tab 2" className="tab-link w-inline-block w-tab-link">
                          <div>Notification</div>
                        </a>
                        <a data-w-tab="Tab 3" className="tab-link w-inline-block w-tab-link">
                          <div>Billing</div>
                        </a>
                      </div>
                      <div className="tabs-content w-tab-content">
                        <div data-w-tab="Tab 1" className="tab-block w-tab-pane w--tab-active">
                          <div className="div-block-396">
                            <div className="div-block-397">
                              <h1 className="heading-157">Profile</h1><img loading="lazy" src="images/profile.svg" alt="" />
                              <h1 className="heading-158">Alex Iwobi</h1>
                              <h3 className="heading-159">Admin</h3>
                              <a href="#" className="button-16 w-button">Edit Profile</a>
                            </div>
                            <div className="div-block-398">
                              <div className="div-block-399">
                                <h1 className="heading-160">BASIC INFO</h1>
                                <div className="w-form">
                                  <form id="email-form" name="email-form" data-name="Email Form" method="get"><label htmlFor="name" className="dash-input-filed">Name *</label><input type="text" className="dash-text-filed w-input" maxLength={256} name="name" data-name="Name" placeholder="Enter your username" id="name" /><label htmlFor="email" className="dash-input-filed">Email *</label><input type="email" className="dash-text-filed w-input" maxLength={256} name="email" data-name="Email" placeholder="Enter your email address" id="email" required /><label htmlFor="Password" className="dash-input-filed">Password</label><input type="password" className="dash-text-filed w-input" maxLength={256} name="Password" data-name="Password" placeholder="**********" id="Password" required /><label htmlFor="Confirm-Password" className="dash-input-filed">Confirm Password</label><input type="password" className="dash-text-filed w-input" maxLength={256} name="Confirm-Password" data-name="Confirm Password" placeholder="**********" id="Confirm-Password" required />
                                    <div className="div-block-400">
                                      <a href="#" className="cancel-button w-button">Cancel</a><input type="submit" data-wait="Please wait..." defaultValue="Save" className="save-button w-button" />
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
                        <div data-w-tab="Tab 2" className="tab-block w-tab-pane">
                          <div className="div-block-401">
                            <div className="div-block-402">
                              <div id="w-node-_05163dff-9a03-04a2-d193-3a473c4b9396-0b0facc0">
                                <div className="w-form">
                                  <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get"><label className="w-checkbox checkbox-field">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" /><input type="checkbox" name="News-and-updates" id="News-and-updates" data-name="News and updates" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} /><span className="checkbox-label w-form-label" htmlFor="News-and-updates"><span className="text-span-2">News and updates<br /></span>News about products and features updates.</span>
                                  </label></form>
                                  <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                  </div>
                                  <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                  </div>
                                </div>
                              </div>
                              <div id="w-node-_0c25b179-41b4-6266-5ba0-ab012cd61a8e-0b0facc0">
                                <div className="w-form">
                                  <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get"><label className="w-checkbox checkbox-field">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" /><input type="checkbox" name="News-and-updates-2" id="News-and-updates-2" data-name="News And Updates 2" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} /><span className="checkbox-label w-form-label" htmlFor="News-and-updates-2"><span className="text-span-2">Nips and Tutorials<br /></span>News about products and features updates.</span>
                                  </label></form>
                                  <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                  </div>
                                  <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                  </div>
                                </div>
                              </div>
                              <div id="w-node-_6a21a613-f776-68c8-ce61-81b7c8f02861-0b0facc0">
                                <div className="w-form">
                                  <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get"><label className="w-checkbox checkbox-field">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" /><input type="checkbox" name="News-and-updates-3" id="News-and-updates-3" data-name="News And Updates 3" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} /><span className="checkbox-label w-form-label" htmlFor="News-and-updates-3"><span className="text-span-2">User research<br /></span>News about products and features updates.</span>
                                  </label></form>
                                  <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                  </div>
                                  <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                  </div>
                                </div>
                              </div>
                              <div id="w-node-_1d5abb09-0e32-1eb7-b370-15eeff809875-0b0facc0">
                                <div className="w-form">
                                  <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get"><label className="w-checkbox checkbox-field">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" /><input type="checkbox" name="News-and-updates-4" id="News-and-updates-4" data-name="News And Updates 4" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} /><span className="checkbox-label w-form-label" htmlFor="News-and-updates-4"><span className="text-span-2">Reminders<br /></span>News about products and features updates.</span>
                                  </label></form>
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
                          <div className="div-block-403">
                            <a href="#" className="cancel-button w-button">Cancel</a>
                            <a href="#" className="save-button w-button">Save</a>
                          </div>
                        </div>
                        <div data-w-tab="Tab 3" className="tab-block w-tab-pane">
                          <div className="div-block-404">
                            <div className="div-block-405">
                              <h1 className="heading-161">Your Credit Card</h1><img loading="lazy" src="images/Mask-Group.png" alt="" />
                              <div className="div-block-411">
                                <h1 className="heading-162">Recent Payment</h1>
                                <div className="div-block-407">
                                  <div id="w-node-d6f8d642-cef6-e7be-bb41-f76a32cad836-0b0facc0" className="div-block-408"><img loading="lazy" src="images/Group-18311.svg" alt="" />
                                    <p className="paragraph-8">Charge Back</p>
                                  </div>
                                  <div id="w-node-d9d1991b-a6c6-864c-b8e8-598f217e9157-0b0facc0" className="div-block-409">
                                    <p className="paragraph-9 orange">PAYMENT</p><img loading="lazy" src="images/Group-18356.svg" alt="" />
                                  </div>
                                  <div id="w-node-b9555fbf-12b2-8ecc-51bd-7530675f9efc-0b0facc0" className="div-block-409">
                                    <p className="paragraph-9">Mar 20, 2021</p>
                                  </div>
                                  <div id="w-node-_43d492a1-296e-0684-ea1a-b1afde79e8e2-0b0facc0" className="div-block-409">
                                    <p className="paragraph-9 red">-$140,20</p>
                                  </div>
                                  <div id="w-node-_78b516d8-b5b6-a485-badf-65fa33c0e437-0b0facc0" className="div-block-410"><img loading="lazy" src="images/Group-214.1.svg" alt="" /></div>
                                </div>
                                <div className="div-block-407">
                                  <div id="w-node-d84bc01b-af79-1037-8da1-f30dbb238ab3-0b0facc0" className="div-block-408"><img loading="lazy" src="images/Group-18311.svg" alt="" />
                                    <p className="paragraph-8">Information Reqested</p>
                                  </div>
                                  <div id="w-node-d84bc01b-af79-1037-8da1-f30dbb238ab7-0b0facc0" className="div-block-409">
                                    <p className="paragraph-9 blue">REFUND</p><img loading="lazy" src="images/blue.svg" alt="" />
                                  </div>
                                  <div id="w-node-d84bc01b-af79-1037-8da1-f30dbb238abb-0b0facc0" className="div-block-409">
                                    <p className="paragraph-9">Mar 20, 2021</p>
                                  </div>
                                  <div id="w-node-d84bc01b-af79-1037-8da1-f30dbb238abe-0b0facc0" className="div-block-409">
                                    <p className="paragraph-9 red">+$40,20</p>
                                  </div>
                                  <div id="w-node-d84bc01b-af79-1037-8da1-f30dbb238ac1-0b0facc0" className="div-block-410"><img loading="lazy" src="images/Group-214.1.svg" alt="" /></div>
                                </div>
                                <div className="div-block-407">
                                  <div id="w-node-_3dadaa91-524a-ab99-65f7-38474b53b9be-0b0facc0" className="div-block-408"><img loading="lazy" src="images/Group-18311.svg" alt="" />
                                    <p className="paragraph-8">Settled</p>
                                  </div>
                                  <div id="w-node-_3dadaa91-524a-ab99-65f7-38474b53b9c2-0b0facc0" className="div-block-409">
                                    <p className="paragraph-9 orange">PAYMENT</p><img loading="lazy" src="images/Group-18356.svg" alt="" />
                                  </div>
                                  <div id="w-node-_3dadaa91-524a-ab99-65f7-38474b53b9c6-0b0facc0" className="div-block-409">
                                    <p className="paragraph-9">Mar 20, 2021</p>
                                  </div>
                                  <div id="w-node-_3dadaa91-524a-ab99-65f7-38474b53b9c9-0b0facc0" className="div-block-409">
                                    <p className="paragraph-9 red">-$74,70</p>
                                  </div>
                                  <div id="w-node-_3dadaa91-524a-ab99-65f7-38474b53b9cc-0b0facc0" className="div-block-410"><img loading="lazy" src="images/Group-214.1.svg" alt="" /></div>
                                </div>
                                <div className="div-block-407">
                                  <div id="w-node-_1fb07823-052f-4844-d334-de4effc6d388-0b0facc0" className="div-block-408"><img loading="lazy" src="images/Group-18311.svg" alt="" />
                                    <p className="paragraph-8">Authorised</p>
                                  </div>
                                  <div id="w-node-_1fb07823-052f-4844-d334-de4effc6d38c-0b0facc0" className="div-block-409">
                                    <p className="paragraph-9 yilot">CREDIT</p><img loading="lazy" src="images/viloet.svg" alt="" />
                                  </div>
                                  <div id="w-node-_1fb07823-052f-4844-d334-de4effc6d390-0b0facc0" className="div-block-409">
                                    <p className="paragraph-9">Mar 19, 2021</p>
                                  </div>
                                  <div id="w-node-_1fb07823-052f-4844-d334-de4effc6d393-0b0facc0" className="div-block-409">
                                    <p className="paragraph-9 red">-$1,20</p>
                                  </div>
                                  <div id="w-node-_1fb07823-052f-4844-d334-de4effc6d396-0b0facc0" className="div-block-410"><img loading="lazy" src="images/Group-214.1.svg" alt="" /></div>
                                </div>
                              </div>
                            </div>
                            <div className="div-block-406">
                              <div className="account-wrapper">
                                <a data-w-id="54c2b3c1-cbb6-f051-b145-1998074dc4e3" href="#" className="button-17 w-button">Edit payment info</a>
                                <h3 className="heading-163">Payment Detail</h3><img loading="lazy" src="images/profi.svg" alt="" />
                                <h4 className="heading-164">Mark Henry</h4>
                                <div className="div-block-412">
                                  <h4 className="heading-165">Amount Due</h4>
                                  <h4 className="heading-166">$250.00</h4>
                                  <p className="paragraph-10">Visa $250.00</p>
                                </div>
                                <div className="div-block-413">
                                  <h4 className="heading-165">Billing Plan</h4>
                                  <h1 className="heading-167">Company Start</h1>
                                  <div className="div-block-414">
                                    <div className="div-block-415"><img loading="lazy" src="images/info-infornation-1.svg" alt="" />
                                      <p className="paragraph-11">5 team members ($8 / Month each)</p>
                                    </div>
                                    <ul role="list" className="list">
                                      <li>
                                        <p className="paragraph-12">100 GB Extra storage ($25.00)</p>
                                      </li>
                                      <li>
                                        <p className="paragraph-12">8 extra hours ($2 / hour)</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="div-block-416 boot">
                                  <div className="div-block-417">
                                    <div id="w-node-_434693b7-93f5-0e20-0cb9-1feaf5c3d6d2-0b0facc0">
                                      <h4 className="heading-165 left">Billing Plan</h4>
                                      <p className="paragraph-13">275 New North Road, London‎</p>
                                    </div>
                                    <div id="w-node-_8c647f6a-a291-9d9c-5fc3-95504cbcb2f3-0b0facc0">
                                      <h4 className="heading-165 left">Invoice Number</h4>
                                      <p className="paragraph-13">49682</p>
                                    </div>
                                    <div id="w-node-f808d69b-86b5-5bbf-5080-3d56f8c70af6-0b0facc0">
                                      <h4 className="heading-165 left">Due Date</h4>
                                      <p className="paragraph-13">15 May, 2022</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="div-block-418">
                                  <div className="div-block-419">
                                    <div id="w-node-f665dd4e-0d41-36b2-b53f-ea837cd2641e-0b0facc0">
                                      <p className="paragraph-14">Subtotal: <span className="text-span-3">$250.00</span></p>
                                    </div>
                                    <div id="w-node-df93a48d-7571-c467-532f-a62bc87b2537-0b0facc0" className="div-block-420" />
                                    <div id="w-node-f8bab483-14af-d1c4-59c7-0ef79e096930-0b0facc0">
                                      <p className="paragraph-14">Tax:: <span className="text-span-3">$25.00</span></p>
                                    </div>
                                    <div id="w-node-_5fc7ba90-9956-2d59-68a6-89849c5a9db1-0b0facc0">
                                      <p className="paragraph-14">Amount Due (USD): <span className="text-span-3">$250.00</span></p>
                                    </div>
                                  </div>
                                  <div className="div-block-421">
                                    <a href="#" className="button-18 w-button">Continue</a>
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
    .readFileSync("public/content/generalSetting.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default generalSetting;
