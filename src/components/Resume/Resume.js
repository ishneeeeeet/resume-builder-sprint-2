import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";
import styles from "./Resume.module.css";
import { resumeContext } from "../../context";

const Resume = forwardRef((props, ref) => {
  const information = props.information;
  const sections = props.sections;
  const containerRef = useRef();

  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, seTarget] = useState("");
  const { resume, setResume } = useContext(resumeContext);
  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  };
  const [infoState, setInfo] = useState({
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  });
  useEffect(() => {
    const newInfo = {
      workExp: information[sections.workExp],
      project: information[sections.project],
      achievement: information[sections.achievement],
      education: information[sections.education],
      basicInfo: information[sections.basicInfo],
      summary: information[sections.summary],
      other: information[sections.other],
    };
    setInfo(newInfo);
  }, [information, sections]);

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const sectionDiv = {
    [sections.workExp]: (
      <div
        key={"workexp"}
        draggable
        onDragOver={() => seTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`${styles.section} ${
          info.workExp?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={styles.content}>
          {info.workExp?.details?.map((item) => (
            <div className={styles.item} key={item.title}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className={styles.subTitle}>{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificationLink ? (
                <a className={styles.link} href={item.certificationLink}>
                  <Paperclip />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className={styles.date}>
                  <MapPin /> Remote
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        draggable
        onDragOver={() => seTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`${styles.section} ${
          info.project?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
        <div className={styles.content}>
          {info.project?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className={styles.link} href={item.link}>
                  <Paperclip />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className={styles.link} href={item.github}>
                  <GitHub />
                  {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={styles.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.education]: (
      <div
        key={"education"}
        draggable
        onDragOver={() => seTarget(info.education?.id)}
        onDragEnd={() => setSource(info.education?.id)}
        className={`${styles.section} ${
          info.education?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.education?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.education?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className={styles.subTitle}>{item.college}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievement]: (
      <div
        key={"achievement"}
        draggable
        onDragOver={() => seTarget(info.achievement?.id)}
        onDragEnd={() => setSource(info.achievement?.id)}
        className={`${styles.section} ${
          info.achievement?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.achievement?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.achievement?.points?.length > 0 ? (
            <ul className={styles.numbered}>
              {info.achievement?.points?.map((elem, index) => (
                <li className={styles.point} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sections.summary]: (
      <div
        key={"summary"}
        draggable
        onDragOver={() => seTarget(info.summary?.id)}
        onDragEnd={() => setSource(info.summary?.id)}
        className={`${styles.section} ${
          info.summary?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info.summary?.detail}</p>
        </div>
      </div>
    ),
    [sections.other]: (
      <div
        key={"other"}
        draggable
        onDragOver={() => seTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
        className={`${styles.section} ${
          info.other?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info?.other?.detail}</p>
        </div>
      </div>
    ),
  };

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempColumns = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempColumns[0].findIndex((item) => item === source);
    let sourceColumnIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColumnIndex = 1;
      sourceRowIndex = tempColumns[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempColumns[0].findIndex((item) => item === target);
    let targetColumnIndex = 0;
    if (targetRowIndex < 0) {
      targetColumnIndex = 1;
      targetRowIndex = tempColumns[1].findIndex((item) => item === target);
    }

    const tempSource = tempColumns[sourceColumnIndex][sourceRowIndex];
    tempColumns[sourceColumnIndex][sourceRowIndex] =
      tempColumns[targetColumnIndex][targetRowIndex];

    tempColumns[targetColumnIndex][targetRowIndex] = tempSource;

    setColumns(tempColumns);
  };

  useEffect(() => {
    setColumns([
      [sections.project, sections.education, sections.summary],
      [sections.workExp, sections.achievement, sections.other],
    ]);
  }, []);

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColor || !container) return;

    container.style.setProperty("--color", props.activeColor);
  }, [props.activeColor]);

  switch (resume.template) {
    case "templateone":
      return (
        <div ref={ref} > 
          <div
            className="rela-block page"
            style={{
              width: "50%",
              height: "50%",
              maxWidth: "1200px",
              margin: "80px auto",
              backgroundColor: "white",
              boxShadow: "6px 10px 28px 0px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div
              className="rela-block top-bar"
              style={{
                height: "220px",
                backgroundColor: "#848484",
                color: "white",
              }}
            >
              <div
                className="caps name"
                style={{
                 
                  top: 0,
                  left: 0,
                  bottom: "calc(350px + 5%)",
                  right: 0,
                  height: "120px",
                  textAlign: "center",
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "58px",
                  letterSpacing: "8px",
                  fontWeight: 100,
                  lineHeight: "60px",
                }}
              >
                <div className="abs-center">Kyle J Shanks</div>
              </div>
            </div>
            <div
              className="side-bar"
              style={{
                position: "absolute",
                top: "60px",
                bottom: 0,
                left: "5%",
                right: 0,
                width: "350px",
                backgroundColor: "#F7E0C1",
                padding: "320px 30px 50px",
              }}
            >
              <div
                className="mugshot"
                style={{
                  position: "absolute",
                  top: "50px",
                  left: 0,
                  bottom: "70px",
                  right: 0,
                  height: "210px",
                  width: "210px",
                }}
              >
                <div
                  className="logo"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: 100,
                    margin: 0,
                    color: "black",
                    height: "250px",
                    width: "250px",
                  }}
                >
                  <svg
                    viewBox="0 0 80 80"
                    className="rela-block logo-svg"
                    style={{
                      height: "100%",
                      width: "100%",
                      stroke: "black",
                      cursor: "pointer",
                    }}
                  >
                    <path
                      d="M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z"
                      strokeWidth="2.5"
                      fill="none"
                    />
                  </svg>
                  <p
                    className="logo-text"
                    style={{
                      position: "absolute",
                      top: "58%",
                      left: "16%",
                      cursor: "pointer",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "50px",
                      fontWeight: 400,
                    }}
                  >
                    kj
                  </p>
                </div>
              </div>
              <p>123 My Place Drive</p>
              <p>Astoria, New York 11105</p>
              <p>1-800-CALLPLZ</p>
              <p>emailsareforsquares@gmail.com</p>
              <br />
              <p className="rela-block social twitter">Twitter stuff</p>
              <p className="rela-block social pinterest">Pinterest things</p>
              <p className="rela-block social linked-in">Linked-in man</p>
              <p className="rela-block caps side-header">Expertise</p>
              <p className="rela-block list-thing">HTML</p>
              <p className="rela-block list-thing">CSS (Stylus)</p>
              <p className="rela-block list-thing">JavaScript & jQuery</p>
              <p className="rela-block list-thing">Killer Taste</p>
              <p className="rela-block caps side-header">Education</p>
              <p className="rela-block list-thing">Advanced potion making</p>
              <p className="rela-block list-thing">
                Degree in popping and locking
              </p>
              <p className="rela-block list-thing">Knitting game on point</p>
              <p className="rela-block list-thing">Culinary af</p>
            </div>
            <div
              className="rela-block content-container"
              style={{
                marginRight: 0,
                width: "calc(95% - 350px)",
                padding: "25px 40px 50px",
              }}
            >
              <h2
                className="rela-block caps title"
                style={{
                  width: "80%",
                  textAlign: "center",
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "30px",
                  letterSpacing: "5px",
                  fontWeight: 600,
                  lineHeight: "40px",
                  color: "black",
                }}
              >
                Jr Front-End Developer
              </h2>
              <div
                className="rela-block separator"
                style={{
                  width: "240px",
                  height: "2px",
                  backgroundColor: "#999",
                }}
              ></div>
              <div
                className="rela-block caps greyed"
                style={{
                  backgroundColor: "#DDD",
                  width: "100%",
                  maxWidth: "580px",
                  textAlign: "center",
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "18px",
                  letterSpacing: "6px",
                  fontWeight: 600,
                  lineHeight: "28px",
                  margin: "60px auto 10px",
                  paddingBottom: "5px",
                  borderBottom: "1px solid #888",
                }}
              >
                Profile
              </div>
              <p
                className="long-margin"
                style={{
                  textAlign: "justify",
                  margin: "0 auto 50px",
                }}
              >
                Retro DIY quinoa, mixtape williamsburg master cleanse bushwick
                tumblr chillwave dreamcatcher hella wolf paleo. Knausgaard
                semiotics truffaut cornhole hoodie, YOLO meggings gochujang
                tofu. Locavore ugh kale chips iPhone biodiesel typewriter
                freegan, kinfolk brooklyn kitsch man bun. Austin neutra etsy,
                lumbersexual paleo cornhole sriracha kinfolk meggings
                kickstarter.{" "}
              </p>
              <div
                className="rela-block caps greyed"
                style={{
                  backgroundColor: "#DDD",
                  width: "100%",
                  maxWidth: "580px",
                  textAlign: "center",
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "18px",
                  letterSpacing: "6px",
                  fontWeight: 600,
                  lineHeight: "28px",
                }}
              >
                Experience
              </div>

              <h3
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "21px",
                  letterSpacing: "1px",
                  fontWeight: 600,
                  lineHeight: "28px",
                  color: "black",
                }}
              >
                Job #1
              </h3>
              <p
                className="light"
                style={{
                  color: "#777",
                }}
              >
                First job description
              </p>
              <p
                className="justified"
                style={{
                  textAlign: "justify",
                }}
              >
                Plaid gentrify put a bird on it, pickled XOXO farm-to-table
                irony raw denim messenger bag leggings. Hoodie PBR&B photo
                booth, vegan chillwave meh paleo freegan ramps. Letterpress
                shabby chic fixie semiotics. Meditation sriracha banjo
                pour-over. Gochujang pickled hashtag mixtape cred chambray.
                Freegan microdosing VHS, 90's bicycle rights aesthetic hella
                PBR&B.{" "}
              </p>

              <h3
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "21px",
                  letterSpacing: "1px",
                  fontWeight: 600,
                  lineHeight: "28px",
                  color: "black",
                }}
              >
                Job #2
              </h3>
              <p
                className="light"
                style={{
                  color: "#777",
                }}
              >
                Second Job Description
              </p>
              <p
                className="justified"
                style={{
                  textAlign: "justify",
                }}
              >
                Beard before they sold out photo booth distillery health goth.
                Hammock franzen green juice meggings, ethical sriracha tattooed
                schlitz mixtape man bun stumptown swag whatever distillery blog.
                Affogato iPhone normcore, meggings actually direct trade lomo
                plaid franzen shoreditch. Photo booth pug paleo austin,
                pour-over banh mi scenester vice food truck slow-carb. Street
                art kogi normcore, vice everyday carry crucifix thundercats man
                bun raw denim echo park pork belly helvetica vinyl.{" "}
              </p>

              <h3
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "21px",
                  letterSpacing: "1px",
                  fontWeight: 600,
                  lineHeight: "28px",
                  color: "black",
                }}
              >
                Job #3
              </h3>
              <p
                className="light"
                style={{
                  color: "#777",
                }}
              >
                Third Job Description
              </p>
              <p
                className="justified"
                style={{
                  textAlign: "justify",
                }}
              >
                Next level roof party lo-fi fingerstache skateboard, kogi
                tumblr. Shabby chic put a bird on it chambray, 3 wolf moon swag
                beard brooklyn post-ironic taxidermy art party microdosing
                keffiyeh marfa. Put a bird on it 3 wolf moon cliche helvetica
                knausgaard. Mumblecore fingerstache lomo, artisan freegan
                keffiyeh paleo kinfolk kale chips street art blog flannel.
              </p>
            </div>
          </div>
        </div>
      );
  
    default:
      
  }

  return (
    <div ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.heading}>{info.basicInfo?.detail?.name}</p>
          <p className={styles.subHeading}>{info.basicInfo?.detail?.title}</p>

          <div className={styles.links}>
            {info.basicInfo?.detail?.email ? (
              <a className={styles.link} type="email">
                <AtSign /> {info.basicInfo?.detail?.email}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.phone ? (
              <a className={styles.link}>
                <Phone /> {info.basicInfo?.detail?.phone}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.linkedin ? (
              <a className={styles.link}>
                <Linkedin /> {info.basicInfo?.detail?.linkedin}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.github ? (
              <a className={styles.link}>
                <GitHub /> {info.basicInfo?.detail?.github}
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.col1}>
            {columns[0].map((item) => sectionDiv[item])}
          </div>
          <div className={styles.col2}>
            {columns[1].map((item) => sectionDiv[item])}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Resume;
