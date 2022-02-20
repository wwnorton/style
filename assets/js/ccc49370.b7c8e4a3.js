"use strict";(self.webpackChunkguides_website=self.webpackChunkguides_website||[]).push([[103],{6013:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(808),l=a(7378),r=a(8944),i=a(9131),s=a(1884),o="sidebar_k3AJ",m="sidebarItemTitle_KLf2",c="sidebarItemList_y0e6",u="sidebarItem_hZwW",d="sidebarItemLink_RCuc",g="sidebarItemLinkActive_wdkZ",v=a(9213);function p(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(o,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var h=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,n.Z)(e,h),m=t&&t.items.length>0;return l.createElement(i.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},7258:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7378),l=a(8944),r=a(5318),i=a(9213),s=a(1884),o=a(8948),m=a(6271),c=a(1721),u=a(261),d=a(580),g="blogPostTitle_wxyd",v="blogPostData_lXkG",p="blogPostDetailsFull_LFXV",h=a(8542),b="image_B1vt";var E=function(e){var t=e.author,a=t.name,l=t.title,r=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:r},n.createElement("img",{className:b,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(s.Z,{href:r,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},f="authorCol_wVxI",_="imageOnlyAuthorRow_azk4",N="imageOnlyAuthorCol_FeaY";function Z(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var r=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",r?_:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,l.Z)(!r&&"col col--6",r?N:f),key:t},n.createElement(E,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var k=function(e){var t,a,b,E=(b=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return b(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=(0,o.C)().withBaseUrl,_=e.children,N=e.frontMatter,k=e.assets,P=e.metadata,L=e.truncated,C=e.isBlogPostPage,w=void 0!==C&&C,y=P.date,T=P.formattedDate,I=P.permalink,x=P.tags,A=P.readingTime,H=P.title,M=P.editUrl,B=P.authors,O=null!=(t=k.image)?t:N.image,R=!w&&L,U=x.length>0,F=w?"h1":"h2";return n.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(F,{className:g,itemProp:"headline"},w?H:n.createElement(s.Z,{itemProp:"url",to:I},H)),n.createElement("div",{className:(0,l.Z)(v,"margin-vert--md")},n.createElement("time",{dateTime:y,itemProp:"datePublished"},T),void 0!==A&&n.createElement(n.Fragment,null," \xb7 ",E(A))),n.createElement(Z,{authors:B,assets:k})),O&&n.createElement("meta",{itemProp:"image",content:f(O,{absolute:!0})}),n.createElement("div",{id:w?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(r.Zo,{components:u.Z},_)),(U||L)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[p]=w,a))},U&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":R})},n.createElement(h.Z,{tags:x})),w&&M&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:M})),R&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":U})},n.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+H},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},2021:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7378),l=a(1956),r=a(6013),i=a(7258),s=a(5773),o=a(9213),m=a(8135);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(m.Z,(0,s.Z)({},a,{subLabel:n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(m.Z,(0,s.Z)({},t,{subLabel:n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))},u=a(6271),d=a(7488);var g=function(e){var t,a=e.content,s=e.sidebar,o=a.assets,m=a.metadata,g=m.title,v=m.description,p=m.nextItem,h=m.prevItem,b=m.date,E=m.tags,f=m.authors,_=m.frontMatter,N=_.hide_table_of_contents,Z=_.keywords,k=_.toc_min_heading_level,P=_.toc_max_heading_level,L=null!=(t=o.image)?t:_.image;return n.createElement(r.Z,{wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogPostPage,sidebar:s,toc:!N&&a.toc&&a.toc.length>0?n.createElement(d.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:P}):void 0},n.createElement(l.Z,{title:g,description:v,keywords:Z,image:L},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:b}),f.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:f.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&n.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:_,assets:o,metadata:m,isBlogPostPage:!0},n.createElement(a,null)),(p||h)&&n.createElement(c,{nextItem:p,prevItem:h}))}},580:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7378),l=a(9213),r=a(5773),i=a(808),s=a(8944),o="iconEdit_OMbO",m=["className"];var c=function(e){var t=e.className,a=(0,i.Z)(e,m);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(6271);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},8135:function(e,t,a){var n=a(7378),l=a(1884);t.Z=function(e){var t=e.permalink,a=e.title,r=e.subLabel;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}},7488:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(5773),l=a(808),r=a(7378),i=a(8944),s=a(3160),o="tableOfContents_jWtb",m=["className"];var c=function(e){var t=e.className,a=(0,l.Z)(e,m);return r.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},r.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3160:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(5773),l=a(808),r=a(7378),i=a(6271),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function m(e){var t=e.toc,a=e.className,m=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,u=void 0===c?"table-of-contents__link":c,d=e.linkActiveClassName,g=void 0===d?void 0:d,v=e.minHeadingLevel,p=e.maxHeadingLevel,h=(0,l.Z)(e,s),b=(0,i.LU)(),E=null!=v?v:b.tableOfContents.minHeadingLevel,f=null!=p?p:b.tableOfContents.maxHeadingLevel,_=(0,i.DA)({toc:t,minHeadingLevel:E,maxHeadingLevel:f}),N=(0,r.useMemo)((function(){if(u&&g)return{linkClassName:u,linkActiveClassName:g,minHeadingLevel:E,maxHeadingLevel:f}}),[u,g,E,f]);return(0,i.Si)(N),r.createElement(o,(0,n.Z)({toc:_,className:m,linkClassName:u},h))}},4823:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7378),l=a(8944),r=a(1884),i="tag_VWGF",s="tagRegular_sIPu",o="tagWithCount_YgKf";var m=function(e){var t,a=e.permalink,m=e.name,c=e.count;return n.createElement(r.Z,{href:a,className:(0,l.Z)(i,(t={},t[s]=!c,t[o]=c,t))},m,c&&n.createElement("span",null,c))}},8542:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7378),l=a(8944),r=a(9213),i=a(4823),s="tags_WPdo",o="tag_XHyC";function m(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:o},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);