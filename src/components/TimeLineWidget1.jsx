import React, { useEffect } from "react";
import styles from "@/components/TimeLineWidget1.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);
const TimeLineWidget1 = () => {
  const timelineData1 = [
    {
      yearLabel: "2000+",
      subtitle: "YEARS AGO",
      title: "Ancient Beginnings",
      highlights: [
        "Lacquerware was first developed in Vietnam as a practical craft for creating durable, waterproof objects like bowls, trays, and furniture.",
        "The use of lacquer resin from the ”son ta” tree (Toxicodendron vernicifluum) became a hallmark of Vietnamese craftsmanship.",
      ],
      images: [
        {
          src: "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/68119712c8c4c74ad0ef01b8_p1-1.avif",
          alt: "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
          caption:
            "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
        },
      ],
    },
  ];
  const timelineData2 = [
    {
      yearLabel: "2000+",
      subtitle: "YEARS AGO",
      title: "Ancient Beginnings",
      highlights: [
        "Travel, at its best, is about being present, and being prepared is what makes that possible, almost seamlessly. There’s a quiet relief that comes with knowing your luggage won’t demand your attention once you land. When the practical details are taken care of, you’re free to notice the small things… the sweet hamper that your friends kept for you to make you feel at home in a new city, the beautiful decor which will make way to your ‘gram, or how you and your partner wish to extend the trip once the celebrations are over.",
      ],
      images: [
        {
          src: "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/68119712c8c4c74ad0ef01b8_p1-1.avif",
          alt: "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
          caption:
            "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
        },
      ],
    },
  ];
  const timelineData3 = [
    {
      yearLabel: "2000+",
      subtitle: "YEARS AGO",
      title: "Ancient Beginnings",
      highlights: [
        "As wedding festivities unfold, days stretch longer than expected. Between mehendi, sangeet, and many late-night celebrations and outfit changes, flexibility becomes essential. This is where the Alpha Bravo Logistics Flap Lid Backpack feels structured yet unfussy. This one can carry essentials without weighing you down. Pair this with the Alabama Crossbody bag, which is almost invisible as you move through celebrations. It will keep your hands free and shoulders relaxed, allowing you to stay focused on the moments that matter.",
      ],
      images: [
        {
          src: "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/68119712c8c4c74ad0ef01b8_p1-1.avif",
          alt: "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
          caption:
            "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
        },
      ],
    },
  ];
  const timelineData4 = [
    {
      yearLabel: "2000+",
      subtitle: "YEARS AGO",
      title: "Ancient Beginnings",
      highlights: [
        "In between ceremonies and commitments, couples often find themselves wandering. And when your belongings are organised, the day feels managed effortlessly. This lets you spend a little more time with your girls as they get their hands adorned with henna, or ensuring the bride-to-be is duly hydrated as you help her sip her favourite drinks. Here you’re clicking photographs that you’ll cherish many years down the line or recall all your favourite memories from the celebrations... These are the quieter moments which reveal themselves slowly. Here time stretches, without weighing you down.",
      ],
      images: [
        {
          src: "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/68119712c8c4c74ad0ef01b8_p1-1.avif",
          alt: "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
          caption:
            "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
        },
      ],
    },
  ];
  const timelineData5 = [
    {
      yearLabel: "2000+",
      subtitle: "YEARS AGO",
      title: "Ancient Beginnings",
      highlights: [
        "With a heart filled with good time, wedding favours, and shared memories, a sense of calm arrives. The bags maybe fuller, but the journey back home will be smoother and lighter. Because when what you carry supports your journey without interrupting it, travel becomes less about logistics—and more about moving through the world together, exactly as you are.",
      ],
      images: [
        {
          src: "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/68119712c8c4c74ad0ef01b8_p1-1.avif",
          alt: "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
          caption:
            "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
        },
      ],
    },
  ];
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      const container = document.querySelector(`.${styles.horizontal}`);
      const wrapper = container?.querySelector(`.${styles.horizontal_wrapper}`);
      const listItems = container?.querySelectorAll(
        `.${styles.about_list_item}`
      );

      if (container && wrapper && listItems.length) {
        const horizontalScrollTimeline = gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: () => "+=" + (wrapper.scrollWidth - window.innerWidth),
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          })
          .to(wrapper, {
            x: () => -(wrapper.scrollWidth - window.innerWidth),
            ease: "none",
          });

        listItems.forEach((item) => {
          const split = new SplitText(item, {
            //   type: "lines",
            linesClass: "single_line",
            mask: "lines",
          });

          gsap.from(split.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: item,
              containerAnimation: horizontalScrollTimeline,
              start: "left 80%",
              once: true,
            },
          });
        });
      }
    });

    mm.add("(max-width: 991px)", () => {
      const listItems = document.querySelectorAll(`.${styles.about_list_item}`);

      listItems.forEach((item) => {
        const split = new SplitText(item, {
          type: "lines",
          mask: "lines",
          linesClass: `${styles.single_line}`,
        });

        gsap.from(split.lines, {
          yPercent: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            once: true,
          },
        });
      });
    });

    // Cleanup SplitText instances on unmount
    return () => {
      SplitText.revert();
      mm.revert();
    };
  }, []);

  return (
    <div className={`${styles.horizontal} ${styles.is_about}`}>
      <div className={`${styles.horizontal_wrapper} ${styles.is_about}`}>
        {timelineData1.map((item, index) => (
          <section
            key={index}
            className={`${styles.section_about_horizontal} ${
              index === 0 ? `${styles.is_first}` : ""
            }`}
          >
            <div className={styles.about_horizontal_container}>
              <div className={styles.about_horizontal_slide}>
                  <div className={`${styles.about_horizontal_progress} ${styles.firstProgessIndicator}`}>
                    <div className={styles.about_progress_circle_wrapper}>
                      <div className={styles.about_progress_circle} />
                    </div>
                  </div>
                <div className={styles.about_horizontal_info}>
                <div className={`${styles.about_timeline_heading_wrapper} ${styles.is_section_1}`}>
                  <h2 className={styles.about_timeline_heading}>
                   Day One: Departures and Long-Haul Ease
                  </h2>
                  {/* <div className={styles.yearago}>{item.subtitle}</div> */}
                </div>
                  {/* <div className={styles.u_hide_tablet}></div> */}
                  <div className={styles.about_horizontal_text}>
                    <h3
                      className={`${styles.u_text_style_h4} ${styles.u_mb_5}`}
                    >
                      {/* Villas */}
                    </h3>
                    <ul role="list" className={styles.about_list}>
                      {/* {item.highlights.map((text, idx) => (
                        <li key={idx} className={styles.about_list_item}>
                          {text}
                        </li> */}
                      <li className={styles.about_list_item}>
                      Long-haul travel are a tempo onto itself, and the incorrect suitcase can throw that 
rhythm right off. It starts when you check in with the TUMI 19 Degree Lite Extended Trip 
Packing Case moving smoothly with you. Don’t be fooled by its lightweight structure 
because it packs quite the punch with its sturdy exterior, which looks sophisticated, 
thanks to its subtle sheen. There’s always room for last-minute additions and 
indulgences that are part and parcel of the experience when you’re travelling with your 
partner.
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <div className={styles.about_gallery_wrapper}>
                  {item.images.map((img, idx) => (
                    <>
                      <div
                        key={idx}
                        className={styles.about_horizontal_image_wrapper}
                      >
                        <img
                          src="/Assets/timeline_widget_1_images/154168_1918_hi-res_alt1_2_1.webp"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <div className={styles.u_text_style_small}>
                          {/* <em>
                           Varun Dhawan and Alia Bhatt in <i>Badrinath Ki Dulhania</i>
                          </em> */}
                        </div>
                      </div>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="/Assets/timeline_widget_1_images/154200_4482_square_1_2.webp"
                            loading="lazy"
                            width="390"
                            height="260"
                            alt=""
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                            {/* <em>
                           Varun Dhawan and Alia Bhatt in <i>Badrinath Ki Dulhania</i>
                          </em> */}
                          </div>
                        </div>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="/Assets/timeline_widget_1_images/154200_A752_hi-res_main_1_3.webp"
                            loading="lazy"
                            width="390"
                            height="260"
                            alt=""
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                            {/* <em>
                           Varun Dhawan and Alia Bhatt in <i>Badrinath Ki Dulhania</i>
                          </em> */}
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.about_progress_wrapper}>
              <div className={styles.about_progress_line} />
            </div>
          </section>
        ))}
        {timelineData2.map((item, index) => (
          <section
            key={index}
            className={`${styles.section_about_horizontal} ${
              index === 0 ? `${styles.is_2}` : ""
            }`}
          >
            <div className={styles.about_horizontal_container}>
              <div className={styles.about_horizontal_slide}>
                    <div className={styles.about_horizontal_progress}>
                      <div className={styles.about_progress_circle_wrapper}>
                        <div className={styles.about_progress_circle} />
                      </div>
                    </div>
                <div className={styles.about_horizontal_info}>
                  <div
                    className={`${styles.about_timeline_heading_wrapper} ${styles.is_section_2}`}
                  >
                    <h2 className={styles.about_timeline_heading}>Day Two: Arrival and Settling In</h2>
                    {/* <div className={styles.yearago}>
                     
                      CENTURY
                    </div> */}
                  </div>
                  <div className={styles.about_horizontal_text}>
                    <h3
                      className={`${styles.u_text_style_h4} ${styles.u_mb_5}`}
                    >
                      {/* {item.title} */}
                    </h3>
                    <ul role="list" className={styles.about_list}>
                      {item.highlights.map((text, idx) => (
                        <li key={idx} className={styles.about_list_item}>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.about_gallery_wrapper}>
                  {item.images.map((img, idx) => (
                    <>
                      <div
                        key={idx}
                        className={styles.about_horizontal_image_wrapper}
                      >
                        <img
                          src="/Assets/timeline_widget_1_images/156490_1041_hi-res_main_1_4.webp"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <div className={styles.u_text_style_small}>
                          {/* <em>
                           Ranveer Singh and Alia Bhatt in <i>Rocky Aur Rani Kii Prem Kahaani</i>
                          </em> */}
                        </div>
                      </div>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="/Assets/timeline_widget_1_images/156561_T522_hi-res_main_1_5.webp"
                            loading="lazy"
                            alt=""
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                             {/* <em>
                           Ranveer Singh and Alia Bhatt in <i>Rocky Aur Rani Kii Prem Kahaani</i>
                          </em> */}
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.about_progress_wrapper}>
              <div className={styles.about_progress_line} />
            </div>
          </section>
        ))}
        {timelineData3.map((item, index) => (
          <section
            key={index}
            className={`${styles.section_about_horizontal} ${
              index === 0 ? `${styles.is_2}` : ""
            }`}
          >
            <div className={styles.about_horizontal_container}>
              <div className={styles.about_horizontal_slide}>
                  <div className={styles.about_horizontal_progress}>
                    <div className={styles.about_progress_circle_wrapper}>
                      <div className={styles.about_progress_circle} />
                    </div>
                  </div>
                <div className={styles.about_horizontal_info}>
                  <div
                    className={`${styles.about_timeline_heading_wrapper} ${styles.is_section_2}`}
                  >
                    <h2 className={styles.about_timeline_heading}>Day Three: Wedding Celebrations Begin</h2>
                    {/* <div className={styles.yearago}>CENTURY</div> */}
                  </div>
                  <div className={styles.about_horizontal_text}>
                    <h3
                      className={`${styles.u_text_style_h4} ${styles.u_mb_5}`}
                    >
                      {/* The Oberoi Spa */}
                    </h3>
                    <ul role="list" className={styles.about_list}>
                      {item.highlights.map((text, idx) => (
                        <li key={idx} className={styles.about_list_item}>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.about_gallery_wrapper}>
                  {item.images.map((img, idx) => (
                    <>
                      <div
                        key={idx}
                        className={styles.about_horizontal_image_wrap_big}
                      >
                        <img
                          src="/Assets/timeline_widget_1_images/250410_13_44_FW25Seasonal_TALENT_VoyageurTylrCrssbdy_Mink_186_v3_RGB_300dpi.webp"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <div className={styles.u_text_style_small}>
                          {/* <em>Shah Rukh Khan and Alia Bhatt in <i>Dear Zindagi</i></em> */}
                        </div>
                      </div>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="/Assets/timeline_widget_1_images/gettyimages-1149812845-2048x2048_9.webp"
                            loading="lazy"
                            alt=""
                            className={styles.about_horizontal_image}
                            sizes="(max-width: 479px) 100vw, 418px"
                          />
                          <div className={styles.u_text_style_small}>
                             {/* <em>Shah Rukh Khan and Alia Bhatt in <i>Dear Zindagi</i></em> */}
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.about_progress_wrapper}>
              <div className={styles.about_progress_line} />
            </div>
          </section>
        ))}
        {timelineData4.map((item, index) => (
          <section
            key={index}
            className={`${styles.section_about_horizontal} ${
              index === 0 ? `${styles.is_2}` : ""
            }`}
          >
            <div className={styles.about_horizontal_container}>
              <div className={styles.about_horizontal_slide}>
                  <div className={styles.about_horizontal_progress}>
                    <div className={styles.about_progress_circle_wrapper}>
                      <div className={styles.about_progress_circle} />
                    </div>
                  </div>
                <div className={styles.about_horizontal_info}>
                  <div
                    className={`${styles.about_timeline_heading_wrapper} ${styles.is_section_2}`}
                  >
                    <h2 className={styles.about_timeline_heading}>Day Four: Between Events and Memories of a Lifetime</h2>
                    {/* <div className={styles.yearago}>CENTURY</div> */}
                  </div>
                  <div className={styles.about_horizontal_text}>
                    <h3
                      className={`${styles.u_text_style_h4} ${styles.u_mb_5}`}
                    >
                      {/* Events */}
                    </h3>
                    <ul role="list" className={styles.about_list}>
                      {item.highlights.map((text, idx) => (
                        <li key={idx} className={styles.about_list_item}>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.about_gallery_wrapper}>
                  {item.images.map((img, idx) => (
                    <>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          key={idx}
                          className={styles.about_horizontal_image_wrapper}
                        >
                          <img
                            src="/Assets/timeline_widget_1_images/gettyimages-529959105-2048x2048_8.webp"
                            alt={img.alt}
                            //   width="390"
                            //     height="475"
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                            {/* <em>
                              Vicky Kaushal and Alia Bhatt in <i>Raazi</i> 
                            </em> */}
                          </div>
                        </div>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="/Assets/timeline_widget_1_images/gettyimages-85666215-2048x2048_7.webp"
                            loading="lazy"
                            alt=""
                            className={styles.about_horizontal_image}
                            sizes="(max-width: 479px) 100vw, 418px"
                          />
                          <div className={styles.u_text_style_small}>
                            {/* <em>
                              Vicky Kaushal and Alia Bhatt in <i>Raazi</i> 
                            </em> */}
                          </div>
                        </div>
                      </div>
                      <div
                        key={idx}
                        className={styles.about_horizontal_artwork_wrapper}
                      >
                        <img
                          src="/Assets/timeline_widget_1_images/gettyimages-sb10069796g-001-2048x2048_10.webp"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        {/* <em>
                              Vicky Kaushal and Alia Bhatt in <i>Raazi</i> 
                            </em> */}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.about_progress_wrapper}>
              <div className={styles.about_progress_line} />
            </div>
          </section>
        ))}
        {timelineData5.map((item, index) => (
          <section
            key={index}
            className={`${styles.section_about_horizontal} ${
              index === 0 ? `${styles.is_2}` : ""
            }`}
          >
            <div className={styles.about_horizontal_container}>
              <div className={styles.about_horizontal_slide}>
                  <div className={styles.about_horizontal_progress}>
                    <div className={styles.about_progress_circle_wrapper}>
                      <div className={styles.about_progress_circle} />
                    </div>
                  </div>
                <div className={styles.about_horizontal_info}>
                  <div
                    className={`${styles.about_timeline_heading_wrapper} ${styles.is_section_2}`}
                  >
                    <h2 className={styles.about_timeline_heading}>Day Five: Post-Wedding Travel and Return to Base</h2>
                    {/* <div className={styles.yearago}>CENTURY</div> */}
                  </div>
                  <div className={styles.about_horizontal_text}>
                    <h3
                      className={`${styles.u_text_style_h4} ${styles.u_mb_5}`}
                    >
                      {/* The Oberoi Spa */}
                    </h3>
                    <ul role="list" className={styles.about_list}>
                      {item.highlights.map((text, idx) => (
                        <li key={idx} className={styles.about_list_item}>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.about_gallery_wrapper}>
                  {item.images.map((img, idx) => (
                    <>
                      <div
                        key={idx}
                        className={styles.about_horizontal_image_wrap_big}
                      >
                        <img
                          src="/Assets/timeline_widget_1_images/156561_T522_hi-res_main_1_5.webp"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <div className={styles.u_text_style_small}>
                          {/* <em>Shah Rukh Khan and Alia Bhatt in <i>Dear Zindagi</i></em> */}
                        </div>
                      </div>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="/Assets/timeline_widget_1_images/154200_A752_hi-res_main_1_3.webp"
                            loading="lazy"
                            alt=""
                            className={styles.about_horizontal_image}
                            sizes="(max-width: 479px) 100vw, 418px"
                          />
                          <div className={styles.u_text_style_small}>
                             {/* <em>Shah Rukh Khan and Alia Bhatt in <i>Dear Zindagi</i></em> */}
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.about_progress_wrapper}>
              <div className={styles.about_progress_line} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TimeLineWidget1;

// const t = gsap.matchMedia();
// t.add("(min-width: 769px)", () => {
//   const t = document.querySelector(`.${styles.horizontal}`),
//     r = t.querySelector(`.${styles.horizontal_wrapper}`);
//   t &&
//     r &&
//     gsap
//       .timeline({
//         defaults: {
//           ease: "none",
//         },
//         scrollTrigger: {
//           trigger: t,
//           start: "top top",
//           end: () => "+=" + (r.scrollWidth - window.innerWidth),
//           pin: !0,
//           scrub: 1,
//           invalidateOnRefresh: !0,
//         },
//       })
//       .to(r, {
//         x: () => -(r.scrollWidth - window.innerWidth),
//         ease: "none",
//       });
// }),
//   t.add("(max-width: 768px)", () => {
//     ScrollTrigger.kill();
//   });
