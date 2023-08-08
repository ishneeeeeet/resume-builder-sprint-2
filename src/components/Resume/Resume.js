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
        <div ref={ref} className="flex-col justify-center">
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                '\n      @import url(https://themes.googleusercontent.com/fonts/css?kit=3qINvnjb346LubKDfLRn69t6G6Z1RrRfgULZ1AHo7mPOfsfM6rvuuu7h1pY3r_-A);\n      ul.lst-kix_q43nwmkvrt8-7 {\n        list-style-type: none;\n      }\n      ul.lst-kix_q43nwmkvrt8-6 {\n        list-style-type: none;\n      }\n      ul.lst-kix_q43nwmkvrt8-8 {\n        list-style-type: none;\n      }\n      ul.lst-kix_q43nwmkvrt8-3 {\n        list-style-type: none;\n      }\n      ul.lst-kix_q43nwmkvrt8-2 {\n        list-style-type: none;\n      }\n      ul.lst-kix_q43nwmkvrt8-5 {\n        list-style-type: none;\n      }\n      ul.lst-kix_q43nwmkvrt8-4 {\n        list-style-type: none;\n      }\n      ul.lst-kix_71cy10c6bo5c-8 {\n        list-style-type: none;\n      }\n      ul.lst-kix_71cy10c6bo5c-7 {\n        list-style-type: none;\n      }\n      ul.lst-kix_71cy10c6bo5c-6 {\n        list-style-type: none;\n      }\n      ul.lst-kix_71cy10c6bo5c-5 {\n        list-style-type: none;\n      }\n      ul.lst-kix_71cy10c6bo5c-4 {\n        list-style-type: none;\n      }\n      ul.lst-kix_71cy10c6bo5c-3 {\n        list-style-type: none;\n      }\n      ul.lst-kix_71cy10c6bo5c-2 {\n        list-style-type: none;\n      }\n      .lst-kix_q43nwmkvrt8-0 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_q43nwmkvrt8-1 > li:before {\n        content: "\\0025cb   ";\n      }\n      ul.lst-kix_71cy10c6bo5c-1 {\n        list-style-type: none;\n      }\n      ul.lst-kix_71cy10c6bo5c-0 {\n        list-style-type: none;\n      }\n      .lst-kix_q43nwmkvrt8-2 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_q43nwmkvrt8-4 > li:before {\n        content: "\\0025cb   ";\n      }\n      ul.lst-kix_dpieomdpoi58-0 {\n        list-style-type: none;\n      }\n      ul.lst-kix_dpieomdpoi58-1 {\n        list-style-type: none;\n      }\n      .lst-kix_q43nwmkvrt8-3 > li:before {\n        content: "\\0025cf   ";\n      }\n      ul.lst-kix_dpieomdpoi58-4 {\n        list-style-type: none;\n      }\n      .lst-kix_q43nwmkvrt8-8 > li:before {\n        content: "\\0025a0   ";\n      }\n      ul.lst-kix_dpieomdpoi58-5 {\n        list-style-type: none;\n      }\n      ul.lst-kix_dpieomdpoi58-2 {\n        list-style-type: none;\n      }\n      ul.lst-kix_dpieomdpoi58-3 {\n        list-style-type: none;\n      }\n      ul.lst-kix_dpieomdpoi58-8 {\n        list-style-type: none;\n      }\n      .lst-kix_q43nwmkvrt8-6 > li:before {\n        content: "\\0025cf   ";\n      }\n      ul.lst-kix_dpieomdpoi58-6 {\n        list-style-type: none;\n      }\n      .lst-kix_q43nwmkvrt8-5 > li:before {\n        content: "\\0025a0   ";\n      }\n      ul.lst-kix_dpieomdpoi58-7 {\n        list-style-type: none;\n      }\n      .lst-kix_dpieomdpoi58-1 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_dpieomdpoi58-2 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_q43nwmkvrt8-7 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_dpieomdpoi58-4 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_dpieomdpoi58-3 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_dpieomdpoi58-5 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_dpieomdpoi58-0 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_dpieomdpoi58-8 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_dpieomdpoi58-7 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_dpieomdpoi58-6 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_71cy10c6bo5c-5 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_71cy10c6bo5c-6 > li:before {\n        content: "\\0025cf   ";\n      }\n      .lst-kix_71cy10c6bo5c-7 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_71cy10c6bo5c-8 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_71cy10c6bo5c-3 > li:before {\n        content: "\\0025cf   ";\n      }\n      li.li-bullet-0:before {\n        margin-left: -18pt;\n        white-space: nowrap;\n        display: inline-block;\n        min-width: 18pt;\n      }\n      .lst-kix_71cy10c6bo5c-4 > li:before {\n        content: "\\0025cb   ";\n      }\n      .lst-kix_71cy10c6bo5c-2 > li:before {\n        content: "\\0025a0   ";\n      }\n      .lst-kix_71cy10c6bo5c-1 > li:before {\n        content: "\\0025cb   ";\n      }\n      ul.lst-kix_q43nwmkvrt8-1 {\n        list-style-type: none;\n      }\n      ul.lst-kix_q43nwmkvrt8-0 {\n        list-style-type: none;\n      }\n      .lst-kix_71cy10c6bo5c-0 > li:before {\n        content: "\\0025cf   ";\n      }\n      ol {\n        margin: 0;\n        padding: 0;\n      }\n      table td,\n      table th {\n        padding: 0;\n      }\n      .c5 {\n        margin-left: 36pt;\n        padding-top: 4pt;\n        padding-left: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1.2;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c4 {\n        color: #666666;\n        font-weight: 400;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 11pt;\n        font-family: "Proxima Nova";\n        font-style: normal;\n      }\n      .c2 {\n        color: #666666;\n        font-weight: 400;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 12pt;\n        font-family: "Proxima Nova";\n        font-style: italic;\n      }\n      .c14 {\n        padding-top: 20pt;\n        padding-bottom: 0pt;\n        line-height: 1.2;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n        height: 11pt;\n      }\n      .c8 {\n        color: #000000;\n        font-weight: 400;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 11pt;\n        font-family: "Proxima Nova";\n        font-style: normal;\n      }\n      .c0 {\n        padding-top: 6pt;\n        padding-bottom: 0pt;\n        line-height: 1;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c3 {\n        padding-top: 24pt;\n        padding-bottom: 10pt;\n        line-height: 1;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c11 {\n        color: #53bb84;\n        font-weight: 700;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 14pt;\n        font-family: "Proxima Nova";\n        font-style: normal;\n      }\n      .c9 {\n        color: #00ab44;\n        font-weight: 700;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 14pt;\n        font-family: "Proxima Nova";\n        font-style: normal;\n      }\n      .c15 {\n        font-weight: 400;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 10pt;\n        font-family: "Proxima Nova";\n        font-style: normal;\n      }\n      .c6 {\n        padding-top: 4pt;\n        padding-bottom: 0pt;\n        line-height: 1;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c19 {\n        padding-top: 4pt;\n        padding-bottom: 0pt;\n        line-height: 1.2;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c12 {\n        padding-top: 0pt;\n        padding-bottom: 0pt;\n        line-height: 1;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c18 {\n        padding-top: 24pt;\n        padding-bottom: 10pt;\n        line-height: 1;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c7 {\n        padding-top: 10pt;\n        padding-bottom: 0pt;\n        line-height: 1;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .c23 {\n        color: #353744;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 30pt;\n        font-style: normal;\n      }\n      .c22 {\n        color: #00ab44;\n        text-decoration: none;\n        vertical-align: baseline;\n        font-size: 18pt;\n        font-style: normal;\n      }\n      .c17 {\n        font-size: 14pt;\n        font-family: "Proxima Nova";\n        color: #00ab44;\n        font-weight: 700;\n      }\n      .c1 {\n        font-size: 12pt;\n        font-family: "Proxima Nova";\n        color: #353744;\n        font-weight: 400;\n      }\n      .c21 {\n        background-color: #ffffff;\n        max-width: 378pt;\n        padding: 36pt 162pt 36pt 72pt;\n      }\n      .c16 {\n        font-weight: 400;\n        font-family: "Proxima Nova";\n      }\n      .c13 {\n        padding: 0;\n        margin: 0;\n      }\n      .c20 {\n        color: #000000;\n      }\n      .c10 {\n        color: #666666;\n      }\n      .title {\n        padding-top: 6pt;\n        color: #353744;\n        font-size: 30pt;\n        padding-bottom: 0pt;\n        font-family: "Proxima Nova";\n        line-height: 1;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      .subtitle {\n        padding-top: 0pt;\n        color: #00ab44;\n        font-size: 18pt;\n        padding-bottom: 0pt;\n        font-family: "Proxima Nova";\n        line-height: 1;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      li {\n        color: #000000;\n        font-size: 11pt;\n        font-family: "Proxima Nova";\n      }\n      p {\n        margin: 0;\n        color: #000000;\n        font-size: 11pt;\n        font-family: "Proxima Nova";\n      }\n      h1 {\n        padding-top: 24pt;\n        color: #00ab44;\n        font-weight: 700;\n        font-size: 14pt;\n        padding-bottom: 10pt;\n        font-family: "Proxima Nova";\n        line-height: 1;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h2 {\n        padding-top: 10pt;\n        color: #353744;\n        font-weight: 700;\n        font-size: 12pt;\n        padding-bottom: 0pt;\n        font-family: "Proxima Nova";\n        line-height: 1;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h3 {\n        padding-top: 10pt;\n        color: #353744;\n        font-weight: 700;\n        font-size: 11pt;\n        padding-bottom: 0pt;\n        font-family: "Proxima Nova";\n        line-height: 1;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h4 {\n        padding-top: 8pt;\n        -webkit-text-decoration-skip: none;\n        color: #666666;\n        text-decoration: underline;\n        font-size: 11pt;\n        padding-bottom: 0pt;\n        line-height: 1.2;\n        page-break-after: avoid;\n        text-decoration-skip-ink: none;\n        font-family: "Trebuchet MS";\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h5 {\n        padding-top: 8pt;\n        color: #666666;\n        font-size: 11pt;\n        padding-bottom: 0pt;\n        font-family: "Trebuchet MS";\n        line-height: 1.2;\n        page-break-after: avoid;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n      h6 {\n        padding-top: 8pt;\n        color: #666666;\n        font-size: 11pt;\n        padding-bottom: 0pt;\n        font-family: "Trebuchet MS";\n        line-height: 1.2;\n        page-break-after: avoid;\n        font-style: italic;\n        orphans: 2;\n        widows: 2;\n        text-align: left;\n      }\n    ',
            }}
          />
          <div>
            <p className="c14">
              <span className="c8" />
            </p>
            <p className="c6">
              <span
                style={{
                  overflow: "hidden",
                  display: "inline-block",
                  margin: "0px 0px",
                  border: "0px solid #000000",
                  transform: "rotate(0rad) translateZ(0px)",
                  WebkitTransform: "rotate(0rad) translateZ(0px)",
                  width: 624,
                  height: "6.67px",
                }}
              >
                <img
                  alt=""
                  src="images/image1.png"
                  style={{
                    width: 624,
                    height: "6.67px",
                    marginLeft: 0,
                    marginTop: 0,
                    transform: "rotate(0rad) translateZ(0px)",
                    WebkitTransform: "rotate(0rad) translateZ(0px)",
                  }}
                  title="horizontal line"
                />
              </span>
            </p>
          </div>
          <p className="c0 title" id="h.5x0d5h95i329">
            <span className="c16 c23">
              {info.basicInfo?.detail?.name === ""
                ? "Your Name"
                : info.basicInfo?.detail?.name}
            </span>
          </p>
          <p className="c12 subtitle" id="h.sbziogryzzql">
            <span>{info.basicInfo?.detail?.title}</span>
          </p>
          <p className="c12">
            <span className="c10">{info.basicInfo?.detail?.linkedin}</span>
          </p>
          <p className="c12">
            <span className="c4">{info.basicInfo?.detail?.phone}</span>
          </p>
          <p className="c12">
            <span className="c4">{info.basicInfo?.detail?.email}</span>
          </p>
          <h1 className="c3" id="h.inx73jfg7qti">
            <span className="c9">Summary</span>
          </h1>
          <p className="c19">
            <span className="c16">{info.summary?.detail}</span>
          </p>
          <h1 className="c18" id="h.5sh58lh512k2">
            <span className="c17">EXPERIENCE</span>
          </h1>
          {info.workExp?.details?.map((item) => {
            return (
              <div>
                <h2 className="c7" id="h.mu43qcboozqe">
                  <span className="c1">
                    {item.companyName} &nbsp;{item.location}
                  </span>
                  <span className="c2">&nbsp;- {item.title}</span>
                </h2>
                <p className="c6">
                  <span className="c15 c10">
                    {getFormattedDate(item.startDate)} -{" "}
                    {getFormattedDate(item.endDate)}
                  </span>
                </p>
                {item.points?.length > 0 ? (
                  <ul className="c13 lst-kix_q43nwmkvrt8-0 start">
                    {item.points?.map((elem, index) => (
                      <li className="c5 li-bullet-0" key={elem + index}>
                        <span className="c8"></span>
                        {elem}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span />
                )}
              </div>
            );
          })}
          <h1 className="c18" id="h.pwnp1k6vsbh1">
            <span className="c9">EDUCATION</span>
          </h1>
          {info.education?.details?.map((item) => {
            return (
              <div>
                <h2 className="c7" id="h.jpv9v4b642w5">
                  <span className="c1">{item.college} </span>
                  <span className="c2"> - {item.title}</span>
                </h2>
                <p className="c6">
                  <span className="c10 c15">
                    {getFormattedDate(item.startDate)} -{" "}
                    {getFormattedDate(item.endDate)}
                  </span>
                </p>
              </div>
            );
          })}
          <h1 className="c18" id="h.3hy8rkwzatey">
            <span className="c9">PROJECTS</span>
          </h1>
          {info.project?.details?.map((item) => {
            return (
              <div>
                <h2 className="c7" id="h.jpv9v4b642w5">
                  <span className="c2">{item.title}</span>
                </h2>
                <span className="c16">{item.overview}</span>
                {item.points?.length > 0 ? (
                  <ul className="c13 lst-kix_q43nwmkvrt8-0 start">
                    {item.points?.map((elem, index) => (
                      <li className="c5 li-bullet-0" key={elem + index}>
                        <span className="c8"></span>
                        {elem}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span />
                )}
              </div>
            );
          })}
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
