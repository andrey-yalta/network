(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,a){e.exports={post:"Post_post__3bGbq"}},135:function(e,t,a){e.exports={stuff:"Posts_stuff__2bTS-"}},137:function(e,t,a){e.exports={news:"News_news__3HrD1"}},16:function(e,t,a){e.exports={content:"Dialogs_content__3pjcU",dialogs:"Dialogs_dialogs__2SBU8",dialog:"Dialogs_dialog__1Sl4E",dialogsMessage:"Dialogs_dialogsMessage__2s6ZI",message_from:"Dialogs_message_from__29iqi",message_to:"Dialogs_message_to__3lp3E",active:"Dialogs_active__1ZBmn",person:"Dialogs_person__2if2o",dialogsMessage_area:"Dialogs_dialogsMessage_area__7_WYI"}},163:function(e,t,a){e.exports=a(302)},17:function(e,t,a){e.exports={nav:"Navbar_nav__2BMmK",active:"Navbar_active__1UMkx",sitebar:"Navbar_sitebar__2R73K",sitebar__items:"Navbar_sitebar__items__2tBYY",sitebar__item:"Navbar_sitebar__item__1a5Og"}},187:function(e,t,a){},189:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),o=a(7),s=a.n(o),l=a(14),i=a(39),c=a(11),u=a(42).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"5d16bb3c-e00e-4326-9938-6b442a102e86"}}),m={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return u.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return u.post("follow/".concat(e))},unFollow:function(e){return u.delete("follow/".concat(e))},getProfile:function(e){return console.warn("obsolete message. please use api obj"),p.getProfile(e)}},p={getProfile:function(e){return u.get("profile/"+e)},getStatus:function(e){return u.get("profile/status/"+e)},updateStatus:function(e){return u.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),u.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return u.put("profile",e)}},d=function(){return u.get("auth/me")},f=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return u.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},g=function(){return u.delete("auth/login")},h=function(){return u.get("security/get-captcha-url")},E=a(27),b={postsData:[{id:1,text:"Hello",like:12},{id:2,text:"How are you, man?",like:11},{id:3,text:"What interestind in your life?",like:1},{id:4,text:"I'm glad to hear you!",like:5}],profile:null,status:""},v=function(e){return{type:"SET_STATUS",status:e}},_=function(e){return function(){var t=Object(l.a)(s.a.mark(function t(a){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.getProfile(e);case 2:n=t.sent,a({type:"SET_USER_PROFILE",profile:n.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var a={id:5,text:t.newPostText,like:0},n=Object(c.a)({},e,{postsData:Object(i.a)(e.postsData)});return n.postsData.push(a),n.newPostText="",n;case"SET_USER_PROFILE":return Object(c.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(c.a)({},e,{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(c.a)({},e,{profile:Object(c.a)({},e.profile,{photos:t.photos})});default:return e}},P={usersData:[{id:1,name:"Andrey",img:"https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg"},{id:2,name:"Alexandr",img:"https://f0.pngfuel.com/png/348/800/man-wearing-blue-shirt-illustration-png-clip-art.png"},{id:3,name:"Darya",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzWBXtpWI3XwVykdZn77ybq7FPMu8BVLP-JA&usqp=CAU"},{id:4,name:"Ivan",img:"https://cdn.imgbin.com/17/23/24/imgbin-computer-icons-teacher-pedagogy-education-experience-teacher-zdGVV5hRG7KR9fzeBqRr2SzmG.jpg"}],messageData:[{id:1,message:"Hello",num:1},{id:2,message:"How are you, man?",num:0},{id:3,message:"What interestind in your life?",num:1},{id:4,message:"I'm glad to hear you!",num:0}]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;Object(c.a)({},e,{messageData:Object(i.a)(e.messageData)});switch(t.type){case"SEND-MESSAGE":var a=t.newMessageBody;return Object(c.a)({},e,{messageData:[].concat(Object(i.a)(e.messageData),[{id:6,message:a}])});default:return e}},O={_callSubscriber:function(){console.log(" state was changed")},_appState:{profilePage:{postsData:[{id:1,text:"Hello",like:12},{id:2,text:"How are you, man?",like:11},{id:3,text:"What interestind in your life?",like:1},{id:4,text:"I'm glad to hear you!",like:5}],newPostText:"it-camasutra.com"},dialogsPage:{usersData:[{id:1,name:"Andrey",img:"https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg"},{id:2,name:"Alexandr",img:"https://f0.pngfuel.com/png/348/800/man-wearing-blue-shirt-illustration-png-clip-art.png"},{id:3,name:"Darya",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzWBXtpWI3XwVykdZn77ybq7FPMu8BVLP-JA&usqp=CAU"},{id:4,name:"Ivan",img:"https://cdn.imgbin.com/17/23/24/imgbin-computer-icons-teacher-pedagogy-education-experience-teacher-zdGVV5hRG7KR9fzeBqRr2SzmG.jpg"}],messageData:[{id:1,message:"Hello",num:1},{id:2,message:"How are you, man?",num:0},{id:3,message:"What interestind in your life?",num:1},{id:4,message:"I'm glad to hear you!",num:0}],newMessageBody:""}},subscribe:function(e){this._callSubscriber=e},getState:function(){return this._appState},addPost:function(){var e={id:5,text:this._appState.profilePage.newPostText,like:0};this._appState.profilePage.postsData.push(e),this._appState.profilePage.newPostText="",this._callSubscriber(this._appState)},updatePostText:function(e){this._appState.profilePage.newPostText=e,this._callSubscriber(this._appState)},dispatch:function(e){this._appState.profilePage=w(this._appState.profilePage,e),this._appState.dialogsPage=S(this._appState.dialogsPage,e),this._callSubscriber(this._appState)}};window.store=O;var y=a(65),j=a.n(y),k=(a(187),a(21)),C=a(22),N=a(24),x=a(23),A=a(25),U=(a(189),a(17)),T=a.n(U),I=a(10),F=function(){return r.a.createElement("nav",{className:T.a.nav},r.a.createElement("div",null,r.a.createElement(I.b,{to:"/profile",activeClassName:T.a.active},"Profile")),r.a.createElement("div",null,r.a.createElement(I.b,{to:"/login",activeClassName:T.a.active},"Login")),r.a.createElement("div",null,r.a.createElement(I.b,{to:"/dialogs",activeClassName:T.a.active},"Messages")),r.a.createElement("div",null,r.a.createElement(I.b,{to:"/users",activeClassName:T.a.active},"Users")),r.a.createElement("div",null,r.a.createElement(I.b,{to:"/news",activeClassName:T.a.active},"News")),r.a.createElement("div",null,r.a.createElement(I.b,{to:"/music",activeClassName:T.a.active},"Music")),r.a.createElement("div",null,r.a.createElement(I.b,{to:"/settings",activeClassName:T.a.active},"Settings")),r.a.createElement("div",{className:T.a.sitebar},r.a.createElement("h3",null,"Friends"),r.a.createElement("div",{className:T.a.sitebar__items},r.a.createElement("div",{className:T.a.sitebar__item},r.a.createElement("img",{src:"https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg",alt:""}),r.a.createElement("h4",null,"Petya"),r.a.createElement("label",{htmlFor:""},"online")),r.a.createElement("div",{className:T.a.sitebar__item},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzWBXtpWI3XwVykdZn77ybq7FPMu8BVLP-JA&usqp=CAU",alt:""}),r.a.createElement("h4",null,"Sveta"),r.a.createElement("label",{htmlFor:""},"offline")),r.a.createElement("div",{className:T.a.sitebar__item},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzWBXtpWI3XwVykdZn77ybq7FPMu8BVLP-JA&usqp=CAU",alt:""}),r.a.createElement("h4",null,"Ivan"),r.a.createElement("label",{htmlFor:""},"online")))))},D=a(1),M=a(16),L=a.n(M),R="https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg",z=function(e){return 1===e.source?r.a.createElement("div",{className:L.a.message_from},"  ",r.a.createElement("img",{className:L.a.person,src:R,alt:"person"})," ",e.msg):r.a.createElement("div",{className:L.a.message_to},"   ",e.msg," ",r.a.createElement("img",{className:L.a.person,src:R,alt:"person"}))},G=function(e){return r.a.createElement("div",{className:L.a.dialog+" "+L.a.active},r.a.createElement("img",{className:L.a.person,src:e.img,alt:""}),r.a.createElement(I.b,{to:"/dialogs/"+e.id},e.name))},q=a(75),W=a(76),B=a(79),V=a(38),H=a.n(V),J=function(e){if(!e)return"Field is required"},K=function(e){return function(t){if(t.length>e)return"Max ".concat(e," symbols")}},X=function(e){e.input;var t=e.meta,a=t.touched,n=t.error,o=(e.child,Object(B.a)(e,["input","meta","child"])),s=a&&n;return r.a.createElement("div",{className:H.a.formControl+" "+(s?H.a.error:" ")},r.a.createElement("div",null,o.children),s&&r.a.createElement("span",null,n))},Z=function(e){var t=e.input,a=(e.meta,e.child,Object(B.a)(e,["input","meta","child"]));return r.a.createElement(X,e,"  ",r.a.createElement("textarea",Object.assign({},t,a))," ")},Y=function(e){var t=e.input,a=(e.meta,e.child,Object(B.a)(e,["input","meta","child"]));return r.a.createElement(X,e,"  ",r.a.createElement("input",Object.assign({},t,a))," ")},$=function(e,t,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return r.a.createElement("div",null,r.a.createElement(q.a,Object.assign({placeholder:"Password",name:t,type:"password",validate:a,component:n},o))," ",s)},Q=K(100),ee=Object(W.a)({form:"dialogAddMessageForm"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:L.a.dialogsMessage_area},r.a.createElement("div",null,r.a.createElement(q.a,{component:Z,validate:[J,Q],name:"newMessageBody",placeholder:"Enter your message"})),r.a.createElement("div",null,r.a.createElement("button",null,"Send Message")))}),te=function(e){var t=e.messagePage.messageData.map(function(e){return r.a.createElement(z,{msg:e.message,key:e.id,source:e.num})}),a=e.messagePage.usersData.map(function(e){return r.a.createElement(G,{name:e.name,id:e.id,key:e.id,img:e.img})});e.messagePage.newMessageBody,r.a.createRef();return e.isAuth?r.a.createElement("div",{className:L.a.dialogs},r.a.createElement("div",{className:L.a.dialogsItems},a),r.a.createElement("div",{className:L.a.dialogsMessage},t,r.a.createElement(ee,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}}))):r.a.createElement(D.a,{to:"/login"})},ae=a(12),ne=a(9),re=function(e){return{isAuth:e.auth.isAuth}},oe=Object(ne.d)(Object(ae.b)(function(e){return{messagePage:e.dialogsPage}},function(e){return{sendMessage:function(t){e(function(e){return{type:"SEND-MESSAGE",newMessageBody:e}}(t))}}}),function(e){var t=function(t){function a(){return Object(k.a)(this,a),Object(N.a)(this,Object(x.a)(a).apply(this,arguments))}return Object(A.a)(a,t),Object(C.a)(a,[{key:"render",value:function(){return r.a.createElement(e,this.props)}}]),a}(r.a.Component);return Object(ae.b)(re)(t)})(te),se={users:[],pageSize:5,totalUsersCount:21,currentPage:3,newPostText:"it-camasutra.com",isFetching:!1,followingInProgress:[2,3]},le=function(e){return{type:"FOLLOW",userId:e}},ie=function(e){return{type:"UNFOLLOW",userId:e}},ce=function(e){return{type:"SET_CURRENT_PAGE",p:e}},ue=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},me=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},pe=function(){var e=Object(l.a)(s.a.mark(function e(t,a,n,r){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(me(!0,a)),e.next=4,n(a);case 4:0===e.sent.data.resultCode&&t(r(a)),t(me(!1,a));case 8:case"end":return e.stop()}},e)}));return function(t,a,n,r){return e.apply(this,arguments)}}(),de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(c.a)({},e,{users:e.users.map(function(e){return e.id===t.userId?Object(c.a)({},e,{followed:!0}):e})});case"UNFOLLOW":return Object(c.a)({},e,{users:e.users.map(function(e){return e.id===t.userId?Object(c.a)({},e,{followed:!1}):e})});case"SET-USERS":return Object(c.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(c.a)({},e,{currentPage:t.p});case"SET_TOTAL_USERS_COUNT":return Object(c.a)({},e,{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(c.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(c.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return e}},fe=a(69),ge=a.n(fe),he=a(54),Ee=a.n(he),be=a(67),ve=a(40),_e=a(70),we=a.n(_e),Pe=a(132),Se=a.n(Pe),Oe=function(e){for(var t=e.totalItemsCount,a=e.pageSize,o=e.currentPage,s=e.onPageChanged,l=e.portionSize,i=void 0===l?10:l,c=Math.ceil(t/a),u=[],m=1;m<=c;m++)u.push(m);var p=Math.ceil(c/i),d=Object(n.useState)(1),f=Object(ve.a)(d,2),g=f[0],h=f[1],E=(g-1)*i+1,b=g*i;return r.a.createElement("div",{className:we.a.paginator},g>1&&r.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),u.filter(function(e){return e>=E&&e<=b}).map(function(e){return r.a.createElement("span",{className:Se()(Object(be.a)({},we.a.selectedPage,o===e),we.a.pageNumber),key:e,onClick:function(t){s(e)}},e)}),p>g&&r.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},ye=function(e){var t=e.user,a=e.followingInProgress,n=e.unfollow,o=e.follow,s=t;return r.a.createElement("div",null,r.a.createElement("div",{className:ge.a.users},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(I.b,{to:"/profile/"+s.id},r.a.createElement("img",{className:ge.a.users__img,src:null!=s.photos.small?s.photos.small:Ee.a,alt:""}))),r.a.createElement("div",null,s.followed?r.a.createElement("button",{disabled:a.some(function(e){return e===s.id}),onClick:function(){n(s.id)}},"UnFollow"):r.a.createElement("button",{disabled:a.some(function(e){return e===s.id}),onClick:function(){o(s.id)}}," Follow"),"}")),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,s.name),r.a.createElement("div",null,s.status)),r.a.createElement("span",null,r.a.createElement("div",null,"u.location.city"),r.a.createElement("div",null,"u.location.country")))),") }")},je=function(e){return r.a.createElement("div",null,r.a.createElement(Oe,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize}),r.a.createElement("div",null,e.users.map(function(t){return r.a.createElement(ye,{user:t,key:t.id,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow})})))},ke=a(74),Ce=a.n(ke),Ne=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:Ce.a,alt:"waiting please"}))},xe=a(133),Ae=function(e){return e.usersPage.users},Ue=(Object(xe.a)(Ae,function(e){return e.filter(function(e){return!0})}),function(e){return e.usersPage.pageSize}),Te=function(e){return e.usersPage.totalUsersCount},Ie=function(e){return e.usersPage.currentPage},Fe=function(e){return e.usersPage.isFetching},De=function(e){return e.usersPage.followingInProgress},Me=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(N.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){a.props.getUsers(e,a.props.pageSize)},a}return Object(A.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Ne,null):null,r.a.createElement(je,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unFollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress}))}}]),t}(r.a.Component),Le=Object(ae.b)(function(e){return{users:Ae(e),pageSize:Ue(e),totalUsersCount:Te(e),currentPage:Ie(e),isFetching:Fe(e),followingInProgress:De(e)}},{follow:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(a){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:pe(a,e,m.follow.bind(e),le);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(a){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:pe(a,e,m.unFollow.bind(e),ie);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},toggleFollowingProgress:me,setCurrentPage:ce,getUsers:function(e,t){return function(){var a=Object(l.a)(s.a.mark(function a(n){var r;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n(ue(!0)),n(ce(e)),a.next=4,m.getUsers(e,t);case 4:r=a.sent,n(ue(!1)),n({type:"SET-USERS",users:r.items}),n({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:r.totalCount});case 8:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(Me),Re=a(47),ze=a.n(Re),Ge=(r.a.Component,function(e){var t=Object(n.useState)(!1),a=Object(ve.a)(t,2),o=a[0],s=a[1],l=Object(n.useState)(e.status),i=Object(ve.a)(l,2),c=i[0],u=i[1];return Object(n.useEffect)(function(){u(e.status)},[e.status]),r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("b",null,"Status: ")," ",r.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"---")),o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},onBlur:function(){s(!1),e.updateStatus(c)},value:c,autoFocus:!0})))}),qe=Object(W.a)({form:"edit-profile"})(function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement("button",null,"save")),n&&r.a.createElement("div",{className:H.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("b",null,"Full name:")," ",$("full name","name",[],Y)),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job:"),$(" ","lookingForAJob",[],Y,{type:"checkbox"})),r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills:"),$("My professional skills","lookingForAJobDescription",[],Z)),r.a.createElement("div",null,r.a.createElement("b",null,"About me:"),$("About me","aboutMe",[],Z)),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts:")," ",Object.keys(a.contacts).map(function(e){return r.a.createElement("div",{key:e,className:ze.a.contact},r.a.createElement("b",null,e,": ",$(e,"contacts."+e,[],Y)," "))})))}),We=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMoe;return r.a.createElement("div",null,a&&r.a.createElement("div",null,r.a.createElement("button",{onClick:n},"edit")),r.a.createElement("div",null,r.a.createElement("b",null,"Full name:")," ",t.fullName),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job:")," ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills:")," ",t.lookingForAJobDescription),r.a.createElement("div",null,r.a.createElement("b",null,"About me:")," ",t.aboutMe),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts:")," ",Object.keys(t.contacts).map(function(e){return r.a.createElement(Be,{contactTitle:e,contactValue:t.contacts[e]})})))},Be=function(e){var t=e.contactTitle;e.contactValue;return r.a.createElement("div",{className:ze.a.contact},r.a.createElement("b",null,t," "),": ",t)},Ve=function(e){var t=Object(n.useState)(!1),a=Object(ve.a)(t,2),o=a[0],s=a[1];if(!e.profile)return r.a.createElement(Ne,null);return r.a.createElement("div",null,r.a.createElement("div",{className:ze.a.descriptionBlock},r.a.createElement("img",{src:e.profile.photos.large||Ee.a,className:ze.a.mainPhoto}),e.isOwner&&r.a.createElement("input",{type:"file",onChange:function(t){t.target.file.length&&e.savePhoto(t.target.file[0])}}),o?r.a.createElement(qe,{initialValues:e.profile,onSubmit:function(t){e.saveProfile(t).then(function(){s(!1)})},profile:e.profile}):r.a.createElement(We,{profile:e.profile,isOwner:e.isOwner,goToEditMoe:function(){s(!0)}}),r.a.createElement(Ge,{status:e.status,updateStatus:e.updateStatus})))},He=a(134),Je=a.n(He),Ke=function(e){return r.a.createElement("div",{className:Je.a.post},r.a.createElement("img",{src:"https://sefon.pro/img/artist_photos/ava-max.jpg",alt:""}),r.a.createElement("p",null,e.text),r.a.createElement("label",null,"like ",e.like))},Xe=a(135),Ze=a.n(Xe),Ye=r.a.memo(function(e){r.a.createRef();var t=e.postsData.map(function(e){return r.a.createElement(Ke,{key:e.id,text:e.text,like:e.like})});return r.a.createElement("div",{className:Ze.a.stuff},r.a.createElement("h2",null,"My posts"),r.a.createElement(Qe,{onSubmit:function(t){e.addPost(t.newPostText)}}),t)}),$e=K(30),Qe=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(q.a,{placeholder:"post message",component:Z,name:"newPostText",validate:[J,$e]})),r.a.createElement("div",null,r.a.createElement("button",null,"Add Post")))};Qe=Object(W.a)({form:"ProfileAddNewPostForm"})(Qe);var et=Ye,tt=Object(ae.b)(function(e){return{postsData:e.profilePage.postsData,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}})(et),at=function(e){return r.a.createElement("div",{className:"content"},r.a.createElement(Ve,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),r.a.createElement(tt,null))},nt=function(e){function t(){return Object(k.a)(this,t),Object(N.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(C.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(at,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),t}(r.a.Component),rt=Object(ne.d)(Object(ae.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:_,getStatus:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(a){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.getStatus(e);case 2:n=t.sent,a(v(n.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(a){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.updateStatus(e);case 3:0===t.sent.data.resultCode&&a(v(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert("update status error"+t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(a){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.savePhoto(e);case 2:0===(n=t.sent).data.resultCode&&a({type:"SAVE_PHOTO_SUCCESS",photos:n.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(l.a)(s.a.mark(function t(a,n){var r,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.userId,t.next=3,p.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}a(_(r)),t.next=10;break;case 8:return a(Object(E.a)("edit-profile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}}),D.g)(nt),ot=a(98),st=a.n(ot),lt=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:st.a.img,src:"https://www.freelogodesign.org/Content/img/logo-ex-7.png"}),r.a.createElement("div",{className:st.a.login__block},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout}," LogOut")," "):r.a.createElement(I.b,{to:"/login"},"Login")))},it={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},ct=function(e,t,a,n){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:a,isAuth:n}}},ut=function(e){return{type:"GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},mt=function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){var a,n,r,o,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.id,o=n.login,l=n.email,t(ct(r,l,o,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},pt=function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){var a,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:a=e.sent,n=a.data.url,t(ut(n));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":case"GET_CAPTCHA_URL_SUCCESS":return Object(c.a)({},e,t.payload);default:return e}},ft=function(e){function t(){return Object(k.a)(this,t),Object(N.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return r.a.createElement(lt,this.props)}}]),t}(r.a.Component),gt=Object(ae.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(l.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:0===e.sent.data.resultCode&&t(ct(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(ft),ht=Object(W.a)({form:"login"})(function(e){var t=e.handleSubmit,a=e.error,n=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},$("Email","email",[J],Y,{type:"email"}),$("Password","password",[J],Y,{type:"password"}),$(null,"rememberMe",[],Y,{type:"checkbox"},"remember me"),n&&r.a.createElement("img",{src:n,alt:"captcha"}),n&&$("Symmbols from image","captcha",[J],Y,{}),a&&r.a.createElement("div",{className:H.a.formSummaryError},a),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))}),Et=Object(ae.b)(function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}},{login:function(e,t,a,n){return function(){var r=Object(l.a)(s.a.mark(function r(o){var l,i;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f(e,t,a,n);case 2:0===(l=r.sent).data.resultCode?o(mt()):(10===l.data.resultCode&&o(pt()),i=l.data.messages.length>0?l.data.messages[0]:"Some error",o(Object(E.a)("login",{_error:i})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){return e.isAuth?r.a.createElement(D.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(ht,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))}),bt={initialized:!1},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(c.a)({},e,{initialized:!0});default:return e}},_t={},wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t;arguments.length>1&&arguments[1];return e},Pt=a(136),St=a(77),Ot=Object(ne.c)({profilePage:w,dialogsPage:S,sidebar:wt,usersPage:de,auth:dt,form:St.a,app:vt}),yt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.d,jt=Object(ne.e)(Ot,yt(Object(ne.a)(Pt.a))),kt=a(137),Ct=a.n(kt),Nt=function(){return r.a.createElement("div",{className:Ct.a.news},r.a.createElement("h2",null,"News in the world"),r.a.createElement("img",{src:"https://matzav.com/wp-content/uploads/2017/08/Wall-Street-Journal-696x607.jpg",alt:""}),r.a.createElement("p",null," Donald Trump"),r.a.createElement("p",null," Wladimir Putin"))},xt=r.a.lazy(function(){return a.e(1).then(a.bind(null,308))}),At=r.a.lazy(function(){return a.e(2).then(a.bind(null,309))}),Ut=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(N.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).catchAllUnhandledErrors=function(e){},a}return Object(A.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillMount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(gt,null),r.a.createElement(F,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(D.d,null,r.a.createElement(D.b,{path:"/dialogs",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(D.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(rt,null)}}),r.a.createElement(D.b,{path:"/users",render:function(){return r.a.createElement(Le,null)}}),r.a.createElement(D.b,{path:"/login",render:function(){return r.a.createElement(Et,null)}}),r.a.createElement(D.b,{path:"/news",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"loading...")},r.a.createElement(Nt,null))}}),r.a.createElement(D.b,{path:"/music",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"loading...")},r.a.createElement(xt,null))}}),r.a.createElement(D.b,{path:"/settings",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"loading...")},r.a.createElement(At,null))}}),r.a.createElement(D.b,{path:"*",render:function(){return r.a.createElement("div",null," 404")}})))):r.a.createElement(Ne,null)}}]),t}(n.Component),Tt=Object(ne.d)(D.g,Object(ae.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(mt());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(Ut),It=function(e){return r.a.createElement(I.a,null,r.a.createElement(ae.a,{store:jt},r.a.createElement(Tt,null)))};j.a.render(r.a.createElement(It,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},38:function(e,t,a){e.exports={formControl:"FormControls_formControl__K32mi",error:"FormControls_error__WPyk4",formSummaryError:"FormControls_formSummaryError__Y97Ad"}},47:function(e,t,a){e.exports={mainPhoto:"ProfileInfo_mainPhoto__1LhE8",contact:"ProfileInfo_contact__1dfyp"}},54:function(e,t,a){e.exports=a.p+"static/media/user.83427d44.png"},69:function(e,t,a){e.exports={users:"Users_users___oo6L",users__img:"Users_users__img__1FaoV",selected__page:"Users_selected__page__W8bdy",login__block:"Users_login__block__OW0Zy"}},70:function(e,t,a){e.exports={users:"Paginator_users__1fEa1",users__img:"Paginator_users__img__246Z6",selected__page:"Paginator_selected__page__24lML",login__block:"Paginator_login__block__MVGME",paginator:"Paginator_paginator__2EKbU",pageNumber:"Paginator_pageNumber__3la7m",selectedPage:"Paginator_selectedPage__3_ltT"}},74:function(e,t,a){e.exports=a.p+"static/media/circles.1181204b.svg"},98:function(e,t,a){e.exports={img:"Header_img__3vlP5",login__block:"Header_login__block__1AcFV"}}},[[163,4,3]]]);
//# sourceMappingURL=main.cac22647.chunk.js.map