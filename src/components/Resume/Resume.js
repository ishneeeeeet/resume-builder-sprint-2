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
import BusinessOne from "../../templates/BusinessOne";

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
      return <svg ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={600}
      height={692}
    >
      <style>
        {
          '@font-face{font-family:fnt0;src:url(data:font/otf;base64,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AgD/AQkAoAX//7//oP8AcQAgFf8ARP6AiwX/ACSrgIv/ABt/lf8ACFVV/wASU6r/ABCqqgj/ABJVwP8AEKqq/wAJKuD/ABpUoIv/ACP+lQiL/wAhVVX///YqS/8AGFUq///sVJb/AA9VAAj//+xWq/8AD1cV///h1iD/AAeriv//11WWiwj//8UA4IsFi/tcBQ75R/8BWP7A/wLF/2AV/wBirGqL/wBM1cr//+BUtv8ANv8q///AqWsI/wA2/yr//8CrgP8AG3+V//+mq0CL//+MqwAIi///tKqW///zgAD//77/YHL//8lUKwhy///JVkD//9wAYP//1iqg///RAMD//+L/AAj//9EAwP//4wEW///IKkD///GAi///v1PAiwj//79V1ov//8hU9v8ADlTA///RVBb/ABypgAj//9FWK/8AHKuV///cKxb/ACl/9XL/ADZUVQhy/wA2Vmr///OAAP8AQYC/i/8ATKsVCIv/AEqqlf8ADIAA/wBAqiqk/wA2qcAIpP8ANqvV/wAj1Or/ACnVYP8ALqnV/wAc/uoI/wAuq+r/AB0BAP8AN6sK/wAOgID/AECqKosIi///iAFAFf//0KtWi///3NXr///s1Lb//+kAgP//2alrCP//6QCA///Zq4D///SAQP//wirWi///qqorCIv//6qqK/8AC6p1///CACH/ABdU6v//2VYWCP8AF1Tq///ZVhb/ACL/YP//7KsL/wAuqdWLCP8AMAGVi/8AI4CK/wATKkD/ABb/gP8AJlSACP8AFv+A/wAmVpX/AAt/wP8APiqVi/8AVf6VCIv/AFYAqv//9FWL/wA9/+D//+irFv8AJf8VCP//6KsW/wAmASr//9yqK/8AEwCV///QqUCLCA74e/8AQQCgixWL/wK1AWAF/wGdACCLBf//7v7g//+K/uAF//8YAWCLBYv//0gA4AX/AMoAgIsFi///iv7gBf//Nf+AiwWL+6cF//9b/6CLBQ74ov8B6gCg/wK1AWAV///u/uD//4r+4AX//wwBgIsFi///Wf8gBf8A1QAgiwWL//+M/2AF//8q/+CLBYv//08CoAX/AQT/oIsFi///if6gBfw9iwWL/wK1AWAF+D2LBQ740P8BIAAg/wLF/2AV/wA0AICL/wAtKoD///iq6/8AJlSA///xVdYI/wAmVpX///FV1v8AItW1///pqkv/AB9U1f//4f7ACP//s//A//+m/6AF///Qq1b/ACasAP//zVUr/wATVgD//8n/AIsI///jVGuL///pVOH///oqQP//71VW///0VIAI///vVVb///RWlv//96qr///vKqCL///p/qsIi///8KsA/wADqor///OAAP8AB1UV///2VQAI/wAHVyr///ZVAP8ADQAg///21SD/ABKpFf//91VACP8AEqsq///3VUD/ABwAwP//9as2/wAlVlX///QBKwj/AEaplf//6VXr/wAz/3X//+QrAP8AIVVV///fABYI/wAhVVX//98AFv8AEKqq///RKmuL///DVMAIi///1KpA///1AGD//9nVK///6gDA///fABYI///qAMD//98AFv//4FS2///mVSv//9aoq///7apACP//1qrA///tqkD//88AQP//9tUg///HVcCLCP//x1XAi///zdVL/wAJACr//9RU1v8AEgBVCP//1Fbr/wASAFX//9qAAf8AF/+////gqRb/AB3/Kgj/AFMCAP8AWwDgBf8AGqkA///pVev/ABt/lf//7v/r/wAcVir///Sp6wj/ABxWKv//9KwA/wAe1cD///pWAP8AIVVViwj/ACIAKov/ABrUwP8AB3/K/wATqVX/AA7/lQj/ABOrav8ADv+V/wAJ1bX/ABTVVYv/ABqrFQiL/wARVYD///xVdv8ADn91///4quv/AAupagj///iq6/8AC6uA///zVUv/AAqAiv//7f+r/wAJVZUI///t/6v/AAlVlf//5f/A/wAJ/2D//93/1v8ACqkqCP//s1Tr/wAXVwD//8l/6/8AHKqK///fquv/ACH+FQj//9+q6/8AIgAq///v1Xb/ACsAVYv/ADQAgAiL/wAn/5X/AAqqNf8AIyoV/wAVVGr/AB5UlQj/ABVWgP8AHlaq/wAdqsr/ABdV9f8AJf8V/wAQVUAI/wAmASr/ABBVQP8AKwBV/wAIKqD/AC//gIsIDve5/wDlAQD/ArUBYBWL//1K/qAF//9b/6CLBYv/ArUBYAX/AKQAYIsFDvkr/wJW/8CLFf//LwDgiwX7XP8CGP/gBf8ABqpA///LVKv/AAUp4P//0X/W/wADqYD//9erAAj/AAOrlf//16sA/wAB1cr//9ArNov//8irawiL//8B/wAF//9uAQCLBYv/ArUBYAX/AMv94IsF/wDNAUD//eX/4AX///FV1v8AW1VA///4quv/AFX/oIv/AFCqAAiL/wEYAUAF/wCS/0CLBYv//Ur+oAUO+OL/Aa4BQIsV///b/UD/AJT/wAX//zYCoIsF///c/YD//2sAQAX//1YBQIsF/wDQ/yD/ArUBYAX/AMb/wIsF/wDRAkD//Ur+oAX//1IAQIsF//8t/YD/AQwBYBX/AJICIIsF//+3AID/ATH+YAX//7b9YP/+zgGgBQ74lf8A5QEA/wK1AWAVi//9zP/gBf8BDf7AiwX//+7+4P//ff7ABf/+XwIAiwWL/wK1AWAF/wCkAGCLBQ73gQ75H/8CU/8A/wDmAUAVi///0KlA///11OD//9Wpdv//66nA///aqasI///rq9b//9qrwP//4YC2///iqqD//9dVlv//6qmACP//11WW///qq5b//85Va///9VXL///FVUCLCP//qADri///vP/r/wAWVbX//9H+6/8ALKtqCP//0gEA/wAsq2r//+kAgP8APABqi/8AS1VqCIv/Ac8AIAX/AKP9QIsFi//+N/6ABYv//9NUlv8ACIAK///e1WD/ABEAFf//6lYrCP8AEQAV///qViv/ABrVyv//9SsW/wAkq4CLCP8AJVZVi/8AGyoq/wAK1Or/ABD+AP8AFanVCP8AEQAV/wAVqdX/AAiACv8AISqgi/8ALKtqCIv/AcgBgAX/AKQAYIsFi//+MP/gBQ75pv8C8QDAixX//18AYIsF///0ACD/AQ7/AAX///yp1v8AQKxA///+VOv/ADmqgIv/ADKowAiL/wAmrAD/AAEAQP8AJKuA/wACAID/ACKrAAj//5T+QP/+Hv6ABf//ZQHgiwX//43/oP8B4QGABf8AA/7q///GABb/AAH/df//yVU2i///zKpWCIv//9lUAP///wDL///Xqfb///4Blv//1f/rCP//9AAg//7zAYAF//9f/YCLBf8ANACA/wK1AWAF/wDPAcCLBf8AZ/3g//4p/iAF/wBhAmD/AdYB4AX/AM/+4IsF/wA0AID//Ur+oAUO+Ob/AlkAQP8CtQFgFf//IgDA//5O/gAFi//+/ACgBf//W/+giwWL/wEC/yAF//8iAMD/AbICQAX/ALL94IsF/wCAAMD//s7+wAX/AIAAwP8BMQFABf8ArP+AiwUO+eP/A0T/4P8CtQFgFf//i/8g//1K/qAF//8q/+CLBf//qgBg/wIRAQAF//+lAkD//e7/AAX//y/+AIsF//+N/6D/ArUBYAX/AKQAYIsF/wBFAaD//cb+YAX/AF//AP8COQGgBf8Aq/9AiwX/AFoAoP/9xv5gBf8AUQGA/wI5AaAF/wCb/mCLBQ75Df8A5QEA/wK1AWAVi//9Sv6gBf//W/+giwWL/wK1AWAF/wCkAGCLBf8Bjf+AixX//yMBAP/+yP1ABf8A7v1A//6CAWAF//9CAoCLBf//Iv3g/wFx/sAF/wDcAeD/AUMCoAX/AKz/gIsFDvku/wG0/+CLFYv/ASj/QAX//zABIIsFi//+1wDABf//W/+giwWL/wK1AWAF/wCkAGCLBYv//vP+oAX/AM/+4IsFi/8BDAFgBf8ApABgiwWL//1K/qAF//9b/6CLBQ74sP8CGwBg/wK1AWAV///v/yD//4H/wAX//1UBAIsFi//9yP7gBf//W/+giwWL/wI3ASAF//9M/wCLBYv/AH4AQAX/AhIBQIsFDvjT/wFb/4D/AsX/YBX/ACtVwIv/ACaAQP//+aog/wAhqsD///NUQAj/ACGqwP//81ZW/wAf1PX//+0Adv8AHf8q///mqpYI//+yAmD//6MBwAX//+tUVv8AD//V///rqcD/AAv/4P//6/8r/wAH/+oI///sAUD/AAf/6v//6quW/wAD//X//+lV64sI///RVBaL///bKcv//+xUlv//5P+A///YqSsI///lAZb//9irQP//8oDL///DVcuL//+uAFYIi///r1YA/wANfzX//8QqS/8AGv5q///Y/pYI/wAbAID//9kAq/8AJYAA///sgFb/AC//gIsI/wAZVWqL/wAW/4D/AATVgP8AFKmV/wAJqwAI/wAUq6r/AAmrAP8AFlW1/wAN1ar/ABf/wP8AEgBVCP8ASQKg//+h/mAF///l/8D//+X/wP//4H9r///qqov//9r/Fv//71VWCP//2wEr///vVVb//9cq4P//96qr///TVJaLCP//wACri///yFT2/wAOAGD//9CpQP8AHADACP//0KtW/wAcAMD//9sq1v8AKX/1///lqlb/ADb/Kgj//+WqVv8ANv8q///y1Sv/AEIqiov/AE1V6giL/wBLVWr/AA2AQP8AQP+V/wAbAID/ADapwAj/ABsAgP8ANqvV/wAlVUr/ACl/9f8AL6oV/wAcVBUI/wAvqhX/ABxWKv8ANiqq/wAOKxX/ADyrQIsIDveu/wDb/sD/AhMBgBWL//3s/oAF//9iASCLBYv/AhMBgAX/AJ3+4IsF//+wAeD/ARf+IBX/ABtV6ov/ABZ/YP//93/2/wARqNX//+7/6wj/ABGq6v//7v/r/wAI1XX//+p/1ov//+X/wAiL///l/8D///cqi///6n/W///uVRb//+7/6wj//+5XK///7wIA///pgKD///eBAP//5KoWiwj//+SqFov//+mqS/8ACH8A///uqoD/ABD+AAj//+6qgP8AEQAV///3VUD/ABWAKov/ABoAQAiL/wAaAED/AAiqwP8AFYAq/wARVYD/ABEAFQj/ABFVgP8AEQAV/wAWVbX/AAiACv8AG1XqiwgO+NX/AXT/gP8CI/+AFf8ALgEVi/8AI/+g///x/6D/ABn+Kv//4/9ACP8AGgBA///kAVb/AA0AIP//2KtAi///zVUrCIv//nv/4AX//2IBIIsFi/8BaP+gBYv/ABqrFf//+9VW/wASf2r///eqq/8AClPACP//96qr/wAKVdX///OAAP8ABSrq///vVVaLCP//4ABWi///4VT2///pAID//+Kplv//0gEACIv//pT/4AX//2IBIIsFi/8CEwGABf8AigAgiwX/AAr/oP//wP/gBf8AFqoV/wAaqQD/ABh/4P8AE/7A/wAaVar/AA1UgAj/ABpVqv8ADVaV/wAdgBX/AAarSv8AIKqAiwgO+Lz4of8BFABAFYv//+oAwP///v/A///s/2v///3/gP//7/4WCP/+twIgiwX/AAVUlf//01ar/wAMqar//+CrK/8AE/7A///t/6sI/wAUANX//+3/q/8AG6tV///2/9b/ACNV1YsI/wAVVGqL/wAUqqD/AAPVQP8AFADV/wAHqoAI/wAUANX/AAeqgP8AFarg/wAL1Sr/ABdU6v8AD//VCP8AQQCg//+n/+AF///B/xb//86q1v//uv9r///nVWv//7P/wIsI//+p/1aL//+9/yD/ABlVav//0f7r/wAyqtUI///SAQD/ADKq1f//6QCA/wBEAFWL/wBVVdUIi/8ANf7q/wAJqwD/ADB/oP8AE1YA/wArAFUI/wATVgD/ACsAVf8AHFUg/wAiACr/ACVUQKQI/wAlVlWk/wAsq2r/AAyAAP8ANACAiwj/AEypAIv/ADv/YP//6ABA/wArVcD//9AAgAj/ACtVwP//0ACA/wAVquD//71VVov//6qqKwj//2T+wP8ALP7AFf///qxr/wBRVur//+NVdv8AKKt1///H/oCLCP//5Kwri///6tVB///1/5b///D+Vv//6/8rCP//8QBr///r/yv///bWK///3wAW///8q+v//9IBAAj/ALD9YIsFi/8ABv6gBQ754f8CiP/A/wIj/4AV/wAqABWL/wAhqsD///HU6/8AGVVq///jqdYI/wAZVWr//+Or6/8ADKq1///Y1faLWQiL//57/+AF//9iASCLBYv/AWj/oAWL/wAvVKr///D/YP8AF6pV///h/sCLCP//71VWi///8VTL///6VPb///NUQP//9KnrCP//81ZW///0rAD///OrwP//7quL///0ASv//+irFgiL//6U/+AF//9h/gCLBYv/AWj/oAWL/wAvVKr///EAa/8AF6pV///iANaLCP//8AAri///8X+A///6KkD///L+1v//9FSACP//8wDr///0Vpb///OAAP//7tZA///z/xb//+lV6wiL//6U/+AF//9iASCLBYv/AhMBgAX/AIoAIIsF/wAK/6D//8H9AAX/ABSrqv8AGqsV/wAW1dX/ABPVFaT/AAz/FQik/wANASr/ABx/1f8ABoCV/wAf/6qLCP8AHf8qi/8AGdSA///4quv/ABWp1f//8VXWCP8AFavq///xVdb/AA/WKv//61Vg/wAKAGr//+VU6wj/ABVUav8AHKmA/wAXf6D/ABUptf8AGarV/wANqeoI/wAZqtX/AA2sAP8AHYAV/wAG1gD/ACFVVYsIDvi4/wHj/yD/AJoBABWL///r/yv/AALVAP//8VTL/wAFqgD///aqawj/AAWsFf//9qpr/wAJKuD///kAVv8ADKmq///7VkAI///fASD//5j/QAX//99VgP8AAqtV///lVOv/AAcqYP//61RW/wALqWoI///rVmv/AAurgP//8AAr/wASgHX///Sp6/8AGVVqCP//3VUA///Kqdb//8qq4P//5VTr//+4AMCLCP//y1Sri///1f/r/wAPVQD//+CrK/8AHqoACP//4Ksr/wAerBX///BVlv8AKACgi/8AMVUqCIv/ADn/6v8AFVV1/wAsVPX/ACqq6v8AHqoACP8AKqrq/wAerBX/AD2qdf8AD1YK/wBQqgCLCP8ANgEAiwWL/wAW/4AFi/8AH1TV///5VLb/ABV/IP//8qlr/wALqWoI///yq4D/AAurgP//6KsW/wAF1cD//96qq4sI///uqoCL///q//b///2Aa///51Vr///7ANYI///nVWv///sA1v//5qqW///5Kwv//+X/wP//91VACP//3ABg/wBn/eAF/wAhVVX/AAyrwP8AIinV/wAJqwD/ACL+Vf8ABqpACP8AIwBq/wAGqkD/ACCA1f8AA1Ug/wAeAUCLCP8ATABAi/8AN6oA///wVZb/ACNTwP//4KsrCP8AI1XV///gqyv/ABGq6v//0P+2i///wVRACIv//zIBoAX//xD/oP//xf4AFf8AJACqi/8AHADA/wARABX/ABQA1f8AIgAqCIv/AF4BoAX//9j/oIsF///b/1aL///lKjb///mqIP//7lUW///zVEAI///uVRb///NWVv//9yqL///sVaCL///lVOsIi///6quW/wAFgFX//++AC/8ACwCq///0VIAI/wALAKr///RUgP8ADypK///6KkD/ABNT6osIDvgW/wGK/sCkFf//7KwW///yq4D//+mAoP//9as2///mVSv///iq6wj//+ZVK///+KjW///mf+D///xUa///5qqWiwj//4wAK/8AAKrV///GABb/AEAAYIv/AH9V6giL/wD1/wAFQIsFi/8AbgKABdaLBYv/AHL9gAX/AJ3+4P8AEgFgBYv//3sBIAX/AHn/QIsF///vAgD//5H9gAX//5b+wIsFi///DAGABYv//+dVa/8AA//1///uVRb/AAf/6v//9VTACP8AB//q///1VMD/AAyqtf//+qpg/wARVYCLCP8AEgBVi/8AEwCV/wAFqwr/ABQA1f8AC1YVCP8ANP2gJwUO+Nz/ASQBIP8CI/+AFf8AUVTVi/8AP6nq///nKrb/AC3/AP//zlVrCP8ALgEV///OVWv/ABcAiv//uoBWi///pqtACIv//8dVwP//9X92///OgCD//+r+6///1aqACP//6wEA///VqoD//+H/y///3ynA///Y/pb//+ipAAj//9kAq///6KsW///R1kv///RVi///yqvriwj//69T64v//8B+tv8AGNVK///RqYD/ADGqlQj//9Grlv8AMaqV///o1cv/AEWAtYv/AFlW1QiL/wA4qkD/AAp/gP8AMX/g/wAU/wD/ACpVgAj/ABUBFf8AKlWA/wAeADX/ACDVNf8AJv9V/wAXVOoI/wAnAWr/ABdU6v8ALivK/wALqnX/ADVWKosIi///i/8gFf//3/5Ai///5/82///yf8D///AAK///5P+ACP//8AAr///lAZb///gAFv//1iuri///x1XACIv//8YAFv8AB9U1///VqoD/AA+qav//5VTrCP8AD6yA///lVOv/ABgrgP//8qp2/wAgqoCLCP8AH/+qi/8AF//A/wANgED/AA//1f8AGwCACP8AD//V/wAbAID/AAf/6v8AKdVgi/8AOKpACIv/ADn/6v//+CrL/wAqVHX///BVlv8AGqkACP//8FWW/wAaqxX//+fVi/8ADVWK///fVYCLCA74u/8CJwBA+IgV///dVQD///IAq///zP/A///5AFb//7yqgIsI/wAiqwD///FTwP8AGVVq///t/6v/AA//1f//6quWCP8AD//V///qq5b/AAf/6v//5FW2i///3f/WCIv//93/1v//9v/W///hf6v//+3/q///5P+ACP//7f+r///k/4D//+Yqdv//6tVA///eVUD///CrAAj//95XVv//8KsA///YgIv///hVgP//0qnAiwj//+qrlov//+uqy/8AAf91///sqgD/AAP+6gj///qra////VbA///71Vb///vVVv///P9A///6U+sI///8/0D///pWAP///n+g///6K0uL///6AJYIi///9f+W/wAD1UD///gpwf8AB6qA///6U+sI/wAHqoD///pWAP8AD4DA///9KwD/ABdXAIsI/wBP/iCLBf8AKKpqi/8AI6o1///5VcD/AB6qAP//8quACP8AHqwV///yq4D/ABerYP//7apA/wAQqqr//+ipAAj/ABCqqv//6KsW/wAIVVX//+WrYYv//+KrqwiL///IqVb//+gp6///1NT2///QU9b//+EAlgj//9BV6///4QCW//+7Kyv///CAS///pgBriwj//79V1ov//8z/wP8ABtT1///aqav/AA2p6gj//9qrwP8ADanq///l1hb/ABMrSv//8QBr/wAYrKoI///xAGv/ABiqlf//+IA2/wAe/2qL/wAlVEAI/wCN/gCLBYv///AAK/8AAypq///zVUv/AAZU1f//9qprCP8ABlbq///2qmv/AAuAyv//+QBW/wAQqqr///tWQAj/ABCqqv//+1Qr/wAX/8D///2qFv8AH1TViwj/ACtVwIv/AB4ANf8ABSrq/wAQqqr/AApV1Qj/ABCqqv8AClXV/wAIVVX/AA7V6ov/ABNWAAiL/wAP/9X///mqIP8ADKq1///zVED/AAlVlQj///NWVv8ACVOA///tAHb/AASpwP//5qqWiwj//7L/gIsF///JVCuL///XKdb/AAnVtf//5P+A/wATq2oI///lAZb/ABOrav//8oDL/wAZKrWL/wAeqgAIi/8AE1YA/wAFqgD/ABLU1f8AC1QA/wASU6oI/wALVhX/ABJVwP8AD1YK/wAPK1X/ABNWAP8ADADqCP//3qqr/wASAFX//+fVi/8AFSrA///xAGv/ABhVKgj///EAa/8AGFUq///4gDb/AB2AFYv/ACKrAAiL/wA7VZX/ABVUav8ALyn1/wAqqNX/ACL+VQj/ACqq6v8AIwBq/wA4VeD/ABGANf8ARgDViwj/ADVUFf///qpW/wAtKoD/AAVUlf8AJQDq/wAL/tUI/wAlAOr/AAwA6v8AJirV/wARq/X/ACdUwP8AF1cACP8AJP/g//+K/uAF//7lASD//8f+gBX//+dVa4v//+x/S///+CrL///xqSv///BVlgj///GrQP//8FWW///41aD//+qA4Iv//+SsKwiL///jVGv/AAcqYP//6dUA/wAOVMD///BVlgj/AA5W1f//8FWW/wATgLX///gqy/8AGKqViwj/ABn+Kov/ABPUCv8AB6qA/wANqer/AA9VAAj/AA2sAP8AD1UA/wAG1gD/ABb/gIv/AB6qAAiL/wA5VRX//+VV9v8AHKqK///Kq+uLCA74Jffy/wIh/wAV/wATVgCL/wARqur///2rIP8AD//V///7VkAIcv//Zv9ABf//6/8r/wAEq9X///AAK/8AAlXq///0ASuLCP//4KkWi///6Cnr///1Kgv//++qwP//6lQWCP//76rA///qViv///Mqlv//34A2///2qmv//9SqQAiL//74/+AF//9iASCLBYv/AhMBgAX/AIoAIIsF/wANACD//5j/QAX/AAwA6v8AJKlq/wASKwr/ABzUNf8AGFUq/wAU/wAI/wAYVSr/ABUBFf8AG3+V/wAKgIr/AB6qAIsIDvjp/wFp/+D/AiP/gBX/AEKqqov/ADGqlf//51Vr/wAgqoD//86q1gj/ACCqgP//zqrW/wAQVUD//7sAdov//6dWFgiL///JVCv///d/9v//zynr///u/+v//9T/qwj//+7/6///1QHA///ngCD//95VQP//4ABW///nqMAI///gAFb//+eq1v//2qq2///z1Wv//9VVFosI///KqdaL///U/6v/ABJVwP//31WA/wAkq4AIi///DP6gBf//YgEg///vAgAFi/8C8QDABf8AiwBgiwX/AAf+4P//xP3ABf8AFKuq/wAaAED/ABeqVf8AEypA/wAaqQD/AAxUQAj/ABqrFf8ADFZV/wAbVer/AAYrKv8AHADAiwj//8MAYP/+PwBAFf8AP1SAi/8AH6pA/wA3VaCL/wBuq0AIi/8APqmq///5AFb/ACt/av//8gCr/wAYVSoI///yAKv/ABhVKv//6v/2/wAMKpX//+P/QIsI///t/6uL///vKqD///qqYP//8FWW///1VMAI///wVZb///VW1v//8ipW///wqwD///P/Fv//6/8rCIv//yAAQAX/ABVWgP//4Ksr/wAbAID///BVlv8AIKqAiwgO+NX/AXT/gP8CI/+AFf8ALgEVi/8AI/+g///x/6D/ABn+Kv//4/9ACP8AGgBA///kAVb/AA0AIP//2KtAi///zVUrCIv//nv/4AX//2IBIIsFi/8BaP+gBYv/ABqrFf//+6qg/wASf2r///dVQP8AClPACP//91VA/wAKVdX///Oqtv8ABSrq///wACuLCP//4ABWi///4VT2///pVev//+Kplv//0qvWCIv//pP/oAX//2IBIIsFi/8C5gEgBf8Anf7g/wAP/cAFi//+5ADgBf8AFgFV/wAYqpX/ABdV9f8AEn9q/wAYqpX/AAxUQAj/ABiqlf8ADFZV/wAbqkr/AAYrKv8AHqoAiwgO94T/AHf+wP8ApABgFf8AGVVqi/8AFVV1///3VUD/ABFVgP//7qqACP8AEVWA///uqoD/AAiqwP//6qqLi///5qqWCIv///FV1v///aoW///xVMv///tUK///8VPACP//+1ZA///xVdb///ertv//61Zr///0ASv//+VXAAj//8D/4P//bv4gBf//pv+giwX/ACr+QP8AsABABf//81ZW/wAIqsD///YrVv8ACtTq///5AFb/AAz/FQj///kAVv8ADQEq///8gCv/AA4rFYv/AA9VAAiL/wAZVWr/AAiqwP8AFVV1/wARVYD/ABFVgAj/ABFVgP8AEVWA/wAVqdX/AAiqwP8AGf4qiwgO+P3/AbH/IP8BbwEgFf8ALgEV///3VUD/ACV/////7v/r/wAc/ur//+aqlgj/AB0BAP//5qqW/wAOgID//9n/4Iv//81VKwiL//+2AED//+V/oP//y9TL///K/0D//+GpVgj//8sBVv//4atr//+11Yv///DVtv//oKnAiwj//yEAgIsFi/8CtQFgBf8Aw/8AiwX/AGFUqov/AEpVKv//8ipW/wAzVar//+RUqwj/ADNVqv//5FSr/wAZqtX//9LVgIv//8FWVgiL///XVZb///PVa///3yrL///nqtZyCP//56rWcv//4dUW///vKqD//9v/Vv//91VACP//MwHg/wDR/2AVi///XwBgBf8APP+giwX/AEVT6ov/ACKp9f8AG/+1i/8AN/9qCIv/ABwAwP//9qpr/wAT1RX//+1U1v8AC6lqCP//7Vbr/wALq4D//+JWQP8ABdXA///XVZaLCP//0ACAiwX/ADv/YP/+Nf4AFf8AK1XAi/8AINU1/wAGf4r/ABZUqv8ADP8VCP8AFlSq/wANASr/AAsqVf8AGCuAi/8AI1XVCIv/AD//Vf//2ABr/wAf/6r//7AA1osI//+4AMCLBYv//0P/4AX/ADv/YIsFDve9/wDLAMD//+7+4BX//9H+64v//9wqC/8ADSrV///mVSv/ABpVqgj//+ZVK/8AGlWq///zKpb/ACV//4v/ADCqVQiL/wJfAcAF/wCeAgD/ABD+AAWL//2WAcAFi///6f6r/wAJACr///T/Vv8AEgBViwj/AAlVlYv/AAiqwP8AAasV/wAH/+r/AANWKgj/AB7+YP//kAAgBf//41aA///z/xb//+AAVv//+f+L///cqiuLCA74K/8AK/6A/wD8AIAVi/8Aef9ABf8BPwGgiwWL//+GAMAF//7A/mCLBQ74zv8CR/8g/wK1AWAV//8/AcD//Ur+oAX//zP/AIsF+1z/ArUBYAX/AKz/gIsF/wCEAcD//cr/YAX/AHv/wP8CNQCgBf8Ap/5AiwUO+Oz/AhoAIP8C5gEgFYv//Rn+4AX//3P/YIsF///4ASD/AD3/4AX//9qpq///y1Sr///Nqpb//+WqVv//wKuAiwj//74AK4v//83VS/8AGVVq///dqmv/ADKq1Qj//92qa/8AMqrV///u1Tb/AEVV/4v/AFgBKgiL/wA1/ur/AAkAKv8AMFTq/wASAFX/ACqq6gj/ABIAVf8AKqrq/wAZgCD/ACFVVf8AIP/q/wAX/8AI/wAg/+r/ABf/wP8AJdVq/wAL/+D/ACqq6osI/wAyqtWL/wAqABX//+9VVv8AIVVV///eqqsIi/8BBP+gBf8Anf7g///vAgAF+47//Xz+oBX/ACSrgIv/AB6rCv8AE//K/wAYqpX/ACf/lQiL/wDlAQAF///zVED/AA9VAP//8ymL/wALVQr///L+1v8AB1UVCP//8wDr/wAHVRX///ErIP8AA6qK///vVVaLCP//4quri///6KsW///yVQv//+6qgP//5KoWCP//7qqA///krCv///dVQP//1gD2i///x1XACIv//8H/Fv8AB3/K///UqkD/AA7/lf//51VrCP8ADv+V///nVWv/ABWAKv//86q2/wAcAMCLCA75Gf8BbQCg/wLF/2AV/wBZVMCL/wBM/3X//+Oq4P8AQKoq///HVcAI//+tASD//6kAIAX//+dVa/8AEqsq///pKiv/AA2AQP//6v7r/wAIVVUI///rAQD/AAhVVf//59WL/wAEKqr//+SqFosI///MqlaL///XACv//+vUdv//4VYA///XqOsI///hVgD//9erAP//8KsA///C1auL//+uAFYIi///p1YW/wALqnX//8Eqlv8AF1Tq///a/xYI/wAXVOr//9sBK/8AJFUK///tgJb/ADFVKosI/wAiqwCL/wAfVeD/AAeqgP8AHADA/wAPVQAIi/8AnP6gBf//pf9giwX//+//IP8AdADgBf8BCQCgiwWL//6pAcAF///b/1b//+ipAP//2FTL///t/qD//9SqQP//81RACP//1KxW///zVlb//9SrS///+asr///UqkCLCP//lqtri///sKqg/wAe1cD//8qp1v8APauACP//yqnW/wA9q4D//+VU6/8AWn+1i/8Ad1PqCIv/AEwAQP8ADn91/wBBVQD/ABz+6v8ANqnACP8AHQEA/wA2q9X/ACerNf8AKX/1/wAyVWr/ABxUFQj/ADJVav8AHFYq/wA4gJX/AA4rFf8APqvAiwgO+ND/Af3/YIsV//93ACCLBf//+QFg/wBDASAF///ZVAD//8f+gP//ylV2///j/0D//7tW64sI///PU5aL///bKcv/AA6qKnL/AB1UVQhy/wAdVmr///OAAP8AKQDfi/8ANKtVCIv/AX0BgAX/AJ4CAIsFi//+lv1ABYv//+YB1v8ABCqq///t1gH/AAhVVf//9aorCP8ACFVV///1qiv/AAzVav//+tUW/wARVYCLCP8AIVVVi/8AHKqK/wAUqqD/ABf/wP8AKVVACIv/AXEBoAX/AJ3+4IsFi//97P6ABQ75gf8C5/6A/wITAYAV//+SAKD//ez+gAX//0L/oIsF//+5AQD/AYYAoAX//7oBQP/+ef9gBf//RQAgiwX//47/4P8CEwGABf8An/9giwX/ADb+IP/+Yv/gBf8AUwIA/wGdACAF/wCaAQCLBf8ASP+A//5i/+AF/wBAAGD/AZ0AIAX/AJb9IIsFDvfR/wEAAYD/AGkBQBWL///IqVb///YqS///0lVh///sVJb//9wBawj//+xUlv//2/9W///l/8D//+PVlv//36rr///rq9YI///fquv//+upwP//2X/A///uf8v//9NUlv//8VXWCP//1AGA/wBz/cAF/wAdVFX/AAtWFf8AFf8//wANACD/AA6qKv8ADqoqCP8ADqxA/wAOqir/AAnVtf8AEQAV/wAE/yr/ABNWAAj/AAUBQP8AE1YA/wACgKD/ABiqlYv/AB3/KgiL/wJGAcAF/wCkAGCLBYv//bP/4AUO+On/AWsAIP8CI/+AFf8AP1SAi/8AMKpV///nKrb/ACIAKv//zlVrCP8AIgAq///OVWv/ABEAFf//uoBWi///pqtACIv//8lUK///93/2///PVKD//+7/6///1VUWCP//7v/r///VVyv//+eq1v//3qqr///gVcD//+f+Kwj//+BVwP//6ABA///agAD///QAIP//1KpAiwj//+NWgIv//+XVC/8ABf9q///oU5b/AAv+1Qj//+hVq/8ADADq///r1YD/ABCrtf//71VW/wAVVoAI///4ASD//8z/wAX//3P/YIsFi/8C5gEgBf8Anf7g/wAQ/gAFi//+5gFgBf8AD//V/wAV/0D/ABR/6v8AEVR1pP8ADKmqCKT/AAyrwP8AGys1/wAGVeD/AB1WaosI///EAKD8VhX/AD3+1Yv/AB7/av8AN6sKi/8Ab1YVCIv/AD9UgP//+Krr/wArqiD///FV1v8AF//ACP//8VXW/wAX/8D//+qqi/8AC//g///j/0CLCP//3Kori///4f/L///rVWD//+dVa///1qrACIv//yMBAAX/AAoAav//8AAr/wAMKpX///OAAP8ADlTA///2/9YI/wAOVtX///b/1v8AD4DA///7f+v/ABCqqosIDvh3/wD4/8D/AiP/gBX/ACYBKov/ACOrQP//+lT2/wAhVVX///Sp6wj/ACFVVf//9KwA/wAdVFX///AAK/8AGVNV///rVFYI///GASD//6b/oAX//9SqQP8AG1Xq///UVeD/AA2q9f//1AGAiwj//+tUVov///Ap1v///IAr///0/1b///kAVgj///UBa///+QBW///6gLb///YqS4v///NUQAiL///2Aav/AAJ/lf//99Vg/wAE/yr///mpFgj/AAUBQP//+asr/wAKKyD///mAdv8AD1UA///5VcAI/wAPVQD///lVwP8AF6pV///4ABb/AB//qv//9qprCP8AN1SV///wACv/ACkqiv//6yqr/wAbAID//+ZVKwj/ABsAgP//5lUr/wANgED//9x/dov//9KpwAiL///cAWv///WqK///4NXg///rVFb//+WqVgj//+tWa///5apW///jquD//+vUdv//2/9W///x/pYI///b/1b///IAq///2ABr///5AFb//9QBgIsI///TVJaL///WfwD/AAb/qv//2alr/wAN/1UI///Zq4D/AA4Bav//34FA/wATVgD//+VXAP8AGKqVCP8ATP1g/wBV/6AF/wAsq2r//91VAP8ALwBK///uqoD/ADFVKosI/wAX/8CL/wAS1NX/AARVYP8ADanq/wAIqsAI/wANrAD/AAiqwP8ABtYA/wAMVUqL/wAP/9UIi/8ADKvA///9VKv/AAoAav//+qlW/wAHVRUI///6q2v/AAdVFf//9as2/wAG1PX///CrAP8ABlTVCP//8KsA/wAGVur//+eq1v8AB9U1///eqqv/AAlTgAj//8tUq/8AD1cV///Yqjb/ABVVdf//5f/A/wAbU9UI///l/8D/ABtV6v//8v/g/wAiACqL/wAoqmoIi/8AHqoA/wAI1XX/ABt/lf8AEarq/wAYVSoI/wARqur/ABhXQP8AGVVq/wATVgD/ACD/6v8ADlTACP8AIP/q/wAOVMD/ACYq1f8ABypg/wArVcCLCA73hP8Ad/7A/wCkAGAV/wAYqpWL/wAVKsD///cqi/8AEarq///uVRYI/wARqur//+5VFv8ACNV1///q1UCL///nVWsIi///5qqW///3Kov//+p/1v//7lUW///uVRYI///uVRb//+5VFv//6tVA///3Kov//+dVa4sI///mqpaL///qf9b/AAjVdf//7lUW/wARquoI///uVyv/ABGq6v//9yuW/wAVgCqL/wAZVWoIi/8AGKqV/wAI1Gr/ABUqwP8AEajV/wARquoI/wARqur/ABGq6v8AFYAq/wAI1XX/ABlVaosIi/8BWf8AFf8AGKqVi/8AFSrA///3Kov/ABGq6v//7lUWCP8AEarq///uVRb/AAjVdf//6tVAi///51VrCIv//+aqlv//9yqL///qf9b//+5VFv//7lUWCP//7lUW///uVRb//+rVQP//9yqL///nVWuLCP//5qqWi///6n/W/wAI1XX//+5VFv8AEarqCP//7lcr/wARqur///crlv8AFYAqi/8AGVVqCIv/ABiqlf8ACNRq/wAVKsD/ABGo1f8AEarqCP8AEarq/wARqur/ABWAKv8ACNV1/wAZVWqLCA75H/8BAf7g/wK1AWAV/wBsqsCL/wBXKpX//+d/Fv8AQapq///O/isI/wBBrID//88AQP8AINZA//+mKyCL//99VgAIi///f1Rr///f/0v//6V/QP//v/6W///LqhYI///AAKv//8usK///rQAW///l1hb//5n/gIsI//8wASCLBYv/ArUBYAX/AMD+QIsF///jAiD//4j+YBWL//44/sAF/wA1/eCLBf8ANgEAi/8AKP/V/wAQ1WD/ABv+qv8AIarACP8AHADA/wAhqsD/AA4AYP8APCsgi/8AVquACIv/ADtVlf//+QBW/wAuAAr///IAq/8AIKqACP//8gCr/wAgqoD//+z/a/8AFn9g///n/iv/AAxUQAj//+gAQP8ADFZV///iVkD/AAYrKv//3KxAiwj//8v/gIsFDvhz/wEkASD/AiP/gBX/ACSpaov/ACD+4P//+qpg/wAdVFX///VUwAj/AB1Wav//9VbW/wAbq1X//++qwf8AGgBA///p/qsI//+8AcD//6IBgAX//96qq/8AGVVq///eVUD/AAyqtf//3f/Wiwj//9yqK4v//+VU6///8v/g///t/6v//+X/wAj//+3/q///5f/A///2/9b//9X/64v//8YAFgiL///IAJb/AAkAKv//2FTL/wASAFX//+ipAAj/ABIAVf//6KsW/wAaAED///RVi/8AIgAqiwj/ABIAVYv/ABBVQP8AAtUA/wAOqir/AAWqAAj/AA6qKv8ABawV/wARqur/AAkq3/8AFKuq/wAMqaoI/wBE/oD//54AgAX//8tUq///1f/r///EVQD//+r/9v//vVVWiwj//8oBFov//9FVIP8AC3/A///YqSv/ABb/gAj//9irQP8AFwGV///hqmD/ACBWIP//6qmA/wApqqoI///qq5b/ACmqqv//9VXL/wAw1QqL/wA3/2oIi/8AN/9q/wAKqjX/ADGqlf8AFVRq/wArVcAI/wAVVoD/ACtVwP8AHlWg/wAh1XX/ACdUwP8AGFUqCP8AJ1bV/wAYVSr/AC2rqv8ADCqV/wA0AICLCA74lf8CBv6A/wITAYAV//9ZAgD//ez+gAX//0UAIIsF//9U/eD/AhMBgAX/AKwCYIsF/wBd/oD//mT9QAX/AGH/gP8BmwLABf8AoP+giwUO+Jr/AWMBQP///v/AFf//6qmA//+7VNb//90qS///yysA///Pqxb//9sBKwj//8+rFv//2v8W//+/KyD//+sqq///rqsr///7VkAI///u/uD/AG7/oAX/ADKq1f8ABqpA/wAlgAD/AAtVCv8AGFUq/wAP/9UI/wAYVSr/AA//1f8AE3+q/wAZqtX/AA6qKv8AI1XVCP//ygIgiwX//139AP8CEwGABf8AqAFgiwX/AF7+wP/+Uf7ABf8AaAEA/wGuAUAF/wCjACCLBf//VwGA//3r/kAFDnub+DyZ926ZkZu5kwb7iIv4jJH3GosHe5v4NJf3bpedm7OVCPuGi/iGkvcXiwmvCvccCwAAAAAAAyAAAAJYAAACaQAAArMAAAHnAAACDgAAAjwAAAElAAAClwAAAk4AAAIBAAAA7QAAAosAAAMSAAACUgAAA08AAAJ5AAACmgAAAhwAAAI/AAABGgAAAkEAAAIoAAADTQAAAiQAAAGCAAACSAAAAicAAAGRAAACVQAAAkEAAADwAAACaQAAASkAAAGXAAACOgAAAlgAAAKFAAACPAAAAu0AAAE9AAACVQAAAeMAAADwAAACiwAAAd8AAAIBAAACBgAA)format("opentype");font-display:swap}@font-face{font-family:fnt1;src:url(data:font/otf;base64,T1RUTwAJAIAAAwAQQ0ZGIKmEiagAAAPwAABA9k9TLzJRsmO/AAABAAAAAGBjbWFwRjoHaQAAAuwAAADiaGVhZGLFQxcAAACcAAAANmhoZWEDDgNXAAAA1AAAACRobXR4Xi8AAAAAROgAAAC8bWF4cAAvUAAAAAD4AAAABm5hbWUUxXaCAAABYAAAAYxwb3N0AAMAAAAAA9AAAAAgAAEAAAABAACyBVK3Xw889QADA+gAAAAAAAAAAAAAAAAAAAAA//j/KwO2AwwAAAADAAIAAAAAAAAAAQAAAwz/KwAAA/wAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAC8AAFAAAC8AAAACAj0BkAAFAAACigJYAAAASwKKAlgAAAFeADIA+QAAAgAFAAgAAAkAAwAAAAMAAAAAAAAAAAAAAAAzNTc5AAAAICAiAwz/KwDIAwwA1QAAAAEAAAAAAaACpAAAACAAAAAAAAwAlgABAAAAAAAAABMAAAABAAAAAAABAAgAEwABAAAAAAACAAcAGwABAAAAAAADABAAIgABAAAAAAAEABAAMgABAAAAAAAGABAAQgADAAEECQAAACYAUgADAAEECQABABAAeAADAAEECQACAA4AiAADAAEECQADACAAlgADAAEECQAEACAAtgADAAEECQAGACAA1kNvcHlyaWdodCAtIFVua25vd25HZW5lcmljMVJlZ3VsYXJHZW5lcmljMS1SZWd1bGFyR2VuZXJpYzEtUmVndWxhckdlbmVyaWMxLVJlZ3VsYXIAQwBvAHAAeQByAGkAZwBoAHQAIAAtACAAVQBuAGsAbgBvAHcAbgBHAGUAbgBlAHIAaQBjADEAUgBlAGcAdQBsAGEAcgBHAGUAbgBlAHIAaQBjADEALQBSAGUAZwB1AGwAYQByAEcAZQBuAGUAcgBpAGMAMQAtAFIAZQBnAHUAbABhAHIARwBlAG4AZQByAGkAYwAxAC0AUgBlAGcAdQBsAGEAcgAAAAEAAwABAAAADAAEANYAAAAaABAAAwAKACAALgAwADcAQwBFAEkATQBQAFMAeiAi//8AAAAgACwAMAA1AEAARQBJAEwAUABSAGEgIv//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgAaAB4AHgAiACgAKAAoACoAKgAsAF4AXgAMABkAIAAWAB0AHwAcAB4AIQABACIADQAXABoAGwArAC4ALQAqAA8AJwACAAsACgATABEACQAHACkALAAGAAQADgADAAUAJgASAAgAEAAjABgAKAAVABQAJAAlAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEBAABBAAAAAEAAAARR2VuZXJpYzEtUmVndWxhcgABBAAAAAEAAAAsHuipllj/HuIT//pKHngKAF8FHgoAH4uLHgoAH4uLDAf3Jw/3LBG+HEDBEgAEBAAAAAEAAAARAAAAGQAAAB4AAAAmR2VuZXJpYzEtUmVndWxhckdlbmVyaWMxQWRvYmVJZGVudGl0eQAAAgABAC0ALwQAAAABAAAABAAAAHcAAAJXAAAD3gAABZwAAAdHAAAIGAAACSUAAAvpAAAM7QAADuIAABDtAAAQ8AAAEvMAABQZAAAWcQAAF3YAABxYAAAdQgAAHm0AAB9iAAAf5AAAIMoAACEtAAAheAAAImQAACKOAAAiygAAJWsAACcwAAAndAAAKXsAACmlAAAuNwAAMCgAADEvAAAxjAAAMnIAADR9AAA2SgAANtAAADiTAAA70wAAPJIAADz/AAA+PgAAP2f5tA740f8B0wEgixX//8v/gP8ArP+ABf/++wBgiwX//8v/gP//UwCABf//oAEAiwX/ANz/AP8CsQBgBf8Ad/7AiwX/ANwB4P/9Tv+gBSeLBf/+3f9g944V/wDXAKCLBf//lP5A/wFn/2AF//+UASD//pgAoAUO+HL/AR7/4P8CGwBgFf8AH1TVi/8AHKqK///7f+v/ABoAQP//9v/WCP8AGgBA///2/9ak///xf4H/ABf/wP//6/8rCP//1AGA///GASAF///tVNb/AA1UgP//7dT2/wAJ1Kr//+5VFv8ABlTVCP//7lUW/wAGVur//+yAVv8AAyt1///qq5aLCP//1VUWi///3tVg///u/+v//+hVq///3f/WCP//6FWr///d/9b///Qq1v//zaqWi///vVVWCIv//71VVv8AC6p1///O1Yv/ABdU6v//4FXACP8AF1Tq///gVcD/ACFVVf//8Crg/wArVcCLCP8AFKmVi/8AEv+K/wADKmr/ABFVgP8ABlTVCP8AEVWA/wAGVNX/ABNWAP8ACisg/wAVVoD/AA4Bagj/ACn+AP//w/2ABf//0ACA///ZVhb//8pVdv//7KsL///EqmuLCP//uKuWi///x9TW/wAX/8D//9b+Fv8AL/+ACP//1wAr/wAv/4D//+uAFv8AQlVAi/8AVKsACIv/ADgBgP8ACVWV/wAw/8D/ABKrKv8AKf4ACP8AEqsq/wAqABX/ABqAYP8AIKqA/wAiVZX/ABdU6gj/ACJVlf8AF1cA/wAo1SD/AAurgP8AL1SqiwgO+Nz/ASUBYP8CGwBgFf8ASf/Ai/8AOX/K///nVWv/ACj/1f//zqrWCP8AKP/V///Oqtb/ABR/6v//vP/ri///q1UACIv//8lUK///9qpr///P1MD//+1U1v//1lVWCP//7VTW///WVVb//+T/gP//36rr///cqiv//+kAgAj//9ysQP//6QCA///WAPb///SAQP//z1Wriwj//7YAQIv//8ZUdv8AGKqV///WqKv/ADFVKgj//9aqwP8AMVUq///rVWD/AEMAFYv/AFSrAAiL/wA2qcD/AAlVlf8AMCo1/wASqyr/ACmqqgj/ABKrKv8AKaqq/wAa/3X/ACBVFf8AI1PA/wAW/4AI/wAjVdX/ABcBlf8AKlaK/wALgMr/ADFXQIsIi///tgBAFf//pKrAi///0lVg//+8qoCL//95VQAIi///ef/W/wAtVTX//7z/6/8AWqpqiwj/AFqqaov/AC1VNf8AQ1WAi/8AhqsACIv/AIYAKv//0wA2/wBDABX//6YAa4sIDvnt/wJv/8D/AhsAYBX/ACtVwIv/ACKrAP//8X+A/wAaAED//+L/AAj/ABoAQP//4wEW/wANACD//9jV9ov//86q1giL//6F/0AF//+j/uCLBYv/AW0AoAWL/wBEAFX//+dVa/8AIgAq///OqtaLCP//5f/Ai///6f+2///4fyv//+3/q///8P5WCP//7f+r///xAGv//+yrC///6IBg///rVmv//+AAVgiL//6KAEAF//+j/uCLBYv/AW0AoAWL/wBEAFX//+dVa/8AIgAq///OqtaLCP//5VTri///6apL///4VHb//+3/q///8KjrCP//7gHA///wqwD//+0Adv//6KsW///r/yv//+CrKwiL//6KAEAF//+j/uCLBYv/Ag8AgAX/AE8BAIsF/wAH/uD//7L/gAX/ACdW1f8AO1WV/wAyqtX/AB2qyv8APf7Viwj/ACCqgIv/ABvVAP//96qr/wAW/4D//+9VVgj/ABcBlf//71VW/wAQgQD//+iqC/8ACgBq///h/sAI/wAUqZX/AB6sFf8AFtTK/wAXgKqk/wAQVUAIpP8AEFVA/wAdgBX/AAgqoP8AIgAqiwgO+Ob/AVD/4P8CGwBgFf8AQ1WAi/8AMVUq///n/zb/AB9U1f//z/5rCP8AH1TV///QAID/AA+qav//vFYgi///qKvACIv//61VgP//7f+r//+9VVb//9v/Vv//zVUrCP//3AFr///NVSv//80Ay///5qqW//++ACuLCP//xVVAi///0f/2/wAT/8r//96qq/8AJ/+VCIv7jgX//6P+4P//9QBgBYv/AuQAoAX/AE8BAIsF/wAHAcD//7kBAAX/ABNT6v8AGqkA/wAXVOr/ABR+4P8AG1Xq/wAOVMAI/wAbVer/AA5W1f8AHKqK/wAHK2r/AB3/KosI///eAOD//iP/wBX/AFapaov/ACtUtf8AQwAVi/8AhgAqCIv/AIarAP//2FXW/wBDVYD//7Crq4sI///l/8CL///oVKD///hUdv//6qmA///wqOsI///qq5b///CrAP//7VXg///sVaD///AAK///6ABACIv//v8BYAX/AA1UgP//61RW/wAQqqr///Ap1v8AFADV///0/1YI/wAUANX///UBa/8AFgBK///6gLb/ABf/wIsIDve591z///QAIBX//93/1ov//+UqNv8ACioV///sVJb/ABRUKgj//+xWq/8AFFZA///2K1b/AByA4Iv/ACSrgAiL/wJ6/2AF/wBb/gD/AAr/oAWL//18AYAFi///8VPA/wACf5X///VUwP8ABP8q///5VcAI/wAFAUD///lVwP8ACIEV///8quD/AAwA6osI/wAMqaqL/wALVQr/AAH/df8ACgBq/wAD/uoI/wAX/8D//8ACwAX//+oAwP//8/8W///nqtb///n/i///5VTriwgO967/ALr/4P8CDwCAFYv//fD/gAX//6P+4IsFi/8CDwCABf8AXAEgiwX//9EAwP8A/QDAFf8AE1Pqi/8AD6lg///5/4v/AAv+1f//8/8WCP8ADADq///z/xb/AAYAdf//8QBri///7gHACIv//+3/q///+f+L///xKhb///P/Fv//9FSACP//9AEr///0Vpb///BWoP//+itL///srBaLCP//7VTWi///8Kn2/wAF1LX///P/Fv8AC6lqCP//9AEr/wALq4D///oAlv8ADtXqi/8AEgBVCIv/ABH+QP8ABf9q/wAO/5X/AAv+1f8ADADqCP8ADADq/wAMAOr/AA9WCv8ABgB1/wASqyqLCA74Z/8A7gAg/wIbAGAV/wAkAKqL/wAgVRX///r/y/8AHKmA///1/5YI/wAcq5X///X/lv8AG1Xq///xAGv/ABoAQP//7AFACP//2P+g///F/gAF///oAED/AA9VAP//6Sor/wALVQr//+pUFv8AB1UVCP//6lYr/wAHVyr//+krNv8AA6uV///oAECLCP//4f7Ai///6FSg///51Nb//+6qgP//86mrCP//7qqA///zq8D///dVQP//7yqgi///6qmACIv//+qrlv8ACCqg///vVVb/ABBVQP//8/8WCP8AEFdV///0ASv/AB2AFf//9FWL/wAqqNX///Sp6wj/ADqqwP//8VXW/wAr1NX//+wANv8AHP7q///mqpYI/wAdAQD//+aqlv8ADoCA///dVQCL///T/2sIi///y/+A///r1YD//9hUy///16sA///kqhYI///XqwD//+SsK///ztWL///yVhb//8YAFosI//+wANaL//+9qsH/ABb/gP//y1Sr/wAt/wAI/wAw/8D/ADgBgAX/ACyrav//3f/W/wAxVSr//+7/6/8ANf7qiwj/ACKrAIv/ABt/lf8ABypg/wAUVCr/AA5UwAj/ABRWQP8ADlbV/wAKKyD/ABOAtYv/ABiqlQiL/wAR/kD///xVdv8ADn91///4quv/AAsAqgj///iq6/8ACwCq///zVUv/AAmrAP//7f+r/wAIVVUI///t/6v/AAhVVf//5apW/wAI1XX//91VAP8ACVWVCP//yACW/wAOqir//9eAS/8AE6pfcv8AGKqVCHL/ABiqlf//84AA/wAfVNWL/wAl/xUIi/8AG1Xq/wAIKqD/ABjVSv8AEFVA/wAWVKoI/wAQVUD/ABZWwP8AFqoV/wARVYD/ABz+6v8ADFRACP8AHQEA/wAMVlX/ACCA1f8ABisq/wAkAKqLCA743v8BVwFg/wIbAGAV/wAv/4CL/wAlfvX///GqNv8AGv5q///jVGsI/wAbAID//+NWgP8ADYBA///Yq0CLWQiL//6F/0AF//+kAgCLBYv/AW0AoAWL/wAlVED///jUlv8AGlSg///xqSv/AA9VAAj///GrQP8AD1cV///rKqv/AAeriv//5KoWiwj//+SsK4v//+eq1v//9/8L///qqYD//+/+Fgj//+qrlv//8AAr///sADb//+lV6///7VTW///iq6sIi/wLBf//o/7giwWL/wLiACAF/wBcASD/AAn/YAWL//7aAYAF/wApVUD/ADiqQP8ANACA/wAcVSD/AD6rwIsIDvi1/wHtAWD/ARcBABWL///wqwD///9VK///8FSL///+qlb//+/+Fgj//rAAYIsF/wAD/ur//8YAFv8ADqoq///VVRb/ABlVav//5KoWCP8AGVVq///krCv/ACCqf///8lYW/wAn/5WLCP8AGVVqi/8AF1Tq/wADqor/ABVUav8AB1UVCP8AFVaA/wAHVRX/ABZVtf8AC6p1/wAXVOr/AA//1Qj/ACgAoP//yQHgBf//yACW///T/2v//8Kq9v//6f+2//+9VVaLCP//tqsWi///xtSW/wAX/8D//9b+Fv8AL/+ACP//1wAr/wAv/4D//+uAFv8AQf/Vi/8AVAAqCIv/ADar1f8ACNV1/wAwgKr/ABGq6v8AKlWACP8AEarq/wAqVYD/ABlVav8AISqg/wAg/+r/ABf/wAj/ACD/6v8AF//A/wAm1ar/AAv/4P8ALKtqiwj/AEYA1Yv/ADWqiv//6P92/wAlVED//9H+6wj/ACVWVf//0gEA/wASqyr//8BWFov//66rKwj//6T/IP8AGwCAFYv/ADP+av//9aor/wAnqir//+tUVv8AG1XqCP//61Zr/wAbVer//+EAlv8ADar1///WqsCLCP//tKqWi///1wAr///IqmD///lVwP//kVTACP8A9v9AiwWL/wAGAYAFDvjq/wH3AMD/AuMAYBWL//0c/6AF//+u/oCLBf//9wDg/wBI/4AF///uqoD//+VU6///6lUg///rKqv//+X/wP//8QBrCP//5f/A///xAGv//+MAC///+IA2///gAFaLCP//wVZWi///zyr2/wAYqpX//9z/lv8AMVUqCP//3P+W/wAxVSr//+5/y/8AQlVAi/8AU1VVCIv/ADYBAP8ACFVV/wAwAIr/ABCqqv8AKgAVCP8AEKqq/wAqABX/ABf/wP8AINU1/wAfVNX/ABeqVQj/AB9W6v8AF6pV/wAkqnX/AAvVKv8AKf4Aiwj/ADYBAIv/AC9Vtf//6lUg/wAoqmr//9SqQAiL/wEUAEAF/wBcASD///UAYAX//yIAwP/9Wf9AFf8AG/6qi/8AF/61/wAGf4r/ABP+wP8ADP8VCP8AFADV/wANASr/ABNWAP8AE4C1/wASqyr/ABoAQAiL/wEB/uAF///uqoD/ABasKv//7X+L/wARKsr//+xUlv8AC6lqCP//7Far/wALq4D//+nWC/8ABdXA///nVWuLCP//11WWi///4H9r///u/+v//+mpQP//3f/WCP//6atW///d/9b///TVq///zVUri///vKqACIv//7v/q/8AClTK///NVSv/ABSplf//3qqrCP8AFKuq///eqqv/AB2r1f//71VW/wAmrACLCA73nQ74xP8BVQDg/wK9AEAV/wApVUCL/wAi1Kr///qqYP8AHFQV///1VMAI/wAcVir///VUwP8AHNVA///uqoD/AB1UVf//6ABACP//zAKg///DAGAF///V/+v/ACIAKv//06oA/wARABX//9FUFosI///GquuL///R1UH//+n/tv//3P+W///T/2sI///dAav//9QBgP//7oDW//+5VWCL//+eqUAIi///oVar/wARVHX//7oq6/8AIqjq///S/ysI/wAiqwD//9MBQP8ALgAK///pgKD/ADlVFYsI/wAdVmqL/wAZqtX/AAT/Kv8AFf9A/wAJ/lUI/wAWAVX/AAoAav8AF1X1/wAOAGD/ABiqlf8AEgBVCP8ALv9A///EAKAF///qqYD//+n+q///5KoW///tqkD//96qq///8VXWCP//3qqr///xVdb//9mrgP//+Krr///UrFaLCP//x/6Ai///zimr/wAN1KD//9RU1v8AG6lACP//1Fbr/wAbq1X//94A4P8AKKpq///nqtb/ADWpgAj//+eq1v8ANauV///z1Wv/AECAgIv/AEtVagiL/wBLVWr/AAyqtf8AQH91/wAZVWr/ADWpgAj/ABlVav8ANauV/wAiVIr/ACiAwP8AK1Oq/wAbVeoI/wArVcD/ABtV6v8AMFX1/wANqvX/ADVWKosIDvje/wFXAWD/AhsAYBX/AC//gIv/ACV+9f//8ao2/wAa/mr//+NUawj/ABsAgP//41aA/wANgED//9irQItZCIv//oX/QAX//6QCAIsFi/8BbQCgBYv/ACVUQP//+P9L/wAaVKD///H+lv8AD1UACP//8gCr/wAPVxX//+tVYP8AB6uK///kqhaLCP//5AFWi///51Vr///3/wv//+qpgP//7/4WCP//6quW///wACv//+wANv//6QCA///tVNb//+IA1giL//6KAEAF//+j/uCLBYv/Ag8AgAX/AE8BAIsF/wAH/uD//7H/QAX/ABKrKv8AHADA/wAXK0D/ABYASv8AG6tV/wAP/9UI/wAbq1X/AA//1f8AHoBV/wAH/+r/ACFVVYsIDvi0+Fb/AHr/gBWL///qq5b/AAOqiv//8Crg/wAHVRX///WqKwj/AAdVFf//9aor/wAK/6D///gqy/8ADqoq///6q2sI///rAQD//7//oAX//+SqFv8AA1Yq///p/7b/AAeqf///71VW/wAL/tUI///vVVb/AAwA6v//86q2/wASqyr///gAFv8AGVVqCP//3KxA///LVKv//8urIP//5apW//+6qgCLCP//y/+Ai///1v8g/wAOqir//+H+wP8AHVRVCP//4gDW/wAdVmr///EAa/8AJlWKi/8AL1SqCIv/ADgBgP8AFCqA/wArAFX/AChVAP8AHf8qCP8AKFcV/wAd/yr/ADkrav8ADv+V/wBJ/8CLCP8AUP5giwWL/wAnAGAFi/8AJVZV///2/9b/ABqrFf//7f+r/wAP/9UI///uAcD/AA//1f//5FW2/wAH/+r//9qpq4sI///ZVhaL///Qq1b///aqa///yACW///tVNYI///o/WD/AEMBIAX/AEFXFf8AF//A/wA8q0D/AAv/4P8AN/9qiwj/AD3+1Yv/AC5Uav//8NSr/wAeqgD//+GpVgj/AB6sFf//4atr/wAPVgr//9TWAIv//8gAlgiL//8O/yAF//8n/yD//73/IBX/ADSrVYv/AClVQP8AG1Xq/wAd/yr/ADar1QiL/wB4/wAF//+7AYCLBf//nqtWi///z1Wr///cAGCL//+4AMAIi///4Ksr/wAHqoD//+hUoP8AD1UA///v/hYI/wAPVQD///AAK/8AFqoV///4ABb/AB3/KosIDvf9/wFo/6D/ABf/wBX//91VAP//6ABA///Yq0D///QAIP//1AGAiwj//9NUlov//90qS/8ADNVqcv8AGarVCHL/ABmq1f//84AA/wAlKpWL/wAwqlUIi/8BPgFgBf//o/7giwWL/wBG/wAF/wBcASCLBYv/AHb+gAX/AFwBIP8ACv+gBYv//34B4AX3EYsF///1/YD//7kBAAX//40CgIsFi//+xf+gBYv//+SqFv8ABNR1///sKeD/AAmo6v//86mrCP8ACasA///zq8D/ABArlf//+dXg/wAWrCqLCP8AFKmVi/8AF1Tq/wAG/6r/ABoAQP8ADf9VCP8AIv9g///DAGAFDvic/wIH/sD/AfcAwBX//+wBQP//+VXA///qAMD///uqoP//6ABA///9/4AI///oAED///3/gP//4qqg///+/8D//91VAIsI/wA9/tX//+P/QP8AHv9q///TqwuL///DVtYIi///y1Sr///t/6v//9T/q///2/9W///eqqsI///cAWv//96qq///zwBA///vVVb//8H/FosI///oAECL///pq1b/AANVIP//61Zr/wAGqkAI///4ABb///qra///+aog///41aD///tUK///9v/WCP//+1ZA///2/9b///2rIP//9tUgi///9qprCIv//+NWgP8AFv+A///xq0D/AC3/AIsI/wBUAkCLBf8AI1PAi/8AH1TV///5qiD/ABtV6v//81RACP8AG1Xq///zVlb/ABUqwP//7qqA/wAO/5X//+n+qwj/AA7/lf//6gDA/wAHf8pyi///4/9ACIv//8yqVv//6v/2///YgIv//9X/6///5FbACP//1f/r///kVKv//8Kq9v//8ipW//+vVgCLCP//x1XAi///0yrr/wAF1cD//98AFv8AC6uACP//3wAW/wALqWr//+h/Vv8AEYA1///x/pb/ABdXAAj///IAq/8AF1Tq///5AFb/AB3/Kov/ACSpagj/AFL+4IsFi///6quW/wAD//X//+8rq/8AB//q///zq8AI/wAH/+r///Opq/8ADlTA///2qmv/ABSplf//+asrCP8AFKuq///5qRb/AB1Wav///NSL/wAmASqLCP8AN1SVi/8AJ391/wAG1gD/ABeqVf8ADawACP8AF6xq/wANqer/AAvWNf8AFH/qi/8AG1XqCIv/ABiqlf//9qpr/wASqyr//+1U1v8ADKvACP//7VTW/wAMqar//+X/wP8ABlTV///eqquLCP//rQEgiwX//9NUlov//94qi/8ACX9A///pAID/ABL+gAj//+kAgP8AEwCV///0gED/ABfWFYv/AByrlQiL/wARVYD/AAT/Kv8AEKqq/wAJ/lX/AA//1Qj/AAoAav8AD//V/wAOVcr/AA5UwP8AEqsq/wAMqaoI///hVgD/AA//1f//6X+W/wAT1RX///GpK/8AF6pVCP//8atA/wAXrGr///jVoP8AHNZKi/8AIgAqCIv/ACNTwP8ACNV1/wAfqkD/ABGq6v8AHADACP8AEarq/wAcAMD/ABhVKv8AFdWV/wAe/2r/AA+qagj/AB7/av8AD6pq/wAigEr/AAfVNf8AJgEqiwj/AClVQP///1Ur/wAiqfX/AAF/Vf8AG/6q/wADqYAI/wAcAMD/AAOrlf8AFytA/wAFADX/ABJVwP8ABlTVCP8AElXA/wAGVur/ABaAav8ACSrg/wAaqxX/AAv+1Qj/ABr9YP//rQEgBf/+9AHA///h/sAV///dVQCL///lKjb///UqC///7P9r///qVBYI///tAYD//+pWK///9oDA///jgTaL///crEAIi///2/9W/wAJqfX//+Mptv8AE1Pq///qVBYI/wATVgD//+pWK/8AG1Xq///1Kxb/ACNV1YsI/wAj/pWL/wAbf5X/AAp/gP8AEwCV/wAU/wAI/wATAJX/ABUBFf8ACYBK/wAdgSCL/wAmASoIi/8ATf6q///aVUv/ACb/Vf//tKqWiwgO+Bb/AUP/wP8CGwBgFf8AEqsqi/8AEVWA///9/4D/AA//1f//+/8ACP//7v7g//+mAoAF///wACv/AAP+6v//8KsA/wAB/3X///FV1osI///fVYCL///lqlb///QAIP//6/8r///oAEAI///sAUD//+gAQP//8FWW///aqrb///Sp6///zVUrCIv//tL/wAX//6P+4IsFi/8CDwCABf8ATwEAiwX/AAj/IP//lP5ABf8ADgFq/wAnVtX/ABMAlf8AHarK/wAX/8D/ABP+wAj/ABf/wP8AFADV/wAb/7X/AAoAav8AH/+qiwgO9+P/ARH/wP8CpABAFf//4/9Ai///6/8r///51Nb///P/Fv//86mrCP//9AEr///zq8D///oAlv//7NXAi///5f/ACIv//7cAgAX/AIAAwIsF///2AKD//7kBAAX//4n+oIsFi//+N/6ABf//pAIAiwWL/wHIAYAF//+h/mCLBYv/AEb/AAX/AF4BoIsFi/8AR/9ABYv/AC1WQP8ADn91/wAkf8D/ABz+6v8AG6lACP8AHQEA/wAbq1X/ACh/tf8ADdWq/wAz/mqLCP8AGAHVi/8AFYAq///91Mv/ABL+gP//+6mWCP8AEwCV///7q6v/ABR/6v//+SsL/wAV/0D///aqawj//+MCIP//vQIABf//4f7A/wANVID//+FU9v8ABqpA///gqyuLCA74gP8BMgGA///8/0AV///rVFb//8KsAP//4ym2///PgGD//9r/Fv//3FTACP//2wEr///cVMD//8srAP//6n/W//+7VNb///iq6wj///YAoP8AR/9ABf8AIqsA/wAGAYD/ABuqSv8ACKvK/wAUqZX/AAtWFQj/ABSrqv8AC1QA/wAQf/X/AA5/df8ADFRA/wARquoI/wAMVlX/ABGq6v8AC4DK/wAX1Qr/AAqrQP8AHf8qCP//4P6AiwX//07/gP8CDwCABf8AYf+AiwX/AI0A4P/+NACgBf8AigAg/wHL/2AF/wBe/sCLBf//UALg//3t/sAFDvh5/wEo/0D/ARn+oBX/ALcCAP/+5gFgBf//kP1AiwX//38CIP8A3v+ABf//fP6A//8hAIAF//+YAiCLBf8At/8g/wEWAMAF//9c/+D/APj/wAX/AGv+4IsF/wBt/2D//z7+oAX/AG8CwP8AwQFgBf8AZ/3giwX//14AIP//Cv4gBQ73hP8Adv6A/wB/AIAV/wAUANWL/wAQqqr///lUtv8ADVSA///yqWsI/wANVpX///KrgP8ABqtK///vqsCL///sqgAIi///7KwW///5VLb//++AC///8qlr///yVAAI///yq4D///JWFv//71VW///5Kwv//+v/K4sI///srBaL///vqsD/AAbU9f//8qlr/wANqeoI///yq4D/AA2sAP//+VXA/wAQf/WL/wATU+oIi/8AE1YA/wAGqkD/ABBVQP8ADVSA/wANVIAI/wANVpX/AA1Wlf8AEFVA/wAGq0r/ABNT6osIDvir/wHY/4D/ArEAYBX///UAYP//s//ABf/+9P7giwWL+3UF/wDoAcCLBYv//7P/wAX//xf+QIsFi///FABgBf8BHgLAiwWL//+z/8AF//6C/oCLBYv/ArEAYAX/AXT/gIsFDviA/wHh/qD/Ag8AgBX//00CIP/98P+ABf//kQBgiwX//0n+QP8CDwCABe+LBf8AigAg//5C/iAF/wCI/+D/Ab0B4AX/AGD/QIsFDveE/wB2/oD/AH8AgBX/ABQA1Yv/ABCqqv//+VS2/wANVID///Kpawj/AA1Wlf//8quA/wAGq0r//++qwIv//+yqAAiL///rVmv///n/i///6FWr///z/xb//+VU6wj//70CAP//Zv9ABf//vf8giwX/ACgAoP8ApgDgBf//91VA/wAGqkD///kqAP8ACFVV///6/sD/AAoAagj///sA1v8ACgBq///9gGv/AAr/oIv/AAv+1QiL/wATVgD/AAaqQP8AEFVA/wANVID/AA1UgAj/AA1Wlf8ADVaV/wAQVUD/AAarSv8AE1PqiwgO97v/AML+wP8CsQBgFYv//U7/oAX//6EBQIsFi/8CsQBgBf8AXv7AiwUO+Ib/AML+wP8CsQBgFYv//aH+gAX/ARsCAIsF///1AGD//60BIAX//pD+4IsFi/8CsQBgBf8AXv7AiwUO+Kn/ATP+4P8BuACgFf8AIgAqi/8AHwB1///4ABb/ABwAwP//8AArCP8AHADA///wACv/ABZVtf//5/82/wAQqqr//9/+QAj/ABCqqv//4ABW/wAIVVX//9kAq4v//9IBAAiL///Qq1b///Z/tv//1iqg///s/2v//9up6wj//+z/a///26nr///mVSv//+P/Qf//36rr///sVJYI///fquv//+xWq///3CsW///2K1b//9irQIsI//+x/0CL///G/0v/ABzVQP//2/9W/wA5qoAI///cAWv/ADmqgP//7gC2/wBP1YCL/wBmAIAIi/8ASKoV/wAKKhX/AD/UoP8AFFQq/wA2/yoI/wAUVkD/ADcBQP8AHSqq/wAqqur/ACX/Ff8AHlSVCP8AJgEq/wAeVqr/ACz/yv8ADytV/wAz/mqLCP8AMqrVi/8ALgAK///yVQv/AClVQP//5KoWCP//3ABg///DAGAF///gqyv/ABNWAP//3apr/wAJqwD//9qpq4sI///QAICL///Z/+D//+j/dv//4/9A///R/usI///kAVb//9IBAP//8KsA///CVYv///1Uq///sqoWCP8AKVVA/wA6qsD/ADWqiv8AHVVg/wBB/9WLCP//5AJg//6E/wAV/wAmqeqL/wAdqcD/AA6qKv8AFKmV/wAdVFUI/wAUq6r/AB1Wav8AClXV/wAnqzWLvQiL/wBfVkD//9wAYP8AL6sg//+4AMCLCP//4qmWi///5P+A///31WD//+dVa///76rACP//51Vr///vqsD//+r/9v//6X+W///uqoD//+NUawj/AAIAgP//tqsW/wALf8D//8oAC/8AFP8A///dVQAI/wAVARX//91VAP8AIIDV///uqoD/ACwAlYsIDvjC/wEXAQD/AqcBABX/AEn/wIv/ADfUtf//4n/r/wAlqar//8T/1gj/ACWrwP//xP/W/wAS1eD//6p/dov//4//FgiL//+QASv//+0qIP//qlXL///aVED//8Sqawj//9pWVv//xKpr///IK0v//+JVNv//tgBAiwj//7YAQIv//8gqQP8AHarK///aVED/ADtVlQj//9pWVv8AO1WV///tKyv/AFWqNYv/AG/+1QiL/wBwAOr/ABLU1f8AVYCK/wAlqar/ADsAKgj/ACWrwP8AOwAq/wA31cD/AB2AFf8ASf/AiwiL//+3AIAV///UqkCL///f1Jb//+qqi///6v7r///VVRYI///rAQD//9VVFv//9YCA//+6qgCL//+f/usIi///oAEA/wAKf4D//7qAVv8AFP8A///U/6sI/wAVARX//9T/q/8AICtq///qf9b/ACtVwIsI/wAqquqL/wAf/6r/ABWAKv8AFVRq/wArAFUI/wAVVGr/ACsAVf8ACqo1/wBFf6qL/wBf/wAIi/8AX1ZA///1Vcv/AEUrSv//6quW/wArAFUI///qq5b/ACsAVf//4ABW/wAVgCr//9VVFosIDvhQ/wGeAGD/Apz+gBWL//+7AYAF+47//Z4AoAX//6wA4P8AHADABf8A8P3A/wI//SAF//7YAQCLBYvWBf8BhQBgiwUO+In/AaP+wP8CVP9AFf/++wBgiwWL//87AMAF/wAiACr/ABFVgP8AI6tA/wAIqsD/ACVWVYsI/wA5VRWL/wAuAAr//+0qIP8AIqsA///aVEAI/wAiqwD//9pWVv8AEVWA///MK0CL//++ACsIi///0/9r///2VQD//9jU6///7KoA///dqmsI///sqgD//92qa///5NTL///lVOv//9z/lv//7P9rCP//3QGr///tAYD//9eAS///9oDA///R/uuLCP//11WWi///26r2/wAHKmD//+AAVv8ADlTACP//4ABW/wAOVtX//+JVNv8AFSq////kqhb/ABv+qgj/ADYBAP8ANQDABf8AFVRq///qqYD/ABX/QP//8CnW/wAWqhX///WqKwj/ABasKv//9axA/wAZqtX///rWIP8AHKmAiwj/ACqq6ov/ACGACv8ADVWK/wAYVSr/ABqrFQj/ABhVKv8AGqsV/wAMKpX/ACWqtYv/ADCqVQiL/wAwqlX///T/Vv8AI1TK///p/qv/ABX/QAj//+oAwP8AFgFV///iVkD/AAsAqv//2qvAiwj//+6qgIv///AAK////io2///xVdb///xUawj///FV1v///FRr///wVZb///oqQP//71VW///4ABYI//+3/aCLBYv/AVD/4AX/AWn/4IsF///y/+D//7gAwAUO+Cf/ADv/YP8BEf/AFYv/AE4AwAX/ARsCAIsFi///sf9ABf/+5P4AiwUO+pD/Ag4AQP8CvQBAFf8AWVTAi/8ATKoK///uKmD/AD//Vf//3FTACP8AQAFq///cVMD/ADBV9f//0Cor/wAgqoD//8P/lgj/ACCqgP//xAGr/wAQVUD//75Vlov//7ipgAiL//+pVpb//+9VVv//uKqL///eqqv//8f+gAj//96qq///yACW///PAED//+QAS///v1XWiwj//9qpq4v//+LUS/8AClTK///q/uv/ABSplQj//+sBAP8AFKuq///ygMv/ABgAyv//+gCW/wAbVeoI///zVlb//+Krq///7dT2///n1Yv//+hTlv//7P9rCP//6FWr///s/2v//+Iri///9n+2///cAWuLCP//yqnWi///1dQr/wAT/8r//+D+gP8AJ/+VCP//4QCW/wAoAar///CAS/8ANVYqi/8AQqqqCIv/AFP+Ff8AE//K/wBAf3X/ACf/lf8ALQDVCP8AKAGq/wAtANX/ADSrVf8AFoBq/wBBVQCLCP8AHADAi/8AGlWq///8/0D/ABiqlf//+f6ACP8AGKqV///6AJb/ABn/Nf//9as2/wAbU9X///FV1giL//79AOAFi///1qrA/wAFqwr//+LVVv8AC1YV///u/+sI/wALVhX//+7/6/8AEQAV///3f/b/ABaqFYsI/wBGqZWL/wAjVMrWi/cqCIv/AECqKv//81VL/wA4VNX//+aqlv8AL/+ACP//5qyr/wAv/4D//9qqtv8AJSqV///OqMD/ABpVqgj//86q1v8AGlWq///Dqzb/AA0q1f//uKuWiwj//7arFov//7/U6///74AL///I/sD//98AFgj//8kA1v//3wAW///V1Tb//9JVYf//4qmW///FqqsI///iq6v//8Wqq///8VXW//+91XaL//+2AEAIi///tgBA/wAOKgr//75/QP8AHFQV///G/kAI/wAcVir//8cAVv8AKX/1///Tqwv/ADapwP//4FXACP8ANqvV///gVcD/AEFWCv//8Crg/wBMAECLCP8AP1SAi/8AQABg/wALVQr/AECsQP8AFqoVCKT//7kBAAX//9qpq///8quA///c1OD///YrVv//3wAW///5qysI///fABb///mpFv//2oAA///81Iv//9X/64sI//+mq0CL//+xAAv/ABKAdf//u1TW/wAlAOoI//+7VNb/ACT+1f//yn8g/wA01QD//9mpa/8ARKsqCP//2auA/wBEqyr//+zVwP8AT6rKi/8AWqpqCIv/AFapav8AEypA/wBOVSD/ACZUgP8ARgDVCP8AJlaV/wBGANX/ADXWSv8ANyrq/wBFVgD/AChVAAj/AEVWAP8AKFUA/wBO//X/ABQqgP8AWKnqiwj//94A4P/9kQCAFb2L/wAj/6D/AByqiv8AFf9A/wA5VRUIi/8A9v9ABf//6gDA/wAKAGr//+hVq/8ABQA1///mqpaLCP//qKmri///1FTW//+/AGuL//9+ANYIi1n/AAf/6v//2f/g/wAP/9X//+X/wAj/AA//1f//5f/A/wAXVfX///L/4P8AHqwViwgO+PT/AZQBAP8BbABgFf8AL1Sq///4ABb/ACZUgP//71VW/wAdVFX//+aqlgj/AB1Wav//5qqW/wAOqzX//9iqNov//8qp1giL//99VgD//6UAK///vqsA//9KAFaLCP//Qf9giwWL/wKxAGAF/wCjACCLBf8AV1RAi/8AQtRV///xqjb/AC5Uav//41RrCP8ALlaA///jVoD/ABcrQP//1FXgi///xVVACIv//9gAa///84AA///eqqty///lVOsIcv//5VTr///hgLb//+7/6///3AFr///4qusI//8u/cD3jhWL//8m/uAF/wBoAQCLBf8AJ/+Vi/8AINU1/wAJqwD/ABmq1f8AE1YACP8AGarV/wATVgD/AAzVav8AG1Tgi/8AI1PACIv/ACgBqv//8n/A/wAbq1X//+T/gP8AD1UACP//5QGW/wAPVQD//9cq4P8AB6qA///JVCuLCP//sf9AiwX/AF8B4P/95f/gFf8AN/9qi/8AKtSV/wAIVVX/AB2pwP8AEKqqCP8AHavV/wAQqqr/AA7V6v8AH6pAi/8ALqnVCIv/AC1WQP//8ao2/wAgqoD//+NUa/8AE/7ACP//41aA/wAUANX//9qqtv8ACgBq///R/uuLCP//jv/giwWL//8IAIAF/wBfAeCLBQ742v8B5v/gixX//7D/AIsF///5AWD/AFH+oAX//+v/K///31WA///o/3b//+gq9v//5f/A///xAGsI///mAdb///EAa///4FXA///4gDb//9qpq4sI///SAQCL///cAGD/AA3/Vf//5f/A/wAb/qoI///l/8D/ABwAwP//8v/g/wAnqzWL/wAzVaoIi/8BegDABf8AW/4AiwWL//6P/qAFi///3AFr/wAGVNX//+Z/4P8ADKmq///w/lYI/wAMq8D///EAa/8AFKuq///4gDb/AByrlYsI/wAzVaqL/wAr/4r/AB5VoP8AJKlq/wA8q0AIi/8BeABABf8AXAEgiwWL//3w/4AFDvhJ/wGUAQD/Ag8AgBWL//+5/iAF+6f//oQB4AX/ARX9oIsF///1AGD//7L/gAX//o0BAIsFi/8ARP6ABf8BEf/A/wF8AUAF//8E/8CLBYv/AE4AwAX/AWQBgIsFDvfY/wCh/+D/AcYBABX/AB//qov/ABqqCv//9SoL/wAVVGr//+pUFgj/ABVWgP//6lYr/wAKq0D//+UrQIv//+AAVgiL///gAFb///VUwP//5VTr///qqYD//+qpgAj//+qrlv//6quW///lVfb///VVy///4ABWiwj//+AAVov//+VU6/8ACtTq///qqYD/ABWp1Qj//+qrlv8AFanV///1Vcv/ABrVyov/ACABwAiL/wAf/6r/AAqqNf8AGqoK/wAVVGr/ABVUagj/ABVWgP8AFVaA/wAaqxX/AAqrQP8AH/+qiwgO+Or/AfcAwP8CDwCAFYv//Rv/YAX//6P+4P8ACv+gBYv/AQ//QAX//+6qgP//5gHW///qf9b//+vVgf//5lUr///xqSsI///mVSv///GrQP//44Ar///41aD//+CrK4sI///BVlaL///PKvb/ABiqlf//3P+W/wAxVSoI///c/5b/ADFVKv//7n/L/wBCVUCL/wBTVVUIi/8ANgEA/wAIVVX/ADAAiv8AEKqq/wAqABUI/wAQqqr/ACoAFf8AF//A/wAg1TX/AB9U1f8AF6pVCP8AH1bq/wAXqlX/ACSqdf8AC9Uq/wAp/gCLCP8AOAGAi/8AMVY1///oVav/ACqq6v//0KtWCP8ABv6g/wA6/yAF/wBPAQCLBf//IgDA//4t/yAV/wAb/qqL/wAX/rX/AAZ/iv8AE/7A/wAM/xUI/wAUANX/AA0BKv8AE1YA/wATgLX/ABKrKv8AGgBACIv/AQH+4AX//+6qgP8AFqwq///tf4v/ABEqyv//7FSW/wALqWoI///sVqv/AAurgP//6dYL/wAF1cD//+dVa4sI///XVZaL///gf2v//+7/6///6alA///d/9YI///pq1b//93/1v//9NWr///NVSuL//+8qoAIi///u/+r/wAKVMr//81VK/8AFKmV///eqqsI/wAUq6r//96qq/8AHavV///vVVb/ACasAIsIDvjm/wFP/6D/AhsAYBX/ADwAaov/AC+qFf//59SA/wAjU8D//8+pAAj/ACNV1f//z6sW/wARqur//7yA1ov//6lWlgiL///JVCv///eqq///z9TA///vVVb//9ZVVgj//+9VVv//1lVW///oAED//9+q6///4Ksr///pAIAI///gqyv//+kAgP//21WL///0gED//9X/64sI///Iq2uL///RVSH/ABdU6v//2f7W/wAuqdUI///3AOD//8YBIAX//67+gIsFi/8C4wBgBf8AXAEg/wAK/6AFi//+3v+gBf8AJf8V/wA0AID/ADGqlf8AGgBA/wA9VhWLCP//3wEg//4h/0AV/wAoqmqL/wAf1PX/ABB/9f8AFv+A/wAg/+oI/wAW/4D/ACD/6v8AC3/A/wAzKvWL/wBFVgAIi/8AR1Rq///1VMD/ADN/Vf//6qmA/wAfqkAI///qq5b/AB+sVf//4atr/wAP1ir//9irQIsI///RViuL///XACv//+SqFv//3Kor///JVCsIi///A/+ABf8ADf9V///qAMD/ABEpwP//7qqA/wAUVCr///NUQAj/ABRWQP//81ZW/wAVgTX///mrK/8AFqwqiwgO+WH/Arj/QP8CDwCAFf//iAFA//3w/4AF+xGLBf//o/7g/wG7/oAF//+hAUD//kQBgAX//4YAwIsF//+E/WD/Ag8AgAX/AFwBIIsF/wBe/sD//jD/4AX/AGgBAP8BzwAgBf8AZwDAiwX/AGL/wP/+MP/gBf8AX/8A/wHPACAF/wBYACCLBQ73rP8AuP9g/wAf/qAVi///z1Wr///5/4v//9kAq///8/8W///iq6sI///0ASv//+Kplv//7oDW///oKvb//+kAgP//7axWCP//6QCA///tqkD//9/VoP//7X+L///WqsD//+1U1gj//+T/gP8AQwEgBf8AGgBA/wAL/tX/ABP/yv8AC9Uq/wAN/1X/AAurgAj/AA3/Vf8AC6lq/wAKf4D/ABBVQP8ABv+q/wAVARUI/wAHAcD/ABT/AP8AA4Dg/wAc1UCL/wAkq4AIi/8B9QBABf8AW/4AiwWL//4Q/iAF///SAQD/AuwCoBX/ABNT6ov/AA+pYP//+f+L/wAL/tX///P/Fgj/AAwA6v//8/8W/wAGAHX///EAa4v//+4BwAiL///t/6v///n/i///8SoW///z/xb///RUgAj///QBK///9FaW///wVqD///orS///7KwWiwj//+1U1ov///Cp9v8ABdS1///z/xb/AAupagj///QBK/8AC6uA///6AJb/AA7V6ov/ABIAVQiL/wAR/kD/AAX/av8ADv+V/wAL/tX/AAwA6gj/AAwA6v8ADADq/wAPVgr/AAYAdf8AEqsqiwgO+LX/AQ3+wP8CvQBAFf8ALgEVi/8AJ1XK///5f2v/ACCqgP//8v7WCP8AIKqA///zAOv/AB+qQP//69WA/wAeqgD//+SqFgj//8wCoP//xgEgBf//5f/A/wAUqZX//+Z/4P8ADypKcv8ACasACHL/AAmrAP//5So2/wAE1YD//+NUa4sI///b/1aL///iVTb///eqq///6KsW///vVVYI///oqxb//+9VVv//9FWL///nqtaL///gAFYIi///6/8r/wAD//X//+8qoP8AB//q///yVhYI/wAH/+r///JWFv8ADtTg///zgAD/ABWp1f//9KnrCP8AFavq///0qev/AB+Alf//9AAg/wApVUD///NWVgj/ACtVwP//8quA/wAj/6D///GqNv8AHKmA///wqOsI/wAcq5X///CrAP8AFytA///q1UD/ABGq6v//5P+ACP8AEarq///lAZb/AAjVdf//3dYri///1qrACIv//9f+Vv//9ipL///cqiv//+xUlv//4VYACP//7FSW///hVgD//+Op1v//6ABA///a/xb//+6qgAj//9sBK///7qqA///UKyv///dVQP//zVUriwj//6Cr1ov//7IAS/8AHarK///DVMD/ADtVlQj/ADQAgP8AOf7gBf8AG/6q///pVev/ABxVIP//7tU2/wAcq5X///RUgAj/AByrlf//9FaW/wAf/6r///orS/8AI1PAiwj/ACqq6ov/ACNV1f8ACn+A/wAcAMD/ABT/AAj/ABwAwP8AFQEV/wAOAGD/AB6AVYv/ACf/lQiL/wAWqhX///uqoP8AEtTV///3VUD/AA7/lQj///dVQP8ADwGq///xKhb/AA2AQP//6v7r/wAL/tUI///rAQD/AAwA6v//4X+r/wAL/+D//9f+Vv8AC/7VCP//uVZr/wAVVoD//8xV9v8AGarV///fVYD/AB3/Kgj//99VgP8AHf8q///vqsD/ACiqaov/ADNVqgiL/wAiqwD/AAkp1f8AHwB1/wASU6r/ABtV6gj/ABJVwP8AG1Xq/wAZqtX/ABVVdf8AIP/q/wAPVQAI/wAg/+r/AA9VAP8AJYAA/wAHqoD/ACoAFYsIDvme/wLMAOCLFf//o/7giwX//+gAQP8BNv+gBf//9f+W/wB5/0D///pU9v8AXasq///+qlb/AEFXFQj//2sAQP/9/f+gBf//pv+giwX//2MBYP8CAwCgBYv//6yqq///+6qg//+fqov///dVQP//kqprCP//6QCA//7P/wAF//+l/2CLBf8AOP6g/wKxAGAF/wCAAMCLBf8AkQHg//4K/8AF/wCKACD/AfUAQAX/AID94IsF/wA5AcD//U7/oAUO+JT/ALr/4PmCFYv9ggX//6P+4IsFi/8C4wBgBf8AXAEg/wAK/6AF/wEvAMD//yEAgBX//z3+YP//Fv4ABf8A2ADg//7aAYAF//+SAKCLBf//LwDg/wEgACAF/wDB/oD/AO8AYAX/AGcAwIsFDvjx/wEuAID/ASQBIBX//5T+QIsFi//+2/7gBf//oQFAiwWL/wKxAGAF/wC1AYCLBf8AVf6Vi/8AQSpK///vqsD/ACxWAP//31WACP8ALFYA///fVYD/ABYrAP//z1Sgi///v1PACIv//9AAgP//86mr///Y/6D//+dTVv//4f7ACP//51Vr///iANb//9qqtv//6VXrWf//8KsACP8AugLA//7LAOAF//+O/+CLBf//Wv9g/wEkASAF///1AGD/AEj/gBW9i/8AJaq1/wAKKhX/ABlVav8AFFQqCP8AGVVq/wAUVkD/AAyqtf8AINU1i/8ALVQqCIv/ACqq6v//8yqW/wAe1cD//+ZVK/8AEwCVCP//5lUr/wATAJX//9bVdv8ACYBK///HVcCLCP//qv2AiwWL+44F/wBgAiCLBQ742f8BGQGA/wKxAGAV/wBVU8CL/wBB/sr//+4qYP8ALqnV///cVMAI/wAuq+r//9xUwP8AF1X1///K1ZaL//+5VmsIi///tKqW///nqtb//8f/i///z1Wr///bVIAI///PVav//9tWlv//v1TL///tq0v//69T64sI//+pACCLBYv//wL/QAX//6EBQIsFi/8CsQBgBf8AtQGAiwX///z/QP/+lwBgFf8AN1SVi/8AKinA/wAKqjX/ABz+6v8AFVRqCP8AHQEA/wAVVoD/AA6AgP8AJlWKi/8AN1SVCIv/ADFVKv//8X+A/wAjqjX//+L/AP8AFf9ACP//4wEW/wAWAVX//9aBFv8ACwCq///KARaLCP//qv2AiwWL//7hACAF/wBTAgCLBQ57m/g8mfdumZGbuZMG+4iL+IyR9xqLB3ub+DSX926XnZuzlQj7hov4hpL3F4sJrwr3HAsAAAAAAyAAAAI9AAAB3gAAAkgAAANZAAACUgAAASUAAAEaAAAB0wAAAkoAAAIhAAACVgAAAQkAAAIwAAACSgAAAiAAAAFpAAACCAAAAYIAAAFPAAAB7AAAAeUAAADwAAACFwAAAewAAADwAAABJwAAAfIAAAIVAAACLgAAAbwAAAH1AAABkwAAA/wAAAJgAAACRgAAAbUAAAFEAAACVgAAAlIAAALNAAABGAAAAiEAAAMKAAACAAAAAl0AAAJFAAA=)format("opentype");font-display:swap}@font-face{font-family:fnt2;src:url(data:font/otf;base64,T1RUTwAJAIAAAwAQQ0ZGID2GEB0AAAPkAAAvdE9TLzJR1kQsAAABAAAAAGBjbWFwBr4HmAAAAuwAAADYaGVhZGIcQzEAAACcAAAANmhoZWEDLQKbAAAA1AAAACRobXR4RLcAAAAAM1gAAACIbWF4cAAiUAAAAAD4AAAABm5hbWUVxnaIAAABYAAAAYxwb3N0AAMAAAAAA8QAAAAgAAEAAAABAAA6zqk1Xw889QADA+gAAAAAAAAAAAAAAAAAAAAA//v/JgMKAysAAAADAAIAAAAAAAAAAQAAAyv/JgAAA1IAAAAAAAAAAQAAAAAAAAAAAAAAAAAAACIAAFAAACIAAAACAj0BkAAFAAACigJYAAAASwKKAlgAAAFeADIA+QAAAgAFAAgAAAkAAwAAAAMAAAAAAAAAAAAAAAAzNTc5AAAAIAB1Ayv/JgDIAysA2gAAAAEAAAAAAaACpAAAACAAAAAAAAwAlgABAAAAAAAAABMAAAABAAAAAAABAAgAEwABAAAAAAACAAcAGwABAAAAAAADABAAIgABAAAAAAAEABAAMgABAAAAAAAGABAAQgADAAEECQAAACYAUgADAAEECQABABAAeAADAAEECQACAA4AiAADAAEECQADACAAlgADAAEECQAEACAAtgADAAEECQAGACAA1kNvcHlyaWdodCAtIFVua25vd25HZW5lcmljMlJlZ3VsYXJHZW5lcmljMi1SZWd1bGFyR2VuZXJpYzItUmVndWxhckdlbmVyaWMyLVJlZ3VsYXIAQwBvAHAAeQByAGkAZwBoAHQAIAAtACAAVQBuAGsAbgBvAHcAbgBHAGUAbgBlAHIAaQBjADIAUgBlAGcAdQBsAGEAcgBHAGUAbgBlAHIAaQBjADIALQBSAGUAZwB1AGwAYQByAEcAZQBuAGUAcgBpAGMAMgAtAFIAZQBnAHUAbABhAHIARwBlAG4AZQByAGkAYwAyAC0AUgBlAGcAdQBsAGEAcgAAAAEAAwABAAAADAAEAMwAAAAeABAAAwAOACAANAA3AEEAQwBGAEkATQBQAFMAYQBpAG8Adf//AAAAIAAvADYAQQBDAEYASQBMAFAAUwBhAGMAbABy//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgAeACgAKgAqACoAKgAqACwALAAsACwAOAA+AEQABwADAAEABQAEABsAAgAGABYAGgAKABgAFAAVABwAIAAXABIAEQAhAA0AHQATAA8AEAAeAB8ADgAJAAwAGQAIAAsAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEBAABBAAAAAEAAAARR2VuZXJpYzItUmVndWxhcgABBAAAAAEAAAAvHuWgBIj/HuIYoAX/HneKAD8egS8FHgoAH4uLHgoAH4uLDAf3Kg/3LxG+HC8/EgAEBAAAAAEAAAARAAAAGQAAAB4AAAAmR2VuZXJpYzItUmVndWxhckdlbmVyaWMyQWRvYmVJZGVudGl0eQAAAgABACAAIgQAAAABAAAABAAAAckAAAJKAAACgAAABEsAAASTAAAHUwAAB1YAAAiFAAAKaQAADGwAAA1oAAAOUgAAEEcAABFSAAASWQAAE2YAABVCAAAXnQAAHGAAAByKAAAcxgAAHREAACBNAAAgoQAAI2EAACPbAAAmsAAAJ4oAACiSAAApRwAAKw0AACwXAAAuFvm0DvjR/wEd/6D/Aqz/YBX/AE6rlYv/ADvVtf//4f/L/wAo/9X//8P/lgj/ACj/1f//xAGr/wAUf+r//6mq9ov//49UQAiL//+Oq4D//+uAFv//qSrW///XACv//8OqKwj//9cAK///w6or///EKkv//+HVFv//sVRriwj//7FWgIv//8QqS/8AHirq///W/hb/ADxV1Qj//9cAK/8APFXV///rgBb/AFbVKov/AHFUgAiL/wBwq8D/ABR/6v8AVlUK/wAo/9X/ADv+VQj/ACkB6v8APABq/wA71bX/AB4ANf8ATqmAiwiL//+fAMAV///aAOuL///kVbb//+zUtv//7qqA///ZqWsI///uqoD//9mrgP//91VA//+/KyCL//+kqsAIi///o//r/wAIqsD//76p9v8AEVWA///ZVAAI/wARVYD//9lWFv8AG6pK///sqwv/ACX/FYsI/wAmASqL/wAbqkr/ABMqQP8AEVNq/wAmVIAI/wARVYD/ACZWlf8ACKrA/wBBgMCL/wBcquoIi/8AXAAV///3VUD/AED/lf//7qqA/wAl/xUI///urJb/ACYBKv//5FW2/wATAJX//9n+1osIDvi6+KH/APwAgBWL//+eAIAF//+u/oCLBYv//2X/AAX7EYsFi/8AmgEABf/+4gBgiwWL/wBYACAF/wDEAiD/Abv+gAX/AGz/IP//1v8gBf//VADA//53AcAF/wCZ/eCLBf8ADQAg/wCo/oAF/wBu/6CLBYv//1cBgAX/AFEBgIsFDvic/wFB/0D/Ayv/4BX/AG3/YHIF//8XASD//IEBQAX//5EAYP8AGgBABf8A6f8g/wN9/oAFDviP/wDo/uD/Aqz/YBX/AC1WQIv/ACcrFf//96qr/wAg/+r//+9VVgj/ACD/6v//71VW/wAZKrX//+lU4P8AEVWA///jVGsI/wARVYD//+NWgP8ACKrA///gAFaL///cqisIi///2gDr///31WD//9uAQP//76rA///c/5YI///vqsD//9z/lv//5NTL///ZKlb//9n+1v//1VUWCP//2gDr///VVyv//8hWAf//x6sr//+2qxb//7n/Kwj/ASAAIIsF///x/6D//5r/wAX//lz+YIsFi/8AXf6ABf8AVVXV/wBWq4D/AD0qVf8AQCsV/wAk/tX/ACmqqgj/ACUA6v8AKaqq/wAaVar/ACOqNf8AD6pq/wAdqcAI/wAPqmr/AB2r1f8AB9U1/wAe1cCL/wAf/6oIi/8AHqoA///3Kov/ABf/wP//7lUW/wARVYAI///uVyv/ABFVgP//6IBh/wAIqsD//+KplosI///l/8CL///pKiv///p/q///7FSW///0/1YI///sVqv///UBa///64Eg///t1gD//+qrlv//5qqWCP//sf9A/wA9/+AF/wA4qkD/AElU6v8ASKoV/wAkqnX/AFip6osIDvhW/wFjAUD/AqD/gBWL//1fAIAF//+B/8CLBYv/Ah/+gAX7Kv//pQJABf//x/6A/wBV/6AF/wDbAaD/AIX/IAX/AHEAIIsFDvi6/wFIAMD/Ab//gBX/ACNV1Yv/ACAqYP//93/2/wAc/ur//+7/6wj/AB0BAP//7v/r/wAW1dVy/wAQqqr//98AFgj/ABCqqv//3wAW/wAIVVX//9iAi4v//9IBAAiL///RVBb///ZVAP//1imW///sqgD//9r/Fgj//+yqAP//2wEr///k1Mv//+MAC///3P+W///q/usI///dAav//+sBAP//2Csg///1gID//9NUlosI//+tVYCL///C1KD/ABz/9f//2FPA/wA5/+oI///YVdb/ADn/6v//7Crr/wBPqsqL/wBlVaoIi/8ASqqV/wALKlX/AEF/tf8AFlSq/wA4VNUI/wAWVsD/ADhW6v8AIAC1/wArqyr/ACmqqv8AHv9qCP8AKaqq/wAe/2r/ADDVCv8AD3+1/wA3/2qLCP8AN1aqi/8AMQDK///xq0D/ACqq6v//41aACP//z/1g//+w/wAF///hVgD/ABIAVf//36rr/wAJACr//93/1osI///VVRaL///d1SD//+zUtv//5lUr///ZqWsI///mVSv//9mrgP//8YCL///LKwD///yr6///vKqACP8AKKpq/wAxVSr/ADJVav8AGKqV/wA8AGqLCP//1/9g//6QAcAV/wAhVVWL/wAZKrX/AA0pyv8AEQAV/wAaU5UI/wARABX/ABpVqv8ACIAK/wAj1fWL/wAtVkAIi/8ALf8A///4Ksv/ACDVNf//8FWW/wATq2oI///wVZb/ABOrav//6Sor/wAJ1bX//+H+wIsI///pVeuL///qf9b///nU1v//66nA///zqasI///rq9b///OrwP//7dYA///vKqD///AAK///6qmACP8AAVWq//+3Vev/AAkq4P//y4Br/wARABX//9+q6wj/ABEAFf//36rr/wAbf5X//+/Vdv8AJf8ViwgO944O+Av/AXwBQKQV///tVNb///KrgP//6ymg///2AKD//+j+a///+VXACP//6QCA///5U6v//+iAYP///KnW///oAECLCP//y/+A/wAAqtX//9h/gP8ADtTg///k/4D/ABz+6gj//+UBlv8AHQEA///ygMv/ACrVoIv/ADiqQAiL/wEXAQAF//+tASCLBYv/AFwBIAX/AFL+4IsFi/8AdP4ABf8AgADA/wAPAKAFi///fAFgBf8Aev+AiwX///L/4P//o/7gBf//kgCgiwWL//7r/8AFi///5f/A/wAEgBX//+1U1v8ACQAq///0qesI/wAJACr///SsAP8ADioK///6VgD/ABNT6osI/wATVgCL/wAVAAr/AAZU1f8AFqoV/wAMqaoI/wAtAeD//64BYAUO+Nz/ASUBYP8CH/6AFf8ATf6qi/8APNTq///nKrb/ACurKv//zlVrCP8AK6sq///OVWv/ABXVlf//u9YAi///qVaWCIv//8ipVv//9f+W///PKev//+v/K///1aqACP//7AFA///VrJb//+NVdv//3yrL///aqav//+ipAAj//9qpq///6KsW///Tqwv///RVi///zKxriwj//7H/QIv//8L/Vv8AGNVK///T/2v/ADGqlQj//9QBgP8AMaqV///qAMD/AESAdYv/AFdWVQiL/wA3VJX/AAn/YP8AMKpV/wAT/sD/ACoAFQj/ABQA1f8AKgAV/wAc1UD/ACCqgP8AJamq/wAXVOoI/wAlq8D/ABdU6v8ALIC1/wALqnX/ADNVqosIi///nwDAFf//s1Tri///2ap2///DVcuL//+Gq5YIi///wVRA/wAJf0D//9HUNv8AEv6A///iVCsI/wATAJX//+JWQP8AHIDg///xKyD/ACYBKosI/wAl/xWL/wAcf9X/AA7/lf8AEwCV/wAd/yoI/wATAJX/AB4BQP8ACYBK/wAuARWL/wA+AOoIi/8APf7V///2f7b/AC3USv//7P9r/wAdqcAI///s/2v/AB2r1f//49WW/wAO1er//9qrwIsIDvjM/wFY/sD/AsIBgBX/ACoAFYv/ACSqdf//+f+L/wAfVNX///P/Fgj/AB9W6v//8/8W/wAeqwr//+2qQP8AHf8q///nVWsI//+9AgD//7ICYAX//9dTgP8AIKqA///VVRb/ABBVQP//01ariwj//8yqVov//9bUa///61Vg///g/oD//9aqwAj//+EAlv//1qrA///wgEv//77/YIv//6dUAAiL//+pVpb/AA9VAP//v6tA/wAeqgD//9X/6wj/AB6sFf//1f/r/wApVkr//+r/9v8ANACAiwj/ABtV6ov/ABhVKv8ABNR1/wAVVGr/AAmo6gj/ABVUav8ACasA/wAWqyD/AA3Vqv8AGAHV/wASAFUI/wA9/+D//7H/QAX//+ipAP//6ABA///ifuD//+wANv//3FTA///wACsI///cVtb///AAK///2Csg///4ABb//9P/a4sI///D/5aL///K/0D/AA3/Vf//0f7r/wAb/qoI///SAQD/ABwAwP//3FXL/wApKor//+aqlv8ANlRVCP//5qyr/wA2Vmr///NWVv8AQYC/i/8ATKsVCIv/AEtVav8ADSnK/wBAqir/ABpTlf8ANf7qCP8AGlWq/wA2AQD/ACP/oP8AKQDg/wAtqZX/ABwAwAj/AC2rqv8AHADA/wAzgF//AA4AYP8AOVUViwgO+NX4iIsV//+RAGCLBf//+P5A/wBJ/8AF///srBb//+IA1v//6Ss2///pqkv//+WqVv//8VPACP//5apW///xVdb//+DU1v//+Krr///b/1aLCP//0KtWi///24BA/wAOf3X//+ZVK/8AHP7qCP//5lUr/wAdAQD///Mqlv8AKCtVi/8AM1WqCIv/AXwBQAX/AIAAwIsFi//+k/+gBYv//+H+wP8ABSrq///qqYD/AApV1f//81RACP8AClXV///zVlb/ABB/9f//+asr/wAWqhWLCP8AKKpqi/8AI6o1pP8AHqoAvQiL/wF0AmAF/wCAAMCLBYv//e7/AAUO+B7/AVIAIP8CHwFgFf8AE1YAi/8AEarq///9qhb/AA//1f//+1QrCP//6f2g//+EAEAF///wACv/AAQBAP//8FWW/wACAID///CrAIsI///gqyuL///nVWv///TUoP//7f+r///pqUAI///t/6v//+mrVv//8atA///d1SD///VW1v//0f7rCIv//uYBYAX//3//QIsFi/8CEQEABf8Abv+giwX/AAv/4P//l/8ABf8ADKmq/wAl/xX/ABJUtf8AHSqq/wAX/8D/ABRWQAj/ABgB1f8AFFZA/wAbq1X/AAorIP8AH1TViwgO+Ln/Af7/oP8BFQCAFYv///lVwP///v/A///uqoD///3/gP//4/9ACP/+tAFgiwX/AAP+6v//zKpW/wANVID//9tUgP8AFqoV///p/qsI/wAWrCr//+oAwP8AHgE////1AGD/ACVWVYsI/wAXVOqL/wAV/0D/AAPVQP8AFKmV/wAHqoAI/wAUq6r/AAeslf8AFgBK/wAL1jX/ABdU6v8AD//VCP8ANQDA//+3AIAF///FVUD//9CpQP//vqn2///oVKD//7f+q4sI//+vVgCL///B1Wv/ABiqlf//1FTW/wAxVSoI///UVuv/ADFVKv//6it2/wBDVYCL/wBVVdUIi/8ANgEA/wAJVIr/ADB/oP8AEqkV/wAq/kAI/wASqyr/ACsAVf8AGwCA/wAhqsD/ACNV1f8AGFUqCP8AI1XV/wAYVSr/ACoAFf8ADCqV/wAwqlWLCP8ASf/Ai/8AOVUV///ogGD/ACiqav//0QDACP8AKKpq///RAMD/ABRVNf//voBLi///q//WCP//gP+A/wAk/+AVi/8AXKrq///dq3b/AC5Vdf//u1briwj//+CpFov//+d/Fv//9H82///uVRb//+j+awj//+5XK///6QCA///1gID//9sq1v///KnW///NVSsI/wDP/uCLBYv/AAYBgAUO+Nn/AWb/IP8CH/6AFf8AL1bAi/8AJNUq///x1Ov/ABpTlf//46nWCP8AGlWq///jq+v/AA0q1f//2ICLi///zVUrCIv//oEBIAX//4ACYIsFi/8BawAgBYv/AB9U1f//+n+r/wAV/0D///T/Vv8ADKmqCP//9P9W/wAMq8D//+/Vdv8ABlXg///qq5aLCP//6f6ri///7Cng///5KgD//+5VFv//8lQACP//7lcr///yVhb//+7WQP//7Cv2///vVVb//+YB1giL//6P/qAF//9//0CLBYv/AhEBAAX/AG7/oIsF/wAJ/2D//7r+YAX/ACtVwP8AN/9q/wA1qor/ABv/tf8AP/9ViwgO+Nn/AWb/IP8CH/6AFf8ALqvqi/8AJKp1///xqjb/ABqpAP//41RrCP8AGqsV///jVoD/AA1Viv//2KtAi1kIi//+gQEgBf//gAJgiwWL/wFrACAFi/8AH1TV///6f6v/ABX/QP//9P9W/wAMqaoI///0/1b/AAyrwP//79V2/wAGVeD//+qrlosI///qqYCL///sVJb///kqAP//7f+r///yVAAI///uAcD///JWFv//7quL///sgFb//+9VVv//5qqWCIv//o8BgAX//3//QIsFi/8C5ACgBf8AgADA/wANACAFi//+4QAgBf8AKqjV/wAz/mr/ADNUoP8AGf81/wA8AGqLCA73rv8AzQFA/wIRAQAVi//97v8ABf//f/9AiwWL/wIRAQAF/wCAAMCLBf//vv9g/wEL/kAV/wAX/8CL/wATf6r///iANv8ADv+V///xAGsI/wAO/5X///EAa/8AB3/K///tf4uL///p/qsIi///6gDA///4gDb//+2rS///8QBr///xVdYI///xAGv///FV1v//7IBW///4quv//+gAQIsI///oqxaL///s1Lb/AAdVFf//8P5W/wAOqioI///xAGv/AA6qKv//+IA2/wASVLWL/wAV/0AIi/8AFgFV/wAHf8r/ABKAdf8ADv+V/wAO/5UI/wAPAar/AA7/lf8AEytK/wAHf8r/ABdU6osIDvhy/wEiAKD/Ah/+gBX/ACKrAIv/AB8qIP//+v/L/wAbqUD///X/lgj/ABurVf//9gGr/wAaKvX///BVlv8AGKqV///qqYAI///HAWD//7MCoAX//+3/q/8ADVSA///uqoD/AAmp9f//71VW/wAF/2oI///vVVb/AAYBgP//7apA/wADAMD//+v/K4sI//+wq6uL///YVdb//8OqK4v//4dUVgiL///Cqev/AApUyv//09S2/wAUqZX//+T/gAj/ABSrqv//5QGW/wAdVV////KAy/8AJf8Viwj/ABKrKov/ABEqyv8AAv+1/wAPqmr/AAX/agj/AA+qav8ABf9q/wASgHX/AAmrAP8AFVaA/wANVpUI/wA4/qD//67+gAVZ///XVZb//8cAVv//66rL///AAKuLCP//zVUri///0/9r/wALKlX//9qpq/8AFlSqCP//2qvA/wAWVsD//+NVdv8AH9YA///r/yv/AClVQAj//+wBQP8AKVVA///2AKD/ADCqVYv/ADf/agiL/wA3/2r/AAn/YP8AMX/g/wAT/sD/ACsAVQj/ABQA1f8AKwBV/wAcqor/ACFVVf8AJVRA/wAXqlUI/wAlVlX/ABeqVf8AK6sq/wAL1Sq9iwgO+Lb/AdQBYP8AjACgFYv//+tUVv8AAypq///w1Kv/AAZU1f//9lUACP8ABlTV///2Vxb/AAoqFf//+IA2/wAN/1X///qpVgj//+UCoP//qwCgBf//4f7A/wACq1X//+d/Fv8AB1UV///s/2v/AAv+1Qj//+0BgP8ADADq///xgIv/ABJVwP//9f+W/wAYqpUI///t/6v//+VU6///6X+W///sKeD//+T/gP//8v7WCP//5QGW///zAOv//+HWIP//+YB2///eqquLCP//y1Sri///1lRL/wAO/5X//+FT6/8AHf8qCP//4VYA/wAeAUD///CrAP8AJ1XKi/8AMKpVCIv/ADlVFf8AFNVV/wAr1NX/ACmqqv8AHlSVCP8AKaqq/wAeVqr/ADuASv8ADytV/wBNVeqLCP8AQgDgiwWL/wAeAUAFi/8AIgAq///4KcD/ABfVCv//8FOA/wANqeoI///wVZb/AA2p6v//5tZW/wAG1PX//91XFosI///ZVACL///RVSD///aqa///yVZA///tVNYI///h/sD/AFcDAAX/AEH/1f8AGVNV/wBAAGD/AAypqv8APgDqiwj/AIdV1Yv/AEOq6v//w1XLi///hquWCIv//yIAwAX//xv/QP//wgAgFf8AK1XAi/8AIgAq/wAVquD/ABiqlf8AK1XACIv/AGr+oAX//8r/QIsF//+tVYCL///WqsD//+FU9ov//8Kp6wiL///mqpb/AAZU1f//7FWh/wAMqar///IAqwj/AAyrwP//8gCr/wASqyr///kAVv8AGKqViwgO+K3/Ahj/4P8B9QBAFf//3f/W///z/xb//8z/wP//+f+L//+7/6uLCP8AIKqA///xVdb/ABgqdf//7dT2/wAPqmr//+pUFgj/AA+sgP//6lYr/wAH1kD//+TV1ov//99VgAiL///dVQD///d/9v//4VT2///u/+v//+VU6wj//+7/6///5VcA///nVGD//+r/9v//36jW///wqOsI///fquv///CrAP//2iug///4VYD//9SsVosI///oAECL///q//b/AAKrVf//7f+r/wAFVqoI///xU8D///X/lv//+Kng///y/+CL///wACsIi///51Vr/wAVVXX///Oqtv8AKqrqiwj/AFEBgIsF/wAmqeqL/wAh1Gr///mqIP8AHP7q///zVEAI/wAdAQD///NWVv8AFoBq///uKmD/AA//1f//6P5rCP8AD//V///pAID/AAf/6v//5iuAi///41aACIv//8qp1v//6VTg///WgAv//9KpwP//4lZACP//0qvW///iVCv//76sC///8SoW//+qrECLCP//wqnri///z9TA/wAGVeD//9z/lv8ADKvACP//3P+W/wAMqar//+cqtv8AElXA///xVdb/ABgB1Qj///FV1v8AF//A///4quv/AB6qAIv/ACVUQAj/AHMAoIsFi///7VTW/wADf9X///FV1v8ABv+q///1VtYI/wAG/6r///VUwP8ADKq1///4ABb/ABJVwP//+qtrCP8AElXA///6qVb/ABp/Vf///VSr/wAiqOqLCP8AMKxqi/8AIlWV/wAGAHX/ABP+wP8ADADqCP8AFADV/wAL/tX/AAoAav8AEVWAi/8AFqwqCIv/ABP+wP//+FR2/wAPf7X///Co6/8ACwCqCP//8KsA/wALAKr//+mrVv8ABYBV///iq6uLCP//r/7AiwVZi///2lVL/wAJqfX//+aqlv8AE1PqCP//5qqW/wATVgD///NVS/8AGFUqi/8AHVRVCIv/ABKrKv8ABYBV/wASAFX/AAsAqv8AEVWACP8ACwCq/wARVYD/AA8qSv8ADqs1/wATU+r/AAwA6gj//+AAVv8AEKqq///ogGD/ABR/6v//8QBr/wAYVSoI///xAGv/ABhVKv//+IA2/wAdKqqL/wAiACoIi/8AJf8V/wAJVIr/ACFUSv8AEqkV/wAcqYAI/wASqyr/AByrlf8AGdWK/wAWKwD/ACD/6v8AD6pqCP8AIP/q/wAPqmr/ACXVav8AB9U1/wAqquqLCP8AOAGA///+rGv/AC0qgP8ABCqq/wAiU4D/AAmo6gj/ACJVlf8ACasA/wAlK6D/AA+AwP8AKAGq/wAVVoAI/wAf/qD//5n/gAX//ur/gP//0/5gFf//41aAi///6YCg///21SD//++qwP//7apACP//76rA///trFb///fVYP//54Eri///4VYACIv//9/+QP8ACFVV///mqYv/ABCqqv//7VTWCP8AEKqq///tVuv/ABb/gP//9qt2/wAdVFWLCP8AHqoAi/8AF1Tq/wAJKdX/AA//1f8AElOqCP8AEAHq/wASVcD/AAgA9f8AGdWKi/8AIVVVCIv/AEKqqv//3/9L/wAhVVX//7/+losIDve6/wDVACD/ArMA4BWL//1M/yAF//98AWCLBYv/ArMA4AX/AIP+oIsFDviO/wDVACD/ArMA4BWL//24/gAF/wEVAICLBf//8P9g//+UASAF//52AYCLBYv/ArMA4AX/AIP+oIsFDvhd/wGx/yD/AqD/gBWL//+l/2AF//8HAED//awBAAX//4sCAP8AJgAgBf8A6f8g/wIk/8AF//7kAOCLBYv/AGL/wAX/AZ/9wIsFDvjE/wEYAUD/AsIBgBX/ADCqVYv/ACpUdf//+P9L/wAj/pX///H+lgj/ACQAqv//8gCr/wAhqsD//+qqi/8AH1TV///jVGsI//+/AoBABf//51Vr/wAUq6r//+cqtv8ADwCgcv8ACVWVCHL/AAlVlf//5So2/wAEqsr//+NUa4sI///gAFaL///mKnb///jUlv//7FSW///xqSsI///sVqv///GrQP//9itW///r1YCL///l/8AIi///7qqA/wAD1UD///GqNv8AB6qA///0qesI/wAHqoD///SsAP8ADdSg///1Vcv/ABP+wP//9f+WCP8AFADV///1/5b/AB2qyv//9QBg/wAnVMD///QBKwj/AEQAVf//6qmA/wAzKvX//+V/oP8AIlWV///gVcAI/wAiVZX//+BVwP8AESrK///R1UCL///DVMAIi///1qrA///1f3b//9tVi///6v7r///gAFYI///rAQD//+AAVv//4dUW///nAAH//9ipK///7f+rCP//2KtA///t/6v//9FWK///9v/W///KARaLCP//y1Sri///0NUA/wAIgAr//9ZVVv8AEQAVCP//1lVW/wARABX//9wrFv8AFys////iANb/AB1Wagj/AEP+QP8ATABABf8AGqsV///pU9b/ABuqSv//7tQr/wAcqYD///RUgAj/AByrlf//9FaW/wAfq0r///orS/8AIqsAiwj/ACX/FYv/AB6qAP8ACQAq/wAXVOr/ABIAVQj/ABdXAP8AEgBV/wALq4D/ABlVaov/ACCqgAiL/wAT/sD///wAC/8AEH7q///4ABb/AAz/FQj///gAFv8ADQEq///yVQv/AAurf///7KoA/wAKVdUI///sqgD/AApV1f//5ABL/wAK1Or//9tWlv8AC1QACP//tqsW/wAWrCr//8r/Qf8AG1Xq///fU2v/AB//qgj//99VgP8AH/+q///vqsD/ACoAFYv/ADQAgAiL/wAl/xX/AAoAav8AIVRK/wAUANX/ABypgAj/ABQA1f8AHKuV/wAb1QD/ABZVtf8AI6kq/wAP/9UI/wAjq0D/ABAB6v8AKIDA/wAIAPX/AC1WQIsIDvh9/wBRAYCLFYv/ArMA4AX/AYb9wIsF///x/6D//54AgAX//wsBQIsFi///MP5ABf8A1QAgiwWL//+eAIAF//8q/+CLBYv//t//4AX//3wBYIsFDvhw/wDz/oD/Ah/+gBX/AEdWgIv/AD6qtf//6wEA/wA1/ur//9YCAAhZQAX//9Kr1v8AHKmA///Tqwv/AA5UwP//1KpAiwj//+aqlov//+xUlv//+yqA///x/pb///ZVAAj///IAq///9lUA///5AFb///Mqlov///AAKwiL///0ASv/AAL/tf//9gCg/wAF/2r///gAFgj/AAYBgP//+AAW/wAK1fX///h/K/8AD6pq///4/kAI/wAPqmr///kAVv8AFytA///4Ksv/AB6sFf//91VACP8AOVUV///wqwD/ACp/Kv//66rL/wAbqUD//+aqlgj/ABurVf//5qqW/wAN1ar//9yrNov//9Kr1giL///LVKv//+qqi///1tRr///VVRb//+JUKwj//9VVFv//4lZA///LAEv///ErIP//wKuAiwj//9SqQIv//9h/gP8ABqpA///cVMD/AA1UgAj//9xW1v8ADVaV///hK0v/ABJVv///5f/A/wAXVOoI/wBAAGD/AEf/QAX/AC3/AP//3VcW/wAv/4D//+6ri72LCP8AHKuVi/8AFtXV/wAFqgD/ABEAFf8AC1QACP8AEQAV/wALVhX/AAiACv8AD6pqi/8AE/7ACIv/AA9XFf///NSL/wAMKpX///mpFv8ACP4VCP//+asr/wAJACr///Sq9v8AB//q///vqsD/AAb/qgj//++qwP8ABwHA///mf+D/AAiBFf//3VUA/wAKAGoI///KARb/AA6qKv//2FXW/wAUf+r//+aqlv8AGlWqCP//5qqW/wAaVar///NVS/8AINU1i/8AJ1TACIv/AB1UVf8ACIAK/wAaVKD/ABEAFf8AF1TqCP8AEQAV/wAXVwD/ABf/wP8AElXA/wAe/2r/AA1UgAj/AB7/av8ADVSA/wAjf4D/AAaqQP8AJ/+ViwgO+Nv/Ab7/QIsV///VAcD/AJ//YAX//xr/AIsF///U/qD//2AAoAX//3cAIIsF/wDXAKD/ArMA4AX/AKMAIIsF/wDWAGD//Uz/IAX//3P/YIsF//8KAQD/AQP/YBX/ALAAQIsF//+n/+D/AUoBQAX//6f/4P/+tf7ABQ74kv8A5/6g/wKs/2AV/wAsq2qL/wAmgED///hVgP8AIFUV///wqwAI/wAgVRX///CrAP8AGFUq///rVWD/ABBVQP//5f/ACP8AEFVA///l/8D/AAgqoP//41V2i///4KsrCIv//9dVlv//9FWL///eKov//+irFv//5P+ACP//6KsW///k/4D//+AAVv//7Ssr///XVZb///VW1gj/ACyrav//+/8A/wAkqnX//+//IP8AHKmA///j/0AI/wAcq5X//+QBVv8ADlXK///ZVhaL///OqtYIi///2VQA///2Kkv//9z/lv//7FSW///gqysI///sVJb//+CrK///49SL///nKrb//9tUgP//7apACP//21aW///tqkD//9SrS///9tUgWYsI//+j/+uL//+3Vev/ACBVFf//yqvr/wBAqioI/wBG/wD/AEQBYAX/ABaqFf//6VXr/wAWVKr//++AC/8AFf9A///1qisI/wAWAVX///WqK/8AGFY1///61Rb/ABqrFYsI/wAj/pWL/wAc1DX/AAoqFf8AFanV/wAUVCoI/wAVq+r/ABRWQP8ACtX1/wAbgKCL/wAiqwAIi/8AJqwA///11OD/ABurVf//66nA/wAQqqoI///rq9b/ABCqqv//4dYg/wAIVVX//9gAa4sI///K/0CLBf8ADwCg/wBa/cAF/wAj/6CLBf8AIKqAi/8AGinq/wAJACr/ABOpVf8AEgBVCP8AE6tq/wASAFX/AAnVtaSL/wAf/6oIi/8AG1Xq///2/9b/ABWAKv//7f+r/wAPqmoI///uAcD/AA+qav//6ABA/wAH1TX//+H+wIsI///l/8CL///oVav///sqgP//6quW///2VQAI///qq5b///ZVAP//6qqL///xKyD//+qpgP//7AFACP//vv9g/wBG/wAF/wA8q0D/ADlVFf8ARlU1/wAcqor/AE//KosIDvmi/wLf/6CLFf//fv8AiwX//+4BwP8BIQBgBf//+gCW/wBnVBX///0AS/8AUf+qi/8APKtACIv/ACP/oAX//4H/wP/+EAEABfsRiwX//3n9wP8B8P9ABf8AAVWq///UAYD/AACq1f//3qqri///6VPWCIv//8NW1v///gCL///Bqrb///wBFv//v/6WCP//7v7g//7jAKAF//9//0CLBf8ANwFA/wKzAOAF/wCp/sCLBf8Aev+A//4b/cAF/wB0AOD/AeQCQAX/AKv/QIsF/wA2AQD//Uz/IAUO9+//ASMA4P8Ckf7gFf//5qqWi///7dT2///6KkD///T/Vv//9FSACP//9P9W///0Vpb///p/q///7YCWi///5qqWCIv//8gBoAX/AH8AgIsF///x/6D//6P+4AX//47/4IsFi//+SwAgBf//gAJgiwWL/wG0/+AF//+qAGCLBYv/AFwBIAX/AFX/oIsFi/8AOf7gBYu9/wAQKor/ACh/tf8AIFUV/wAe/2oI/wAgVRX/AB8BgP8ALdVV/wAPgMD/ADtVlYsI/wAuqdWL/wAtqqD///WqK/8ALKtq///rVFYI///bACD//6oAYAX//+NUa/8ADVSA///jAAv/AAaqQP//4quriwgO97v/AMoAgP//8P9gFf//11WWi///4CoA/wAL1Sr//+j+a/8AF6pVCP//6QCA/wAXrGr///SAQP8AIYAKi/8AK1OqCIv/AmwB4AX/AIAAwP8ADgBgBYv//Yn+wAWL///nVWv/AAoAav//86q2/wAUANWLCP8ACf5Vi/8ACf9g/wABqxX/AAoAav8AA1YqCP8AGwCA//+l/2AF///lVOv///P/Fv//46rh///5/4v//+IA1osIDvnm/wJ+ACD/Ah/+gBX/ACqq6ov/ACIAKv//8X+A/wAZVWr//+L/AAj/ABlVav//4wEW/wAMqrX//9jV9ov//86q1giL//6BASAF//9//0CLBYv/AWsAIAWL/wA4qkD//+yrC/8AHFUg///ZVhaLCP//61RWi///7ipg///5f2v///EAa///8v7WCP//8QBr///zAOv///CAS///69aL///wACv//+SsKwiL//6P/qAF//9//0CLBYv/AWsAIAWL/wA4qkD//+yrC/8AHFUg///ZVhaLCP//6qmAi///7dT2///5f2v///EAa///8v7WCP//8QBr///zAOv///CAS///69aL///wACv//+SsKwiL//6P/qAF//9//0CLBYv/AhEBAAX/AG7/oIsF/wAJ/2D//7r+YAX/ACf/lf8AN/9q/wAzAED/ABv/tf8APgDqiwj/AB6qAIv/ABp/Vf//+CrL/wAWVKr///BVlgj/ABZWwP//8FWW/wAQK5X//+ordv8ACgBq///kAVYI/wAVVGr/ABypgP8AF3+g/wAV/0D/ABmq1f8AD1UACP8AGarV/wAPVQD/AB2AFf8AB6qA/wAhVVWLCA744/8BHP9g/wKzAOAV/wBYrACL/wBE1eD//+2qQP8AMP/A///bVIAI/wAw/8D//9tWlv8AGH/g///I/8uL//+2qQAIi///s1cA///nVWv//8aANv//zqrW///ZqWsI///Oqtb//9mrgP//vlSL///s1cD//63+QIsI//+vAaCLBYv//w7/IAX//3wBYIsFi/8CswDgBf8Ay/3giwX///7/wP/+oP/AFf8AL1bAi/8AI6tA/wAJ1Kr/ABf/wP8AE6lVCP8AF//A/wATq2r/AAv/4P8AIdV1i/8AL/+ACIv/AFH/qv//0FTg/wAo/9X//6CpwIsI//+5AQCLBYv//wICIAX/AEb/AIsFDvjr/wIJ/0D/AuUA4BWL//0a/yAF//+O/+CLBf//9wDg/wBDASAF///vVVb//+aqlv//6tVA///r/yv//+ZVK///8VPACP//5lUr///xVdb//+LVVv//+Krr///fVYCLCP//v1XWi///zlVrpP//3VUAvQj//91VAL3//+6qgP8ARABVi/8AVgCqCIv/ADX+6v8ACKrA/wAwKjX/ABFVgP8AKlWACP8AEVWA/wAqVYD/ABjVSv8AISqg/wAgVRX/ABf/wAj/ACBVFf8AF//A/wAlgAD/AAv/4P8AKqrqiwj/ADKq1Yv/ACxU9f//7QB2/wAl/xX//9oA6wiL/wEMAWAF/wCAAMD///H/oAX//xMAIP/9bP3AFf8AFqoVi/8AE//K/wAFgFX/ABFVgP8ACwCqCP8AEVWA/wALAKr/ABBVQP8AESrK/wAPVQD/ABdU6giL/wDyASAF///wqwD/ABKpFf//8IBL/wAN/1X///BVlv8ACVWVCP//8FWW/wAJVZX//+3WAP8ABKrK///rVmuLCP//3f/Wi///5So2///w1Kv//+xUlv//4alWCP//7FSW///hq2v///YqS///0iu2i///wqwACIv//76rAP8ACKrA///RKmv/ABFVgP//46nWCP8AEVWA///jqdb/ABlVav//8dTr/wAhVVWLCA57m/g8mfdumZGbuZMG+4iL+IyR9xqLB3ub+DSX926XnZuzlQj7hov4hpL3F4sJrwr3HAsAAAMgAAACPQAAAiYAAAIIAAAB+wAAAcIAAAImAAAA+gAAAXcAAAJIAAACOAAAAkEAAAGKAAACJQAAAkUAAAJFAAABGgAAAd4AAAIiAAACGQAAASYAAAH6AAAByQAAAjAAAAHpAAAB3AAAAkcAAAH+AAADDgAAAVsAAAEnAAADUgAAAk8AAAJXAAA=)format("opentype");font-display:swap}@font-face{font-family:fnt3;src:url(data:font/otf;base64,T1RUTwAJAIAAAwAQQ0ZGIBEhif8AAAOMAAAVdU9TLzJRj0TrAAABAAAAAGBjbWFwA2UDjQAAAuwAAACAaGVhZGI0QwQAAACcAAAANmhoZWEC8wJsAAAA1AAAACRobXR4G9sAAAAAGQQAAAA4bWF4cAAOUAAAAAD4AAAABm5hbWUWx3aOAAABYAAAAYxwb3N0AAMAAAAAA2wAAAAgAAEAAAABAADq+fJgXw889QADA+gAAAAAAAAAAAAAAAAAAAAAABL/MwMLAvEAAAADAAIAAAAAAAAAAQAAAvH/MwAAAyoAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA4AAFAAAA4AAAACAyoBkAAFAAACigJYAAAASwKKAlgAAAFeADIA+QAAAgAFAAgAAAkAAwAAAAMAAAAAAAAAAAAAAAAzNTc5AAAAIAB0AvH/MwDIAvEAzQAAAAEAAAAAAaACpAAAACAAAAAAAAwAlgABAAAAAAAAABMAAAABAAAAAAABAAgAEwABAAAAAAACAAcAGwABAAAAAAADABAAIgABAAAAAAAEABAAMgABAAAAAAAGABAAQgADAAEECQAAACYAUgADAAEECQABABAAeAADAAEECQACAA4AiAADAAEECQADACAAlgADAAEECQAEACAAtgADAAEECQAGACAA1kNvcHlyaWdodCAtIFVua25vd25HZW5lcmljM1JlZ3VsYXJHZW5lcmljMy1SZWd1bGFyR2VuZXJpYzMtUmVndWxhckdlbmVyaWMzLVJlZ3VsYXIAQwBvAHAAeQByAGkAZwBoAHQAIAAtACAAVQBuAGsAbgBvAHcAbgBHAGUAbgBlAHIAaQBjADMAUgBlAGcAdQBsAGEAcgBHAGUAbgBlAHIAaQBjADMALQBSAGUAZwB1AGwAYQByAEcAZQBuAGUAcgBpAGMAMwAtAFIAZQBnAHUAbABhAHIARwBlAG4AZQByAGkAYwAzAC0AUgBlAGcAdQBsAGEAcgAAAAEAAwABAAAADAAEAHQAAAASABAAAwACACAALgBEAFcAYQBpAG8AdP//AAAAIAAuAEMAVwBhAGcAbgBz//8AAAAAAAAAAAAAAAAAAAAAAAAAEgASABIAFAAUABQAGAAaABwACgAMAA0ACwABAAIABwAEAAUABgAJAAMACAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAQEAAEEAAAAAQAAABFHZW5lcmljMy1SZWd1bGFyAAEEAAAAAQAAADAeGKAFTx7iBaAF/x53mgBPHnU6AD8FHgoAH4uLHgoAH4uLDAf3Kw/3MBG+HBVAEgAEBAAAAAEAAAARAAAAGQAAAB4AAAAmR2VuZXJpYzMtUmVndWxhckdlbmVyaWMzQWRvYmVJZGVudGl0eQAAAgABAAwADgQAAAABAAAABAAAAH0AAALQAAAF2gAABsIAAAfPAAAI7QAADVcAAA5kAAAQSAAAEEsAABFiAAASSAAAFGb5tA75vv8DCwEA/wKs/2AV+yr//VMAoAVAiwX7Kv8CagFgBfsq//2V/qAF//+3AICLBf//aP/A/wKs/2AF/wA8/6CLBf8Agf4g//2LAiAF9yr/AnT94AX/AEMBIIsF/wCZAMD//YsCIAX/AIL+YP8CdP3gBf8AOQHAiwUO+Kz/Aa8BgP8AdADgFYv//+SqFv8AA3/V///sVJb/AAb/qv//8/8WCP8ABv+q///0ASv/AAsqVf//9wDg/wAPVQD///oAlgj///L/4P//1v8gBf//6ABA/wAEqcD//+1/i/8ACP8g///y/tb/AA1UgAj///MA6/8ADVaV///3gQD/ABRWP////AEW/wAbVeoI///b/1b//8VVQP//yaqg///iqqD//7dV64sIWYv//9h/gP8ADioK///i/wD/ABxUFQj//+MBFv8AHFYq///xgIv/ACXVaov/AC9UqgiL/wA2AQD/ABMqQP8AKaqq/wAmVID/AB1UVQj/ACZUgP8AHVZq/wA1Kmr/AA6rNf8ARABViwjviwWL/wAzAEAFi/8AKgAV///2qmv/AB5/Sv//7VTW/wAS/oAI///tVuv/ABMAlf//4QCW/wAJgEr//9SqQIsI///YAGuL///Qqkv///YAoP//yVQr///sAUAI///w/2D/ACv+gAX/ADqqwP8AF1Tq/wA3ADX/AAuqdf8AM1Wqiwj/AHIBaov/ADkAtf//yKtri///kVbWCIv//wP/gAX//zT/QP//r/7AFf8APqmqi/8AMFTq/wAeqwr/ACIAKv8APVYVCIv/AI/+gAX//6T/IIsF///Kq+uL///XVZb///WqK///4/9A///rVFYI///kAVb//+tWa///8gCr///hAJaL///WqsAIi///2/9W/wAJqfX//+RUq/8AE1Pq///sqgAI/wATVgD//+ysFv8AGwCA///2Vgv/ACKrAIsIDvhk/wDp/yD/AhX/IBX/ACCqgIv/AB2qyv//+yqA/wAaqxX///ZVAAj/ABqrFf//9lcW/wAaAED///GAi/8AGVVq///sqgAI///k/4D//9n/4AX//+gAQP8AEKqq///pVOD/AAwqlf//6qmA/wAHqoAI///qq5b/AAeqgP//6KsW/wAD1UD//+aqlosI///dVQCL///j/0D///gAFv//6qmA///wACsI///qq5b///AAK///9VXL///qqouL///lVOsIi///5qqW/wAJKuD//+xVoP8AElXA///yAKsI/wASVcD///IAq/8AISqg///yqnb/AC//gP//81RACP8AO1WV///wqwD/ACrVoP//7KsL/wAaVar//+irFgj/ABpVqv//6KsW/wANKtX//96qq4v//9SqQAiL///RVBb//+3/q///2v8W///b/1b//+SqFgj//9v/Vv//5Kwr///TADb///JWFv//ygEWiwj//9gAa4v//9z/lv8ABdS1///h/sD/AAupagj//+IA1v8AC6uA///kqyD/ABCBAP//51Vr/wAVVoAI/wAf/qD/ACT/4AX/ABdXAP//7VTW/wAX1hX///IqVv8AGFUq///2/9YI/wAYVSr///b/1v8AG3+V///7f+v/AB6qAIsI/wAmqeqL/wAfKiD/AAjVdf8AF6pV/wARquoI/wAXrGr/ABGq6v8AC9Y1/wAYf+CL/wAfVNUIi/8AFVRq///8AAv/ABFUdf//+AAW/wANVIAI///4ABb/AA1Wlf//8lUL/wALgMr//+yqAP8ACasACP//7KoA/wAJqwD//+Oq4P8ACdW1///aq8D/AAoAagj//8ipVv8ADqoq///YKhb/ABJUtf//56rW/wAV/0AI///nqtb/ABYBVf//89Vr/wAdVWCL/wAkqWoIi/8AGgBA/wAHqoD/ABd/oP8AD1UA/wAU/wAI/wAPVxX/ABUBFf8AFNVV/wAQVUD/ABpTlf8AC6lqCP8AGlWq/wALq4D/AB2AFf8ABdXA/wAgqoCLCA743P8BUP/g/wIV/yAV/wAuqdWL/wAj/6D///HU6/8AGVVq///jqdYI/wAZVWr//+Or6/8ADKq1///Y1faLWQiL//6KAEAF///GASCLBYv/AW4A4AWL/wBQqgD//98AFv8AKFUA//++ACuLCP//3qqri///4n/r///21SD//+ZVK///7apACP//5lUr///tqkD//+eAIP//5StA///oqxb//9ysQAiL//6E/wAF///GASCLBYv/At//oAX/ADn+4P8ABwHABYv//sz+QAX/AC6p1f8AQVUA/wA5qoD/ACCqgP8ARKsqiwgO96L/AKQAYP8CCv+AFYv//fUAgAX//8YBIIsFi/8CCv+ABf8AOf7giwX//+H+wP8A5gFAFf8ADVSAi/8ACqo1///8AAv/AAf/6v//+AAWCP8AB//q///4ABb/AAP/9f//9f+Wi///8/8WCIv///QBK////AAL///1/5b///gAFv//9/4ACP//+AAW///4ABb///VVy////AAL///yq4CLCP//81RAi///9aor/wAD//X///gAFv8AB//qCP//+AAW/wAIAgD///wAC/8ACgBqi/8AC/7VCIv/AAwA6v8AA//1/wAKAGr/AAf/6v8AB//qCP8AB//q/wAH/+r/AApV1f8AA//1/wAMq8CLCA743P8BUP/g/wIV/yAV/wAvVKqL/wAkKlX///H/oKT//+P/QAik///kAVb/AAyAAP//2KtAi///zVUrCIv//ooAQAX//8YBIIsFi/8BbgDgBYv/ACoAFf//96qr/wAeqgD//+9VVv8AE1PqCP//71VW/wATVgD//+dVa/8ACasA///fVYCLCP//3qqri///4n/r///21SD//+ZVK///7apACP//5lUr///tqkD//+eAIP//5StA///oqxb//9ysQAiL//6E/wAF///GASCLBYv/Agr/gAW9iwX/AAX+YP//pv+gBf8AFVRq/wAfVur/ABlUYP8AGH/g/wAdVFX/ABGo1Qj/AB1Wav8AEarq/wAhAPX/AAjVdf8AJKuAiwgO+Iv/Ae7+wP8B///gFf//4ABW///3VUD//8+rFv//+v/L//+/Vdb///6qVgj/ADtVlf//5AFW/wAdqsr//9CrVov//71VVgiL///Mqlb//+7/6///1n8A///d/9b//+BTqwj//93/1v//4FXA///R//b///Aq4P//xgAWiwj//+X/wIv//+lU4P8AA1Yq///sqgD/AAasVQj///NWVv//+KjW///2K1b///cpgP//+QBW///1qisI///5AFb///WsQP///IAr///01auL///z/xYIi///3AFr/wAbqkr//+4Atv8AN1SViwj/AFT/YIsF/wAzVaqL/wAo1SD///OAAP8AHlSVcgj/AB5WqnL/AA8rVf//39SWi///2KkrCIv//9AAgP//7P9r///bACD//9n+1v//5f/ACP//2gDr///l/8D//8dVwP//8v/g//+0qpaLCP//sf9Ai///yCpA/wAL1jX//95VQP8AF6xqCP//3lVA/wAXqlX//+8qoP8AJinKi/8ANKlACP8ANgEAiwX/AACq1f//5qqW/wAFVaD//+wANv8ACgBq///xVdYI/wAKAGr///FV1v8AEKqq///1Vcv/ABdU6v//+VXACP8AF1Tq///5VcD/ACCqgP///Krg/wAqABWLCP8AOqrAi/8AKqng/wAIgAr/ABqpAP8AEQAVCP8AGqsV/wAQ/gD/AA1Viv8AGH/gi/8AIAHACIv/ABv+qv//9aor/wAVfyD//+tUVv8ADv+VCP//61Zr/wAPAar//+MBFv8AB4DV///aq8CLCP//qwCgiwX//9aqwIv//+AqAP8ACKrA///pqUD/ABFVgAj//+mrVv8AEVWA///01av/ABX/QIv/ABqpAAiL/wARVYD/AAUANf8AEFVA/wAKAGr/AA9VAAj/AAoAav8AD1cV/wAN/1X/AA1Viv8AEf5A/wALVAAI///iANb/AA9VAP//6dYL/wATqmD///GrQP8AF//ACP//8atA/wAYAdX///jVoP8AHVVgi/8AIqjqCIv/ADSrVf8AEang/wAqqur/ACNTwP8AIKqACP8AI1XV/wAgqoD/AC5Vdf8AEFVA/wA5VRWLCP8AP1aV////VSv/AC4qwP8AAlTg/wAc/ur/AAVUlQj/AB0BAP8ABVaq/wAeKur/AAkBNf8AH1TV/wAMq8AI/wAR/kD//8f+gAX//wkAwP//6QCAFf//1KpAi///3yrL///0ACD//+mrVv//6ABACP//6atW///oAED///TVq///3/9Li///1/5WCIv//9aqwP8AC9Uq///fquv/ABeqVf//6KsWCP8AF6pV///oqxb/ACAqYP//9FWL/wAoqmqLCP8AKqrqi/8AIKqA/wALf8D/ABaqFf8AFv+ACP8AFqwq/wAW/4D/AAtWFf8AICtqi/8AKVdVCIv/ACn+AP//9NSg/wAgqXX//+mpQP8AF1TqCP//6atW/wAXVwD//98qy/8AC6uA///UqkCLCA736f8BV/6A/wAV/0AV///eqqv//+oAwP//21WL///1AGD//9gAa4sI///YAGuL///gqyv/AAvVKv//6VXr/wAXqlUI///pVev/ABeqVf//9Kr2/wAiKuCL/wAsq2oIi/8BXP/ABf//p//giwWL/wAu/0AF/wBYACCLBYv3EQX/ADn+4P8ABwHABYv//3v+QAX/AIb/YIsF///5AWD//9EAwAX//3//QIsFi//+pgEABYv//+FT6/8ABlTV///pKiv/AAypqv//8QBrCP8ADKvA///xAGv/ABNWAP//+IA2/wAaAECLCP8AGqsVi/8AGqoK/wAHqoD/ABqpAP8AD1UACP8AFv+A///X/2AFDvjP/wEd/6D/AhX/IBX/AEVWAIv/ADYqqv//6Cr2/wAm/1X//9BV6wj/ACb/Vf//0FXr/wATf6r//72AC4v//6qqKwiL//+rVQD//+wq6///vSqg///YVdb//88AQAj//9hV1v//zwBA///J1Vb//+eAIP//u1TWiwj//7qsFov//8nVVv8AGCp1///Y/pb/ADBU6gj//9kAq/8AMFTq///sgFb/AEJ/9Yv/AFSrAAiL/wA3VJX/AAkAKv8AMFTq/wASAFX/AClVQAj/ABIAVf8AKVdV/wAZqtX/AB+rSv8AIVVV/wAV/0AI/wAhVVX/ABX/QP8AJ1TA/wAK/6D/AC1UKosIi///zwBAFf//zVUri///2Ko2///s/2v//+P/QP//2f7WCP//5AFW///aAOv///IAq///yFYAi///tqsWCIv//7dV6/8ADdSg///IqmD/ABupQP//2f7WCP8AG6tV///aAOv/ACcrFf//7QB2/wAyqtWLCP8AMqrVi/8AJ391/wAS/4r/ABxUFf8AJf8VCP8AHFYq/wAmASr/AA4rFf8AOAB1i/8ASf/ACIv/AEiqFf//8ipW/wA3KeD//+RUq/8AJamqCP//5FbA/wAlq8D//9iAi/8AEtXg///MqlaLCA73qw75DP8A9v9A/wKs/2AV/wBeq2qL/wBM1cr//+gAQP8AOwAq///QAIAI/wA7ACr//9AAgP8AHYAV//+nqnaL//9/VGsIi///f1aA///iKoD//6XVtv//xFUA///MVOsI///EVQD//8xU6///tyor///mKnb//6n/VosI//9tAMCLBYv/Aqz/YAX/AIf/oIsF//+z/8BZFYv//bcAoAX/AFsA4IsF/wCgq0CL/wBQVaD/AGNVKov/AMaqVQiL/wBOq5X///RUgP8APFXV///oqQD/ACoAFQj//+irFv8AKgAV///if+v/ABwqav//3FTA/wAOVMAI///cVtb/AA5UwP//1oEW/wAHKmD//9CrVosI//+r/cCLBQ73Y/8AZwDA/wBT/yAV/wAN/1WL/wALf7////t/6/8ACQAq///2/9YI/wAJACr///b/1v8ABIAV///01auL///yq4AIi///8gCr///7f+v///SAQf//9v/W///2/9YI///2/9b///b/1v//9IBB///7f+v///IAq4sI///yqWuL///0qev/AASqyv//9qpr/wAJVZUI///2rID/AAlVlf//+1ZA/wALVQqL/wANVIAIi/8ADVSA/wAEqcD/AAsqVf8ACVOA/wAJACoI/wAJVZX/AAkAKv8AC1YV/wAEgBX/AA1WlYsIDvi6/wFXAWD/Arf/ABX/ACX/FYv/ACAqYP//+tUW/wAaVar///WqKwj/ABpVqv//9axA/wAaf1X///Aq4P8AGqkA///qqYAI///gAWD//9gCgAX//+irFv8AEqkV///pqkv/AA1UgP//6qmA/wAH/+oI///qq5b/AAf/6v//56rW/wAD//X//+SqFosI//+/VdaL///LgGv//+dVa///16sA///OqtYI///XqwD//86q1v//69WA//+0AMuL//+ZVsAIi///vVVW/wAJVIr//8f/i/8AEqkV///SqcAI/wASqyr//9KpwP8AGYAg///ef/b/ACBVFf//6lYrCP8AIFUV///qViv/ACTVKv//9SsW/wApVUCLCP8AIKyVi/8AG6tV/wAE1HX/ABaqFf8ACajqCP8AFqoV/wAJqwD/ABb/gP8ADisV/wAXVOr/ABKrKgj/AB8BgP//2P+gBVn//9CrVv//wlWL///oVav//7arFosI///KqdaL///Qf5b/AA2p6v//1lVW/wAbU9UI///WVVb/ABtV6v//31WB/wAoK1X//+hVq/8ANQDACP//6FWr/wA1AMD///Qq1v8AQCsVi/8AS1VqCIv/AEtVav8ADFVK/wBAKgr/ABiqlf8ANP6qCP8AGKqV/wA1AMD/ACEqn/8AJ/+V/wApqqr/ABr+agj/ACmqqv8AGwCA/wAu1ZX/AA2AQP8ANACAiwgOe5v4PJn3bpmRm7mTBvuIi/iMkfcaiwd7m/g0l/dul52bs5UI+4aL+IaS9xeLCa8K9xwLAAAAAAADIAAAAyoAAAIYAAAB0AAAAkgAAAEOAAACSAAAAfcAAAFVAAACOwAAARcAAAJ4AAAAzwAAAiYAAA==)format("opentype");font-display:swap}.ps04{fill-opacity:.149;stroke-opacity:.149;fill:#576c7a}.ps03{fill:#000}.ps01,.ps02{fill:#576c7a}.ps00{fill:none}.ps20,.ps21,.ps22,.ps23,.ps25{letter-spacing:0;word-spacing:0;font-family:fnt0;font-size:10px}.ps20,.ps21,.ps23,.ps25{font-size:14px}.ps21,.ps23,.ps25{font-size:36px}.ps21,.ps23{font-family:fnt1;font-size:10px}.ps23{font-family:fnt2}'
        }
      </style>
      <clipPath id="clp1">
        <path d="M0 0h612v792H0z" />
      </clipPath>
      <g clipPath="url(#clp1)" transform="matrix(1 0 0 -1 0 792)">
        <g transform="scale(1.342)">
          <clipPath id="clp2">
            <path d="M0 0h459v590.1H0z" />
          </clipPath>
          <g clipPath="url(#clp2)">
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp3">
                <path d="M0 0h616.11v791.95H0Z" />
              </clipPath>
              <g clipPath="url(#clp3)">
                <g className="ps00">
                  <clipPath id="clp4">
                    <path d="M34.999 195H366v1H34.999Z" />
                  </clipPath>
                  <g className="ps00" clipPath="url(#clp4)">
                    <path d="M34.999 195H366v1H34.999Z" className="ps01" />
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp5">
                    <path d="M34.999 695H366v1H34.999Z" />
                  </clipPath>
                  <g className="ps00" clipPath="url(#clp5)">
                    <path d="M34.999 695H366v1H34.999Z" className="ps01" />
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp6">
                    <path d="M400 195h177v1H400Z" />
                  </clipPath>
                  <g className="ps00" clipPath="url(#clp6)">
                    <path d="M400 195h177v1H400Z" className="ps01" />
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp7">
                    <path d="M400 350h177v1H400Z" />
                  </clipPath>
                  <g className="ps00" clipPath="url(#clp7)">
                    <path d="M400 350h177v1H400Z" className="ps01" />
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp8">
                    <path d="M400 437h177v1H400Z" />
                  </clipPath>
                  <g className="ps00" clipPath="url(#clp8)">
                    <path d="M400 437h177v1H400Z" className="ps01" />
                  </g>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp9">
                <path d="M34.999 117H366v18H34.999Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp9)">
                <clipPath id="clp10">
                  <path d="M32 114h182v24H32Z" />
                </clipPath>
                <g clipPath="url(#clp10)">
                  <text className="ps00" transform="translate(35 131.5)">
                    <tspan xmlSpace="preserve" className="ps02 ps20">
                      {"PROFESSIONAL\xA0SUMMARY"}
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp11">
                <path d="M0 0h616.11v791.95H0Z" />
              </clipPath>
              <g clipPath="url(#clp11)">
                <g className="ps00">
                  <clipPath id="clp12">
                    <path d="M30.002 137H323v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp12)">
                    <text className="ps00" transform="translate(35 151.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "Accomplished\xA0Cinematographer\xA0offering\xA0eight\xA0years\xA0of\xA0related"
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp13">
                    <path d="M30.002 154H340v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp13)">
                    <text className="ps00" transform="translate(35 168.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "experience.\xA0Adept\xA0at\xA0planning\xA0and\xA0preparing\xA0for\xA0shots\xA0in\xA0different"
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp14">
                    <path d="M30.002 171H282v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp14)">
                    <text className="ps00" transform="translate(35 185.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "locations.\xA0Excited\xA0to\xA0offer\xA0talent\xA0to\xA0visionary\xA0director."
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp15">
                <path d="M34.999 221H366v18H34.999Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp15)">
                <clipPath id="clp16">
                  <path d="M32 218h112v24H32Z" />
                </clipPath>
                <g clipPath="url(#clp16)">
                  <text className="ps00" transform="translate(35 235.5)">
                    <tspan xmlSpace="preserve" className="ps02 ps20">
                      {"WORK\xA0HISTORY"}
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp17">
                <path d="M0 0h616.11v791.95H0Z" />
              </clipPath>
              <g clipPath="url(#clp17)">
                <g className="ps00">
                  <clipPath id="clp18">
                    <path d="M30.002 241H120v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp18)">
                    <text className="ps00" transform="translate(35 255.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps22">
                        {"Cinematographer"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp19">
                    <path d="M108 241h15v21h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp19)">
                    <text className="ps00" transform="translate(113.45 255.5)">
                      <tspan xmlSpace="preserve" x="0,2.4" className="ps03 ps22">
                        {", "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp20">
                    <path d="M113 241h48v21h-48Z" />
                  </clipPath>
                  <g clipPath="url(#clp20)">
                    <text className="ps00" transform="translate(118.225 255.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps23">
                        {"04/2016"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp21">
                    <path d="M149 241h25v21h-25Z" />
                  </clipPath>
                  <g clipPath="url(#clp21)">
                    <text className="ps00" transform="translate(154.625 255.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps23">
                        {"\xA0to\xA0"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp22">
                    <path d="M164 241h45v21h-45Z" />
                  </clipPath>
                  <g clipPath="url(#clp22)">
                    <text className="ps00" transform="translate(169.037 255.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps23">
                        {"Current"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp23">
                    <path d="M30.002 258H122v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp23)">
                    <text className="ps00" transform="translate(35 272.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps22">
                        {"Bolt\xA0Entretaiment"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp24">
                    <path d="M110 258h19v21h-19Z" />
                  </clipPath>
                  <g clipPath="url(#clp24)">
                    <text className="ps00" transform="translate(115.912 272.5)">
                      <tspan xmlSpace="preserve" x="0,2.37" className="ps03 ps22">
                        {"\xA0-\xA0"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp25">
                    <path d="M119 258h47v21h-47Z" />
                  </clipPath>
                  <g clipPath="url(#clp25)">
                    <text className="ps00" transform="translate(124.737 272.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps23">
                        {"Chicago"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp26">
                    <path d="M155 258h14v21h-14Z" />
                  </clipPath>
                  <g clipPath="url(#clp26)">
                    <text className="ps00" transform="translate(160 272.5)">
                      <tspan xmlSpace="preserve" x="0,2.4" className="ps03 ps22">
                        {", "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp27">
                    <path d="M159 258h20v21h-20Z" />
                  </clipPath>
                  <g clipPath="url(#clp27)">
                    <text className="ps00" transform="translate(164.774 272.5)">
                      <tspan x="0,2.94" className="ps03 ps23">
                        {"IL"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp28">
                    <path d="M30.002 361H103v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp28)">
                    <text className="ps00" transform="translate(35 375.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps22">
                        {"Videographer"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp29">
                    <path d="M91.003 361H105v21H91.003Z" />
                  </clipPath>
                  <g clipPath="url(#clp29)">
                    <text className="ps00" transform="translate(96.025 375.5)">
                      <tspan xmlSpace="preserve" x="0,2.4" className="ps03 ps22">
                        {", "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp30">
                    <path d="M94.998 361H143v21H94.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp30)">
                    <text className="ps00" transform="translate(100.8 375.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps23">
                        {"01/2014"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp31">
                    <path d="M131 361h24v21h-24Z" />
                  </clipPath>
                  <g clipPath="url(#clp31)">
                    <text className="ps00" transform="translate(136.175 375.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps23">
                        {"\xA0to\xA0"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp32">
                    <path d="M145 361h48v21h-48Z" />
                  </clipPath>
                  <g clipPath="url(#clp32)">
                    <text className="ps00" transform="translate(150.587 375.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps23">
                        {"04/2017"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp33">
                    <path d="M30.002 378H112v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp33)">
                    <text className="ps00" transform="translate(35 392.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps22">
                        {"Guarantee\xA0Rate"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp34">
                    <path d="M100 378h19v21h-19Z" />
                  </clipPath>
                  <g clipPath="url(#clp34)">
                    <text className="ps00" transform="translate(105.412 392.5)">
                      <tspan xmlSpace="preserve" x="0,2.37" className="ps03 ps22">
                        {"\xA0-\xA0"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp35">
                    <path d="M109 378h73v21h-73Z" />
                  </clipPath>
                  <g clipPath="url(#clp35)">
                    <text className="ps00" transform="translate(114.237 392.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps23">
                        {"San\xA0Francisco"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp36">
                    <path d="M170 378h15v21h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp36)">
                    <text className="ps00" transform="translate(175.787 392.5)">
                      <tspan xmlSpace="preserve" x="0,2.4" className="ps03 ps22">
                        {", "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp37">
                    <path d="M175 378h24v21h-24Z" />
                  </clipPath>
                  <g clipPath="url(#clp37)">
                    <text className="ps00" transform="translate(180.562 392.5)">
                      <tspan x="0,5.68" className="ps03 ps23">
                        {"CA"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp38">
                    <path d="M30.002 498h55.002v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp38)">
                    <text className="ps00" transform="translate(35 512.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps22">
                        {"Film\xA0Crew"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp39">
                    <path d="M73.002 498h15.001v21H73.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp39)">
                    <text className="ps00" transform="translate(78.35 512.5)">
                      <tspan xmlSpace="preserve" x="0,2.4" className="ps03 ps22">
                        {", "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp40">
                    <path d="M77.999 498H124v21H77.999Z" />
                  </clipPath>
                  <g clipPath="url(#clp40)">
                    <text className="ps00" transform="translate(83.125 512.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps23">
                        {"01/2011"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp41">
                    <path d="M112 498h24v21h-24Z" />
                  </clipPath>
                  <g clipPath="url(#clp41)">
                    <text className="ps00" transform="translate(117.337 512.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps23">
                        {"\xA0to\xA0"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp42">
                    <path d="M126 498h46v21h-46Z" />
                  </clipPath>
                  <g clipPath="url(#clp42)">
                    <text className="ps00" transform="translate(131.75 512.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps23">
                        {"11/2013"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp43">
                    <path d="M30.002 515H68v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp43)">
                    <text className="ps00" transform="translate(35 529.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps22">
                        {"Jubile"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp44">
                    <path d="M55.998 515h18.001v21H55.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp44)">
                    <text className="ps00" transform="translate(61.15 529.5)">
                      <tspan xmlSpace="preserve" x="0,2.37" className="ps03 ps22">
                        {"\xA0-\xA0"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp45">
                    <path d="M64 515h48v21H64Z" />
                  </clipPath>
                  <g clipPath="url(#clp45)">
                    <text className="ps00" transform="translate(69.975 529.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps23">
                        {"Chicago\xA0"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp46">
                    <path d="M102 515h15v21h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp46)">
                    <text className="ps00" transform="translate(107.737 529.5)">
                      <tspan xmlSpace="preserve" x="0,2.4" className="ps03 ps22">
                        {", "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp47">
                    <path d="M107 515h20v21h-20Z" />
                  </clipPath>
                  <g clipPath="url(#clp47)">
                    <text className="ps00" transform="translate(112.512 529.5)">
                      <tspan x="0,2.94" className="ps03 ps23">
                        {"IL"}
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp48">
                <path d="M400 117h177v18H400Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp48)">
                <clipPath id="clp49">
                  <path d="M397 114h70v24h-70Z" />
                </clipPath>
                <g clipPath="url(#clp49)">
                  <text className="ps00" transform="translate(400 131.5)">
                    <tspan xmlSpace="preserve" className="ps02 ps20">
                      {"CONTACT"}
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp50">
                <path d="M0 0h616.11v791.95H0Z" />
              </clipPath>
              <g clipPath="url(#clp50)">
                <g className="ps00">
                  <clipPath id="clp51">
                    <path d="M395 137h48v21h-48Z" />
                  </clipPath>
                  <g clipPath="url(#clp51)">
                    <text className="ps00" transform="translate(400 151.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps22">
                        {"Linkedin"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp52">
                    <path d="M431 137h15v21h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp52)">
                    <text className="ps00" transform="translate(436.725 151.5)">
                      <tspan xmlSpace="preserve" x="0,2.4" className="ps03 ps22">
                        {": "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp53">
                    <path d="M436 137h92v21h-92Z" />
                  </clipPath>
                  <g clipPath="url(#clp53)">
                    <text className="ps00" transform="translate(441.5 151.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {"Chicago\xA0,\xA0IL\xA060007"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp54">
                    <path d="M395 154h40v21h-40Z" />
                  </clipPath>
                  <g clipPath="url(#clp54)">
                    <text className="ps00" transform="translate(400 168.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps22">
                        {"Phone"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp55">
                    <path d="M423 154h15v21h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp55)">
                    <text className="ps00" transform="translate(428.712 168.5)">
                      <tspan xmlSpace="preserve" x="0,2.4" className="ps03 ps22">
                        {": "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp56">
                    <path d="M428 154h70v21h-70Z" />
                  </clipPath>
                  <g clipPath="url(#clp56)">
                    <text className="ps00" transform="translate(433.487 168.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {"555-555-5555"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp57">
                    <path d="M395 171h36v21h-36Z" />
                  </clipPath>
                  <g clipPath="url(#clp57)">
                    <text className="ps00" transform="translate(400 185.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps22">
                        {"Email"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp58">
                    <path d="M419 171h15v21h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp58)">
                    <text className="ps00" transform="translate(424.987 185.5)">
                      <tspan xmlSpace="preserve" x="0,2.4" className="ps03 ps22">
                        {": "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp59">
                    <path d="M424 171h120v21H424Z" />
                  </clipPath>
                  <g clipPath="url(#clp59)">
                    <text className="ps00" transform="translate(429.762 185.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {"email"}
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp60">
                <path d="M400 221h177v18H400Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp60)">
                <clipPath id="clp61">
                  <path d="M397 218h56v24h-56Z" />
                </clipPath>
                <g clipPath="url(#clp61)">
                  <text className="ps00" transform="translate(400 235.5)">
                    <tspan xmlSpace="preserve" className="ps02 ps20">
                      {"SKILLS"}
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp62">
                <path d="M400 376h177v18H400Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp62)">
                <clipPath id="clp63">
                  <path d="M397 373h86v24h-86Z" />
                </clipPath>
                <g clipPath="url(#clp63)">
                  <text className="ps00" transform="translate(400 390.5)">
                    <tspan xmlSpace="preserve" className="ps02 ps20">
                      {"EDUCATION"}
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp64">
                <path d="M0 0h616.11v791.95H0Z" />
              </clipPath>
              <g clipPath="url(#clp64)">
                <g className="ps00">
                  <clipPath id="clp65">
                    <path d="M395 396h75v21h-75Z" />
                  </clipPath>
                  <g clipPath="url(#clp65)">
                    <text className="ps00" transform="translate(400 410.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps23">
                        {"Information"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp66">
                    <path d="M458 396h15v21h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp66)">
                    <text className="ps00" transform="translate(463.537 410.5)">
                      <tspan xmlSpace="preserve" x="0,2.4" className="ps03 ps21">
                        {""}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp67">
                    <path d="M463 396h83v21h-83Z" />
                  </clipPath>
                  <g clipPath="url(#clp67)">
                    <text className="ps00" transform="translate(468.587 410.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps23">
                        {"Technology"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp68">
                    <path d="M395 413h103v21H395Z" />
                  </clipPath>
                  <g clipPath="url(#clp68)">
                    <text className="ps00" transform="translate(400 427.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps22">
                        {"SAIT"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp69">
                    <path d="M488 413h17v21h-17Z" />
                  </clipPath>
                  <g clipPath="url(#clp69)">
                    <text className="ps00" transform="translate(493.887 427.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {"-\xA0"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp70">
                    <path d="M495 413h82v21h-82Z" />
                  </clipPath>
                  <g clipPath="url(#clp70)">
                    <text className="ps00" transform="translate(500.562 427.5)">
                      <tspan
                        xmlSpace="preserve"
                        className="ps03"
                        style={{
                          letterSpacing: 0,
                          wordSpacing: 0,
                          fontFamily: "fnt3",
                          fontSize: 10,
                        }}
                      >
                        {"Calgary\xA0AB"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp71">
                    <path d="M34.999 91.003H577v1.001H34.999Z" />
                  </clipPath>
                  <g className="ps00" clipPath="url(#clp71)">
                    <path d="M34.999 91.003H577v1.001H34.999Z" className="ps01" />
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp72">
                    <path d="M29.001 37.002H181V89H29.001Z" />
                  </clipPath>
                  <g clipPath="url(#clp72)">
                    <text className="ps00" transform="translate(35 75)">
                      <tspan xmlSpace="preserve" className="ps02 ps25">
                        {info?.basicInfo?.detail?.name}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp73">
                    <path d="M177 37.002h103V89H177Z" />
                  </clipPath>
                  <g clipPath="url(#clp73)">
                    <text className="ps00" transform="translate(182.487 75)">
                      <tspan
                        x="0,20.592,42.192,52.74,72.18"
                        className="ps02 ps25"
                      >
                        {"lname"}
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp74">
                <path d="M34.999 0H577v34.999H34.999Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp74)">
                <path d="M34.999 0H577v34.999H34.999Z" className="ps04" />
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp75">
                <path d="M212.14 119H366v12.5H212.14Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp75)">
                <path d="M212.14 119h331v12.5h-331Z" className="ps04" />
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp76">
                <path d="M142.74 223H366v12.5H142.74Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp76)">
                <path d="M142.74 223h331v12.5h-331Z" className="ps04" />
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp77">
                <path d="M0 0h616.11v791.95H0Z" />
              </clipPath>
              <g clipPath="url(#clp77)">
                <g className="ps00">
                  <clipPath id="clp78">
                    <path d="M37.998 278H318v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp78)">
                    <text className="ps00" transform="translate(43 292.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "Built,\xA0organized\xA0and\xA0maintained\xA0video\xA0and\xA0audio\xA0inventory."
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp79">
                    <path d="M30.002 278h15.001v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp79)">
                    <text className="ps00" transform="translate(35 292.5)">
                      <tspan className="ps03 ps21">{"\u2022"}</tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp80">
                    <path d="M37.998 295H346v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp80)">
                    <text className="ps00" transform="translate(43 309.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "Created\xA0high-quality\xA0compositions\xA0on\xA0camera\xA0using\xA0various\xA0tools."
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp81">
                    <path d="M30.002 295h15.001v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp81)">
                    <text className="ps00" transform="translate(35 309.5)">
                      <tspan className="ps03 ps21">{"\u2022"}</tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp82">
                    <path d="M37.998 312H368v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp82)">
                    <text className="ps00" transform="translate(43 326.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "Assessed\xA0and\xA0improved\xA0existing\xA0lighting\xA0and\xA0proposed\xA0composition\xA0of"
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp83">
                    <path d="M37.998 329h58.001v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp83)">
                    <text className="ps00" transform="translate(43 343.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {"each\xA0shot."}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp84">
                    <path d="M30.002 312h15.001v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp84)">
                    <text className="ps00" transform="translate(35 326.5)">
                      <tspan className="ps03 ps21">{"\u2022"}</tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp85">
                    <path d="M37.998 398H351v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp85)">
                    <text className="ps00" transform="translate(43 412.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "Collaborated\xA0with\xA0specialists,\xA0producers,\xA0and\xA0designers\xA0to\xA0produce"
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp86">
                    <path d="M37.998 415H267v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp86)">
                    <text className="ps00" transform="translate(43 429.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "original\xA0video\xA0content\xA0for\xA0one\xA0hundred\xA0projects."
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp87">
                    <path d="M30.002 398h15.001v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp87)">
                    <text className="ps00" transform="translate(35 412.5)">
                      <tspan className="ps03 ps21">{"\u2022"}</tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp88">
                    <path d="M37.998 432H324v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp88)">
                    <text className="ps00" transform="translate(43 446.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "Configured\xA0shots\xA0based\xA0on\xA0daily\xA0needs,\xA0weather\xA0and\xA0lighting"
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp89">
                    <path d="M37.998 449H218v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp89)">
                    <text className="ps00" transform="translate(43 463.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {"conditions,\xA0and\xA0available\xA0equipment."}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp90">
                    <path d="M30.002 432h15.001v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp90)">
                    <text className="ps00" transform="translate(35 446.5)">
                      <tspan className="ps03 ps21">{"\u2022"}</tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp91">
                    <path d="M37.998 466H364v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp91)">
                    <text className="ps00" transform="translate(43 480.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "Set\xA0and\xA0maintained\xA0organized\xA0and\xA0detailed\xA0schedules\xA0for\xA0production."
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp92">
                    <path d="M30.002 466h15.001v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp92)">
                    <text className="ps00" transform="translate(35 480.5)">
                      <tspan className="ps03 ps21">{"\u2022"}</tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp93">
                    <path d="M37.998 535H346v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp93)">
                    <text className="ps00" transform="translate(43 549.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "Manipulated\xA0digital\xA0images\xA0to\xA0achieve\xA0the\xA0highest\xA0possible\xA0image"
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp94">
                    <path d="M37.998 552H361v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp94)">
                    <text className="ps00" transform="translate(43 566.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "quality\xA0during\xA0film\xA0production\xA0and\xA0managed\xA0transferring\xA0and\xA0storing"
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp95">
                    <path d="M37.998 569H102v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp95)">
                    <text className="ps00" transform="translate(43 583.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {"image\xA0data."}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp96">
                    <path d="M30.002 535h15.001v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp96)">
                    <text className="ps00" transform="translate(35 549.5)">
                      <tspan className="ps03 ps21">{"\u2022"}</tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp97">
                    <path d="M37.998 586H326v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp97)">
                    <text className="ps00" transform="translate(43 600.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "Assisted\xA0film\xA0production\xA0by\xA0booking\xA0film\xA0talent,\xA0arranging\xA0for"
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp98">
                    <path d="M37.998 603H359v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp98)">
                    <text className="ps00" transform="translate(43 617.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "equipment,\xA0creating\xA0daily\xA0call\xA0sheets,\xA0and\xA0establishing\xA0relationships"
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp99">
                    <path d="M37.998 620H309v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp99)">
                    <text className="ps00" transform="translate(43 634.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "with\xA0vendors\xA0to\xA0confirm\xA0material\xA0provision\xA0when\xA0needed."
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp100">
                    <path d="M30.002 586h15.001v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp100)">
                    <text className="ps00" transform="translate(35 600.5)">
                      <tspan className="ps03 ps21">{"\u2022"}</tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp101">
                    <path d="M37.998 637H369v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp101)">
                    <text className="ps00" transform="translate(43 651.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "Supported\xA0camera\xA0operations\xA0on\xA0film\xA0crew\xA0by\xA0handling\xA0measuring\xA0and"
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp102">
                    <path d="M37.998 654H367v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp102)">
                    <text className="ps00" transform="translate(43 668.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {
                          "focus\xA0during\xA0filming,\xA0helping\xA0set\xA0up,\xA0building,\xA0maintaining\xA0camera\xA0and"
                        }
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp103">
                    <path d="M37.998 671H209v21H37.998Z" />
                  </clipPath>
                  <g clipPath="url(#clp103)">
                    <text className="ps00" transform="translate(43 685.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {"lenses,\xA0and\xA0writing\xA0camera\xA0reports."}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp104">
                    <path d="M30.002 637h15.001v21H30.002Z" />
                  </clipPath>
                  <g clipPath="url(#clp104)">
                    <text className="ps00" transform="translate(35 651.5)">
                      <tspan className="ps03 ps21">{"\u2022"}</tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp105">
                <path d="M465.7 119H577v12.5H465.7Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp105)">
                <path d="M465.7 119h177v12.5h-177Z" className="ps04" />
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp106">
                <path d="M451.19 223H577v12.5H451.19Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp106)">
                <path d="M451.19 223h176.99v12.5H451.19Z" className="ps04" />
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp107">
                <path d="M0 0h616.11v791.95H0Z" />
              </clipPath>
              <g clipPath="url(#clp107)">
                <g className="ps00">
                  <clipPath id="clp108">
                    <path d="M403 241h98v21h-98Z" />
                  </clipPath>
                  <g clipPath="url(#clp108)">
                    <text className="ps00" transform="translate(408 255.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {"Setting\xA0up\xA0cameras"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp109">
                    <path d="M395 241h15v21h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp109)">
                    <text className="ps00" transform="translate(400 255.5)">
                      <tspan className="ps03 ps21">{"\u2022"}</tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp110">
                    <path d="M403 258h88v21h-88Z" />
                  </clipPath>
                  <g clipPath="url(#clp110)">
                    <text className="ps00" transform="translate(408 272.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {"Shot\xA0preparation"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp111">
                    <path d="M395 258h15v21h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp111)">
                    <text className="ps00" transform="translate(400 272.5)">
                      <tspan className="ps03 ps21">{"\u2022"}</tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp112">
                    <path d="M403 275h87v21h-87Z" />
                  </clipPath>
                  <g clipPath="url(#clp112)">
                    <text className="ps00" transform="translate(408 289.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {"Managing\xA0angles"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp113">
                    <path d="M395 275h15v21h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp113)">
                    <text className="ps00" transform="translate(400 289.5)">
                      <tspan className="ps03 ps21">{"\u2022"}</tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp114">
                    <path d="M403 292h81v21h-81Z" />
                  </clipPath>
                  <g clipPath="url(#clp114)">
                    <text className="ps00" transform="translate(408 306.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {"Reading\xA0scripts"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp115">
                    <path d="M395 292h15v21h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp115)">
                    <text className="ps00" transform="translate(400 306.5)">
                      <tspan className="ps03 ps21">{"\u2022"}</tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp116">
                    <path d="M403 309h130v21H403Z" />
                  </clipPath>
                  <g clipPath="url(#clp116)">
                    <text className="ps00" transform="translate(408 323.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {"Production\xA0understanding"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp117">
                    <path d="M395 309h15v21h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp117)">
                    <text className="ps00" transform="translate(400 323.5)">
                      <tspan className="ps03 ps21">{"\u2022"}</tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp118">
                    <path d="M403 326h86v21h-86Z" />
                  </clipPath>
                  <g clipPath="url(#clp118)">
                    <text className="ps00" transform="translate(408 340.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21">
                        {"Set\xA0construction"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp119">
                    <path d="M395 326h15v21h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp119)">
                    <text className="ps00" transform="translate(400 340.5)">
                      <tspan className="ps03 ps21">{"\u2022"}</tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 590.142)">
              <clipPath id="clp120">
                <path d="M481.32 378H577v12.5h-95.68Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp120)">
                <path d="M481.32 378h177v12.5h-177Z" className="ps04" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
    case "templatetwo" :
      return <svg ref={ref}
      
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={612}
      height={792}
      
    >
      <style>
        {
          '@font-face{font-family:fnt2;src:url(data:font/otf;base64,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mRWL/wCkKqr/ACaqqv8AgMzM/wBNVVX/AF1u7gj/AE1VVf8AXW7u9v8ALrd3/wCIqqqLCPcei/8Aa6qq///RSIn/AE1VVf//opESCP8ATVVV//+ikRL/ACaqqv//foZni///Wnu8CIv//7rszQWL//9bKqv//9mqq///fzM0//+zVVb//6M7vAj//7NVVv//ozu8//+Uqqv//9Gd3vseiwj//3VVVov//5Qqq/8ALozMPv8AXRmZCD7/AF0Zmf//2YAA/wCBTu6L/wClhEQIi/8ARRMzBfew//+44AAVi///PlES/wAzqqr//58oif8AZ1VViwj/AF9VVYv/ADNVVf8AUNER/wAHVVX/AKGiIgiM/wB3OZkFi/8AYtVV///yVVb/AElKqv//5Kqr/wAvwAAI///kqqv/AC/ERP//2VVW/wAX4iJZiwhbi///2oAA///oHd5w///QO7wIcP//0EAA///ygAD//7a1Vov//50qqwiL//+42ZoFDhwF7fgF/wQ5mZkVk///nMAABf8AP1VV/wBQCIj/AFOqqv8AKARE84sI9wCL/wBMVVX//89REv8ALKqq//+eoiMIyf8AYV3d/wBYVVX/ADCu7v8Acqqqiwj/AL1VVYvs//988zT/AASqqv/++eZnCIv//TrAAAX7r4sFi/8Cs1MzBYv/AD6zM///91VW/wAsru7//+6qq/8AGqqqCP//7qqr/wAaru7//+Kqq/8ADVd3///WqquLCP//y1VWi///2Kqr///fpmdx//+/TM0IjWkFi//9IaZnBfuviwWL/wKxUzMFi/8APgRE///3qqv/ACzZmf//71VW/wAbru4I///vVVb/ABuu7v//4lVW/wAN13f//9VVVosI///PVVaL///ZVVb//+Woif//41VW///LURIIi//87aAABfuviwWL/wQ5mZkF952LBQ76g/kP/wBiQAAV///FVVb//7CiI///sVVW///YURL//51VVosI//+cqquL//+0qqv/ACIszP//zKqr/wBEWZkI///Mqqv/AERd3f//5lVW/wBjiqqL/wCCt3cIi/8CvUAABfeviwWL//07rM0F/wABVVX//5ad3q7//8tO7/8ARKqqiwj/AECqqov/AC6qqv8AHARE/wAcqqr/ADgIiAiL/wMOWZkF97GLBYv/+8ZmZwX7nosFg/8AYkAABQ76g/f+/wQ5mZkVk///lcAABcv/AFSzM/8AU6qq/wAqWZn/AGdVVYsI906L/wBfqqr//32d3v8ABVVV//77O7wIi//9OMAABfuwiwWL/wKyUzMFi/8APVmZ///21Vb/ACyERP//7aqr/wAbru4I///tqqv/ABuu7v//39VW/wAN13ddiwj//8yqq4v//9gAAf//5aiJ///jVVb//8tREgiL//ztoAAF+7CLBYv/BDmZmQX3nosFDviW+CSLFfuwiwWL/wQ5mZkF97CLBYv/+8ZmZwX7vf8FUjMzFYu3ma+npwinp/8AJVVVmf8ALqqqiwj/AC6qqov/ACVVVX2nbwinb5lni18Ii///1Kqr///yKqtn///kVVb//+NVVgj//+RVVv//41VW///agAD///Gqq///0Kqriwj//9Cqq4v//9qAAP8ADlVV///kVVb/AByqqgj//+RVVv8AHKqq///yKquvi/8AK1VVCA76QPiC/wDWMzMV3Yv/ACmqqv8ANXmZ/wABVVX/AGrzMwj3nosF///+qqv//4nd3v//26qr//+gju///7iqq///t0AACP//uKqr//+3REUv///boiP//49VVosI//90qquL//+Vqqv/ACtgAP//tqqr/wBWwAAI//+2qqv/AFbERP//2qqr/wB/zu7///6qq/8AqNmZCIv/AFYZmQWL/wCqLu7/ACQqqv8AgczM/wBIVVX/AFlqqgj/AEhVVf8AWW7u/wBq1VX/ACy3d/8AjVVViwj/AHdVVYvp///bIAD/AESqqv//tkAACP8ARKqq//+2REWu//+XZEX/AAFVVf//eIRFCPueiwX///9VVv8APNERgf8ALsZm///sqqv/ACC7uwj//+yqq/8AIMAAa/8AEGAA///TVVaLCP//zqqri///3Kqr///ud3j//+qqq///3O7vCP//6qqr///c7u////Sqq///vAqr///+qqv//5smZwiL//+RzM0Fi///p9VW/wAEVVX//8JiI/8ACKqq///c7u8I/wAIqqr//9zzNP8ADlVV///mSquf///voiMIn///76Ij/wAcVVX///fREv8AJKqqiwgO+lb4/YsVg/8AEIiIg/8AG8REg/8AJwAACP//zVVW//+6mZr//7tVVv//3UzN//+pVVaLCP//pVVWi///tNVW/wAeBmb//8RVVv8APAzMCP//xFVW/wA8DMz//+Iqq/8ATbu7i/8AX2qqCIv/AHFu7v8AJCqq/wBXvd3/AEhVVf8APgzMCP8ASFVV/wA+ERH/AGgqqv8AH7Mz9xz/AAFVVQjhiwWL/wBXOZkFi/8AMMzM///3qqv/ACJszP//71VW/wAUDMwI///vVVb/ABQREf//56qr/wAKCIhriwj//7lVVov//9yqq2KLOQj7r4sFi/8AY7d3/wAlgAD/AFJCItb/AEDMzAjW/wBA0RH/AF7VVf8AIGiI/wByqqqLCP8Adqqqi/8AW9VV///hJmfM///CTM0IzP//wlES/wAggAD//6fO74v//41MzQiL//4CzM0F/wABVVX//6KiI/8ADVVV//+2+Zr/ABlVVf//y1ESCIt6BfuxiwX7O/8AyTMzFf8AH1VVi/8AGqqq/wAGV3eh/wAMru4Iof8ADLMz/wAQVVX/AA8IiP8ACqqq/wARXd0Ii/8A4XmZBUeLBVuL///aKqv///CiI///5FVW///hREUI///kVVb//+FERf//8iqr///W6quL///MkRIIi///r9VW/wAfVVX//9fqq/8APqqqiwgO+Qj4RP8FQzMzFYv//vZmZwX3JYsFi///KwAABfsliwWL//3mrM0Fi///1UzN/wAF1VX//+KkRf8AC6qq///v+7wI/wALqqp7/wAWgACD/wAhVVWLCP8AG1VVi/8AFlVV/wACVVX/ABFVVf8ABKqqCIn//yQAAAVbeVeCU4sI//9JVVaL//+jqqv/AGi3d4n/ANFu7giL/wI/QAAF+xGLBYv/ANUAAAX3EYsFi/8BCZmZBfeviwUO+jX42v8BIWZmFYv/ABgMzP//9IAA/wAWNVV0/wAUXd0IdP8AFGIi///M1Vb/ABuO7v//sKqr/wAiu7sI//+LVVb/AC9iIv//r9VW/wAxDMz//9RVVv8AMrd3CP//1FVW/wAyt3f//+oqq/8APxERi/8AS2qqCIv/AF7ERP8AIiqq/wBOQAD/AERVVf8APbu7CP8ARFVV/wA9u7v/AFqAAP8AHt3d/wBwqqqLCP8Adqqqi+r//+FMzf8AR1VV///CmZoI/wBHVVX//8KZmv8AI6qq//+tlVaL//+YkRII+6+LBYv/AFg7u///21VW/wAsHd3//7aqq4sIbYv//+dVVv//9qZn///sqqv//+1MzQj//+yqq///7UzN///2VVb//+XzNIv//96ZmgiL///n8zT/AAqqqv//6sqr/wAVVVX//+2iIwj/ABVVVf//7aIj/wAyVVX//+XIif8AT1VV///d7u8I/wBzVVX//9VIif8AUYAA///QcRL/AC+qqv//y5maCP8AL6qq///Lnd7/ABfVVf//vBmai///rJVWCIv//587vP//26qr//+yQAD//7dVVv//xURFCP//t1VW///FREX//6Cqq///4qIj+wqLCP//sKqri0X/AA+ERP//w1VW/wAfCIgI///DVVb/AB8IiP//0IAA/wArNVX//92qq/8AN2IiCP//3aqr/wA3Zmb//+7VVv8AO7u7i/8AQBERCPehiwX/AAFVVf//zoiJ/wALgAD//9rmZ/8AFaqq///nREUI/wAVqqr//+dIif8AI3/////zpEX/ADFVVYsI14ux/wAiZmaL/wBEzMwIDhwE0hwEdv8CVNmZFYv//zx3eP//0dVW//9oLM3//6Oqq///k+IjCP//o6qr//+T4iP//3/VVv//yfES+ziLCP//XKqri///f6qr/wA1ju7//6Kqq/8Aax3dCP//oqqr/wBrHd3//9Cqq/8Alf3d///+qqv/AMDd3QiL/wD5RmYFi/8AyDd3/wAuVVX/AJxVVf8AXKqq/wBwczMI/wBcqqr/AHBzM/8AgKqq/wA4OZn/AKSqqosI9zaL/wB/qqr//8jGZ/8AXVVV//+RjM0I/wBdVVX//5GMzf8AL1VV+y//AAFVVf//OHM0CIv//wa5mgX7u/8A9FMzFYv/AIOMzP//7VVW/wBh0zP//9qqq/8AQBmZCP//2qqr/wBAGZlR/wAgDMz//7FVVosIPYv//8ZVVv//4R3e///aqqv//8I7vAj//9qqq///wju8///sqqv//6IERf///qqr//+BzM0Ii//+/JmaBYv//4B3eJ7//6IERbH//8OREgix///DkRL/ADqqqv//4ciJ/wBPVVWLCP8ATKqqi8T/AB2Kqv8AJVVV/wA7FVUI/wAlVVX/ADsZmZ7/AFumZv8AAKqq/wB8MzMIi/8A/WZmBQ75OfkR/wMpZmYVLZMF//+yqquL///Lqqv//937vP//5Kqr//+793gIi//9NKZnBfuwiwWL/wQ5mZkF95+LBZP//4sMzQX/ACyqqv8AW9VV/wA9qqr/AC3qqv8ATqqqiwiri6X///uqq5////dVVgiI+6wFDvqY0P8CPdMzFYv/ALGIiKv/AIR5mcv/AFdqqgjL/wBXbu7/AFmqqv8AK7d3/wBzVVWLCO2L/wBLqqr//9lKq/8ANVVV//+ylVYIlv8AX1MzBfeTiwWL//vGkzQFi///dhES///ZVVb//5aO7///sqqr//+3DM0I//+yqqv//7cIifsD///bhEX//29VVosI///EqquL///Bqqv/AAvMzP//vqqr/wAXmZkI//++qqv/ABeZmf//z1VW/wAeEzNr/wAkjMwI6v8Aw2zMBf8AGqqq///kSIn/ACKqqv//6WZn/wAqqqr//+6ERQj/ACqqqv//7oAA/wAoVVX///dAALGLCP8AP1VVi/8ALYAA/wAPG7v/ABuqqv8AHjd3CP8AG6qq/wAeN3f/AA4qqv8AMKZm/wAAqqr/AEMVVQiL/wBcpmYFVf//uUAA//+5qqv//9ygAP//qVVWiwj//4yqq4v//6bVVv8ALOIiTP8AWcRECEz/AFnERP//39VW/wB+oiL///6qq/8Ao4AACIv/AFATMwX3r///uOZnFYv//5vREpj//7cIiaX//9JAAAil///SQAH/AClVVf//6SAA/wA4qqqLCMWLtv8AFQqqp/8AKhVVCIv/AgXzMwX//+Kqq/8ALhVV///Vqqv/ABcKqv//yKqriwhTi///1oAA///o9VZw///R6qsIcP//0eqr///ygAD//7XbvIv//5nMzQiL//+44AAFDvox+DT3fxX4QIsFi/t/Bf2QiwWL90UF+Db/ApyZmQX8LIsFi/8A7AAABfmAiwWL//9VAAAF/Dr//VxmZwUOHASL+C//Af/MzBWL//4AMzQF+7qLBYscBbAF+ISLBfcki/8ActVV///TUzT/AFWqqv//pqZnCP8AVaqq//+mpmf/ACrVVf//i/mai///cUzNCIv//3FMzf//1aqr//+PTu///6tVVv//rVESCP//q1VW//+tURL//4qqq///1qiJ+yqLCPtYiwWL/wD1AAAV916LBcOL/wArVVX/ABJXd/8AHqqq/wAkru4I/wAeqqr/ACSu7v8AD1VV/wA1W7uL/wBGCIgIi/8ASLMz///wVVb/ADnbu///4Kqr/wArBEQI///gqqv/ACsERGH/ABXXd///y1VW/wAAqqoI+2GLBYv//jnMzQUO+on6R/8B+cZmFYv//1B3eG///3xZmlP//6g7vAhT//+oQAAz///UIAD7DIsILYv//7Sqq/8AKmAA///HVVb/AFTAAAiC//+VrM0F+5mLBYscBgAF96+LBYv//eJGZwX/ADVVVf8ASBVV/wBGVVX/ACQKqv8AV1VViwj3DIvj///UczTD//+o5mcIw///qOqr/wAcqqr//4Bd3v8AAVVV//9X0RIIi///rOzNBfuv/wBHGZkVi/8AcjMzgP8ATKIidf8AJxERCHX/ACcVVf//2aqr/wATiqr//8lVVosI///EqquL///Uqqv//+TzNP//5Kqr///J5mcIi//+EhmaBf8AGVVV///NO7y3///mnd7/AD6qqosIwYv/ACWAAP8AEbMzoP8AI2ZmCKD/ACNmZv8ACyqq/wBEyqr/AAFVVf8AZi7uCIv/AGczMwUO+Jb4JIsV+7CLBYscBgAF97CLBYsc+gAFDvpm+LD//+szNBX//26qq4v//46qq/8AK2AA//+uqqv/AFbAAAj//66qq/8AVsRE///XVVb/AHwiIov/AKGAAAiL/wBWGZkFi/8AqtmZ/wAlVVX/AIPO7v8ASqqq/wBcxEQI/wBKqqr/AFzERPb/AC5iIv8Ai1VViwj3HIv/AGZVVf//1Gqr/wBEqqr//6jVVgj/AESqqv//qNmarv//fu7v/wABVVX//1UERQiL//90wAAF/MeLBY87/wARqqr//8WAAP8AH1VVZgj/AB9VVf//2wAB/wAwVVX//+2AAP8AQVVViwj/AF6qqova/wAgczP/AD9VVf8AQOZmCPcD//9U0zQF///dVVb//8/zNP//zaqr///ZIABJ///iTM0ISf//4kzN//+4VVb///EmZ///sqqriwj7RvksFfeviwWL/wAaJmYF///+qqvM///1VVb/ADFCInf/ACGERAh3/wAhhET//91VVv8AEMIi///OqquLCP//zqqri///3Cqr///uO7z//+mqq///3Hd4CP//6aqr///ce7z///LVVv//xwiJh///sZVWCA75e/j4/wH6ZmYV/H2LBYv/AOwAAAX4fYsFi///FAAABQ76K/he/wGP2ZkV9x3/AqnAAAX3u4sF+73/+8ZmZwX7oosF+77/BDmZmQX3vIsF9x3//VZAAAUO+uX5cP8BfXmZFYv/ADtqqv//8NVW/wAs5mb//+Gqq/8AHmIiCP//4aqr/wAeYiL//8jVVv8AH47uO/8AILu7CPsm/wA3aqoi/wBA6IhL/wBKZmYIS/8ASmqqa/8AV+7ui/8AZXMzCIv/AHrMzP8AK4AA/wBimZni/wBKZmYI4v8ASmqq/wBugAD/ACU1Vfcaiwj/AFlVVYv/AE+qqv//7Sqr0f//2lVWCNH//9pVVv8ANdVV///K1Vb/ACWqqv//u1VWCP8AJaqq//+7VVb/ABLVVT2L//+oqqsI+7mLBYvP///xgAD/ADPVVW7/ACOqqghu/wAjqqr//9Yqq/8AEdVV///JVVaLCP//zKqri2P///DO7///41VW///hnd4I///jVVb//+Gd3v//8aqr///XGZqL///MlVYIi///1+7vm///28Znq///353eCKv//9+d3v8AOKqq///ecRL/AFFVVf//3URFCPci///MlVb/AGcqqv//wOqr/wBAVVX//7VAAAj/AEBVVf//tUAA/wAgKqr//6DmZ4v//4yMzQiL//+BMzT//9eqq///nORF//+vVVb//7iVVgj//69VVv//uJma//+SVVb//9xMzf//dVVWiwgti///qlVW/wATVVX//7Kqq/8AJqqqCP//sqqr/wAmqqr//8OAAP8AN1VV///UVVbTCP//1FVW/wBH/////+oqq/8AVQAAi+0I97uLBYs3/wAQVVVO/wAgqqr//9oAAAj/ACCqqv//2gAB/wA1VVV41YsI/wBmqqqL/wAzVVX/ADZszIv/AGzZmQgO+GsOHATG+cD/ASlmZhX8JYsFPf/+1pmaBfvLiwX4WxwFsAX3oYsF+F4c+lAF+86LBT3/ASlmZgX75f8A9P//FfekiwX7HP8CB5mZBfsc//34ZmcFDhwEbPjC/wIUmZkV+yaLBYv//etmZwX7uosFixwFsAX4aYsF/wCTVVWL/wBx1VX//9nbvP8AUFVV//+zt3gI/wBQVVX//7O3eP8AKCqq//+TkRKL//9zaqsIi///PszN//+5qqv//3jCI///c1VW//+yt3gI95P//at5mgWL///x+ZoF+9CLBftv/wIUmZkF+yb3iRX3O4sF/wA6qqqLt/8AE3mZ/wAdVVX/ACbzMwj/AB1VVf8AJvMz/wAOqqr/ADQXd4v/AEE7uwiL/wCRzMxS/wBI5mb7BosI+0CLBYv//k6ZmgUO+oP4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)format("opentype");font-display:swap}@font-face{font-family:fnt1;src:url(data:font/otf;base64,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N3gI///Kqqv//7I7vP//5VVW//+OBEWL//9pzM0Ii//+9KZnBYv//2x3eP8AGNVV//+O13j/ADGqqv//sTd4CP8AMaqq//+xO7z/AEiAAP//2J3e/wBfVVWLCP8AX1VVi/8ARKqq/wAXqqq1/wAvVVUItf8AL1VVpeCV/wB6qqoI902LBQ76b/fJ/wPLWZkV/wBDVVX/AFdd3eH/ACuu7v8AaKqqiwj/AL9VVYv/AGD/////gEiJ/wACqqr//wCREgiL//0wwAAF+0SLBYv/AsdMzAWL/wBUszP///HVVv8APDER///jqqv/ACOu7gj//+Oqq/8AI67u///VgAD/ABHXd///x1VWiwhfi///2IAA///xUzRo///ipmcIaP//4qqr///j1Vb//9mmZ///6qqr///QoiMIi//87azNBftFiwWLHAYABfdFiwWL//3LWZoFDvpo+UWLFf//9VVW/wAXMzP///hVVv8AJx3d///7VVb/ADcIiAj//8FVVv//o+ZnO///0fM0//+eqquLCCmL//+zgAD/ABuIiFT/ADcREQhU/wA3ERH//+SAAP8ATZd3i/8AZB3dCIv/AG4iIv8AJVVV/wBXbu7/AEqqqv8AQLu7CP8ASqqq/wBAwAD/AGZVVf8AIQqq9xb/AAFVVQj3FosFi/8AcyZmBYv/AEDERP//8aqr/wAuERH//+NVVv8AG13dCP//41VW/wAbXd3//9RVVv8ADa7u///FVVaLCP//yqqri///1Kqr///wJEX//96qq///4EiJCP//3qqr///gSIn//+9VVv//18RFi///z0AACPtFiwWL/wA3YiL/ABBVVf8ANOAA/wAgqqr/ADJd3Qj/ACCqqv8AMmIi/wAsAAD/ACeIiP8AN1VV/wAcru4I/wA3VVX/AByzM/8APaqq/wAOWZnPiwj/AG6qqov/AFQqqv//5H3e/wA5qqr//8j7vAj/ADmqqv//yPu8/wAdgAD//6/Mzf8AAVVV//+Wnd4Ii//93czNBf8AAKqq//+spmf/AAtVVf//t6RFof//wqIjCIt7BftMiwX7gP8AjDMzFf8AK1VVi/8AKVVV/wAMBmb/ACdVVf8AGAzMCP8AJ1VV/wAYDMz/AByqqv8AHg7unf8AJBERCIv/AQKMzAUniwU3///+qqv//72qq///7SAA///PVVb//9uVVgj//89VVv//25ma///nqqv//80REov//76IiQiL///CiIn/AAxVVf//02Zn/wAYqqr//+RERQj/ABiqqv//5EiJ/wApqqr///IkRf8AOqqqiwgO+QL41/8DlGZmFf//51VW/wAEqqr//+VVVv8AAlVV///jVVaLCP//pVVWi///wKqr///OTu9n//+cnd4Ii//8+azNBftFiwWL/wQ5mZkF90CLBY7//5LAAAX/AC9VVf8AVrMzzv8AK1mZ/wBWqqqLCKeL/wAXVVX///tVVv8AEqqq///2qqsIjPtABQ74aPfXixX7RYsFixwGAAX3RYsFixz6AAUO+lL4m///6zM0Ff//eVVWi///mKqr/wAoNVVD/wBQaqoIQ/8AUGqq///bVVb/AHX1Vf///qqr/wCbgAAIi/8AgyZmBYv/AKGAAP8AIyqq/wB+oiL/AEZVVf8AW8RECP8ARlVV/wBbxET/AGIqqv8ALeIi9xKLCP8Afqqqi/8AXqqq///XpEX/AD6qqv//r0iJCP8APqqq//+vSImr//+CQAH/AAFVVf//VTd4CIv//4vszQX88IsFi///5vM0BYv//4u7vP8AFdVV//+reZr/ACuqqv//yzd4CP8AK6qq///LN3j/AD7VVf//5Zu83YsIv4v/AC3VVf8ACdu7/wAnqqr/ABO3dwj/ACeqqv8AE7d3/wAlKqr/AB893f8AIqqq/wAqxEQI5///j+AABf//s1VW//+T4iP7Cf//yfES//9iqquLCHf/A8szMxX//7aqq4v//8mqq///5szN///cqqv//82Zmgj//9yqq///zZmad///sbu8///7VVb//5Xd3gj4PosFi/8AGAZmBf//+1VW/wBmzMz//+2AAP8ASWzM///fqqv/ACwMzAj//9+qq/8ALBER///O1Vb/ABYIiEmLCA76N/km/wEUbMwVi/8AJhER///xqqv/ACC3d///41VW/wAbXd0I///jVVb/ABtiIv//yKqr/wAgDMw5/wAkt3cI//+gqqv/ACdiIv//vNVW/wAhszNk/wAcBEQIZP8AHAiI///i1Vb/AB/d3f//7Kqr/wAjszMI///sqqv/ACO3d///9lVW/wAqjMyL/wAxYiIIi/8AWBmZ/wAgKqr/AEk93f8AQFVV/wA6YiII/wBAVVX/ADpmZv8AUiqq/wAdMzPviwj/AGlVVYv/AFSqqv//4UzNy///wpmaCMv//8KZmqv//7FAAIv//5/mZwj7RIsFi/8AMMRE///vqqv/ACmVVf//31VW/wAiZmYI///fVVb/ACJmZv//1lVW/wARMzP//81VVosIV4v//9cqq///8nd4///iVVb//+Tu7wj//+JVVv//5PM0///xKqv//9vERYv//9KVVgiL///b6qv/AArVVf//4u7v/wAVqqr//+nzNAj/ABWqqv//6fd4/wA0Kqr//+LxEv8AUqqq///b6qsI/wCDVVX//8yd3v8AWVVV///Nyqv/AC9VVf//zvd4CP8AL1VV///O93j/ABeqqv//wciJi///tJmaCIv//6Hqq///36qr//+0xEX//79VVv//x53eCP//v1VW///HoiP//6lVVv//49ES//+TVVaLCP//j1VWi///pKqr/wAgXd1F/wBAu7sIRf8AQLu7aP8AUhd3i/8AY3MzCPdGiwWN///D4iP/ABJVVf//0OiJ/wAiqqr//93u7wj/ACKqqv//3e7v/wAwqqr//+73eP8APqqqiwj/ADqqqov/ACyqqv8ADS7u/wAeqqr/ABpd3Qj/AB6qqv8AGmIi/wAPVVX/ACOO7ov/ACy7uwgO+PD4ABwFQBWL//75mZoF9zeLBYv//3EAAAX7N4sFi//9YKzNBYv//9VMzZL//9+kRZn//+n7vAiZdaOArYsI/wAXVVWL/wAXqqqPo5MIif//agAABWP///Kqq2L///lVVmGLCEWL///Kqqv/ABkCIv//21VW/wAyBEQI///bVVb/ADIIiP//7aqr/wBGszOL/wBbXd0Ii/8CoEZmBfs5iwWL/wCPAAAF9zmLBYv/AQZmZgX3RIsFDvqW6v8CTtmZFYv/AJ2AAP8AJiqq/wB8oiL/AExVVf8AW8RECP8ATFVV/wBbxET/AGTVVf8ALeIi/wB9VVWLCP8AfVVVi/8AZNVV///TSIn/AExVVf//ppESCP8ATFVV//+mlVb/ACcqqv//hjVWjf//ZdVWCIv//43gAAWL//9jKqtl//+D3d4///+kkRIIP///pJES//+aqqv//9JIif//gVVWiwj//4Kqq4v//5uAAP8ALGAA//+0VVb/AFjAAAj//7RVVv8AWMRE///Y1Vb/AHgiIv///VVW/wCXgAAIi/8AdiAABfdF//+Z4AAVi///kIAA/wAV1VX//6hd3v8AK6qq///AO7wI/wArqqr//8BAAP8AOtVV///gIADViwj3MIv/AFBVVf8AcNVV/wAEqqr/AOGqqgiL/wB6LMwFi/8AbtVVdf8AV6AAX/8AQGqqCF//AEBu7lD/ACA3d0GLCP//t1VWi///xdVW///fyIn//9RVVv//v5ESCP//1FVW//+/lVb//+oqq///qLVWi///kdVWCIv//5jZmgUO+nH3v/8EOZmZFZD//4vAAAX/AESqqv8AW13d/wBXqqr/AC2u7v8Aaqqqiwj/AL9VVYv/AGD/////gEiJ/wACqqr//wCREgiL//0wwAAF+0SLBYv/AsdMzAWL/wBUszP///HVVv8APDER///jqqv/ACOu7gj//+Oqq/8AI67u///VgAD/ABHXd///x1VWiwhfi///2IAA///xUzRo///ipmcIaP//4qqr///j1Vb//9mmZ///6qqr///QoiMIi//87azNBftFiwWL/wQ5mZkF9zuLBQ74Jfca//7eZmcVIv8AR/MzBf8APqqq/wBXRET/ACCqqv8AWezM/wACqqr/AFyVVQiL/wCm4AAF90mLBYv//28gAAWL//+8t3j//++AAP//vLd4av//vLd4CGr//7y3eP//1oAA///KCqtZ///XXd4IDvq4+a3/AW+GZhWL/wBIxET//+xVVv8AN73d///Yqqv/ACa3dwj//9iqq/8AJrd3RP8AJbd3//+ZVVb/ACS3dwj//5lVVv8AJLd3//+xgAD/ACaKqv//yaqr/wAoXd0I///Jqqv/AChiIv//11VW/wAuDMxw/wAzt3cIcP8AM7u7///ygAD/ADs7u4v/AEK7uwiL/wBzczP/ACaAAP8AXxmZ2P8ASsAACNj/AErAAP8AZNVV/wAlYAD/AHyqqosI/wBVVVWL1///7NVW/wBCqqr//9mqqwj/AEKqqv//2aqr/wAzVVX//8rVVq9HCK///7wAAJ3//7VVVov//66qqwj7TIsFi+X//+pVVv8ARaqq///Uqqv/ADFVVQj//9Sqq/8AMVVV///Bqqv/ABiqqv//rqqriwhBi///xqqr///rTM3//9dVVv//1pmaCP//11VW///Wnd7//+uqq///xezNi///tTu8CIv//8KVVqH//8yZmrf//9ad3gi3///Wnd7P///a8zTn///fSIkI/wCPVVX//9CZmv8AZn/////Fl3j/AD2qqv//upVWCP8APaqq//+6mZr/AB7VVf//pT3ei///j+IjCIv//4nd3v//2aqr//+hZEX//7NVVv//uOqrCP//s1VW//+47u///5eqq///3Hd4+xiLCP//q1VWi///sdVW/wASgAD//7hVVrAI//+4VVaw///Hqqu/Yv8AQwAACGL/AEL/////64AA/wBM1VWL/wBWqqoI90yLBYsx/wAZKqr//7oAAP8AMlVV///OAAEI/wAyVVVZ/wBEgABy/wBWqqqLCP8AUKqqi/8APKqq/wAUsRH/ACiqqv8AKWIiCP8AKKqq/wApZmb/ABRVVf8AOGqqi/8AR27uCA76hfo3ixX9wosFi/cZBfgz/wImUzMF/wA+qqr/AFS7u/8AK4AA/wBFjMz/ABhVVf8ANl3dCP8AGFVV/wA2YiL/AAwqqv8AOYqqi/8APLMzCIv/AE1mZnn/AD63d2f/ADAIiAhn/wAwCIj//9Cqq/8AGARE///FVVaLCEGL///G1Vb//+aAAP//16qrWAj//9eqq///zQAA///r1Vb//7aAAIsrCPtFiwWL9xr/ACSqqv8AbFVV/wBJVVX/AFKqqgj/AElVVf8AUqqq/wBjqqr/AClVVfcSiwj3CIv/AFtVVf//3Hma/wBCqqr//7jzNAj/AEKqqv//uPd4/wAhVVX//6FxEov//4nqqwiL//9v6qtA//9VkRL7Kv//Ozd4CPvY//5XwAAF+O+LBYv7KwUO+oX5T/kCFf//uVVWMf//rVVWXv//oVVWiwghi///q6qr/wAsszP//8FVVv8AWWZmCP//wVVW/wBZaqr//+Cqq/8AdRmZi/8AkMiICIv/AJgd3f8AIiqq/wB6F3f/AERVVf8AXBERCP8ARFVV/wBcFVX/AF0qqv8ALgqq9wqLCP8Aeqqqi/8AX9VV///KyInQ//+VkRII0P//lZES/wAigAD//2yxEov//0PREgiL///I8zQFi///XoRF///z1Vb//301Vv//56qr//+b5mcI///nqqv//5vqq///3Cqr//+vQiP//9Cqq///wpmaCP//0Kqr///Cnd7//8Oqq///0XVW//+2qqv//+BMzQj//7aqq///4EzN//+kVVb///AmZ/sCiwiL9zAFqosF/wB9VVX/AAKqqv8AXyqq/wAmN3fM/wBJxEQIzP8AScRE/wAjKqr/AHWmZv8ABVVV/wChiIgI+26dFf8AKqqqi/8AKaqq/wAR2Zn/ACiqqv8AI7MzCP8AKKqq/wAjt3f/AB+qqv8ALuRE/wAWqqr/ADoREQiL/wBOGZkFi/8AeMzMdv8AYpu7Yf8ATGqqCGH/AExu7v//zVVW/wAmN3f//8Sqq4sIS4v//80qq///4HVW///aVVb//8Dqqwj//9pVVv//wO7v///tKqv//64TNIv//5s3eAiL//+bN3j/ABJVVf//rbu8/wAkqqr//8BAAAj/ACSqqv//wERF/wAxqqr//+AiI/8APqqqiwgO+oX5p/8B6ZmZFfc2iwWL+ysF+zaLBYv//q1mZwX7RYsFi/8BUpmZBfy6iwWL/wBs8zMF+LH/A/BzMwX3TosFi//8OZmaBfynixX39osFi/8Cs2ZmBfv2//1MmZoFDvqF+hP/AmzgABWL//8pHd7//+Cqq///X1VW///BVVb//5WMzQj//8FVVv//lYzN//+dqqv//8rGZ/saiwj7Fosq/wAzDMxL/wBmGZkIS/8AZh3d///eqqv/AJmAAP///VVW/wDM4iIIi/8A+kZmBYv/ANTmZv8AH4AA/wCe1VXK/wBoxEQIyv8AaMiI/wBiKqr/ADRkRP8AhVVViwj/AINVVYv/AGEqqv//zkZnyv//nIzNCMr//5yREv8AISqq//9pgiP/AANVVf//NnM0CIv//wC5mgX7Rf8A/VMzFYv/AJozM3r/AHGmZmn/AEkZmQhp/wBJGZn//8mqq/8AJIzM//+1VVaLCP//t1VWi///yqqr///cHd5p//+4O7wIaf//uDu8///uVVb//5OxEv///qqr//9vJmcIi//+05maBYv//2ZzNP8AEaqq//+MrM3/ACNVVf//suZnCP8AI1VV//+y5mfB///ZczT/AEiqqosI04vA/wAkYiKt/wBIxEQIrf8ASMRE/wARqqr/AG8mZv8AAVVV/wCViIgIi/8BLWZmBQ76hffr/wMxmZkV9wWLBf8ASKqqi8P/ABZiIv8AJ1VV/wAsxEQI/wAnVVX/ACzIiP8AE6qq/wA9JmaL/wBNhEQIi/8AqxERSf8AVYiI+xiLCP//wKqri///zlVWdGddCGf//9IAAHn//8Oqq4v//7VVVgj7RIsFi/8AdKqq/wAjgAD/AGAqqtL/AEuqqgjS/wBLqqr/AFrVVf8AJdVV/wBuqqqLCP8Acqqqi+b//9wbvP8AQ1VV//+4N3gI/wBDVVX//7g3eP8AIaqq//+aVVaL//98czQIi///vIzN///ugAD//8EO72j//8WREgho///FlVb//9KAAP//1RmaU///5J3eCP8AiVVV///NTM3/AESqqv//jkZni///T0AACIv//33u7///29VW//+YcRL//7eqq///svM0CP//t6qr//+y93j//6GAAP//2Xu8//+LVVaLCP//jKqri///otVW/wAkgABE1AhE/wBJAAD//9yAAP8AYiqqi/8Ae1VVCPdFiwWL//+yqqv/ABKqqv//woAA/wAlVVX//9JVVgj/ACVVVf//0lVWvv//6Sqr/wBAqqqLCM2L/wA0gAD/ABZZmbL/ACyzMwiy/wAsszP/ABOAAP8ARAzMi/8AW2ZmCIv/ALDMzP//rFVW/wBYZmb//1iqq4sIIYsFi/crBQ76FfhR/wKuwAAV903/AYrZmQX3YYsF+7r//ekzNAX3wf/93TM0BftfiwX7U/8BlNmZBftU//5rJmcF+2CLBffB/wIizMwF+7n/AhbMzAX3X4sF90r//nUmZwUOHAYE97//BDmZmRWP//+cwAAFzf8AUAiI4v8AKARE9wCLCP8AeKqqi/8AVFVV///Lpme7//+XTM0Iz/8AaLMz/wBeqqr/ADRZmf8AeVVViwj/AMdVVYvx//+DoAD/AASqqv//B0AACIv//Sa5mgX7RIsFi/8CyEzMBYv/AE6zM33/ADqGZm//ACZZmQhv/wAmWZn//9Cqq/8AEyzM//+9VVaLCP//yqqri///1Kqr///rUzT//96qq///1qZnCP//3qqr///Wpmf//+yqq///y07v///6qqv//7/3eAiL//0qszQF+0aLBYv/AtBMzAWJ/wCWERFO/wBLCIj7DIsI//+mqquLTP//01ES///bVVb//6aiIwiL//zUpmcF+0SLBYv/BDmZmQX3OosFDvqF+ib/AejAABWL//9Ue7z//+Eqq///gDES///CVVb//6vmZwj//8JVVv//q+qr//+o1Vb//9X1Vv//j1VWiwj//5NVVov//6xVVv8AKQqq///FVVb/AFIVVQiL//35rM0F+0SLBYv/BdmZmQX3NIsFlP//iKZnBf8AO1VV/wBdbu7g/wAut3f/AG6qqosI/wB2qqqL/wBYqqr//9ad3v8AOqqq//+tO7wI/wA6qqr//61AAP8AHlVV//+ENVaN//9bKqsIi///ieAABftE/wBlIAAVi/8AeYRE///tVVb/AFmiIv//2qqr/wA5wAAI///aqqv/ADnAAE//ABzgAP//rVVWiwj//6tVVov//7+qq///1Zu8X///qzd4CIv//cwmZwX/ACtVVf//rTd4zP//1pu8/wBWqqqLCNuL/wA61VX/ABzgAP8AJaqq/wA5wAAI/wAlqqr/ADm///8AEyqq/wBYTMz/AACqqv8AdtmZCIv/AGwmZgUOHAYmHAXC/wH1RmYV///6qqv//2NREv//3tVW//+B0RJO//+gURIITv//oFES//+sgAD//9AoiSGLCP//mKqri///vFVW/wA1AiJr/wBqBEQIbf//yqZn///egAD//9goiWb//+Wqqwhm///lqqv//9qAAP//8tVWZYsI//+uqquLTv8AJtu7///XVVb/AE23dwj//9dVVv8ATbd3fP8AauRE/wAKqqr/AIgREQiT/wBsu7v/ABUqqv8AYeRE/wAiVVX/AFcMzAj/ACJVVf8AVwzM/wAr1VX/AEQ1Vf8ANVVV/wAxXd0I/wA1VVX/ADFd3f8AN6qq/wAYru7Fiwj/AC9VVYu1///4qIn/ACSqqv//8VESCP8AJKqq///xVVb/ACkAAP//4/u8/wAtVVX//9aiIwhe//3VoAAF///1VVb//2XmZ6z//7LzNP8ATKqqiwj/ADtVVYv/ADCAAP8AJAAA/wAlqqrTCP8AJaqq/wBIBET/ABUqqv8AYrER/wAEqqr/AH1d3QiV/wEEszP//9fVVv8AxgZm//+lqqv/AIdZmQj//6Wqq/8Ah13d//94Kqv/AEOu7v//Sqqriwj7BIsp///e0RI3//+9oiMIN///vaIj//+91Vb//6BIif//z6qr//+C7u8I///Pqqv//4LzNP//5Sqr//9vGZr///qqq///W0AACP//9qqr//8DMzT/ACkqqv//OmZn/wBbqqr//3GZmgj/AFuqqv//cZma/wCD1VX//7jMzfdAiwj/ADNVVYv/ADMqqv8AB4AAvpoIvpr/ACnVVf8AEtVV/wAgqqr/ABaqqgis//+NAAAF///cqqtx///RgAD//+qqq///xlVW///vVVYI///GVVb//+9VVv//xYAA///3qqv//8Sqq4sI//90qquL//+H1Vb/ACVZmSb/AEqzMwgm/wBKszP//7SAAP8Aa+IiWf8AjRERCFn/AI0MzHX/AKU7u5H/AL1qqgiR/wC3Zmb/ACIqqv8ApRER/wA+VVX/AJK7uwj/AD5VVf8Akru7/wBUKqr/AHEMzPX/AE9d3Qj1/wBPXd3/AHeqqv8AJ67u/wCFVVWLCP8AiVVVi/8AdtVV///afd7/AGRVVf//tPu8CP8AZFVVQP8ASoAA//+Upmf/ADCqqv//dEzNCP8AMKqq//90URL/ABVVVf//WyZnhf//Qfu8CP3g//+rLM0V///4qqv//6FAAP8AB1VV//+3REWh///NSIkIof//zUzNrf//5qZnuYsI/wAdVVWL/wAcKqr/ABACIqb/ACAERAim/wAgCIj/ABaAAP8ALgqqnf8APAzMCI3/ABQGZgWy/wH9ZmYF///iqqv/AA9Zmf//4lVW/wAHrMxtiwhNi///zKqr///X93j//9dVVv//r+7vCP//11VW//+v7u///+dVVv//k+qr///3VVb//3fmZwgO+K73JP8AYMzMFYur/wAJgAD/ABqqqp7/ABVVVQie/wAVVVX/AByAAP8ACqqqsYsIsYv/ABzVVf//9VVW/wATqqr//+qqqwj/ABOqqv//6qqr/wAJ1VX//+VVVotrCIv//+FVVv//9iqr///mVVb//+xVVv//61VWCP//7FVW///rVVb//+Mqq///9aqrZYsIZYv//+OAAP8AClVVeP8AFKqqCHj/ABSqqv//9oAA/wAZqqqL/wAeqqoIDvpE+JD/AIIzMxX/ADqqqou6/wASMzP/ACNVVf8AJGZmCP8AI1VV/wAkZmb/ABNVVf8AM+zM/wADVVX/AENzMwj3O4sFh///l+Zn///bKqv//6m93v//ulVW//+7lVYI//+6VVb//7uZmv//qtVW///dzM3//5tVVosI+xqL//+Z1Vb/ACo1Vf//uaqr/wBUaqoI//+5qqv/AFRu7v//3NVW/wB9pESL/wCm2ZkIi/8AdyAABYv/AKOAAK7/AHxKqtH/AFUVVQjR/wBVGZnx/wAqjMz3GosI/wBuqqqL/wBX1VX//9z1Vsz//7nqqwjM//+57u//ACKAAP//oDu8j///hoiJCPs7iwWH/wBQIiL//+zVVv8APBmZ///dqqv/ACgREQj//92qq/8AKBVV///QgAD/ABQKqv//w1VWiwj//7FVVov//8Wqq///5iAAZf//zEAACGX//8xERf//7FVW//+rDM3///6qq///idVWCIv//3XGZwWL//+Ae7z/ABLVVf//pd3e/wAlqqr//8tAAAj/ACWqqv//y0RF/wA7f////+WiI/8AUVVViwgOHATM+uT/AlfgABWL//85Hd7//9Wqq///ZtVW//+rVVb//5SMzQj//6tVVv//lIzN//+Hqqv//8pGZ/swiwj7Kov//4mAAP8ANDd3NP8AaG7uCDT/AGhzM///0tVW/wCTqqr///yqq/8AvuIiCIv/ARJGZgWL/wDC4iK2/wCYqqrh/wBuczMI4f8AbnMz9wz/ADc5mfcuiwj/AJlVVYv/AHd/////yxu8/wBVqqr//5Y3eAj/AFWqqv//ljd4/wAr1VX//2kCI43//zvMzQiL//72uZoF+0v/AP9MzBWL/wCaN3f//+bVVv8AcqiI///Nqqv/AEsZmQj//82qq/8ASxmZ//+y1Vb/ACWMzCOLCP//m1VWi///s9VW///Z8zT//8xVVv//s+ZnCP//zFVW//+z5mf//+XVVv//j9d4////VVb//2vIiQiL//76pmcFi///ayIj/wAZ1VX//46CI/8AM6qq//+x4iMI/wAzqqr//7HmZ/8ATSqq///Y8zT/AGaqqosI/wBmqqqL1/8AJAzM/wAxVVX/AEgZmQj/ADFVVf8ASBmZ/wAZqqr/AG57u43/AJTd3QiL/wERYAAFDvqD7P8CTdmZFYv/AKjZmf8AHqqq/wB/oiL/AD1VVf8AVmqqCP8APVVV/wBWbu7/AFmqqv8AKzd39wqLCPcCi/8AU6qq///Q8zT/ADlVVf//oeZnCJT/AHhZmQX3NIsFi//7vJM0BYv//3oREv//3aqr//+ZOZr//7tVVv//uGIjCP//u1VW//+4Xd7//6BVVv//3C7v//+FVVaLCP//yqqri///xCqr/wANIiL//72qq/8AGkRECP//vaqr/wAaQAD//84qq/8AIGZm///eqqv/ACaMzAjT/wB5oAAF/wBJVVX//7iERdz//9xCI/8AWKqqiwj/AJNVVYv/AEuqqv8AUBu7j/8AoDd3CIv/AIyZmQX//8aqq///q0AA//+uqqv//9WgAP//lqqriwj7BIv//6iqq/8AKjVV///BVVb/AFRqqgj//8FVVv8AVG7u///fVVb/AHlMzP///VVW/wCeKqoIi/8AeCAABfdF//+a4AAVi///hnu8/wAR1VX//6azNP8AI6qq///G6qsI/wAjqqr//8bqq/8AOn/////jdVb/AFFVVYsI44vN/wAtERG3/wBaIiIIi/8CHczMBV3/AFjMzP//vqqr/wAsZmb//6tVVosI//+uqquL///FVVb//+N1Vmf//8bqqwhn///G6qv//+2qq///qF3e////VVb//4nREgiL//+T2ZoFDvho99eLFftFiwWL/wQ5mZkF90WLBYv/+8ZmZwWZHAVZFYtt///3qqty///vVVZ3CP//71VWd///5qqrgWmLCP//3qqri3KV///vVVafCP//71VWn///96qrpIupCIup/wAIVVX/ABlVVf8AEKqq/wAUqqoI/wAQqqr/ABSqqqT/AApVVf8AIVVViwj/ACFVVYv/ABkqqv//9YAAnHYInHb/AAiAAP//5tVWi///4qqrCA76Ffe89ysV+J6LBYv7KwX9aIsFi/ccBfiE/wMYmZkF/ICLBYv/AJkAAAX5UIsFi///fQAABfyK//zgZmcFDvqL6v8CTdmZFYv/AKbZmf8AHyqq/wB/IiL/AD5VVf8AV2qqCP8APlVV/wBXbu7/AFmAAP8AK7d3/wB0qqqLCP8AZ1VVi/8AUKqq///V9VbF//+r6qsIi/8CL7mZBfdFiwWLHPoABfs2iwWC/wBzWZkFUf//pTu8OP//0p3e+wCLCPsEi///qCqr/wAriqr//8BVVv8AVxVVCP//wFVW/wBXGZn//9+AAP8Aevd3///+qqv/AJ7VVQiL/wBvIAAF90X//5rgABWL//+Ge7yd//+mszSv///G6qsIr///xuqr/wA6qqr//+N1Vv8AUVVViwjji/8AQaqq/wAsZmb/ACtVVf8AWMzMCIv/AiLMzAX//9Kqq/8AVszM//++qqv/ACtmZv//qqqriwj//66qq4v//8VVVv//43VWZ///xuqrCGf//8bqq///7aqr//+oXd7///9VVv//idESCIv//5PZmgUOHAUx+j//ATbgABX3OP8DArmZBfdDiwX7nf/7xmZnBfshiwX7Z/8DBbmZBfti//z6RmcF+yKLBfub/wQ5mZkF90KLBfc8//0QRmcF913/Au+5mQX3IIsF92L//P1GZwUO+i34KPiDFS37AAWL/BcF+0WLBYscBgAF90WLBYv+KwX35f8B0JmZBfdoiwX77P/+PCzNBfgZ//2KOZoF+2KLBfu6+IMFDvkb92aLFYv/A6qZmQX7IYsFi/8AjwAABfchiwWL/wB9DMwFjf8AbgzM/wAb1VX/AFXd3f8ANaqq/wA9ru4I/wA1qqr/AD2zM/8AS9VV/wAe2Zntiwj/ACNVVYv/ACOqqv//+lVWr///9KqrCIL7KgX//+aqq5Fwjv//41VWiwj//5tVVov//82qq///uEqri///cJVWCIv//5nszQX3TYsFi///cQAABftNiwWL//xVZmcF+0WLBQ755/hA/wEl5mYV91n/AxOzMwX3UIsF+/b/+y2AAAX//+VVVv//o13e///aVVb//7mGZ///z1VW///Pru8I///PVVb//8+u7///yKqr///n13hNiwhzi///4VVW/wAFVVX//9qqq/8ACqqqCIv3KgWyhwX/ADNVVYv/ACgqqv8ADCqqqP8AGFVVCKj/ABhREf8AF4AA/wAqJESd/wA793cIrv8AePMzBfvS/wQwhmYF91WLBfdc//zsTM0FDvpx+UD/AF5AABX//8VVVv//s0zN//+qVVb//9mmZ///j1VWiwgpi0H/ACHXd1n/AEOu7ghZ/wBDszP//+aqq/8AYoqq////VVb/AIFiIgiL/wLBQAAF90SLBYv//UuzNAWL//9XREX/ADKqqv//q6Ij/wBlVVWLCP8Aa1VVi9X/ADAERP8AKKqq/wBgCIgIi/8DIVmZBfdFiwWL//vGZmcF+zyLBYf/AF5AAAUO+f74S/8BDOZmFfdh/wMsszMF90iLBfvV//vGZmcF+xiLBfvZ/wQ5mZkF90iLBfdp//zTTM0FDvrR+On/AkyZmRX7lIsFi//9s2ZnBftMiwWLHAWwBfgsiwX/AI6qqov3AP//2tES/wBJVVX//7WiIwj/AElVVf//taIj/wAkqqr//5Md3ov//3CZmgiL//+l93j//+wqq///sXd4///YVVb//7z3eAj//9hVVv//vPd4///H1Vb//815mv//t1VW///d+7wI967//ZVgAAWLfwX7WYsF+5f/AkyZmQX7lPcxFfdyiwX/AEyqqov/AD0qqv8AGK7u/wAtqqr/ADFd3Qj/AC2qqv8AMV3d/wAW1VX/AEIMzIv/AFK7uwiL/wC6zMz//6tVVv8AXWZm//9WqquLCPtwiwWL//3XmZoFDvpg9+n3MRX4z4sFi/sxBf2HiwWLHAWwBfdMiwWLHPrtBQ4cBG736P8COWZmFYv//caZmgX7S4sFixwFsAX4ZIsF/wCHVVWL/wBqVVX//9d3eP8ATVVV//+u7u8I/wBNVVX//67zNP8AJqqq//+UGZqL//95QAAIi///c+Zn///bKqv//5QXeP//tlVW//+0SIkI//+2VVb//7RIif//mCqr///Yzu/7Gv///VVWCPu6iwWL/wCdAAAV962LBf8AUVVVi/8APlVV/wAYW7v/ACtVVf8AMLd3CP8AK1VV/wAwt3f/ABWqqv8ARb3di/8AWsRECIv/AFdqqv//6aqr/wBGERH//9NVVv8ANLd3CP//01VW/wA0u7v//8Kqq/8AGl3dPYsI+66LBYv//cRmZwUO+oX6KP8B6MAAFYv//1cmZ///4aqr//+A27z//8NVVv//qpESCP//w1VW//+qlVYz///VSqv//4yqq4sI//+NVVaLNf8AMWIi///Gqqv/AGLERAiC//+ApmcF+zWLBYscBgAF90SLBYv//cNAAAXF/wBcxET/AFNVVf8ALmIi/wBsqqqLCP8Adqqqi+T//9XzNP8AO1VV//+r5mcI/wA7VVX//6vqq6n//4EzNP8AAKqq//9We7wIi///lOZnBftE/wBlIAAVi/8AgC7u///uKqv/AFtMzP//3FVW/wA2aqoI///cVVb/ADZqqv//xiqr/wAbNVU7iwj//6Sqq4v//7wAAf//zpd4///TVVb//50u7wiL//38QAAFt///noRF/wBEqqr//89CI/8AXVVViwjbi/8AOVVV/wAcCqr/ACKqqv8AOBVVCP8AIqqq/wA4FVX/ABGqqv8AVyAA/wAAqqr/AHYqqgiL/wBtLMwFDvq8+oQcBRIV/BOLBYsc+u4F+0uLBYscBRIF/BKLBYv3MgX6SIsFi/syBQ74lPfwixX7S4sFixwFsAX3S4sFixz6UAUOHAS4+sD/ALRZmRVr///X+ZoFL///lJVW//95VVb//8pKq///Tqqriwj//2Kqq4v//4SAAf8ANDd3//+mVVb/AGhu7gj//6ZVVv8AaHMz///SKqv/AJOqqon/AL7iIgiL/wEeTMwFi/8AzDd3/wAo1VX/AJj93f8AUaqq/wBlxEQI/wBRqqr/AGXIiP8Aeiqq/wAy5ET/AKKqqosI/wCKqqqL/wBsgAD//9lVVv8ATlVV//+yqqsI/wBOVVX//7Kqq/8AKyqq//+RqquT//9wqqsI+0uLBf//+Kqr/wBaqqr//+bVVv8ARtVVYP8AMwAACGC+//++1Vb/ABmAAP//qKqriwj//5dVVov//7NVVv//3ciJ///PVVb//7uREgj//89VVv//u5VW///mqqv//5KxEon//2nMzQiL//7WmZoFi///bSIjp///j1d4w///sYzNCMP//7GREv8AUFVV///YyIn/AGiqqosI/wBiqqqL1v8AGAiI/wAzVVX/ADAREQim/wAZBmYFi/8BUHmZBfueiwWL9zAF+FWLBYv//d+MzQUO+oX5GIsV+0aLBYv/BNDGZgX7xv//dzmaBYv3PAX4XP8AxmZmBaeLBYv/+kmZmgUOHAUO9v8El+ZmFYv/AFaiIv8AF4AA/wBHzu66/wA4+7sIuv8AOPu7/wA9Kqr/ABx93f8AS1VViwj/AEqqqov/AD0qqv//5AIj/wAvqqr//8gERQj/AC+qqv//yARF/wAX1VX//7ZbvIv//6SzNAiLQgWL//+oszT//+iAAP//uFu8XP//yARFCFz//8gERf//wyqr///kAiP//7VVVosI//+1VVaL///Cqqv/ABv93Vv/ADf7uwhb/wA3+7tz/wBJpESL/wBbTMwIi9IF9xX//7MGZxWL///Kru//AAuqqv//1Nma/wAXVVX//98ERQj/ABdVVf//3wRF/wAeqqr//++CI7GLCP8AJKqqi/8AHdVV/wAQKIii/wAgUREIov8AIFER/wALgAD/ACzREYv/ADlREQiL/wBI8zMFi/8ANfu7///0VVb/ACt7u///6Kqr/wAg+7sI///oqqv/ACD7u///4aqr/wAQfd3//9qqq4sIZYv//+Gqq///71d4///pVVb//96u7wj//+lVVv//3q7v///0qqv//9Ou74v//8iu7wiL//+2DM0F+F///RqAABWL/wBXYiL/ABeqqv8AR9///wAvVVX/ADhd3Qj/AC9VVf8AOF3d/wA8////ABwu7v8ASqqqiwj/AEqqqov/AD1VVf//4/u8u///x/d4CLv//8f3eKP//7WgAIv//6NIiQiL//+48zQFi///p/M0c///t/VWW///x/d4CFv//8f3eP//w1VW///j+7z//7aqq4sI//+1VVaL///Cqqv/ABwERFv/ADgIiAhb/wA4CIhz/wBJtVWL/wBbYiIIi/8ASQzMBfcV//+x8zQVi///yfM0/wALqqr//9R1Vv8AF1VV///e93gI/wAXVVX//973eP8AHqqq///ve7yxiwj/ACVVVYup/wAQru7/ABaqqv8AIV3dCP8AFqqq/wAhXd3/AAtVVf8ALGAAi/8AN2IiCIv/AEsMzAWL/wA2DMz///RVVv8AK2AA///oqqv/ACCzMwj//+iqq/8AILMz///hqqv/ABBZmf//2qqriwj//9tVVott///v0RL//+iqq///36IjCP//6Kqr///foiP///RVVv//03VWi///x0iJCIv//7TzNAX8Pf//VwZnFSr/AEHzMwX46f8EcUAABe3//74MzQX86v/7jsAABQ768PcxixWLHAWwBfgziwX/AISqqov/AGPVVf//36zNzv//v1maCM7//79Zmv8AIYAA//+fCImL//9+t3gIi///vARFev//xARFaf//zARFCGn//8wERV3//9eszVH//+NVVgj/AEKqqnf/ADTVVf//1v3esv//wfu8CLL//8H7vP8AE4AA//+1Tu+L//+ooiMIi///fUzN///cKqv//5lO7///uFVW//+1URII//+4VVb//7VREv//mdVW///aqIn//3tVVosI/EGLBfdL/wKpMzMVi//988zNBfeOiwX/AEVVVYvC/wAW13f/ACiqqv8ALa7uCP8AKKqq/wAtru7/ABRVVf8AQDERi/8AUrMzCIv/AK9mZkH/AFezM/soiwj7kosFi/cuFfd/iwX/AD9VVYv/ADMqqv8AFVMzsv8AKqZmCLL/ACqmZv8AE4AA/wA4pESL/wBGoiIIi/8AT/d3///uVVb/ADokRP//3Kqr/wAkUREI///cqqv/ACRREVX/ABIoiP//t1VWiwj7fIsFi//+MTM0BQ4cBgr4HRwFsBX4EBz7XAX4EBwEpAX3gIsFixz6UAX7S4sFi/jLBZz4zAX8ERz7kQX7IIsF/A/6/wWc/MgFi/zLBftLiwWLHAWwBfeAiwUO+Yn3Sf//gzM0FfsqiwX4k/8GLMzMBfcpiwX8kv/50zM0BQ4cBJv52P8Be5mZFfyAiwX7Bf/+hGZnBftQiwX4aRwFsAX3MYsF+Goc+lAF+1CLBfsH/wF7mZkF/FD3MhX4IYsF+1v/ApZmZgX7Wv/9aZmaBQ76lOr/Ak3ZmRWL/wCo2Zn/AB6qqv8Af6Ii/wA9VVX/AFZqqgj/AD1VVf8AVm7u/wBbVVX/ACs3d/8AeVVViwj/AGiqqov/AFFVVf//1fVWxf//q+qrCJP/AGlTMwX3NosFi//6JmZnBftFiwWL/wH+UzMF///Gqqv//7NAAP//sKqr///ZoAD//5qqq4sI//+LVVaL//+mVVb/ACqKqv//wVVW/wBVFVUI///BVVb/AFUZmf//4AAA/wB793f///6qq/8AotVVCIv/AG8gAAX3Rf//muAAFYv//4Z7vP8AEqqq//+l3d7/ACVVVf//xUABCP8AJVVV///FQAD/ADtVVf//4qAA/wBRVVWLCP8AUqqqi8v/ACe5mf8ALVVV/wBPczMIi/8CRNmZBVv/AFAd3f//wFVW/wAoDu7//7Cqq4sI//+uqquL///Eqqv//+KgAP//2qqr///FQAAI///aqqv//8VAAHj//6eIif///1VW//+J0RIIi///k9maBQ75RPce/wMEMzMVi8X/ABKAAP8AL6qqsP8AJVVVCLD/ACVVVf8AMSqq/wASqqr/AD1VVYsI/wA8qqqL/wAxVVX//+3VVrH//9uqqwix///bqque///O1VaLTQiLZgWLUf//7aqr///Qqqv//9tVVv//21VWCP//21VW///bVVb//85VVv//7aqr///BVVaLCE2L///OgAD/ABKAAGawCGaw///tgAD/AC/VVYv/ADqqqgiLsQUOHAYW+Ef4XxWe+zcFqPckBfd9+owF9y2LBfd2/owFqPsoBaD3PAX3Rvp4BfdLiwX7thz6UAX7OYsF+4f6uQV84QV8NQX7kP65Bfs6iwX7tRwFsAX3S4sF90n+eQUOHASP9zGLFYscBbAF9++LBfc+i/cY///K1Vbp//+VqqsI6f//laqruv//aoAAi///P1VWCIv7iAWL//8/VVb//9BVVv//ayqr//+gqqsiCP//oKqrIv//daqr///LgAD//0qqq4sI+9qLBfdLHAUSFYsc+4sF9yeLBf8AgKqqi+n/ACTVVf8AO1VV/wBJqqoI/wA7VVX/AEmqqv8AHlVV/wBtKqr/AAFVVf8AkKqqCIv3lgWL/wCZVVX//+KAAP8AcIAAUP8AR6qqCFD/AEeqqv//ptVW/wAj1VX//4iqq4sI+ziLBQ73+PeR/wWRJmYVdv/+kHM0BfsViwWM/wHeZmYF9ymLBYv//5EmZwUO+nH5JxwFsBX3TIsFi//7+HM0BYv//3SVVv//3IAA//+S7u9E//+xSIkIRP//sUzN//+ggAD//9imZ/sMiwj//4Sqq4v//6AAAP8AJVVV//+7VVb/AEqqqgj//7tVVv8ASqqq///dqqv/AGdVVYv/AIQAAAj3S4sFi///rKqr/wASVVVK/wAkqqr//9FVVgj/ACSqqv//0VVWvv//6Kqr/wBBVVWLCP8AP1VVi/8AMqqq/wAZWZmx/wAyszMIsf8AMrMznv8ARwqqi/8AW2IiCIv/BAagAAUO+oX59v8ENLMzFYv//7dMzf//79VW//+/Tu///9+qq///x1ESCP//36qr///HVVb//9SAAP//06iJ///JVVb//9/7vAj/AECqqv//3pma/wAyqqr//9ATNP8AJKqq///BjM0I/wAkqqr//8GREv8AElVV//+5CquL//+whEUIi///gm7v///cgAD//5umZ0T//7Td3ghE//+03d7//6HVVv//2m7v//+KqquLCP//iqqri///odVW/wAlkRFE/wBLIiIIRP8ASyIi///cgAD/AGRZmYv/AH2REQiL/wBQJmb/ABIqqv8AR6Ii/wAkVVX/AD8d3Qj/ACRVVf8APx3d/wAxgAD/AC+VVf8APqqq/wAgDMwI///JVVb/ACAERGD/ACwszP//4Kqr/wA4VVUI///gqqv/ADhZmf//8FVW/wBAhmaL/wBIszMIi/8AerMz/wAhKqr/AGFbu/8AQlVV/wBIBEQI/wBCVVX/AEgERP8AV4AA/wAkAiL/AGyqqosI9wCL/wBXKqr//9xTNP8AQlVV//+4pmcI/wBCVVX//7imZ/8AISqq//+eTu+L//+D93gI+yn//VgszRWL/wBTjMz//+xVVv8AQwIi///Yqqv/ADJ3dwj//9iqq/8AMnd3///MVVb/ABk7u0uLCP//vqqri///zIAB///mmZr//9pVVv//zTM0CP//2lVW///NMzT//+0qq///vSiJi///rR3eCIv//6vIif8AEoAA//++gACw///RN3gIsP//0Td4/wA0gAD//+ibvM+LCM+L/wA0VVX/ABdkRP8AJKqq/wAuyIgI/wAkqqr/AC7IiP8AElVV/wBBgACL/wBUN3cIcP8CpNMzFYv/AEoIiP//7qqr/wA8W7v//91VVv8ALq7uCP//3VVW/wAuru7//9Oqq/8AF1d3VYsI///HVVaLXv//6P3e///eqqv//9H7vAj//96qq///0fu8///vVVb//8NO74v//7SiIwiL//+z93ic///DpEWt///TURIIrf//01ES/wAsqqr//+moif8AN1VViwj/ADiqqou4/wAWrMz/ACFVVf8ALVmZCP8AIVVV/wAtWZn/ABCqqv8APAZmi/8ASrMzCA76hflx/wWxmZkVi/sxBW6LBfsK///9VVb//6Oqq///2B3e//+9VVb//7LmZwj//71VVv//suZn///Zqqv//4wERYH//2UiIwj/AECqqv8AUXd3/wBSqqr/ACi7u/8AZKqqiwj/AGtVVYv/AFUqqv//08iJyv//p5ESCMr//6eVVv8AH4AA//+MDM2L//9whEUIi///Zy7v///dKqv//4c1Vv//ulVW//+nO7wI//+6VVb//6dAAP//ooAA///ToAD//4qqq4sI+wqLLP8ANGIiQ/8AaMRECEP/AGjERGf/AIsiIov/AK2AAAiL/wBHDMwFi/8AyDMz/wAVqqr/AJ97u/8AK1VV/wB2xEQI/wArVVX/AHbIiP8AP9VV/wBYQAD/AFRVVf8AObd3CP8AVFVV/wA5u7v/AGjVVf8AHd3d/wB9VVWNCKmLBftf//1vmZoVW4v//9Oqq///7aIj///XVVb//9tERQj//9dVVv//20iJ///iqqv//9FERXn//8dAAAiL//+25mcFi///idES/wAU1VX//5+u7/8AKaqq//+1jM0I/wApqqr//7WREv8AMyqq///ayIn/ADyqqosIzYv/ADOqqv8AHoqq/wAlVVX/AD0VVQj/ACVVVf8APRmZ/wASqqr/AFCgAIv/AGQmZgiL/wBi0RH//+1VVv8AUJ3d///aqqv/AD5qqgj//9qqq/8APm7uWf8AHzd3///BVVaLCA76hfosHAVIFfyJHPq4BftNiwX4iBwFGAX9HYsFi/csBfnXiwWLIwUOHAT1+uqLFftMiwWL/wKhZmYF/N6LBYv//V6ZmgX7S4sFixwFsAX3S4sFi//9jmZnBfjeiwWL/wJxmZkF90yLBYsc+lAFDnub+DyZ926ZkZu5kwb7iIv4jJH3GosHe5v4NJf3bpedm7OVCPuGi/iGkvcXiwmvCvccCwAAAAAGZgAAAoEAAAPxAAACiwAAAdQAAAH7AAAEhwAAA9sAAAPUAAACbgAAAdQAAAO+AAADowAAAlwAAAQCAAAD3QAAAZEAAAQkAAAD8QAAA/EAAAPxAAAD8QAAA/EAAAOBAAAGBAAAA/EAAAYmAAACGgAAA7AAAATMAAAD7wAAAdQAAAOBAAAD9wAABTEAAAOZAAAChwAAA1MAAAPdAAADagAABD0AAAPMAAAEbgAAA/EAAAQoAAACAAAABLgAAAPxAAAFDgAABFwAAAYKAAAC9QAABJsAAAQAAAACsAAABhYAAASPAAABZAAAA90AAAPxAAAD8QAAA/EAAAT1AAA=)format("opentype");font-display:swap}@font-face{font-family:fnt0;src:url(data:font/otf;base64,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)format("opentype");font-display:swap}.ps03,.ps06{fill:#000}.ps05{fill:#00aceb}.ps02{fill:#39c3b1}.ps04{fill:#7f8083}.ps07{fill:#bfbfbf}.ps00{fill:none}.ps20,.ps21,.ps22,.ps23{letter-spacing:0;word-spacing:0;font-family:fnt0;font-size:27px}.ps21,.ps22,.ps23{font-family:fnt1;font-size:12px}.ps22,.ps23{font-family:fnt2;font-size:11px}.ps22{font-size:12px}'
        }
      </style>
      <clipPath id="clp1">
        <path d="M0 0h612v792H0z" />
      </clipPath>
      <g clipPath="url(#clp1)" transform="matrix(1 0 0 -1 0 792)">
        <g transform="translate(0 37) scale(1.342)">
          <clipPath id="clp2">
            <path d="M0 0h459v535H0z" />
          </clipPath>
          <g clipPath="url(#clp2)">
            <g transform="matrix(.745 0 0 -.745 0 535.003)">
              <clipPath id="clp3">
                <path d="M62.002 57H550v67H62.002Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp3)">
                <clipPath id="clp4">
                  <path d="M62.002 57H550v1.001H62.002Z" />
                </clipPath>
                <g clipPath="url(#clp4)">
                  <path
                    d="M62.002 57H550v1.001H62.002Z"
                    className="ps00"
                    style={{
                      fill: "#666",
                    }}
                  />
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 535.003)">
              <clipPath id="clp5">
                <path d="M62.002 0H306v33.997H62.002Z" />
              </clipPath>
              <g clipPath="url(#clp5)">
                <g className="ps00">
                  <clipPath id="clp6">
                    <path d="M58.997-2.999H182v37.998H58.997Z" />
                  </clipPath>
                  <g clipPath="url(#clp6)">
                    <text className="ps00" transform="translate(62 24)">
                      <tspan x="0,17.604" className="ps02 ps20">
                        
                      </tspan>
                      <tspan x="41.202,58.806,78.03,95.715" className="ps02 ps20">
                        {info.basicInfo?.detail?.name}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp7">
                    <path d="M177-2.999h120v37.998H177Z" />
                  </clipPath>
                  <g clipPath="url(#clp7)">
                    <text className="ps00" transform="translate(182.012 24)">
                      <tspan className="ps03 ps20">{resume.lname}</tspan>
                      {/* <tspan x={18.441} className="ps03 ps20">
                        {"E"}
                      </tspan>
                      <tspan x={33.831} className="ps03 ps20">
                        {"L"}
                      </tspan>
                      <tspan x={48.411} className="ps03 ps20">
                        {"E"}
                      </tspan>
                      <tspan x={63.801} className="ps03 ps20">
                        {"I"}
                      </tspan>
                      <tspan x={71.172} className="ps03 ps20">
                        {"N"}
                      </tspan>
                      <tspan x={90.45} className="ps03 ps20">
                        {"A"}
                      </tspan> */}
                    </text>
                  </g>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 535.003)">
              <clipPath id="clp8">
                <path d="M306 9.998h244V57H306Z" />
              </clipPath>
              <g clipPath="url(#clp8)">
                <g className="ps00">
                  <clipPath id="clp9">
                    <path d="M472 6.999h81v22.002h-81Z" />
                  </clipPath>
                  <g clipPath="url(#clp9)">
                    <text className="ps00" transform="translate(477.437 21.5)">
                      <tspan className="ps04 ps21">{"("}</tspan>
                      <tspan x={3.768} className="ps04 ps21">
                        {"5"}
                      </tspan>
                      <tspan x="9.696,15.612" className="ps04 ps21">
                        {"55"}
                      </tspan>
                      <tspan x={21.54} className="ps04 ps21">
                        {")"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="25.368,28.116"
                        className="ps04 ps21"
                      >
                        {"\xA05"}
                      </tspan>
                      <tspan x="34.044,39.96" className="ps04 ps21">
                        {"55"}
                      </tspan>
                      <tspan x={45.888} className="ps04 ps21">
                        {"-"}
                      </tspan>
                      <tspan x="48.876,54.792" className="ps04 ps21">
                        {"55"}
                      </tspan>
                      <tspan x="60.72,66.636" className="ps04 ps21">
                        {"55"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp10">
                    <path d="M440 19.002h113V43H440Z" />
                  </clipPath>
                  <g clipPath="url(#clp10)">
                    <text className="ps00" transform="translate(445.662 35.5)">
                      <tspan
                        x="0,6.792,12.576,18.324,21.972,24.72,30.336,35.796,39.336,45.348,51.144,53.892,56.244,58.992,65.208,72,74.748,80.664,86.58,92.496,98.412"
                        className="ps04 ps21"
                      >
                        {"Charleston , SC 29403"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp11">
                    <path d="M432 33.001h121V57H432Z" />
                  </clipPath>
                  <g clipPath="url(#clp11)">
                    <text className="ps00" transform="translate(437.125 49.5)">
                      <tspan x="0,5.616" className="ps05 ps21">
                        {resume.email}
                      </tspan>
                      {/* <tspan x="10.884,16.632" className="ps05 ps21">
                        {"am"}
                      </tspan>
                      <tspan x="25.668,31.584,34.332" className="ps05 ps21">
                        {"ple"}
                      </tspan>
                      <tspan x="39.96,49.188,54.804" className="ps05 ps21">
                        {"@ex"}
                      </tspan>
                      <tspan x="60.072,65.82,74.844" className="ps05 ps21">
                        {"amp"}
                      </tspan>
                      <tspan x="80.772,83.52,89.136" className="ps05 ps21">
                        {"le."}
                      </tspan>
                      <tspan x="92.304,97.836,103.85" className="ps05 ps21">
                        {"com"}
                      </tspan> */}
                    </text>
                  </g>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 535.003)">
              <clipPath id="clp12">
                <path d="M62.002 57H550v67H62.002Z" />
              </clipPath>
              <g clipPath="url(#clp12)">
                <g className="ps00">
                  <clipPath id="clp13">
                    <path d="M177 62.998h373v23.999H177Z" />
                  </clipPath>
                  <g clipPath="url(#clp13)">
                    <text className="ps00" transform="translate(182 79.5)">
                      <tspan x="0,7.2,10.848" className="ps03 ps21">
                        {"Org"}
                      </tspan>
                      <tspan x="16.74,22.488,28.284" className="ps03 ps21">
                        {"ani"}
                      </tspan>
                      <tspan x="31.02,36.276,41.892" className="ps03 ps21">
                        {"zed"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="47.832,50.58,56.328"
                        className="ps03 ps21"
                      >
                        {"\xA0an"}
                      </tspan>
                      <tspan x="62.112,68.064,70.812" className="ps03 ps21">
                        {"d h"}
                      </tspan>
                      <tspan x="76.584,82.332,85.98" className="ps03 ps21">
                        {"ard"}
                      </tspan>
                      <tspan x="91.92,94.896,102.68" className="ps03 ps21">
                        {"-wo"}
                      </tspan>
                      <tspan x="108.68,112.33,117.73" className="ps03 ps21">
                        {"rki"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="120.47,126.26,132.17"
                        className="ps03 ps21"
                      >
                        {"ng "}
                      </tspan>
                      <tspan x="134.9,140.82,144.47" className="ps03 ps21">
                        {"pro"}
                      </tspan>
                      <tspan x="150.47,154.26,159.88" className="ps03 ps21">
                        {"fes"}
                      </tspan>
                      <tspan x="165.32,170.78,173.53" className="ps03 ps21">
                        {"sio"}
                      </tspan>
                      <tspan x="179.53,185.33,191.08" className="ps03 ps21">
                        {"nal"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="193.81,196.56,204.35"
                        className="ps03 ps21"
                      >
                        {"\xA0wi"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="207.08,210.62,216.41"
                        className="ps03 ps21"
                      >
                        {"th "}
                      </tspan>
                      <tspan x="219.14,222.68,230.47" className="ps03 ps21">
                        {"two"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="236.47,239.22,244.21"
                        className="ps03 ps21"
                      >
                        {"\xA0ye"}
                      </tspan>
                      <tspan x="249.82,255.56,259.21" className="ps03 ps21">
                        {"ars"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="264.66,267.41,273.42"
                        className="ps03 ps21"
                      >
                        {"\xA0of"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="277.2,279.95,283.6"
                        className="ps03 ps21"
                      >
                        {"\xA0re"}
                      </tspan>
                      <tspan x="289.2,292.74,298.49,301.24" className="ps03 ps21">
                        {"tail"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="303.97,306.72,312.34"
                        className="ps03 ps21"
                      >
                        {"\xA0ex"}
                      </tspan>
                      <tspan x="317.58,323.5,329.11" className="ps03 ps21">
                        {"per"}
                      </tspan>
                      <tspan x="332.75,335.5,341.11" className="ps03 ps21">
                        {"ien"}
                      </tspan>
                      <tspan x="346.9,352.43,358.04" className="ps03 ps21">
                        {"ce."}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp14">
                    <path d="M177 76.998h344V101H177Z" />
                  </clipPath>
                  <g clipPath="url(#clp14)">
                    <text className="ps00" transform="translate(182 93.5)">
                      <tspan className="ps03 ps21">{"O"}</tspan>
                      <tspan x={7.212} className="ps03 ps21">
                        {"u"}
                      </tspan>
                      <tspan x="13.02,16.56" className="ps03 ps21">
                        {"tg"}
                      </tspan>
                      <tspan x="22.476,28.488" className="ps03 ps21">
                        {"oi"}
                      </tspan>
                      <tspan x={31.248} className="ps03 ps21">
                        {"n"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="37.056,42.96"
                        className="ps03 ps21"
                      >
                        {"g "}
                      </tspan>
                      <tspan x="45.72,51.468" className="ps03 ps21">
                        {"an"}
                      </tspan>
                      <tspan x={57.276} className="ps03 ps21">
                        {"d"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="63.24,65.988"
                        className="ps03 ps21"
                      >
                        {"\xA0s"}
                      </tspan>
                      <tspan x={71.46} className="ps03 ps21">
                        {"u"}
                      </tspan>
                      <tspan x="77.268,83.184" className="ps03 ps21">
                        {"pp"}
                      </tspan>
                      <tspan x="89.112,95.124" className="ps03 ps21">
                        {"or"}
                      </tspan>
                      <tspan x={98.784} className="ps03 ps21">
                        {"t"}
                      </tspan>
                      <tspan x="102.34,105.08" className="ps03 ps21">
                        {"iv"}
                      </tspan>
                      <tspan x={110.22} className="ps03 ps21">
                        {"e"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="115.85,118.6"
                        className="ps03 ps21"
                      >
                        {"\xA0w"}
                      </tspan>
                      <tspan x="126.4,132.41" className="ps03 ps21">
                        {"or"}
                      </tspan>
                      <tspan x={136.07} className="ps03 ps21">
                        {"k"}
                      </tspan>
                      <tspan x="141.48,147.1" className="ps03 ps21">
                        {"er"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="150.76,153.5"
                        className="ps03 ps21"
                      >
                        {"\xA0w"}
                      </tspan>
                      <tspan x={161.3} className="ps03 ps21">
                        {"i"}
                      </tspan>
                      <tspan x="164.06,167.6" className="ps03 ps21">
                        {"th"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x={173.4}
                        className="ps03 ps21"
                      />
                      <tspan x="176.16,181.62" className="ps03 ps21">
                        {"sk"}
                      </tspan>
                      <tspan x="187.03,189.78" className="ps03 ps21">
                        {"il"}
                      </tspan>
                      <tspan x={192.54} className="ps03 ps21">
                        {"l"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="195.3,200.76"
                        className="ps03 ps21"
                      >
                        {"s "}
                      </tspan>
                      <tspan x={203.52} className="ps03 ps21">
                        {"i"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="206.28,212.08"
                        className="ps03 ps21"
                      >
                        {"n "}
                      </tspan>
                      <tspan x="214.84,220.37" className="ps03 ps21">
                        {"co"}
                      </tspan>
                      <tspan x={226.39} className="ps03 ps21">
                        {"m"}
                      </tspan>
                      <tspan x="235.43,244.45" className="ps03 ps21">
                        {"mu"}
                      </tspan>
                      <tspan x={250.26} className="ps03 ps21">
                        {"n"}
                      </tspan>
                      <tspan x="256.07,258.82" className="ps03 ps21">
                        {"ic"}
                      </tspan>
                      <tspan x="264.36,270.11" className="ps03 ps21">
                        {"at"}
                      </tspan>
                      <tspan x={273.66} className="ps03 ps21">
                        {"i"}
                      </tspan>
                      <tspan x="276.42,282.43" className="ps03 ps21">
                        {"on"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="288.24,290.99"
                        className="ps03 ps21"
                      >
                        {"\xA0a"}
                      </tspan>
                      <tspan x={296.75} className="ps03 ps21">
                        {"n"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="302.56,308.51"
                        className="ps03 ps21"
                      >
                        {"d "}
                      </tspan>
                      <tspan x={311.27} className="ps03 ps21">
                        {"t"}
                      </tspan>
                      <tspan x="314.82,317.57" className="ps03 ps21">
                        {"im"}
                      </tspan>
                      <tspan x={326.6} className="ps03 ps21">
                        {"e"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp15">
                    <path d="M177 91.003h365V115H177Z" />
                  </clipPath>
                  <g clipPath="url(#clp15)">
                    <text className="ps00" transform="translate(182 107.5)">
                      <tspan x="0,9.024" className="ps03 ps21">
                        {"ma"}
                      </tspan>
                      <tspan
                        x="14.784,20.58,26.328,32.232,37.848"
                        className="ps03 ps21"
                      >
                        {"nagem"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="46.884,52.5,58.296,61.836,64.992"
                        className="ps03 ps21"
                      >
                        {"ent. "}
                      </tspan>
                      <tspan x="67.752,74.112,79.728,85.26" className="ps03 ps21">
                        {"Reco"}
                      </tspan>
                      <tspan
                        x="91.284,97.188,102.98,105.73,110.99"
                        className="ps03 ps21"
                      >
                        {"gnize"}
                      </tspan>
                      <tspan
                        x="116.62,122.57,125.32,129.11,135.12"
                        className="ps03 ps21"
                      >
                        {"d for"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="138.78,141.53,147.48,152.47,158.27"
                        className="ps03 ps21"
                      >
                        {"\xA0dyna"}
                      </tspan>
                      <tspan
                        x="164.03,173.05,175.8,181.33,184.08"
                        className="ps03 ps21"
                      >
                        {"mic w"}
                      </tspan>
                      <tspan
                        x="191.88,197.89,201.54,206.94,209.69"
                        className="ps03 ps21"
                      >
                        {"ork e"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="215.32,218.86,224.64,227.39,232.92"
                        className="ps03 ps21"
                      >
                        {"thic "}
                      </tspan>
                      <tspan
                        x="235.68,241.43,247.22,253.18,255.92"
                        className="ps03 ps21"
                      >
                        {"and t"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="259.48,265.09,270.84,279.86"
                        className="ps03 ps21"
                      >
                        {"eam "}
                      </tspan>
                      <tspan
                        x="282.62,288.54,291.29,297.04,302.03"
                        className="ps03 ps21"
                      >
                        {"playe"}
                      </tspan>
                      <tspan
                        x="307.66,311.3,314.05,319.8,323.34"
                        className="ps03 ps21"
                      >
                        {"r att"}
                      </tspan>
                      <tspan
                        x="326.89,329.64,333.18,338.98,344.93"
                        className="ps03 ps21"
                      >
                        {"itude"}
                      </tspan>
                      <tspan x={350.56} className="ps03 ps21">
                        {"."}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp16">
                    <path d="M177 105h312v22H177Z" />
                  </clipPath>
                  <g clipPath="url(#clp16)">
                    <text className="ps00" transform="translate(182 121.5)">
                      <tspan x="0,5.7,11.712,17.724" className="ps03 ps21">
                        {"Look"}
                      </tspan>
                      <tspan
                        x="23.112,25.86,31.656,37.56,40.308,44.1"
                        className="ps03 ps21"
                      >
                        {"ing fo"}
                      </tspan>
                      <tspan
                        x="50.1,53.748,56.496,62.244,64.992,70.896,74.544"
                        className="ps03 ps21"
                      >
                        {"r a gro"}
                      </tspan>
                      <tspan
                        x="80.544,88.332,91.872,97.656,100.63,106.64"
                        className="ps03 ps21"
                      >
                        {"wth-or"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="110.28,113.03,118.64,124.44,127.98,133.6,139.55"
                        className="ps03 ps21"
                      >
                        {"iented "}
                      </tspan>
                      <tspan
                        x="142.28,148.2,154.21,159.67,162.42,165.96"
                        className="ps03 ps21"
                      >
                        {"positi"}
                      </tspan>
                      <tspan
                        x="168.7,174.71,180.5,183.25,186,191.8,194.54"
                        className="ps03 ps21"
                      >
                        {"on in a"}
                      </tspan>
                      <tspan
                        x="200.28,206.08,208.82,214.57,220.52,229.55"
                        className="ps03 ps21"
                      >
                        {"n admi"}
                      </tspan>
                      <tspan
                        x="232.28,238.08,240.83,246.29,249.83,253.48"
                        className="ps03 ps21"
                      >
                        {"nistra"}
                      </tspan>
                      <tspan
                        x="259.21,262.75,265.5,270.62,276.24,278.99,282.64"
                        className="ps03 ps21"
                      >
                        {"tive ro"}
                      </tspan>
                      <tspan x="288.64,291.38,297" className="ps03 ps21">
                        {"le."}
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 535.003)">
              <clipPath id="clp17">
                <path d="M62.002 134H550v56H62.002Z" />
              </clipPath>
              <g clipPath="url(#clp17)">
                <g className="ps00">
                  <clipPath id="clp18">
                    <path d="M177 131h80v22h-80Z" />
                  </clipPath>
                  <g clipPath="url(#clp18)">
                    <text className="ps00" transform="translate(182 145.5)">
                      <tspan
                        x="0,7.2,10.848,16.752,22.5,28.296,31.044"
                        className="ps03 ps21"
                      >
                        {"Organiz"}
                      </tspan>
                      <tspan
                        x="36.288,42.036,45.576,48.324,54.336,60.132,65.88"
                        className="ps03 ps21"
                      >
                        {"ational"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp19">
                    <path d="M177 143h86v24h-86Z" />
                  </clipPath>
                  <g clipPath="url(#clp19)">
                    <text className="ps00" transform="translate(182 159.5)">
                      <tspan className="ps03 ps21">{"C"}</tspan>
                      <tspan x={6.804} className="ps03 ps21">
                        {"o"}
                      </tspan>
                      <tspan x="12.828,21.852" className="ps03 ps21">
                        {"mm"}
                      </tspan>
                      <tspan x="30.888,36.684" className="ps03 ps21">
                        {"un"}
                      </tspan>
                      <tspan x="42.492,45.24" className="ps03 ps21">
                        {"ic"}
                      </tspan>
                      <tspan x="50.784,56.532" className="ps03 ps21">
                        {"at"}
                      </tspan>
                      <tspan x="60.084,62.832" className="ps03 ps21">
                        {"io"}
                      </tspan>
                      <tspan x={68.856} className="ps03 ps21">
                        {"n"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp20">
                    <path d="M177 157h88v24h-88Z" />
                  </clipPath>
                  <g clipPath="url(#clp20)">
                    <text className="ps00" transform="translate(182 173.5)">
                      <tspan x="0,6.648,10.296" className="ps03 ps21">
                        {"Pro"}
                      </tspan>
                      <tspan
                        x="16.296,22.212,24.96,30.576,39.6"
                        className="ps03 ps21"
                      >
                        {"blem-"}
                      </tspan>
                      <tspan
                        x="42.564,48.024,54.036,56.784,61.908"
                        className="ps03 ps21"
                      >
                        {"solvi"}
                      </tspan>
                      <tspan x="64.644,70.44" className="ps03 ps21">
                        {"ng"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp21">
                    <path d="M177 171h100v22H177Z" />
                  </clipPath>
                  <g clipPath="url(#clp21)">
                    <text className="ps00" transform="translate(182 187.5)">
                      <tspan className="ps03 ps21">{"T"}</tspan>
                      <tspan x="6.252,9" className="ps03 ps21">
                        {"im"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="18.036,23.652"
                        className="ps03 ps21"
                      >
                        {"e "}
                      </tspan>
                      <tspan x="26.412,35.436" className="ps03 ps21">
                        {"ma"}
                      </tspan>
                      <tspan x="41.196,46.992" className="ps03 ps21">
                        {"na"}
                      </tspan>
                      <tspan x={52.752} className="ps03 ps21">
                        {"g"}
                      </tspan>
                      <tspan x="58.668,64.284" className="ps03 ps21">
                        {"em"}
                      </tspan>
                      <tspan x="73.32,78.936" className="ps03 ps21">
                        {"en"}
                      </tspan>
                      <tspan x={84.744} className="ps03 ps21">
                        {"t"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp22">
                    <path d="M368 131h102v22H368Z" />
                  </clipPath>
                  <g clipPath="url(#clp22)">
                    <text className="ps00" transform="translate(373 145.5)">
                      <tspan
                        x="0,6.648,10.296,16.308,22.26,28.056,33.588,37.128,39.876,45.276,51.072,57.084,64.872,67.62,73.236,79.188,85.092"
                        className="ps03 ps21"
                      >
                        {"Product knowledge"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp23">
                    <path d="M368 143h74v24h-74Z" />
                  </clipPath>
                  <g clipPath="url(#clp23)">
                    <text className="ps00" transform="translate(373 159.5)">
                      <tspan className="ps03 ps21">{"I"}</tspan>
                      <tspan x="3.012,8.808" className="ps03 ps21">
                        {"nt"}
                      </tspan>
                      <tspan x="12.36,17.976" className="ps03 ps21">
                        {"er"}
                      </tspan>
                      <tspan x="21.636,27.552" className="ps03 ps21">
                        {"pe"}
                      </tspan>
                      <tspan x="33.18,36.828" className="ps03 ps21">
                        {"rs"}
                      </tspan>
                      <tspan x="42.3,48.312" className="ps03 ps21">
                        {"on"}
                      </tspan>
                      <tspan x={54.12} className="ps03 ps21">
                        {"a"}
                      </tspan>
                      <tspan x={59.88} className="ps03 ps21">
                        {"l"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp24">
                    <path d="M368 157h90v24h-90Z" />
                  </clipPath>
                  <g clipPath="url(#clp24)">
                    <text className="ps00" transform="translate(373 173.5)">
                      <tspan className="ps03 ps21">{"T"}</tspan>
                      <tspan x="5.664,11.28" className="ps03 ps21">
                        {"ea"}
                      </tspan>
                      <tspan x="17.04,26.064,28.812" className="ps03 ps21">
                        {"m l"}
                      </tspan>
                      <tspan x="31.572,37.188" className="ps03 ps21">
                        {"ea"}
                      </tspan>
                      <tspan x="42.948,48.9,54.516" className="ps03 ps21">
                        {"der"}
                      </tspan>
                      <tspan x="58.176,63.636,69.42" className="ps03 ps21">
                        {"shi"}
                      </tspan>
                      <tspan x={72.18} className="ps03 ps21">
                        {"p"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp25">
                    <path d="M368 171h83v22h-83Z" />
                  </clipPath>
                  <g clipPath="url(#clp25)">
                    <text className="ps00" transform="translate(373 187.5)">
                      <tspan
                        xmlSpace="preserve"
                        x="0,6.36,11.976,15.516,21.264,24.012,26.76"
                        className="ps03 ps21"
                      >
                        {"Retail "}
                      </tspan>
                      <tspan
                        x="29.496,34.956,40.968,44.76,48.3,56.088,61.836"
                        className="ps03 ps21"
                      >
                        {"softwar"}
                      </tspan>
                      <tspan x={65.472} className="ps03 ps21">
                        {"e"}
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 535.003)">
              <clipPath id="clp26">
                <path d="M62.002 200H550v308H62.002Z" />
              </clipPath>
              <g clipPath="url(#clp26)">
                <g className="ps00">
                  <clipPath id="clp27">
                    <path d="M177 197h92v22h-92Z" />
                  </clipPath>
                  <g clipPath="url(#clp27)">
                    <text className="ps00" transform="translate(182 211.5)">
                      <tspan className="ps03 ps22">{"C"}</tspan>
                      <tspan x={6.852} className="ps03 ps22">
                        {"o"}
                      </tspan>
                      <tspan x={12.828} className="ps03 ps22">
                        {"m"}
                      </tspan>
                      <tspan x="21.732,30.624" className="ps03 ps22">
                        {"mu"}
                      </tspan>
                      <tspan x={36.54} className="ps03 ps22">
                        {"n"}
                      </tspan>
                      <tspan x={42.456} className="ps03 ps22">
                        {"i"}
                      </tspan>
                      <tspan x={45.48} className="ps03 ps22">
                        {"c"}
                      </tspan>
                      <tspan x={51} className="ps03 ps22">
                        {"a"}
                      </tspan>
                      <tspan x="56.652,60.336" className="ps03 ps22">
                        {"ti"}
                      </tspan>
                      <tspan x={63.36} className="ps03 ps22">
                        {"o"}
                      </tspan>
                      <tspan x={69.336} className="ps03 ps22">
                        {"n"}
                      </tspan>
                      <tspan x={75.252} className="ps03 ps22">
                        {"s"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp28">
                    <path d="M200 209h346v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp28)">
                    <text className="ps00" transform="translate(205 225.5)">
                      <tspan
                        x="0,7.08,10.728,16.344,21.96,25.5,31.116,37.068,39.816,45.348,51.144,56.604,60.144,66.156,75.18,80.796,84.444,89.904,92.256,95.004,100.79,106.4,109.15,115.07,120.68,126.64,129.38,132.13,138.14,143.68"
                        className="ps03 ps21"
                      >
                        {"Greeted customers, helped loca"}
                      </tspan>
                      <tspan
                        x="149.41,152.95,158.57,161.32,170.34,175.96,179.6,185.14,190.92,196.67,202.46,208.42,211.16,216.62,222.24,224.99,230.74,236.53,242.48,245.23,250.69,256.49,262.39,268.3,273.91,279.37,282.91,288.53,294.48,297.23,302.69,308.48,311.23"
                        className="ps03 ps21"
                      >
                        {"te merchandise and suggested suit"}
                      </tspan>
                      <tspan
                        x="314.76,320.51,326.42,329.17"
                        className="ps03 ps21"
                      >
                        {"able"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp29">
                    <path d="M200 223h50v24h-50Z" />
                  </clipPath>
                  <g clipPath="url(#clp29)">
                    <text className="ps00" transform="translate(205 239.5)">
                      <tspan className="ps03 ps21">{"o"}</tspan>
                      <tspan x={6.024} className="ps03 ps21">
                        {"p"}
                      </tspan>
                      <tspan x="11.952,15.492" className="ps03 ps21">
                        {"ti"}
                      </tspan>
                      <tspan x="18.252,24.264" className="ps03 ps21">
                        {"on"}
                      </tspan>
                      <tspan x={30.072} className="ps03 ps21">
                        {"s"}
                      </tspan>
                      <tspan x={35.544} className="ps03 ps21">
                        {"."}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <path
                    d="M196.6 219.2c1.32 0 2.4 1.08 2.4 2.4 0 1.32-1.08 2.4-2.4 2.4-1.32 0-2.4-1.08-2.4-2.4 0-1.32 1.08-2.4 2.4-2.4Z"
                    className="ps06"
                  />
                </g>
                <g className="ps00">
                  <clipPath id="clp30">
                    <path d="M200 237h333v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp30)">
                    <text className="ps00" transform="translate(205 253.5)">
                      <tspan x="0,3,8.796" className="ps03 ps21">
                        {"Inc"}
                      </tspan>
                      <tspan x="14.316,17.964,23.58,29.328" className="ps03 ps21">
                        {"reas"}
                      </tspan>
                      <tspan
                        x="34.776,40.392,46.344,49.092"
                        className="ps03 ps21"
                      >
                        {"ed s"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="54.54,60.288,63.036,68.652,74.112"
                        className="ps03 ps21"
                      >
                        {"ales "}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="76.848,82.764,88.68,96.264"
                        className="ps03 ps21"
                      >
                        {"15% "}
                      </tspan>
                      <tspan x="99,104.92,109.91,112.66" className="ps03 ps21">
                        {"by o"}
                      </tspan>
                      <tspan
                        x="118.66,122.45,126.24,131.86,135.5"
                        className="ps03 ps21"
                      >
                        {"fferi"}
                      </tspan>
                      <tspan
                        x="138.24,144.04,149.94,152.69"
                        className="ps03 ps21"
                      >
                        {"ng a"}
                      </tspan>
                      <tspan x="158.42,164.38,169.5,172.25" className="ps03 ps21">
                        {"dvic"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="177.77,183.38,186.13,192.14,197.94"
                        className="ps03 ps21"
                      >
                        {"e on "}
                      </tspan>
                      <tspan
                        x="200.68,206.59,212.39,216.04"
                        className="ps03 ps21"
                      >
                        {"purc"}
                      </tspan>
                      <tspan
                        x="221.56,227.34,233.09,238.55"
                        className="ps03 ps21"
                      >
                        {"hase"}
                      </tspan>
                      <tspan
                        x="244.15,249.61,252.36,258.11,263.9"
                        className="ps03 ps21"
                      >
                        {"s and"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="269.84,272.59,278.51,282.16"
                        className="ps03 ps21"
                      >
                        {"\xA0pro"}
                      </tspan>
                      <tspan
                        x="288.16,297.18,303.19,306.73"
                        className="ps03 ps21"
                      >
                        {"moti"}
                      </tspan>
                      <tspan x="309.47,315.26" className="ps03 ps21">
                        {"ng"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp31">
                    <path d="M200 251h106v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp31)">
                    <text className="ps00" transform="translate(205 267.5)">
                      <tspan x="0,5.748,11.7,17.652" className="ps03 ps21">
                        {"addi"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="20.388,23.928,26.676,32.688,38.484,44.232,46.98"
                        className="ps03 ps21"
                      >
                        {"tional "}
                      </tspan>
                      <tspan
                        x="49.716,55.632,59.28,65.292,71.244,77.04,82.572"
                        className="ps03 ps21"
                      >
                        {"product"}
                      </tspan>
                      <tspan x="86.1,91.56" className="ps03 ps21">
                        {"s."}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <path
                    d="M196.6 247.2a2.4 2.4 0 0 1 2.4 2.4c0 1.32-1.08 2.4-2.4 2.4-1.32 0-2.4-1.08-2.4-2.4a2.4 2.4 0 0 1 2.4-2.4Z"
                    className="ps06"
                  />
                </g>
                <g className="ps00">
                  <clipPath id="clp32">
                    <path d="M200 265h333v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp32)">
                    <text className="ps00" transform="translate(205 281.5)">
                      <tspan x="0,3" className="ps03 ps21">
                        {"In"}
                      </tspan>
                      <tspan x="8.784,12.324,17.94" className="ps03 ps21">
                        {"ter"}
                      </tspan>
                      <tspan x="21.576,27.324,32.856" className="ps03 ps21">
                        {"act"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="36.384,42,47.952"
                        className="ps03 ps21"
                      >
                        {"ed "}
                      </tspan>
                      <tspan x="50.688,58.476,61.224" className="ps03 ps21">
                        {"wit"}
                      </tspan>
                      <tspan x="64.752,70.536,73.284" className="ps03 ps21">
                        {"h a"}
                      </tspan>
                      <tspan x="79.02,84.936,90.948" className="ps03 ps21">
                        {"bou"}
                      </tspan>
                      <tspan x="96.732,100.27,103.02" className="ps03 ps21">
                        {"t 5"}
                      </tspan>
                      <tspan x="108.92,114.84,117.59" className="ps03 ps21">
                        {"0 c"}
                      </tspan>
                      <tspan x="123.11,128.9,134.36" className="ps03 ps21">
                        {"ust"}
                      </tspan>
                      <tspan x="137.89,143.9,152.93" className="ps03 ps21">
                        {"ome"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="158.53,162.18,167.64"
                        className="ps03 ps21"
                      >
                        {"rs "}
                      </tspan>
                      <tspan x="170.38,176.29,181.91" className="ps03 ps21">
                        {"per"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="185.54,188.29,194.24"
                        className="ps03 ps21"
                      >
                        {"\xA0da"}
                      </tspan>
                      <tspan x="199.98,204.97,207.72" className="ps03 ps21">
                        {"y b"}
                      </tspan>
                      <tspan x="213.62,218.62,221.36" className="ps03 ps21">
                        {"y p"}
                      </tspan>
                      <tspan x="227.27,233.05,239.06" className="ps03 ps21">
                        {"hon"}
                      </tspan>
                      <tspan x="244.85,250.46,253.21" className="ps03 ps21">
                        {"e o"}
                      </tspan>
                      <tspan x="259.21,262.86,265.61" className="ps03 ps21">
                        {"r i"}
                      </tspan>
                      <tspan x="268.34,274.14,277.12" className="ps03 ps21">
                        {"n-p"}
                      </tspan>
                      <tspan
                        x="283.02,288.64,292.28,297.74"
                        className="ps03 ps21"
                      >
                        {"erso"}
                      </tspan>
                      <tspan x="303.74,309.54,312.29" className="ps03 ps21">
                        {"n t"}
                      </tspan>
                      <tspan x={315.82} className="ps03 ps21">
                        {"o"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp33">
                    <path d="M200 279h291v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp33)">
                    <text className="ps00" transform="translate(205 295.5)">
                      <tspan x="0,5.916" className="ps03 ps21">
                        {"pr"}
                      </tspan>
                      <tspan x="9.552,15.564" className="ps03 ps21">
                        {"ov"}
                      </tspan>
                      <tspan x="20.676,23.424,29.376" className="ps03 ps21">
                        {"ide"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="34.98,37.728,40.476"
                        className="ps03 ps21"
                      >
                        {"\xA0in"}
                      </tspan>
                      <tspan x="46.26,50.052" className="ps03 ps21">
                        {"fo"}
                      </tspan>
                      <tspan x="56.052,59.7,68.724" className="ps03 ps21">
                        {"rma"}
                      </tspan>
                      <tspan x="74.46,78" className="ps03 ps21">
                        {"ti"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="80.736,86.748,92.544"
                        className="ps03 ps21"
                      >
                        {"on "}
                      </tspan>
                      <tspan x="95.28,101.03" className="ps03 ps21">
                        {"an"}
                      </tspan>
                      <tspan x="106.81,112.76,115.51" className="ps03 ps21">
                        {"d d"}
                      </tspan>
                      <tspan x="121.45,124.2" className="ps03 ps21">
                        {"ir"}
                      </tspan>
                      <tspan x="127.84,133.45,138.98" className="ps03 ps21">
                        {"ect"}
                      </tspan>
                      <tspan x="142.51,148.13" className="ps03 ps21">
                        {"ed"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="154.07,156.82,160.36"
                        className="ps03 ps21"
                      >
                        {"\xA0to"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="166.36,169.1"
                        className="ps03 ps21"
                      >
                        {"\xA0d"}
                      </tspan>
                      <tspan x="175.04,180.66,186.12" className="ps03 ps21">
                        {"esi"}
                      </tspan>
                      <tspan x="188.86,192.5" className="ps03 ps21">
                        {"re"}
                      </tspan>
                      <tspan x="198.11,204.06,206.81" className="ps03 ps21">
                        {"d s"}
                      </tspan>
                      <tspan x="212.26,215.8" className="ps03 ps21">
                        {"ta"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="221.53,225.32,229.12"
                        className="ps03 ps21"
                      >
                        {"ff "}
                      </tspan>
                      <tspan x="231.85,240.88" className="ps03 ps21">
                        {"me"}
                      </tspan>
                      <tspan x="246.48,255.5,261.42" className="ps03 ps21">
                        {"mbe"}
                      </tspan>
                      <tspan x="267.02,270.67,276.13" className="ps03 ps21">
                        {"rs."}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <path
                    d="M196.6 275.2a2.4 2.4 0 0 1 2.4 2.4c0 1.32-1.08 2.4-2.4 2.4-1.32 0-2.4-1.08-2.4-2.4a2.4 2.4 0 0 1 2.4-2.4Z"
                    className="ps06"
                  />
                </g>
                <g className="ps00">
                  <clipPath id="clp34">
                    <path d="M177 293h73v24h-73Z" />
                  </clipPath>
                  <g clipPath="url(#clp34)">
                    <text className="ps00" transform="translate(182 309.5)">
                      <tspan
                        x="0,7.236,11.208,17.232,22.872,28.776,31.788,37.212"
                        className="ps03 ps22"
                      >
                        {"Organiza"}
                      </tspan>
                      <tspan x="42.84,46.524,49.536,55.5" className="ps03 ps22">
                        {"tion"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp35">
                    <path d="M200 307h351v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp35)">
                    <text className="ps00" transform="translate(205 323.5)">
                      <tspan x="0,6.792,12.804" className="ps03 ps21">
                        {"Con"}
                      </tspan>
                      <tspan x="18.588,22.128,25.776" className="ps03 ps21">
                        {"tri"}
                      </tspan>
                      <tspan x="28.512,34.428,40.224" className="ps03 ps21">
                        {"but"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="43.752,49.368,55.32"
                        className="ps03 ps21"
                      >
                        {"ed "}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="58.056,61.596,67.608"
                        className="ps03 ps21"
                      >
                        {"to "}
                      </tspan>
                      <tspan x="70.344,76.296,81.912" className="ps03 ps21">
                        {"des"}
                      </tspan>
                      <tspan x="87.36,90.108" className="ps03 ps21">
                        {"ig"}
                      </tspan>
                      <tspan x="96,101.8,104.54" className="ps03 ps21">
                        {"n a"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="110.28,116.08,122.03"
                        className="ps03 ps21"
                      >
                        {"nd "}
                      </tspan>
                      <tspan x="124.76,130.22,135.84" className="ps03 ps21">
                        {"set"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="139.37,145.16,151.08"
                        className="ps03 ps21"
                      >
                        {"up "}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="153.82,159.83,163.62"
                        className="ps03 ps21"
                      >
                        {"of "}
                      </tspan>
                      <tspan x="166.36,175.38,181" className="ps03 ps21">
                        {"mer"}
                      </tspan>
                      <tspan x="184.63,190.16" className="ps03 ps21">
                        {"ch"}
                      </tspan>
                      <tspan x="195.94,201.68,207.48" className="ps03 ps21">
                        {"and"}
                      </tspan>
                      <tspan x="213.42,216.17,221.63" className="ps03 ps21">
                        {"ise"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="227.23,229.98,235.93"
                        className="ps03 ps21"
                      >
                        {"\xA0di"}
                      </tspan>
                      <tspan x="238.67,244.13,250.04" className="ps03 ps21">
                        {"spl"}
                      </tspan>
                      <tspan x="252.78,258.53,263.52" className="ps03 ps21">
                        {"ays"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="268.97,271.72,277.63"
                        className="ps03 ps21"
                      >
                        {"\xA0pr"}
                      </tspan>
                      <tspan x="281.27,287.28" className="ps03 ps21">
                        {"om"}
                      </tspan>
                      <tspan x="296.29,302.3,305.84" className="ps03 ps21">
                        {"oti"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="308.58,314.38,320.28"
                        className="ps03 ps21"
                      >
                        {"ng "}
                      </tspan>
                      <tspan x="323.02,328.42,334.03" className="ps03 ps21">
                        {"key"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp36">
                    <path d="M200 321h316v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp36)">
                    <text className="ps00" transform="translate(205 337.5)">
                      <tspan className="ps03 ps21">{"p"}</tspan>
                      <tspan x="5.904,9.552" className="ps03 ps21">
                        {"ro"}
                      </tspan>
                      <tspan x="15.552,21.504" className="ps03 ps21">
                        {"du"}
                      </tspan>
                      <tspan x={27.288} className="ps03 ps21">
                        {"c"}
                      </tspan>
                      <tspan x="32.808,36.348" className="ps03 ps21">
                        {"ts"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="41.796,44.148"
                        className="ps03 ps21"
                      >
                        {", "}
                      </tspan>
                      <tspan x={46.884} className="ps03 ps21">
                        {"c"}
                      </tspan>
                      <tspan x="52.404,56.052" className="ps03 ps21">
                        {"re"}
                      </tspan>
                      <tspan x={61.656} className="ps03 ps21">
                        {"a"}
                      </tspan>
                      <tspan x="67.392,70.932" className="ps03 ps21">
                        {"ti"}
                      </tspan>
                      <tspan x="73.668,79.464" className="ps03 ps21">
                        {"ng"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x={85.356}
                        className="ps03 ps21"
                      />
                      <tspan x="88.092,93.84" className="ps03 ps21">
                        {"ae"}
                      </tspan>
                      <tspan x="99.444,104.9" className="ps03 ps21">
                        {"st"}
                      </tspan>
                      <tspan x={108.43} className="ps03 ps21">
                        {"h"}
                      </tspan>
                      <tspan x="114.2,119.82" className="ps03 ps21">
                        {"et"}
                      </tspan>
                      <tspan x={123.35} className="ps03 ps21">
                        {"i"}
                      </tspan>
                      <tspan x="126.08,131.62" className="ps03 ps21">
                        {"ca"}
                      </tspan>
                      <tspan x="137.35,140.1" className="ps03 ps21">
                        {"ll"}
                      </tspan>
                      <tspan x={142.84} className="ps03 ps21">
                        {"y"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="147.82,150.56"
                        className="ps03 ps21"
                      >
                        {"\xA0p"}
                      </tspan>
                      <tspan x="156.47,159.22" className="ps03 ps21">
                        {"le"}
                      </tspan>
                      <tspan x={164.82} className="ps03 ps21">
                        {"a"}
                      </tspan>
                      <tspan x="170.56,176.02" className="ps03 ps21">
                        {"si"}
                      </tspan>
                      <tspan x={178.75} className="ps03 ps21">
                        {"n"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="184.54,190.44"
                        className="ps03 ps21"
                      >
                        {"g "}
                      </tspan>
                      <tspan x="193.18,198.92" className="ps03 ps21">
                        {"ar"}
                      </tspan>
                      <tspan x={202.56} className="ps03 ps21">
                        {"r"}
                      </tspan>
                      <tspan x="206.2,211.94" className="ps03 ps21">
                        {"an"}
                      </tspan>
                      <tspan x="217.73,223.63" className="ps03 ps21">
                        {"ge"}
                      </tspan>
                      <tspan x={229.24} className="ps03 ps21">
                        {"m"}
                      </tspan>
                      <tspan x="238.25,243.86" className="ps03 ps21">
                        {"en"}
                      </tspan>
                      <tspan x="249.65,253.19" className="ps03 ps21">
                        {"ts"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x={258.64}
                        className="ps03 ps21"
                      />
                      <tspan x="261.37,264.91" className="ps03 ps21">
                        {"to"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x={270.91}
                        className="ps03 ps21"
                      />
                      <tspan x="273.65,279.4" className="ps03 ps21">
                        {"at"}
                      </tspan>
                      <tspan x="282.92,286.46" className="ps03 ps21">
                        {"tr"}
                      </tspan>
                      <tspan x={290.1} className="ps03 ps21">
                        {"a"}
                      </tspan>
                      <tspan x="295.84,301.37" className="ps03 ps21">
                        {"ct"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp37">
                    <path d="M200 335h104v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp37)">
                    <text className="ps00" transform="translate(205 351.5)">
                      <tspan x="0,5.532" className="ps03 ps21">
                        {"cu"}
                      </tspan>
                      <tspan
                        x="11.34,16.8,20.34,26.352,35.376,40.992,44.64,47.388,53.136,56.676,60.216,65.832,71.628,75.168,77.916,83.928,89.724"
                        className="ps03 ps21"
                      >
                        {"stomer attention."}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <path
                    d="M196.6 317.2a2.4 2.4 0 1 1-.001 4.801 2.4 2.4 0 0 1 .001-4.801Z"
                    className="ps06"
                  />
                </g>
                <g className="ps00">
                  <clipPath id="clp38">
                    <path d="M200 349h353v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp38)">
                    <text className="ps00" transform="translate(205 365.5)">
                      <tspan
                        x="0,6.54,12.288,15.036,20.784,26.58"
                        className="ps03 ps21"
                      >
                        {"Balanc"}
                      </tspan>
                      <tspan
                        x="32.124,37.74,43.692,46.44,52.188,57.984,63.936,66.684,72.696,76.344,82.248,87.996,93.792,96.54,101.8,107.41,113.36,116.11"
                        className="ps03 ps21"
                      >
                        {"ed and organized c"}
                      </tspan>
                      <tspan
                        x="121.66,127.4,132.86,138.65,141.4,145.04,150.66,156.56,159.31,164.77,168.31,173.93,177.58,180.32,186.24,191.23,193.98"
                        className="ps03 ps21"
                      >
                        {"ash register by h"}
                      </tspan>
                      <tspan
                        x="199.78,205.52,211.32,217.27,220.02,222.77,228.56,234.47,237.22,242.75,248.5,253.96,259.74,262.09,264.84,270.37,276.38,282.18"
                        className="ps03 ps21"
                      >
                        {"andling cash, coun"}
                      </tspan>
                      <tspan
                        x="287.99,291.53,294.28,300.07,305.98,308.72,314.26,320.04,325.79,331.58,337.49"
                        className="ps03 ps21"
                      >
                        {"ting change"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp39">
                    <path d="M200 363h111v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp39)">
                    <text className="ps00" transform="translate(205 379.5)">
                      <tspan
                        x="0,5.748,11.544,17.496,20.244,25.704,29.244,35.256,38.904,41.652,47.448,53.352,56.1,61.632,67.644,73.44,79.356,85.368,91.164,96.624"
                        className="ps03 ps21"
                      >
                        {"and storing coupons."}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <path
                    d="M196.6 359.2c1.32 0 2.4 1.08 2.4 2.4 0 1.32-1.08 2.4-2.4 2.4-1.32 0-2.4-1.08-2.4-2.4 0-1.32 1.08-2.4 2.4-2.4Z"
                    className="ps06"
                  />
                </g>
                <g className="ps00">
                  <clipPath id="clp40">
                    <path d="M200 377h328v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp40)">
                    <text className="ps00" transform="translate(205 393.5)">
                      <tspan x="0,9.06" className="ps03 ps21">
                        {"Ma"}
                      </tspan>
                      <tspan x={14.796} className="ps03 ps21">
                        {"n"}
                      </tspan>
                      <tspan x="20.58,26.328" className="ps03 ps21">
                        {"ag"}
                      </tspan>
                      <tspan x={32.22} className="ps03 ps21">
                        {"e"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="37.824,43.776"
                        className="ps03 ps21"
                      >
                        {"d "}
                      </tspan>
                      <tspan x="46.512,52.428" className="ps03 ps21">
                        {"pr"}
                      </tspan>
                      <tspan x={56.064} className="ps03 ps21">
                        {"o"}
                      </tspan>
                      <tspan x="62.064,71.088" className="ps03 ps21">
                        {"mo"}
                      </tspan>
                      <tspan x="77.088,80.628" className="ps03 ps21">
                        {"ti"}
                      </tspan>
                      <tspan x={83.364} className="ps03 ps21">
                        {"o"}
                      </tspan>
                      <tspan x="89.364,95.16" className="ps03 ps21">
                        {"na"}
                      </tspan>
                      <tspan x={100.9} className="ps03 ps21">
                        {"l"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="103.63,106.38"
                        className="ps03 ps21"
                      >
                        {"\xA0i"}
                      </tspan>
                      <tspan x="109.12,114.91" className="ps03 ps21">
                        {"n-"}
                      </tspan>
                      <tspan x={117.88} className="ps03 ps21">
                        {"s"}
                      </tspan>
                      <tspan x="123.32,126.86" className="ps03 ps21">
                        {"to"}
                      </tspan>
                      <tspan x="132.86,136.51" className="ps03 ps21">
                        {"re"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x={142.12}
                        className="ps03 ps21"
                      />
                      <tspan x="144.85,150.31" className="ps03 ps21">
                        {"si"}
                      </tspan>
                      <tspan x={153.05} className="ps03 ps21">
                        {"g"}
                      </tspan>
                      <tspan x="158.94,164.74" className="ps03 ps21">
                        {"na"}
                      </tspan>
                      <tspan x="170.47,176.38" className="ps03 ps21">
                        {"ge"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x={181.98}
                        className="ps03 ps21"
                      />
                      <tspan x="184.72,190.46" className="ps03 ps21">
                        {"an"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="196.25,202.2"
                        className="ps03 ps21"
                      >
                        {"d "}
                      </tspan>
                      <tspan x={204.94} className="ps03 ps21">
                        {"d"}
                      </tspan>
                      <tspan x="210.88,213.62" className="ps03 ps21">
                        {"is"}
                      </tspan>
                      <tspan x={219.07} className="ps03 ps21">
                        {"p"}
                      </tspan>
                      <tspan x="224.98,227.72" className="ps03 ps21">
                        {"la"}
                      </tspan>
                      <tspan x="233.46,238.45" className="ps03 ps21">
                        {"ys"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x={243.9}
                        className="ps03 ps21"
                      />
                      <tspan x="246.64,252.38" className="ps03 ps21">
                        {"an"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="258.17,264.12"
                        className="ps03 ps21"
                      >
                        {"d "}
                      </tspan>
                      <tspan x={266.86} className="ps03 ps21">
                        {"r"}
                      </tspan>
                      <tspan x="270.49,276.11" className="ps03 ps21">
                        {"e-"}
                      </tspan>
                      <tspan x={279.07} className="ps03 ps21">
                        {"s"}
                      </tspan>
                      <tspan x="284.52,288.06" className="ps03 ps21">
                        {"to"}
                      </tspan>
                      <tspan x="294.06,299.59" className="ps03 ps21">
                        {"ck"}
                      </tspan>
                      <tspan x={304.98} className="ps03 ps21">
                        {"e"}
                      </tspan>
                      <tspan x={310.58} className="ps03 ps21">
                        {"d"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp41">
                    <path d="M200 391h222v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp41)">
                    <text className="ps00" transform="translate(205 407.5)">
                      <tspan x="0,9.024" className="ps03 ps21">
                        {"me"}
                      </tspan>
                      <tspan x={14.628} className="ps03 ps21">
                        {"r"}
                      </tspan>
                      <tspan x="18.264,23.796" className="ps03 ps21">
                        {"ch"}
                      </tspan>
                      <tspan x={29.568} className="ps03 ps21">
                        {"a"}
                      </tspan>
                      <tspan x={35.304} className="ps03 ps21">
                        {"n"}
                      </tspan>
                      <tspan x="41.088,47.04" className="ps03 ps21">
                        {"di"}
                      </tspan>
                      <tspan x={49.776} className="ps03 ps21">
                        {"s"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="55.224,60.84"
                        className="ps03 ps21"
                      >
                        {"e "}
                      </tspan>
                      <tspan x={63.576} className="ps03 ps21">
                        {"f"}
                      </tspan>
                      <tspan x="67.356,71.004" className="ps03 ps21">
                        {"ro"}
                      </tspan>
                      <tspan x={77.004} className="ps03 ps21">
                        {"m"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="86.016,88.764"
                        className="ps03 ps21"
                      >
                        {"\xA0r"}
                      </tspan>
                      <tspan x={92.4} className="ps03 ps21">
                        {"e"}
                      </tspan>
                      <tspan x="98.004,101.54" className="ps03 ps21">
                        {"tu"}
                      </tspan>
                      <tspan x={107.33} className="ps03 ps21">
                        {"r"}
                      </tspan>
                      <tspan x="110.96,116.76" className="ps03 ps21">
                        {"ns"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x={122.21}
                        className="ps03 ps21"
                      />
                      <tspan x="124.94,130.96" className="ps03 ps21">
                        {"or"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x={134.59}
                        className="ps03 ps21"
                      />
                      <tspan x="137.33,143.28" className="ps03 ps21">
                        {"dr"}
                      </tspan>
                      <tspan x={146.92} className="ps03 ps21">
                        {"e"}
                      </tspan>
                      <tspan x="152.52,157.98" className="ps03 ps21">
                        {"ss"}
                      </tspan>
                      <tspan x={163.43} className="ps03 ps21">
                        {"i"}
                      </tspan>
                      <tspan x="166.16,171.96" className="ps03 ps21">
                        {"ng"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x={177.85}
                        className="ps03 ps21"
                      />
                      <tspan x={180.59} className="ps03 ps21">
                        {"r"}
                      </tspan>
                      <tspan x="184.22,190.24" className="ps03 ps21">
                        {"oo"}
                      </tspan>
                      <tspan x={196.24} className="ps03 ps21">
                        {"m"}
                      </tspan>
                      <tspan x={205.25} className="ps03 ps21">
                        {"s"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <path
                    d="M196.6 387.2c1.32 0 2.4 1.08 2.4 2.4 0 1.32-1.08 2.4-2.4 2.4-1.32 0-2.4-1.08-2.4-2.4 0-1.32 1.08-2.4 2.4-2.4Z"
                    className="ps06"
                  />
                </g>
                <g className="ps00">
                  <clipPath id="clp42">
                    <path d="M177 405h91v24h-91Z" />
                  </clipPath>
                  <g clipPath="url(#clp42)">
                    <text className="ps00" transform="translate(182 421.5)">
                      <tspan x="0,6.816" className="ps03 ps22">
                        {"Pr"}
                      </tspan>
                      <tspan x={10.776} className="ps03 ps22">
                        {"o"}
                      </tspan>
                      <tspan x="16.728,22.668" className="ps03 ps22">
                        {"bl"}
                      </tspan>
                      <tspan x={25.668} className="ps03 ps22">
                        {"e"}
                      </tspan>
                      <tspan x="31.392,40.284" className="ps03 ps22">
                        {"m-"}
                      </tspan>
                      <tspan x={44.628} className="ps03 ps22">
                        {"s"}
                      </tspan>
                      <tspan x="50.064,56.028" className="ps03 ps22">
                        {"ol"}
                      </tspan>
                      <tspan x={59.028} className="ps03 ps22">
                        {"v"}
                      </tspan>
                      <tspan x={64.404} className="ps03 ps22">
                        {"i"}
                      </tspan>
                      <tspan x="67.404,73.308" className="ps03 ps22">
                        {"ng"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp43">
                    <path d="M200 419h340v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp43)">
                    <text className="ps00" transform="translate(205 435.5)">
                      <tspan x="0,5.7,11.712" className="ps03 ps21">
                        {"Low"}
                      </tspan>
                      <tspan
                        x="19.512,25.128,28.776,34.392,40.344,43.092,46.632"
                        className="ps03 ps21"
                      >
                        {"ered th"}
                      </tspan>
                      <tspan
                        x="52.428,58.044,61.836,65.376,68.124,74.04"
                        className="ps03 ps21"
                      >
                        {"eft 40"}
                      </tspan>
                      <tspan
                        x="79.968,87.552,90.3,96.216,101.21,103.96"
                        className="ps03 ps21"
                      >
                        {"% by w"}
                      </tspan>
                      <tspan
                        x="111.76,117.5,121.04,126.58,132.36,135.11"
                        className="ps03 ps21"
                      >
                        {"atchin"}
                      </tspan>
                      <tspan
                        x="140.92,146.82,149.57,155.1,160.9,166.36"
                        className="ps03 ps21"
                      >
                        {"g cust"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="169.91,175.92,184.94,190.56,194.21,199.67,202.02"
                        className="ps03 ps21"
                      >
                        {"omers, "}
                      </tspan>
                      <tspan
                        x="204.78,210.58,216.59,220.13,222.88,228.41"
                        className="ps03 ps21"
                      >
                        {"notici"}
                      </tspan>
                      <tspan
                        x="231.17,236.96,242.87,245.62,251.08,256.69"
                        className="ps03 ps21"
                      >
                        {"ng sec"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="262.24,268.03,271.68,274.43,277.97,282.96"
                        className="ps03 ps21"
                      >
                        {"urity "}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="285.72,289.37,292.12,297.58,302.98,308.44"
                        className="ps03 ps21"
                      >
                        {"risks "}
                      </tspan>
                      <tspan x="311.2,316.94,322.74" className="ps03 ps21">
                        {"and"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp44">
                    <path d="M200 433h183v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp44)">
                    <text className="ps00" transform="translate(205 449.5)">
                      <tspan className="ps03 ps21">{"r"}</tspan>
                      <tspan x="3.66,9.276" className="ps03 ps21">
                        {"ep"}
                      </tspan>
                      <tspan x={15.204} className="ps03 ps21">
                        {"o"}
                      </tspan>
                      <tspan x="21.228,24.876" className="ps03 ps21">
                        {"rt"}
                      </tspan>
                      <tspan x="28.428,31.176" className="ps03 ps21">
                        {"in"}
                      </tspan>
                      <tspan x={36.984} className="ps03 ps21">
                        {"g"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="42.9,45.648"
                        className="ps03 ps21"
                      >
                        {"\xA0t"}
                      </tspan>
                      <tspan x={49.2} className="ps03 ps21">
                        {"o"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="55.224,57.972"
                        className="ps03 ps21"
                      >
                        {"\xA0m"}
                      </tspan>
                      <tspan x="67.008,72.756" className="ps03 ps21">
                        {"an"}
                      </tspan>
                      <tspan x={78.564} className="ps03 ps21">
                        {"a"}
                      </tspan>
                      <tspan x="84.324,90.228" className="ps03 ps21">
                        {"ge"}
                      </tspan>
                      <tspan x={95.856} className="ps03 ps21">
                        {"r"}
                      </tspan>
                      <tspan x="99.516,103.96" className="ps03 ps21">
                        {"/s"}
                      </tspan>
                      <tspan x="109.43,115.04" className="ps03 ps21">
                        {"ec"}
                      </tspan>
                      <tspan x={120.59} className="ps03 ps21">
                        {"u"}
                      </tspan>
                      <tspan x="126.4,130.04" className="ps03 ps21">
                        {"ri"}
                      </tspan>
                      <tspan x={132.8} className="ps03 ps21">
                        {"t"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="136.36,141.35"
                        className="ps03 ps21"
                      >
                        {"y "}
                      </tspan>
                      <tspan x="144.11,147.65" className="ps03 ps21">
                        {"te"}
                      </tspan>
                      <tspan x={153.28} className="ps03 ps21">
                        {"a"}
                      </tspan>
                      <tspan x="159.04,168.06" className="ps03 ps21">
                        {"m."}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <path
                    d="M196.6 429.2a2.4 2.4 0 0 1 2.4 2.4c0 1.32-1.08 2.4-2.4 2.4-1.32 0-2.4-1.08-2.4-2.4a2.4 2.4 0 0 1 2.4-2.4Z"
                    className="ps06"
                  />
                </g>
                <g className="ps00">
                  <clipPath id="clp45">
                    <path d="M200 447h342v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp45)">
                    <text className="ps00" transform="translate(205 463.5)">
                      <tspan x="0,6.912" className="ps03 ps21">
                        {"Ap"}
                      </tspan>
                      <tspan x="12.816,18.732" className="ps03 ps21">
                        {"pr"}
                      </tspan>
                      <tspan x="22.368,28.38" className="ps03 ps21">
                        {"oa"}
                      </tspan>
                      <tspan x="34.116,39.648,45.432" className="ps03 ps21">
                        {"che"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="51.036,56.988"
                        className="ps03 ps21"
                      >
                        {"d "}
                      </tspan>
                      <tspan x="59.724,65.34" className="ps03 ps21">
                        {"ea"}
                      </tspan>
                      <tspan x="71.076,76.608" className="ps03 ps21">
                        {"ch"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="82.38,85.128,91.044"
                        className="ps03 ps21"
                      >
                        {"\xA0pr"}
                      </tspan>
                      <tspan x="94.68,100.69" className="ps03 ps21">
                        {"ob"}
                      </tspan>
                      <tspan x="106.6,109.34" className="ps03 ps21">
                        {"le"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="114.95,123.97"
                        className="ps03 ps21"
                      >
                        {"m "}
                      </tspan>
                      <tspan x="126.71,134.5,137.24" className="ps03 ps21">
                        {"wit"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="140.77,146.56"
                        className="ps03 ps21"
                      >
                        {"h "}
                      </tspan>
                      <tspan x="149.29,153.08" className="ps03 ps21">
                        {"fr"}
                      </tspan>
                      <tspan x="156.72,162.34,167.8" className="ps03 ps21">
                        {"esh"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="173.57,176.32"
                        className="ps03 ps21"
                      >
                        {"\xA0m"}
                      </tspan>
                      <tspan x="185.33,188.08" className="ps03 ps21">
                        {"in"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="193.86,199.81"
                        className="ps03 ps21"
                      >
                        {"d "}
                      </tspan>
                      <tspan x="202.55,208.3,214.09" className="ps03 ps21">
                        {"and"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="220.03,222.78"
                        className="ps03 ps21"
                      >
                        {"\xA0a"}
                      </tspan>
                      <tspan x="228.52,234.31" className="ps03 ps21">
                        {"na"}
                      </tspan>
                      <tspan x="240.05,242.8" className="ps03 ps21">
                        {"ly"}
                      </tspan>
                      <tspan x="247.78,251.32,254.06" className="ps03 ps21">
                        {"tic"}
                      </tspan>
                      <tspan x="259.58,265.33" className="ps03 ps21">
                        {"al"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="268.07,270.82"
                        className="ps03 ps21"
                      >
                        {"\xA0s"}
                      </tspan>
                      <tspan x="276.26,279.8" className="ps03 ps21">
                        {"tr"}
                      </tspan>
                      <tspan x="283.44,289.19,292.73" className="ps03 ps21">
                        {"ate"}
                      </tspan>
                      <tspan x="298.33,304.24" className="ps03 ps21">
                        {"gi"}
                      </tspan>
                      <tspan x="306.97,312.59" className="ps03 ps21">
                        {"es"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="318.04,320.78,324.32"
                        className="ps03 ps21"
                      >
                        {"\xA0to"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp46">
                    <path d="M200 461h131v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp46)">
                    <text className="ps00" transform="translate(205 477.5)">
                      <tspan
                        xmlSpace="preserve"
                        x="0,6,11.796,14.544,20.076,25.476,28.224,33.216"
                        className="ps03 ps21"
                      >
                        {"quickly "}
                      </tspan>
                      <tspan
                        x="35.952,39.6,45.216,50.676,56.688,59.436,64.56,70.176,72.924"
                        className="ps03 ps21"
                      >
                        {"resolve c"}
                      </tspan>
                      <tspan
                        x="78.444,84.456,90.252,95.784,101.4,105.05,110.84,116.3"
                        className="ps03 ps21"
                      >
                        {"oncerns."}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <path
                    d="M196.6 457.2a2.4 2.4 0 1 1-.001 4.801 2.4 2.4 0 0 1 .001-4.801Z"
                    className="ps06"
                  />
                </g>
                <g className="ps00">
                  <clipPath id="clp47">
                    <path d="M200 475h312v24H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp47)">
                    <text className="ps00" transform="translate(205 491.5)">
                      <tspan x="0,6.648,12.444" className="ps03 ps21">
                        {"Pur"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="16.08,21.54,27.336,32.952,38.904"
                        className="ps03 ps21"
                      >
                        {"sued "}
                      </tspan>
                      <tspan x="41.64,45.288,50.904,56.364" className="ps03 ps21">
                        {"reso"}
                      </tspan>
                      <tspan
                        x="62.364,65.112,70.908,74.448"
                        className="ps03 ps21"
                      >
                        {"luti"}
                      </tspan>
                      <tspan
                        x="77.184,83.196,88.992,94.452,97.2"
                        className="ps03 ps21"
                      >
                        {"ons t"}
                      </tspan>
                      <tspan
                        x="100.73,106.74,109.49,115.24"
                        className="ps03 ps21"
                      >
                        {"o ac"}
                      </tspan>
                      <tspan
                        x="120.76,126.54,129.29,134.9,140.03"
                        className="ps03 ps21"
                      >
                        {"hieve"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="145.63,148.38,153.91,159.92"
                        className="ps03 ps21"
                      >
                        {"\xA0com"}
                      </tspan>
                      <tspan
                        x="168.94,174.85,177.6,183.22,186.76"
                        className="ps03 ps21"
                      >
                        {"plete"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="192.36,195.11,200.64,206.44"
                        className="ps03 ps21"
                      >
                        {"\xA0cus"}
                      </tspan>
                      <tspan
                        x="211.88,215.42,221.44,230.46"
                        className="ps03 ps21"
                      >
                        {"tome"}
                      </tspan>
                      <tspan
                        x="236.06,239.71,242.46,247.92,253.67"
                        className="ps03 ps21"
                      >
                        {"r sat"}
                      </tspan>
                      <tspan x="257.2,259.94,265.4,269.2" className="ps03 ps21">
                        {"isfa"}
                      </tspan>
                      <tspan
                        x="274.93,280.46,284,286.75,292.76"
                        className="ps03 ps21"
                      >
                        {"ction"}
                      </tspan>
                      <tspan x={298.55} className="ps03 ps21">
                        {","}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp48">
                    <path d="M200 489h343v22H200Z" />
                  </clipPath>
                  <g clipPath="url(#clp48)">
                    <text className="ps00" transform="translate(205 505.5)">
                      <tspan x="0,2.748" className="ps03 ps21">
                        {"in"}
                      </tspan>
                      <tspan x="8.532,14.064,16.812" className="ps03 ps21">
                        {"clu"}
                      </tspan>
                      <tspan
                        x="22.596,28.548,31.296,37.092"
                        className="ps03 ps21"
                      >
                        {"ding"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="42.984,45.732,49.272"
                        className="ps03 ps21"
                      >
                        {"\xA0tr"}
                      </tspan>
                      <tspan x="52.908,58.656,64.188" className="ps03 ps21">
                        {"ack"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="69.576,72.324,78.12,84.024"
                        className="ps03 ps21"
                      >
                        {"ing "}
                      </tspan>
                      <tspan x="86.76,92.712,98.724" className="ps03 ps21">
                        {"dow"}
                      </tspan>
                      <tspan x="106.5,112.3,115.04" className="ps03 ps21">
                        {"n h"}
                      </tspan>
                      <tspan x="120.82,126.56,130.21" className="ps03 ps21">
                        {"ard"}
                      </tspan>
                      <tspan
                        x="136.15,139.13,142.67,148.68"
                        className="ps03 ps21"
                      >
                        {"-to-"}
                      </tspan>
                      <tspan x="151.64,155.44,158.18" className="ps03 ps21">
                        {"fin"}
                      </tspan>
                      <tspan x="163.97,169.92,172.67" className="ps03 ps21">
                        {"d m"}
                      </tspan>
                      <tspan x="181.68,187.3,190.94,196.48" className="ps03 ps21">
                        {"erch"}
                      </tspan>
                      <tspan x="202.25,208,213.79" className="ps03 ps21">
                        {"and"}
                      </tspan>
                      <tspan x="219.73,222.48,227.94" className="ps03 ps21">
                        {"ise"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="233.54,236.29,242.04"
                        className="ps03 ps21"
                      >
                        {"\xA0at"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="245.57,248.32,254.27,257.02"
                        className="ps03 ps21"
                      >
                        {"\xA0div"}
                      </tspan>
                      <tspan x="262.13,267.74,271.39" className="ps03 ps21">
                        {"ers"}
                      </tspan>
                      <tspan x="276.84,282.46,285.2" className="ps03 ps21">
                        {"e l"}
                      </tspan>
                      <tspan x="287.94,293.95,299.48" className="ps03 ps21">
                        {"oca"}
                      </tspan>
                      <tspan
                        x="305.22,308.76,311.51,317.52"
                        className="ps03 ps21"
                      >
                        {"tion"}
                      </tspan>
                      <tspan x="323.3,328.76" className="ps03 ps21">
                        {"s."}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <path
                    d="M196.6 485.2a2.4 2.4 0 1 1-.001 4.801 2.4 2.4 0 0 1 .001-4.801Z"
                    className="ps06"
                  />
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 535.003)">
              <clipPath id="clp49">
                <path d="M62.002 518H550v96H62.002Z" />
              </clipPath>
              <g clipPath="url(#clp49)">
                <g className="ps00">
                  <clipPath id="clp50">
                    <path d="M177 515h88v22h-88Z" />
                  </clipPath>
                  <g clipPath="url(#clp50)">
                    <text className="ps00" transform="translate(182 529.5)">
                      <tspan className="ps03 ps22">{"S"}</tspan>
                      <tspan x="6.492,12.132" className="ps03 ps22">
                        {"al"}
                      </tspan>
                      <tspan x="15.156,20.892" className="ps03 ps22">
                        {"es"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="26.352,29.112"
                        className="ps03 ps22"
                      >
                        {"\xA0A"}
                      </tspan>
                      <tspan x="36.288,41.736" className="ps03 ps22">
                        {"ss"}
                      </tspan>
                      <tspan x="47.196,53.16" className="ps03 ps22">
                        {"oc"}
                      </tspan>
                      <tspan x="58.68,61.692" className="ps03 ps22">
                        {"ia"}
                      </tspan>
                      <tspan x="67.344,71.028" className="ps03 ps22">
                        {"te"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp51">
                    <path d="M260 515h17v22h-17Z" />
                  </clipPath>
                  <g clipPath="url(#clp51)">
                    <text className="ps00" transform="translate(265.512 529.5)">
                      <tspan
                        xmlSpace="preserve"
                        x="0,4.032"
                        className="ps03 ps21"
                      >
                        {"\u2022 "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp52">
                    <path d="M270 515h56v22h-56Z" />
                  </clipPath>
                  <g clipPath="url(#clp52)">
                    <text
                      className="ps00"
                      transform="matrix(1 0 -.25 1 276.299 529.5)"
                    >
                      <tspan className="ps03 ps21">{"W"}</tspan>
                      <tspan x={9.156} className="ps03 ps21">
                        {"a"}
                      </tspan>
                      <tspan x={14.916} className="ps03 ps21">
                        {"l"}
                      </tspan>
                      <tspan x={17.688} className="ps03 ps21">
                        {"m"}
                      </tspan>
                      <tspan x={26.736} className="ps03 ps21">
                        {"a"}
                      </tspan>
                      <tspan x={32.496} className="ps03 ps21">
                        {"r"}
                      </tspan>
                      <tspan x={36.168} className="ps03 ps21">
                        {"t"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp53">
                    <path d="M177 527h63v24h-63Z" />
                  </clipPath>
                  <g clipPath="url(#clp53)">
                    <text className="ps00" transform="translate(182 543.5)">
                      <tspan x="0,6.792" className="ps03 ps21">
                        {"Ch"}
                      </tspan>
                      <tspan x="12.564,18.312" className="ps03 ps21">
                        {"ar"}
                      </tspan>
                      <tspan x="21.948,24.696" className="ps03 ps21">
                        {"le"}
                      </tspan>
                      <tspan x="30.3,35.76" className="ps03 ps21">
                        {"st"}
                      </tspan>
                      <tspan x={39.288} className="ps03 ps21">
                        {"o"}
                      </tspan>
                      <tspan x={45.288} className="ps03 ps21">
                        {"n"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp54">
                    <path d="M228 527h15v24h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp54)">
                    <text className="ps00" transform="translate(233.1 543.5)">
                      <tspan
                        xmlSpace="preserve"
                        x="0,2.352"
                        className="ps03 ps21"
                      >
                        {", "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp55">
                    <path d="M233 527h25v24h-25Z" />
                  </clipPath>
                  <g clipPath="url(#clp55)">
                    <text className="ps00" transform="translate(238.2 543.5)">
                      <tspan x="0,6.216" className="ps03 ps21">
                        {"SC"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp56">
                    <path d="M252 527h17v24h-17Z" />
                  </clipPath>
                  <g clipPath="url(#clp56)">
                    <text className="ps00" transform="translate(257.962 543.5)">
                      <tspan
                        xmlSpace="preserve"
                        x="0,4.032"
                        className="ps03 ps21"
                      >
                        {"\u2022 "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp57">
                    <path d="M263 527h90v24h-90Z" />
                  </clipPath>
                  <g clipPath="url(#clp57)">
                    <text className="ps00" transform="translate(268.75 543.5)">
                      <tspan x="0,6.216" className="ps03 ps21">
                        {"Se"}
                      </tspan>
                      <tspan x="11.844,17.76" className="ps03 ps21">
                        {"pt"}
                      </tspan>
                      <tspan x="21.312,26.928,35.952" className="ps03 ps21">
                        {"emb"}
                      </tspan>
                      <tspan x="41.88,47.496" className="ps03 ps21">
                        {"er"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="51.156,53.904,59.82"
                        className="ps03 ps21"
                      >
                        {"\xA020"}
                      </tspan>
                      <tspan x="65.748,71.664" className="ps03 ps21">
                        {"19"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp58">
                    <path d="M341 527h25v24h-25Z" />
                  </clipPath>
                  <g clipPath="url(#clp58)">
                    <text className="ps00" transform="translate(346.337 543.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21" />
                      <tspan x={2.712} className="ps03 ps21">
                        {"t"}
                      </tspan>
                      <tspan x={6.216} className="ps03 ps21">
                        {"o"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x={12.204}
                        className="ps03 ps21"
                      />
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp59">
                    <path d="M356 527h47v24h-47Z" />
                  </clipPath>
                  <g clipPath="url(#clp59)">
                    <text className="ps00" transform="translate(361.287 543.5)">
                      <tspan className="ps03 ps21">{"C"}</tspan>
                      <tspan x={6.78} className="ps03 ps21">
                        {"u"}
                      </tspan>
                      <tspan x={12.564} className="ps03 ps21">
                        {"r"}
                      </tspan>
                      <tspan x={16.2} className="ps03 ps21">
                        {"r"}
                      </tspan>
                      <tspan x={19.836} className="ps03 ps21">
                        {"e"}
                      </tspan>
                      <tspan x={25.44} className="ps03 ps21">
                        {"n"}
                      </tspan>
                      <tspan x={31.224} className="ps03 ps21">
                        {"t"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp60">
                    <path d="M177 547h119v24H177Z" />
                  </clipPath>
                  <g clipPath="url(#clp60)">
                    <text className="ps00" transform="translate(182 563.5)">
                      <tspan className="ps03 ps22">{"R"}</tspan>
                      <tspan x="6.648,12.384" className="ps03 ps22">
                        {"et"}
                      </tspan>
                      <tspan x={16.08} className="ps03 ps22">
                        {"a"}
                      </tspan>
                      <tspan x="21.732,24.744" className="ps03 ps22">
                        {"il"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="27.768,30.528"
                        className="ps03 ps22"
                      >
                        {"\xA0S"}
                      </tspan>
                      <tspan x="37.02,42.66" className="ps03 ps22">
                        {"al"}
                      </tspan>
                      <tspan x="45.684,51.42" className="ps03 ps22">
                        {"es"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="56.88,59.64"
                        className="ps03 ps22"
                      >
                        {"\xA0A"}
                      </tspan>
                      <tspan x={66.816} className="ps03 ps22">
                        {"s"}
                      </tspan>
                      <tspan x="72.276,77.724" className="ps03 ps22">
                        {"so"}
                      </tspan>
                      <tspan x="83.7,89.208" className="ps03 ps22">
                        {"ci"}
                      </tspan>
                      <tspan x="92.232,97.872" className="ps03 ps22">
                        {"at"}
                      </tspan>
                      <tspan x={101.57} className="ps03 ps22">
                        {"e"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp61">
                    <path d="M291 547h16.01v24H291Z" />
                  </clipPath>
                  <g clipPath="url(#clp61)">
                    <text className="ps00" transform="translate(296.049 563.5)">
                      <tspan
                        xmlSpace="preserve"
                        x="0,4.032"
                        className="ps03 ps21"
                      >
                        {"\u2022 "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp62">
                    <path d="M300 547h121v24H300Z" />
                  </clipPath>
                  <g clipPath="url(#clp62)">
                    <text
                      className="ps00"
                      transform="matrix(1 0 -.25 1 306.837 563.5)"
                    >
                      <tspan x="0,6.84,9.588,15.12" className="ps03 ps21">
                        {"Dick"}
                      </tspan>
                      <tspan
                        x="20.508,22.596,28.056,30.804"
                        className="ps03 ps21"
                      >
                        {"'s S"}
                      </tspan>
                      <tspan x="37.008,42.924,48.936" className="ps03 ps21">
                        {"por"}
                      </tspan>
                      <tspan x="52.572,56.112,58.86,64.656" className="ps03 ps21">
                        {"ting"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="70.548,73.296,80.376,86.388"
                        className="ps03 ps21"
                      >
                        {"\xA0Goo"}
                      </tspan>
                      <tspan x="92.388,98.34" className="ps03 ps21">
                        {"ds"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp63">
                    <path d="M177 561h63v24h-63Z" />
                  </clipPath>
                  <g clipPath="url(#clp63)">
                    <text className="ps00" transform="translate(182 577.5)">
                      <tspan x="0,6.792" className="ps03 ps21">
                        {"Ch"}
                      </tspan>
                      <tspan x="12.564,18.312" className="ps03 ps21">
                        {"ar"}
                      </tspan>
                      <tspan x="21.948,24.696" className="ps03 ps21">
                        {"le"}
                      </tspan>
                      <tspan x="30.3,35.76" className="ps03 ps21">
                        {"st"}
                      </tspan>
                      <tspan x={39.288} className="ps03 ps21">
                        {"o"}
                      </tspan>
                      <tspan x={45.288} className="ps03 ps21">
                        {"n"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp64">
                    <path d="M228 561h15v24h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp64)">
                    <text className="ps00" transform="translate(233.1 577.5)">
                      <tspan
                        xmlSpace="preserve"
                        x="0,2.352"
                        className="ps03 ps21"
                      >
                        {", "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp65">
                    <path d="M233 561h25v24h-25Z" />
                  </clipPath>
                  <g clipPath="url(#clp65)">
                    <text className="ps00" transform="translate(238.2 577.5)">
                      <tspan x="0,6.216" className="ps03 ps21">
                        {"SC"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp66">
                    <path d="M252 561h17v24h-17Z" />
                  </clipPath>
                  <g clipPath="url(#clp66)">
                    <text className="ps00" transform="translate(257.962 577.5)">
                      <tspan
                        xmlSpace="preserve"
                        x="0,4.032"
                        className="ps03 ps21"
                      >
                        {"\u2022 "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp67">
                    <path d="M263 561h58v24h-58Z" />
                  </clipPath>
                  <g clipPath="url(#clp67)">
                    <text className="ps00" transform="translate(268.75 577.5)">
                      <tspan className="ps03 ps21">{"J"}</tspan>
                      <tspan x="5.808,11.604" className="ps03 ps21">
                        {"ul"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="14.364,19.356"
                        className="ps03 ps21"
                      >
                        {"y "}
                      </tspan>
                      <tspan x="22.116,28.032" className="ps03 ps21">
                        {"20"}
                      </tspan>
                      <tspan x="33.96,39.876" className="ps03 ps21">
                        {"18"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp68">
                    <path d="M309 561h25v24h-25Z" />
                  </clipPath>
                  <g clipPath="url(#clp68)">
                    <text className="ps00" transform="translate(314.549 577.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21" />
                      <tspan x={2.712} className="ps03 ps21">
                        {"t"}
                      </tspan>
                      <tspan x={6.216} className="ps03 ps21">
                        {"o"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x={12.204}
                        className="ps03 ps21"
                      />
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp69">
                    <path d="M324 561h72v24h-72Z" />
                  </clipPath>
                  <g clipPath="url(#clp69)">
                    <text className="ps00" transform="translate(329.5 577.5)">
                      <tspan
                        x="0,6.912,12.708,18.612,24.408,29.868,33.408,36.156,42.072,47.988,53.904"
                        className="ps03 ps21"
                      >
                        {"August 2019"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp70">
                    <path d="M177 581h48v24h-48Z" />
                  </clipPath>
                  <g clipPath="url(#clp70)">
                    <text className="ps00" transform="translate(182 597.5)">
                      <tspan className="ps03 ps22">{"C"}</tspan>
                      <tspan x="6.852,12.492" className="ps03 ps22">
                        {"as"}
                      </tspan>
                      <tspan x={17.952} className="ps03 ps22">
                        {"h"}
                      </tspan>
                      <tspan x="23.868,26.88" className="ps03 ps22">
                        {"ie"}
                      </tspan>
                      <tspan x={32.628} className="ps03 ps22">
                        {"r"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp71">
                    <path d="M220 581h17v24h-17Z" />
                  </clipPath>
                  <g clipPath="url(#clp71)">
                    <text className="ps00" transform="translate(225.35 597.5)">
                      <tspan
                        xmlSpace="preserve"
                        x="0,4.032"
                        className="ps03 ps21"
                      >
                        {"\u2022 "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp72">
                    <path d="M230 581h46v24h-46Z" />
                  </clipPath>
                  <g clipPath="url(#clp72)">
                    <text
                      className="ps00"
                      transform="matrix(1 0 -.25 1 236.137 597.5)"
                    >
                      <tspan className="ps03 ps21">{"T"}</tspan>
                      <tspan x={5.592} className="ps03 ps21">
                        {"a"}
                      </tspan>
                      <tspan x={11.316} className="ps03 ps21">
                        {"r"}
                      </tspan>
                      <tspan x={14.94} className="ps03 ps21">
                        {"g"}
                      </tspan>
                      <tspan x={20.82} className="ps03 ps21">
                        {"e"}
                      </tspan>
                      <tspan x={26.412} className="ps03 ps21">
                        {"t"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp73">
                    <path d="M177 595h63v22h-63Z" />
                  </clipPath>
                  <g clipPath="url(#clp73)">
                    <text className="ps00" transform="translate(182 611.5)">
                      <tspan x="0,6.792" className="ps03 ps21">
                        {"Ch"}
                      </tspan>
                      <tspan x="12.564,18.312" className="ps03 ps21">
                        {"ar"}
                      </tspan>
                      <tspan x="21.948,24.696" className="ps03 ps21">
                        {"le"}
                      </tspan>
                      <tspan x="30.3,35.76" className="ps03 ps21">
                        {"st"}
                      </tspan>
                      <tspan x={39.288} className="ps03 ps21">
                        {"o"}
                      </tspan>
                      <tspan x={45.288} className="ps03 ps21">
                        {"n"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp74">
                    <path d="M228 595h15v22h-15Z" />
                  </clipPath>
                  <g clipPath="url(#clp74)">
                    <text className="ps00" transform="translate(233.1 611.5)">
                      <tspan
                        xmlSpace="preserve"
                        x="0,2.352"
                        className="ps03 ps21"
                      >
                        {", "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp75">
                    <path d="M233 595h25v22h-25Z" />
                  </clipPath>
                  <g clipPath="url(#clp75)">
                    <text className="ps00" transform="translate(238.2 611.5)">
                      <tspan x="0,6.216" className="ps03 ps21">
                        {"SC"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp76">
                    <path d="M252 595h17v22h-17Z" />
                  </clipPath>
                  <g clipPath="url(#clp76)">
                    <text className="ps00" transform="translate(257.962 611.5)">
                      <tspan
                        xmlSpace="preserve"
                        x="0,4.032"
                        className="ps03 ps21"
                      >
                        {"\u2022 "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp77">
                    <path d="M263 595h58v22h-58Z" />
                  </clipPath>
                  <g clipPath="url(#clp77)">
                    <text className="ps00" transform="translate(268.75 611.5)">
                      <tspan x="0,9.06" className="ps03 ps21">
                        {"Ma"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="14.796,19.788"
                        className="ps03 ps21"
                      >
                        {"y "}
                      </tspan>
                      <tspan x="22.524,28.44" className="ps03 ps21">
                        {"20"}
                      </tspan>
                      <tspan x={34.344} className="ps03 ps21">
                        {"1"}
                      </tspan>
                      <tspan x={40.248} className="ps03 ps21">
                        {"6"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp78">
                    <path d="M309 595h25v22h-25Z" />
                  </clipPath>
                  <g clipPath="url(#clp78)">
                    <text className="ps00" transform="translate(314.924 611.5)">
                      <tspan xmlSpace="preserve" className="ps03 ps21" />
                      <tspan x={2.712} className="ps03 ps21">
                        {"t"}
                      </tspan>
                      <tspan x={6.216} className="ps03 ps21">
                        {"o"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x={12.204}
                        className="ps03 ps21"
                      />
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp79">
                    <path d="M324 595h58v22h-58Z" />
                  </clipPath>
                  <g clipPath="url(#clp79)">
                    <text className="ps00" transform="translate(329.875 611.5)">
                      <tspan className="ps03 ps21">{"J"}</tspan>
                      <tspan x="5.808,11.604" className="ps03 ps21">
                        {"ul"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="14.364,19.356"
                        className="ps03 ps21"
                      >
                        {"y "}
                      </tspan>
                      <tspan x="22.116,28.032" className="ps03 ps21">
                        {"20"}
                      </tspan>
                      <tspan x="33.96,39.876" className="ps03 ps21">
                        {"17"}
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 535.003)">
              <clipPath id="clp80">
                <path d="M62.002 624H550v28H62.002Z" />
              </clipPath>
              <g clipPath="url(#clp80)">
                <g className="ps00">
                  <clipPath id="clp81">
                    <path d="M177 621h112v22H177Z" />
                  </clipPath>
                  <g clipPath="url(#clp81)">
                    <text className="ps00" transform="translate(182 635.5)">
                      <tspan className="ps03 ps22">{"H"}</tspan>
                      <tspan x={7.368} className="ps03 ps22">
                        {"i"}
                      </tspan>
                      <tspan x="10.392,16.416" className="ps03 ps22">
                        {"gh"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x={22.332}
                        className="ps03 ps22"
                      />
                      <tspan x={25.104} className="ps03 ps22">
                        {"S"}
                      </tspan>
                      <tspan x="31.596,37.104" className="ps03 ps22">
                        {"ch"}
                      </tspan>
                      <tspan x={43.02} className="ps03 ps22">
                        {"o"}
                      </tspan>
                      <tspan x="48.996,54.96" className="ps03 ps22">
                        {"ol"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x={57.984}
                        className="ps03 ps22"
                      />
                      <tspan x="60.756,67.524" className="ps03 ps22">
                        {"Di"}
                      </tspan>
                      <tspan x={70.548} className="ps03 ps22">
                        {"p"}
                      </tspan>
                      <tspan x={76.5} className="ps03 ps22">
                        {"l"}
                      </tspan>
                      <tspan x="79.524,85.488" className="ps03 ps22">
                        {"om"}
                      </tspan>
                      <tspan x={94.392} className="ps03 ps22">
                        {"a"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp82">
                    <path d="M283 621h17v22h-17Z" />
                  </clipPath>
                  <g clipPath="url(#clp82)">
                    <text className="ps00" transform="translate(288.787 635.5)">
                      <tspan
                        xmlSpace="preserve"
                        x="0,4.032"
                        className="ps03 ps21"
                      >
                        {"\u2022 "}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp83">
                    <path d="M293 621h144v22H293Z" />
                  </clipPath>
                  <g clipPath="url(#clp83)">
                    <text
                      className="ps00"
                      transform="matrix(1 0 -.25 1 299.575 635.5)"
                    >
                      <tspan
                        x="0,9.06,14.676,18.324,23.856"
                        className="ps03 ps21"
                      >
                        {"Mercy"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="28.836,31.584,40.644,46.176,53.088,58.884,61.632,67.248"
                        className="ps03 ps21"
                      >
                        {"\xA0McAulet"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="70.776,73.524,80.964,83.712,89.616,95.4,100.86"
                        className="ps03 ps21"
                      >
                        {"\xA0Highsc"}
                      </tspan>
                      <tspan
                        x="106.38,112.16,118.18,124.19"
                        className="ps03 ps21"
                      >
                        {"hool"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp84">
                    <path d="M177 633h79v22h-79Z" />
                  </clipPath>
                  <g clipPath="url(#clp84)">
                    <text className="ps00" transform="translate(182 649.5)">
                      <tspan className="ps03 ps21">{"C"}</tspan>
                      <tspan x={6.804} className="ps03 ps21">
                        {"i"}
                      </tspan>
                      <tspan x="9.564,15.36" className="ps03 ps21">
                        {"nc"}
                      </tspan>
                      <tspan x="20.904,23.652" className="ps03 ps21">
                        {"in"}
                      </tspan>
                      <tspan x="29.46,35.256" className="ps03 ps21">
                        {"na"}
                      </tspan>
                      <tspan x={41.016} className="ps03 ps21">
                        {"t"}
                      </tspan>
                      <tspan x="44.568,47.316" className="ps03 ps21">
                        {"i,"}
                      </tspan>
                      <tspan
                        xmlSpace="preserve"
                        x="49.68,52.428"
                        className="ps03 ps21"
                      >
                        {"\xA0O"}
                      </tspan>
                      <tspan x={59.64} className="ps03 ps21">
                        {"H"}
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 535.003)">
              <clipPath id="clp85">
                <path d="M62.002 57H550v67H62.002Z" />
              </clipPath>
              <g clipPath="url(#clp85)">
                <g className="ps00">
                  <clipPath id="clp86">
                    <path d="M58.997 62.998H138V86H58.997Z" />
                  </clipPath>
                  <g clipPath="url(#clp86)">
                    <text className="ps00" transform="translate(62 78.5)">
                      <tspan className="ps07 ps23">{"P"}</tspan>
                      <tspan x={6.27} className="ps07 ps23">
                        {"R"}
                      </tspan>
                      <tspan x={12.364} className="ps07 ps23">
                        {"O"}
                      </tspan>
                      <tspan x={19.008} className="ps07 ps23">
                        {"F"}
                      </tspan>
                      <tspan x={24.255} className="ps07 ps23">
                        {"E"}
                      </tspan>
                      <tspan x={29.656} className="ps07 ps23">
                        {"S"}
                      </tspan>
                      <tspan x={35.607} className="ps07 ps23">
                        {"S"}
                      </tspan>
                      <tspan x={41.569} className="ps07 ps23">
                        {"I"}
                      </tspan>
                      <tspan x={44.55} className="ps07 ps23">
                        {"O"}
                      </tspan>
                      <tspan x={51.194} className="ps07 ps23">
                        {"N"}
                      </tspan>
                      <tspan x={57.948} className="ps07 ps23">
                        {"A"}
                      </tspan>
                      <tspan x={64.526} className="ps07 ps23">
                        {"L"}
                      </tspan>
                    </text>
                  </g>
                </g>
                <g className="ps00">
                  <clipPath id="clp87">
                    <path d="M58.997 76.001H116v23.003H58.997Z" />
                  </clipPath>
                  <g clipPath="url(#clp87)">
                    <text className="ps00" transform="translate(62 91.5)">
                      <tspan className="ps07 ps23">{"S"}</tspan>
                      <tspan x={5.918} className="ps07 ps23">
                        {"U"}
                      </tspan>
                      <tspan x={12.177} className="ps07 ps23">
                        {"M"}
                      </tspan>
                      <tspan x={20.493} className="ps07 ps23">
                        {"M"}
                      </tspan>
                      <tspan x={28.809} className="ps07 ps23">
                        {"A"}
                      </tspan>
                      <tspan x={35.354} className="ps07 ps23">
                        {"R"}
                      </tspan>
                      <tspan x={41.415} className="ps07 ps23">
                        {"Y"}
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 535.003)">
              <clipPath id="clp88">
                <path d="M62.002 134H550v56H62.002Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp88)">
                <clipPath id="clp89">
                  <path d="M58.997 131H100v21H58.997Z" />
                </clipPath>
                <g clipPath="url(#clp89)">
                  <text className="ps00" transform="translate(62 144.5)">
                    <tspan x="0,5.94" className="ps07 ps23">
                      {"SK"}
                    </tspan>
                    <tspan x="12.034,15.004,20.262,25.52" className="ps07 ps23">
                      {"ILLS"}
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 535.003)">
              <clipPath id="clp90">
                <path d="M62.002 200H550v308H62.002Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp90)">
                <clipPath id="clp91">
                  <path d="M58.997 197H172v21H58.997Z" />
                </clipPath>
                <g clipPath="url(#clp91)">
                  <text className="ps00" transform="translate(62 210.5)">
                    <tspan className="ps07 ps23">{"P"}</tspan>
                    <tspan x={6.259} className="ps07 ps23">
                      {"R"}
                    </tspan>
                    <tspan x={12.353} className="ps07 ps23">
                      {"O"}
                    </tspan>
                    <tspan x={18.997} className="ps07 ps23">
                      {"F"}
                    </tspan>
                    <tspan x={24.233} className="ps07 ps23">
                      {"E"}
                    </tspan>
                    <tspan x={29.634} className="ps07 ps23">
                      {"S"}
                    </tspan>
                    <tspan x={35.585} className="ps07 ps23">
                      {"S"}
                    </tspan>
                    <tspan x={41.536} className="ps07 ps23">
                      {"I"}
                    </tspan>
                    <tspan x={44.517} className="ps07 ps23">
                      {"O"}
                    </tspan>
                    <tspan x={51.161} className="ps07 ps23">
                      {"N"}
                    </tspan>
                    <tspan x={57.904} className="ps07 ps23">
                      {"A"}
                    </tspan>
                    <tspan x={64.482} className="ps07 ps23">
                      {"L"}
                    </tspan>
                    <tspan xmlSpace="preserve" x={69.751} className="ps07 ps23" />
                    <tspan x={72.292} className="ps07 ps23">
                      {"S"}
                    </tspan>
                    <tspan x={78.243} className="ps07 ps23">
                      {"K"}
                    </tspan>
                    <tspan x={84.337} className="ps07 ps23">
                      {"I"}
                    </tspan>
                    <tspan x={87.318} className="ps07 ps23">
                      {"L"}
                    </tspan>
                    <tspan x="92.587,97.845" className="ps07 ps23">
                      {"LS"}
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 535.003)">
              <clipPath id="clp92">
                <path d="M62.002 518H550v96H62.002Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp92)">
                <clipPath id="clp93">
                  <path d="M58.997 515H138v21H58.997Z" />
                </clipPath>
                <g clipPath="url(#clp93)">
                  <text className="ps00" transform="translate(62 528.5)">
                    <tspan className="ps07 ps23">{"W"}</tspan>
                    <tspan x={8.206} className="ps07 ps23">
                      {"O"}
                    </tspan>
                    <tspan x={14.806} className="ps07 ps23">
                      {"R"}
                    </tspan>
                    <tspan x={20.856} className="ps07 ps23">
                      {"K"}
                    </tspan>
                    <tspan xmlSpace="preserve" x={26.917} className="ps07 ps23" />
                    <tspan x={29.414} className="ps07 ps23">
                      {"H"}
                    </tspan>
                    <tspan x={36.124} className="ps07 ps23">
                      {"I"}
                    </tspan>
                    <tspan x={39.061} className="ps07 ps23">
                      {"S"}
                    </tspan>
                    <tspan x={44.968} className="ps07 ps23">
                      {"T"}
                    </tspan>
                    <tspan x={50.897} className="ps07 ps23">
                      {"O"}
                    </tspan>
                    <tspan x={57.497} className="ps07 ps23">
                      {"R"}
                    </tspan>
                    <tspan x={63.558} className="ps07 ps23">
                      {"Y"}
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
            <g transform="matrix(.745 0 0 -.745 0 535.003)">
              <clipPath id="clp94">
                <path d="M62.002 624H550v28H62.002Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp94)">
                <clipPath id="clp95">
                  <path d="M58.997 621H121v21H58.997Z" />
                </clipPath>
                <g clipPath="url(#clp95)">
                  <text className="ps00" transform="translate(62 634.5)">
                    <tspan className="ps07 ps23">{"E"}</tspan>
                    <tspan x={5.401} className="ps07 ps23">
                      {"D"}
                    </tspan>
                    <tspan x="11.616,17.897" className="ps07 ps23">
                      {"UC"}
                    </tspan>
                    <tspan x={24.178} className="ps07 ps23">
                      {"A"}
                    </tspan>
                    <tspan x="30.107,36.069" className="ps07 ps23">
                      {"TI"}
                    </tspan>
                    <tspan x={39.05} className="ps07 ps23">
                      {"O"}
                    </tspan>
                    <tspan x={45.694} className="ps07 ps23">
                      {"N"}
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
    case "templatethree":
  return <svg ref={ref}

  xmlns="http://www.w3.org/2000/svg"
  xmlSpace="preserve"
  width={612}
  height={792}
  {...props}
>
  <style>
    {
      '@font-face{font-family:fnt1;src:url(data:font/otf;base64,T1RUTwAJAIAAAwAQQ0ZGIFVSLswAAAQUAABoZk9TLzJRhmOqAAABAAAAAGBjbWFwKGgpqgAAAuwAAAEIaGVhZGLHQvkAAACcAAAANmhoZWEC6QNNAAAA1AAAACRobXR4hVEAAAAAbHwAAAD4bWF4cAA+UAAAAAD4AAAABm5hbWUUxXaCAAABYAAAAYxwb3N0AAMAAAAAA/QAAAAgAAEAAAABAABISXS5Xw889QADA+gAAAAAAAAAAAAAAAAAAAAA//j/MgO4AucAAAADAAIAAAAAAAAAAQAAAuf/MgAAA9wAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAD4AAFAAAD4AAAACAkYBkAAFAAACigJYAAAASwKKAlgAAAFeADIA+QAAAgAFAAgAAAkAAwAAAAMAAAAAAAAAAAAAAAAzNTc5AAAAICAiAuf/MgDIAucAzgAAAAEAAAAAAaACpAAAACAAAAAAAAwAlgABAAAAAAAAABMAAAABAAAAAAABAAgAEwABAAAAAAACAAcAGwABAAAAAAADABAAIgABAAAAAAAEABAAMgABAAAAAAAGABAAQgADAAEECQAAACYAUgADAAEECQABABAAeAADAAEECQACAA4AiAADAAEECQADACAAlgADAAEECQAEACAAtgADAAEECQAGACAA1kNvcHlyaWdodCAtIFVua25vd25HZW5lcmljMVJlZ3VsYXJHZW5lcmljMS1SZWd1bGFyR2VuZXJpYzEtUmVndWxhckdlbmVyaWMxLVJlZ3VsYXIAQwBvAHAAeQByAGkAZwBoAHQAIAAtACAAVQBuAGsAbgBvAHcAbgBHAGUAbgBlAHIAaQBjADEAUgBlAGcAdQBsAGEAcgBHAGUAbgBlAHIAaQBjADEALQBSAGUAZwB1AGwAYQByAEcAZQBuAGUAcgBpAGMAMQAtAFIAZQBnAHUAbABhAHIARwBlAG4AZQByAGkAYwAxAC0AUgBlAGcAdQBsAGEAcgAAAAEAAwABAAAADAAEAPwAAAAcABAAAwAMACAAKQAzADYAOAA7AEEARwBJAE0AVwB6ICL//wAAACAAKAAsADUAOAA7AEAAQwBJAEwATwBhICL//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcAB4ALAAuAC4ALgAwADgAOAA6AEoAfAB8AA8ALAAtAB0ACgAYACAAHgApACEAJQAqACgAHwA7AC4AIwAaACIAPQA3ACQALwA6ABkAMAA0ADgANgAnAAEAJgA8ADMABwAxAAMADgACABQAEgAEAAYANQArAAgAFwAFAAwAEAA5ABMACwARAA0AFQAbABwACQAWADIAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEBAABBAAAAAEAAAARR2VuZXJpYzEtUmVndWxhcgABBAAAAAEAAAAxHuipllj/HuIGoAb/HpUqAC8edDoAXwUeCgAfi4seCgAfi4sMB/csD/cxEb4caDESAAQEAAAAAQAAABEAAAAZAAAAHgAAACZHZW5lcmljMS1SZWd1bGFyR2VuZXJpYzFBZG9iZUlkZW50aXR5AAACAAEAPAA+BAAAAAEAAAAEAAAARgAAAtkAAATzAAAGbgAAB/AAAAg7AAALbgAAC5QAAA3yAAAOHAAAEawAABRpAAAV6wAAGOUAABjoAAAb4gAAHEAAACAeAAAg8AAAIfwAACJLAAAiowAAJUgAACVuAAAl+AAAKAoAACieAAApJwAAKgkAACzGAAAx/gAAMiwAADTlAAA2cAAANvEAADlDAAA8bAAAPfAAAEHdAABF6QAARiwAAEhDAABIuAAASjEAAEuqAABSNQAAUlcAAFUUAABYDgAAWWwAAFoGAABbpAAAXJwAAF5DAABejwAAYbcAAGSxAABk4QAAZeoAAGY8AABmlvm0Dvja/wD3/4CLFYv/Al0BQAX//yYBwIsFi/8AUv7gBf8CCP8AiwWL//+tASAF//8m/uCLBYv//aL+wAX//6oAYIsFDvjE/wHu/sD/AOIAQBX//qMAQIsFi///z1Wr/wADVSD//91VAP8ABqpA///rVFYI/wAGrFX//+tWa/8ADoCA///xgIv/ABZUqv//96qrCP8AFlSq///3qqv/ACV/////+9VW/wA0q1WLCP8AM1Wqi/8ANlVg/wADqor/ADlVFf8AB1UVCIv//7kBAAX//+qrlv//+/8A///kVbb///yq4P//3f/W///9VsAI///d/9b///1Uq///36ng///+qlb//+FT64sI//+7VuuL///Nf+D/AAf/6v//36jW/wAP/9UI///fquv/AA//1f//6tVA/wAZqcr///X/lv8AI1PACP//9gGr/wAjVdX///sA1v8ANauVi/8ASAFVCIv/AEaplf8ABIAV/wA0/7X/AAkAKv8AI1XVCP8ACQAq/wAjVdX/ABRVNf8AGlWq/wAfqkD/ABFVgAj/AB+qQP8AEVWA/wAyKrX/AAiqwP8ARKsqiwj/AD//VYv/AC5Uav//93/2/wAcqYD//+7/6wj/AByrlf//7v/r/wASKwr//+ZVK/8AB6qA///dqmsI/wAHqoD//92qa/8AA9VA///KgCuL//+3VesIi///4v8ABf//MQFg/wDZ/kAV///UqkCL///g1Nb///wqwP//7P9r///4VYAI///tAYD///hVgP//81VL///xqjb///mpFv//6v7rCP//+asr///rAQD///yAK///3iuW////VSv//9FWKwj/AQ8CIIsFi/8AB/7gBYv/ACwAlf///Cm2/wAgVRX///hTa/8AFKmVCP//+FWA/wAUq6r///OAAP8ADar1///uqoD/AAaqQAj//+6slv8ABqpA///lVfb/AANVIP//2/9WiwgO+GD/AZr/oP8ABQFAFf//7f+r///8qdb//+oqa////QBL///mVSv///1WwAj//+ZVK////VSr///ngCD///6qVv//6KsWiwj//8FWVov//9H/9v8ACP8g///iqZb/ABH+QAj//+Krq/8AEgBV///tKyv/ABqrFf//96qr/wAjVdUI///3qqv/ACNV1f//+9VW/wA0AICL/wBEqyoIi/8AQ1WA/wAE/yr/ADP/df8ACf5V/wAkqWoI/wAKAGr/ACSrgP8AE6pg/wAbAID/AB1UVf8AEVWACP8AHVZq/wARVYD/ACtVwP8ACKrA/wA5VRWLCP8AFqwqi/8AGCuA///+qlb/ABmq1f///VSrCP8AGarV///9VKv/ABXUiv///QBL/wAR/kD///yr6wiL//+3/aAF///YAGv/AAdVFf//2KtA/wADqor//9lWFosI///VVRaL///g1Nb///r/y///7FSW///1/5YI///sVqv///YBq///8tUr///uViD///lTq///5qqWCP//+VXA///mqpb///yq4P//16sAi///yKtrCIv//8f+gP8AA3/V///XKdb/AAb/qv//5lUrCP8ABwHA///mVSv/AA1Viv//7n/L/wATqVX///aqawj/ABOrav//9qyA/wAf1gD///tWQP8ALACViwj/ACCqgIv/ACeqKv8AA1Ug/wAuqdX/AAaqQAiL//+5AQAFDvjr/wGv/qD/AR7/4BWL/wAvVKr///0AS/8AIdRq///6AJb/ABRUKgj///oAlv8AFFZA///0qvb/AA2AQP//71VW/wAGqkAI///vVVb/AAasVf//5ABL/wADVir//9irQIsI///V/+uL///hKkH///lUtv//7FSW///yqWsI///sVJb///KrgP//86q2///tq0v///sA1v//6KsWCP//+wDW///oqxb///2Aa///3lVAi///0/9rCIv//vj/4AX//67+gIsFi/8C5wFgBf8AUQGAiwWL+8AF/wAE/iCLBf8ACqtA/wAX/8D/ABIrCv8AElS1/wAZqtX/AAypqgj/ABmq1f8ADKvA/wAk1Sr/AAZV4P8AL/+Aiwj/ADFVKov/ACUqlf//+SoApP//8lQACKT///JWFv8AENVg///rVWD/AAiqwP//5FSrCP8ACKrA///kVsD/AARVYP//2X/Ai///zqjACIv//sEBgAX//67+gIsFi/8BHv/gBQ746/8Br/6g/wEe/+AVi/8AL1Sq///9AEv/ACHUav//+gCW/wAUVCoI///6AJb/ABRWQP//9Kr2/wANgED//+9VVv8ABqpACP//71VW/wAGrFX//+QAS/8AA1Yq///Yq0CLCP//1f/ri///4SpB///5VLb//+xUlv//8qlrCP//7FSW///yq4D///Oqtv//7atL///7ANb//+irFgj///sA1v//6KsW///9gGv//95VQIv//9P/awiL//74/+AF//+u/oCLBYv/Af3/YAX/AEf/QIsF/wAEAQD//7gAwAX/AAX+YIsF/wALVhX/ABoAQP8AEqsq/wAT1RX/ABoAQP8ADanqCP8AGgBA/wANrAD/ACWqtf8ABtYA/wAxVSqLCP8AMVUqi/8AJSqV///4/0uk///x/pYIpP//8gCr/wAQ1WD//+sqq/8ACKrA///kVKsI/wAIqsD//+RWwP8ABFVg///Zf8CL///OqMAIi//+wQGABf//rv6AiwWL/wEe/+AFDveS/wBT/yD5HhWL/wBdAWAF/wBV/6CLBYv//6L+oAX//6oAYIsF/wADAMD9HhWL/wH9/2AF/wBRAYCLBYv//gIAoAX//67+gIsFDvjO/wDe/4D///gBIBX//8VVQIv//9VVFv8ACtTq///lVOv/ABWp1Qj//+VXAP8AFanV///yq4D/ACaAQIv/ADdWqgiL/wAnVMD/AASpwP8AHqoA/wAJU4D/ABX/QAj/AAlVlf8AFgFV/wAP1SD/AA//1f8AFlSq/wAJ/lUI/wAWVsD/AAoAav8AH4CV/wAFADX/ACiqaosI/wATVgCL/wA/qvX///5V9v8Aa//q///8q+sIi/8AHf4gBYv/ACgBqv///CrA/wAcVir///hVgP8AEKqqCP//+FWA/wAQqqr///H/oP8ACqo1///rqcD/AASpwAj//+ur1v8ABKnA///df7b/AAJU4P//z1OWiwj//+qrlov//+UrQP///tUL///fquv///2qFgj//9+q6////awr///m1Uv///2Aa///7f+r///9VKsIi/8ARwIgBf8ANKtV/wAJVZX/AD2qdf8ABKrK/wBGqZWLCP8APABqi/8ALNUV///51Nb/AB2pwP//86mrCP8AHavV///zq8D/ABPVFf//7AA2/wAJ/lX//+RUqwj/AAoAav//5FSr/wAFADX//9fUq4v//8tUqwiL//7BAYAF//+3AICLBf///AIg/wBG/wAF///5/oCLBf//8gCr///gAFb//+l/lv//6tVB///g/oD///WqKwj//+EAlv//9axA///bgED///rWIP//1f/riwj/AB8BgP8ASP+AFf8AIVVVi/8AGyoq/wAC/7X/ABT/AP8ABf9qCP8AFQEV/wAF/2r/AA8rVf8AC6p1/wAJVZX/ABFVgAj/AA3/Vf8AF//A/wAG/6r/ACFVVYv/ACqq6giL/wAW/4AF//9V/iCLBf//5AFWi///64AW///9/4D///L+1v//+/8ACP//8wDr///8ARb///bVIP//+CrL///6qVb///RUgAj///qra///9FaW///9Vbb//+3WAIv//+dVawiL///oAED/AAL/tf//7lUW/wAF/2r///Sp6wj/AAYBgP//9KwA/wALK2D///gqy/8AEFVA///7qZYI/wAQVUD///urq/8AGYAg///91db/ACKrAIsIDveS/wBW/+CLFYv/AucBYAX/AFEBgIsFi//9GP6gBf//rv6AiwUO+Ov/ARr+4P//Mf6AFf//uKuWi///xqrr/wADAMD//9SqQP8ABgGACIv/AEX+wAX/AElU6v///Kvr/wAzVar///5V9v8AHVZqiwj/ADNVqov/ACVVSv8ABSrq/wAXVOr/AApV1Qj/ABdU6v8AClPA/wAO/5X/ABBVQP8ABqpA/wAWVsAI/wAGqkD/ABZUqv8AA1Ug/wAjKhWL/wAv/4AIi/8AHgFABf//+gGgiwX///X/lv//6VPW///uKmD//+4pVv//5lUr///y/tYI///mVSv///MA6///2tVr///5gHb//89Vq4sI///PVauL///bKtb/AAbU9XL/AA2p6ghy/wANrAD//+8qoP8AFKqg///3VUD/ABupQAj///dVQP8AG6tV///7qqD/ACYr34v/ADCsagiL/wE9/kAF/wBRAYCLBYv//uMAoAWL///QAID/AALVAP//3f/W/wAFqgD//+v/Kwj/AAWqAP//7AFA/wALKlX///Kqdv8AEKqq///5U6sI/wAQqqr///lVwP8AG/+1///8quD/ACdUwIsI/wAqABWL/wAe1cD/AAaqQP8AE6tq/wANVIAI/wATq2r/AA1Wlf8ADIAA/wASVcD/AAVUlf8AF1TqCP8ABVSV/wAXVOr/AAKqSv8AIVVVi/8AK1XACIv/AQX/4AX/AFEBgIsFi//+QACABYv//7lWa///+qpg///KVXb///VUwP//21SACP//9VbW///bVID//+pVIP//5P+A///fU2v//+6qgAj//99VgP//7qqA///OVWv///dVQP//vVVWiwgO9/7/ADr/IP8A9f8AFYv/AE8BAAX/APQBoIsFi///sP8ABf//C/5giwUO+If/AQABgP//+AEgFf//5KoWi///4P+L/wABVar//91VAP8AAqtVCP//3VUA/wACqUD//+FU9v8AAv+1///lVOv/AANWKgiL/wBH/0AF/wBB/9X///iq6/8APFXV///8VXb/ADar1YsI/wAiACqLpP8AAlTg/wAP/9X/AASpwAj/AA//1f8ABKvV/wAKf4D/AAd/yv8ABP8q/wAKU8AI/wAFAUD/AApV1f8AAoCg/wAPgMCL/wAUq6oIi/8AFKmV///+Kjb/AA7U4P///FRr/wAJACoI///8VoD/AAkAKv//+itL/wAGKiD///gAFv8AA1QVCP//+AAW/wADVir///H/oP8AAqtV///r/yv/AAIAgAj//3sBIP8ADwCgBf//4VPr/wADVBX//+h/Vv8ABv+q///vqsD/AAqrQAj//++qwP8ACqtA///01av/AA6qKv//+gCW/wASqRUI///6AJb/ABKrKv///QBL/wAZAQqL/wAfVuoIi/8AK1Oq/wAH1TX/ACB+wP8AD6pq/wAVqdUI/wAPqmr/ABWr6v8AFanV/wAOKxX/ABupQP8ABqpACP8AG6tV/wAGrFX/ACUroP8AA1Yq/wAuq+qLCP8AGf4qi/8AG/6q///+qlb/AB3/Kv///VSrCP8AHgFA///9VKv/ABlWdf///Krg/wAUq6r///wBFgiL//+3/aAF///L/4D/AAf/6v//ylV2/wAD//X//8ira4sI///hU+uL///oqgv///5/oP//8AAr///8/0AI///wACv///0BVv//86q2///5VcD///dVQP//9aorCP//91VA///1rED///uqoP//79V2i///6f6rCIv//+ysFv8AAaoK///yAKv/AANUFf//91VACP8AA1Yq///3VUD/AAWrCv//+f+L/wAH/+r///yp1gj/AAgCAP///Kvr/wANVYr///1Vtv8AEqkV///9/4AI/wCKACD//+//IAX/AB1Wav///KnW/wAWKwD///p/q/8ADv+V///4VYAI/wAO/5X///hVgP8ACv+g///yf8D/AAb/qv//7KoACP8ABv+q///srBb/AAN/1f//41V2i///2f7WCIv//9YCAP//+SsL///gAFb///JWFv//6f6rCP//8lYW///qAMD//+wANv//8Ssg///lqlb///hVgAj//+WqVv//+FWA///cKxb///wqwP//0qvWiwgO+NX/ASEAYP//+AEgFf//uKmAi///zP/A/wAHKmD//+FWAP8ADlTACP//4VYA/wAOVMD//+yAVv8AGFUq///3qqv/ACJVlQj///eqq/8AIlWV///71Vb/ADgrKov/AE4AwAiL/wBN/qr/AAQqqv8AOCog/wAIVVX/ACJVlQj/AAhVVf8AIlWV/wATf6r/ABhVKv8AHqoA/wAOVMAI/wAeqgD/AA5W1f8AMwBA/wAHK2r/AEdWgIsI/wBGqZWL/wAyqcr///jUlv8AHqoA///xqSsI/wAerBX///GrQP8AE4C1///nqtb/AAhVVf//3aprCP8ACFVV///dqmv/AAQqqv//x9Xgi///sgFWCIv//7H/QP//+9VW///H1Nb///eqq///3aprCP//96qr///dqmv//+x/S///56rW///hU+v///GrQAj//+FWAP//8atA///NVjb///jVoP//uVZriwiL/wBJ/8AV/wAwqlWL/wAhqsD/AARVYP8AEqsq/wAIqsAI/wASqyr/AAiqwP8AC3/A/wAP1SD/AARUVf8AFv+ACP8ABFZq/wAW/4D/AAIrNf8AKtWgi/8APqvACIv/AD6pqv///dTL/wAq1JX///uplv8AFv+ACP//+6ur/wAXAZX///SAQP8AD9Ug///tVNb/AAioqgj//+1U1v8ACKrA///eVUD/AARVYP//z1Wriwj//89Vq4v//94qi///+6qg///s/2v///dVQAj//+z/a///91dW///0VID///Aq4P//+6mW///o/msI///7q6v//+kAgP///dXW///VK2uL///BVlYIi///wVRA/wACKir//9UqYP8ABFRV///pAIAI/wAEVmr//+kAgP8AC6uA///wKuD/ABMAlf//91VACP8AEwCV///3VUD/ACHVdf//+6qg/wAwqlWLCA746/8Bs/+g/wBH/0AV///6AaCLBf//9Knr///l/8D//+1U1v//7Crr///l/8D///JWFgj//+X/wP//8lYW///aVUv///krC///zqrWiwj//89Vq4v//9sq1v8ABv+qcv8ADf9VCHL/AA3/Vf//7yqg/wAU1VX///dVQP8AG6tVCP//91VA/wAbq1X///uqoP8AJoA/i/8AMVUqCIv/AT7+gAX/AFEBgIsFi//+4QAgBYv//9AAgP8AAtUA///d/9b/AAWqAP//6/8rCP8ABaoA///sAUD/AAsqVf//8qp2/wAQqqr///lTqwj/ABCqqv//+VXA/wAb/7X///yq4P8AJ1TAiwj/ACoAFYv/AB7VwP8ABqpA/wATq2r/AA1UgAj/ABOrav8ADVaV/wAMgAD/ABKAdf8ABVSV/wAXqlUI/wAFVJX/ABeqVf8AAqpK/wAhgAqL/wArVcAIi/8BBwAgBf8AUQGAiwWL//4CAKAF//+3AICLBf//+/8A/wBH/0AFDvjj/wD+AQD///gBIBX//81VK4v//9lVC/8AB6qA///lVOv/AA9VAAj//+VU6/8AD1UA///tKiD/ABop6v//9P9W/wAk/tUI///1AWv/ACUA6v//+oC2/wA1gOCL/wBGANUIi/8ARqmV/wAFVJX/ADX+6v8ACqkq/wAlVEAI/wAKq0D/ACVWVf8AEoB1/wAaVar/ABpVqv8AD1UACP8AGlWq/wAPVxX/ACYq1f8AB6uKvYsI/wAsAJWL/wAjf4D///qqYP8AGv5q///1VMAI/wAbAID///VUwP8AE9Yg///tVNb/AAyrwP//5VTrCP8ABf5giwWL/wEpAmAF/wBRAYCLBYv//Rj+oAX//7cAgIsF///8/0D/AEb/AAX///n+gIsF///yAKv//+FWAP//6qqL///rKqv//+NUa///9P9WCP//41aA///1AWv//91WC///+oC2///XVZaLCP8AHv5g/wBN/aAV/wAiqwCL/wAbVOD/AASAFf8AE/7A/wAJACoI/wAUANX/AAkAKv8ADar1/wAOKxX/AAdVFf8AE1YACP8ABqxV/wAPVQD/AAQqqv8AEX8q/wABqQD/ABOpVQj/AAGrFf8AE6tq/wAA1Yr/ABsrNYv/ACKrAAiL/wAcq5X///7/wP8AF6pV///9/4D/ABKpFQj///4Blv8AEqsq///8VXb/ABAA4P//+qlW/wANVpUI///4ABb/ABSplf//8dTr/wAPKkr//+upwP8ACasACP//66vW/wAJqwD//+QrAP8ABNWA///cqiuLCP//1f/ri///4dUW///71Vb//+2qQP//96qrCP//7axW///3qqv///Oqtv//74AL///5qRb//+dVawj///mrK///51Vr///81Zb//9dVlov//8dVwAiL///GABb/AAMqav//1qm2/wAGVNX//+dTVgj/AAZW6v//51Vr/wAMVUr//++qwP8AElOq///4ABYI/wASVcD///gAFv8AHtXA///8AAv/ACtVwIsIDvd/Dvjj/wBW/+D/Af3/YBX/AEf/QIsF/wAEAQD//7gAwAX/AAX+YIsF/wANVpX/AB6qAP8AFSrA/wAVAAr/ABz+6v8AC1YVCP8AHQEA/wALVhX/ACLVtf8ABasK/wAoqmqLCP8AMqrVi/8AJqr1///4VHb/ABqrFf//8KjrCP8AGqsV///wqwD/ABLU1f//5dUL/wAK/pX//9r/Fgj/AAsAqv//2wEr/wAFgFX//8qBNov//7oBQAiL//+5VFb///p/q///yf8A///0/1b//9qpqwj///UBa///2qvA///tVeD//+WrYP//5apW///wqwAI///lqlb///CrAP//2dUr///4VYBZiwj//9SqQIv//9zU4P8ABVSV///k/4D/AAqpKgj//+UBlv8ACqtA///r1YD/ABKrKv//8qlr/wAaqxUI///7AeCLBYv//vf/oAX//67+gIsFi/8Cxf9gBf8A2gFg//5I/6AV/wArU6qL/wAe1LX/AAP/9f8AElXA/wAH/+oI/wASVcD/AAf/6v8ADFVK/wAQVUD/AAZU1f8AGKqVCP8ABlTV/wAYqpX/AAMqav8AKQDgi/8AOVcqCIv/ADlVFf///NWW/wAo/9X///mrK/8AGKqVCP//+asr/wAYqpX///Oqtv8AEH/1///tqkD/AAhVVQj//+2qQP8ACFVV///hK0v/AAQqqv//1KxWiwj//93/1ov//+T/gP//+1U2///r/yv///aqawj//+v/K///9qpr///x/6D///GqNv//+AAW///sqgAI///6AJb///FV1v///CrA///u/+v///5U6///7KoACP///lcA///srBb///8rgP//5lY2i///4ABWCIv//99VgP8AAKnK///mVSv/AAFTlf//7VTWCP8AAVWq///tVNb/AANWKv//8FWW/wAFVqr///NWVgj/AAiqwP//6qmA/wAOVMD///Cp9v8AE/7A///2qmsI/wAUANX///aqa/8AG1Xq///7VTb/ACKrAIsIDvf7/wCBAQCLFYv/AbP/oAX//5j/QIsFi/8ASf/ABf8AZwDAiwWL/wCT/4AF/wBQ/mCLBYv//2wAgAX/AHn/QIsFi///tgBABf//hgDAiwWL//5MAGAF//+vAaCLBQ744/8BEP+A//8x/oAV//+5VmuL///EAKD/AAMAwP//zqrW/wAGAYAIi/8ARv8ABf8AP/9V///8ARb/ADZVYP///gCL/wAsq2qLCP8AM1OVi/8AJSmK/wAEqsr/ABb/gP8ACVWVCP8AFwGV/wAJU4D/AA8AoP8AEH/1/wAG/6r/ABesagj/AAb/qv8AF6pV/wADf9X/ACXUYIv/ADP+agiL/wAWAmAF///7AeCLBf//81RA///l/8D//+wp4P//7X+L///k/4D///T/Vgj//+UBlv//9P9W///dK1b///p/q///1VUWiwj//8yqVov//9j/oP8AB3/K///lVOv/AA7/lQj//+VU6/8ADwGq///tVNb/ABnViv//9VTA/wAkqWoI///1Vtb/ACSrgP//+qtr/wA1ViqL/wBGANUIi/8ARqmV/wAFf0r/ADXUNf8ACv6V/wAk/tUI/wALAKr/ACUA6v8AEtXg/wAaKvX/ABqrFf8AD1UACP8AGqsV/wAPVxX/ACaq9f8AB6uK/wAyqtWLCP8AKKpqi/8AItSq///6VPb/ABz+6v//9KnrCP8AHQEA///0qev/ABUqwP//6v/2/wANVID//+FWAAj/AAYBgIsF/wADAMD/AEf/QAX/AEj/gIsFi//+QwFABYv//7f+q///+tUW///JqqH///WqK///21aWCP//9aor///bVID//+p/1v//5NTL///fVYD//+5VFgj//99VgP//7lUW///Nqpb///cqi///u/+riwj/AAv/4P8BFwEAFf8AIVVVi/8AGn9V/wAEKqr/ABOpVf8ACFVVCP8AE6tq/wAIVVX/AA3Wtf8ADNVq/wAIAgD/ABFVgAj/AAaqQP8ADqoq/wAEfwr/ABFVgP8AAlPV/wAUANUI/wACVer/ABQA1f8AASr1/wAaqxWL/wAhVVUIi/8AIf4V////Knb/ABp/Vf///lTr/wATAJUI///+VwD/ABMAlf//+9VW/wAQKor///lTq/8ADVSACP//91VA/wAUANX///GqNv8ADlXK///r/yv/AAiqwAj//+wBQP8ACKrA///lVfb/AARVYP//3qqriwj//9VVFov//+FU9v//+9VW///tVNb///eqqwj//+1W6///96qr///zgAD//++qwP//+akW///nqtYI///5qyv//+eq1v///NWW///XKuCL///GqusIi///x1Or/wADKmr//9d/QP8ABlTV///nqtYI/wAGVur//+eq1v8ADIAA///vqsD/ABKpFf//96qrCP8AEqsq///3qqv/AB6rCv//+9VW/wAqquqLCA74A/8AVv/g/wH9/2AV/wBH/0CLBf8ABAEA//+fAMAF/wAF/mCLBf8ADADq/wAn/5X/ABP/yv8AG3+V/wAb/qr/AA7/lQj/ABwAwP8ADwGq/wAkq4D/AAeA1f8ALVZAiwiL//+pACAF///R/uuL///cqiv///j/S///51Vr///x/pYI///nVWv///IAq///7v/r///qf9b///aqa///4v8ACP//9qyA///jARb///tWQP//2NX2i///zqrWCIv//xv/QAX//67+gIsFi/8B/f9gBQ74CP8AggFA/wGz/6AV//+X/wCLBYv/AEn/wAX/AGgBAIsFi/8ATABABYv/AC//gP8ABqpA/wAi/2D/AA1UgP8AFf9ACP8ADVSA/wAWAVX/ABSqoP8ADgBg/wAcAMD/AAX/agj/ABwAwP8ABgGA/wArqyr/AAMAwP8AO1WViwiL//+8/uAF///ZVACL///jqdb///4qNv//7f+r///8VGsI///uAcD///xWgP//86q2///5Kwv///lTq///9f+WCP//+VXA///1/5b///yq4P//8AAri///6gDACIv//6T/IAX/AIQBwIsFi///tgBABf//e/5AiwWL//5MAGAF//+vAaCLBYv/AbP/oAUO+Kb/ANcAoIsV//9D/+D/Af3/YAX/AFT/YIsF/wCXAED//lwBQAX/AAb+oIsF9yr/AaP+wAX/AFMCAIsF//9FACD//gIAoAX//5r/wIsFDviQ/wA0AICLFYv/AET+gAX/ASj/QP8BbwEgBf/+4wCgiwWL/wBJ/8AF/wGGAKCLBYv//7sBgAX//tf94P/+kP7gBf8BKgKgiwWL//+2AEAF//5r/wCLBQ76B/8CywCg/wEe/+AVi/8AL/+A///9f2D/ACH/IP//+v7A/wAT/sAI///7ANb/ABQA1f//9itW/wANVYr///FV1v8ABqpACP//8VXW/wAGrFX//+dVa/8AA1Yq///dVQCLCP//2qmri///5KoW///5qiD//+6qgP//81RACP//7qqA///zVlb///T/Vv//7gC2///7VCv//+irFgj///tWQP//6KsW///9qyD//92qa4v//9KpwAiL//74/+AF//+vAaCLBYv/AR7/4AWL/wAv/4D///1/YP8AIf8g///6/sD/ABP+wAj///sA1v8AFADV///2K1b/AA1Viv//8VXW/wAGqkAI///xVdb/AAasVf//51Vr/wADVir//91VAIsI///aqauL///kqhb///l/a///7qqA///y/tYI///uqoD///MA6///9QBg///tq0v///tWQP//6FWrCP//+1ZA///oVav///2rIP//3iqLi///0/9rCIv//vj/4AX//67+gIsFi/8B/f9gBf8AR/9AiwX/AAQBAP//uADABf8ABf5giwX/AAoAav8AGgBA/wARKsr/ABPVFf8AGFUq/wANqeoI/wAYVSr/AA2sAP8AIoBK/wAG1gD/ACyraosI/wAsAJWL/wAhVVX///mqIP8AFqoV///zVEAI/wAWqhX///NWVv8AD6pq///rqsv/AAiqwP//4/9ACP8ABwHAiwX/ABVUav8ANVYq/wA0/7X/ABqrFf8AVKsAiwj/ACyraov/ACGqwP//+P9L/wAWqhX///H+lgj/ABaqFf//8gCr/wAPVQD//+sqq/8AB//q///kVKsI/wAH/+r//+RWwP8AA//1///Zf8CL///OqMAIi//+wQGABf//rwGgiwWL/wEe/+AFDvdz/wBAAGCLFYv/AGYAgAX/AF7+wIsFi///mf+ABf//oQFAiwUO+h//AtL/gIsVi/8CHQDgBf//+/8AiwX//xQAYP/94v8gBf//wP/giwX//xUAoP8CHQDgBf///AIgiwWL//3i/yAF//+u/oCLBYv/ArAAIAX/AHQA4IsF/wDq/2D//ekAoAX/AAUBQIsF/wDq/2D/Ahb/YAX/AHP9wIsFi//9T//gBf//rADgiwUO+NP/AgYBYP8ABQFAFf//61RW///7/wD//+Ypa////NWW///g/oD///2sKwj//+EAlv///aoW///jK8v///7VC///5VcAiwj//61VgIv//8OqK/8ACP8g///Z/tb/ABH+QAj//9oA6/8AEgBV///mf+D/ACDVNf//8v7W/wAvqhUI///zAOv/AC+sKv//+YB2/wBLgCCL/wBnVBUIi/8AZqtV/wAGf4r/AEtVav8ADP8V/wAv/4AI/wANASr/ADABlf8AGYAg/wAg/+r/ACX/Ff8AEf5ACP8AJgEq/wASAFX/ADxV1f8ACQAq/wBSqoCLCP8AG1PVi/8AHKmA///+qlb/AB3/Kv///VSrCP8AHgFA///9VsD/ABiroP///FaA/wATVgD///tWQAiLQAVZ/wAGqkD//9H/9v8AA1Ug///V/+uLCP//uf8ri///zynr///6qmD//+RUq///9VTACP//5FbA///1VMD//+3WAP//6P92///3VUD//9yqKwj///dVQP//3KxA///7qqD//8Gqtov//6apKwiL//+mq0D/AARVYP//waq2/wAIqsD//9yqKwj/AAiqwP//3KxA/wASKgD//+kAgP8AG6lA///1VMAI/wAbq1X///VUwP8AMNYV///6qmD/AEYA1YsI/wAzVaqL/wAvVbX/AANVIP8AK1XA/wAGqkAIi///swKgBQ75xf8CEQEAixX//4n+oP8BbQCgBf//+QFgiwX//4v/IP/+kv9gBf//of5giwX//10DAP8B/f9gBf8AU/8giwX3Ef/+awHgBf8ABv6giwX/AHv/wP8BlP4gBf8ATQCAiwX3Ef/+awHgBf8ABwHAiwX/AHv/wP8BlP4gBf8AUf6giwX//1z/4P/+AgCgBf//ogGAiwUO+Lf/Aab/gIsV//9rAED/AMH+gAX///oBoIsF//9r/WD//z4BgAX//6YCgIsF/wDA/kD/AQL/IAX//0YAYP8A+wBABf8AXQFgiwX/AI3+AP//RwCgBf8ABQFAiwX/AI3+AP8AuP9gBf8AWgCgiwX//0YAYPuOBf8AwQFg//78AKAF//+i/qCLBQ73c/8AKwFg//+u/oAV/wAQqqqL/wAMVUr/AAGrFf8AB//q/wADVioI/wAH/+r/AANWKv8ABX9K/wAGKyr/AAL+qv8ACQAqCP8AAwDA/wAJACr/AAGAYP8ADX81i/8AEf5ACIv/ABEBIAX//9sAIIsFi/8AZgCABf8AXv7AiwWL//+s/gAFi///2ABr///9KwD//+Iri///+lYA///sVqsI///6VgD//+xUlv//9SoL///yVQv//+/+Fv//+FWACP//8AAr///4VYD//+cBC////CrA///eAeuLCIv/ACn+AAUO+TT/AU//oP//+AEgFf//q1UAi///xCpL/wAI1Gr//9z/lv8AEajVCP//3QGr/wARqur//+oAwP8AHysq///2/9b/ACyragj///b/1v8ALKtq///7f+v/AE1U4Iv/AG3+VQiL/wBuAGr/AASAFf8ATVXq/wAJACr/ACyragj/AAkAKv8ALKtq/wAV/0D/AB8qIP8AIv5V/wARqNUI/wAjAGr/ABGq6v8AO9W1/wAI1XX/AFSrAIsI/wBUqwCL/wA71bX///cqi/8AIwBq///uVRYI/wAjAGr//+5XK/8AFf9A///gqyv/AAj+Ff//0v8rCP8ACQAq///S/yv/AASAFf//stTLi///kqprCIv//5IBq///+3/r//+yqyD///b/1v//01SWCP//9wHr///TVJb//+oAwP//4NTW///c/5b//+5VFgj//9z/lv//7lcr///EKkv///crlv//q1UAiwiL/wBP/iAV/wA9VhWL/wApKor/AASAFf8AFP8A/wAJACoI/wAVARX/AAkAKv8ADYBA/wAVKsD/AAX/av8AIVVVCP8ABf9q/wAhVVX/AAL/tf8AQP+Vi/8AYKnVCIv/AGCr6v///QBL/wBBAKD///oAlv8AIVVVCP//+gCW/wAhVVX///J/wP8AFSrA///q/uv/AAkAKgj//+sBAP8ACQAq///W1Xb/AASAFf//wqnriwj//8Kp64v//9aqwf//+3/r///qq5b///b/1gj//+qrlv//9v/W///yVQv//+rVQP//+f6A///eqqsI///6AJb//96qq////QBL//++/2CL//+fVBYIi///n1Yr/wAC/7X//78Aa/8ABf9q///eqqsI/wAGAYD//96qq/8ADar1///q1UD/ABVUav//9v/WCP8AFVRq///2/9b/AClVP///+3/r/wA9VhWLCA75P/8BVQDg///4ASAV//+3U9aL///IVPb/AAcqYP//2VYW/wAOVMAI///ZVhb/AA5UwP//5apW/wAU1VX///H+lv8AG1XqCP//8gCr/wAbVer///kAVv8AI/+gi/8ALKlVCIv/ACYBKv8ABKrK/wAeADX/AAlVlf8AFf9ACP8ACVWV/wAV/0D/AA2AQP8AEFVA/wARqur/AAqrQAj/ABGq6v8ACqtA/wAXf6D/AAiqwP8AHVRV/wAGqkAIi/8ABAEABf//1qrA/wAH/+r//+HVFv8AEKqq///s/2v/ABlVagj//+0BgP8AGVVq///2gMD/ACVVSov/ADFVKgiL/wAqqur/AAeqgP8AIlSK/wAPVQD/ABn+Kgj/AA9VAP8AGgBA/wAaqgr/ABN/qv8AJf8V/wAM/xUI/wAmASr/AA0BKv8ANKtV/wAGgJX/AENVgIsI/wBEAFWL/wA01QD///l/a/8AJamq///y/tYI/wAlq8D///MA6/8AGoBg///sgFb/AA9VAP//5f/ACP8AD1UA///mAdb/AAeqgP//3at2i///1VUWCIv//86q1v//9n+2///aqrb//+z/a///5qqWCP//7P9r///mqpb//+HVFv//71VW///WqsD///gAFgiL///7/wAF/wAeAUD///lVwP8AF9YV///3VUD/ABGq6v//9VTACP8AEarq///1VMD/AA1UgP//76rA/wAI/hX//+oAwAj/AAkAKv//6gDA/wAEgBX//+H/y4v//9n+1giL///TVqv///kAVv//3ABg///yAKv//+SqFgj///IAq///5KoW///lqlb//+sqq///2VQA///xq0AI///ZVhb///GrQP//yFYA///41aD//7dV64sIi/8Biv7AFf8AMKpVi/8AJH/A/wADKmr/ABhVKv8ABlTVCP8AGFUq/wAGVur/ABEAFf8ACytg/wAJqwD/AA//1Qj/AAmrAP8AD//V/wAE1YD/ABeqVYv/AB9U1QiL/wAgqoD///t/6/8AGCp1///2/9b/AA+qagj///b/1v8AD6pq///vVVb/AAr/oP//56rW/wAGVNUI///nqtb/AAZW6v//2tVr/wADK3VZiwj//86q1ov//9tUgP///P9A///n/iv///n+gAj//+gAQP//+gCW///vgAv///UAYP//9v/W///wACsI///3Aev///AAK///+4D2///nqtaL///fVYAIi///4ABW/wAEqcD//+gq9v8ACVOA///wVZYI/wAJVZX///BVlv8AENVg///0/1b/ABhVKv//+akWCP8AGFUq///5qyv/ACQrYP///NWW/wAwAZWLCIv//sT/YBX/ADFVKov/ACUqlf8AAtUApP8ABaoACKT/AAWsFf8AEdSV/wAK1fX/AAqpKv8AD//VCP8ACqtA/wAP/9X/AAVVoKSL/wAiACoIi/8AJACq///6/8v/ABpVqv//9f+W/wAQqqoI///2Aav/ABCqqv//7quL/wALKlX//+dVa/8ABaoACP//51Vr/wAFqgD//9n/4P8AAtUA///MqlaLCP//zKpWi///2iqW///9KwD//+eq1v//+lYACP//56rW///6VgD//+7/6///9NWr///2VQD//+9VVgj///ZVAP//71VW///7KoD//+WqVov//9v/VgiL///d/9b/AAUq6nL/AApV1f//8AArCP8AClXV///wACv/ABGANf//9SoL/wAYqpX///pT6wj/ABiqlf//+lYA/wAk/+D///0rAP8AMVUqiwgO9/v///v/AP//yP7AFf8BIwDg/wMeAqAF1osF//7b/uD//OH9YAX//7YAQIsFDvj2/wCZAMD/AFEBgBX/AYH/oIsFi///rv6ABf/+Kv5giwWL/wBR/qAFi/8AOVcq/wACKir/ACnVYP8ABFRV/wAaU5UI/wAEVmr/ABpVqv8ACisg/wAVquD/AA//1f8AEQAVCP8AEAHq/wARABX/ABqrFf8AEH/1/wAlVED/AA//1Qj/AEf/QP8AHgFA/wA8qjWk/wAxVSr/ABP+wAj/ABisqv8ACgBq/wASKwr/AAmASv8AC6lq/wAJACoI/wALq4D/AAkAKv8AB//q/wAK1Or/AARUVf8ADKmqCP8ABFZq/wAMq8D/AAIrNf8AEVWAi/8AFf9ACIv/AB9U1f//+yqA/wAW/4D///ZVAP8ADqoqCP//9lUA/wAOrED//++qwP8ACdW1///pAID/AAT/Kgj//+kAgP8ABQFA///cf3b/AAKAoP//z/5riwj//8tWwIv//71VVv//+6qg//+vU+v///dVQAiL1gX/ABwAwP8ABVSV/wAjVdX/AARUVf8AKqrq/wADVBUI/wAqqur/AANWKv8AJ/+V/wABqxX/ACVUQIsIvYv/ACj/1f///CrA/wAf/6r///hVgAj/ACABwP//+FWA/wAZqtX//+9VVv8AE1Pq///mVSsI/wATVgD//+ZVK/8ACasA///Zf8CL///MqlYIi///2KtA///8AAv//+BVwP//+AAW///oAEAI///4ABb//+gAQP//8yqW///s1Lb//+5VFv//8akrCP//7lUW///xq0D//+eAIP//8itg///gqyv///KrgAj//zD+QP//qwCgBf//6KsW///3VUD///EAa///9FWL///5VcD///FV1gj///v/AP//9qpr///9VKv///VUwP///qpW///z/xYI///+rGv///QBK////1Y2///wACuL///r/ysIi///1AGABQ75Re//ArAAIBX/ANr+gIsF/wBfVkCL/wBDVYD///d/9v8AJ1TA///u/+sI/wAnVtX//+7/66T//+F/q/8ACqkq///T/2sI/wAKq0D//9QBgP8ABVWg//+0VSuL//+UqNYIi///lKrr///6qmD//7RVK///9VTA///T/2sI///1Vtb//9QBgHL//+GAtv//2Kkr///u/+sI///Yq0D//+7/6///vKqA///3f/b//6CpwIsI//8lAYCLBYv/ArAAIAX/AM0BQP/9oAEgFf8ATf6qi/8ANH+V/wAEKqr/ABsAgP8ACFVVCP8AGwCA/wAIVVX/ABGANf8AFKqg/wAH/+r/ACD/6gj/AAf/6v8AIP/q/wAD//X/AD8pyov/AF1TqgiL/wBcqur///vVVv8APwAg///3qqv/ACFVVQj///eqq/8AIVVV///uVRb/ABTVVf//5P+A/wAIVVUI///k/4D/AAhVVf//y9XW/wAEKqr//7KsK4sI//+I/mCLBYv//fACYAX/AHcBoIsFDvlA/wI3ASCLFf//uP3g/wC2/uAF//7KAKCLBf//uQEA//9JASAF//+pACCLBf8BA/9g/wKwACAF/wBr/uCLBf8BBAKA//1P/+AF//+m/6CLBf//IABA/wJS/sAV///6/sCLBf//gf/A//61AaAF/wEA/qCLBf//ggLg/wFK/mAFDvk59/L/ASX+gBWL/wBPAQAF/wDuACCLBYv//pcAYAX//99VgP//+gCW///bKtb///sri///1wAr///8VoAI///XACv///xUa///29Sg///+Kjb//+CpFosI//+sAeuL///B1Wv/AAkp1f//16jr/wASU6oI///XqwD/ABJVwP//5FW2/wAhVVX///EAa/8AMFTqCP//8QBr/wAwVwD///iANv8AStVKi/8AZVOVCIv/AGSq1f8AB6qA/wBKqpX/AA9VAP8AMKpVCP8AD1UA/wAwrGr/ABvVAP8AIYAK/wAoVQD/ABJTqgj/AChVAP8AElXA/wA91Sr/AAkq4P8AU1VViwj/ACCslYv/ACSAyv///f+A/wAoVQD///v/AAj/AChVAP///AEW/wAjf4D///tWQP8AHqoA///6q2sIi///s//ABf//s//A/wAKq0D//8YAFv8ABVWg///YAGuLCP//sKuri///yNUW///7qqD//+D+gP//91VACP//4QCW///3VUD//+pVIP//6VTg///zqav//9tUgAj///OrwP//21aW///51eD//8BVC4v//6VTgAiL//+sAev/AASqyv//w6s2/wAJVZX//9tUgAj/AAlVlf//21SA/wASqiD//+dUYP8AG/6q///zVEAI/wAcAMD///NWVv8ALgAK///5qyv/AD//VYsI/wAUANWL/wAXVfX/AADViv8AGqsV/wABqxUI/wAaqxX/AAGrFf8AFarg/wAB1cr/ABCqqv8AAgCACIv/ANf9wAX//2T+wIsFDvju/wEIAGD///gBIBX//+FWAIv//91VAP8AAasV///ZVAD/AANWKgj//9lWFv8AA1QV///eqqv/AARUVf//4/9A/wAFVJUIi/8ASf/ABf8ATquV///4ABb/AEH/1f///AAL/wA1VBWLCP8ALVZAi/8AIwBq/wACf5X/ABiqlf8ABP8qCP8AGKqV/wAFAUD/ABL/iv8ACtX1/wANVID/ABCqqgj/AA1Wlf8AEKqq/wAGq0r/ABlVaov/ACIAKgiL/wAsq2r///YqS/8AHyof///sVJb/ABGo1Qj//+xWq/8AEarq///d1SD/AAjVdf//z1OWiwj//38CIIsFi/8AUAFABf8AgP3giwX/ACdW1Yv/AB6rCv8AB//q/wAV/0D/AA//1Qj/ABX/QP8AD//V/wAK/6D/AB2qyov/ACtVwAiL/wAiqwD///n/i/8AGVVq///z/xb/AA//1Qj///QBK/8AD//V///tgJb/AAp/gHL/AAT/Kghy/wAFAUD//9rVa/8AAoCg///OqtaLCP//5VTri///4X+r///+qlb//92qa////VSrCP//3ayA///9VKv//+ErS////QBL///kqhb///yr6wiL1gX/ABqrFf8ABVSV/wAgVRX/AARUVf8AJf8V/wADVBUI/wAmASr/AANWKv8AIqsA/wABqxX/AB9U1YsI/wBAqiqL/wAy1ID///l/a/8AJP7V///y/tYI/wAlAOr///MA6/8AGlWq///sVaD/AA+qav//5apWCP8AD6pq///lrGv/AAfVNf//3dYri///1f/rCIv//9AAgP//9ipL///bKtb//+xUlv//5lUrCP//7Far///mVSv//+KA9v//7tU2///Yq0D///dVQAiL///7/wAF/wApVUD///iq6/8AHyog///wACv/ABT/AP//51VrCP8AFQEV///nVWv/AAqAiv//2P+hi///yqnWCIv//9VVFv//+P9L///c/5b///H+lv//5KoWCP//8gCr///krCv//+XVC///6quW///ZqWv///CrAAj//9mrgP//8KsA///JgPb///hVgP//uVZriwgO+Vn/AmkBIP8CsAAgFYv//n0AIAWL//+mq0D///pU9v//voBL///0qev//9ZVVgj///Sp6///1lVW///oVKD//+LVVv//2/9W///vVVYI///cAWv//+9VVv//xgEg///3qqv//7AA1osI//+v/sCL///F/wv/AAiACv//2/9W/wARABUI///cAWv/ABEAFf//6Cr2/wAdKqr///RUgP8AKVVACP//9FaW/wApVUD///orS/8AQVUAi/8AWVTACIv/AYL/4AX/AFT/YIsFi//+XAFABYv//8P/lv8AA1Ug///VVRb/AAaqQP//5qqWCP8ABqpA///mqpb/AA9VAP//7lUW/wAX/8D///X/lgj/ABf/wP//9f+W/wAoq3X///r/y/8AOVcqiwj/ADlVFYv/ACh/tf8ABQA1/wAXqlX/AAoAagj/ABeqVf8ACgBq/wAO/5X/ABGANf8ABlTVpAj/AAZW6qT/AAMrdf8AKtWgi/8APKtACIv/AaP+wAX/AFX/oIsFDvkJ/wFJAQD///gBIBX//9tUgIv//9cp1v8AAVWq///S/yv/AAKrVQj//9MBQP8AAqlA///YKyD/AANVIP//3VUA/wAEAQAIi/8ATv3gBf8AVquA///3VUD/AEhVtf//+6qg/wA5/+qLCP8AI/6Vi/8AHH7K/wABgGD/ABT/AP8AAwDACP8AFQEV/wADAMD/ABHWqv8ABYBV/wAOrED/AAf/6gj/AA1UgP8AB//q/wAIqbX/AAvVKv8AA/7q/wAPqmoI/wAEAQD/AA+qav8AAgCA/wAU1VWL/wAaAEAIi/8AH1TV///+VOv/ABYp9f///KnW/wAM/xUI///8q+v/AA0BKv//+CrL/wAJgEr///Opq/8ABf9qCP//86vA/wAF/2r//+rVQP8ABFVg///h/sD/AAKrVQj//1YBQP8AEwGgBf//1qrA/wAEqcD//+DU1v8ACdSq///q/uv/AA7/lQj//+sBAP8ADv+V///yAKv/ABOqYP//+QBW/wAYVSoI///5AFb/ABhXQP///IAr/wAf1gCL/wAnVMAIi/8ANqnA/wAJf0D/AClVQP8AEv6A/wAcAMAI/wATAJX/ABwAwP8AGqsV/wASqiD/ACJVlf8ACVOACP8AIlWV/wAJVZX/AC4qwP8ABKrK/wA5/+qLCP8AJqnqi/8AJ1TA///+VOv/ACf/lf///KnWCP8AKAGq///8q+v/AB+rSv///AEW/wAXVOr///tWQAiL//+z/8AF///mqpb/AAP+6v//4Kog/wADKmr//9qpq/8AAlXqCP//2qvA/wACVer//91WC/8AASr1///gAFaLCP//2qmri///4f/L///+VOv//+lV6////KnWCP//6VXr///8q+v//+5VFv//+lT2///zVED///f+AAj///IAq///+AAW///2/9b///VVy///+/8A///yq4AI///8ARb///KrgP///gCL///tAHaL///nVWsIi///5KoW/wAB/3X//+wp4P8AA/7q///zqasI/wAEAQD///OrwP8AB6qA///2/9b/AAtUAP//+lPrCP8AC1YV///6VgD/ABKrKv//+9Zg/wAaAED///1WwAj/AKgBYP//7P5gBf8AJ/+V///8ARb/AB7/av//+QBW/wAV/0D///X/lgj/ABX/QP//9f+W/wAP/9X//+3/q/8ACgBq///l/8AI/wAJVZX//+gAQP8ABKrK///ZqnaL///LVKsIi///w1bW///2qmv//9LVgf//7VTW///iVCsI///tVuv//+JWQHL//+0Adv//4KkW///3qqsI///gqyv///eqq///1QC2///71Vb//8lWQIsIDvkl/wFa/0D///gBIBX//81VK4v//9dVlv8AAlXq///hVgD/AASr1Qj//+FWAP8ABKnA///mVSv/AAlUiv//61RW/wAN/1UI///rVmv/AA3/Vf//8FWW/wAVVXX///VUwP8AHKuVCP//9qpr/wAWqhX///mqIP8AHqn////8qdb/ACap6gj///yr6/8AJqwA///+Vfb/ADNVqov/AD//VQiL/wA7VZX/AAHUwP8AMP/A/wADqYD/ACap6gj/AAOrlf8AJqwA/wAGgJX/ACAAtf8ACVWV/wAZVWoI/wAQqqr/ACypVf8AG1Tg/wAef0r/ACX/Ff8AEFVACP8AJgEq/wAQVUD/ADirSv8ACCqg/wBLVWqLCP8AGVVqi/8AH6pA///+VOv/ACX/Ff///KnWCP8AJgEq///8q+v/ACSqdf//+6ur/wAjU8D///qrawiLQAX//7Crq/8ACKrA///Bqrb/AARVYP//0qnAiwj//79V1ov//9F/1v//+dTW///jqdb///Opqwj//+Or6///86vA///tVeD//+kAgP//9v/W///eVUAI///2/9b//95VQP//+3/r///I1RaL//+zVOsI/wAF/mCLBf8ADVaV/wAOqir/ABUqwP8AC//g/wAc/ur/AAlVlQj/AB0BAP8ACVWV/wArgHX/AASqyv8AOf/qiwj/ADyrQIv/AC6AKv//+yqA/wAgVRX///ZVAAj/ACBVFf//9lUA/wAX1Qr//+1/i/8AD1UA///kqhYI/wAPVQD//+SsK/8AB6qA///WqsCL///IqVYIi///wqwA///5f2v//9F/1v//8v7W///gU6sI///zAOv//+BVwP//6ABA///pgKD//9z/lv//8quACP//3QGr///yq4D//8srAP//+VXA//+5VFaLCP//+AEg/wBP/iAV/wAyqtWL/wAk1Sr/AAKqSv8AFv+A/wAFVJUI/wAW/4D/AAVWqv8AECqK/wALgMr/AAlVlf8AEarqCP8ACVWV/wARqur/AASqyv8AHH/Vi/8AJ1TACIv/ACoAFf//+6qg/wAeADX///dVQP8AEgBVCP//91VA/wASAFX///BVlv8AC6p1///pVev/AAVUlQj//+lV6/8ABVSV///aVUv/AAKqSv//y1Sriwj//8v/gIv//9nVK////Krg///nqtb///lVwAj//+eq1v//+VXA///wKuD///VUwP//+Krr///xU8AI///4quv///FV1v///FV2///qViuL///jVoAIi///0KtW/wAE/yr//92qa/8ACf5V///qqYAI/wAKAGr//+qrlv8AEH/1///yKlb/ABb/gP//+akWCP8AFwGV///5qyv/ACQrYP///NWW/wAxVSqLCA74Df8AtAFAixWL/wJF/qAF//9x/uD//7wBwAWL/wBS/uAF/wCnASD/AFsA4AX/ADz/oIsFi//9T//gBf//qgBgiwUO+QD/AFH+oP8AU/8gFf8AUVbq///4ABb/AEJWSv///AAL/wAzVaqLCP8AMqjAi/8AJinK/wAD1UD/ABmq1f8AB6qACP8AGarV/wAHqoD/ABGq6v8ADSrV/wAJqwD/ABKrKgj/AAmrAP8AEqsq/wAE1YD/ABsAgIv/ACNV1QiL/wAmqer///rVFv8AG/+1///1qiv/ABFVgAj///WqK/8AEVWA///tqkD/AAt/wP//5apW/wAFqgAI///lrGv/AAWsFf//1oEW/wAC1gr//8dVwIsI///P/muL///Eqmv///uqoP//uVZr///3VUAIi/8Bcf7ABf8BmP8giwWL//+u/oAF//61/sCLBYv//zMB4AX/ADABlf8ABf9q/wAzAED/AAL/tf8ANf7qiwj/AD9WlYv/ADAAiv//+NWg/wAgqoD///GrQAj/ACCqgP//8atA/wAWKfX//+r/9v8AC6lq///kVKsI/wALq4D//+RUq/8ABdXA///agACL///Qq1YIi///x1XA///41Jb//9P/a///8akr///gqRYI///xq0D//+CrK///5ip2///pKzb//9qpq///8atACP//2qvA///xq0D//8mrq///+NWg//+4q5aLCP//4ABWi///3H92/wABqxX//9j+lv8AA1YqCP//2QCr/wADVBX//97VYP8ABFRV///kqhb/AAVUlQiL/wBJ/8AFDvit/wGb/+CLFf//S/7A/wDb/sAF///AAsCLBYv//yQBQAX//67+gIsFi/8C5wFgBf8AUQGAiwWL//4//WAF/wA//UCLBf8AtQGA/wDXAKAF/wBbAOCLBf//MP5A//8JAMAF/wDR/2D//vj/4AX//6EBQIsFDvfI/wDjAID7KhX//9X/673//+F/q/8AKSqK///s/2v/ACBVFQj//+z/a/8AIFUV///x/6D/ACh/tf//9v/W/wAwqlUI///3Aev/ADCsav//+4D2/wBDVYCL/wBV/pUIi/8AVgCq/wAEfwr/AEOANf8ACP4V/wAw/8AI/wAJACr/ADD/wP8ADisV/wAo1SD/ABNWAP8AIKqACP8AE1YA/wAgqoD/AB5VoP8AKFYK/wApVUD/ADABlQj/ADz/oIsF///cqiv//9H+6///5lUr///afvb///AAK///4v8ACP//8AAr///jARb///NVS///2ABr///2qmv//8z/wAj///aqa///zP/A///7VTb//7jVQIv//6SqwAiL//+j/+v/AASqyv//uFUg/wAJVZX//8yqVgj/AAlVlf//zKxr/wAMgAD//9gAa/8AD6pq///jVGsI/wAPqmr//+NUa/8AGdWK///aqrb/ACQAqv//0gEACP//wwBgiwUO98j/ABP+wPsqFf8AJACq/wAt/wD/ABnViv8AJVVK/wAPqmr/AByrlQj/AA+qav8AHKuV/wAMgAD/ACf/lf8ACVWV/wAzU5UI/wAJVZX/ADNVqv8ABKrK/wBHquCL/wBcABUIi/8AW1VA///7VTb/AEcqwP//9qpr/wAzAEAI///2qmv/ADMAQP//81VL/wAn/5X///AAK/8AHP7qCP//8AAr/wAdAQD//+ZVK/8AJYEK///cqiv/AC4BFQj/AD0CwIsF/wApVUD//8/+a/8AHlSV///Xqfb/ABNT6v//31WACP8AE1YA///fVYD/AA4rFf//1yrg/wAJACr//88AQAj/AAkAKv//zwBA/wAEgBX//7x/y4v//6n/VgiL//+qAWv///t/6///vKqA///2/9b//89Tlgj///b/1v//z1Wr///x/6D//9eAS///7P9r///fqusI///s/2v//9+q6///4YC2///W1Xb//9YCAFkI///C/UCLBQ76N/8B0QCg//+UASAV//9/VGuL//+mf4H/AAlVlf//zaqW/wASqyoI///Nqpb/ABKpFf//4Koh/wAiKdX///Opq/8AMaqVCP//86vA/wAxqpX///nV4P8AWn+1i/8Ag1TVCIv/AINW6v8ABiog/wBaq3X/AAxUQL0I/wAMVlW9/wAfVd//ACIp1f8AMlVq/wASU6oI/wAyVWr/ABJVwP8AWYB//wAJKuD/AICrlYsI/wCAqYCL/wBZf3X///b/1v8AMlVq///t/6sI/wAyVWr//+4BwP8AH3+K///eAOD/AAypqlkI/wAMq8BZ/wAGVeD//6T/IIv//3v+QAiL//+6AUD///wAC///zaqW///4ABb//+FT6wj///gAFv//4VYA///zqrb//+0Adv//71VW///4qusI///vVVb///iq6///5VX2///8VXb//9tWlosI//94/YCLBf///AIg/wA8/6AF///6/sCLBf//81ZW///kqhb//+0Adv//7dT2///mqpb///b/1gj//+aqlv//9wHr///hqmD///uA9v//3Koriwj//8yqVov//9rVa/8ACX9A///pAID/ABL+gAj//+kAgP8AEwCV///0gED/ACGACov/AC//gAiL/wAiACr/AAPVQP8AGir1/wAHqoD/ABJVwAj/AAeqgP8AElXA/wANKcr/AA0q1f8AEqkV/wAH/+oI/wASqyr/AAf/6v8AGwCA/wAD//X/ACNV1YsI/wAmqeqL/wA2qsr///6qVv8ARquq///9VKsIi/8AGgBABYv/ACFVVf///P9A/wAXVOr///n+gP8ADVSACP//+gCW/wANVpX///SAQP8ACKrA///u/+v/AAP+6gj//+7/6/8ABAEA///if+v/AAIAgP//1f/riwj//+ysFov//+eq1v///yp2///iqZb///5U6wj//+Krq////lTr///rVWD///4rQP//8/8W///+AZYIi/8APwAgBf8ANgEA/wAH/+r/ADWqiv8AA//1/wA1VBWLCP8ANACAi/8AJqr1///6qmD/ABlVav//9VTACP8AGVVq///1VMD/ABEAFf//7v/r/wAIqsD//+irFgj/AAiqwP//6KsW/wAEVWD//93/1ov//9NUlgiL//8Z/sAF/wBPAQCLBf8AE/7Ai/8ADn91/wAC/7X/AAkAKv8ABf9qCP8ACQAq/wAGAYD/AAaqQP8ADytV/wAEVFX/ABhVKgj/AARWav8AGFUq/wACKzX/ACgqSov/ADf/agiL/wBfVkD///1/YP8ARQCV///6/sD/ACqq6gj///sA1v8AKqrq///zqrb/ACAqYP//7FSW/wAVqdUI///sVqv/ABWr6v//34A2/wAOKxX//9KpwP8ABqpACP//2VYW/wAGqkD//7+rQP8AA1Ug//+mAGuLCP//sVRri///xP/W///9Vbb//9irQP//+qtrCP//zVUr///5/oD//9v/Vv//8n62///qqYD//+r+6wj//+qrlv//6wEA///ygMv//+ArC///+lYA///VVRYI///6VgD//9VXK////SsA//+5VWCL//+dU5YIi///l1ZA/wADVSD//7YAQP8ABqpA///UqkAI/wAGqkD//9SqQP8AEFVA///gqyv/ABoAQP//7KwWCP8AGgBA///sqgD/ACxU9f//9AAg/wA+qar///tWQAj/AByrlf///VSr/wAvqyD///6qVv8AQqqqiwj/ACNV1Yv/ACT/3/8AAIAg/wAmqer/AAEAQAj/ACap6v8AAQBA/wAYqpX/AADViv8ACqtA/wAAqtUIi///0P2gBf//1f/r///+AZb//8JVi////wDL//+uqyuLCP//8f+g/wDvAGAV/wAhVVWL/wAZgCD/AANVIP8AEarq/wAGqkAI/wARqur/AAaqQP8ADIAA/wALVQr/AAdVFf8AD//VCP8AB1UV/wAP/9X/AAOqiv8AF1Tqi/8AHqoACIv/ABwAwAX//28BQIsF///pU9aL///vVEv///5U6///9VTA///8qdYI///1Vtb///yr6///+Krr///5gHb///v/AP//9lUACP///AEW///2VQD///4Ai///8IBLi///6quWCIv//+tUVv8AAn+V///w1Kv/AAT/Kv//9lUACP8ABQFA///2Vxb/AAkq4P//+VXA/wANVID///xUawj/AA1UgP///FaA/wAVAAr///4rQP8AHKuViwgO97LvixWL/wKwACAF/wBV/6CLBYv//U//4AX//6oAYIsFDvli/wFm/yD///gBIBX//6SqwIv//79Uy/8ACP8g///Z/tb/ABH+QAj//9oA6/8AEgBV///n1Yv/AB+Alf//9aor/wAtANUI///1rED/AC0A1f//+tYg/wBM1MCL/wBsqKoIi/8AbKrA/wAFKeD/AEzVyv8AClPA/wAtANUI/wAKVdX/AC0A1f8AGCp1/wAff4r/ACX/Ff8AEf5ACP8AJgEq/wASAFX/AECrNf8ACQAq/wBbVUCLCP8AWqpqi/8AQH91///2/9b/ACZUgP//7f+rCP8AJlaV///uAcD/ABhWNf//4IB2/wAKVdX//9L/Kwj/AApV1f//0v8r/wAFKur//7MqNov//5NVQAiL//+TV1b///rVFv//sytA///1qiv//9L/Kwj///WqK///0v8r///nqcv//+B/a///2alr///t/6sI///Zq4D//+4BwP//v4CL///3AOD//6VVlosIi/8AT/4gFf8ARABVi/8ALgAK/wAEVWD/ABf/wP8ACKrACP8AF//A/wAIqsD/AA+qav8AFarg/wAHVRX/ACKrAAj/AAdXKv8AIqsA/wADq5X/AECqKov/AF6pVQiL/wBeq2r///xUa/8AQKs1///4qNb/ACKrAAj///iq6/8AIqsA///wVZb/ABWq4P//6ABA/wAIqsAI///oAED/AAiqwP//0f/2/wAEVWD//7v/q4sI//+7/6uL///R1UH///uqoP//56rW///3VUAI///nqtb///dVQP//8Crg///qVSD///iq6///3VUACP//+Krr///dVQD///xVdv//v1TLi///oVSWCIv//6FWq/8AA6qK//+/Vdb/AAdVFf//3VUACP8AB1UV///dVQD/AA/VIP//6lUg/wAYVSr///dVQAj/ABhVKv//91VA/wAuKr////uqoP8ARABViwgO+OP/AVD/4P//+AEgFf//1qrAi///3P+W/wAFf0r//+NUa/8ACv6VCP//41aA/wALAKr//+r/9v8AFNVV///yqWv/AB6qAAj///oBoIsF///7/wD//7kBAAX//7gAwIsFi/8C5wFgBf8AUQGAiwWL//7W/aAF/wAE/iCLBf8ADVaV/wAaqxX/ABQqgP8AEqsq/wAa/mr/AAqrQAj/ABsAgP8ACqtA/wAjKyD/AAVVoP8AK1XAiwi9i/8AJirV///4VHb/ABpVqv//8KjrCP8AGlWq///wqwD/ABKqIP//5dUL/wAK/pX//9r/Fgj/AAsAqv//2wEr/wAFgFX//8ory4v//7lWawiL//+5VFb///p/q///yim2///0/1b//9r/Fgj///UBa///2wEr///tKyv//+XWFv//5VTr///wqwAI///lVOv///CrAP//2VUL///4VYD//81VK4sI///gAWD/AE39oBX/ACtTqov/AB7Utf8AA//1/wASVcD/AAf/6gj/ABJVwP8AB//q/wAMVUr/ABBVQP8ABlTV/wAYqpUI/wAGVNX/ABisqv8AAypq/wApVkqL/wA5/+oIi/8AOVUV///81Zb/ACjVIP//+asr/wAYVSoI///5qyv/ABhVKv//86q2/wAQVUD//+2qQP8ACFVVCP//7apA/wAIVVX//+ErS/8ABCqq///UrFaLCP//31WAi///5f/A///8AAv//+yqAP//+AAWCP//7KoA///4ABb///JVC///86q2///4ABb//+9VVgj///iq6///8VXW///7KoD//+5VFv///aoW///rVFYI///9rCv//+tWa////tYW///kqyCL///d/9YIi///3Kor/wAA/zX//+RUq/8AAf5q///r/ysI/wACAID//+wBQP8ABKrK///uqoD/AAdVFf//8VPACP8ACKrA///uqoD/AA4AYP//81VL/wATVgD///gAFgj/ABNWAP//+AAW/wAaAED///wAC/8AIKqAiwgO+AX/ASX+gP8BVgEgFYv//9yqK////f+A///nVGD///v/AP//8f6WCP///AEW///yAKv///ardv//9lYL///xVdb///qrawj///FV1v//+qtr///mVSv///1Vtv//21SAiwj//9wBa4v//+bVS/8AAqpK///xqSv/AAVUlQj///GrQP8ABVSV///2/9b/AAmp9f///FRr/wAN/1UI///8VoD/AA4Bav///itA/wAYq6CL/wAjVdUIi/8AJKlq/wAB1MD/ABl/Ff8AA6mA/wAOVMAI/wADq5X/AA5W1f8ACSrg/wAJ1bX/AA6qKv8ABVSVCP8ADqxA/wAFVqqk/wACq1X/ACNTwIsI/wAkq4CL/wAZqtX///1Uq/8ADqoq///6qVYI/wAOqir///qra/8ACVSK///2Kkv/AAP+6v//8akrCP8ABAEA///xq0D/AAIAgP//5oDri///21aWCA76cP8ClwAgixX//1j+4P8CIv9ABf///AIgiwX//1n/IP/93QDABf//mf+AiwX//0P/4P8CsAAgBf8AWAAgiwX/AJoBAP/9xgFABf8ABP4giwX/AKgBYP8COf7ABf8AWgCgiwX/AKn+wP/9xgFABf8ABgGAiwX/AJT/wP8COf7ABf8AVf+giwX//0UAIP/9T//gBf//mf+AiwUO+SDv/wKwACAV/wEuAICLBf8AN1SVi/8AKf8K///2/9b/ABypgP//7f+rCP8AHKuV///t/6v/ABMAlf//56rW/wAJVZX//+FWAAj/AAlVlf//4VYA/wAEqsr//9hUy4v//89TlgiL///RViv///tVNv//2Stg///2qmv//+EAlgj///aqa///4QCW///s1Lb//+cqtv//4v8A///tVNYI///jARb//+1U1v//1YDW///2qmv//8gAlosI//8p/6CLBYv7jgX//6oAYIsFi/8CsAAgBf8BDv8A//6aASAV/wArVcCL/wAfqkD/AAR/Cv8AE/7A/wAI/hUI/wAUANX/AAkAKv8ADQAg/wAN1ar/AAX/av8AEqsqCP8ABgGA/wASqyr/AAMAwP8AG/+1i/8AJVRACIv/ACVWVf///Sn2/wAcAL////pT6/8AEqsqCP//+lYA/wASqyr///NVS/8ADdSg///sVJb/AAj+FQj//+xWq/8ACQAq///ggHb/AASAFf//1KpAiwj//0UAIIsFi//+6gJgBf8AuP9giwUO95L/AFP/IPkeFYv/AF0BYAX/AFX/oIsFi///ov6gBf//qgBgiwX//6MBwP/88gFgFf8AHVRVi/8AFVRq/wABqxX/AA1UgP8AA1YqCP8ADVaV/wADVBX/AAiqwP8ABVSV/wAD/ur/AAdVFQj/AAQBAP8AB1UV/wACAID/AAtVCov/AA9VAAiL/wJK/+AF/wBRAYCLBYv//ckCAAWL///T/2v///qqYP//4ABW///1VMD//+wBQAj///VUwP//6/8r///u1Tb///Mqlv//6FWr///6VgAI///oVav///pT6///24BB///9Kfb//86q1osIi/8ARAFgBQ75Pv8CDgBAixX//5T+QP8BDf7ABf//7wIAiwX//yf/IIsFi//+8gFABf//qgBgiwWL/wKwACAF/wE8AOCLBf8ANqnAi/8AKVQ1///3VUD/ABv+qv//7qqACP8AHADA///uqoD/ABJVwP//6KoL/wAIqsD//+Kplgj/AAiqwP//4qur/wAEVWD//9pWVov//9IBAAiL///QqUD///kAVv//1tRr///yAKv//9z/lgj///IAq///3QGr///jVXb//+gq9v//1KpA///zVEAI/wB1ASD//uQA4AX//6P+4IsF//9uAQD38hX/ACqo1Yv/AB9/iv8ABIAV/wAUVkD/AAkAKgj/ABRWQP8ACQAq/wANACD/AA0q1f8ABaoA/wARVYAI/wAFqgD/ABFVgP8AAtUA/wAZVWqL/wAhVVUIi/8AIgAq///9Vbb/ABmpyv//+qtr/wARU2oI///6q2v/ABFVgP//89Vr/wANACD//+z/a/8ACKrACP//7P9r/wAIqsD//+HVFv8ABFVg///WqsCLCP//Nv/AiwWL//7+ASAF/wDCAaCLBQ74yu+LFYv/ArAAIAX/AawAwIsFi///r/7ABf/+qf7giwWL//8UAGAF/wEwAQCLBYv//68BoAX//s//AIsFi//+3P8gBf//qgBgiwUO+WL/ApL/IP//jv/gFYv///3/gAX//54AgIsF//+uAWD/AHIAYAX//+FT6///+1ZA///X/2D///2rIP//zqrWiwj//6SqwIv//79Uy/8ACP8g///Z/tb/ABH+QAj//9oA6/8AEgBV///n1Yv/AB+Alf//9aor/wAtANUI///1rED/AC0A1f//+tYg/wBM1MCL/wBsqKoIi/8AbKrA/wAFKeD/AEzVyv8AClPA/wAtANUI/wAKVdX/AC0A1f8AGCp1/wAff4r/ACX/Ff8AEf5ACP8AJgEq/wASAFX/AECrNf8ACQAq/wBbVUCLCP8AWqpqi/8AQH91///2/9b/ACZUgP//7f+rCP8AJlaV///uAcD/ABhWNf//4IB2/wAKVdX//9L/Kwj/AApV1f//0v8r/wAFKur//7MqNov//5NVQAiL//+4q5b///5U6///yKpg///8qdb//9ipKwj///yr6///2KtA///4gDb//9+ANv//9FSA///mVSsI///0VID//+ZXQP//7dT2///sgFb//+dVa///8qlrCO///3kAoAX//xcBIP8AuP9gFf//lv7A/wCSAiAF/wBcASCLBf8AX/8A//99/sAF/wANVpX/AAiqwP8ACgBq/wANqer/AAaqQP8AEqkVCP8ABqpA/wASqyr/AARVYP8AGYAg/wACAID/ACBVFQj/AAIAgP8AIFcq/wABAED/AC4qv4v/ADv+VQiL/wBeq2r///xUa/8AQKs1///4qNb/ACKrAAj///iq6/8AIqsA///wVZb/ABWq4P//6ABA/wAIqsAI///oAED/AAiqwP//0f/2/wAEVWD//7v/q4sI//+7/6uL///R1UH///uqoP//56rW///3VUAI///nqtb///dVQP//8Crg///qVSD///iq6///3VUACP//+Krr///dVQD///xVdv//v1TLi///oVSWCIv//6FWq/8AA6qK//+/Vdb/AAdVFf//3VUACP8AB1UV///dVQD/AA/VIP//6lUg/wAYVSr///dVQAj/ABhVKv//91VA/wAuKr////uqoP8ARABViwj/AEMBIIsFDvjj/wGm/4D/AEAAYBX///sB4IsF///yqWv//+VU6///69R2///tVNb//+T/gP//9VTACP//5QGW///1Vtb//9yAgP//+qtr///T/2uLCFmL///Z1Sv/AAd/yv//5apW/wAO/5UI///lqlb/AA7/lf//7X+L/wAZ/zX///VUwP8AJP7VCP//9VbW/wAlAOr///qra/8ANdZKi/8ARquqCIv/AEaplf8ABX9K/wA1/ur/AAr+lf8AJVRACP8ACwCq/wAlVlX/ABLV4P8AGlWq/wAaqxX/AA9VAAj/ABqrFf8AD1cV/wAmqvX/AAeriv8AMqrViwj/ACiqaov/ACKp9f//+n+r/wAcqYD///T/Vgj/AByrlf//9P9W/wAVVXX//+rVQP8ADf9V///gqysI/wAGAYCLBf8AAwDA/wBH/0AF/wBI/4CLBYv//ToAoAX//67+gIsFi/8BCABgBf//df/g/wAG/qAV/wAjVdWL/wAbf5X/AATVgP8AE6lV/wAJqwAI/wATq2r/AAmrAP8ADisV/wAPK1X/AAiqwP8AFKuqCP8ABVaq/wANVID/AAN/1f8AEFQ1/wABqQD/ABNT6gj/AAGrFf8AE1YA/wAA1Yr/ABkBCov/AB6sFQiL/wAiqOr///7/wP8AG1Tg///9/4D/ABQA1Qj///4Blv8AFADV///7ANb/ABGq6v//+AAW/wAPVQAI///4ABb/ABFVgP//8ipW/wAMqrX//+xUlv8AB//qCP//7FSW/wAH/+r//+XVC/8AA//1///fVYCLCP//1VUWi///4VT2///71Vb//+1U1v//96qrCP//7Vbr///3qqv///OAAP//74AL///5qRb//+dVawj///mrK///51Vr///81Zb//9cAK4v//8aq6wiL///GqNb/AAMqav//1v8g/wAGVNX//+dVawj/AAZW6v//51Vr/wAMVUr//++qwP8AElOq///4ABYI/wASVcD///gAFv8AHtXA///8AAv/ACtVwIsIDviu74sVi/8CsAAgBf8AVf+giwWL//2i/sAF/wFA/wCLBYv//60BIAX//mkBYIsFDvdz/wBAAGD/AZf+4BWL/wBmAIAF/wBe/sCLBYv//5n/gAX//6EBQIsF///rAQD//hb/oBX/ABCqqov/AAxVSv8AAasV/wAH/+r/AANWKgj/AAf/6v8AA1Yq/wAFf0r/AAYrKv8AAv6q/wAJACoI/wADAMD/AAkAKv8AAYBg/wANfzWL/wAR/kAIi/8AEQEgBf//2wAgiwWL/wBmAIAF/wBe/sCLBYv//6z+AAWL///YAGv///0rAP//4iuL///6VgD//+xWqwj///pWAP//7FSW///1Kgv///JVC///7/4W///4VYAI///wACv///hVgP//5wEL///8KsD//94B64sIi/8AKf4ABQ75LP8BFgDAixX//wcAQP8CsAAgBf8AWf2AiwX/ANMCwP/9ugFgBf8ABP4giwX/ANP/4P8CRf6gBf8AVv/giwX//wgAgP/9T//gBf//lAEgiwUO+PDvixWL/wKwACAF/wG//4CLBYv//6/+wAX//pYAIIsFi///IwEABf8BOgBgiwWL//+v/sAF//7F/6CLBYv//x0CoAX/AWn/4IsFi///r/7ABf/+QACAiwUOe5v4PJn3bpmRm7mTBvuIi/iMkfcaiwd7m/g0l/dul52bs5UI+4aL+IaS9xeLCa8K9xwLAAAAAAMgAAACRgAAAjAAAAHMAAACVwAAAlcAAAD+AAACOgAAAP4AAAJXAAABagAAAfMAAAJBAAACVwAAAk8AAADrAAACTwAAAWcAAAJPAAABbwAAAXQAAAISAAAB/AAAA3MAAADfAAADiwAAAj8AAAMxAAACIwAAAN8AAAKgAAACqwAAAWcAAAJiAAACsQAAAqwAAAKlAAACWgAAAsUAAAJ1AAACkQAAAXkAAAJsAAACGQAAATQAAAE0AAADowAAAR4AAALOAAACTwAAAXEAAAPcAAACjAAAAP4AAAKqAAACNgAAAs4AAAJPAAACGgAAAN8AAAKYAAACXAAA)format("opentype");font-display:swap;font-display:swap}@font-face{font-family:fnt0;src:url(data:font/otf;base64,T1RUTwAJAIAAAwAQQ0ZGIJ7a/isAAAPwAAAuTU9TLzJRhkRAAAABAAAAAGBjbWFwCAsJKQAAAuwAAADkaGVhZGLtQvkAAACcAAAANmhoZWEC6QMkAAAA1AAAACRobXR4URcAAAAAMkAAAACQbWF4cAAkUAAAAAD4AAAABm5hbWUTxHZ8AAABYAAAAYxwb3N0AAMAAAAAA9AAAAAgAAEAAAABAABgUMtYXw889QADA+gAAAAAAAAAAAAAAAAAAAAAAAH/MgPVAucAAAADAAIAAAAAAAAAAQAAAuf/MgAAA80AAAAAAAAAAQAAAAAAAAAAAAAAAAAAACQAAFAAACQAAAACAooBkAAFAAACigJYAAAASwKKAlgAAAFeADIA+QAAAgAFAAgAAAkAAwAAAAMAAAAAAAAAAAAAAAAzNTc5AAAAIAB0Auf/MgDIAucAzgAAAAEAAAAAAaACpAAAACAAAAAAAAwAlgABAAAAAAAAABMAAAABAAAAAAABAAgAEwABAAAAAAACAAcAGwABAAAAAAADABAAIgABAAAAAAAEABAAMgABAAAAAAAGABAAQgADAAEECQAAACYAUgADAAEECQABABAAeAADAAEECQACAA4AiAADAAEECQADACAAlgADAAEECQAEACAAtgADAAEECQAGACAA1kNvcHlyaWdodCAtIFVua25vd25HZW5lcmljMFJlZ3VsYXJHZW5lcmljMC1SZWd1bGFyR2VuZXJpYzAtUmVndWxhckdlbmVyaWMwLVJlZ3VsYXIAQwBvAHAAeQByAGkAZwBoAHQAIAAtACAAVQBuAGsAbgBvAHcAbgBHAGUAbgBlAHIAaQBjADAAUgBlAGcAdQBsAGEAcgBHAGUAbgBlAHIAaQBjADAALQBSAGUAZwB1AGwAYQByAEcAZQBuAGUAcgBpAGMAMAAtAFIAZQBnAHUAbABhAHIARwBlAG4AZQByAGkAYwAwAC0AUgBlAGcAdQBsAGEAcgAAAAEAAwABAAAADAAEANgAAAAgACAABAAAACAALgBBAEYAUABVAFcAWQBhAGUAaQBsAHAAcgB0//8AAAAgAC4AQQBDAEgAUgBXAFkAYQBjAGcAbABuAHIAdP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAgACAAIAAmADYAPAA8ADwAPABAAEQARABIAEgASAALACIACQAgAB8ABQAEABEABwAjABAACgANAAgAAwABAAIABgASAAwADwAOABcAFgAeABwAGwAhABUAFAAaABkAEwAdABgAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEBAABBAAAAAEAAAARR2VuZXJpYzAtUmVndWxhcgABBAAAAAEAAAAwHhoACY8e4gagBv8emBqZXx50OgBfBR4KAB+Lix4KAB+LiwwH9ysP9zARvhwuGBIABAQAAAABAAAAEQAAABkAAAAeAAAAJkdlbmVyaWMwLVJlZ3VsYXJHZW5lcmljMEFkb2JlSWRlbnRpdHkAAAIAAQAiACQEAAAAAQAAAAQAAAGpAAADTAAABgkAAAZZAAAGtwAACkQAAApqAAAK0AAAC1EAAAuFAAALiAAADRQAAA2eAAAN/gAADpgAAA8NAAAPawAAD60AABKrAAAS0QAAEyIAABT6AAAYBgAAGF4AABsYAAAcgwAAIHgAACMAAAAj0gAAJrEAAChIAAAqYgAAK+gAACwOAAAs5vm0Dvke/wBI/4D/ArAAIBX/AUcAgIsF/wA9VhWL/wAuVXX///b/1v8AH1TV///t/6sI/wAfVNX//+3/q/8AFNVV///mqpb/AApV1f//31WACP8AClXV///fVYD/AAUq6v//1FXgi///yVZACIv//8yqVv//+yqA///V/+v///ZVAP//31WACP//9lUA///fVYD//+tVYP//5f/A///gVcD//+yqAAj//+BVwP//7KoA///RKmv///ZVAP//wf8Wiwj//2b/QIsFi///IwEABf//UgBAiwWL/wKwACAF/wD/AUD//rf/QBX/ACNV1Yv/ABlVav8AAioq/wAPVQD/AARUVQj/AA9VAP8ABFZq/wAJ/2D/AAhVVf8ABKnA/wAMVEAI/wAEq9X/AAxWVf8AAlXq/wAU1mCL/wAdVmoIi/8AHVRV///9qhb/ABTUSv//+1Qr/wAMVEAI///7VkD/AAxWVf//9ipL/wAIVVX///D+Vv8ABFRVCP//8QBr/wAEVmr//+aA6/8AAis1///cAWuLCP//rv6AiwWL//9D/+AF/wBRAYCLBQ75O/8Byf7gixX//6YCgP8A8QDgBf//hv3giwWL//8O/yAF//9SAECLBYv/ArAAIAX/AUoBQIsF/wA/VICL/wAv1Mr///cqi/8AIFUV///uVRYI/wAgVRX//+5VFv8AFVV1///nqtb/AApV1f//4QCWCP8AClXV///hAJb/AAUq6v//1oALi///y/+ACIv//9AAgP//+dTW///WVVb///Opq///3KorCP//86vA///cqiv//+eAIP//5lUr///bVID///AAKwj/AGoBgP/++gAgBf//Sf5AiwX//4cBAP8BewEAFf8AJACqi/8AGYAg/wAB/3X/AA7/lf8AA/7qCP8ADv+V/wAEAQD/AAnUqv8AB3/K/wAEqcD/AAr+lQj/AASr1f8ACwCq/wACVer/ABKAdYv/ABoAQAiL/wAaqxX///3/gP8AEtTV///7/wD/AAr+lQj///wBFv8ACwCq///2gMD/AAd/yv//8QBr/wAD/uoI///xAGv/AAQBAP//5n/g/wACAID//9v/VosI//+j/uCLBYv//1cBgAX/AFoAoIsFDvlX/wFiAQD///gBIBX//59UFov//7sqIP8ACioV///XACv/ABRUKgj//9cAK/8AFFZA///mVSv/ACB/yv//9aor/wAsqVUI///1rED/ACyrav//+tYg/wBKqpWL/wBoqcAIi/8AaKvV/wAFKeD/AEqqlf8AClPA/wAsqVUI/wAKVdX/ACyrav8AGarV/wAgf8r/ACj/1f8AFFQqCP8AKP/V/wAUVkD/AETV4P8ACisg/wBgq+qLCP8AYKnVi/8ARNTV///11OD/ACj/1f//66nACP8AKP/V///rq9b/ABmAIP//34A2/wAKAGr//9NUlgj/AAoAav//01ar/wAFADX//7VVa4v//5dUKwiL//+XVkD///r/y///tVVr///1/5b//9NUlgj///X/lv//01ar///mf+D//9+ANv//1wAr///rqcAI///XACv//+ur1v//uysr///11ev//59WK4sIi/8AjP3AFf8AK1Oqi/8AHP7q/wADf9X/AA6qKv8ABv+qCP8ADqxA/wAHAcD/AAlVlf8AECuV/wAD/ur/ABlVagj/AAQBAP8AGVVq/wACAID/ADKpyov/AEv+KgiL/wBMAED///3/gP8AMqrV///7/wD/ABlVagj///wBFv8AGVVq///2qmv/ABAqiv//8VPA/wAG/6oI///xVdb/AAcBwP//4wEW/wADgOD//9SsVosI///UqkCL///iqqD///x/IP//8KsA///4/kAI///wqwD///kAVv//9lUA///vgAv///v/AP//5f/ACP///AEW///mAdb///4Ai///zaqWi///tVNWCIv//7VVa/8AAf91///Nqpb/AAP+6v//5f/ACP8ABAEA///mAdb/AAmrAP//74AL/wAPVQD///j+QAj/AA9VAP//+QBW/wAdVWD///yAK/8AK1XAiwgO+NX/AEj/gIsVi/8CsAAgBf8B1AFgiwWL//9y/yAF//7Z/mCLBYv//2j/wAX/AQABgIsFi///cwJABf/+//6AiwWL//8A/sAF//9SAECLBQ74+/8ASP+AixWL/wKwACAF/wHoACCLBYv//3L/IAX//sX/oIsFi///fwIgBf8BCgDgiwWL//9y/yAF//71/yCLBYv//3gAYAX/AToAYIsFi///cv8gBf/+F//giwUO+QD32f//+AEgFf//nqtWi///qar2/wAFqgD//7Sqlv8AC1QACIv/AIf/oAX/AFFU1f//+AAW/wBEqiD///wAC/8AN/9qiwj/ACCqgIuk/wABVar/ABFVgP8AAqtVCP8AEVWA/wACq1X/AAxVSv8ABFVg/wAHVRX/AAX/agj/AAaqQP8ABVSV/wAEKqr/AAZ/iv8AAasV/wAHqoAI/wABqxX/AAeslf8AANWK/wAK1fWL/wAN/1UIi/8AEKqq///+qlb/AAv/4P///VSr/wAHVRUI///9VsD/AAdVFf//+qtr/wAFKeD///gAFv8AAv6qCP//+AAW/wADAMD///H/oP8AAtYK///r/yv/AAKrVQj//4D/gP8AEADgBf//0qvW/wAFVJX//91/tv8AC3/A///oU5b/ABGq6gj//+hVq/8AEarq///wACv/ABbUyv//96qr/wAb/qoI///3qqv/ABwAwP//+9VW/wAjAGqL/wAqABUIi/8AO1WV/wAK/6D/ACz/yv8AFf9A/wAeqgAI/wAWAVX/AB6sFf8AHYAV/wAUKoD/ACT+1f8ACajqCP8AJQDq/wAJqwD/AC8rAP8ABNWA/wA5VRWLCP8AKgAVi/8AJoBA///+VOv/ACMAav///KnWCP8AIwBq///8q+v/ACYq1f//+qtr/wApVUD///iq6wiL//97ASAF//+wqZb/AAiqwP//vv9g/wAEVWD//81VK4sI///Kq+uL///dVgv///wAC///8AAr///4ABYI///3VUD///v/AP//+n+r///6VPb///2qFv//+KrrCP///aoW///4quv///7VC///9aori///8qlrCIv//+9VVv8AASr1///0Ktb/AAJV6v//+QBWCP8AAlXq///5AFb/AAUANf//+v/L/wAHqoD///z/QAj/AAeqgP///QFW/wANgED///0rAP8AE1YA///9VKsI/wCR/wD//+4BwAX/AB1UVf///KnW/wAYKnX///n/i/8AEwCV///3VUAI/wATAJX///dVQP8AD9Ug///xVdb/AAypqv//61ZrCP8AE1YA///jVGv/AAmrAP//0lRWi///wVRACIv//76rAP//9aor///O1Yv//+tUVv//3wAWCP//61Zr///fABb//+RVtv//6n/W///dVQD///X/lgj//91VAP//9gGr///TADb///sA1v//yKtriwgO99D/AEb/AIsVi/8CsAAgBf8Arf/AiwWL//1P/+AF//9SAECLBQ75Xv8B4AFAixX//xH/4P8BiQFgBf//+v7AiwWL//52/qAF//9Z/yCLBYv/ArAAIAX/ALMBAIsF/wDc/wD//psBYAX/AAUBQIsFi/8BZP6gBf8ApwEgiwWL//1P/+AF//9c/+CLBQ75SP8B+v6gixX//9cCQP8AggFABf//Cv4giwX//9j/oP//ff7ABf//UgBAiwX/ANwB4P8CsAAgBf8A6/+giwX/ANv+wP/9T//gBf//Tv+AiwX//14AIP8CFf8gFf//+wHgiwX//7D/AP/++P/gBf8ApABgiwX//6/+wP8BBwAgBQ74s/8ASP+AixWL/wKwACAF/wCt/8CLBYv//eP/YAX/ARD/gIsFi///bACABf/+QQDAiwUO95AO+UP/Amr+gP8CsAAgFYv//ob/gAWL//+j/+v///p/q///vNU2///0/1b//9WqgAj///UBa///1aqA///ngCD//+HVFv//2f7W///t/6sI///aAOv//+4BwP//wgEr///3AOD//6oBa4sI//+p/1aL///B/xb/AAj/IP//2f7W/wAR/kAI///aAOv/ABIAVf//54Ag/wAeKur///T/Vv8AKlWACP//9QFr/wAqVYD///qAtv8AQyrKi/8AXAAVCIv/AXkAgAX/AK3/wIsFi//+Yf+gBYv//9CrVv8AAaoK///fVYD/AANUFf//7f+rCP8AA1Yq///t/6v/AAhVVf//9AAg/wANVID///oAlgj/AA1Wlf//+gCW/wAYAMr///0AS/8AIqsAiwj/ACKo6ov/ABf+tf8AAv+1/wANVID/AAX/agj/AA1Wlf8ABf9q/wAIVVX/AAv/4P8AA1QV/wASAFUI/wADVir/ABIAVf8AAasV/wAgqoCL/wAvVKoIi/8BngBgBf8Arf/AiwUO+hX/ApL/IIsVi/8BtgAgBf//+QFgiwX//20AwP/+Sf/gBf//if6giwX//20AwP8BtgAgBf//+P5AiwWL//5J/+AF//9eACCLBYv/ArAAIAX/AO8AYIsF/wCH/6D//nMAwAX/AAcBwIsF/wCG/2D/AYz/QAX/AO4AIIsFi//9T//gBf//WP7giwUO+Q//AOYBQIsVi/8A6f8gBf//Gv8A/wHGAQAF/wC0AUCLBf8Ahv9g//7kAOAF/wAG/qCLBf8Ahf8g/wEb/yAF/wCwAECLBf//GwIg//45/wAFi///FgDgBf//UgBAiwUO+mH/Al0BQIsV//+Y/0D/AZ0AIAX///n+gIsF//+ZAmD//mL/4AX//yP+IIsF//9iASD/ArAAIAX/AK3/wIsF/wBnAMD//h4BYAX/AAT+IIsF/wBzAKD/AeH+oAX/ALIAwIsF/wB0/gD//h4BYAX/AAYBgIsF/wBf/wD/AeH+oAX/AKz/gIsF//9iASD//U//4AX//yUBgIsFDvlC/wHk/2CLFf//PQFA/wEYAUAF///U/qCLBYv//uf+wAX//1IAQIsFi/8CsAAgBf8Arf/AiwWL//7z/qAF/wArAWCLBf8AxP9A/wEMAWAF/wC/AOCLBf//BwBA//65/8AF/wD8AID//pYAIAX//zv94IsFDvla/wHRAKCLFYv/AQ3+wAX//yP+IIsFi//+8gFABf//UgBAiwWL/wKwACAF/wCt/8CLBYv//vP+oAX/ANwB4IsFi/8BDAFgBf8Arf/AiwWL//1P/+AF//9SAECLBQ743v8AzgGAixWL/wIcAKAF//9B/2CLBYv/AJP/gAX/Air+IIsFi///bACABf//QQJAiwWL//3j/2AF//9SAECLBQ742v8APP+g/wH9/2AV/wCZAMCLBf8ABAEA///DAGAF/wAI/yCLBf8ADf9V/wAaAED/ABNU9f8AEgBV/wAYqpX/AAoAagj/ABiqlf8ACgBq/wAcqor/AAUANf8AIKqAiwj/AClVQIv/ACB/yv//+FR2/wAXqlX///Co6wj/ABesav//8KsA/wARgDX//+V/oP8AC1QA///aVEAI/wALVhX//9pWVv8ABasK///LKwCL//+7/6sIi///u1br///6f6v//8qq4P//9P9W///Z/tYI///1AWv//9oA6///7qqA///lK0D//+hTlv//8FWWCP//6FWr///wVZb//9+ANv//+CrL///WqsCLCP//3f/Wi///44Ar/wAEKqr//+kAgP8ACFVVCP//6QCA/wAIVVX//+0rK/8AECqK///xVdb/ABf/wAj///f+AIsFi///Av9ABf//XwBgiwWL/wLE/yAF/wDuACD//oMBoBX/ABoAQIv/ABIAVf8AAlTg/wAKAGr/AASpwAj/AAoAav8ABKvV/wAGf4r/AAqAiv8AAv6q/wAQVUAI/wADAMD/ABBVQP8AAYBg/wAdKqqL/wAqABUIi/8AKgAV///+f6D/AB0qqv///P9A/wAQVUAI///9AVb/ABBVQP//+YB2/wAKqjX///X/lv8ABP8qCP//9f+W/wAE/yr//+3/q/8AAn+V///l/8CLCP//6/8ri///8P9g///9qyD///X/lv//+1ZACP//9gGr///7VkD///iq6///96qr///7VCv///P/Fgj///wBFv//9qpr///9Vbb///QAIP///qpW///xVdYI///+qlb///FV1v///1Ur///sVaCL///nVWsIi///5qqW/wAAgCD//+wp4P8AAQBA///xqSsI/wABAED///GrQP8AAoCg///01av/AAQBAP//+AAWCP8ABKnA///zVlb/AAdVFf//91VA/wAKAGr///tUKwj/AAoAav//+1ZA/wAPVQD///2rIP8AFKmViwgO97H/ADz/oIsVi/8C5wFgBf8AowAgiwWL//0Y/qAF//9c/+CLBQ73sf8AO/9g/wJi/6AVi/8AhAHABf8ApQCgiwWL//97/kAF//9a/2CLBf8AAQBA//2dAGAVi/8B/f9gBf8AowAgiwWL//4CAKAF//9c/+CLBQ74Yf8BpP8A/wAI/yAVWf//9KwA///MVfb///pWAP//yqvriwj//7yqgIv//85/Fv8ACdSq///gU6v/ABOpVQj//+BVwP8AE6tq///r1YD/ABt/lf//91VA/wAjU8AI///3VUD/ACNV1f//+6qg/wAyVnWL/wBBVxUIi/8AP1SA/wAEgBX/ADF+1f8ACQAq/wAjqSoI/wAJACr/ACOrQP8AFFU1/wAcAMD/AB+qQP8AFFZACP8AH6xV/wAUVkD/ADDWFf8ACisg/wBB/9WLCP8AOVUVi/8AMqrV///6VPb/ACwAlf//9KnrCIv//4v/IAX//9v/Vv8ABVaq///bqev/AAKrVf//21SAiwj//+CrK4v//+l/lv///H8g///yVAD///j+QAj///JWFv//+QBW///2/9b///OAAP//+6mW///t/6sI///7q6v//+4BwP///dXW///iANaL///V/+sIi///1f/r/wACKir//+HVFv8ABFRV///tqkAI/wAEVmr//+2qQP8ACQAq///zgAD/AA2p6v//+VXACP8ADawA///5VcD/ABbV1f///Krg/wAf/6qLCP8AI1XVi/8AJVVK/wACqkr/ACdUwP8ABVSVCIv//4v/IAUO+Mj/ALj/YP//+AEgFVmL///bACD/AAv/4P//6ABA/wAX/8AI///oAED/ABf/wP//9AAg/wAnVMCL/wA2qcAIi/8AKAGq/wAEqsr/AB8Adf8ACVWV/wAV/0AI/wAJVZX/ABX/QP8AECqK/wAP/9X/ABb/gP8ACgBqCP8AFv+A/wAKAGr/ACEqoP8ABQA1/wArVcCLCP8AIKqAi/8ALwBK///+qlb/AD1WFf///VSrCIv/ABIBYAWL/wAZVWr///0p9v8AEdSV///6U+v/AApTwAj///pWAP8AClXV///1Vcv/AAaAlf//8FWW/wACq1UI///wVZb/AAKrVf//5CsA/wABVar//9gAa4sIWYv//85Va////VSr///Oqtb///qpVgiL/wB0AOAF/wA+qar/AAtWFf8AQqqq/wAFqwr/AEarqosI/wBF/sCL/wAzf1X///ip4P8AIP/q///xU8AI/wAg/+r///FV1v8AFYAq///qVSD/AAoAav//41RrCP8ACgBq///jVoD/AAUANf//1qrAi///yf8ACIv//s0BYAX//2X/AIsF///7/wD/ADr/IAX///gBIIsF///uqoD//+SsK///6v/2///uALb//+dVa///91VACP//51Vr///3VUD//+KqoP//+6qg///d/9aLCP8ATABA/wB0/gAV/wASqyqL/wAOqir/AAH/df8ACqkq/wAD/uoI/wAKq0D/AAQBAP8ACFZg/wAHALX/AAYBgP8ACgBqCP8AB1UV/wAMq8D/AAOqiv8AFKqgi/8AHKmACIv/ABQB4AX//6T/IIsF///t/6uL///y/+D///6qVv//+AAW///9VKsI///4ABb///1Uq///+n+r///61Rb///z/QP//+FWACP///QFW///4VYD///6Aq///84AAi///7qqACIv///FV1v8AAaoK///1AGD/AANUFf//+KrrCP8AA1Yq///4quv/AAaAlf//+v/L/wAJqwD///1Uqwj/AAmrAP///VSr/wAPf7X///6qVv8AFVRqiwgO+Cr/AG//4IsVi/8BgP9gBf//o/7giwWL9xEF/wBcASCLBYv/AJP/gAX/AKMAIIsFi///bACABf8Abf9giwWL+xEF//+SAKCLBYv//n8AoAX//1z/4IsFDvjO/wEc/2D///gBIBX//7P/wIv//8lVNv8AB3/K///eqqv/AA7/lQj//96qq/8ADv+V///q1UD/ABiqlf//9v/W/wAiVZUI///2/9b/ACJVlf//+3/r/wA3gFWL/wBMqxUIi/8ATVPV/wAEgBX/ADeqAP8ACQAq/wAiACoI/wAJACr/ACIAKv8AFSrA/wAYf+D/ACFVVf8ADv+VCP8AIVVV/wAPAar/ADaqyv8AB4DV/wBMAECLCP8ATABAi/8ANqrK///4fyv/ACFVVf//8P5WCP8AIVVV///xAGv/ABUqwP//54Ag/wAJACr//93/1gj/AAkAKv//3f/W/wAEgBX//8hWAIv//7KsKwiL//+zVOv///t/6///yH+r///2/9b//92qawj///b/1v//3apr///q1UD//+dVa///3qqr///xAGsI///eqqv///EAa///yVU2///4gDb//7P/wIsIi/cRFf8AHADAi/8AEypA/wAC1QD/AApTwP8ABaoACP8AClXV/wAFqgD/AAZV4P8ACypV/wACVer/ABCqqgj/AAJV6v8AEKqq/wABKvX/ACAAtYv/AC9WwAiL/wAv/4D///7VC/8AIFUV///9qhb/ABCqqgj///2qFv8AEKqq///5qiD/AAr/oP//9aor/wAFVJUI///1rED/AAVWqv//7NXA/wACq1X//+P/QIsI///kAVaL///s1cD///1Uq///9aor///6qVYI///1qiv///qra///+aog///1AGD///2qFv//71VWCP///awr///vVVb///7WFv//36rri///0ACACIv//9CpQP8AASnq///f/0v/AAJT1f//71VWCP8AAlXq///vVVb/AAZV4P//9NWr/wAKVdX///pWAAj/AApV1f//+lYA/wATKkD///0rAP8AG/6qiwgO+OH/AW8BIP8BDP6AFYv/ACVWVf///n+g/wAaAED///z/QP8ADqoqCP///P9A/wAOqir///oqQP8ACVWV///3VUD/AAQBAAj///dVQP8ABAEA///wACv/AAIAgP//6KsWiwj//+lV64v//++AC////NSL///1qiv///mpFgj///WqK///+asr///5KgD///UrFv///KnW///wqwAI///8q+v///CrAP///lX2///nqtaL///eqqsIi//+9f8gBf//XwBgiwWL/wH9/2AF/wCZAMCLBf8ABAEA///DAGAF/wAI/yCLBf8AGgBA/wAuARX/ADD/wP8AFwCK/wBH/0CLCP8AK1XAi/8AINU1///4fyv/ABZUqv//8P5WCP8AFlbA///xAGv/AA7V6v//6qqL/wAHVRX//+RUqwj/AAdVFf//5FbA/wADqor//9qAAIv//9CpQAiL//7BAYAF//9fAGCLBYv/AQz+gAUO+Nr/AQkAoP//Mf6AFf//4Ksri///31WA/wABVar//93/1v8AAqtVCP//3f/W/wACq1X//+SqFv8AAv+1///rVFb/AANUFQiL/wByAGAF/wA2q9X///6qVv8ALlV1////VSv/ACX/FYsI/wAtVkCL/wAff4r/AAJV6v8AEajV/wAEq9UI/wARqur/AASpwP8AC1UK/wAJVZX/AAT/Kv8ADgFqCP8ABQFA/wAN/1X/AAKAoP8AGKqVi/8AI1XVCIv/ACT/4AX///kBYIsF///x/pb//+gAQP//7VTW///vqsD//+irFv//91VACP//6KsW///3VUD//+Oq4P//+6qg///eqquLCP//1f/ri///3wAW/wAHqoD//+gAQP8AD1UACP//6ABA/wAPVQD//+5/y/8AGf81///0/1b/ACSpagj///T/Vv8AJKuA///6f6v/ADQAgIv/AENVgAiL/wBDVYD/AAWrCv8ANFTg/wALVhX/ACVUQAj/AAtWFf8AJVZV/wARqur/ABoq9f8AF//A/wAO/5UI/wAX/8D/AA8Bqv8AIKqA/wAHgNX/AClVQIsI/wAf/6qL/wAcf9X///r/y6T///X/lgik///1/5b/ABOAtf//7f+r/wAOAWr//+X/wAj/AAf+4IsF/wAEAQD/ADz/oAX/AJj9oIsFi//+O/+ABYv//7tW6///+tUW///MAIv///WqK///3KorCP//9axA///cqiv//+irFv//5So2///bqev//+2qQAj//9usAP//7apA///HKwv///bVIP//sqoWiwj/ABH+QP8BWAGgFf8AE1YAi/8ADqs1/wACKir/AAoAav8ABFRVCP8ACgBq/wAEVmr/AAdVFf8AB9ZA/wAEqcD/AAtWFQj/AASr1f8ACVOA/wAC/7X/AAt+tf8AAVOV/wANqeoI/wABVar/AA2sAP8AAKrV/wATK0qL/wAYqpUIi/8AF//A////VSv/ABLU1f///qpW/wANqeoI///+rGv/AA2sAP///QBL/wALK2D///tUK/8ACKrACP//+1ZA/wAMAOr///iq6/8ACFVV///1/5b/AASpwAj///X/lv8ABKnA///xVMv/AAJU4P//7KoAiwj//+aqlov//+5VFv///asg///1/5b///tWQAj///YBq///+1ZA///5VcD///WqK////KnW///v/hYI///8q+v///AAK////lX2///kAEuL///YAGsIi///2ABr/wABqgr//+QAS/8AA1QV///wACsI/wADVir///AAK/8ABqpA///1qiv/AAn+Vf//+1QrCP8ACgBq///7VkD/ABGq6v///asg/wAZVWqLCA74v/8B/P8g/wDXAKAV//7PAeCLBYv//+AAVv8AAn+V///pqkv/AAT/Kv//81RACP8ABP8q///zVlb/AAr/oP//96qr/wARABX///v/AAj/ABEAFf///AEW/wAegFX///4Ai/8ALACViwj/AC9Uqov/ADMAQP8AAqpK/wA2q9X/AAVUlQiL//+M/2AF///qqYD///qra///438g///7q6v//9xUwP///KvrCP//3FbW///8qdb//9zV6////lTr///dVQCLCP//sgFWi///xysL/wAIgAr//9xUwP8AEQAVCP//3FTA/wARABX//+kqK/8AGdSA///1/5b/ACKo6gj///X/lv8AIqsA///6/8v/ADUAwIv/AEdWgAiL/wBF/sD/AAUANf8ANKpK/wAKAGr/ACNV1Qj/AAoAav8AI1XV/wAV1ZX/ABqAYP8AIarA/wARquoI/wAhqsD/ABGq6v8ANNUA/wAI1XX/AEf/QIsI/wBIAVWL/wAz1cr///d/9v8AH6pA///u/+sI/wAfqkD//+7/6/8AE6pg///mqpb/AAeqgP//3lVACP8AB6qA///eVUD/AAPVQP//ydVWi///tVVrCIv//9j/oAX//xz/gP8Auf+gFf//6ABAi///7qqA///9qhb///VUwP//+1QrCP//9VbW///7VkD///kAVv//9tUg///8qdb///JUAAj///yr6///8lYW///+Vfb//+krNov//+AAVgj/AJn94IsFi/8AH/+q///9/4D/ABb/gP//+/8A/wAN/1UI///8ARb/AA4Bav//+QBW/wAJKuD///X/lv8ABFRVCP//9gGr/wAEVmr//++qwP8AAis1///pU9aLCA74LP8APP+g/wH9/2AV/wCZAMCLBf8ABAEA//+pACAF/wAI/yCLBf8ADKmq/wAjVdX/ABL/iv8AGKqV/wAZVWr/AA3/VQj/ABlVav8ADgFq/wAiACr/AAcAtf8AKqrqiwiL//9n/4AF///UqkCL///e1WD///rVFv//6QCA///1qisI///pAID///WqK///74AL///uKmD///X/lv//5qqWCP//9f+W///mqpb///r/y///3ABgi///0VYrCIv//0L/oAX//18AYIsFi/8B/f9gBQ742v8A0v+g///4ASAV///WqsCL///fgDb/AAeqgP//6FWr/wAPVQAI///oVav/AA9VAP//7n/L/wAaf1X///Sp6/8AJamqCP//9Knr/wAlq8D///pU9v8ANNYKi/8ARABVCIv/AESrKv8ABYBV/wA1VSD/AAsAqv8AJf8VCP8ACwCq/wAl/xX/ABFVgP8AGtTA/wAXqlX/AA+qagj/ABeqVf8AD6yA/wAgf8r/AAfWQP8AKVVAiwj/ACIAKov/ABx/1f//+9VW/wAW/4D///eqqwj/ABcBlf//96qr/wAS1eD//+/Vdv8ADqoq///oAEAI/wAH/uCLBYv/AR7/4AX/AKD/oIsFi//9GP6gBf//ZwJgiwX///v/AP8AO/9gBf//+AEgiwX///H+lv//5f/A///sqgD//+4qYP//51Vr///2VQAI///nVWv///ZXFv//4wAL///7K4v//96qq4sI/wBH/0D/AIf/oBX/ABSrqov/AA9VAP8AAn+V/wAJ/lX/AAT/Kgj/AAoAav8ABQFA/wAHViD/AAjVdf8ABKvV/wAMqaoI/wAD/ur/AAqrQP8AAn+V/wAMVUr/AAEAQP8ADf9VCP8AAQBA/wAN/1X/AACAIP8AEqsqi/8AF1cACIv/ACv+gP///VW2/wAd/yr///qra/8AD//VCP//+1Qr/wAOAWr///ip4P8ACYBK///1/5b/AAT/Kgj///YBq/8ABQFA///wVZb/AAKAoP//6qmAiwj//+aqlov//+5VFv///X9g///1/5b///r+wAj///YBq///+wDW///5VcD///VVy////KnW///vqsAI///8q+v//++qwP///lX2///jKsCL///WqsAIi///1f/r/wABqgr//+LVVv8AA1QV///vqsAI/wADVir//++qwP8ABqpA///1VMD/AAn+Vf//+v7ACP8ACgBq///7ANb/ABGq6v///YBr/wAZVWqLCA75Qf8ASP+A/wKwACAV/wDzAWCLBf8AZVWqi/8ASFSq///11OD/ACtTqv//66nACP8AK1XA///rq9b/ABsAgP//4ABW/wAKq0D//9RU1gj/AAqrQP//1FTW/wAFVaD//7d/lov//5qqVgiL//+arGv///qqYP//t4Cg///1VMD//9RU1gj///VUwP//1FTW///k/4D//9//S///1KpA///rqcAI///UrFb//+ur1v//t6tW///11ev//5qqVosI//8M/qCLBYv/ArAAIAX/AO8AYP/93QDAFf8AM1Wqi/8AIirg/wADKmr/ABEAFf8ABlTVCP8AEQAV/wAGVNX/AAqqNf8AD1UA/wAEVFX/ABhVKgj/AARWav8AGFUq/wACKzX/ADEqdYv/AEn/wAiL/wBJVwD///2qFv8AMQDK///7VCv/ABiqlQj///tWQP8AGKqV///1Kxb/AA9/tf//7v/r/wAGVNUI///u/+v/AAZU1f//3iqL/wADKmr//81VK4sI//+9/yCLBYv//moBoAX/AEIA4IsFDvjS/wITAYD/AAj/IBX//+lT1v//+1ZA///jfyD///wBFv//3apr///8q+sI///dqmv///yp1v//39Wg///+VOv//+IA1osI//+pVICL//+//6D/AAqqNf//1qrA/wAVVGoI///WqsD/ABVWgP//5Ksg/wAiqwD///KrgP8AL/+ACP//8quA/wAv/4D///lVwP8AR/9Ai/8AX/8ACIv/AF6rav8ABtT1/wBHVXX/AA2p6v8AL/+ACP8ADanq/wAwAZX/ABt/lf8AIwBq/wApVUD/ABX/QAj/AClVQP8AFf9A/wA/qvX/AAr/oP8AVgCqiwj/AB3/Kov/AB+qQP///io2/wAhVVX///xUawj/ACFVVf///FaA/wAbq1X///uA9v8AFgFV///6q2sIi///e/5ABf//u/+r/wAGrFX//9MANv8AA1Yq///qAMCLCP//yVQri///2lRA///71Vb//+tUVv//96qrCP//61Zr///3qqv///LWNv//7qqA///6VgD//+WqVgj///pWAP//5apW///9KwD//88p64v//7ipgAiL//+4q5b/AALVAP//zyr2/wAFqgD//+WqVgj/AAWqAP//5apW/wANKcr//+6qgP8AFKmV///3qqsI/wAUq6r///eqq/8AJavA///71Vb/ADar1YsI/wAxVSqL/wAuVXX/AANWKv8AK1XA/wAGrFUIi///ef3ABQ744f8BbwEg/wEM/oAVi/8AJVZV///+f6D/ABoAQP///P9A/wAOqioI///8/0D/AA6qKv//+ipA/wAJVZX///dVQP8ABAEACP//91VA/wAEAQD///AAK/8AAgCA///oqxaLCP//6VXri///74AL///81Iv///WqK///+akWCP//9aor///5qyv///kqAP//9SsW///8qdb///CrAAj///yr6///8KsA///+Vfb//+eq1ov//96qqwiL//71/yAF//9fAGCLBYv/AucBYAX/AKD/oIsFi//+2/7gBf8ACAIAiwX/AA3/Vf8AF//A/wATKkD/ABEqyv8AGFUq/wAKVdUI/wAYVSr/AApV1f8AHNVA/wAFKur/ACFVVYsI/wArVcCL/wAg1TX///h/K/8AFlSq///w/lYI/wAWVsD///EAa/8ADtXq///qqov/AAdVFf//5FSrCP8AB1UV///kVsD/AAOqiv//2oAAi///0KlACIv//sEBgAX//18AYIsFi/8BDP6ABQ73v/8AQABgixWL/wCT/4AF/wCq/wCLBYv//2wAgAX//1UBAIsFDvgo/wAW/4D/AIIBQBX/ADFVKv8AAKrV/wAhVVX/AAKqSv8AEVWA/wAEqcAI/wARVYD/AASpwP8ACtTq/wAKf4D/AARUVf8AEFVACP8ABFZq/wAQVUD/AAIrNf8AH9YAi/8AL1bACIv/Aab/gAX/AK3/wIsFi//+hv+ABYv//5NVQP//+n+r//+2VKD///T/Vv//2VQACP//9QFr///ZVhb//+cqtv//51Vr///ZVAD///VUwAj//9lWFv//9VbW//+2AED///qra///kqpriwiL/wCCAUAFDnub+DyZ926ZkZu5kwb7iIv4jJH3GosHe5v4NJf3bpedm7OVCPuGi/iGkvcXiwmvCvccCwAAAAAAAyAAAAKKAAACpwAAAsMAAAJBAAACZwAAAmwAAAE8AAACygAAArQAAAIfAAAA/AAAAq8AAAOBAAACewAAA80AAAKuAAACxgAAAkoAAAJGAAABHQAAAR0AAAHNAAACNAAAAZYAAAI6AAACTQAAAkYAAAIrAAABmAAAAkYAAAKtAAACPgAAAk0AAAErAAABlAAA)format("opentype");font-display:swap;font-display:swap}.ps05{fill:#000}.ps01,.ps03{fill:#2c5977}.ps04{fill:#46464d}.ps02,.ps06{fill:#fff}.ps00{fill:none}.ps20,.ps21,.ps22,.ps23{letter-spacing:0;word-spacing:0;font-family:fnt0;font-size:10px}.ps20,.ps21,.ps23{font-size:12px}.ps21,.ps23{font-size:36px}.ps21{font-family:fnt1;font-size:10px}'
    }
  </style>
  <clipPath id="clp1">
    <path d="M0 0h612v792H0z" />
  </clipPath>
  <g clipPath="url(#clp1)" transform="matrix(1 0 0 -1 0 792)">
    <g transform="scale(1.342)">
      <clipPath id="clp2">
        <path d="M0 0h459v590.1H0z" />
      </clipPath>
      <g clipPath="url(#clp2)">
        <g transform="matrix(.745 0 0 -.745 0 590.142)">
          <clipPath id="clp3">
            <path d="M0 0h616.11v791.95H0Z" />
          </clipPath>
          <g clipPath="url(#clp3)">
            <g className="ps00">
              <clipPath id="clp4">
                <path d="M34.999 75H368v1.001H34.999Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp4)">
                <path d="M34.999 75H368v1.001H34.999Z" className="ps01" />
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp5">
                <path d="M34.999 121H368v1H34.999Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp5)">
                <path d="M34.999 121H368v1H34.999Z" className="ps01" />
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp6">
                <path d="M34.999 260H368v1H34.999Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp6)">
                <path d="M34.999 260H368v1H34.999Z" className="ps01" />
              </g>
            </g>
            <g className="ps00">
              <path d="M388 0h224v791.95H388Z" className="ps01" />
            </g>
            <g className="ps00">
              <clipPath id="clp7">
                <path d="M388 0h224v791.95H388Z" />
              </clipPath>
            </g>
            <g className="ps00">
              <clipPath id="clp8">
                <path d="M388 152h189v1H388Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp8)">
                <path d="M388 152h189v1H388Z" className="ps02" />
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp9">
                <path d="M388 291h189v1H388Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp9)">
                <path d="M388 291h189v1H388Z" className="ps02" />
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp10">
                <path d="M388 385h189v1H388Z" />
              </clipPath>
              <g className="ps00" clipPath="url(#clp10)">
                <path d="M388 385h189v1H388Z" className="ps02" />
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp11">
                <path d="M30.002 100H205v27H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp11)">
                <text className="ps00" transform="translate(35 118)">
                  <tspan xmlSpace="preserve" className="ps03 ps20">
                    {"PROFESSIONAL\xA0SUMMARY"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp12">
                <path d="M30.002 127H335v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp12)">
                <text className="ps00" transform="translate(35 143.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "Technically-sound\xA0application\xA0engineer\xA0effective\xA0in\xA0analyzing"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp13">
                <path d="M30.002 142H364v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp13)">
                <text className="ps00" transform="translate(35 158.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "relevant\xA0information\xA0and\xA0guiding\xA0the\xA0product\xA0cycle\xA0from\xA0conception"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp14">
                <path d="M30.002 157H372v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp14)">
                <text className="ps00" transform="translate(35 173.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "to\xA0completion.\xA0Manages\xA0design\xA0effort\xA0and\xA0guides\xA0installation\xA0process"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp15">
                <path d="M30.002 172H374v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp15)">
                <text className="ps00" transform="translate(35 188.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "for\xA0on-schedule\xA0product\xA0launches.\xA0Consults\xA0with\xA0internal\xA0and\xA0external"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp16">
                <path d="M30.002 187H351v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp16)">
                <text className="ps00" transform="translate(35 203.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "clientele\xA0and\xA0employs\xA0additional\xA0system\xA0resources\xA0to\xA0review\xA0and"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp17">
                <path d="M30.002 202H312v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp17)">
                <text className="ps00" transform="translate(35 218.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "enhance\xA0configuration\xA0for\xA0optimal\xA0customer\xA0satisfaction."
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp18">
                <path d="M30.002 239H138v27H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp18)">
                <text className="ps00" transform="translate(35 257)">
                  <tspan xmlSpace="preserve" className="ps03 ps20">
                    {"WORK\xA0HISTORY"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp19">
                <path d="M30.002 266H143v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp19)">
                <text className="ps00" transform="translate(35 282.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps22">
                    {"Application\xA0Engineer"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp20">
                <path d="M131 266h14v25h-14Z" />
              </clipPath>
              <g clipPath="url(#clp20)">
                <text className="ps00" transform="translate(136.274 282.5)">
                  <tspan className="ps05 ps21">{","}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp21">
                <path d="M136 266h56v25h-56Z" />
              </clipPath>
              <g clipPath="url(#clp21)">
                <text className="ps00" transform="translate(141.25 282.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"08/2020"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp22">
                <path d="M180 266h19v25h-19Z" />
              </clipPath>
              <g clipPath="url(#clp22)">
                <text className="ps00" transform="translate(185.437 282.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"\xA0-\xA0"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp23">
                <path d="M189 266h47v25h-47Z" />
              </clipPath>
              <g clipPath="url(#clp23)">
                <text className="ps00" transform="translate(194.362 282.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"Current"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp24">
                <path d="M30.002 281H75v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp24)">
                <text className="ps00" transform="translate(35 297.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"Deluxe"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp25">
                <path d="M62.998 281h15.001v25H62.998Z" />
              </clipPath>
              <g clipPath="url(#clp25)">
                <text className="ps00" transform="translate(68.187 297.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {",\xA0"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp26">
                <path d="M68 281h47v25H68Z" />
              </clipPath>
              <g clipPath="url(#clp26)">
                <text className="ps00" transform="translate(73.162 297.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"Atlanta"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp27">
                <path d="M103 281h15v25h-15Z" />
              </clipPath>
              <g clipPath="url(#clp27)">
                <text className="ps00" transform="translate(108.4 297.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {",\xA0"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp28">
                <path d="M108 281h26v25h-26Z" />
              </clipPath>
              <g clipPath="url(#clp28)">
                <text className="ps00" transform="translate(113.375 297.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"GA"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp29">
                <path d="M30.002 413H143v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp29)">
                <text className="ps00" transform="translate(35 429.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps22">
                    {"Application\xA0Engineer"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp30">
                <path d="M131 413h14v25h-14Z" />
              </clipPath>
              <g clipPath="url(#clp30)">
                <text className="ps00" transform="translate(136.274 429.5)">
                  <tspan className="ps05 ps21">{","}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp31">
                <path d="M136 413h55v25h-55Z" />
              </clipPath>
              <g clipPath="url(#clp31)">
                <text className="ps00" transform="translate(141.25 429.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"03/2020"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp32">
                <path d="M179 413h19v25h-19Z" />
              </clipPath>
              <g clipPath="url(#clp32)">
                <text className="ps00" transform="translate(184.637 429.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"\xA0-\xA0"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp33">
                <path d="M188 413h56v25h-56Z" />
              </clipPath>
              <g clipPath="url(#clp33)">
                <text className="ps00" transform="translate(193.562 429.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"08/2020"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp34">
                <path d="M30.002 428h57v25h-57Z" />
              </clipPath>
              <g clipPath="url(#clp34)">
                <text className="ps00" transform="translate(35 444.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"Tech\xA0USA"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp35">
                <path d="M75 428h15.001v25H75Z" />
              </clipPath>
              <g clipPath="url(#clp35)">
                <text className="ps00" transform="translate(80.875 444.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {",\xA0"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp36">
                <path d="M80.002 428H128v25H80.002Z" />
              </clipPath>
              <g clipPath="url(#clp36)">
                <text className="ps00" transform="translate(85.85 444.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"Atlanta"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp37">
                <path d="M116 428h15v25h-15Z" />
              </clipPath>
              <g clipPath="url(#clp37)">
                <text className="ps00" transform="translate(121.087 444.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {",\xA0"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp38">
                <path d="M121 428h26v25h-26Z" />
              </clipPath>
              <g clipPath="url(#clp38)">
                <text className="ps00" transform="translate(126.062 444.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"GA"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp39">
                <path d="M30.002 590H169v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp39)">
                <text className="ps00" transform="translate(35 606.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps22">
                    {"Field\xA0Application\xA0Engineer"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp40">
                <path d="M157 590h15v25h-15Z" />
              </clipPath>
              <g clipPath="url(#clp40)">
                <text className="ps00" transform="translate(162.85 606.5)">
                  <tspan className="ps05 ps21">{","}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp41">
                <path d="M162 590h53v25h-53Z" />
              </clipPath>
              <g clipPath="url(#clp41)">
                <text className="ps00" transform="translate(167.825 606.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"06/2012"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp42">
                <path d="M203 590h19v25h-19Z" />
              </clipPath>
              <g clipPath="url(#clp42)">
                <text className="ps00" transform="translate(208.812 606.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"\xA0-\xA0"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp43">
                <path d="M212 590h56v25h-56Z" />
              </clipPath>
              <g clipPath="url(#clp43)">
                <text className="ps00" transform="translate(217.737 606.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"05/2020"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp44">
                <path d="M30.002 605h48.999v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp44)">
                <text className="ps00" transform="translate(35 621.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"Aerotek"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp45">
                <path d="M66.999 605H82v25H66.999Z" />
              </clipPath>
              <g clipPath="url(#clp45)">
                <text className="ps00" transform="translate(72.7 621.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {",\xA0"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp46">
                <path d="M72.001 605H119v25H72.001Z" />
              </clipPath>
              <g clipPath="url(#clp46)">
                <text className="ps00" transform="translate(77.675 621.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"Atlanta"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp47">
                <path d="M107 605h15v25h-15Z" />
              </clipPath>
              <g clipPath="url(#clp47)">
                <text className="ps00" transform="translate(112.912 621.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {",\xA0"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp48">
                <path d="M112 605h50v25h-50Z" />
              </clipPath>
              <g clipPath="url(#clp48)">
                <text className="ps00" transform="translate(117.887 621.5)">
                  <tspan xmlSpace="preserve" className="ps05 ps21">
                    {"Georgia"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp49">
                <path d="M431 37.002h95V61h-95Z" />
              </clipPath>
              <g clipPath="url(#clp49)">
                <text className="ps00" transform="translate(436 53)">
                  <tspan xmlSpace="preserve" className="ps06 ps21">
                    {"Atlanta,\xA0GA\xA030301"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp50">
                <path d="M431 65.001h86V89h-86Z" />
              </clipPath>
              <g clipPath="url(#clp50)">
                <text className="ps00" transform="translate(436 81)">
                  <tspan
                    xmlSpace="preserve"
                    x="0,3.08,9.28,15.48,21.68,24.76,27.11,33.31,39.51,45.71,49.33,55.53,61.73"
                    className="ps06 ps21"
                  >
                    {"(555) 555-5555"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp51">
                <path d="M431 93h121v24H431Z" />
              </clipPath>
              <g clipPath="url(#clp51)">
                <text className="ps00" transform="translate(436 109)">
                  <tspan xmlSpace="preserve" className="ps06 ps21">
                    {"example@example.com"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp52">
                <path d="M403 131h54v27h-54Z" />
              </clipPath>
              <g clipPath="url(#clp52)">
                <text className="ps00" transform="translate(408 149)">
                  <tspan xmlSpace="preserve" className="ps06 ps20">
                    {"SKILLS"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp53">
                <path d="M403 270h82v27h-82Z" />
              </clipPath>
              <g clipPath="url(#clp53)">
                <text className="ps00" transform="translate(408 288)">
                  <tspan xmlSpace="preserve" className="ps06 ps20">
                    {"EDUCATION"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp54">
                <path d="M403 297h37v25h-37Z" />
              </clipPath>
              <g clipPath="url(#clp54)">
                <text className="ps00" transform="translate(408 313.5)">
                  <tspan x="0,6.5,12.39,15.38,22.23" className="ps06 ps22">
                    {"Ph.D."}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp55">
                <path d="M403 312h135v25H403Z" />
              </clipPath>
              <g clipPath="url(#clp55)">
                <text className="ps00" transform="translate(408 328.5)">
                  <tspan xmlSpace="preserve" className="ps06 ps21">
                    {"Massachusetts\xA0Institute\xA0Of"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp56">
                <path d="M403 327h65v25h-65Z" />
              </clipPath>
              <g clipPath="url(#clp56)">
                <text className="ps00" transform="translate(408 343.5)">
                  <tspan xmlSpace="preserve" className="ps06 ps21">
                    {"Technology"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp57">
                <path d="M456 327h18v25h-18Z" />
              </clipPath>
              <g clipPath="url(#clp57)">
                <text className="ps00" transform="translate(461.687 343.5)">
                  <tspan xmlSpace="preserve" x="0,2.35" className="ps06 ps21">
                    {"\xA0-"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp58">
                <path d="M465 327h61v25h-61Z" />
              </clipPath>
              <g clipPath="url(#clp58)">
                <text className="ps00" transform="translate(470.012 343.5)">
                  <tspan
                    x="0,5.75,11.45,20.28,26.19,29.86,32.4,38.31,44.22"
                    className="ps06 ps21"
                  >
                    {"Cambridge"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp59">
                <path d="M514 327h15v25h-15Z" />
              </clipPath>
              <g clipPath="url(#clp59)">
                <text className="ps00" transform="translate(519.837 343.5)">
                  <tspan xmlSpace="preserve" className="ps06 ps21">
                    {",\xA0"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp60">
                <path d="M519 327h28v25h-28Z" />
              </clipPath>
              <g clipPath="url(#clp60)">
                <text className="ps00" transform="translate(524.412 343.5)">
                  <tspan xmlSpace="preserve" className="ps06 ps21">
                    {"MA"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp61">
                <path d="M403 364h97v27h-97Z" />
              </clipPath>
              <g clipPath="url(#clp61)">
                <text className="ps00" transform="translate(408 382)">
                  <tspan xmlSpace="preserve" className="ps06 ps20">
                    {"AFFILIATIONS"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp62">
                <path d="M30.002 15.001H162v65.001H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp62)">
                <text className="ps00" transform="translate(35 60)">
                  <tspan xmlSpace="preserve" className="ps03 ps23">
                    {info.basicInfo?.detail?.name}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp63">
                <path d="M160 15.001h124v65.001H160Z" />
              </clipPath>
              <g clipPath="url(#clp63)">
                <text className="ps00" transform="translate(165.687 60)">
                  <tspan xmlSpace="preserve" className="ps03 ps23">
                    
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp64">
                <path d="M37.998 301H325v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp64)">
                <text className="ps00" transform="translate(43 317.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "Demonstrate\xA0proposed\xA0design\xA0solutions\xA0by\xA0preparing\xA0and"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp65">
                <path d="M37.998 316H264v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp65)">
                <text className="ps00" transform="translate(43 332.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "presenting\xA0CAD\xA0layouts\xA0for\xA0system\xA0concepts."
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp66">
                <path d="M30.002 301h15.001v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp66)">
                <text className="ps00" transform="translate(35 317.5)">
                  <tspan className="ps04 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp67">
                <path d="M37.998 334H364v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp67)">
                <text className="ps00" transform="translate(43 350.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "Work\xA0with\xA0the\xA0Special\xA0Projects\xA0team\xA0and\xA0two\xA0external\xA0suppliers\xA0to"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp68">
                <path d="M37.998 349H304v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp68)">
                <text className="ps00" transform="translate(43 365.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "prepare\xA0design\xA0specifications\xA0following\xA0project\xA0goals."
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp69">
                <path d="M30.002 334h15.001v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp69)">
                <text className="ps00" transform="translate(35 350.5)">
                  <tspan className="ps04 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp70">
                <path d="M37.998 367H359v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp70)">
                <text className="ps00" transform="translate(43 383.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "Generate\xA0RFQ\xA0cost\xA0estimates,\xA0including\xA0peripheral\xA0equipment,\xA0FL"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp71">
                <path d="M37.998 382H225v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp71)">
                <text className="ps00" transform="translate(43 398.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {"materials,\xA0assembly\xA0labor,\xA0and\xA0more."}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp72">
                <path d="M30.002 367h15.001v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp72)">
                <text className="ps00" transform="translate(35 383.5)">
                  <tspan className="ps04 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp73">
                <path d="M37.998 448H338v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp73)">
                <text className="ps00" transform="translate(43 464.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "Analyzed,\xA0designed,\xA0developed,\xA0and\xA0tested\xA0robotics\xA0systems"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp74">
                <path d="M37.998 463H307v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp74)">
                <text className="ps00" transform="translate(43 479.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "according\xA0to\xA0CAD\xA0drawings,\xA0written\xA0instructions,\xA0other"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp75">
                <path d="M37.998 478H118v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp75)">
                <text className="ps00" transform="translate(43 494.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {"specifications."}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp76">
                <path d="M30.002 448h15.001v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp76)">
                <text className="ps00" transform="translate(35 464.5)">
                  <tspan className="ps04 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp77">
                <path d="M37.998 496H363v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp77)">
                <text className="ps00" transform="translate(43 512.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "Created\xA0written\xA0proposals\xA0outlining\xA0the\xA0precise\xA0scope\xA0of\xA0work\xA0and"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp78">
                <path d="M37.998 511H354v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp78)">
                <text className="ps00" transform="translate(43 527.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "proposed\xA0engineering\xA0solutions,\xA0specific\xA0deliverables,\xA0operation"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp79">
                <path d="M37.998 526H110v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp79)">
                <text className="ps00" transform="translate(43 542.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {"descriptions."}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp80">
                <path d="M30.002 496h15.001v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp80)">
                <text className="ps00" transform="translate(35 512.5)">
                  <tspan className="ps04 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp81">
                <path d="M37.998 544H319v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp81)">
                <text className="ps00" transform="translate(43 560.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "Consulted\xA0with\xA0and\xA0later\xA0supervised\xA0a\xA0larger\xA025-member"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp82">
                <path d="M37.998 559H346v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp82)">
                <text className="ps00" transform="translate(43 575.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "engineering\xA0team\xA0to\xA0ensure\xA0I\xA0met\xA0the\xA0specified\xA0design\xA0criteria."
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp83">
                <path d="M30.002 544h15.001v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp83)">
                <text className="ps00" transform="translate(35 560.5)">
                  <tspan className="ps04 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp84">
                <path d="M37.998 625H331v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp84)">
                <text className="ps00" transform="translate(43 641.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "Fabricated,\xA0assembled,\xA0and\xA0tested\xA0mechanical\xA0components"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp85">
                <path d="M37.998 640H358v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp85)">
                <text className="ps00" transform="translate(43 656.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "exclusively\xA0for\xA0use\xA0in\xA0outdoor\xA0environments;\xA0presented\xA0modified"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp86">
                <path d="M37.998 655H221v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp86)">
                <text className="ps00" transform="translate(43 671.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {"CAD\xA0specs\xA0to\xA0mechanical\xA0engineers."}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp87">
                <path d="M30.002 625h15.001v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp87)">
                <text className="ps00" transform="translate(35 641.5)">
                  <tspan className="ps04 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp88">
                <path d="M37.998 673H345v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp88)">
                <text className="ps00" transform="translate(43 689.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "Answered\xA0client\xA0and\xA0customer\xA0questions\xA0via\xA0phone\xA0and\xA0email;"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp89">
                <path d="M37.998 688H324v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp89)">
                <text className="ps00" transform="translate(43 704.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "made\xA0in-person\xA0service\xA0calls\xA0providing\xA0further\xA0assistance."
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp90">
                <path d="M30.002 673h15.001v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp90)">
                <text className="ps00" transform="translate(35 689.5)">
                  <tspan className="ps04 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp91">
                <path d="M37.998 706H369v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp91)">
                <text className="ps00" transform="translate(43 722.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {
                      "Reported\xA0on-site\xA0for\xA0final\xA0product\xA0delivery,\xA0assisted\xA0with\xA0unboxing,"
                    }
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp92">
                <path d="M37.998 721H218v25H37.998Z" />
              </clipPath>
              <g clipPath="url(#clp92)">
                <text className="ps00" transform="translate(43 737.5)">
                  <tspan xmlSpace="preserve" className="ps04 ps21">
                    {"setup,\xA0preliminary\xA0troubleshooting."}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp93">
                <path d="M30.002 706h15.001v25H30.002Z" />
              </clipPath>
              <g clipPath="url(#clp93)">
                <text className="ps00" transform="translate(35 722.5)">
                  <tspan className="ps04 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp94">
                <path d="M411 158h119v25H411Z" />
              </clipPath>
              <g clipPath="url(#clp94)">
                <text className="ps00" transform="translate(416 174.5)">
                  <tspan xmlSpace="preserve" className="ps06 ps21">
                    {"Solutions\xA0Development"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp95">
                <path d="M403 158h15v25h-15Z" />
              </clipPath>
              <g clipPath="url(#clp95)">
                <text className="ps00" transform="translate(408 174.5)">
                  <tspan className="ps06 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp96">
                <path d="M411 173h134v25H411Z" />
              </clipPath>
              <g clipPath="url(#clp96)">
                <text className="ps00" transform="translate(416 189.5)">
                  <tspan xmlSpace="preserve" x="0,6.64" className="ps06 ps21">
                    {"Virtualization technologies"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp97">
                <path d="M403 173h15v25h-15Z" />
              </clipPath>
              <g clipPath="url(#clp97)">
                <text className="ps00" transform="translate(408 189.5)">
                  <tspan className="ps06 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp98">
                <path d="M411 188h112v25H411Z" />
              </clipPath>
              <g clipPath="url(#clp98)">
                <text className="ps00" transform="translate(416 204.5)">
                  <tspan xmlSpace="preserve" className="ps06 ps21">
                    {"Software\xA0applications"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp99">
                <path d="M403 188h15v25h-15Z" />
              </clipPath>
              <g clipPath="url(#clp99)">
                <text className="ps00" transform="translate(408 204.5)">
                  <tspan className="ps06 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp100">
                <path d="M411 203h119v25H411Z" />
              </clipPath>
              <g clipPath="url(#clp100)">
                <text className="ps00" transform="translate(416 219.5)">
                  <tspan xmlSpace="preserve" className="ps06 ps21">
                    {"Database\xA0configuration"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp101">
                <path d="M403 203h15v25h-15Z" />
              </clipPath>
              <g clipPath="url(#clp101)">
                <text className="ps00" transform="translate(408 219.5)">
                  <tspan className="ps06 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp102">
                <path d="M411 218h101v25H411Z" />
              </clipPath>
              <g clipPath="url(#clp102)">
                <text className="ps00" transform="translate(416 234.5)">
                  <tspan xmlSpace="preserve" className="ps06 ps21">
                    {"Software\xA0platforms"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp103">
                <path d="M403 218h15v25h-15Z" />
              </clipPath>
              <g clipPath="url(#clp103)">
                <text className="ps00" transform="translate(408 234.5)">
                  <tspan className="ps06 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp104">
                <path d="M411 233h97v25h-97Z" />
              </clipPath>
              <g clipPath="url(#clp104)">
                <text className="ps00" transform="translate(416 249.5)">
                  <tspan
                    x="0,6.29,12.06,14.6,20.59,24.18,26.72,32.49,38.48,40.83,49.66,55.43,60.03,65.4,69.02,75.01,80.92"
                    className="ps06 ps21"
                  >
                    {"Solution mock-ups"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp105">
                <path d="M403 233h15v25h-15Z" />
              </clipPath>
              <g clipPath="url(#clp105)">
                <text className="ps00" transform="translate(408 249.5)">
                  <tspan className="ps06 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp106">
                <path d="M411 391h125v25H411Z" />
              </clipPath>
              <g clipPath="url(#clp106)">
                <text className="ps00" transform="translate(416 407.5)">
                  <tspan
                    xmlSpace="preserve"
                    x="0,6.84,15.67"
                    className="ps06 ps21"
                  >
                    {"American Society of\xA0Civil"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp107">
                <path d="M411 406h91v25h-91Z" />
              </clipPath>
              <g clipPath="url(#clp107)">
                <text className="ps00" transform="translate(416 422.5)">
                  <tspan xmlSpace="preserve" className="ps06 ps21">
                    {"Engineers\xA0(ASCE)"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp108">
                <path d="M403 391h15v25h-15Z" />
              </clipPath>
              <g clipPath="url(#clp108)">
                <text className="ps00" transform="translate(408 407.5)">
                  <tspan className="ps06 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp109">
                <path d="M411 421h133v25H411Z" />
              </clipPath>
              <g clipPath="url(#clp109)">
                <text className="ps00" transform="translate(416 437.5)">
                  <tspan xmlSpace="preserve" className="ps06 ps21">
                    {"Association of\xA0Information"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp110">
                <path d="M411 436h130v25H411Z" />
              </clipPath>
              <g clipPath="url(#clp110)">
                <text className="ps00" transform="translate(416 452.5)">
                  <tspan xmlSpace="preserve" className="ps06 ps21">
                    {"Technology\xA0Professionals"}
                  </tspan>
                </text>
              </g>
            </g>
            <g className="ps00">
              <clipPath id="clp111">
                <path d="M403 421h15v25h-15Z" />
              </clipPath>
              <g clipPath="url(#clp111)">
                <text className="ps00" transform="translate(408 437.5)">
                  <tspan className="ps06 ps21">{"\u2022"}</tspan>
                </text>
              </g>
            </g>
          </g>
        </g>
        <g transform="matrix(1 0 0 -1 0 590.142)">
          <clipPath id="clp112">
            <path d="M304 30h13v13h-13Z" />
          </clipPath>
          <g className="ps00" clipPath="url(#clp112)">
            <path
              d="M317 36.496a6.345 6.345 0 1 1-12.689 0 6.345 6.345 0 0 1 12.69 0"
              className="ps02"
            />
          </g>
        </g>
        <g transform="matrix(1 0 0 -1 0 590.142)">
          <clipPath id="clp113">
            <path d="M304 30h13v13h-13Z" />
          </clipPath>
          <g className="ps00" clipPath="url(#clp113)">
            <path
              d="M310.449 36.57c-.636 0-1.198-.492-1.198-1.128 0-.632.492-1.127 1.128-1.127.636 0 1.127.495 1.127 1.127 0 .636-.42 1.128-1.057 1.128m0-3.594c-1.479 0-2.607 1.128-2.607 2.606 0 .566.422 1.624 1.198 2.962a16.203 16.203 0 0 0 1.199 1.904l.21.282.14-.211s.637-.917 1.199-1.904c.776-1.409 1.197-2.396 1.197-2.962 0-1.549-1.128-2.677-2.536-2.677"
              className="ps01"
            />
          </g>
        </g>
        <g transform="matrix(1 0 0 -1 0 590.142)">
          <clipPath id="clp114">
            <path d="M304 51h13v13h-13Z" />
          </clipPath>
          <g clipPath="url(#clp114)">
            <g className="ps00">
              <path
                d="M317 57.355a6.345 6.345 0 1 1-12.688 0 6.343 6.343 0 0 1 6.344-6.344A6.344 6.344 0 0 1 317 57.355"
                className="ps02"
              />
            </g>
            <g className="ps00">
              <path
                d="M313.79 59.294c-.051.258-.13.464-.243.636-.12.184-.28.324-.48.437-.277.153-.577.23-.901.23-.242 0-.496-.043-.761-.128-.534-.176-1.046-.5-1.432-.765a5.062 5.062 0 0 1-1.05-.972 5.038 5.038 0 0 1-.827-1.166c-.21-.418-.464-.972-.566-1.522-.116-.64-.012-1.19.316-1.635.137-.184.3-.32.496-.418.187-.09.402-.14.663-.159a.464.464 0 0 1 .473.288c.097.203.195.414.292.613l.21.44c.047.099.083.192.114.285.055.188.004.34-.156.469-.21.164-.414.327-.61.492l-.034.03.024.06c.198.49.44.893.737 1.224l.003.008c.297.34.664.633 1.12.893a.383.383 0 0 0 .06.028 18.145 18.145 0 0 0 .6-.565c.149-.145.304-.176.484-.094.09.043.18.09.265.148.137.09.277.18.41.27.187.12.378.245.57.366a.456.456 0 0 1 .222.507"
                className="ps01"
              />
            </g>
          </g>
        </g>
        <g transform="matrix(1 0 0 -1 0 590.142)">
          <clipPath id="clp115">
            <path d="M304 72h13v13h-13Z" />
          </clipPath>
          <g clipPath="url(#clp115)">
            <g className="ps00">
              <path
                d="M317 78.218a6.344 6.344 0 0 1-12.688 0 6.347 6.347 0 0 1 6.344-6.347A6.347 6.347 0 0 1 317 78.218"
                className="ps02"
              />
            </g>
            <g className="ps00">
              <path
                d="M307.164 76.388v3.91l1.95-1.955Zm3.547 2.865 3.149-3.15h-6.408l3.15 3.15a.083.083 0 0 0 .109 0Zm.09.491a.216.216 0 0 1-.145.059.2.2 0 0 1-.14-.059l-1.112-1.112-1.94 1.943h6.388l-1.944-1.943Zm3.351-3.356v3.907l-1.955-1.952Z"
                className="ps01"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>
case "templatefour": 
return  <svg ref={ref}
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
xmlSpace="preserve"
width={612}
height={792}
{...props}
>
<style>
  {
    '@font-face{font-family:fnt3;src:url(data:font/otf;base64,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yqr3SosI90CL/wB7VVX//+MERf8ASqqq///GCIkI+2b//5DMzRV5/wAcoiL//8NVVv8ADlER//+YqquLCP//lqqri///o1VW///IERI7//+QIiMIO///kCZnY///dCzNi///WDM0CIv//3Iu7/8AP1VV//+5F3j/AH6qqosIzYvJ/wAiIADF/wBEQAAIxf8AREAA/wAoVVX/AFdkRP8AFqqq/wBqiIgI3v8BiIAABQ755/nX/wNzMzMVY6v//9FVVpv//8qqq4sI//+8qquL//+/qqv//+DTNP//wqqr///BpmcI///Cqqv//8GmZ///2aqr//+1e7z///Cqq///qVESCPsB//2Z4AAF+1KLBfdR/wQuZmYF91KLBW3//1XGZwXn/wB/WZn/AHJVVf8AP6zM/wCIqqqLCP8AF1VVi/8AJFVV///7VVb/ADFVVf//9qqrCFX7VgUOHAR095f/ADV5mRU3//4g7M0F+1KLBfdm/wSYzMwF/wAJVVX/ADNd3f8ABKqq/wAyXd2L/wAxXd0Ii/8AMrMzhv8AMV3dgf8AMAiICPdTrwX/AANVVf//91VWkf//0kqr/wAIqqr//61AAAj/AB9VVf8AJrMzuP8AIIZm/wA6qqr/ABpZmQj/ADqqqv8AGl3d/wA2qqr/AA0u7v8AMqqqiwj/AIVVVYv/AGPVVf//3vd4/wBCVVX//73u7wj/AEJVVf//vfM0/wAhKqr//5yVVov//3s3eAiL//81Jmf//8fVVv//VizN//+Pqqv//3czNAj//4+qq///dzd4//9sgAD//7ubvP//SVVWiwj//9iqq4v//9LVVv8AB6zMWP8AD1mZCFj/AA9Zmf//4Cqr/wASru7///NVVv8AFgRECKf/AJ0GZhWX///qoiP/ABhVVf//7fma/wAkqqr///FREgj/ACSqqv//8VES/wAiVVX///ioiauLCP8Ai1VVi/8Aa4AA/wAvOZn/AEuqqv8AXnMzCP8AS6qq/wBeczP/ACXVVfcVi/8Ao4zMCIv/AFgZmf//6dVW/wBB6Ij//9Oqq/8AK7d3CP//06qr/wAru7v//72AAP8AFd3d//+nVVaLCP//2VVWi///0yqr///ye7xY///k93gIWP//5Pd4///b1Vb//+PMzf//6qqr///ioiMIJP/9sUAABQ763/fL/wH7MzMVhWuI///hIiOL///iREUIi///qBES/wAYqqr//7xiI/8AMVVV///QszQI/wAxVVX//9CzNND//+hZmv8AWKqqiwj/AE6qqov/AE9VVajbxQh3+1YF//+VVVb//9yqq///oaqr///uVVY5iwj7qIv7Hv8AmpmZi/8BNTMzCIv/ALXiIsX/AJk7u/cI/wB8lVUI9wj/AHyZmfcm/wA+TMz3RIsI9Yv/AFSqqv//6V3e/wA/VVX//9K7vAj/AD9VVf//0sAA/wAfqqr//79u74v//6wd3giL//+LhEX//86qq///pCRF//+dVVb//7zERQj//51VVv//vMiJ+w3//95kRf//cKqriwgrizqdSa8IrPceFf8AMqqq///pVVb/ADuqqv//9Kqr/wBEqqqLCPOL4P8AEMZmzf8AIYzMCM3/ACGREaz/ADEERIv/AEB3dwiL/wBRwAD//8dVVv8AKOAA//+OqquLCP//U1VWi///hwAA//+gqqv//7qqq///QVVWCA768vlsixX3BP8CbyAABZX/ADdZmZD/AC4ERIv/ACSu7giL/wBxWZlQ/wA4rMz7CosI///SqquL///PgAD///Koif//zFVW///lURII///MVVb//+VVVv//1tVW///gVVb//+FVVv//21VWCPsf//zj0zQF+1SLBfck/wMsJmYF/wADVVX/ABKqqv8AAaqq/wAWAiKL/wAZWZkIi8+E/wA7AiJ9/wAyBEQI90yvBZ3//56mZ/8ACKqq///K/d7///9VVv//91VWCP8AUVVV/wBqBET/AHVVVf8ANQIi/wCZVVWLCP8AwVVVi/8AYKqq//+dURKL//86oiMIi///2KZn///7qqv//9P93v//91VW///PVVYI+wf//WjgAAX7XosFDvnu99X/A5hmZhX7EIsFq/cqBfcQiwW3/wDfmZkF923dBUT//s5mZwX3uosFa/sqBfu6iwX7BP/97PM0Bf//91VW///WwAD///uqq///4A7vi///6V3eCIv//5ou7/8AMqqq///NF3j/AGVVVYsI/wAxVVWLwP8ADFVV/wA4qqr/ABiqqgiE+zsF///JVVZ3//+nqqv///YAAPsOiwg/i///xNVW/wAXd3f//9Wqq/8ALu7uCP//1aqr/wAu7u7//+rVVv8AQGZmi/8AUd3dCIv/ABKmZo7/ABb3d5H/ABtIiAj3FP8CXxmZBQ74/A76xfhi//7rMzQVi/8GkZmZBfcmiwWL//luZmcF+yaLBQ76xc//AaCgABWL/wFAiIj/ADkqqv8BAzmZ/wByVVX/AMXqqgj/AHJVVf8Axe7u/wChKqr/AGL3d/dkiwj/APVVVYv/AHqqqv//dA7vi//+6B3eCIv//qt3eP//yFVW//71GZr//5Cqq///Pru8CP//kKqr//8+wAD//1+qq///n2AA//8uqquLCPsMi///o4AA/wAmURFK/wBMoiIISv8ATKIi///fgAD/AGr1VYv/AIlIiAj3XP8AJQZmFYv//zYZmv8AP6qq//+bDM3/AH9VVYsI/wCJVVWL/wBqKqr/AFbIiNb/AK2REQjW/wCtlVX/ACWAAP8A1bu7i/8A/eIiCIv/ALM7u0j/AFmd3fsaiwj//4FVVov//5oqq///o+AAPv//R8AACD7//0fERf//2YAA//868RKL//8uHd4IDvrFuv8Aa8zMFeb3OgX/ABlVVWmwbv8AMKqqcwj/ADCqqnO7f/8AL1VViwj/AGKqqov/AE/VVf8AHgIiyP8APARECMj/ADwIiP8AHoAA/wBPXd2L/wBiszMIi/8AlLd3//+mqqv/AEpbu///TVVWiwin9zYF92KL8v8AWYIii/8AswRECIv/ADvmZnn/AC5qqmf/ACDu7ghn/wAg8zNZ/wAQeZlLiwj//7NVVov//75VVnT//8lVVl0IMfcKBdf/AFCqqv8Abqqq/wAoVVX/AJFVVYsI9wKL5f//4l3e0f//xLu8CNH//8S7vK7//68XeIv//5lzNAiL//+tbu///+RVVv//s+qr///Iqqv//7pmZwj//8iqq///umqr//+6VVb//885mjf//+QIiQj3JP//zqZn0///nE7vi///afd4CIv//1Sd3v//0dVW//+A93j//6Oqq///rVESCP//o6qr//+tURL//28qq///1qiJ//86qquLCP//eqqri///l6qr/wAqVVX//7Sqq/8AVKqqCA76xffyixX7NYsF+Kf/Bb5mZgX3M4sF/KX/+kGZmgUO+sXKixWL5QX4d/j+Bf8AX1VV/wB6qqrL5v8AIKqq/wA7VVUI/wAgqqr/ADtVVf8AEFVV/wA5qqqLwwiL/wAzVVX//+qqq/8AKCqq///VVVaoCP//1VVWqFb/AA6AAP//wKqriwgviz//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)format("opentype");font-display:swap;font-display:swap}@font-face{font-family:fnt0;src:url(data:font/otf;base64,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y9mabP//vyZn///4qqv//7JzNAj45YsFi/8ATOIic/8AQC7uW/8AM3u7CP//y1VW/wA4Kqr//7hVVv8AHBVV//+lVVaLCA76lPmnixX7uP8BhcZmBfuZ//56OZoF+3KLBfgZ/wIjszMF+/n/AgqzMwX3aosF94T//pAzNAX3of8Bb8zMBfdmiwX8Gf/99UzNBfg+//3cTM0F+3eLBQ76x/l4/wB6QAAVP///oKIj//+Lqqv//9BREv//Y1VWiwg3i///tyqr/wAegiL//8JVVv8APQRECP//wlVW/wA9BET//+Eqq/8AS9u7i/8AWrMzCIv/AGyu7v8AL4AA/wBb2Znq/wBLBEQI6v8ASwiI/wB5Kqr/ACWERP8Ak1VViwizi/8ALVVV///3VVb/ADKqqv//7qqrCIv/AK3d3f//sqqr/wBW7u7//2VVVosI//+JVVaL//+kqqtrS0sIO/czBa//AB1VVf8AMdVV/wAZKqr/AD+qqqAI/wA/qqqg/wA81VX/AAqAAMWLCP8Am1VVi/8AcNVV///coiP/AEZVVf//uURFCP8ARlVV//+5REX/ACMqqv//j47vi///ZdmaCIv//n+ZmgWL//+h6qun///BRmfD///goiMIi///oZmaBf//sqqri///xiqr/wAK9VX//9mqq/8AFeqqCP//2aqr/wAV6qr//+SAAP8AJDER///vVVb/ADJ3dwh5/wGS8zMVT/8ADVVVYf8ABqqqc4sIK4v//7Gqq///51VW///DVVb//86qqwj//8NVVv//zqqr///hqqv//8Wqq4v//7yqqwiL//+Qqqv/AEGqqv//yFVW/wCDVVWLCOuL4P8ALaqq1f8AW1VVCIv/AQMAAAUOHAajHAVfixWL/wKmJmYFi/8AqLMzQv8AVFmZ+yaLCF2LYP//8dM0Y///46ZnCGP//+Oqq///5Kqr///f1Vb///FVVmcIi//859M0BftSiwWL/wL5LMwFi/8ANKqq///sKqv/ACmAAP//2FVW/wAeVVUI///YVVb/AB5Zmf//y4AA/wAPLMz//76qq4sIZYv//9eAAP//8VM0YP//4qZnCGD//+Kqq///4YAA///fqqt5///cqqsIi//86dM0BftSiwWL/wQuZmYF9xCLBcr//4TGZwX/AElVVf8AYARE/wBbqqr/ADACIvcCiwj/AJlVVYv/AGtVVf//0FM0/wA9VVX//6CmZwj/ABVVVf8AKKqq/wAnqqqtxf8AG1VVCMX/ABtZmf8AO6qq/wANrMz/AD1VVYsI/wBuqqqL/wBVqqr//98oif8APKqq//++URII/wA8qqr//75VVv8AHlVV//+j0RKL//+JTM0Ii//9M+AABftSiwUOHAR099n/ADpGZhWL//4g7M0F+1KLBYv/BdMzMwX3UosFi///qLM0BdP/AEgREeL/ACQIiPGLCPcsi/8AdlVV///QoAD/AFSqqv//oUAACP8AVKqq//+hQAD/ACpVVf//dTVWi///SSqrCIv//10u7///1VVW//97Cqv//6qqq///mOZnCP//qqqr//+Y6qv//4Sqq///zHVW//9eqquLCP//0qqri///z4AA/wAIAiL//8xVVv8AEARECP//zFVW/wAQBET//97VVv8AElmZ///xVVb/ABSu7giL/wMNzMwVi//9jzmaBZf//+33eP8AGVVV///uzu//ACaqqv//76ZnCP8AJqqq///vpmf/ACWqqv//99M0/wAkqqqLCPeAi/cK/wCFf/+L/wELAAAIi/8Ah4AAb/8AYyAAU/8APsAACFP/AD7AAP//plVW/wAfYAD//4Sqq4sI///lVVaL///fVVb///amZ///2VVW///tTM0I///ZVVb//+1REv//4VVW///q+Zr//+lVVv//6KIjCA747vcq/wEuczMVi/8Et/MzBfdSiwWL//tn+ZoFi///xpma/wAQgAD//9LIiaz//973eAis///e+7z/ACsqqv//733e/wA1VVWLCIv//1YAAAX7iov7D/8Aa8AAi/8A14AACA4cBigcBJj/AHP5mRX/AB6qqv//9KqruP//7Kqr/wA7VVX//+Sqqwj7FP//f8AA//9XVVb//7/gAP//Lqqriwj//yqqq4v//1Uqq/8AQazM//9/qqv/AINZmQj//3+qq/8Ag1mZ//+/1Vb/AKyxEYv/ANYIiAiL/wDZXd3M/wCyW7v3Fv8Ai1mZCPcW/wCLWZn3Pv8ARazM92aLCPdei/8Aoqqq///DszT/AHtVVf//h2ZnCP8Ae1VV//+HZmf/AD2qqv//Xxd4i///NsiJCIv//467vP//4iqr//+f4iP//8RVVv//sQiJCP//xFVW//+xDM3//7Eqq///2IZnKYsIIYv//7NVVv8AF1VV///Qqqv/AC6qqgj//8dVVlf//70AAf//5gAA//+yqquLCP//uKqri///xlVW/wATe7tf/wAm93cIX/8AJvd3df8ANHVVi/8AQfMzCIv/AFPqqq//AD/xEdP/ACv3dwjT/wAr93f/AGFVVf8AFfu7/wB6qqqLCIH/AGIiIv//2Kqr/wAxERH//7tVVosIRYv//8iqq///7VVW///XVVb//9qqqwhb7gX/ADaqqv8AKKqq/wBCqqr/ABRVVf8ATqqqiwj/ALlVVYv/AFyqqv//lbVWi///K2qrCIv//xETNAW7///cqqv/ACiqqv//7lVW/wAhVVWLCPcQi8n/AGVCIov/AMqERAiL/wCZ5mZZ/wCAPd0n/wBmlVUIJ/8AZpmZ+xP/ADNMzPsuiwj//1dVVov//3gAAP//xaiJ//+Yqqv//4tREgj//5iqq///i1ES///MVVb//2r5mov//0qiIwiL//9N93j/ADMqqv//cKRF/wBmVVX//5NREgj/AGZVVf//k1ES/wCIgAD//8moif8Aqqqqiwj3Lov/AHuqqv8AKsqq/wBdVVX/AFWVVQj7uv8BFWzMFYv/AOmZmQVYiwX7FotK///Kvd6L//+Ve7wIi///3AzN/wAMqqr//+JgAP8AGVVV///oszQI/wAZVVX//+izNP8AH6qq///0WZqxiwi1i/8AJaqq/wAQqqr/ACFVVf8AIVVVCA75g/f2/wEYZmYV/wApVVWL/wAjVVX///FTNP8AHVVV///ipmcI/wAdVVX//+KmZ/8ADqqq///cpEWL///WoiMIi///1qIj///xVVb//9x5mv//4qqr///iURII///iqqv//+JREv//3Kqr///xKIn//9aqq4sI///WqquL///cqqv/AA7Xd///4qqr/wAdru4I///iqqv/AB2u7v//8VVW/wAjhmaL/wApXd0Ii/8AKV3d/wAOqqr/ACNbu/8AHVVV/wAdWZkI/wAdVVX/AB1Zmf8AI1VV/wAOrMz/AClVVYsIDvqJ+kP/A9gzMxUt+xoF///sqqv/ABNVVf//3dVW/wASVVVa/wARVVUIWv8AEVVV///P1Vb/AAiqqv//0Kqriwj//5iqq4s5///byIn//8NVVv//t5ESCP//w1VW//+3lVb//+Gqq///nLVWi///gdVWCIv//4KERar//6BiI8n//75AAQjJ//++QADh///fIAD3AosI/wBVVVWL4az/AFaqqs0I1vs0BSVJ//+Bqqtq//9pVVaLCPsmi///h1VW/wAxCqr//6Cqq/8AYhVVCP//oKqr/wBiGZn//9BVVv8AhMqqi/8Ap3u7CIv/AKrREf8AMYAA/wCJHd3u/wBnaqoI7v8AZ27u/wCHgAD/ADO3d/dAiwj/ADdVVYvH///0VVb/AECqqv//6KqrCP8AQKqq///oqqv/AC+qqv//6AAB/wAeqqr//+dVVggO+t3M/wIZszMVi/8ApXu7/wAsgAD/AIWd3eT/AGXAAAjk/wBlxET/AHUqqv8AMuIi/wCRVVWLCP8AmVVVi/8Adv/////PHd7/AFSqqv//nju8CP8AVKqq//+eQAD/ACpVVf//eGIji///UoRFCIv//1Mu7///1Kqr//93tVb//6lVVv//nDu8CP//qVVW//+cQAD7Cv//ziAA//9qqquLCP//Z1VWi/sL/wAyYAD//6qqq/8AZMAACP//qqqr/wBkxET//9VVVv8Ah8qqi/8AqtERCPdcixWL//7zIiPq//95kRL3UosI/wBYqqqL/wBFgAD/ACQGZv8AMlVV/wBIDMwI/wAyVVX/AEgMzP8AGSqq/wBiaIiL/wB8xEQIi/8BCYiI//+hVVb/AITERP//Qqqriwj//6lVVov//7rVVv//3KRF///MVVb//7lIiQj//8xVVv//uUiJ///mKqv//56XeIv//4PmZwgO+sX4Yv/+6zM0FYv/BpGZmQX3JosFi//5bmZnBfsmiwUO+YP4/v8FwzMzFYv//6zMzQX7GP//QURFSf/+6ZESi//+kd3eCIv//k0u783//tqREvcY//9n8zQIi///lszNBf//eVVW/wBeDMz//5eAAP8AhuiI//+1qqv/AK/ERAj//7Wqq/8Ar8AA///a1Vb/AMJERIv/ANTIiAiL/wC1aqr/ACpVVf8At0Ii/wBUqqr/ALkZmQj/AFSqqv8AuRmZ/wBjVVX/AHo7u/cG/wA7Xd0IDvrF93z5XxVHugWL/wLEZmYF+W2LBYv7PgX8r4sFi//+nJmaBf8AMVVV/wAkqqr/AD6qqv8AElVV14sI9xyL/wBn1VX//9dMzf8AR6qq//+umZoI/wBHqqr//66Zmv8AI9VV//+MPd6L//9p4iMIi//+kGIj//9cVVb//0gxEv/+uKqriwj//3dVVov//46qq7Ex1wjY9zsF/wBaqqr//7YAAf8AV1VVZt+LCPdQi+n/AHV5mYv/AOrzMwiL/wDa6qr//6NVVv8AbXVV//9GqquLCP//pqqri///r6qr///Zqqv//7iqq///s1VWCA75g/dV//5TMzQVi/8AaTMzBfcY/wCYDMzN/wElbu6L/wGy0REIi/8BbiIiSf8BFm7u+xj/AL67uwiL/wBTMzMF9wb//8SiI/8AY1VV//+FxEX/AFSqqv//RuZnCP8AVKqq//9G5mf/ACpVVf//SL3ei///SpVWCIv//ys3eP//2tVW//89u7z//7Wqq///UEAACP//taqr//9QO7z//5eAAf//eRd4//95VVb//6HzNAgO+PwO+YP3M/8B+mZmFYv/AK8zMwX4QIsFi///UMzNBfxAiwUOHAU7+nKLFYv/AsRmZgX9FIsFi//9O5maBftciwWL/wW5mZkF91yLBYv//bTMzQX5FIsFi/8CSzMzBfdciwWL//pGZmcF+1yLBQ742/ff/wXDMzMV/wAgqqqL/wAb1VX///R93qL//+j7vAii///o+7z/AAuAAP//5Hmai///3/d4CIv//99Mzf//9IAA///kJEV0///o+7wIdP//6Pu8///kKqv///R93v//31VWiwhri///5IAA/wALgiJ0/wAXBEQIdP8AFwRE///0gAD/ABvbu4v/ACCzMwiL/wAgszP/AAtVVf8AG7ER/wAWqqr/ABau7gj/ABaqqv8AFq7u/wAbqqr/AAtXd/8AIKqqiwgj//o8zM0Vi/8DjmZmBfsniwWL9zQF9+WLBYv/+9GZmgX7UosFDvry+a+LFYv/AqEmZgWL/wBQBET//+xVVv8APwIi///Yqqu5CP//2Kqr/wAuBET//8iqq/8AFwIi//+4qquLCF2L///R1Vb///J93v//0aqr///k+7wI///Rqqtw///cgAD//+CAAP//51VWZwiL//zj0zQF+1KLBYv/BeZmZgX3UosFi//90sZnBf8AGVVV/wAnVVX/ACjVVf8AINVV/wA4VVX/ABpVVQj/ADhVVf8AGlmZ/wA6Kqr/AA0szMeLCP8AcVVVi/8AWNVV///aqIn/AEBVVf//tVESCP8AQFVV//+1URL/ACAqqv//mfu8i///fqZnCIv//V7gAAX7UosFDvmD93T//pTMzRVY/wBIDMwF/wByqqr/AF4MzP8AOVVV/wBQDMyL/wBCDMwIi/8AHVmZgf8AHVmZd/8AHVmZCP//xqqr/wAbWZn//+NVVv8AJ1u7i/8AM13dCIv/ACNZmf8ADaqq/wAdLu7/ABtVVf8AFwRECP8AG1VV/wAXBET/ACJVVf8AC4Ii/wApVVWLCP8AJKqqi/8AINVV///v/d6o///f+7wIqP//3/u8/wAOgAD//9qkRYv//9VMzQiL//+nSIn//+2AAP//sB3eZv//uPM0CGb//7jzNP//sYAA//+vyIn7DP//pp3eCA76xffy/wUFmZkVi//+aMzNBfiXiwWL+z4F/JeLBYv//TuZmgX7XIsFi/8FuZmZBfodiwWL+0gF/VWLBQ76oPcqixWL/wW5mZkF91yLBYv/+vpmZwX5KosFi/tIBf3yiwUO+sX3Af8AZzMzFev3LgX/AEFVVf//uAAB/wBSqqpn74sI/wC5VVWL/wBcqqr/AFqzM4v/ALVmZgiL/wBSszNw/wBDMRFV/wAzru4IVf8AM67u//+4VVb/ABnXd///pqqriwh7iwWL9zYFlIsF/wCpVVWL/wBUqqr/AErMzIv/AJWZmQiL/wCcRET//7BVVv8ATiIi//9gqquLCP//qVVWi0Zu///MqqtRCDL3HAXJ/wBQqqr/AGeqqv8AKFVV/wCRVVWLCPcUi/8AaFVV///dyqv/AFCqqv//u5VWCP8AUKqq//+7mZr/AChVVf//qGZni///lTM0CIv//66VVv//6YAA//+36qte///BQAAIXv//wURF///LKqv//9X1Vv//w1VW///qpmcI3///5Kqr/wBC1VX//9F93v8AMaqq//++URII/wAxqqr//75REv8AGNVV//+weZqL//+ioiMIi///d/d4YP//lvmaNf//tfu8CDX//7X7vP//h1VW///a/d7//2Sqq4sI//++qquLS/8ADCqq///BVVb/ABhVVQj//8FVVv8AGFVV///OVVb/AB0qqv//21VWrQgO+sXL/wMIuZkVi/8A0szM/wAqqqr/AKvGZv8AVVVV/wCEwAAI/wBVVVX/AITERPcM/wBCYiL/AJqqqosI/wCZVVWL/wBzKqr//8igANj//5FAAAjY//+RREX/ACaAAP//Poqri//+69ESCIv//xKERf//16qr//9FCqv//69VVv//d5ESCP//r1VW//93lVb7Cv//u8qr//9kqquLCP//ZKqri///iiqr/wA3CIj//6+qq/8AbhERCP//r6qr/wBuFVX//9fVVv8A0s7ui/8BN4iICPdceRWL//5ppmf/AFaqqv//NNM0/wCtVVWLCP8AY1VVi9T/AC0IiP8ALqqq/wBaEREI/wAuqqr/AFoVVf8AF1VV/wCdzu6L/wDhiIgIi/8Am3d3gv8Achd3ef8ASLd3CHn/AEi7u27/ADcMzGP/ACVd3Qhj/wAlXd3//81VVv8AEq7u///CqquLCP//Q1VWi///oaqr//9EgiOL//6JBEUIDvrF+IaLFYv/BGHgAAX7vv//RbmaBYv/ALszMwX/AEtVVf8AJhER/wBQKqr/ADRszOD/AELIiAjg/wBCyIj/AEHVVf8AP3ER/wAuqqr/ADwZmQjHiwWL//pBmZoF+1yLBQ4cBLb6aosVJv8BNMzMBfy1iwX7AP/+yzM0Bft0iwX45/8FzMzMBcCLBfi8//ozMzQF+3KLBfwC/wRM4AAV+3f//XsgAAX4R4sF+2T/AoTgAAUOHAR0973/AExGZhVI//+e7M0FLIsFi/8F+zMzBfdSiwWL//35szQFnf8AGK7u/wAh1VX/ABau7v8AMaqq/wAUru4I/wAxqqr/ABSzM/8AMNVV/wAKWZm7iwj/AJKqqov/AHbVVf//zUiJ5v//mpESCOb//5qVVv8ALYAA//9/5EWL//9lMzQIi///TSqr///SVVb//3Nd3v//pKqr//+ZkRII//+kqqv//5mVVv//hFVW///Myqv7MIsI///NVVaL///OKqv/AAmCIlr/ABMERAha/wATBET//9rVVv8AFtmZ///mqqv/ABqu7gin/wMC0zMVi//9lTmaBYv///VREv8AF6qq///ueZr/AC9VVf//56IjCP8AL1VV///noiOv///z0RL/ABiqqosI/wCBVVWL/wBcqqr/AB8IiMP/AD4REQjD/wA+FVWn/wBoIiKL/wCSLu4Ii/8AeYAA///fVVb/AF7Kqv//vqqr/wBEFVUI//++qqv/AEQVVTP/ACIKqv//kVVWiwj//+iqq4v//9+AAP//9fu8///WVVb//+v3eAj//9ZVVv//6/u8///k1Vb//+37vP//81VW///v+7wIDvm/91//A5hmZhX7EIsFi/cqBfcQiwWL/wDgczMF91L/AEkmZgWL//7WZmcF97qLBYv7KgX7uosFi//96+AABYv//6X3eP8ADyqq//+/+Zr/AB5VVf//2fu8CP8AHlVVZf8AMNVVeP8AQ1VViwj/ADCqqov/ADJVVf8ADFVVv/8AGKqqCKf//1kAAAX//7FVVnf//6mqq4Etiwj//6tVVov//7iAAP8AH4Ii///Fqqv/AD8ERAj//8Wqq/8APwRE///i1Vb/AE+ERIv/AGAERAiL/wJgIAAFDvry98//BC5mZhWL//1U2ZoFi///WqIj/wBHqqr//61REv8Aj1VViwj/AD6qqov/ADlVVZ2/rwi//wAkBET/ACJVVf8AKa7u/wAQqqr/AC9ZmQiL/wLwJmYF91KLBYv/+9GZmgX7UosFi/8AkzmZBf//6qqr///WAAH//9Uqq///2X3e//+/qqv//9z7vAj//7+qq2j//8Eqq///7oAA///CqquLCP//iqqri///piqr/wAhqqr//8Gqq/8AQ1VVCP//waqr/wBDWZn//+DVVv8AX7ERi/8AfAiICIv/Ar8gAAX3UosFDvnPzP8APzMzFc73SAX1//+6qqv/AFVVVf//3VVW/wBAqqqLCP8AdVVVi/8AOqqq/wAxaqqL/wBi1VUIi/8ARsiI///HVVb/ADzAAP//jqqr/wAyt3cI//+oqqv/ACgMzP//xSqr/wAeXd3//+Gqq/8AFK7uCP//4aqr/wAUszP//+Wqq/8AF4Zm///pqqv/ABpZmQj//+mqq/8AGlmZ///vVVb/ABwERID/AB2u7giA/wAdszP///qAAP8AH9u7i/8AIgRECIv/AFgREav/AES3d8v/ADFd3QjL/wAxXd3/AFOqqv8AGK7u/wBnVVWLCNmL/wBiVVX//+dVVv8Adqqq///OqqsIVftEBf//tKqrx///tFVWqT+LCP//0qqri///2dVW///1Tu9s///qnd4IbP//6qIj///wgAD//+T1Vov//99IiQiL//+7MzSy///L6qvZ///coiMI9xz//8HszQX/AFNVVf//2fd4/wA8qqr//9SiI7H//89MzQix///PTM2e///C8zSL//+2mZoIi///n+7v///eVVb//7TGZ///vKqr///Jnd4I//+8qqv//8miI///oqqr///k0RL//4iqq4sI//+PVVaL//+WAAGn//+cqqvDCA4cBMj60f8FgpmZFUj7PwVL/wAuqqr//5tVVv8AF1VV//92qquLCP//f1VWi///mNVW///IqIn//7JVVv//kVESCP//slVW//+RURL//9kqq///cU7vi///UUzNCIv//1lMzf8AJ9VV//94zu//AE+qqv//mFESCP8AT6qq//+YURL/AGbVVf//zCiJ9xKLCP8AiVVVi/8Aaaqq/wAwqqrV/wBhVVUI9wL//2cAAAX7CP//jKqr//9qqqv//8ZVVv//SVVWiwj//0Cqq4v//2lVVv8ARQIi+wL/AIoERAj7Av8AigREVP8AtgZmi/8A4giICIv/ANqzM/8AOqqq/wC1sRH/AHVVVf8AkK7uCP8AdVVV/wCQru7/AJeqqv8ASFd3906LCP8An1VVi/8AfKqq///lqqvl///LVVYIDvmu+WH/A3gzMxX//9aqq/8AHKqq///WVVb/AA5VVWGLCP//vKqri///xSqr///g/d7//82qq///wfu8CP//zaqr///B+7z//+bVVv//tVESi///qKZnCIv//ZngAAX7UosFi/8ELmZmBfdSiwWL//9VxmcF/wBFVVX/AH9Zmf8AZwAA/wA/rMz/AIiqqosIrYu8hct/CDz7TQUO+vL5rosVi/8CbyAABYv/AHIIiP//7tVW/wBP2Zn//92qq/8ALaqqCP//3aqr/wAtru7//8aAAP8AFtd3//+vVVaLCP//1Kqri///0qqr///y/d7//9Cqq///5fu8CP//0Kqrcf//26qra///5qqrZQiL//zj0zQF+1KLBYv/BC5mZgX3FosFx///dsZnBf8APqqq/wBpWZn/AGZVVf8ANKzM9yKLCP8A6qqqi/8AdVVV//9xTu+L//7ind4Ii//9aOAABftSiwUO+pz5z4sV++T/AhegAAX7Ov//VSzNBYv//pMzNAX7UosFi/8F5mZmBfdSiwWL//xWZmcF+C7/AfGZmQX3cosF++v//mk5mgX4N//9aGAABftiiwUO+pbr//7aMzQV8vcsBf8AbqqqQf8AZf//Zv8AXVVViwjhi/8AQ9VV/wAO6Ij/ADGqqv8AHdERCP8AMaqq/wAdzMz/ABjVVf8AJQIii/8ALDd3CIv/AFcZmf//wVVW/wArjMz//4Kqq4sI///qqquL///ZVVb///qqq1P///VVVghT///1VVb//9RVVv//+qqr///gqquLCPssiz//ADlERIv/AHKIiAiL/wAjSIj/ABHVVf8AH/VV/wAjqqr/AByiIgj/ACOqqv8AHKIi/wAsKqr/ABSkRP8ANKqq/wAMpmYI//9pVVb/AEaqqv//tKqr/wB6qqqL/wCuqqoIi/cEsv8AXVVV2f8ASqqqCNn/AEqqqv8AYFVV/wAlVVX/AHKqqosI/wBpVVWL/wBSVVX//+pVVv8AO1VV///UqqsI6v8AcpmZBfcQ//+LAAEF+wb//6lmZwX/ADCqqv//wKqr/wAYVVX//61VVoslCIv7AP//3lVW//+lVVb//7yqq///tqqrCP//vKqr//+2qqv//6eqq2H//5Kqq///9VVWCPsx///wEzQF///tVVb///4ERXL///jd3v//4Kqr///zt3gI///gqqv///O7vP//8FVW///v6ImL///sFVYIi///5MzN/wAgqqr///JmZ/8AQVVViwj/AByqqov/ACyqqv8ABSIi/wA8qqr/AApERAj/ADyqqv8ACkREuP8ABSIi/wAdVVWLCP8AaVVVi/8AUiqq///mxmfG///NjM0Ixv//zYzN/wAdgAD//7oCI4v//6Z3eAiL//+dHd7//9PVVv//sCiJ//+nqqv//8MzNAj//6eqq///wy7v//+QKqv//+GXeP//eKqriwj//7qqq4v//7cAAf8ADFVV//+zVVb/ABiqqgj//7NVVv8AGKqq///CVVap///RVVb/ACNVVQj4J/8Ez8zMFUmL///KKqv//+iszf//1lVW///RWZoI///WVVb//9FZmv//6yqr///HW7yL//+9Xd4Ii///tV3e/wAUKqr//8IxEv8AKFVV///PBEUI/wAoVVX//88ERf8ANoAA///ngiP/AESqqosI/wBDVVWL/wA0qqr/ABfTM7H/AC+mZgix/wAvpmae/wA+eZmL/wBNTMwIi/8AQqIi///rgAD/ADikRGL/AC6mZghi/wAupmb//8zVVv8AF1Mz///CqquLCA75gfhA/wXDMzMV/wAgqqqL/wAb1VX///R93qL//+j7vAii///o+7z/AAuAAP//5Hmai///3/d4CIv//99Mzf//9IAA///kJEV0///o+7wIdP//6Pu8///kKqv///R93v//31VWiwj//99VVov//+RVVv8AC4Ii///pVVb/ABcERAj//+lVVv8AFwRE///0qqv/ABvbu4v/ACCzMwiL/wAgszP/AAtVVf8AG7ER/wAWqqr/ABau7gj/ABaqqv8AFq7u/wAbqqr/AAtXd/8AIKqqiwj8Lhz4mBWL9z4F/wCCqqqL/wBZgAD/ABPXd/8AMFVV/wAnru4I/wAwVVX/ACeqqv8AGCqq/wBBLMyL/wBaru4Ii/8DiiZmBftpiwWL9zQF+CeLBYv/+9nZmgWL//9spmf//9Sqq///k6iJ//+pVVb//7qqqwj//6lVVv//uqZn//96VVb//91TNP//S1VWiwgO+tv38v8FBZmZFYv//mjMzQX4eIsFi/s+Bfx4iwWL//3vmZoF+SyLBYv7SAX99IsFi/8FuZmZBfn/iwWL+0gF/TeLBQ4cBfP6+f//6zM0FVmLBfvO/wLZRmYF+83//Sa5mgVZiwX8E/8ERmZmBfdfiwX3ef/9QMAABfex/wK/QAAFvYsF97r//UDAAAX3iv8Cv0AABfdPiwX8FP/7uZmaBQ4cBHT5wv8AAZmZFYv/AE45mQVJ//+9+7wr///e/d77EosI+xqL//+TVVb/ADAERP//rKqr/wBgCIgI//+sqqv/AGAIiP//1lVW/wCADMyL/wCgEREIi/8AoLd3u/8AiTVV6/8AcbMzCOv/AHG3d/8AclVV/wA427v/AISqqosI/wBuqqqL3///5f3e/wA5VVX//8v7vAiL/wHxOZkF91KLBYv/+hszNAX7UosFi/8DNGZmFVv/AEjMzP//vlVW/wAkZmb//6yqq4sIJYv//62AAP//2f3eTP//s/u8CEz//7P7vP//4IAA//+fTu+L//+KoiMIi//+/e7v/wB1VVX//373eP8A6qqqiwipi6//AAl7u7X/ABL3dwi1/wAS+7v/ABpVVf8AFCRE/wAKqqr/ABVMzAiL/wJRIAAFDvp9+J3//+szNBVZiwX8X/8ERmZmBfdkiwX3r//9EbmaBfe1/wLuRmYF91uLBfxq//u5mZoFDvpr3/8AQmZmFdT3TAX/ACVVVf//5Kqr/wAuf////+kqq/8AN6qq///tqqsI/wA3qqr//+2qq/8AMdVV///21Va3iwjZi/8APqqq/wAVVVX/AC9VVf8AKqqqCP8AL1VV/wAqru7/ABeqqv8ANlmZi/8AQgRECIv/ADFVVf//8tVW/wAt1VX//+Wqq/8AKlVVCP//5aqr/wAqWZn//73VVv8ALizMIb0I+wr/ADcGZgUn/wAuqqr//7oqq/8AN1VV///YVVbLCP//2FVW/wBABET//+wqq/8ATQREi/8AWgRECIv/AG1Zmf8AJqqq/wBarMz/AE1VVdMI/wBNVVX/AEgERP8AY1VV/wAkAiL/AHlVVYsI9zaL/wBwqqr//+Wqq/8AP1VV///LVVYIUPtCBf//5VVW/wATVVX//9dVVv8AEqqq///JVVadCP//yVVWnf//zVVWlP//0VVWiwhHi///yoAA///sqIlk///ZURIIZP//2VVW///sgAD//85TNIv//8NREgiL///aqquS///d/d6Z///hURIImf//4VVW/wATgAD//+ZVVqT//+tVVgik///rVVb/ADMqqm7/AE1VVf//2qqrCPcM///G+ZoF7///0Kqr/wBGKqr//8d93v8AKFVV//++URII/wAoVVX//75VVv8AFCqq//+sfd6L//+apmcIi///kfu8///T1Vb//6KmZ///p6qr//+zURII//+nqqv//7NVVv//idVW///Zqqv7KIsI+xaL+wP/AB6qqi//AD1VVQgOHAR0+cn//lszNBWL/wHjEzMF///Iqqv//8id3v//o1VW///kTu/7FosI+yaL//+NgAD/ADDgADj/AGHAAAg4/wBhxET//9aAAP8Ah6AAi/8ArXu7CIv/AKt7u/8AL4AA/wCH8zPq/wBkaqoI6v8AZG7u/wB6Kqr/ADI3d/8AlVVViwj/AF1VVYvi///eTM3/AFCqqv//vJmaCL7/AFBMzAX3B4sFi//6LMzNBftSiwWL/wT15mYV///JVVb/ADa7u///u6qr/wAbXd05iwj//5Sqq4v//6xVVv//253eT///tzu8CE///7dAAG3//5+MzYv//4fZmgiL//+D1Vap//+fYADH//+66qsIx///uuqr3P//3XVW8YsI/wBbVVWL0v8AF13d/wAyqqr/AC67uwiL/wJ/zMwFDvmH+V7/BTxmZhX//9lVVv8ADVVVZ/8ABqqq///eqquLCFGL///QKqv//+nszf//2lVW///T2ZoI///aVVb//9PZmv//7Sqr///IJEWL//+8bu8Ii///7e7v/wABqqr//+1ERf8AA1VV///smZoI926LBYv7NAX7bosFi//8cZmaBftSiwWL/wOOZmYF+zCLBYv3NAX3MIsFi/8AiPu7/wAhqqr/AGuTM/8AQ1VV/wBOKqoI/wBDVVX/AE4u7uT/ACcXd/8Abqqqiwj/ADdVVYv/ADtVVYH/AD9VVXcIVvsgBQ75g/f2/wRDMzMV/wApVVWL/wAjVVX///FTNP8AHVVV///ipmcI/wAdVVX//+KmZ/8ADqqq///cpEWL///WoiMIi///1qIj///xVVb//9x5mv//4qqr///iURII///iqqv//+JREv//3Kqr///xKIn//9aqq4sI///WqquL///cqqv/AA7Xd///4qqr/wAdru4I///iqqv/AB2u7v//8VVW/wAjhmaL/wApXd0Ii/8AKV3d/wAOqqr/ACNbu/8AHVVV/wAdWZkI/wAdVVX/AB1Zmf8AI1VV/wAOrMz/AClVVYsIi//81TM0Ff8AKVVVi/8AI1VV///xUzT/AB1VVf//4qZnCP8AHVVV///ipmf/AA6qqv//3KRFi///1qIjCIv//9aiI///8VVW///ceZr//+Kqq///4lESCP//4qqr///iURL//9yqq///8SiJ///WqquLCP//1qqri///3Kqr/wAO13f//+Kqq/8AHa7uCP//4qqr/wAdru7///FVVv8AI4Zmi/8AKV3dCIv/ACld3f8ADqqq/wAjW7v/AB1VVf8AHVmZCP8AHVVV/wAdWZn/ACNVVf8ADqzM/wApVVWLCA76hfi0//9JgAAV///nVVZH///MKqv//8dIiTz//9KREgg8///SkRL//6fVVv//6UiJ//+eqquLCIv3PgX/AE9VVYv/AEP///8AEozM/wA4qqr/ACUZmQj/ADiqqv8AJRmZ/wAcVVX/AC1Kqov/ADV7uwiL/wA61VX///Wqq/8AOeZm///rVVb/ADj3dwj//+tVVv8AOPd3///lVVb/AEZ1Vf//31VW/wBT8zMI+7b/AuiZmQX3VosF98///MSTNAX3r/8DO2zMBfdWiwX8Wv/7GxmaBQ4cBNT3Rf8CQEzMFYv/AHoVVbb/AGgREeH/AFYMzAjh/wBWERHz/wArCIj3DosI/wB5VVWL/wBnqqr//9T3eOH//6nu7wjh//+p8zS2//+X7u+L//+F6qsIi///hpVWYP//mEIjNf//qe7vCDX//6nzNP//mFVW///U+Zr//4aqq4sI+w6LI/8AKwZmNf8AVgzMCDX/AFYREWD/AGe93Yv/AHlq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)format("opentype");font-display:swap;font-display:swap}@font-face{font-family:fnt1;src:url(data:font/otf;base64,T1RUTwAJAIAAAwAQQ0ZGIHvYRokAAAPIAAAXtk9TLzJVK0gQAAABAAAAAGBjbWFwBgEGggAAAuwAAAC6aGVhZGaaSWoAAACcAAAANmhoZWEF6AYQAAAA1AAAACRobXR4g8gAAAAAG4AAAABsbWF4cAAbUAAAAAD4AAAABm5hbWUUxXaCAAABYAAAAYxwb3N0AAMAAAAAA6gAAAAgAAEAAAABAAAudlN5Xw889QADCAAAAAAAAAAAAAAAAAAAAAAA/6H+jAfiBeYAAAADAAIAAAAAAAAAAQAABeb+jAAAB2gAAAAAAAAAAQAAAAAAAAAAAAAAAAAAABsAAFAAABsAAAACBAIBkAAFAAACigJYAAAASwKKAlgAAAFeADIA+QAAAgAFAAgAAAkAAwAAAAMAAAAAAAAAAAAAAAAzNTc5AAAAIABzBeb+jADIBeYBdAAAAAEAAAAAAaACpAAAACAAAAAAAAwAlgABAAAAAAAAABMAAAABAAAAAAABAAgAEwABAAAAAAACAAcAGwABAAAAAAADABAAIgABAAAAAAAEABAAMgABAAAAAAAGABAAQgADAAEECQAAACYAUgADAAEECQABABAAeAADAAEECQACAA4AiAADAAEECQADACAAlgADAAEECQAEACAAtgADAAEECQAGACAA1kNvcHlyaWdodCAtIFVua25vd25HZW5lcmljMVJlZ3VsYXJHZW5lcmljMS1SZWd1bGFyR2VuZXJpYzEtUmVndWxhckdlbmVyaWMxLVJlZ3VsYXIAQwBvAHAAeQByAGkAZwBoAHQAIAAtACAAVQBuAGsAbgBvAHcAbgBHAGUAbgBlAHIAaQBjADEAUgBlAGcAdQBsAGEAcgBHAGUAbgBlAHIAaQBjADEALQBSAGUAZwB1AGwAYQByAEcAZQBuAGUAcgBpAGMAMQAtAFIAZQBnAHUAbABhAHIARwBlAG4AZQByAGkAYwAxAC0AUgBlAGcAdQBsAGEAcgAAAAEAAwABAAAADAAEAK4AAAAaABAAAwAKACAAQQBGAEkAVQBXAFkAYQBjAGUAawBz//8AAAAgAEEAQwBIAEsAVwBZAGEAYwBlAGsAc///AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgAaABoAIAAiADYANgA2ADYANgA2ADYANgAHAAQAEAAVAAkADAAUAA8AEgAOAAMACgALABEADQAFAAEACAACABMABgAWABcAGQAYABoAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAQEAAEEAAAAAQAAABFHZW5lcmljMS1SZWd1bGFyAAEEAAAAAQAAAC8sHuNyqP8cB+IeFRCk/wUeCgAEiCgfi4seCgAEiCgfi4sMB/cqD/cvEb4cF4ESAAQEAAAAAQAAABEAAAAZAAAAHgAAACZHZW5lcmljMS1SZWd1bGFyR2VuZXJpYzFBZG9iZUlkZW50aXR5AAACAAEAGQAbBAAAAAEAAAAHAAACTAAAA3IAAAPMAAAEFwAABWgAAAWnAAAFqgAABeYAAAY2AAAGfQAACAMAAAhJAAAKXQAACocAAAqmAAAL7wAADQsAAA1mAAANxQAADhQAAA8zAAAQzAAAEgYAABKOAAAUeQAAFnT/BmZmZg76lvpA/wSWZmYV//+yqqv/ADmZmf//sVVW/wAczMw7iwj//19VVov//6+qq///w27vi///ht3eCIv//8zERf8AKqqq///Cxmf/AFVVVf//uMiJCPcr//+AOZoF/wAuqqr//9gERf8AIFVV///i13id///tqqsInf//7a7vnv//5oRFn///31maCJ///99Zmpr//98ERZX//96u7wiV///eru+Q///eAiOL///dVVYIi///ehES///N1Vb//5diI///m6qr//+0szQI//+bqqv//7SzNP//fdVW///aWZr7NIsI//98qquL//+EAAD/ABxERP//i1VW/wA4iIgI3/8BAZmZBf8AWVVV//+8zM3/AGeqqv//3mZn9wqLCP8AR1VVi/8AOyqq/wAPJES6/wAeSIgIuv8AHkiI/wAXgAD/ACsXd4v/ADfmZgiL/wA3O7v//9VVVv8APOZm//+qqqv/AEKREQj7Mf8AfMZmBVv/ACad3f//34AA/wAb9VV6/wARTMwIev8AEUzM///uKqv/ABggAP//7VVW/wAe8zMI///tVVb/AB73d33/AB/Kqv//9qqr/wAgnd0I///2qqv/ACCd3f//+1VW/wAhnd2L/wAind0Ii/8Ahnd3/wAsqqr/AGqCIv8AWVVV/wBOjMwI/wBZVVX/AE6MzP8AdQAA/wAnRmb/AJCqqosIu4v/AD1VVf//+nVW/wBKqqr///Tqqwj/AEqqqv//9Oqr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AESqqv//4EiJCP8ARKqq///gREX/AElVVf//8CIj2YsI3Yv/AExVVaP/AEaqqrsI6///ZBmaBf//qqqr//+Uu7z//4JVVv//yl3e+zqLCP//j1VWi///mSqr/wAgLMwu/wBAWZkILv8AQFVV//+81Vb/AFXVVf//1qqr/wBrVVUI/B//AkimZhWL//+MlVb/ABaAAP//pRmauP//vZ3eCLj//72d3v8AQYAA///ezu/hiwj3Mov3Ef8AR7d35/8Aj27uCOf/AI9zM7n/AKvMzIv/AMgmZgiL/wDhgAD//52qq/8AcMAA//87VVaLCP//dVVWi/sH//+2G7z//6Sqq///bDd4CP//pKqr//9sO7z//9JVVv//Ybd4i///VzM0CA76zfpiixX+MIsF96H/BbmZmQX3mosF+3f/+yszNAX5KosFYf//GzM0BQ74zffdixX7mYsF96H/BbmZmQX3mosF+6L/+kZmZwUOHATlHASNHASeFT//ADaqqv//q6qr/wAbVVX//6NVVosI+yqL//+CKqv//7id3v//mlVW//9xO7wI//+aVVb//3FAAP//zSqr//9hxmeL//9STM0Ii///j4RF/wAbqqr//6YmZ/8AN1VV//+8yIkI/wA3VVX//7zIidj//95kRf8AYqqqiwj/AJlVVYv/AHhVVf8AKVVV/wBXVVX/AFKqqgiG//8bMzQF//+hVVb//61VVv//d6qr///Wqqv7RosI//9hVVaL+xT/ADQd3f//nqqr/wBoO7sI//+eqqv/AGg7u///z1VW/wCHYACL/wCmhEQIi/8BDRVV/wBK1VX/AOHKqv8Alaqq/wC2gAAI/wCVqqr/ALaAAP8Aw4AA/wBbQAD/APFVVYsI9wqL/wBoqqr//+yqq/8AW1VV///ZVVYIQv//BmZnBQ4cBKn4Mv8CGZmZFSj//eZmZwX7nosF96j/BbZmZgX/AItVVf8ADu7u/wBqVVX/AAd3d/8ASVVViwj/AYNVVYv/AMGqqv//bjVWi//+3GqrCIv//1vd3v//xSqr//9/Du///4pVVv//okAACP//ilVW//+iREX//2eAAf//0SIj//9EqquLCE+LUP8ABd3dUf8AC7u7CPcU/wLAGZkVNP/+HkzNBa3///ZmZ/8AK1VV///7MzT/ADSqqosI/wBxVVWL5f8AGE7u/wBCqqr/ADCd3Qj/AEKqqv8AMKIi/wAhVVX/AEXzM4v/AFtERAiL/wCZ4iL//6iqq/8ATPER//9RVVaLCP//0VVWi///zaqr///6KqtV///0VVYIDhwFMfnD/wM2EzMV+AD//MnszQX7uYsF+6b/AnM5mQX7ZP//GyzNBUH//nGZmgX7mIsF96H/BbmZmQX3mIsF+w3//WZmZwX49P8CmZmZBffIiwX81//9fHmaBQ4cB2gcBPj//+szNBUiiwX7M/8DftmZBfxv//yBJmcFIosF+2P/Bc5mZgX3nYsF9wP//IcszQX4Yv8DeNMzBfcFiwX3HP/8jSzNBfhA/wNy0zMF966LBf1+//oxmZoFDhwFbBwEiosV+5uLBfcR/wKpmZkF/NqLBfsR//1WZmcF+5yLBfeh/wW5mZkF95yLBSP//cmZmgX42osF8/8CNmZmBfediwX7o//6RmZnBQ4cBQ74IYsV+/aLBfef/wW2ZmYF/wBhVVX/ABEREf8AW1VV/wAIiIj/AFVVVYsI/wDfVVWL/wCsqqpY9w4lCPcOJcj//2xVVov//z6qqwiL//7wqqv//69VVv//J4AB//9eqqv//15VVgj//16qq///XlVW//8oqqv//68qq//+8qqriwj3Fv8E4yzMFftG//wFoAAF/wAdVVX///1VVv8AGqqq///+qqujiwj/ALKqqov3Isr/AGlVVfcSCP8AaVVV/wB+AAD/ADSqqv8Aoaqqi/8AxVVVCIv3AP//26qr/wBWqqr//7dVVv8AQVVVCP//t1VW/wBBVVX//6Kqq/8AIKqq+waLCGuL///fqqv///zKq///31VW///5lVYIDhwEvPpw/wGAEzMV///7VVb//+dVVv///aqr///kqImL///h+7wIi///bVES/wALVVX//5tREv8AFqqq///JURII+zCLBf//0VVWi///3VVW/wAju7v//+lVVv8AR3d3CP//qqqr//+ru7z//5Wqq///1d3e//+AqquLCPsIi///piqr/wAgpmb//8BVVv8AQUzMCP//wFVW/wBBTMz//+Aqq/8AWvMzi/8AdJmZCIv/AMs3d/8APYAA/wCuERH3D/8AkOqqCPcP/wCQ7u7/AJsqqv8ASHd3/wC7VVWLCP8AtKqqi/8AglVV///vVVbb///eqqsI+xD//W7gAAX7tf8B9lMzFfsEi///pqqr///Kqqv//71VVv//lVVWCP//vVVW//+VVVb//96qq///hTd4i///dRmaCIv//40Iif8AOKqq///GhEX/AHFVVYsI04v/AD7VVf8ALDER/wA1qqr/AFhiIgj/ADWqqv8AWGIi/wAv1VX/ALa93bX/ARUZmQj//9Cqq/8ADVVV///TVVb/AAaqqmGLCA76g/oz/wMmZmYVRf8AMzMz//+5VVb/ABmZmf//uKqriwj//41VVov//6PVVv//1Td4//+6VVb//6pu7wj//7pVVv//qm7v///dKqv//5T1Vov//397vAiL//+9Zmf/ABOqqv//xw7v/wAnVVX//9C3eAj/ACdVVf//0Lu8/wAyqqr//+hd3smLCP8AWVVVi/T/ACXd3f8AeKqq/wBLu7sIbf/++zM0BSX//9VVViL//+qqq/sAiwj//3iqq4v//5TVVv8AJXmZPP8ASvMzCDz/AEr3d///2IAA/wBnHd2L/wCDREQIi/8Axzd3/wA5qqr/AKSTM/8Ac1VV/wCB7u4I/wBzVVX/AIHu7v8AlwAA/wBA93f/ALqqqosI/wBqqqqL/wBcVVX//+oiI9n//9RERQhY//8kzM0FDvrj+Y+LFfvn/wG5WZkFYf//3QzNBUT//mmZmgX7j4sF95r/BeZmZgX3iosF+xX//OTMzQX3Uf8Ao7MzBf8AgKqq/wBvyIj/AFVVVf8AVSqqtf8AOozMCPdD+ysF///iqqv//9wREv//bKqr//95O7z//vaqq///FmZnCPhO//285mcF+7yLBQ76/Pfr/wHRzMwV///+qqv//+6qq////1VWfIv///NVVgiL//+1VVb/ABYqqv//xqqr/wAsVVVjCP8ALFVVY/8APYAAd/8ATqqqiwi1i/8AMFVV/wALgAD/ADaqqqII/wA2qqqitv8AGdVV/wAfVVX/AByqqghu+5sF//+rVVb//9oAAP//mKqr///tAAD7DosI+xiLIP8AKaREOf8AU0iICDn/AFNMzGL/AHJGZov/AJFAAAiL/wC35mb/ADsqqv8AmRVV/wB2VVX/AHpERAj/AHZVVf8AekRE/wCa1VX/AD0iIv8Av1VViwj/AHCqqov/AFtVVf//6C7v0f//0F3eCNH//9BiI67//7vmZ4v//6dqqwiL//+HczT//8vVVv//oWqr//+Xqqv//7tiIwj//5eqq///u2Zn//9/gAD//92zNP//Z1VWiwj//7VVVotC/wAMVVX//7iqq/8AGKqqCLv/ALxmZhX/ACtVVf//81VWuv//+aqr/wAyqqqLCP8AWqqqi/8ATKqq/wAN1VX/AD6qqv8AG6qqCP8APqqq/wAbqqr/AB9VVf8AJ9VVi78Ii8X//8Cqq6j//4FVVosIWYtY///qKqtX///UVVYIV///1FVW///XVVb//8mAAP//4qqr//++qqsIDvo9+av/AwozMxU70f//tqqrrv//vVVWiwj//9aqq4v//9wqq///9nu8///hqqv//+z3eAj//+Gqq///7Pu8///w1Vb//+Z3eIv//9/zNAiL///YmZr/ACQqqv//2fES/wBIVVX//9tIiQj/AEhVVf//20iJ/wA3gAD//+LMzf8AJqqq///qURII/wAmqqr//+pREv8AH6qq///ioiP/ABiqqv//2vM0CP8AGKqq///a93j/AAxVVf//1Xd4i///z/d4CIv//4niI///09VW//+i6In//6eqq///u+7vCP//p6qr//+77u///48qq///3fd4//92qquLCP//iqqri///jVVWrPsEzQj3GPd3Bf8AU1VV//+xVVb/AFGqqv//2Kqr24sI/wAyqqqL/wAp1VX/AAyu7qz/ABld3Qis/wAZXd3/ABCAAP8AImIii/8AK2ZmCIv/ACQMzP//4Kqr/wAiYiL//8FVVv8AILd3CP//wVVW/wAgt3f//8iqq/8AHd3dW/8AGwRECFv/ABsIiP//24AA/wAhCIhy/wAnCIgIcv8AJwiI///zgAD/ACs1VYv/AC9iIgiL/wBoGZn/ACmAAP8AUuiI3v8APbd3CN7/AD27u/8AZdVV/wAe3d3/AHiqqosI/wBSqqqL/wBrVVVv9xhTCPsI+3kFDnub+DyZ926ZkZu5kwb7iIv4jJH3GosHe5v4NJf3bpedm7OVCPuGi/iGkvcXiwmvCvccCwAAAAAGZgAABAIAAAVJAAAGSQAABOcAAAT7AAAFdgAAAmgAAAV6AAAEvgAABUcAAAWdAAAErgAABiYAAAQ5AAACOQAABOUAAASpAAAFMQAAB2gAAAVsAAAFDgAABLwAAAPvAAAETwAABGgAAAOpAAA=)format("opentype");font-display:swap;font-display:swap}@font-face{font-family:fnt2;src:url(data:font/otf;base64,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i/8AfKqq///RuZrp//+jczQI6f//o3M0uv//iiZni///cNmaCIv//+Fd3oT//9G5mn3//8IVVgj9iPdQFfiiiwX//+6qq/cw//+pVVbZ+zCLCP//cVVWi///p1VWPf//3VVW+zAIDvju90b/Bb2ZmRX3jscFixz7TQWL//98Hd7/ACdVVf//sWZn/wBOqqr//+au7wj//9lVVv//tqqrSf//21VW//+iqquLCP//jqqri///x1VW/wBOmZmL/wCdMzMIixwE5QUO+tX5b/8Aa8zMFf//6VVW///aqqv//9iAAP//4YAA///Hqqv//+hVVgj//8eqq///6FVW///FKqv///Qqq///wqqriwj//4yqq4v//6VVVv8AHNVVSf8AOaqqCEn/ADmqqmr/AFHVVYv1CIv3EP8ALoAA/wBhAADo0Qjo0f8AhCqqrv8Aq1VViwj/AB1VVYv/ACKqqoazgQiL/wB9d3f//7BVVv8APru7//9gqquLCC2L//+xVVb///BVVv//wKqr///gqqsIVf8AwjMzBeH/AClVVf8AZlVV/wAUqqr/AHaqqosI/wCjVVWL/wB3qqr//9rZmtf//7WzNAjX//+1t3ix//9zQACL//8wyIkIi///GyZnBYv//3Fqq/8AHKqq//+mYiP/ADlVVf//21maCP//61VWZ3T//+nVVv//5qqr///3qqsI///mqqv///eqq27///vVVv//31VWiwhni///36qr/wANVVX//+NVVv8AGqqqCP//41VW/wAaqqr//+yqq6iB/wAfVVUIc/8BjNMzFf//1VVW/wAIpmZr/wAEUzP//+qqq4sI//86qquL//+dVVb//79oiYv//37REgiL//+gHd7/ADeqqv//0A7v/wBvVVWLCPcqi9b/AEroiIv/AJXREQiL/wBj5mYFDvm/90H/A2UzMxX7EIsFi/8AyTMzBfcQiwWL/wDaRmYF947/AFwgAAWL//7JmZoF97qLBYv//zbMzQX7uosFi//+LEAABYv//7OIiZf//8n5mqP//+Bqqwij///gaqu1///wNVbHiwjHi8P/ABBVVb//ACCqqgiL//8ZzM0FUXf//61VVv//9gAA//+UqquLCP//lVVWizn/AB4bu///xqqr/wA8N3cI///Gqqv/ADw7u///41VW/wBVru6L/wBvIiIIi/8CHQZmBQ749vff/wXNMzMVs4v/ACIqqv//8dVW/wAcVVX//+Oqqwj/ABxVVf//46qr/wAOKqr//93VVotjCItj///x1Vb//93VVv//46qr///jqqsI///jqqv//+Oqq///3dVW///x1VZjiwhji///3dVW/wAOKqr//+Oqq/8AHFVVCP//46qr/wAcVVX///HVVv8AIiqqi7MIi7P/AA4qqv8AIiqq/wAcVVX/ABxVVQj/ABxVVf8AHFVV/wAiKqr/AA4qqrOLCPsV//oyzM0Vi/8DYTMzBfsdiwWL/wDNMzMF+BqLBYv/+9GZmgX7kYsFDhwEhcz/AhqAABWL/wCjQAD/AC8qqv8AhOzM/wBeVVX/AGaZmQj/AF5VVf8AZp3d/wB8gAD/ADNO7v8Amqqqiwj/AKKqqov/AH5VVf//zrES5f//nWIjCOX//51iI7j//3kTNIv//1TERQiL//9Vaqv//9Iqq///eGZn//+kVVb//5tiIwj//6RVVv//m2Zn//+CgAH//82zNP//YKqriwj//11VVov//4GAAP8AMszM//+lqqv/AGWZmQj//6Wqq/8AZZ3d///S1Vb/AIcZmYv/AKiVVQj3mIsVi///FDM04P//ihma9z6LCNmL/wA91VX/AB6kRP8ALaqq/wA9SIgI/wAtqqr/AD1IiP8AFtVV/wBXQiKL/wBxO7sIi/8A6Hd3//+rVVb/AHQ7u///Vqqriwg9i03//+FbvF3//8K3eAhd///Ct3h0//+qaImL//+SGZoIDhwEuPnMixWL+P8Fi/8AW1VV///ugAD/AEKqqmi1CGi1///G1Vag//+wqquLCP//21VWi///2NVW///1qqv//9ZVVv//61VWCP//1lVW///rVVb//9+AAP//5lVW///oqqv//+FVVgiL/ZoF+46LBYv/BC5mZgX3SIsFuf//nMZnBc//AFAERP8AZFVV/wAoAiL/AISqqosI/wB/VVWL/wBkf////9nTNP8ASaqq//+zpmcI/wBJqqr//7OmZ/8AJNVV//+Ve7yL//93URIIi//9buAABfuOiwUO+gTQ/wBFzMwV5P8AxzMzBf8ASqqq///Eqqv/AFRVVf//4lVW6YsI/wBhVVWL/wAwqqr/ACKVVYv/AEUqqgiL/wAokRH///FVVv8AIUAA///iqqv/ABnu7gj//+Kqq/8AGe7uUv8AHp3d//+rVVb/ACNMzAj//0dVVv8ATJ3d//+jqqv/AGtMzIv/AIn7uwiL/wBcpmb/ACNVVf8ASCZm/wBGqqr/ADOmZgj/AEaqqv8AM6qq/wBaVVX/ABnVVfcCiwj/AG9VVYv/AGiqqnLtWQhD//89zM0F///JVVb/AC6qqj//ABdVVf//nqqriwj//6iqq4v//9RVVv//3WzNi///utmaCIv//+S7vP8ADlVV///nZEX/AByqqv//6gzNCP8AHKqq///qERL/AD1VVf//4ozN6f//2wiJCOn//9sIif8AQ6qq///TMRL/AClVVf//y1maCP8AKVVV///LWZr/ABSqqv//wFmai///tVmaCIv//5yu7///2yqr//+x2Zr//7ZVVv//xwRFCP//tlVW///HBEX//5vVVv//44Ij//+BVVaLCP//uKqri///xtVW/wAF1VVg/wALqqoIYP8AC6qq///I1Vb/ABfVVf//vKqr/wAj//8IDhwEvPnQixWL/wKUJmYFi/8AQgRE///rVVb/ADUCIv//1qqrswj//9aqq/8AKAREVf8AFAIi//+9VVaLCP//1qqri///1lVW///00zRh///ppmcIYf//6aqrbf//5oAAef//41VWCIv//P7TNAX7kosFi/8FvZmZBfeSxwWL//3xkzQF/wBAqqr/ADqu7uT/AB1Xd/8AcVVViwj3Govz///a0zTV//+1pmcI1f//taZnsP//lXu8i///dVESCIv//WvgAAX7j4sFDhwEp/gB/wAbxmYVi//+P2zNBfuOiwWL/wXTMzMF946LBYv//7jZmgX/AD6qqv8APUzM2P8AHqZm/wBbVVWLCP8BVVVVi/8Aqqqq//9EGZqL//6IMzQIi///UMRF///Q1Vb//3kTNP//oaqr//+hYiMI//+hqqv//6FiI///fyqr///QsRL//1yqq4sI//+xVVaL//+4VVb/AA+oiP//v1VW/wAfUREIi/8DDYAAFYv//c2mZwX/AC1VVf//22IjwP//7bES/wA8qqqLCP8Ac1VVi/8AUtVV/wAbd3f/ADJVVf8ANu7uCP8AMlVV/wA27u7/ABkqqv8AVru7i/8AdoiICIv/AH6ERHL/AFkO7ln/ADOZmQhZ/wAznd3//61VVv8AGc7u//+MqquLCE+L///Kqqv//+ixEv//0VVW///RYiMIDvj8DhwFIvhvixX72YsFi/8FuDMzBf8Az1VV/wAHVVX/AIJVVf8AA6qq/wA1VVWLCP8A1VVVi/8AqSqq///Bfd73Ef//gvu8CPcR//+C+7z/AD6AAP//WiRFi///MUzNCIv//fFERf//AlVW//74oiP//gSqq4sIShwE1RWL//wYMzQFtYf/AC1VVYn/ADCqqosI/wCDVVWL/wBm1VX/AC+oiP8ASlVV/wBfUREI/wBKVVX/AF9REf8AJSqq/wCFTu6L/wCrTMwIi/8BOURE//9uVVb/AJyiIv/+3Kqriwhvi///2FVW///9qqv//8yqq///+1VWCA76y/jX///szM0VMYsF/Hj/BEGZmQX3posF95T//XOZmgX3p/8CjGZmBfediwX8hP/7vmZnBQ4cBt8cBV+LFYv5MwWL/wCMqqpM/wBGVVX7EosI///aqquLZ4D//91VVnUI///dVVZ1///nqqv//+aqq33//+NVVgiL/ZkF+46LBYv5WgWL/wA0qqr//++qq/8AKdVV///fVVaqCP//31VWql3/AA+AAP//xKqriwj//+Cqq4v//93VVv//9FVWZv//6KqrCGb//+iqq///5Sqr///mVVb//+9VVm8Ii/2WBfuOiwWL/wQuZmYF90CLBb7//6LGZwX/AEVVVf8ATARE/wBZqqr/ACYCIvcCiwj3Iov2///ZUzTT//+ypmcI/wAfVVX/ACNVVf8AK6qq/wAcKqrDoAjD/wAVBETD/wAKgiLDiwj/AHdVVYv/AFzVVf//3dM0/wBCVVX//7umZwj/AEJVVf//u6qr/wAhKqr//6ImZ4v//4iiIwiL//084AAF+46LBQ4cBLD4LvivFYv8rwX7mIsFi/8FuDMzBf8ArVVV/wAHVVX/AGVVVf8AA6qq/wAdVVWLCP8A51VVi/8AqSqq///cfd72//+4+7wI9v//uPu8/wA1gAD//5EkRYv//2lMzQiL//6v7u/7Wv//V/d4/CCLCP//4qqri///2Kqr/wACVVX//86qq/8ABKqqCIv5UBWL//4rMzQFt///+1VW/wAiqqr///2qq/8AGVVViwj/AHaqqov/AFaqqv8AE9Mz/wA2qqr/ACemZgj/ADaqqv8AJ6Zm/wAbVVX/AEB5mYv/AFlMzAiL/wCX7u7//4Wqq/8AS/d3//8LVVaLCP//5Kqri///5aqr///+VVb//+aqq////KqrCA75/vmG+doV///TVVb/AB1VVVr/AA6qqv//yqqriwhRi///zIAA///lqqte///LVVYIXv//y1VW///pgAD//7+qq4s/CIv89gX7josFi/8ELmZmBfeOiwWL//+exmcF0f8ATq7u6P8AJ1d39wiLCP8AVVVVi/8AQVVVfv8ALVVVcQgh//8pzM0FDvqq+mP/A9ozMxUg//9EzM0F///FVVb/ADdVVf//sVVW/wAbqqr//51VVosI//+hVVaL//+1Kqv//+CKq1T//8EVVghU///BGZr//+SAAP//qPd4i///kNVWCIv//x+mZ/b//4/TNPdqiwj/AFyqqov/AFGqqv8AHqqq/wBGqqr/AD1VVQjn//86zM0F//+3VVb//9Kqq///wIAA///jVVb//8mqq38I///Jqqt///+/1Vb///oAAEGLCP//Wqqri///fYAB/wAwJET//6BVVv8AYEiICP//oFVW/wBgSIj//9Aqq/8AhcIii/8Aqzu7CIv/AKiVVf8ANFVV/wCIQiL/AGiqqv8AZ+7uCP8AaKqq/wBn8zP/AI6qqv8AM/mZ/wC0qqqLCP8AfKqqi/8AbFVVaOdFCA74zfcvixWL/wW5mZkF95iLBYv/+kZmZwX7mIsFDhwF9RwF7IsV+5CLBfss/wMVmZkF+7v//NWZmgUuiwX7u/8DKmZmBfsy//zqZmcF+4+LBfe7/wW5mZkF9x6LBffR//wjmZoF98r/A9xmZgX3HYsF97//+kZmZwUOHAV2+nWLFYv5KAX824sFi/0oBfuYiwWL/wW5mZkF95iLBYv//cGZmgX424sFi/8CPmZmBfeViwWL//pGZmcF+5WLBQ4cBKP5zIsVi/8AQcAABf//61VW///pWZpo///sLM3//86qq3oI///Oqqv//+8ERVj///eCI///y1VWiwj//2qqq4v//4qAAf8AL07u//+qVVb/AF6d3Qj//6pVVv8AXp3d///VKqv/AIPszIv/AKk7uwiL/wCpQAD/ADEqqv8AicIi/wBiVVX/AGpERAj/AGJVVf8AakiI/wB7Kqr/ADUkRPcoiwj/AFFVVYvV///vV3j/AEKqqv//3q7vCIv/AaxgAAX3jscFi//6BmZnBfuOiwWL/wMvRmYV///Kqqv/ACqd3f//yFVW/wAVTu5Riwgniz7//+GIiVX//8MREghV///DFVZw//+omZqL//+OHd4Ii///IZma/wBrVVX//5DMzf8A1qqqiwiji/8AHYAA/wAHKIiu/wAOUREIrv8ADlER/wAW1VX/AA57u/8ACqqq/wAOpmYIi/8CLlmZBQ76lsL//ux5mhX3Mv8Aw1mZBf8AV1VV//+vlVb/AGFVVf//18qr/wBrVVWLCNOL/wA7VVX/AAq93f8ALqqq/wAVe7sI/wAuqqr/ABV3d/8AF1VV/wAdhESL/wAlkREIi/8AP8AA///MVVb/AB/gAP//mKqriwhvi///1lVW///8mZr//8iqq///+TM0CP//yKqr///5MzT//9ZVVv///Jmab4sI+0CLNf8APZmZi/8AezMzCIv/ACNMzP8ADlVV/wAioAD/AByqqv8AIfMzCP8AHKqq/wAh93f/ACFVVf8AGPmZsf8AD/u7CPsO/wBPVVVO/wBwVVWL/wCRVVUIi/8Acqqqtf8AXtVV39YI3/8ASv///wBnVVX/ACWAAP8Aeqqqiwjri/8AUFVVef8AQKqqZwjt/wByzMwF90H//2LMzQX7C///qGZnBf8AKVVV///BVVb/ABSqqv//tgABi///qqqrCIv7Dv//2tVW//+egAD//7Wqq0II//+1qqtC//+iKqv//9uAAP//jqqriwh5i3P/AAGqqm3/AANVVQhikQX///tVVov//+4qq///+OAAbP//8cAACGz///HAAP//8IAA///xQACL///wwAAIi///5Xu8ov//8r3euYsI/wAUqqqL/wAiqqr/AAUREf8AMKqq/wAKIiII/wAwqqr/AAoiIv8AKaqq/wAFERH/ACKqqosI/wDzVVWL/wB5qqr//54XeIv//zwu7wiL//+Tu7z//89VVv//qvVW//+eqqv//8Iu7wj//56qq///wiqr//+Kqqv//+EVVv//dqqriwj7OIv//2uqq/8AMGzM//97VVb/AGDZmQj3jv8DyjmZFYv//8CzNP8AEYAA///NMRKu///Zru8Irv//2a7v/wAvKqr//+zXeP8AO1VViwj/ADtVVYv/AC2qqv8AEqiIq/8AJVERCKv/ACVREZv/ADNO7ov/AEFMzAiL/wA193f//+7VVv8ALaRE///dqqv/ACVREQj//92qq/8AJVER///TgAD/ABKoiP//yVVWiwj//8aqq4v//9FVVv//7gIjZ///3ARFCGf//9wERXn//9GxEov//8dd3ggOHATjHASC/wVqmZkVIP//KMzNBVHF//+iqquo//9/VVaLCPsOiyf//8zqqz3//5nVVgg9//+Z2Zpk//9+uZqL//9jmZoIi///Y5ma/wAkKqr//4PgAP8ASFVV//+kJmcI/wBIVVX//6Qqq/8AYIAA///SFVb/AHiqqosI9x6L9wD/ADFVVdn/AGKqqgj3Df//LczNBSH//49VVv//ZKqr///Hqqv//zNVVosI//8zVVaL//9hAAD/AENERP//jqqr/wCGiIgI//+Oqqv/AIaMzP//x1VW/wC3gACL/wDoczMIi/8A2Hd3/wA+1VX3Sf8Afaqq/wCRiIgI/wB9qqr/AJGIiP8AoNVV/wBIxET3WIsI9zyL/wCGVVX//92qq/8AZKqq//+7VVYIDhwEi/gu/wTSZmYVi//+qMzNBfh4iwWL//8izM0F/HiLBYv//kkzNAX5LIsFi///GMzNBf4wiwWL/wW5mZkF+juLBYv//xjMzQX9N4sFDhwFn9v/AumZmRWL/wDQjMz/ADkqqv8AsGZm/wByVVX/AJBAAAj/AHJVVf8AkERE/wCY1VX/AEgiIv8Av1VViwj/ANKqqov/AKEAAP//vrM0/wBvVVX//31mZwj/AG9VVf//fWZn/wA3qqr//0jERYv//xQiIwiL//8UHd7//8XVVv//RMIj//+Lqqv//3VmZwj//4uqq///dWqr//9a1Vb//7q1Vvtqiwj//ztVVov//2kqq/8ARKAAIv8AiUAACCL/AIlERP//y4AA/wC76IiL/wDujMwI96L////5mhWL//9U3d6o//97e7zF//+iGZoIxf//oh3e/wBUVVX//9EO7/8Abqqqiwj3Fov/AGMqqv8ALfER/wBEVVX/AFviIgj/AERVVf8AW+Zm/wAiKqr/AIWERIv/AK8iIgiL/wFW8zP//4FVVv8Aq3mZ//8CqquLCPsIizL//9GMzU3//6MZmghN//+jHd5s//+C+ZqL//9i1VYIDhwFVvrr///rMzQV/Vv/A5/gAAWL//x07M0F+46LBYv/BbmZmQX3EYsF+Uj//IsszQWL/wN00zMF946LBYv/+jGZmgUhiwUOHATj+X7/BNJmZhWL//stmZoF+5iLBYv/BNJmZgX8ZosFi/8A5zMzBRwEvYsFi///GMzNBfx7iwUO+qrb3RXr/wDpMzMF/wBmqqr//7gAAPBn/wBjVVWLCP8AmKqqi/8ATFVV/wA1MzOL/wBqZmYIi/8AMd3def8AL4qqZ/8ALTd3CGf/AC03d///tdVW/wAyvd3//4+qq/8AOERECP//j6qr/wA4RET//7RVVv8ALkiIZP8AJEzMCGT/ACRREW3/ACskRHb/ADH3dwh2/wAx+7v///WAAP8AN07ui/8APKIiCIv/AHFAAP8AKYAA/wBd7u7e/wBKnd0I3v8ASqIi/wBqgAD/ACVREfcWiwj/AKlVVYv/AHxVVf//4FVW/wBPVVX//8Cqqwg8//8fzM0F//+kqqv/AEFVVf//n6qr/wAgqqr//5qqq4sIT4v//9GAAP//8DVWav//4GqrCGr//+Bu7///74AA///W9VaL///Ne7wIi///rDu86P//qNd4907//6VzNAjt///QDM3/AEaqqv//093e/wArVVX//9eu7wj/ACtVVf//17M0rP//0QiJ/wAWqqr//8pd3gj/ABaqqv//yl3e/wALVVX//8Q1Vov//74MzQiL//+JZmf//9Eqq///nmRF//+iVVb//7NiIwj//6JVVv//s2Ij//+CgAD//9mxEv//Yqqriwj//3dVVov//4Sqq/8AI1VV+wL/AEaqqggOHAVq9yr/BbmZmRX3mIsFi//8H3maBYv//7Fd3qP//8AGZ7v//86u7wi7///OszTN///nWZrfiwjpi/8ASSqq/wAYJmb/ADRVVf8AMEzMCP8ANFVV/wAwURH/ABoqqv8AQiREi/8AU/d3CIv/A9uGZgX3mIsFi//8EEZnBYv//2ld3v//zYAA//+KBmcm//+qru8IJv//qrM0//95Kqv//9VZmv//V1VWiwj7Pov//3zVVv8AKaZm//+jqqv/AFNMzAj//6Oqq/8AU1ER///R1Vb/AHdO7ov/AJtMzAiL/wPuuZkFDhwEqfgu/wTSZmYVi//+qMzNBfiXiwWL//8izM0F/JeLBYv9MgX7mIsFi/8FuZmZBfpZiwWL//8YzM0F/VWLBQ761/j1//9TOZoV///lVVb//7iqq///xtVW///E1Vb//6hVVlwI//+oVVb//9D7vP//mdVW///ofd7//4tVVosIi/8A3TMzBf8AwKqqi/8AYFVV/wAwczOL/wBg5mYIi/8AQCZm///lVVb/AGIKqv//yqqr/wCD7u4I++P/Az6GZgX3l4sF97j//RyTNAX3m/8C42zMBfeXiwX8af/7JNM0BQ57m/g8mfdumZGbuZMG+4iL+IyR9xqLB3ub+DSX926XnZuzlQj7hov4hpL3F4sJrwr3HAsAAAAABmYAAAThAAAElwAAAloAAARBAAADKwAAAmIAAASFAAAEuAAAA3AAAAS8AAAEpwAAAmgAAAUiAAAENwAABt8AAASwAAADagAABBYAAAI5AAAF9QAABXYAAASjAAAEAgAABOMAAASLAAAFnwAABVYAAATjAAAEFgAABWoAAASpAAAEQwAA)format("opentype");font-display:swap;font-display:swap}.ps01{fill:#193f99}.ps00{fill:#4a4a4a}.ps20,.ps21,.ps22,.ps23,.ps24,.ps25{letter-spacing:0;word-spacing:0;font-family:fnt0;font-size:10px}.ps20,.ps21,.ps23,.ps24,.ps25{font-size:9px}.ps21,.ps23,.ps24,.ps25{font-family:fnt1;font-size:11px}.ps23,.ps24,.ps25{font-size:32px}.ps23,.ps24{font-family:fnt2;font-size:10px}.ps24{font-family:fnt3}'
  }
</style>
<clipPath id="clp1">
  <path d="M0 0h612v792H0z" />
</clipPath>
<g clipPath="url(#clp1)" transform="matrix(1 0 0 -1 0 792)">
  <image
    xlinkHref="data:image/png;base64, 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"
    width={1}
    height={1}
    imageRendering="optimizeSpeed"
    preserveAspectRatio="none"
    transform="matrix(611.896 0 0 -99.981 0 791.999)"
  />
  <g transform="scale(1.342)">
    <clipPath id="clp2">
      <path d="M0 0h459v590.1H0z" />
    </clipPath>
    <g clipPath="url(#clp2)">
      <text transform="matrix(.745 0 0 -.745 133.3 494.41)">
        <tspan xmlSpace="preserve" className="ps00 ps20">
          {"example@example.com"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 206.597 494.41)">
        <tspan className="ps00 ps20">{"|"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 214.374 494.41)">
        <tspan xmlSpace="preserve" className="ps00 ps20">
          {"(555) 555-5555"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 261.206 494.41)">
        <tspan className="ps00 ps20">{"|"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 268.982 494.41)">
        <tspan xmlSpace="preserve" x="0,5.886" className="ps00 ps20">
          {"Hialeah"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 291.612 494.41)">
        <tspan xmlSpace="preserve" x="0,3.303" className="ps00 ps20">
          {", "}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 296.09 494.41)">
        <tspan xmlSpace="preserve" className="ps00 ps20">
          {"FL"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 305.03 494.41)">
        <tspan className="ps00 ps20">{"3"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 308.55 494.41)">
        <tspan className="ps00 ps20">{"3"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 312.07 494.41)">
        <tspan className="ps00 ps20">{"0"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 315.59 494.41)">
        <tspan className="ps00 ps20">{"1"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 319.111 494.41)">
        <tspan className="ps00 ps20">{"3"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 448.593)">
        <tspan xmlSpace="preserve" className="ps01 ps21">
          {"SUMMARY\xA0STATEMENT"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 429.968)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {
            "Ambitious Carpenter at taking on multiple projects at once.\xA0Experience"
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 419.538)">
        <tspan xmlSpace="preserve" x="0,7.44" className="ps00 ps22">
          {
            "with complete home construction,\xA0remodels\xA0and renovations. Skilled at"
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 409.108)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {
            "taking on\xA0unique projects. Successful at providing\xA0clients\xA0with\xA0both"
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 398.678)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {"technical skill and creative insight."}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 375.583)">
        <tspan xmlSpace="preserve" className="ps01 ps21">
          {"SUMMARY\xA0OF\xA0QUALIFICATIONS"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 260.853)">
        <tspan xmlSpace="preserve" className="ps01 ps21">
          {"PROFESSIONAL SKILLS"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 242.228)">
        <tspan xmlSpace="preserve" className="ps00 ps23">
          {"Relationship\xA0Development"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 179.648)">
        <tspan xmlSpace="preserve" className="ps00 ps23">
          {"Processes\xA0Improvement"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 106.638)">
        <tspan xmlSpace="preserve" className="ps00 ps23">
          {"Materials\xA0Handling"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 448.593)">
        <tspan xmlSpace="preserve" className="ps01 ps21">
          {"SKILLS"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 333.863)">
        <tspan xmlSpace="preserve" className="ps01 ps21">
          {"WORK\xA0HISTORY"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 315.238)">
        <tspan xmlSpace="preserve" className="ps00 ps23">
          {"CECO CONCRETE CONSTRUCTION"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 418.075 315.238)">
        <tspan className="ps00 ps22">{"."}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 304.808)">
        <tspan xmlSpace="preserve" x="0,6.54,9.39" className="ps00 ps22">
          {"Hialeah"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 329.104 304.808)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {",\xA0"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 334.086 304.808)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {"Florida"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 294.378)">
        <tspan xmlSpace="preserve" className="ps00 ps24">
          {"Carpenter"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 340.13 294.378)">
        <tspan xmlSpace="preserve" x="0,3.01" className="ps00 ps24">
          {"\xA0|"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 350.765 294.378)">
        <tspan xmlSpace="preserve" className="ps00 ps24">
          {"03/2017"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 378.143 294.378)">
        <tspan xmlSpace="preserve" className="ps00 ps24">
          {"\xA0- "}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 385.37 294.378)">
        <tspan xmlSpace="preserve" className="ps00 ps24">
          {"Current"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 275.008)">
        <tspan xmlSpace="preserve" className="ps00 ps23">
          {"Pronto\xA0Home\xA0Repairs"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 377.566 275.008)">
        <tspan className="ps00 ps22">{"."}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 382.548 275.008)">
        <tspan xmlSpace="preserve" x="0,6.54,9.39" className="ps00 ps22">
          {"Hialeah"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 407.692 275.008)">
        <tspan className="ps00 ps22">{","}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 264.578)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {"Florida"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 254.148)">
        <tspan xmlSpace="preserve" x="0,7.61" className="ps00 ps24">
          {"Maintenance Repair Worker\xA0"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 401.583 254.148)">
        <tspan className="ps00 ps24">{"|"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 243.718)">
        <tspan xmlSpace="preserve" className="ps00 ps24">
          {"02/2014"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 331.339 243.718)">
        <tspan xmlSpace="preserve" className="ps00 ps24">
          {"\xA0- "}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 338.565 243.718)">
        <tspan xmlSpace="preserve" className="ps00 ps24">
          {"02/2017"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 220.623)">
        <tspan xmlSpace="preserve" x="0,6.523" className="ps01 ps21">
          {"EDUCATION"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 201.998)">
        <tspan xmlSpace="preserve" className="ps00 ps23">
          {"Florida National\xA0University"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 191.568)">
        <tspan xmlSpace="preserve" x="0,6.54" className="ps00 ps22">
          {"Hialeah,FL"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 177.413)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {"Associate\xA0of\xA0Science"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 371.634 177.413)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {":\xA0"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 376.616 177.413)">
        <tspan xmlSpace="preserve" x="0,5.98" className="ps00 ps22">
          {"Carpentry"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 356.958)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {
            "Experienced and versatile\xA0in\xA0carpentry and woodworking with a"
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 346.528)">
        <tspan xmlSpace="preserve" x="0,5.57" className="ps00 ps22">
          {
            "background in residential, commercial,\xA0and municipal construction"
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 336.098)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {
            "and remodeling to include framing,\xA0trim,\xA0windows, doors,\xA0and siding."
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 356.958)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 325.668)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {
            "In-depth knowledge of construction\xA0processes, including\xA0material"
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 315.238)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {"selection, tools, techniques, and equipment."}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 325.668)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 304.808)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {
            "Accurately read\xA0blueprints, project plans, and\xA0specifications;"
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 294.378)">
        <tspan xmlSpace="preserve" x="0,5.57" className="ps00 ps22">
          {
            "determine material needs, estimate costs, and prioritize tasks to"
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 283.948)">
        <tspan xmlSpace="preserve" x="0,8.3" className="ps00 ps22">
          {"minimize production delay."}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 304.808)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 231.798)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {
            "Facilitated harmonious working\xA0relationships with crew members to"
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 221.368)">
        <tspan xmlSpace="preserve" x="0,5.57" className="ps00 ps22">
          {"prevent\xA0problems and conflicts."}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 231.798)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 210.938)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {"Accepted feedback\xA0from foreman and\xA0journeyman carpenter,"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 200.508)">
        <tspan xmlSpace="preserve" x="0,2.85" className="ps00 ps22">
          {"implementing suggestions\xA0into\xA0later work."}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 210.938)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 190.078)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {
            "Identified\xA0product\xA0defects\xA0and brought to job\xA0foreman\xA0for resolution."
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 190.078)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 169.218)">
        <tspan xmlSpace="preserve" x="0,2.78" className="ps00 ps22">
          {
            "Interpreted\xA0specifications\xA0and construction drawings to understand"
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 158.788)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {"tasks necessary to complete each\xA0job."}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 169.218)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 148.358)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {
            "Planned\xA0projects by identifying necessary equipment, tools, and"
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 137.928)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {"required assistance."}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 148.358)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 127.498)">
        <tspan xmlSpace="preserve" x="0,5.98" className="ps00 ps22">
          {"Cut materials according to specifications in preparation for"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 117.068)">
        <tspan xmlSpace="preserve" x="0,2.85" className="ps00 ps22">
          {"installation."}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 127.498)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 96.208)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {
            "Installed and\xA0repaired\xA0woodwork, millwork and cabinetry under"
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 85.778)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {"supervision of master carpenter."}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 96.208)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 75.348)">
        <tspan xmlSpace="preserve" x="0,8.52" className="ps00 ps22">
          {
            "Worked with\xA0master carpenters\xA0to\xA0install decks\xA0for both\xA0residential"
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 64.918)">
        <tspan xmlSpace="preserve" x="0,5.25" className="ps00 ps22">
          {"and commercial customers."}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 75.348)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 54.488)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {
            "Installed structures\xA0and fixtures,\xA0such\xA0as windows, doors, framing,"
          }
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 37.25 44.058)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {"trimming, siding, and\xA0molding."}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 27.565 54.488)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 313.645 429.968)">
        <tspan xmlSpace="preserve" x="0,5.98" className="ps00 ps22">
          {"Carpentry techniques"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 429.968)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 313.645 419.538)">
        <tspan xmlSpace="preserve" x="0,5.98" className="ps00 ps22">
          {"Construction drawing"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 419.538)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 313.645 409.108)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {"Drywalling"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 409.108)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 313.645 398.678)">
        <tspan xmlSpace="preserve" x="0,5.98" className="ps00 ps22">
          {"Custom cabinetry expert"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 398.678)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 313.645 388.248)">
        <tspan xmlSpace="preserve" x="0,6.38" className="ps00 ps22">
          {"New construction\xA0and\xA0renovation"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 388.248)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 313.645 377.818)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {"Basic electrical\xA0knowledge"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 377.818)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 313.645 367.388)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {"Roofing\xA0expert"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 367.388)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 313.645 356.958)">
        <tspan xmlSpace="preserve" className="ps00 ps22">
          {"Plumbing knowledge"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 303.96 356.958)">
        <tspan className="ps00 ps22">{"\u25CF"}</tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 160.017 527.19)">
        <tspan xmlSpace="preserve" className="ps00 ps25">
          {"Mack"}
        </tspan>
      </text>
      <text transform="matrix(.745 0 0 -.745 227.662 527.19)">
        <tspan xmlSpace="preserve" className="ps00 ps25">
          {"Reese"}
        </tspan>
      </text>
    </g>
  </g>
</g>
</svg>
     

    default:
      break;
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
