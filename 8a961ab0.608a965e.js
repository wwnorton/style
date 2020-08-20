(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(90)),s={id:"css-sass",title:"CSS/SASS Style Guide",sidebar_label:"CSS/SASS"},l={unversionedId:"css-sass",id:"css-sass",isDocsHomePage:!1,title:"CSS/SASS Style Guide",description:"W.W. Norton & Company recommends a slightly modified Airbnb CSS / SASS styleguide.",source:"@site/docs/css-sass-style.md",permalink:"/style/docs/css-sass",editUrl:"https://github.com/wwnorton/style/edit/docs-docusaurus/guides-website/docs/css-sass-style.md",lastUpdatedBy:"Jonathan Chan",lastUpdatedAt:1597934276,sidebar_label:"CSS/SASS",sidebar:"docs",previous:{title:"Typescript Style Guide",permalink:"/style/docs/typescript"}},o=[{value:"Terminology",id:"terminology",children:[{value:"Rule declaration",id:"rule-declaration",children:[]},{value:"Selectors",id:"selectors",children:[]},{value:"Properties",id:"properties",children:[]}]},{value:"CSS",id:"css",children:[{value:"Formatting",id:"formatting",children:[]},{value:"Comments",id:"comments",children:[]},{value:"OOCSS and BEM",id:"oocss-and-bem",children:[]},{value:"ID selectors",id:"id-selectors",children:[]},{value:"JavaScript hooks",id:"javascript-hooks",children:[]},{value:"Border",id:"border",children:[]}]},{value:"Sass",id:"sass",children:[{value:"Syntax",id:"syntax",children:[]},{value:"Ordering of property declarations",id:"ordering-of-property-declarations",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Mixins",id:"mixins",children:[]},{value:"Extend directive",id:"extend-directive",children:[]},{value:"Nested selectors",id:"nested-selectors",children:[]}]}],c={rightToc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"W.W. Norton & Company recommends a slightly modified ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/airbnb/css"}),"Airbnb CSS / SASS styleguide"),".")),Object(i.b)("h2",{id:"terminology"},"Terminology"),Object(i.b)("h3",{id:"rule-declaration"},"Rule declaration"),Object(i.b)("p",null,"A \u201crule declaration\u201d is the name given to a selector (or a group of selectors) with an accompanying group of properties. Here's an example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".listing {\n    font-size: 18px;\n    line-height: 1.2;\n}\n")),Object(i.b)("h3",{id:"selectors"},"Selectors"),Object(i.b)("p",null,"In a rule declaration, \u201cselectors\u201d are the bits that determine which elements in the DOM tree will be styled by the defined properties. Selectors can match HTML elements, as well as an element's class, ID, or any of its attributes. Here are some examples of selectors:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".my-element-class {\n    /* ... */\n}\n\n[aria-hidden] {\n    /* ... */\n}\n")),Object(i.b)("h3",{id:"properties"},"Properties"),Object(i.b)("p",null,"Finally, properties are what give the selected elements of a rule declaration their style. Properties are key-value pairs, and a rule declaration can contain one or more property declarations. Property declarations look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"/* some selector */ {\n    color: #333;\n    background: #f1f1f1;\n}\n")),Object(i.b)("h4",{id:"use-em-or-rem-for-font-size-property-value"},"Use ",Object(i.b)("inlineCode",{parentName:"h4"},"em")," or ",Object(i.b)("inlineCode",{parentName:"h4"},"rem")," for ",Object(i.b)("inlineCode",{parentName:"h4"},"font-size:")," property value"),Object(i.b)("p",null,"W.W. Norton & Company strongly suggests using ",Object(i.b)("inlineCode",{parentName:"p"},"em")," or ",Object(i.b)("inlineCode",{parentName:"p"},"rem")," for font-size as opposed to ",Object(i.b)("inlineCode",{parentName:"p"},"px")," to ensure that font scaling works as expected accross devices. For all new projects, font sizes should be in em or rem."),Object(i.b)("h2",{id:"css"},"CSS"),Object(i.b)("h3",{id:"formatting"},"Formatting"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use tabs for indentation."),Object(i.b)("li",{parentName:"ul"},"Prefer dashes over camelCasing in class names.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Underscores and PascalCasing are okay if you are using BEM (see ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#oocss-and-bem"}),"OOCSS and BEM")," below)."))),Object(i.b)("li",{parentName:"ul"},"Do not use ID selectors."),Object(i.b)("li",{parentName:"ul"},"When using multiple selectors in a rule declaration, give each selector its own line."),Object(i.b)("li",{parentName:"ul"},"Put a space before the opening brace ",Object(i.b)("inlineCode",{parentName:"li"},"{")," in rule declarations."),Object(i.b)("li",{parentName:"ul"},"In properties, put a space after, but not before, the ",Object(i.b)("inlineCode",{parentName:"li"},":")," character."),Object(i.b)("li",{parentName:"ul"},"Put closing braces ",Object(i.b)("inlineCode",{parentName:"li"},"}")," of rule declarations on a new line."),Object(i.b)("li",{parentName:"ul"},"Put blank lines between rule declarations.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Bad")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".avatar {\n    border: 2px solid white;\n    border-radius: 50%;\n}\n\n.no,\n.nope,\n.not_good {\n    // ...\n}\n\n#lol-no {\n  // ...\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Good")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".avatar {\n    border: 2px solid white;\n    border-radius: 50%;\n}\n\n.one,\n.selector,\n.per-line {\n  // ...\n}\n")),Object(i.b)("h3",{id:"comments"},"Comments"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Prefer line comments (",Object(i.b)("inlineCode",{parentName:"li"},"//")," in Sass-land) to block comments."),Object(i.b)("li",{parentName:"ul"},"Prefer comments on their own line. Avoid end-of-line comments."),Object(i.b)("li",{parentName:"ul"},"Write detailed comments for code that isn't self-documenting:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Uses of z-index"),Object(i.b)("li",{parentName:"ul"},"Compatibility or browser-specific hacks")))),Object(i.b)("h3",{id:"oocss-and-bem"},"OOCSS and BEM"),Object(i.b)("p",null,"We encourage some combination of OOCSS and BEM for these reasons:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It helps create clear, strict relationships between CSS and HTML"),Object(i.b)("li",{parentName:"ul"},"It helps us create reusable, composable components"),Object(i.b)("li",{parentName:"ul"},"It allows for less nesting and lower specificity"),Object(i.b)("li",{parentName:"ul"},"It helps in building scalable stylesheets")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"OOCSS"),", or \u201cObject Oriented CSS\u201d, is an approach for writing CSS that encourages you to think about your stylesheets as a collection of \u201cobjects\u201d: reusable, repeatable snippets that can be used independently throughout a website."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Nicole Sullivan's ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/stubbornella/oocss/wiki"}),"OOCSS wiki")),Object(i.b)("li",{parentName:"ul"},"Smashing Magazine's ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/"}),"Introduction to OOCSS"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"BEM"),", or \u201cBlock-Element-Modifier\u201d, is a ",Object(i.b)("em",{parentName:"p"},"naming convention")," for classes in HTML and CSS. It was originally developed by Yandex with large codebases and scalability in mind, and can serve as a solid set of guidelines for implementing OOCSS."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CSS Trick's ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://css-tricks.com/bem-101/"}),"BEM 101")),Object(i.b)("li",{parentName:"ul"},"Harry Roberts' ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/"}),"introduction to BEM"))),Object(i.b)("p",null,"We recommend a variant of BEM with PascalCased \u201cblocks\u201d, which works particularly well when combined with components (e.g. React). Underscores and dashes are still used for modifiers and children."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// ListingCard.jsx\nfunction ListingCard() {\n  return (\n    <article class="ListingCard ListingCard--featured">\n\n      <h1 class="ListingCard__title">Adorable 2BR in the sunny Mission</h1>\n\n      <div class="ListingCard__content">\n        <p>Vestibulum id ligula porta felis euismod semper.</p>\n      </div>\n\n    </article>\n  );\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"/* ListingCard.css */\n.ListingCard { }\n.ListingCard--featured { }\n.ListingCard__title { }\n.ListingCard__content { }\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".ListingCard")," is the \u201cblock\u201d and represents the higher-level component"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".ListingCard__title")," is an \u201celement\u201d and represents a descendant of ",Object(i.b)("inlineCode",{parentName:"li"},".ListingCard")," that helps compose the block as a whole."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".ListingCard--featured")," is a \u201cmodifier\u201d and represents a different state or variation on the ",Object(i.b)("inlineCode",{parentName:"li"},".ListingCard")," block.")),Object(i.b)("h3",{id:"id-selectors"},"ID selectors"),Object(i.b)("p",null,"While it is possible to select elements by ID in CSS, it should generally be considered an anti-pattern. ID selectors introduce an unnecessarily high level of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"}),"specificity")," to your rule declarations, and they are not reusable."),Object(i.b)("p",null,"For more on this subject, read ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/"}),"CSS Wizardry's article")," on dealing with specificity."),Object(i.b)("h3",{id:"javascript-hooks"},"JavaScript hooks"),Object(i.b)("p",null,"Avoid binding to the same class in both your CSS and JavaScript. Conflating the two often leads to, at a minimum, time wasted during refactoring when a developer must cross-reference each class they are changing, and at its worst, developers being afraid to make changes for fear of breaking functionality."),Object(i.b)("p",null,"We recommend creating JavaScript-specific classes to bind to, prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},".js-"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<button class="btn btn-primary js-request-to-book">Request to Book</button>\n')),Object(i.b)("h3",{id:"border"},"Border"),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"0")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"none")," to specify that a style has no border."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Bad")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".foo {\n    border: none;\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Good")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".foo {\n    border: 0;\n}\n")),Object(i.b)("h2",{id:"sass"},"Sass"),Object(i.b)("h3",{id:"syntax"},"Syntax"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use the ",Object(i.b)("inlineCode",{parentName:"li"},".scss")," syntax, never the original ",Object(i.b)("inlineCode",{parentName:"li"},".sass")," syntax"),Object(i.b)("li",{parentName:"ul"},"Order your regular CSS and ",Object(i.b)("inlineCode",{parentName:"li"},"@include")," declarations logically (see below)")),Object(i.b)("h3",{id:"ordering-of-property-declarations"},"Ordering of property declarations"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"W.W. Norton & Company's property ordering style is inspired by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/primer/primer/blob/master/tools/stylelint-config-primer/index.js#L47-L217"}),"the order from GitHub's Primer design system")," instead of alphabetical.\nW.W. Norton also adds and groups accessibility properties to the bottom of that list. This list can be found on our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wwnorton/style/blob/main/packages/stylelint-config-norton/src/rules/plugins/property-order.js"}),"Github repository"),".")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Property declarations"),Object(i.b)("p",{parentName:"li"},"List all standard property declarations, anything that isn't an ",Object(i.b)("inlineCode",{parentName:"p"},"@include")," or a nested selector."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),".btn-green {\n  font-weight: bold;\n  background: 'green';\n  // ...\n}\n")))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"@include")," declarations"),Object(i.b)("p",{parentName:"li"},"Grouping ",Object(i.b)("inlineCode",{parentName:"p"},"@include"),"s at the end makes it easier to read the entire selector."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),".btn-green {\n  font-weight: bold;\n  background: 'green';\n\n  @include transition(background 0.5s ease);\n  // ...\n}\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Nested selectors"),Object(i.b)("p",{parentName:"li"},"Nested selectors, ",Object(i.b)("em",{parentName:"p"},"if necessary"),", go last, and nothing goes after them. Add whitespace between your rule declarations and nested selectors, as well as between adjacent nested selectors. Apply the same guidelines as above to your nested selectors."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),".btn {\n    font-weight: bold;\n    background: 'green';\n\n    @include transition(background 0.5s ease);\n\n    .icon {\n        margin-right: 10px;\n    }\n}\n")))),Object(i.b)("h3",{id:"variables"},"Variables"),Object(i.b)("p",null,"Prefer dash-cased variable names (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"$my-variable"),") over camelCased or snake_cased variable names. It is acceptable to prefix variable names that are intended to be used only within the same file with an underscore (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"$_my-variable"),")."),Object(i.b)("h3",{id:"mixins"},"Mixins"),Object(i.b)("p",null,"Mixins should be used to DRY up your code, add clarity, or abstract complexity--in much the same way as well-named functions. Mixins that accept no arguments can be useful for this, but note that if you are not compressing your payload (e.g. gzip), this may contribute to unnecessary code duplication in the resulting styles."),Object(i.b)("h3",{id:"extend-directive"},"Extend directive"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@extend")," should be avoided because it has unintuitive and potentially dangerous behavior, especially when used with nested selectors. Even extending top-level placeholder selectors can cause problems if the order of selectors ends up changing later (e.g. if they are in other files and the order the files are loaded shifts). Gzipping should handle most of the savings you would have gained by using ",Object(i.b)("inlineCode",{parentName:"p"},"@extend"),", and you can DRY up your stylesheets nicely with mixins."),Object(i.b)("h3",{id:"nested-selectors"},"Nested selectors"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Do not nest selectors more than three levels deep!")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scss"}),".page-container {\n    .content {\n        .profile {\n            // STOP!\n        }\n    }\n}\n")),Object(i.b)("p",null,"When selectors become this long, you're likely writing CSS that is:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Strongly coupled to the HTML (fragile) ",Object(i.b)("em",{parentName:"li"},"\u2014OR\u2014")),Object(i.b)("li",{parentName:"ul"},"Overly specific (powerful) ",Object(i.b)("em",{parentName:"li"},"\u2014OR\u2014")),Object(i.b)("li",{parentName:"ul"},"Not reusable")),Object(i.b)("p",null,"Again: ",Object(i.b)("strong",{parentName:"p"},"never nest ID selectors!")),Object(i.b)("p",null,"If you must use an ID selector in the first place (and you should really try not to), they should never be nested. If you find yourself doing this, you need to revisit your markup, or figure out why such strong specificity is needed. If you are writing well formed HTML and CSS, you should ",Object(i.b)("strong",{parentName:"p"},"never")," need to do this."))}b.isMDXComponent=!0}}]);