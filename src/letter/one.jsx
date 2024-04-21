import React from "react";
import "./letter.scss";
import propTypes from "prop-types";

export function LetterOne() {
  return (
    <div style={{ margin: "50px" }}>
      <h4>小鸡毛惹小白生气啦</h4>
      <p>
        给小白道歉啦,小鸡毛晚上洗头发没有报告,蹲坑时间又很长,然后晚上讲话态度一点都不好,实在应该把pp崛起来给小白揍揍!
      </p>
      <p>小鸡毛很想小白,想着周末见不到心情也气气的,挺无奈的!</p>
      <p>
        晚上小鸡毛之所以问你要不要睡觉其实是想说,如果你还开着灯不睡觉的话,能不能陪陪我学习呀!
      </p>
      <p>又不好意思说,所以就给自己整毛躁啦</p>
      <p>给小鸡毛小本本上记下来,以后给小白揍屁屁,小白不生气奥!</p>
      <h5 style={{ marginLeft: "500px" }}>小白最好啦,小鸡毛真的很想你</h5>
      <h5 style={{ marginLeft: "500px" }}>
        小比丢,想你的小屁,每天困了的时候脑海中就会浮现你的小屁...
      </h5>
    </div>
  );
}

export function Two() {
  return (
    <div className="card">
      <div className="card-name">Letter Second</div>
      <div className="quote">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 330 307"
          length="80"
          width="80"
        >
          <path
            fill="currentColor"
            d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z"
          ></path>
        </svg>
      </div>

      <div className="body-text">
        作为一个前端工程师,好像能用代码像你展示的东西很少,没有雕塑者的鬼斧神工,没有画家的栩栩如生,也不像做音乐的人写个歌哄你开心.
        <br />
        <p></p>
        我的代码最后也是一行行数字,用古老的二进制语言说一遍遍的我爱你
      </div>
      <div className="author">
        - by CC <br /> <span>(for BiDiu)</span>
        <br />
        <span>2024-04-20</span>{" "}
        <svg
          height=""
          width="18"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H24V24H0z" fill="none"></path>
          <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
        </svg>
      </div>
    </div>
  );
}

//父元素中使用的组件内自己添加的东西对于组件来说,就是props.children也就是插槽
export function Three(props) {
  return props.children.map((item, index) => {
    return <button key={index}>{item}</button>;
  });
}
//没用props给它传数据的情况下,就会使用自己的defaultProps的值,作为展示的默认值
export function Four(props) {
  return (
    <>
      <div>我的名字是:{props.shuju.name}</div>
      <div>我已经{props.shuju.age}岁啦</div>
      <div>我是一个{props.shuju.gender}娃娃</div>
      <button onChange={props.handleChange(3)}> an </button>
    </>
  );
}
// Four.defaultProps = {
//   shuju: {
//     name: "暂无",
//     age: "暂无",
//     gender: "未知",
//   },
// };

//规定,验证使用的数据类型
Four.propTypes = {
  shuju: propTypes.shape({
    name: propTypes.string,
    age: propTypes.number,
    gender: propTypes.oneOf(["男", "女", "other"]),
  }),
};

export function Five(props) {
  return (
    <>
      <div>letter Fth</div>
      <h4>
        今天学一个简单的传递属性写例子写了很久,晚上一直找不到bug在哪,问了好些ai,最后才找到问题在哪.
      </h4>
      <h4>
        你周五一声不吭的来杭州给我惊喜,给我穿好袜子,我做饭的时候也帮忙来来会会,给我摸小屁股,给我吃烤肉,你给我一切我希望得到的爱情,我一定给你,给我们创造一个更好的未来.
      </h4>
    </>
  );
}
