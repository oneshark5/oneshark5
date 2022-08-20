import React from 'react'

export const IntroCard = (props) => {
  return (
    <div className={"introCard" + props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}><span className="cm-keyword">const</span> <span className="cm-def">person</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">pseudoName</span>: <span className="cm-string">"oneshark"</span>, &nbsp; </span></pre>
        {/* <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">lastname</span>: <span className="cm-string">"Edge"</span>,</span></pre> */}
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">age</span>: <span className="cm-string">"O ever youthful,O ever weeping"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">gender</span>: <span className="cm-string">"Male"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">hobbies</span>: [<span className="cm-string">"Basketball🏀"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-string">"Programming💻"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-string">"photography📷"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-string">"Fitness💪"</span>],</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">state</span>: <span className="cm-string">"Focusing"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">funFact</span>: <span className="cm-string">"sdrawkcab etirw nac I"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}>{"}"}</span></pre>
      </div>
    </div>
  )
}

export const LangCard = (props) => {
  return (
    <div className={"introCard" + props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}><span className="cm-keyword">const</span> <span className="cm-def">skills</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></pre>
        {/* <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Python</span> : <span className="cm-string">"Intermediate"</span>, &nbsp; &nbsp;</span></pre> */}
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">React</span>: <span className="cm-string">"Intermediate"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">NodeJs</span>: <span className="cm-string">"Tomorrow study"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Javascript</span>: <span className="cm-string">"Proficiency"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">CSS</span>: <span className="cm-string">"Proficiency"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">HTML</span>: <span className="cm-string">"Expert"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Git</span>: <span className="cm-string">"Clone"</span>,</span></pre>
        {/* <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Azure</span>: <span className="cm-string">"Intermediate"</span>,</span></pre> */}
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Mysql</span>: <span className="cm-string">"Beginner"</span>,</span></pre>
        {/* <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Unity</span>: <span className="cm-string">"Beginner"</span>,</span></pre> */}
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Fluent</span>: <span className="cm-string">"Expert"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Meshing</span>: <span className="cm-string">"Proficiency"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">ICEM</span>: <span className="cm-string">"Expert"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}>{"}"}</span></pre>
      </div>
    </div>
  )
}

export const SocialCard = (props) => {
  const stoprop = (e) => {
    e.stopPropagation();
  }

  return (
    <div className={"introCard" + props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}><span className="cm-keyword">const</span> <span className="cm-def">socialLinks</span> <span className="cm-operator">=</span> {"{"}</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">github</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://github.com/oneshark5"
            target="_blank">"github.com/oneshark5"</a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">blog</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://blog.oneshark.cn"
            target="_blank">"blog/oneshark"
          </a>
        </span></span>,</pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">leetcode</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://leetcode.cn/u/oneshark/"
            target="_blank">"leetcode.cn/u/oneshark"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">mail</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="mailto:oneshark5@163.com"
            target="_blank">"oneshark5@163.com"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">wechat</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href=""
            target="_blank">"oneshark5"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">red</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href=""
            target="_blank">"secret/of/shark"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">tiktok</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href=""
            target="_blank">"secret/of/shark"
          </a>
        </span></span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}>{"}"}</span></pre>
      </div>
    </div>
  )
}

export const ProjectCard = (props) => {
  return (
    <div className={"introCard" + props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}><span className="cm-keyword">const</span> <span className="cm-def">projects</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Blogs</span>: <span className="cm-string">"A blogging platform for shark"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-operator">+</span><span className="cm-string">"made in react &amp; Mysql"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">LowCode</span>: <span className="cm-string">"A Wysiwyg editor"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}>{" "}<span className="cm-tab" role="presentation" Cm-text="	">{" "}</span><span className="cm-tab" role="presentation" Cm-text="	">{"   "}</span> <span className="cm-operator">+</span><span className="cm-string">"made in React, scss &amp; mongoDB"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}>{" "}<span className="cm-tab" role="presentation" Cm-text="	">{" "}</span><span className="cm-tab" role="presentation" Cm-text="	">{"   "}</span> <span className="cm-operator">+</span><span className="cm-string">"At Bytedance youth camp with six friends"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Resume</span>:<span className="cm-string">"reactive layout"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}>{" "}<span className="cm-tab" role="presentation" Cm-text="	">{" "}</span><span className="cm-tab" role="presentation" Cm-text="	">{"   "}</span> &nbsp; <span className="cm-operator">+</span><span className="cm-string">"JS SCSS HTML"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}> &nbsp;<span className="cm-property">Account</span>: <span className="cm-string">"Online account"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}>{" "}<span className="cm-tab" role="presentation" Cm-text="	">{" "}</span><span className="cm-tab" role="presentation" Cm-text="	">{"   "}</span> &nbsp;<span className="cm-operator">+</span><span className="cm-string">"create react app"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{ paddingRight: '0.1px' }}>{"}"} <span className="cm-comment"></span></span></pre>
      </div>
    </div>
  )
}
