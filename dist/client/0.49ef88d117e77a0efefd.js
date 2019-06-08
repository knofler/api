webpackJsonp([0],{311:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return{showAddPost:(0,D.getShowAddPost)(e),posts:(0,w.getPosts)(e)}}Object.defineProperty(t,"__esModule",{value:!0});var d=a(18),l=o(d),u=a(117),n=o(u),r=a(118),i=o(r),f=a(119),c=o(f),p=a(120),m=o(p),v=a(121),h=o(v),_=a(0),P=(o(_),a(2)),g=o(P),N=a(40),y=a(314),M=o(y),b=a(316),k=o(b),A=a(122),C=a(65),D=a(125),w=a(123),x=function(e){function t(){var e,a,o,s;(0,i.default)(this,t);for(var d=arguments.length,l=Array(d),u=0;u<d;u++)l[u]=arguments[u];return a=o=(0,m.default)(this,(e=t.__proto__||(0,n.default)(t)).call.apply(e,[this].concat(l))),o.handleDeletePost=function(e){confirm("Do you want to delete this post")&&o.props.dispatch((0,A.deletePostRequest)(e))},o.handleAddPost=function(e,t,a){o.props.dispatch((0,C.toggleAddPost)()),o.props.dispatch((0,A.addPostRequest)({name:e,title:t,content:a}))},s=a,(0,m.default)(o,s)}return(0,h.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.props.dispatch((0,A.fetchPosts)())}},{key:"render",value:function(){return(0,l.default)("div",{},void 0,(0,l.default)(k.default,{addPost:this.handleAddPost,showAddPost:this.props.showAddPost}),(0,l.default)(M.default,{handleDeletePost:this.handleDeletePost,posts:this.props.posts}))}}]),t}(_.Component);x.need=[function(){return(0,A.fetchPosts)()}],x.contextTypes={router:g.default.object},t.default=(0,N.connect)(s)(x)},313:function(e,t){e.exports={"single-post":"_3B15Q62CNe0LaxJ8BUZr5W","post-title":"_3mZF-WLrnBUxaWr9zFi6Q_","author-name":"_1cSDPptMi8rvUEB2tAonlW","post-desc":"_3D8Fgk2edKTkFyBDsUEZ2u","post-action":"_3S84cKmlvGO49pK1biPlXr",divider:"y2SIF3ydn02JYMgeklO7S","post-detail":"_3W9vrxIdnQ93EmH-x2UgJR"}},314:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return(0,l.default)("div",{className:"listView"},void 0,e.posts.map(function(t){return(0,l.default)(i.default,{post:t,onDelete:function(){return e.handleDeletePost(t.cuid)}},t.cuid)}))}Object.defineProperty(t,"__esModule",{value:!0});var d=a(18),l=o(d),u=a(0),n=(o(u),a(2)),r=(o(n),a(315)),i=o(r);t.default=s},315:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return(0,l.default)("div",{className:c.default["single-post"]},void 0,(0,l.default)("h3",{className:c.default["post-title"]},void 0,(0,l.default)(r.Link,{to:"/posts/"+e.post.slug+"-"+e.post.cuid},void 0,e.post.title)),(0,l.default)("p",{className:c.default["author-name"]},void 0,p," ",e.post.name),(0,l.default)("p",{className:c.default["post-desc"]},void 0,e.post.content),(0,l.default)("p",{className:c.default["post-action"]},void 0,(0,l.default)("a",{href:"#",onClick:e.onDelete},void 0,m)),(0,l.default)("hr",{className:c.default.divider}))}Object.defineProperty(t,"__esModule",{value:!0});var d=a(18),l=o(d),u=a(0),n=(o(u),a(2)),r=(o(n),a(41)),i=a(33),f=a(313),c=o(f),p=(0,l.default)(i.FormattedMessage,{id:"by"}),m=(0,l.default)(i.FormattedMessage,{id:"deletePost"});t.default=s},316:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.PostCreateWidget=void 0;var s=a(18),d=o(s),l=a(117),u=o(l),n=a(118),r=o(n),i=a(119),f=o(i),c=a(120),p=o(c),m=a(121),v=o(m),h=a(0),_=o(h),P=a(2),g=(o(P),a(33)),N=a(317),y=o(N),M=(0,d.default)(g.FormattedMessage,{id:"createNewPost"}),b=(0,d.default)(g.FormattedMessage,{id:"submit"}),k=t.PostCreateWidget=function(e){function t(){var e,a,o,s;(0,r.default)(this,t);for(var d=arguments.length,l=Array(d),n=0;n<d;n++)l[n]=arguments[n];return a=o=(0,p.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(l))),o.addPost=function(){var e=o.refs.name,t=o.refs.title,a=o.refs.content;e.value&&t.value&&a.value&&(o.props.addPost(e.value,t.value,a.value),e.value=t.value=a.value="")},s=a,(0,p.default)(o,s)}return(0,v.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=y.default.form+" "+(this.props.showAddPost?y.default.appear:"");return(0,d.default)("div",{className:e},void 0,(0,d.default)("div",{className:y.default["form-content"]},void 0,(0,d.default)("h2",{className:y.default["form-title"]},void 0,M),_.default.createElement("input",{placeholder:this.props.intl.messages.authorName,className:y.default["form-field"],ref:"name"}),_.default.createElement("input",{placeholder:this.props.intl.messages.postTitle,className:y.default["form-field"],ref:"title"}),_.default.createElement("textarea",{placeholder:this.props.intl.messages.postContent,className:y.default["form-field"],ref:"content"}),(0,d.default)("a",{className:y.default["post-submit-button"],href:"#",onClick:this.addPost},void 0,b)))}}]),t}(h.Component);t.default=(0,g.injectIntl)(k)},317:function(e,t){e.exports={form:"_1HNxVmVCIfsWU6Q22cRSd7","form-content":"VlHIHfXe5nkoruuc0N8pJ","form-title":"_32cczwmKrlcNdTsvCr-oBL","form-field":"_1srubE9zVaJuCqkgKCA3lY","post-submit-button":"_2m9Bzr_sJcQ7FK3o3X0PBL",appear:"_30KT3DYyUvGj_5sBYnixvw"}}});