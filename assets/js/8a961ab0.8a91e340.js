"use strict";(self.webpackChunkguides_website=self.webpackChunkguides_website||[]).push([[32],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(5773),r=n(808),i=(n(7378),n(5318)),s=["components"],l={slug:"css-sass",title:"CSS/SASS Style Guide",sidebar_label:"CSS/SASS"},o=void 0,p={unversionedId:"css-sass-style",id:"css-sass-style",title:"CSS/SASS Style Guide",description:"W.W. Norton & Company recommends a slightly modified Airbnb CSS / SASS styleguide.",source:"@site/docs/css-sass-style.md",sourceDirName:".",slug:"/css-sass",permalink:"/style/docs/css-sass",editUrl:"https://github.com/wwnorton/style/edit/main/guides-website/docs/css-sass-style.md",tags:[],version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1648229830,formattedLastUpdatedAt:"3/25/2022",frontMatter:{slug:"css-sass",title:"CSS/SASS Style Guide",sidebar_label:"CSS/SASS"},sidebar:"docs",previous:{title:"TypeScript",permalink:"/style/docs/typescript"}},c={},d=[{value:"Terminology",id:"terminology",level:2},{value:"Rule declaration",id:"rule-declaration",level:3},{value:"Selectors",id:"selectors",level:3},{value:"Properties",id:"properties",level:3},{value:"Use <code>em</code> or <code>rem</code> for <code>font-size:</code> property value",id:"use-em-or-rem-for-font-size-property-value",level:4},{value:"CSS",id:"css",level:2},{value:"Formatting",id:"formatting",level:3},{value:"Comments",id:"comments",level:3},{value:"OOCSS and BEM",id:"oocss-and-bem",level:3},{value:"ID selectors",id:"id-selectors",level:3},{value:"JavaScript hooks",id:"javascript-hooks",level:3},{value:"Border",id:"border",level:3},{value:"Sass",id:"sass",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Ordering of property declarations",id:"ordering-of-property-declarations",level:3},{value:"Variables",id:"variables",level:3},{value:"Mixins",id:"mixins",level:3},{value:"Extend directive",id:"extend-directive",level:3},{value:"Nested selectors",id:"nested-selectors",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"W.W. Norton & Company recommends a slightly modified ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbnb/css"},"Airbnb CSS / SASS styleguide"),".")),(0,i.kt)("h2",{id:"terminology"},"Terminology"),(0,i.kt)("h3",{id:"rule-declaration"},"Rule declaration"),(0,i.kt)("p",null,"A \u201crule declaration\u201d is the name given to a selector (or a group of selectors) with an accompanying group of properties. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".listing {\n    font-size: 18px;\n    line-height: 1.2;\n}\n")),(0,i.kt)("h3",{id:"selectors"},"Selectors"),(0,i.kt)("p",null,"In a rule declaration, \u201cselectors\u201d are the bits that determine which elements in the DOM tree will be styled by the defined properties. Selectors can match HTML elements, as well as an element's class, ID, or any of its attributes. Here are some examples of selectors:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".my-element-class {\n    /* ... */\n}\n\n[aria-hidden] {\n    /* ... */\n}\n")),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("p",null,"Finally, properties are what give the selected elements of a rule declaration their style. Properties are key-value pairs, and a rule declaration can contain one or more property declarations. Property declarations look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"/* some selector */ {\n    color: #333;\n    background: #f1f1f1;\n}\n")),(0,i.kt)("h4",{id:"use-em-or-rem-for-font-size-property-value"},"Use ",(0,i.kt)("inlineCode",{parentName:"h4"},"em")," or ",(0,i.kt)("inlineCode",{parentName:"h4"},"rem")," for ",(0,i.kt)("inlineCode",{parentName:"h4"},"font-size:")," property value"),(0,i.kt)("p",null,"W.W. Norton & Company strongly suggests using ",(0,i.kt)("inlineCode",{parentName:"p"},"em")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"rem")," for font-size as opposed to ",(0,i.kt)("inlineCode",{parentName:"p"},"px")," to ensure that font scaling works as expected accross devices. For all new projects, font sizes should be in em or rem."),(0,i.kt)("h2",{id:"css"},"CSS"),(0,i.kt)("h3",{id:"formatting"},"Formatting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use tabs for indentation."),(0,i.kt)("li",{parentName:"ul"},"Prefer dashes over camelCasing in class names.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Underscores and PascalCasing are okay if you are using BEM (see ",(0,i.kt)("a",{parentName:"li",href:"#oocss-and-bem"},"OOCSS and BEM")," below)."))),(0,i.kt)("li",{parentName:"ul"},"Do not use ID selectors."),(0,i.kt)("li",{parentName:"ul"},"When using multiple selectors in a rule declaration, give each selector its own line."),(0,i.kt)("li",{parentName:"ul"},"Put a space before the opening brace ",(0,i.kt)("inlineCode",{parentName:"li"},"{")," in rule declarations."),(0,i.kt)("li",{parentName:"ul"},"In properties, put a space after, but not before, the ",(0,i.kt)("inlineCode",{parentName:"li"},":")," character."),(0,i.kt)("li",{parentName:"ul"},"Put closing braces ",(0,i.kt)("inlineCode",{parentName:"li"},"}")," of rule declarations on a new line."),(0,i.kt)("li",{parentName:"ul"},"Put blank lines between rule declarations.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bad")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".avatar {\n    border: 2px solid white;\n    border-radius: 50%;\n}\n\n.no,\n.nope,\n.not_good {\n    // ...\n}\n\n#lol-no {\n  // ...\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Good")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".avatar {\n    border: 2px solid white;\n    border-radius: 50%;\n}\n\n.one,\n.selector,\n.per-line {\n  // ...\n}\n")),(0,i.kt)("h3",{id:"comments"},"Comments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Prefer line comments (",(0,i.kt)("inlineCode",{parentName:"li"},"//")," in Sass-land) to block comments."),(0,i.kt)("li",{parentName:"ul"},"Prefer comments on their own line. Avoid end-of-line comments."),(0,i.kt)("li",{parentName:"ul"},"Write detailed comments for code that isn't self-documenting:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Uses of z-index"),(0,i.kt)("li",{parentName:"ul"},"Compatibility or browser-specific hacks")))),(0,i.kt)("h3",{id:"oocss-and-bem"},"OOCSS and BEM"),(0,i.kt)("p",null,"We encourage some combination of OOCSS and BEM for these reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It helps create clear, strict relationships between CSS and HTML"),(0,i.kt)("li",{parentName:"ul"},"It helps us create reusable, composable components"),(0,i.kt)("li",{parentName:"ul"},"It allows for less nesting and lower specificity"),(0,i.kt)("li",{parentName:"ul"},"It helps in building scalable stylesheets")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OOCSS"),", or \u201cObject Oriented CSS\u201d, is an approach for writing CSS that encourages you to think about your stylesheets as a collection of \u201cobjects\u201d: reusable, repeatable snippets that can be used independently throughout a website."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nicole Sullivan's ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/stubbornella/oocss/wiki"},"OOCSS wiki")),(0,i.kt)("li",{parentName:"ul"},"Smashing Magazine's ",(0,i.kt)("a",{parentName:"li",href:"http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/"},"Introduction to OOCSS"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"BEM"),", or \u201cBlock-Element-Modifier\u201d, is a ",(0,i.kt)("em",{parentName:"p"},"naming convention")," for classes in HTML and CSS. It was originally developed by Yandex with large codebases and scalability in mind, and can serve as a solid set of guidelines for implementing OOCSS."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CSS Trick's ",(0,i.kt)("a",{parentName:"li",href:"https://css-tricks.com/bem-101/"},"BEM 101")),(0,i.kt)("li",{parentName:"ul"},"Harry Roberts' ",(0,i.kt)("a",{parentName:"li",href:"http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/"},"introduction to BEM"))),(0,i.kt)("p",null,"We recommend a variant of BEM with PascalCased \u201cblocks\u201d, which works particularly well when combined with components (e.g. React). Underscores and dashes are still used for modifiers and children."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'// ListingCard.jsx\nfunction ListingCard() {\n  return (\n    <article class="ListingCard ListingCard--featured">\n\n      <h1 class="ListingCard__title">Adorable 2BR in the sunny Mission</h1>\n\n      <div class="ListingCard__content">\n        <p>Vestibulum id ligula porta felis euismod semper.</p>\n      </div>\n\n    </article>\n  );\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"/* ListingCard.css */\n.ListingCard { }\n.ListingCard--featured { }\n.ListingCard__title { }\n.ListingCard__content { }\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".ListingCard")," is the \u201cblock\u201d and represents the higher-level component"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".ListingCard__title")," is an \u201celement\u201d and represents a descendant of ",(0,i.kt)("inlineCode",{parentName:"li"},".ListingCard")," that helps compose the block as a whole."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".ListingCard--featured")," is a \u201cmodifier\u201d and represents a different state or variation on the ",(0,i.kt)("inlineCode",{parentName:"li"},".ListingCard")," block.")),(0,i.kt)("h3",{id:"id-selectors"},"ID selectors"),(0,i.kt)("p",null,"While it is possible to select elements by ID in CSS, it should generally be considered an anti-pattern. ID selectors introduce an unnecessarily high level of ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"},"specificity")," to your rule declarations, and they are not reusable."),(0,i.kt)("p",null,"For more on this subject, read ",(0,i.kt)("a",{parentName:"p",href:"http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/"},"CSS Wizardry's article")," on dealing with specificity."),(0,i.kt)("h3",{id:"javascript-hooks"},"JavaScript hooks"),(0,i.kt)("p",null,"Avoid binding to the same class in both your CSS and JavaScript. Conflating the two often leads to, at a minimum, time wasted during refactoring when a developer must cross-reference each class they are changing, and at its worst, developers being afraid to make changes for fear of breaking functionality."),(0,i.kt)("p",null,"We recommend creating JavaScript-specific classes to bind to, prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},".js-"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button class="btn btn-primary js-request-to-book">Request to Book</button>\n')),(0,i.kt)("h3",{id:"border"},"Border"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"none")," to specify that a style has no border."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bad")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".foo {\n    border: none;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Good")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".foo {\n    border: 0;\n}\n")),(0,i.kt)("h2",{id:"sass"},"Sass"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},".scss")," syntax, never the original ",(0,i.kt)("inlineCode",{parentName:"li"},".sass")," syntax"),(0,i.kt)("li",{parentName:"ul"},"Order your regular CSS and ",(0,i.kt)("inlineCode",{parentName:"li"},"@include")," declarations logically (see below)")),(0,i.kt)("h3",{id:"ordering-of-property-declarations"},"Ordering of property declarations"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"W.W. Norton & Company's property ordering style is inspired by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/primer/primer/blob/master/tools/stylelint-config-primer/index.js#L47-L217"},"the order from GitHub's Primer design system")," instead of alphabetical.\nW.W. Norton also adds and groups accessibility properties to the bottom of that list. This list can be found on our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wwnorton/style/blob/main/packages/stylelint-config-norton/src/rules/plugins/property-order.js"},"Github repository"),".")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Property declarations"),(0,i.kt)("p",{parentName:"li"},"List all standard property declarations, anything that isn't an ",(0,i.kt)("inlineCode",{parentName:"p"},"@include")," or a nested selector."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-scss"},".btn-green {\n  font-weight: bold;\n  background: 'green';\n  // ...\n}\n")))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"@include")," declarations"),(0,i.kt)("p",{parentName:"li"},"Grouping ",(0,i.kt)("inlineCode",{parentName:"p"},"@include"),"s at the end makes it easier to read the entire selector."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-scss"},".btn-green {\n  font-weight: bold;\n  background: 'green';\n\n  @include transition(background 0.5s ease);\n  // ...\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Nested selectors"),(0,i.kt)("p",{parentName:"li"},"Nested selectors, ",(0,i.kt)("em",{parentName:"p"},"if necessary"),", go last, and nothing goes after them. Add whitespace between your rule declarations and nested selectors, as well as between adjacent nested selectors. Apply the same guidelines as above to your nested selectors."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-scss"},".btn {\n    font-weight: bold;\n    background: 'green';\n\n    @include transition(background 0.5s ease);\n\n    .icon {\n        margin-right: 10px;\n    }\n}\n")))),(0,i.kt)("h3",{id:"variables"},"Variables"),(0,i.kt)("p",null,"Prefer dash-cased variable names (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"$my-variable"),") over camelCased or snake_cased variable names. It is acceptable to prefix variable names that are intended to be used only within the same file with an underscore (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"$_my-variable"),")."),(0,i.kt)("h3",{id:"mixins"},"Mixins"),(0,i.kt)("p",null,"Mixins should be used to DRY up your code, add clarity, or abstract complexity--in much the same way as well-named functions. Mixins that accept no arguments can be useful for this, but note that if you are not compressing your payload (e.g. gzip), this may contribute to unnecessary code duplication in the resulting styles."),(0,i.kt)("h3",{id:"extend-directive"},"Extend directive"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@extend")," should be avoided because it has unintuitive and potentially dangerous behavior, especially when used with nested selectors. Even extending top-level placeholder selectors can cause problems if the order of selectors ends up changing later (e.g. if they are in other files and the order the files are loaded shifts). Gzipping should handle most of the savings you would have gained by using ",(0,i.kt)("inlineCode",{parentName:"p"},"@extend"),", and you can DRY up your stylesheets nicely with mixins."),(0,i.kt)("h3",{id:"nested-selectors"},"Nested selectors"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do not nest selectors more than three levels deep!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},".page-container {\n    .content {\n        .profile {\n            // STOP!\n        }\n    }\n}\n")),(0,i.kt)("p",null,"When selectors become this long, you're likely writing CSS that is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Strongly coupled to the HTML (fragile) ",(0,i.kt)("em",{parentName:"li"},"\u2014OR\u2014")),(0,i.kt)("li",{parentName:"ul"},"Overly specific (powerful) ",(0,i.kt)("em",{parentName:"li"},"\u2014OR\u2014")),(0,i.kt)("li",{parentName:"ul"},"Not reusable")),(0,i.kt)("p",null,"Again: ",(0,i.kt)("strong",{parentName:"p"},"never nest ID selectors!")),(0,i.kt)("p",null,"If you must use an ID selector in the first place (and you should really try not to), they should never be nested. If you find yourself doing this, you need to revisit your markup, or figure out why such strong specificity is needed. If you are writing well formed HTML and CSS, you should ",(0,i.kt)("strong",{parentName:"p"},"never")," need to do this."))}m.isMDXComponent=!0}}]);