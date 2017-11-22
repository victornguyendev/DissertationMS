!function(){"use strict";angular.module("angular",["ngAnimate","ngTouch","ngSanitize","ngResource","ngStorage","ui.router","ui.bootstrap","ui.bootstrap.datetimepicker","ui.utils.masks","datatables"])}(),function(){"use strict";function t(t,o,e,n,a,l,s,i){var r=this,c=(l.user.UserId,l.user.Token),u=s.id;console.log(l.user),r.post={},r.paymentlogs={Data:[{BackUserName:"Nguyễn Văn Khôi",BankNumber:"1234 2323 4343 2352",BankName:"TP Bank",Content:"sample string 2",Amount:3.1,DayTrading:"22-11-2017 02:33 PM"},{BackUserName:"Phan Minh Tú",BankNumber:"1234 2323 4343 2352",BankName:"ACB Bank",Content:"sample string 2",Amount:3.1,DayTrading:"22-11-2017 02:33 PM"}],Index:1,Size:2,Total:3},r.consultationLogs={Data:[{ConsultationLogId:1,CounselorId:1,CounselorName:"sample string 2",CustomerId:1,CustomerName:"sample string 3",CustomerNumPhone:"sample string 4",Content:"sample string 1",NumChar:6,DateTime:"22-11-2017 02:30 AM",SourceId:1,SourceName:"sample string 8",WebsiteId:1,WebsiteName:"sample string 9",IsPotential:!0},{ConsultationLogId:1,CounselorId:1,CounselorName:"sample string 2",CustomerId:1,CustomerName:"sample string 3",CustomerNumPhone:"sample string 4",Content:"sample string 2",NumChar:6,DateTime:"22-11-2017 02:30 AM",SourceId:1,SourceName:"sample string 8",WebsiteId:1,WebsiteName:"sample string 9",IsPotential:!0}],Index:1,Size:2,Total:3},t.listPosts(function(t){r.listpost=t,t&&t.Data.forEach(function(t,o){1==t.StatusPaymentCustomer?r.listpost.Data[o].StatusPaymentCustomer="Một phần":r.listpost.Data[o].StatusPaymentCustomer="Thanh toán đủ",0==t.StatusPost?r.listpost.Data[o].StatusPost="Chưa bắt đầu":1==t.StatusPost?r.listpost.Data[o].StatusPost="Đang làm":2==t.StatusPost?r.listpost.Data[o].StatusPost="Đã xong":r.listpost.Data[o].StatusPost="Hủy",t.Description.length>15&&(r.listpost.Data[o].Description=t.Description.slice(0,15)+"...")})}),o.listCollaborators(function(t){t&&(r.collaborators=t.Data)}),e.listCustomers(function(t){t&&(r.customers=t.Data)}),n.loginInfo(c,function(t){r.loginInfo=t}),r.post.CustomerId="",r.post.CustomerGender="",r.selectCustomer=function(){r.customers&&r.customers.forEach(function(t){r.post.CustomerNumPhone==t.NumPhone&&(r.post.CustomerName=t.FullName,r.post.CustomerEmail=t.Email,r.post.CustomerId=t.CustomerId,r.post.CustomerGender=t.Gender)})},r.viewDetail=function(t){i.location="/post/"+t},r.createPost=function(){r.post.CounselorId=r.loginInfo.CounselorId,t.addPost(r.post,function(t){console.log(t)})},u&&t.postDetail(u,function(t){r.post=t,console.log(t)})}t.$inject=["post","collaborator","customer","user","moment","$localStorage","$stateParams","$window"],angular.module("angular").controller("PostController",t)}(),function(){"use strict";function t(t,o,e){o.user||(e.location="/login");var n=o.user.Token;t.logout(n,function(t){delete o.user,e.location="/login"})}t.$inject=["user","$localStorage","$window"],angular.module("angular").controller("LogoutController",t)}(),function(){"use strict";function t(t,o,e){var n=this;o.user&&(e.location="/"),n.user={},n.login=function(){t.login(n.user,function(t){o.user=t,e.location="/"})}}t.$inject=["user","$localStorage","$window"],angular.module("angular").controller("LoginController",t)}(),function(){"use strict";function t(){}angular.module("angular").controller("HomeController",t)}(),function(){"use strict";function t(t,o,e,n,a,l,s,i,r,c){var u=this,d=c.id;u.consultant={},u.customer={},u.consultant.Datetime=new Date,u.isCheck=!1;var m=(i.user.UserId,i.user.Token);u.is_open=!1,u.showDateTimePicker=function(){u.is_open=!0},o.listConsultant(function(t){u.listConsultant=t,console.log(t),t&&t.Data.forEach(function(t,o){1==t.IsPotential?u.listConsultant.Data[o].IsPotential="Đã chốt":u.listConsultant.Data[o].IsPotential="Chưa chốt"})}),n.listCollaborators(function(t){t&&(u.collaborators=t.Data)}),a.listCustomers(function(t){t&&(u.customers=t.Data)}),t.listWebsites(function(t){t&&(u.consultant.page=t)}),t.listSources(function(t){console.log(t),t&&(u.consultant.source=t)}),l.loginInfo(m,function(t){u.loginInfo=t,console.log(t)}),u.addConsultant=function(){u.consultant.CounselorId=u.loginInfo.CounselorId,a.addCustomer(u.customer,function(t){console.log(t),0!=t&&null!=t&&(u.consultant.CustomerId=t,o.addConsultant(u.consultant,function(t){console.log(t)}))}),u.customer.CustomerId},u.viewDetail=function(t){r.location="/consultant/"+t},d&&o.consultantDetail(d,function(t){u.consultantDetail=t})}t.$inject=["common","consultant","post","collaborator","customer","user","moment","$localStorage","$window","$stateParams"],angular.module("angular").controller("ConsultantController",t)}(),function(){"use strict";function t(){function t(t){var o=this;t.user&&(o.userInfo=t.user)}t.$inject=["$localStorage"];var o={restrict:"E",templateUrl:"app/components/lte-sidebar/lte-sidebar.html",controller:t,controllerAs:"side",bindToController:!0};return o}angular.module("angular").directive("lteSidebar",t)}(),function(){"use strict";function t(t,o,e,n){var a=this;t(function(){var t=angular.element('<script src="assets/js/adminlte.js"></script>');angular.element("body").append(t)},0),e.user||(n.location="/login"),o.listWebsites(function(t){a.websites=t})}t.$inject=["$timeout","common","$localStorage","$window"],angular.module("angular").controller("MainController",t)}(),function(){"use strict";function t(){function t(t){var o=this;t.user&&(o.userInfo=t.user)}t.$inject=["$localStorage"];var o={restrict:"E",templateUrl:"app/components/lte-header/lte-header.html",controller:t,controllerAs:"header",bindToController:!0};return o}angular.module("angular").directive("lteHeader",t)}(),function(){"use strict";function t(){function t(){}var o={restrict:"E",templateUrl:"app/components/lte-footer/lte-footer.html",controller:t,controllerAs:"vm",bindToController:!0};return o}angular.module("angular").directive("lteFooter",t)}(),function(){"use strict";function t(){var t={restrict:"E",scope:!1,link:function(t,o,e){if("text/javascript-lazy"==e.type){var n=o.text(),a=new Function(n);a()}}};return t}angular.module("angular").directive("script",t)}(),function(){"use strict";function t(){var t={restrict:"E",scope:!1,link:function(t,o,e){if(void 0!=e.src){var n=document.createElement("script");n.src=e.src,o.append(n)}}};return t}angular.module("angular").directive("loadScript",t)}(),function(){"use strict";function t(t,o,e){return{login:function(n,a){var l={Username:n.username,Password:n.password},s={header:{"Content-Type":"application/json"}};e.post(t+"login/authorize",l,s).then(function(t){a(t.data)},function(t){o.log(t)})},loginInfo:function(n,a){var l={header:{"Content-Type":"application/json"}};e.get(t+"login/info?token="+n,l).then(function(t){a(t.data)},function(t){o.log(t)})},logout:function(n,a){var l={header:{"Content-Type":"application/json"}};e.get(t+"login/logout?token="+n,l).then(function(t){a(t.data)},function(t){o.log(t)})}}}t.$inject=["api","$log","$http"],angular.module("angular").factory("user",t)}(),function(){"use strict";function t(t,o,e){return{listPosts:function(n){var a={Filter:null,Sort:null,Index:1,Size:100},l={header:{"Content-Type":"application/json"}};e.post(t+"posts/filter",a,l).then(function(t){n(t.data)},function(t){o.log(t)})},addPost:function(n,a){console.log(n);var l={OrderNumChar:n.OrderNumChar,OrderAmount:n.OrderAmount,CustomerId:n.CustomerId,CustomerName:n.CustomerName,CustomerNumPhone:n.CustomerNumPhone,CustomerEmail:n.CustomerEmail,CustomerGender:n.CustomerGender,Summary:n.Summary,Description:n.Description,CounselorId:n.CounselorId,CollaboratorId:n.CollaboratorId,CollNumChar:n.CollNumChar,SourceId:n.SourceId,WebsiteId:n.WebsiteId},s={header:{"Content-Type":"application/json"}};e.post(t+"posts/create",l,s).then(function(t){a(t.data)},function(t){o.log(t)})},postDetail:function(n,a){var l={header:{"Content-Type":"application/json"}};e.get(t+"posts/get?id="+n,l).then(function(t){a(t.data)},function(t){o.log(t)})}}}t.$inject=["api","$log","$http"],angular.module("angular").factory("post",t)}(),function(){"use strict";function t(t,o,e){return{listCustomers:function(n){var a={Filter:null,Sort:null,Index:null,Size:null},l={header:{"Content-Type":"application/json"}};e.post(t+"customers/filter",a,l).then(function(t){n(t.data)},function(t){o.log(t)})},addCustomer:function(n,a){console.log(n);var l={FullName:n.FullName,NumPhone:n.NumPhone,Email:n.Email};console.log(l);var s={header:{"Content-Type":"application/json"}};e.post(t+"customers/new",l,s).then(function(t){a(t.data)},function(t){o.log(t)})}}}t.$inject=["api","$log","$http"],angular.module("angular").factory("customer",t)}(),function(){"use strict";function t(t,o,e){return{listConsultant:function(n){var a={Filter:null,Sort:null,Index:1,Size:100},l={header:{"Content-Type":"application/json"}};e.post(t+"consultationlog/filter",a,l).then(function(t){n(t.data)},function(t){o.log(t)})},addConsultant:function(n,a){console.log(n);var l={CustomerId:n.CustomerId,Content:n.Content,Datetime:n.Datetime,NumChar:n.NumChar,SourceId:n.SourceId,WebsiteId:n.WebsiteId,CounselorName:n.CounselorName,IsPotential:n.IsPotential};console.log(l);var s={header:{"Content-Type":"application/json"}};e.post(t+"consultationlog/new",l,s).then(function(t){a(t.data)},function(t){o.log(t)})},consultantDetail:function(n,a){var l={header:{"Content-Type":"application/json"}};e.get(t+"consultationlog/get?id="+n,l).then(function(t){a(t.data)},function(t){o.log(t)})}}}t.$inject=["api","$log","$http"],angular.module("angular").factory("consultant",t)}(),function(){"use strict";function t(t,o,e){return{listWebsites:function(n){var a={header:{"Content-Type":"application/json"}};e.get(t+"common/websites",a).then(function(t){n(t.data)},function(t){o.log(t)})},listSources:function(n){var a={header:{"Content-Type":"application/json"}};e.get(t+"common/sources",a).then(function(t){n(t.data)},function(t){o.log(t)})}}}t.$inject=["api","$log","$http"],angular.module("angular").factory("common",t)}(),function(){"use strict";function t(t,o,e){return{listCollaborators:function(n){var a={Filter:null,Sort:null,Index:null,Size:null},l={header:{"Content-Type":"application/json"}};e.post(t+"collaborators/filter",a,l).then(function(t){n(t.data)},function(t){o.log(t)})}}}t.$inject=["api","$log","$http"],angular.module("angular").factory("collaborator",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("angular").run(t)}(),function(){"use strict";function t(t,o){t.state("main",{templateUrl:"app/components/lte-main/lte-main.html",controller:"MainController",controllerAs:"main"}).state("main.home",{url:"/",templateUrl:"app/pages/home/home.html",controller:"HomeController",controllerAs:"vm"}).state("login",{url:"/login",templateUrl:"app/pages/login/login.html",controller:"LoginController",controllerAs:"vm"}).state("logout",{url:"/logout",controller:"LogoutController",controllerAs:"vm"}).state("main.post",{url:"/post",templateUrl:"app/pages/post/post.html",controller:"PostController",controllerAs:"vm"}).state("main.post-add",{url:"/post/add",templateUrl:"app/pages/post/post-add.html",controller:"PostController",controllerAs:"vm"}).state("main.post-detail",{url:"/post/:id",templateUrl:"app/pages/post/post-detail.html",controller:"PostController",controllerAs:"vm"}).state("main.consultant",{url:"/consultant",templateUrl:"app/pages/consultant/consultant.html",controller:"ConsultantController",controllerAs:"vm"}).state("main.consultant-add",{url:"/consultant/add",templateUrl:"app/pages/consultant/consultant-add.html",controller:"ConsultantController",controllerAs:"vm"}).state("main.consultant-detail",{url:"/consultant/:id",templateUrl:"app/pages/consultant/consultant-detail.html",controller:"ConsultantController",controllerAs:"vm"}),o.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("angular").config(t)}(),function(){"use strict";angular.module("angular").constant("moment",moment).constant("_",window._).constant("api","http://103.68.82.97:9092/api/")}(),function(){"use strict";function t(t,o){t.debugEnabled(!0),o.hashPrefix("").html5Mode(!0)}t.$inject=["$logProvider","$locationProvider"],angular.module("angular").config(t)}(),angular.module("angular").run(["$templateCache",function(t){t.put("app/components/lte-footer/lte-footer.html",'<!-- Main Footer --><footer class=main-footer><!-- To the right --><div class="pull-right hidden-xs"><b>Storm</b> Labs</div><!-- Default to the left --> <strong>Copyright &copy; 2017 <a href=#>Company</a>.</strong> All rights reserved.</footer>'),t.put("app/components/lte-header/lte-header.html",'<!-- Main Header --><header class=main-header><!-- Logo --> <a href=index2.html class=logo><!-- mini logo for sidebar mini 50x50 pixels --> <span class=logo-mini><b>D</b><small>MS</small></span><!-- logo for regular state and mobile devices --> <span class=logo-lg><b>Dissertations</b> MS</span> </a><!-- Header Navbar --><nav class="navbar navbar-static-top" role=navigation><!-- Sidebar toggle button--> <a href=# class=sidebar-toggle data-toggle=push-menu role=button><span class=sr-only>Toggle navigation</span> </a><!-- Navbar Right Menu --><div class=navbar-custom-menu><ul class="nav navbar-nav"><!-- Notifications Menu --><li class="dropdown notifications-menu"><!-- Menu toggle button --> <a href=# class=dropdown-toggle data-toggle=dropdown><i class="fa fa-bell-o"></i> <span class="label label-warning">10</span></a><ul class=dropdown-menu><li class=header>You have 10 notifications</li><li><!-- Inner Menu: contains the notifications --><ul class=menu><li><!-- start notification --> <a href=#><i class="fa fa-users text-aqua"></i> 5 new members joined today</a></li><!-- end notification --></ul></li><li class=footer><a href=#>View all</a></li></ul></li><li class="dropdown user user-menu"><!-- Menu Toggle Button --> <a href=# class=dropdown-toggle data-toggle=dropdown><!-- The user image in the navbar--> <img src=assets/images/avatar.png class=user-image alt="User Image"><!-- hidden-xs hides the username on small devices so only the image appears. --> <span class=hidden-xs>{{header.userInfo.Username}}</span></a><ul class=dropdown-menu><!-- The user image in the menu --><li class=user-header><img src=assets/images/avatar.png class=img-circle alt="User Image"><p>{{header.userInfo.Username}}</p></li><!-- Menu Footer--><li class=user-footer><div class=pull-left><a href=# class="btn btn-default btn-flat">Profile</a></div><div class=pull-right><a href=/logout class="btn btn-default btn-flat">Sign out</a></div></li></ul></li></ul></div></nav></header>'),t.put("app/components/lte-main/lte-main.html","<div class=wrapper><lte-header></lte-header><lte-sidebar></lte-sidebar><!-- Content Wrapper. Contains page content --><div class=content-wrapper><!-- Content Header (Page header) --><div ui-view></div></div><lte-footer></lte-footer></div>"),t.put("app/components/lte-sidebar/lte-sidebar.html",'<!-- Left side column. contains the logo and sidebar --><aside class=main-sidebar><!-- sidebar: style can be found in sidebar.less --><section class=sidebar><!-- Sidebar user panel (optional) --><div class=user-panel><div class="pull-left image"><img src=assets/images/avatar.png class=img-circle alt="User Image"></div><div class="pull-left info"><p>{{side.userInfo.Username}}</p><!-- Status --> <a href=#><i class="fa fa-circle text-success"></i> Online</a></div></div><!-- Sidebar Menu --><ul class=sidebar-menu data-widget=tree><!-- Optionally, you can add icons to the links --><li><a href=/ ><i class="fa fa-dashboard"></i> <span>Dashboard</span></a></li><li class=treeview><a href=#><i class="fa fa-link"></i> <span>Tư vấn</span> <span class=pull-right-container><i class="fa fa-angle-left pull-right"></i></span></a><ul class=treeview-menu><li><a href=/consultant/add>Tư vấn mới</a></li><li><a href=/consultant>Danh sách tư vấn</a></li></ul></li><li class=treeview><a href=#><i class="fa fa-link"></i> <span>Bài viết</span> <span class=pull-right-container><i class="fa fa-angle-left pull-right"></i></span></a><ul class=treeview-menu><li><a href=/post>Danh sách bài viết</a></li><li><a href=/post/add>Tạo bài viết mới</a></li></ul></li><li class=treeview><a href=#><i class="fa fa-link"></i> <span>Thanh toán</span> <span class=pull-right-container><i class="fa fa-angle-left pull-right"></i></span></a><ul class=treeview-menu><li><a href="">Thanh toán mới</a></li><li><a href="">Danh sách thanh toán</a></li></ul></li><li class=treeview><a href=#><i class="fa fa-link"></i> <span>Khách hàng</span> <span class=pull-right-container><i class="fa fa-angle-left pull-right"></i></span></a><ul class=treeview-menu><li><a href="">Khách mới</a></li><li><a href="">Danh sách khách hàng</a></li></ul></li></ul><!-- /.sidebar-menu --></section><!-- /.sidebar --></aside>'),t.put("app/pages/consultant/consultant-add.html",'<section class=content-header><h1>Tư vấn mới</h1></section><!-- Main content --><section class="content container-fluid"><form name=formConsultant ng-submit=vm.addConsultant()><div class="box box-primary"><div class=box-body><div class=row><div class=col-md-6><div class=form-group><div class=form-group><label>Tên khách hàng</label><input class=form-control placeholder="Họ tên" ng-model=vm.customer.FullName></div><div class=form-group><label>Số điện thoại</label><input class=form-control placeholder="Số điện thoại" ng-model=vm.customer.NumPhone></div><div class=form-group><label>Nhu cầu khách hàng</label><textarea class=form-control placeholder="Nhu cầu khách hàng" rows=5 ng-model=vm.consultant.Content></textarea></div><div class=form-group><label><input type=checkbox ng-true-value=1 ng-false-value=0 ng-model=vm.consultant.IsPotential> Đã chốt</label></div><div class=form-group ng-if="vm.consultant.IsPotential == \'1\'"><div class=form-group><label>Nội dung bài viết</label><textarea class=form-control placeholder="Nội dung bài viết" rows=3 ng-model=vm.consultant.postContent></textarea></div><div class=form-group><label>Thành tiền</label><div class="form-group input-group"><input type=text class=form-control ui-number-mask=3 g-init="vm.consultant.postMoney = 10000000" ng-model=vm.consultant.postMoney> <span class=input-group-addon>VNĐ</span></div></div></div></div></div><!-- /.col --><div class=col-md-6><div class=form-group><label>Ngày tư vấn</label><div class="input-group width-full"><input type=text class="form-control datetimepicker" ng-init=vm.consultant.Datetime datetime-picker="dd-MM-yyyy hh:mm:ss" ng-model=vm.consultant.Datetime is-open=vm.is_open ng-click=vm.showDateTimePicker()></div></div><div class=form-group><label>Số từ</label><div class="form-group input-group"><input type=number class=form-control ng-init="vm.consultant.NumChar = 0" ng-model=vm.consultant.NumChar> <span class=input-group-addon>Từ</span></div></div><div class=form-group><label>Nguồn tham khảo</label><select class=form-control ng-model=vm.consultant.SourceId><option value="">Lựa chọn nguồn tham khảo</option><option ng-repeat="item in vm.consultant.source" value={{item.SourceId}}>{{item.Name}}</option></select></div><div class=form-group><label>Trang</label><select class=form-control ng-model=vm.consultant.WebsiteId><option value="">Lựa chọn trang</option><option ng-repeat="item in vm.consultant.page" value={{item.WebsiteId}}>{{item.Name}}</option></select></div></div></div><button type=submit class="btn btn-primary">Lưu lại</button> <button type=reset class="btn btn-default">Huỷ</button></div></div></form></section><!-- /.content -->'),t.put("app/pages/consultant/consultant-detail.html",'<section class=content-header><h1>Chi tiết tư vấn</h1></section><!-- Main content --><section class="content container-fluid"><form name=formConsultant ng-submit=vm.addConsultant()><div class="box box-primary"><div class=box-body><div class=row><div class=col-md-6><div class=form-group><div class=form-group><label>Tên khách hàng</label><input class=form-control placeholder="Họ tên" ng-model=vm.consultantDetail.CustomerName></div><div class=form-group><label>Số điện thoại</label><input class=form-control placeholder="Số điện thoại" ng-model=vm.consultantDetail.CustomerNumPhone></div><div class=form-group><label>Nhu cầu khách hàng</label><textarea class=form-control placeholder="Nhu cầu khách hàng" rows=5 ng-model=vm.consultantDetail.Content></textarea></div><div class=form-group><label><input type=checkbox ng-model=vm.consultantDetail.IsPotential> Đã chốt</label></div></div></div><!-- /.col --><div class=col-md-6><div class=form-group><label>Ngày tư vấn</label><div class="input-group width-full"><input type=text class=form-control datetime-picker="dd-MM-yyyy HH:mm:ss" ng-model=vm.datetime is-open=vm.is_open ng-value=vm.consultantDetail.DateTime ng-click=vm.showDateTimePicker()></div></div><div class=form-group><label>Số từ</label><div class="form-group input-group"><input type=number class=form-control ng-model=vm.consultantDetail.NumChar> <span class=input-group-addon>Từ</span></div></div><div class=form-group><label>Nguồn</label><select class=form-control ng-model=vm.consultant.a><option value="">Lựa chọn nguồn</option><option ng-repeat="item in vm.consultant.source" value={{vm.consultantDetail.SourceId}}>{{item.Name}}</option></select></div><div class=form-group><label>Website</label><select class=form-control ng-model=vm.consultant.sss><option value="">Lựa chọn trang</option><option ng-repeat="item in vm.consultant.page" value={{vm.consultantDetail.WebsiteId}}>{{item.Name}}</option></select></div></div></div><button type=submit class="btn btn-primary">Lưu lại</button></div></div></form></section><!-- /.content -->'),t.put("app/pages/consultant/consultant.html",'<section class=content-header><h1>Danh sách tư vấn</h1></section><!-- Main content --><section class="content container-fluid"><div class=row><div class=col-xs-12><div class=box><!-- /.box-header --><div class=box-body><table datatable=ng class="table table-bordered table-striped"><thead><tr><th>Khách hàng</th><th>Số điện thoại</th><th>Số từ</th><th>Thời gian</th><th>Yêu cầu</th><th>Tư vấn viên</th><th>Trạng thái</th></tr></thead><tbody><tr ng-repeat="item in vm.listConsultant.Data" ng-click=vm.viewDetail(item.ConsultationLogId)><td>{{item.CustomerName}}</td><td>{{item.CustomerNumPhone}}</td><td>{{item.NumChar}}</td><td>{{item.DateTime}}</td><td>{{item.Content}}</td><td>{{item.CounselorName}}</td><td>{{item.IsPotential}}</td></tr></tbody></table></div><!-- /.box-body --></div><!-- /.box --></div><!-- /.col --></div><!-- /.row --></section><!-- /.content -->'),t.put("app/pages/customer/customer.html",""),t.put("app/pages/home/home.html",'<section class=content-header><h1>Home <small>Dashboard</small></h1><ol class=breadcrumb><li class=active>Home</li></ol></section><!-- Main content --><section class="content container-fluid"></section><!-- /.content -->'),t.put("app/pages/login/login.html",'<div class=login-box><div class=login-logo><a href=/ ><b>Dissertations</b> MS</a></div><!-- /.login-logo --><div class=login-box-body><p class=login-box-msg>Sign in to start your session</p><form ng-submit=vm.login()><div class="form-group has-feedback"><input type=text class=form-control placeholder=Username ng-model=vm.user.username> <span class="glyphicon glyphicon-envelope form-control-feedback"></span></div><div class="form-group has-feedback"><input type=password class=form-control placeholder=Password ng-model=vm.user.password> <span class="glyphicon glyphicon-lock form-control-feedback"></span></div><div class=row><div class=col-xs-8><div class=checkbox><label><input type=checkbox> Remember Me</label></div></div><!-- /.col --><div class=col-xs-4><button type=submit class="btn btn-primary btn-block btn-flat">Sign In</button></div><!-- /.col --></div></form><!-- /.social-auth-links --> <a href=#>I forgot my password</a><br></div><!-- /.login-box-body --></div><!-- /.login-box -->'),t.put("app/pages/post/post-add.html",'<section class=content-header><h1>Tạo bài viết mới</h1></section><!-- Main content --><section class="content container-fluid"><form name=postForm ng-submit=vm.createPost()><div class="box box-primary"><div class=box-body><div class=row><div class=col-md-6><div class=form-group><label>Summary</label><input type=text class=form-control ng-model=vm.post.Summary></div><div class=form-group><label>Số từ</label><div class=input-group><input type=number class=form-control placeholder=0 ng-model=vm.post.OrderNumChar ng-init="vm.post.OrderNumChar = 0"> <span class=input-group-addon>Từ</span></div></div><div class=form-group><label>Website</label><select class=form-control ng-model=vm.post.WebsiteId ng-init="vm.post.WebsiteId = \'\'"><option value="">Select website</option><option ng-repeat="item in main.websites" value={{item.WebsiteId}}>{{item.Name}}</option></select></div></div><div class=col-md-6><div class=form-group><label>Mô tả bài viết</label><textarea class="form-control post-description" rows=4 ng-model=vm.post.Description></textarea></div><div class=form-group><label>Thành tiền</label><div class=input-group><input type=number class=form-control ng-model=vm.post.OrderAmount> <span class=input-group-addon>VNĐ</span></div></div></div></div></div><div class=row><div class=col-md-6><div class=box-header><h3 class=box-title>Cộng tác viên</h3></div><div class=box-body><div class=form-group><label>Cộng tác viên</label><select class=form-control ng-model=vm.post.CollaboratorId ng-init="vm.post.CollaboratorId = \'\'"><option value="">Select Collaborator</option><option ng-repeat="item in vm.collaborators" value={{item.id}}>{{item.name}}</option></select></div><div class=form-group><label>Số từ chỉ định</label><div class=input-group><input type=number class=form-control placeholder=0 ng-model=vm.post.CollNumChar ng-init="vm.post.CollNumChar = 0"> <span class=input-group-addon>Từ</span></div></div></div></div><div class=col-md-6><div class=box-header><h3 class=box-title>Khách hàng</h3></div><div class=box-body><div class=form-group><label>Số điện thoại</label><!-- <select class="form-control select2" ng-model="vm.post.CustomerNumPhone" ng-change="vm.selectCustomer()">\r\n                <option ng-repeat="item in vm.customers" value="{{item.NumPhone}}">{{item.FulllName}}</option>\r\n              </select> --> <input type=text class=form-control ng-model=vm.post.CustomerNumPhone list=NumPhone ng-change=vm.selectCustomer()><datalist id=NumPhone><option ng-repeat="item in vm.customers" value={{item.NumPhone}}></option></datalist></div><div class=form-group><label>Tên khách hàng</label><input type=text class=form-control ng-model=vm.post.CustomerName></div><div class=form-group><label>Email</label><input type=email class=form-control ng-model=vm.post.CustomerEmail></div></div></div></div><div class=box-footer><button type=submit class="btn btn-primary">Lưu lại</button> <button type=reset class="btn btn-default">Reset</button></div></div></form></section><!-- /.content -->'),t.put("app/pages/post/post-detail.html",'<section class="content-header clearfix"><h1 class=pull-left>Chi tiết bài viết</h1><div class=pull-right><button type=submit class="btn btn-primary">Lưu lại</button> <button type=reset class="btn btn-default">Hủy</button></div></section><!-- Main content --><section class="content container-fluid"><form name=postForm ng-submit=vm.updatePost()><div class="box box-primary"><div class=box-body><div class=row><div class=col-md-6><div class=form-group><label>Summary</label><input type=text class=form-control ng-model=vm.post.Summary></div><div class=form-group><label>Số từ</label><div class=input-group><input type=number class=form-control placeholder=0 ng-model=vm.post.OrderNumChar> <span class=input-group-addon>Từ</span></div></div><div class=form-group><label>Website</label><select class=form-control ng-model=vm.post.WebsiteId ng-init="vm.post.WebsiteId = \'\'"><option value="">Select website</option><option ng-repeat="item in main.websites" value={{item.WebsiteId}}>{{item.Name}}</option></select></div></div><div class=col-md-6><div class=form-group><label>Mô tả bài viết</label><textarea class="form-control post-description" rows=4 ng-model=vm.post.Description></textarea></div><div class=form-group><label>Thành tiền</label><div class=input-group><input type=number class=form-control ng-model=vm.post.OrderAmount> <span class=input-group-addon>VNĐ</span></div></div></div></div></div><div class=row><div class=col-md-6><div class=box-header><h3 class=box-title>Cộng tác viên</h3></div><div class=box-body><div class=form-group><label>Cộng tác viên</label><select class=form-control ng-model=vm.post.CollaboratorId ng-init="vm.post.CollaboratorId = \'\'"><option value="">Select Collaborator</option><option ng-repeat="item in vm.collaborators" value={{item.id}}>{{item.name}}</option></select></div><div class=form-group><label>Số từ chỉ định</label><div class=input-group><input type=number class=form-control placeholder=0 ng-model=vm.post.CollNumChar> <span class=input-group-addon>Từ</span></div></div></div></div><div class=col-md-6><div class=box-header><h3 class=box-title>Khách hàng</h3></div><div class=box-body><div class=form-group><label>Số điện thoại</label><!-- <select class="form-control select2" ng-model="vm.post.CustomerNumPhone" ng-change="vm.selectCustomer()">\r\n				                <option ng-repeat="item in vm.customers" value="{{item.NumPhone}}">{{item.FulllName}}</option>\r\n				            </select> --> <input type=text class=form-control ng-model=vm.post.CustomerNumPhone list=NumPhone ng-change=vm.selectCustomer()><datalist id=NumPhone><option ng-repeat="item in vm.customers" value={{item.NumPhone}}></option></datalist></div><div class=form-group><label>Tên khách hàng</label><input type=text class=form-control ng-model=vm.post.CustomerName></div><div class=form-group><label>Email</label><input type=email class=form-control ng-model=vm.post.CustomerEmail></div></div></div></div></div><div class="box box-default"><div class=row><div class=col-md-12><div class="box-header with-border"><h3 class=box-title>Lịch sử tương tác</h3></div><div class=box-body><div class=form-group><table class="table table-bordered table-striped"><thead><tr><th>Nội dung</th><th>Thời điểm tương tác</th><th>Hành động dự kiến</th><th>Thời gian dự kiến</th></tr></thead><tbody><tr ng-repeat="item in vm.consultationLogs.Data"><td>{{item.Content}}</td><td>{{item.DateTime}}</td><td>{{item.DateTime}}</td><td>{{item.DateTime}}</td></tr></tbody></table></div></div></div></div></div><div class="box box-default"><div class=row><div class=col-md-12><div class="box-header with-border"><h3 class=box-title>Lịch sử thanh toán</h3></div><div class=box-body><div class=form-group><table class="table table-bordered table-striped"><thead><tr><th>Chủ khoảng</th><th>Số tài khoản</th><th>Ngân hàng</th><th>Mô tả</th><th>Số tiền</th><th>Ngày giao dịch</th></tr></thead><tbody><tr ng-repeat="item in vm.paymentlogs.Data"><td>{{item.BackUserName}}</td><td>{{item.BankNumber}}</td><td>{{item.BankName}}</td><td>{{item.Content}}</td><td>{{item.Amount}}</td><td>{{item.DayTrading}}</td></tr></tbody></table></div></div></div></div></div></form></section><!-- /.content -->'),t.put("app/pages/post/post.html",'<section class=content-header><h1>Bài viết</h1><ol class=breadcrumb><li><a href=#><i class="fa fa-dashboard"></i> Home</a></li><li class=active>Post</li></ol></section><!-- Main content --><section class="content container-fluid"><div class=row><div class=col-xs-12><div class="box box-primary"><div class=box-header><h3 class=box-title>Danh sách bài viết</h3></div><!-- /.box-header --><div class=box-body><table datatable=ng class="table table-bordered table-striped"><thead><tr><th>Khách hàng</th><th>Mô tả</th><th>CTV</th><th>Số tiền</th><th>Trạng thái bài viết</th><th>Trạng thái thanh toán</th></tr></thead><tbody><tr class=table-item-link ng-repeat="item in vm.listpost.Data" ng-click=vm.viewDetail(item.PostId)><td>{{item.CustomerName}}</td><td>{{item.Description}}</td><td>{{item.CollaboratorName}}</td><td>{{item.OrderAmount}}</td><td>{{item.StatusPost}}</td><td>{{item.StatusPaymentCustomer}}</td></tr></tbody></table></div><!-- /.box-body --></div><!-- /.box --></div><!-- /.col --></div><!-- /.row --></section><!-- /.content -->');
}]);