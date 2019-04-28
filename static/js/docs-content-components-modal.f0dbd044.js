(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./docs/content/components/modal.mdx":function(e,n,a){"use strict";a.r(n);var t,o,r=a("./node_modules/react/index.js"),m=a.n(r),s=a("./node_modules/@mdx-js/tag/dist/index.js"),l=a("./node_modules/docz/dist/index.m.js"),i=a("./node_modules/prop-types/index.js"),c=a.n(i),p=a("./node_modules/react-emotion/dist/index.esm.js"),d=a("./node_modules/emotion-theming/dist/index.esm.js"),u=a("./src/components/Card/index.js"),g=(t=["\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    min-width: initial;\n    position: relative;\n  "],o=["\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    min-width: initial;\n    position: relative;\n  "],Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(o)}})));var h=Object(p.c)(u.a,{target:"ed36pj70"})(function(e){var n=e.theme;return Object(p.a)("width:100%;",n.mq.untilKilo(g),";")},";");h.defaultProps=u.a.defaultProps;var M=function(e){var n=function(e,n){var a={};for(var t in e)n.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t]);return a}(e,[]);return m.a.createElement(h,Object.assign({shadow:u.a.TRIPLE},n))};M.propTypes={children:c.a.node.isRequired};var T=Object(d.b)(M),E=a("./src/components/CloseButton/index.js"),f=a("./src/util/shared-prop-types.js");var D=Object(p.c)("header",{target:"ep23cf90"})(function(e){var n=e.theme;return Object(p.a)("label:card__header;align-items:center;display:flex;justify-content:space-between;margin-bottom:",n.spacings.giga,";")},";",function(e){return!e.children[0]&&Object(p.a)("label:card__header--no-heading;justify-content:flex-end;")},";"),X=function(e){var n=e.onClose,a=e.children,t=e.labelCloseButton,o=function(e,n){var a={};for(var t in e)n.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t]);return a}(e,["onClose","children","labelCloseButton"]);return m.a.createElement(D,o,a,n&&m.a.createElement(E.a,{onClick:n,label:t}))};X.propTypes={children:f.a,onClose:c.a.func,labelCloseButton:c.a.string},X.defaultProps={onClose:null,children:null};var b=X,N=a("./src/components/Heading/index.js"),y=function(e){var n=e.title,a=e.onClose,t=e.labelCloseButton;return m.a.createElement(b,{onClose:a,labelCloseButton:t},n&&m.a.createElement(N.a,{size:N.a.KILO,noMargin:!0},n))};y.propTypes={onClose:c.a.func,title:c.a.string.isRequired,labelCloseButton:c.a.string},y.defaultProps={onClose:null};var v=Object(d.b)(y),j=a("./src/styles/constants.js"),C=x(["\n      justify-content: flex-end;\n    "],["\n      justify-content: flex-end;\n    "]),w=x(["\n    align-items: center;\n    display: flex;\n    margin-top: ",";\n  "],["\n    align-items: center;\n    display: flex;\n    margin-top: ",";\n  "]);function x(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var O=[j.b.LEFT,j.b.RIGHT],k=Object(p.c)("footer",{target:"eunioq60"})(function(e){var n=e.theme;return Object(p.a)("label:card__footer;display:block;width:100%;margin-top:",n.spacings.giga,";",n.mq.kilo(w,n.spacings.mega),";")},function(e){var n=e.theme;return e.align===j.b.RIGHT&&Object(p.a)("label:card__footer--right;",n.mq.kilo(C),";")});k.LEFT=j.b.LEFT,k.RIGHT=j.b.RIGHT,k.propTypes={children:c.a.element,align:c.a.oneOf(O)},k.defaultProps={align:k.RIGHT};var _=k,P=a("./src/components/Text/index.js"),B=a("./src/components/Button/index.js"),I=a("./docs/utils/Wrapper.js");n.default=function(e){var n=e.components;!function(e,n){var a={};for(var t in e)n.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}(e,["components"]);return m.a.createElement(s.MDXTag,{name:"wrapper",components:n},m.a.createElement(s.MDXTag,{name:"h1",components:n,props:{id:"modal"}},m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#modal"}},m.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Modal"),m.a.createElement(s.MDXTag,{name:"p",components:n},"Modals are floating cards which overlay the primary UI. All content in a single\nmodal should be related to completing one single task. Modals are heavy UI\nelements which obscure the primary user interface \u2014 avoid them where possible."),m.a.createElement(l.d,{__position:0,__code:'<ModalWrapper>\n  <ModalHeader onClose={() => {}} title="Export transactions" />\n  <Text>Are you sure you want to export your transactions?</Text>\n  <ModalFooter>\n    <Button primary>Export</Button>\n  </ModalFooter>\n</ModalWrapper>',wrapper:I.a},m.a.createElement(T,null,m.a.createElement(v,{onClose:function(){},title:"Export transactions"}),m.a.createElement(P.a,null,"Are you sure you want to export your transactions?"),m.a.createElement(_,null,m.a.createElement(B.a,{primary:!0},"Export")))),m.a.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"when-to-use-it"}},m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#when-to-use-it"}},m.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"When to use it"),m.a.createElement(s.MDXTag,{name:"p",components:n},"Use it when you want the user to focus on a single and perhaps more complex task"),m.a.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"usage-guidelines"}},m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#usage-guidelines"}},m.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Usage guidelines"),m.a.createElement(s.MDXTag,{name:"h4",components:n,props:{id:"general-guidelines"}},m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"h4",props:{"aria-hidden":!0,href:"#general-guidelines"}},m.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"General guidelines"),m.a.createElement(s.MDXTag,{name:"ul",components:n},m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Do")," use modals sparingly."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Do")," use modals when you want to isolate an action from the primary UI."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Do not")," draw a modal over another modal."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Do not")," fill a modal with content which has multiple end results."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Do not")," present a modal without a user prompting a modal (e.g. as a popup).")),m.a.createElement(s.MDXTag,{name:"h4",components:n,props:{id:"header-guidelines"}},m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"h4",props:{"aria-hidden":!0,href:"#header-guidelines"}},m.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Header guidelines"),m.a.createElement(s.MDXTag,{name:"ul",components:n},m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Do")," use concise yet descriptive headings that label the function of the specific modal."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Do not")," exclude headings from modals.")),m.a.createElement(s.MDXTag,{name:"h4",components:n,props:{id:"content-guidelines"}},m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"h4",props:{"aria-hidden":!0,href:"#content-guidelines"}},m.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Content guidelines"),m.a.createElement(s.MDXTag,{name:"ul",components:n},m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Do")," align text content to the left."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Do not")," have more than two columns of content.")),m.a.createElement(s.MDXTag,{name:"h4",components:n,props:{id:"footer-guidelines"}},m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"h4",props:{"aria-hidden":!0,href:"#footer-guidelines"}},m.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Footer guidelines"),m.a.createElement(s.MDXTag,{name:"p",components:n},"The modal footer contains CTA's which carry out an action on the entire modal."),m.a.createElement(s.MDXTag,{name:"ul",components:n},m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Do")," align modal CTA's to the right side of the footer."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"Do not"),' have more than one "Primary - Major" CTA.')),m.a.createElement(s.MDXTag,{name:"h2",components:n,props:{id:"usage-in-code"}},m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#usage-in-code"}},m.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Usage in code"),m.a.createElement(s.MDXTag,{name:"p",components:n},"There are a number of ways to use a modal in code. In some codebases, you\nmay opt to create a helper higher-order component that complements the\n",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ModalConsumer"),"."),m.a.createElement(s.MDXTag,{name:"h3",components:n,props:{id:"using-the-modal-provider-and-consumer"}},m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#using-the-modal-provider-and-consumer"}},m.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Using the modal provider and consumer"),m.a.createElement(s.MDXTag,{name:"p",components:n},"The benefit of using the modal provider and consumer is that the modal provider\ncan be delcared once at the application root, and you do not need to manage\nto open/closed state of the modal yourself."),m.a.createElement(s.MDXTag,{name:"pre",components:n},m.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"import React, { Component } from 'react';\nimport { ModalProvider, ModalConsumer, ModalWrapper } from '@sumup/circuit-ui';\n\nclass MyComponent extends Component {\n  trigger(setModal) {\n    setModal({\n      children: ({ onClose }) => (\n        <ModalWrapper>\n          I am in a modal! \n        </ModalWrapper> \n      ) \n    });\n  }\n\n  render() {\n    return (\n      <ModalProvider>\n        <ModalConsumer>\n          {({ setModal }) => (\n            <Button onClick={() => this.trigger(setModal)}>Trigger modal</Button>\n          )}\n        </ModalConsumer>\n      </ModalProvider>\n    );\n  }\n}\n")),m.a.createElement(s.MDXTag,{name:"ul",components:n},m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ModalWrapper")," This is the wrapper for the body of a modal."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ModalHeader")," This contains the title and the ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"X")," close button."),m.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(s.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"ModalFooter")," This component right-aligns its content.")),m.a.createElement(s.MDXTag,{name:"h3",components:n,props:{id:"embedding-the-modal-in-code"}},m.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#embedding-the-modal-in-code"}},m.a.createElement(s.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Embedding the modal in code"),m.a.createElement(s.MDXTag,{name:"p",components:n},"If you prefer to embed the code declaratively inside the component, you can\ndo it as such:"),m.a.createElement(s.MDXTag,{name:"pre",components:n},m.a.createElement(s.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"import React, { Component } from 'react';\nimport { Modal } from '@sumup/circuit-ui';\n\nclass Page extends Component {\n  constructor() {\n    this.state = { isModalOpen: false };\n  }\n\n  toggleModal = () => {\n    this.setState(state => ({ isModalOpen: !state.isModalOpen }));\n  }\n\n  render() {\n    return (\n      <div>\n        <a href=\"#\" onClick={() => this.toggleModal()}/>\n        {this.state.isModalOpen && (\n          <Modal>\n            <ModalHeader onClose={() => this.toggleModal()} title=\"Hello\"/>\n            The modal is open!\n          </Modal>\n        )}\n      </div>\n    );\n  }\n}\n")))}},"./src/components/Button/index.js":function(e,n,a){"use strict";var t=a("./src/components/Button/Button.js");n.a=t.a},"./src/components/Card/index.js":function(e,n,a){"use strict";var t=a("./src/components/Card/Card.js");n.a=t.a}}]);