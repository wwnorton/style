"use strict";(self.webpackChunkguides_website=self.webpackChunkguides_website||[]).push([[341],{5318:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(7378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return t?a.createElement(k,i(i({ref:n},m),{},{components:t})):a.createElement(k,i({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8698:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var a=t(5773),r=t(808),o=(t(7378),t(5318)),i=["components"],l={slug:"react",title:"React Style Guide",sidebar_label:"React"},s=void 0,p={unversionedId:"react-style",id:"react-style",title:"React Style Guide",description:"W.W. Norton & Company recommends using the Airbnb React/JSX style guide.",source:"@site/docs/react-style.md",sourceDirName:".",slug:"/react",permalink:"/style/docs/react",editUrl:"https://github.com/wwnorton/style/edit/main/guides-website/docs/react-style.md",tags:[],version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1645393293,formattedLastUpdatedAt:"2/20/2022",frontMatter:{slug:"react",title:"React Style Guide",sidebar_label:"React"},sidebar:"docs",previous:{title:"Javascript",permalink:"/style/docs/javascript"},next:{title:"TypeScript",permalink:"/style/docs/typescript"}},m=[{value:"Basic Rules",id:"basic-rules",children:[],level:2},{value:"Class vs <code>React.createClass</code> vs stateless",id:"class-vs-reactcreateclass-vs-stateless",children:[],level:2},{value:"Mixins",id:"mixins",children:[],level:2},{value:"Naming",id:"naming",children:[],level:2},{value:"Declaration",id:"declaration",children:[],level:2},{value:"Alignment",id:"alignment",children:[],level:2},{value:"Quotes",id:"quotes",children:[],level:2},{value:"Spacing",id:"spacing",children:[],level:2},{value:"Props",id:"props",children:[],level:2},{value:"Refs",id:"refs",children:[],level:2},{value:"Parentheses",id:"parentheses",children:[],level:2},{value:"Tags",id:"tags",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2},{value:"Ordering",id:"ordering",children:[],level:2},{value:"<code>isMounted</code>",id:"ismounted",children:[],level:2}],c={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"W.W. Norton & Company recommends using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbnb/javascript/tree/master/react"},"Airbnb React/JSX style guide"),".")),(0,o.kt)("p",null,"This style guide is mostly based on the standards that are currently prevalent in JavaScript, although some conventions (i.e async/await or static class fields) may still be included or prohibited on a case-by-case basis. Currently, anything prior to stage 3 is not included nor recommended in this guide."),(0,o.kt)("h2",{id:"basic-rules"},"Basic Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Only include one React component per file.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"However, multiple ",(0,o.kt)("a",{parentName:"li",href:"https://facebook.github.io/react/docs/reusable-components.html#stateless-functions"},"Stateless, or Pure, Components")," are allowed per file. eslint: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless"},(0,o.kt)("inlineCode",{parentName:"a"},"react/no-multi-comp")),"."))),(0,o.kt)("li",{parentName:"ul"},"Always use JSX syntax."),(0,o.kt)("li",{parentName:"ul"},"Do not use ",(0,o.kt)("inlineCode",{parentName:"li"},"React.createElement")," unless you\u2019re initializing the app from a file that is not JSX."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/forbid-prop-types"))," will allow ",(0,o.kt)("inlineCode",{parentName:"li"},"arrays")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"objects")," only if it is explicitly noted what ",(0,o.kt)("inlineCode",{parentName:"li"},"array")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"object")," contains, using ",(0,o.kt)("inlineCode",{parentName:"li"},"arrayOf"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"objectOf"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"shape"),".")),(0,o.kt)("h2",{id:"class-vs-reactcreateclass-vs-stateless"},"Class vs ",(0,o.kt)("inlineCode",{parentName:"h2"},"React.createClass")," vs stateless"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you have internal state and/or refs, prefer ",(0,o.kt)("inlineCode",{parentName:"p"},"class extends React.Component")," over ",(0,o.kt)("inlineCode",{parentName:"p"},"React.createClass"),". eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/prefer-es6-class"))," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/prefer-stateless-function"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\nconst Listing = React.createClass({\n  // ...\n  render() {\n    return <div>{this.state.hello}</div>;\n  }\n});\n\n// good\nclass Listing extends React.Component {\n  // ...\n  render() {\n    return <div>{this.state.hello}</div>;\n  }\n}\n")),(0,o.kt)("p",{parentName:"li"},"And if you don\u2019t have state or refs, prefer normal functions (not arrow functions) over classes:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\nclass Listing extends React.Component {\n  render() {\n    return <div>{this.props.hello}</div>;\n  }\n}\n\n// bad (relying on function name inference is discouraged)\nconst Listing = ({ hello }) => (\n  <div>{hello}</div>\n);\n\n// good\nfunction Listing({ hello }) {\n  return <div>{hello}</div>;\n}\n")))),(0,o.kt)("h2",{id:"mixins"},"Mixins"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html"},"Do not use mixins"),"."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Why? Mixins introduce implicit dependencies, cause name clashes, and cause snowballing complexity. Most use cases for mixins can be accomplished in better ways via components, higher-order components, or utility modules.")))),(0,o.kt)("h2",{id:"naming"},"Naming"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Extensions"),": Use ",(0,o.kt)("inlineCode",{parentName:"p"},".jsx")," extension for React components. eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/jsx-filename-extension")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Filename"),": Use PascalCase for filenames. E.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"ReservationCard.jsx"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Reference Naming"),": Use PascalCase for React components and camelCase for their instances. eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/jsx-pascal-case"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\nimport reservationCard from './ReservationCard';\n\n// good\nimport ReservationCard from './ReservationCard';\n\n// bad\nconst ReservationItem = <ReservationCard />;\n\n// good\nconst reservationItem = <ReservationCard />;\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Component Naming"),": Use the filename as the component name. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"ReservationCard.jsx")," should have a reference name of ",(0,o.kt)("inlineCode",{parentName:"p"},"ReservationCard"),". However, for root components of a directory, use ",(0,o.kt)("inlineCode",{parentName:"p"},"index.jsx")," as the filename and use the directory name as the component name:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\nimport Footer from './Footer/Footer';\n\n// bad\nimport Footer from './Footer/index';\n\n// good\nimport Footer from './Footer';\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Higher-order Component Naming"),": Use a composite of the higher-order component\u2019s name and the passed-in component\u2019s name as the ",(0,o.kt)("inlineCode",{parentName:"p"},"displayName")," on the generated component. For example, the higher-order component ",(0,o.kt)("inlineCode",{parentName:"p"},"withFoo()"),", when passed a component ",(0,o.kt)("inlineCode",{parentName:"p"},"Bar")," should produce a component with a ",(0,o.kt)("inlineCode",{parentName:"p"},"displayName")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"withFoo(Bar)"),"."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Why? A component\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"displayName")," may be used by developer tools or in error messages, and having a value that clearly expresses this relationship helps people understand what is happening.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\nexport default function withFoo(WrappedComponent) {\n  return function WithFoo(props) {\n    return <WrappedComponent {...props} foo />;\n  }\n}\n\n// good\nexport default function withFoo(WrappedComponent) {\n  function WithFoo(props) {\n    return <WrappedComponent {...props} foo />;\n  }\n\n  const wrappedComponentName = WrappedComponent.displayName\n    || WrappedComponent.name\n    || 'Component';\n\n  WithFoo.displayName = `withFoo(${wrappedComponentName})`;\n  return WithFoo;\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Props Naming"),": Avoid using DOM component prop names for different purposes."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Why? People expect props like ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," to mean one specific thing. Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// bad\n<MyComponent style="fancy" />\n\n// bad\n<MyComponent className="fancy" />\n\n// good\n<MyComponent variant="fancy" />\n')))),(0,o.kt)("h2",{id:"declaration"},"Declaration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Do not use ",(0,o.kt)("inlineCode",{parentName:"p"},"displayName")," for naming components. Instead, name the component by reference."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\nexport default React.createClass({\n  displayName: 'ReservationCard',\n  // stuff goes here\n});\n\n// good\nexport default class ReservationCard extends React.Component {\n}\n")))),(0,o.kt)("h2",{id:"alignment"},"Alignment"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Follow these alignment styles for JSX syntax. eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/jsx-closing-bracket-location"))," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/jsx-closing-tag-location"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// bad\n<Foo superLongParam="bar"\n     anotherSuperLongParam="baz" />\n\n// good\n<Foo\n  superLongParam="bar"\n  anotherSuperLongParam="baz"\n/>\n\n// if props fit in one line then keep it on the same line\n<Foo bar="bar" />\n\n// children get indented normally\n<Foo\n  superLongParam="bar"\n  anotherSuperLongParam="baz"\n>\n  <Quux />\n</Foo>\n\n// bad\n{showButton &&\n  <Button />\n}\n\n// bad\n{\n  showButton &&\n    <Button />\n}\n\n// good\n{showButton && (\n  <Button />\n)}\n\n// good\n{showButton && <Button />}\n')))),(0,o.kt)("h2",{id:"quotes"},"Quotes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Always use double quotes (",(0,o.kt)("inlineCode",{parentName:"p"},'"'),") for JSX attributes, but single quotes (",(0,o.kt)("inlineCode",{parentName:"p"},"'"),") for all other JS. eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/jsx-quotes"},(0,o.kt)("inlineCode",{parentName:"a"},"jsx-quotes"))),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Why? Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\n<Foo bar='bar' />\n\n// good\n<Foo bar=\"bar\" />\n\n// bad\n<Foo style={{ left: \"20px\" }} />\n\n// good\n<Foo style={{ left: '20px' }} />\n")))),(0,o.kt)("h2",{id:"spacing"},"Spacing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Always include a single space in your self-closing tag. eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/docs/rules/no-multi-spaces"},(0,o.kt)("inlineCode",{parentName:"a"},"no-multi-spaces")),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/jsx-tag-spacing"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\n<Foo/>\n\n// very bad\n<Foo                 />\n\n// bad\n<Foo\n />\n\n// good\n<Foo />\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Do not pad JSX curly braces with spaces. eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/jsx-curly-spacing"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\n<Foo bar={ baz } />\n\n// good\n<Foo bar={baz} />\n")))),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Always use camelCase for prop names."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// bad\n<Foo\n  UserName="hello"\n  phone_number={12345678}\n/>\n\n// good\n<Foo\n  userName="hello"\n  phoneNumber={12345678}\n/>\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Omit the value of the prop when it is explicitly ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/jsx-boolean-value"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\n<Foo\n  hidden={true}\n/>\n\n// good\n<Foo\n  hidden\n/>\n\n// good\n<Foo hidden />\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Always include an ",(0,o.kt)("inlineCode",{parentName:"p"},"alt")," prop on ",(0,o.kt)("inlineCode",{parentName:"p"},"<img>")," tags. If the image is presentational, ",(0,o.kt)("inlineCode",{parentName:"p"},"alt")," can be an empty string or the ",(0,o.kt)("inlineCode",{parentName:"p"},"<img>")," must have ",(0,o.kt)("inlineCode",{parentName:"p"},'role="presentation"'),". eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md"},(0,o.kt)("inlineCode",{parentName:"a"},"jsx-a11y/alt-text"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// bad\n<img src="hello.jpg" />\n\n// good\n<img src="hello.jpg" alt="Me waving hello" />\n\n// good\n<img src="hello.jpg" alt="" />\n\n// good\n<img src="hello.jpg" role="presentation" />\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Do not use words like "image", "photo", or "picture" in ',(0,o.kt)("inlineCode",{parentName:"p"},"<img>")," ",(0,o.kt)("inlineCode",{parentName:"p"},"alt")," props. eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md"},(0,o.kt)("inlineCode",{parentName:"a"},"jsx-a11y/img-redundant-alt"))),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Why? Screenreaders already announce ",(0,o.kt)("inlineCode",{parentName:"p"},"img")," elements as images, so there is no need to include this information in the alt text.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// bad\n<img src="hello.jpg" alt="Picture of me waving hello" />\n\n// good\n<img src="hello.jpg" alt="Me waving hello" />\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use only valid, non-abstract ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria/#usage_intro"},"ARIA roles"),". eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md"},(0,o.kt)("inlineCode",{parentName:"a"},"jsx-a11y/aria-role"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// bad - not an ARIA role\n<div role="datepicker" />\n\n// bad - abstract ARIA role\n<div role="range" />\n\n// good\n<div role="button" />\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Do not use ",(0,o.kt)("inlineCode",{parentName:"p"},"accessKey")," on elements. eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md"},(0,o.kt)("inlineCode",{parentName:"a"},"jsx-a11y/no-access-key"))),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Why? Inconsistencies between keyboard shortcuts and keyboard commands used by people using screenreaders and keyboards complicate accessibility.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// bad\n<div accessKey="h" />\n\n// good\n<div />\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Avoid using an array index as ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," prop, prefer a stable ID. eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/no-array-index-key"))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Why? Not using a stable ID ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318"},"is an anti-pattern")," because it can negatively impact performance and cause issues with component state.")),(0,o.kt)("p",null,"We don\u2019t recommend using indexes for keys if the order of items may change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\n{todos.map((todo, index) =>\n  <Todo\n    {...todo}\n    key={index}\n  />\n)}\n\n// good\n{todos.map(todo => (\n  <Todo\n    {...todo}\n    key={todo.id}\n  />\n))}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Always define explicit defaultProps for all non-required props."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Why? propTypes are a form of documentation, and providing defaultProps means the reader of your code doesn\u2019t have to assume as much. In addition, it can mean that your code can omit certain type checks.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\nfunction SFC({ foo, bar, children }) {\n  return <div>{foo}{bar}{children}</div>;\n}\nSFC.propTypes = {\n  foo: PropTypes.number.isRequired,\n  bar: PropTypes.string,\n  children: PropTypes.node,\n};\n\n// good\nfunction SFC({ foo, bar, children }) {\n  return <div>{foo}{bar}{children}</div>;\n}\nSFC.propTypes = {\n  foo: PropTypes.number.isRequired,\n  bar: PropTypes.string,\n  children: PropTypes.node,\n};\nSFC.defaultProps = {\n  bar: '',\n  children: null,\n};\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use spread props sparingly."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Why? Otherwise you\u2019re more likely to pass unnecessary props down to components. And for React v15.6.1 and older, you could ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html"},"pass invalid HTML attributes to the DOM"),".")),(0,o.kt)("p",{parentName:"li"},"Exceptions:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"HOCs that proxy down props and hoist propTypes"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function HOC(WrappedComponent) {\n  return class Proxy extends React.Component {\n    Proxy.propTypes = {\n      text: PropTypes.string,\n      isLoading: PropTypes.bool\n    };\n\n    render() {\n      return <WrappedComponent {...this.props} />\n    }\n  }\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Spreading objects with known, explicit props. This can be particularly useful when testing React components with Mocha\u2019s beforeEach construct."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export default function Foo {\n  const props = {\n    text: '',\n    isPublished: false\n  }\n\n  return (<div {...props} />);\n}\n")),(0,o.kt)("p",{parentName:"li"},"Notes for use:\nFilter out unnecessary props when possible. Also, use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/prop-types-exact"},"prop-types-exact")," to help prevent bugs."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\nrender() {\n  const { irrelevantProp, ...relevantProps } = this.props;\n  return <WrappedComponent {...this.props} />\n}\n\n// good\nrender() {\n  const { irrelevantProp, ...relevantProps } = this.props;\n  return <WrappedComponent {...relevantProps} />\n}\n")))),(0,o.kt)("h2",{id:"refs"},"Refs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Always use ref callbacks. eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/no-string-refs"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// bad\n<Foo\n  ref="myRef"\n/>\n\n// good\n<Foo\n  ref={(ref) => { this.myRef = ref; }}\n/>\n')))),(0,o.kt)("h2",{id:"parentheses"},"Parentheses"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Wrap JSX tags in parentheses when they span more than one line. eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/jsx-wrap-multilines"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// bad\nrender() {\n  return <MyComponent variant="long body" foo="bar">\n           <MyChild />\n         </MyComponent>;\n}\n\n// good\nrender() {\n  return (\n    <MyComponent variant="long body" foo="bar">\n      <MyChild />\n    </MyComponent>\n  );\n}\n\n// good, when single line\nrender() {\n  const body = <div>hello</div>;\n  return <MyComponent>{body}</MyComponent>;\n}\n')))),(0,o.kt)("h2",{id:"tags"},"Tags"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Always self-close tags that have no children. eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/self-closing-comp"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// bad\n<Foo variant="stuff"></Foo>\n\n// good\n<Foo variant="stuff" />\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If your component has multiline properties, close its tag on a new line. eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/jsx-closing-bracket-location"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// bad\n<Foo\n  bar="bar"\n  baz="baz" />\n\n// good\n<Foo\n  bar="bar"\n  baz="baz"\n/>\n')))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use arrow functions to close over local variables. It is handy when you need to pass additional data to an event handler. Although, make sure they ",(0,o.kt)("a",{parentName:"p",href:"https://www.bignerdranch.com/blog/choosing-the-best-approach-for-react-event-handlers/"},"do not massively hurt performance"),", in particular when passed to custom components that might be PureComponents, because they will trigger a possibly needless rerender every time."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function ItemList(props) {\n  return (\n    <ul>\n      {props.items.map((item, index) => (\n        <Item\n          key={item.key}\n          onClick={(event) => { doSomethingWith(event, item.name, index); }}\n        />\n      ))}\n    </ul>\n  );\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Bind event handlers for the render method in the constructor. eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/jsx-no-bind"))),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Why? A bind call in the render path creates a brand new function on every single render. Do not use arrow functions in class fields, because it makes them ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1"},"challenging to test and debug, and can negatively impact performance"),", and because conceptually, class fields are for data, not logic.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\nclass extends React.Component {\n  onClickDiv() {\n    // do stuff\n  }\n\n  render() {\n    return <div onClick={this.onClickDiv.bind(this)} />;\n  }\n}\n\n// very bad\nclass extends React.Component {\n  onClickDiv = () => {\n    // do stuff\n  }\n\n  render() {\n    return <div onClick={this.onClickDiv} />\n  }\n}\n\n// good\nclass extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.onClickDiv = this.onClickDiv.bind(this);\n  }\n\n  onClickDiv() {\n    // do stuff\n  }\n\n  render() {\n    return <div onClick={this.onClickDiv} />;\n  }\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Do not use underscore prefix for internal methods of a React component."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Why? Underscore prefixes are sometimes used as a convention in other languages to denote privacy. But, unlike those languages, there is no native support for privacy in JavaScript, everything is public. Regardless of your intentions, adding underscore prefixes to your properties does not actually make them private, and any property (underscore-prefixed or not) should be treated as being public. See issues ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbnb/javascript/issues/1024"},"#1024"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbnb/javascript/issues/490"},"#490")," for a more in-depth discussion.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\nReact.createClass({\n  _onClickSubmit() {\n    // do stuff\n  },\n\n  // other stuff\n});\n\n// good\nclass extends React.Component {\n  onClickSubmit() {\n    // do stuff\n  }\n\n  // other stuff\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Be sure to return a value in your ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," methods. eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/require-render-return"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// bad\nrender() {\n  (<div />);\n}\n\n// good\nrender() {\n  return (<div />);\n}\n")))),(0,o.kt)("h2",{id:"ordering"},"Ordering"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ordering for ",(0,o.kt)("inlineCode",{parentName:"li"},"class extends React.Component"),":")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"optional ",(0,o.kt)("inlineCode",{parentName:"li"},"static")," methods"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"constructor")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"getChildContext")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"componentWillMount")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"componentDidMount")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"componentWillReceiveProps")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"shouldComponentUpdate")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"componentWillUpdate")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"componentDidUpdate")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"componentWillUnmount")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"clickHandlers or eventHandlers")," like ",(0,o.kt)("inlineCode",{parentName:"li"},"onClickSubmit()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"onChangeDescription()")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"getter methods for ",(0,o.kt)("inlineCode",{parentName:"em"},"render"))," like ",(0,o.kt)("inlineCode",{parentName:"li"},"getSelectReason()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"getFooterContent()")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"optional render methods")," like ",(0,o.kt)("inlineCode",{parentName:"li"},"renderNavigation()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"renderProfilePicture()")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"render"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"How to define ",(0,o.kt)("inlineCode",{parentName:"p"},"propTypes"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultProps"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"contextTypes"),", etc..."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport PropTypes from 'prop-types';\n\nconst propTypes = {\n  id: PropTypes.number.isRequired,\n  url: PropTypes.string.isRequired,\n  text: PropTypes.string,\n};\n\nconst defaultProps = {\n  text: 'Hello World',\n};\n\nclass Link extends React.Component {\n  static methodsAreOk() {\n    return true;\n  }\n\n  render() {\n    return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>;\n  }\n}\n\nLink.propTypes = propTypes;\nLink.defaultProps = defaultProps;\n\nexport default Link;\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ordering for ",(0,o.kt)("inlineCode",{parentName:"p"},"React.createClass"),": eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/sort-comp"))))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"displayName")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"propTypes")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"contextTypes")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"childContextTypes")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"mixins")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"statics")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"defaultProps")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"getDefaultProps")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"getInitialState")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"getChildContext")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"componentWillMount")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"componentDidMount")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"componentWillReceiveProps")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"shouldComponentUpdate")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"componentWillUpdate")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"componentDidUpdate")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"componentWillUnmount")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"clickHandlers or eventHandlers")," like ",(0,o.kt)("inlineCode",{parentName:"li"},"onClickSubmit()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"onChangeDescription()")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"getter methods for ",(0,o.kt)("inlineCode",{parentName:"em"},"render"))," like ",(0,o.kt)("inlineCode",{parentName:"li"},"getSelectReason()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"getFooterContent()")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"optional render methods")," like ",(0,o.kt)("inlineCode",{parentName:"li"},"renderNavigation()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"renderProfilePicture()")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"render"))),(0,o.kt)("h2",{id:"ismounted"},(0,o.kt)("inlineCode",{parentName:"h2"},"isMounted")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Do not use ",(0,o.kt)("inlineCode",{parentName:"p"},"isMounted"),". eslint: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md"},(0,o.kt)("inlineCode",{parentName:"a"},"react/no-is-mounted"))),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Why? ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html"},(0,o.kt)("inlineCode",{parentName:"a"},"isMounted")," is an anti-pattern"),", is not available when using ES6 classes, and is on its way to being officially deprecated.")))))}d.isMDXComponent=!0}}]);