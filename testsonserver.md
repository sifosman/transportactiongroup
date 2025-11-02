*** System restart required ***
Last login: Sun Nov  2 10:22:02 2025 from 105.243.4.24
root@ubuntu-4gb-hel1-2:~# curl -i -X POST "https://learning.transportactiongroup.com/local/tco/endpoints/tco_save.php" \
  -H "Origin: https://transportactiongroup.vercel.app" \
  -H "Content-Type: application/json" \
  --cookie "MoodleSession=gu21gu2c354nqvkjj6l07sgldm" \
  --data '{"name":"South Africa N3 - Fleet Analysis","notes":"Initial test","corridor":"south-africa","inputs":{"corridorName":"South Africa"},"results":{"comparison":{}}}'
HTTP/2 404
server: nginx/1.24.0 (Ubuntu)
date: Sun, 02 Nov 2025 10:59:31 GMT
content-type: text/html; charset=utf-8
expires:
cache-control: private, pre-check=0, post-check=0, max-age=0, no-transform
pragma: no-cache
access-control-allow-origin: https://transportactiongroup.vercel.app
access-control-allow-credentials: true
access-control-allow-methods: GET, POST, PATCH, DELETE, OPTIONS
access-control-allow-headers: Content-Type
content-language: en
content-script-type: text/javascript
content-style-type: text/css
x-ua-compatible: IE=edge
accept-ranges: none
x-frame-options: sameorigin

<!DOCTYPE html>

<html  dir="ltr" lang="en" xml:lang="en">
<head>
    <title>Error | TAG LMS</title>
    <link rel="shortcut icon" href="https://learning.transportactiongroup.com/pluginfile.php/1/core_admin/favicon/64x64/1762077687/TAGhiresblack-B_oD1Wj3.png" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="moodle, Error | TAG LMS" />
<link rel="stylesheet" type="text/css" href="https://learning.transportactiongroup.com/theme/yui_combo.php?rollup/3.18.1/yui-moodlesimple.css" /><script id="firstthemesheet" type="text/css">/** Required in order to fix style inclusion problems in IE with YUI **/</script><link rel="stylesheet" type="text/css" href="https://learning.transportactiongroup.com/theme/styles.php/boost/1762077687_1759850523/all" />
<script>
//<![CDATA[
var M = {}; M.yui = {};
M.pageloadstarttime = new Date();
M.cfg = {"wwwroot":"https:\/\/learning.transportactiongroup.com","apibase":"https:\/\/learning.transportactiongroup.com\/r.php\/api","homeurl":{},"sesskey":"myHolqxBsp","sessiontimeout":"28800","sessiontimeoutwarning":"1200","themerev":"1762077687","slasharguments":1,"theme":"boost","iconsystemmodule":"core\/icon_system_fontawesome","jsrev":"1762077687","admin":"admin","svgicons":true,"usertimezone":"Africa\/Johannesburg","language":"en","courseId":1,"courseContextId":2,"contextid":1,"contextInstanceId":0,"langrev":1762077687,"templaterev":"1762077687","siteId":1,"userId":2,"developerdebug":true};var yui1ConfigFn = function(me) {if(/-skin|reset|fonts|grids|base/.test(me.name)){me.type='css';me.path=me.path.replace(/\.js/,'.css');me.path=me.path.replace(/\/yui2-skin/,'/assets/skins/sam/yui2-skin')}};
var yui2ConfigFn = function(me) {var parts=me.name.replace(/^moodle-/,'').split('-'),component=parts.shift(),module=parts[0],min='-min';if(/-(skin|core)$/.test(me.name)){parts.pop();me.type='css';min=''}
if(module){var filename=parts.join('-');me.path=component+'/'+module+'/'+filename+min+'.'+me.type}else{me.path=component+'/'+component+'.'+me.type}};
YUI_config = {"debug":true,"base":"https:\/\/learning.transportactiongroup.com\/lib\/yuilib\/3.18.1\/","comboBase":"https:\/\/learning.transportactiongroup.com\/theme\/yui_combo.php?","combine":true,"filter":"RAW","insertBefore":"firstthemesheet","groups":{"yui2":{"base":"https:\/\/learning.transportactiongroup.com\/lib\/yuilib\/2in3\/2.9.0\/build\/","comboBase":"https:\/\/learning.transportactiongroup.com\/theme\/yui_combo.php?","combine":true,"ext":false,"root":"2in3\/2.9.0\/build\/","patterns":{"yui2-":{"group":"yui2","configFn":yui1ConfigFn}}},"moodle":{"name":"moodle","base":"https:\/\/learning.transportactiongroup.com\/theme\/yui_combo.php?m\/1762077687\/","combine":true,"comboBase":"https:\/\/learning.transportactiongroup.com\/theme\/yui_combo.php?","ext":false,"root":"m\/1762077687\/","patterns":{"moodle-":{"group":"moodle","configFn":yui2ConfigFn}},"filter":"DEBUG","modules":{"moodle-core-maintenancemodetimer":{"requires":["base","node"]},"moodle-core-blocks":{"requires":["base","node","io","dom","dd","dd-scroll","moodle-core-dragdrop","moodle-core-notification"]},"moodle-core-notification":{"requires":["moodle-core-notification-dialogue","moodle-core-notification-alert","moodle-core-notification-confirm","moodle-core-notification-exception","moodle-core-notification-ajaxexception"]},"moodle-core-notification-dialogue":{"requires":["base","node","panel","escape","event-key","dd-plugin","moodle-core-widget-focusafterclose","moodle-core-lockscroll"]},"moodle-core-notification-alert":{"requires":["moodle-core-notification-dialogue"]},"moodle-core-notification-confirm":{"requires":["moodle-core-notification-dialogue"]},"moodle-core-notification-exception":{"requires":["moodle-core-notification-dialogue"]},"moodle-core-notification-ajaxexception":{"requires":["moodle-core-notification-dialogue"]},"moodle-core-actionmenu":{"requires":["base","event","node-event-simulate"]},"moodle-core-handlebars":{"condition":{"trigger":"handlebars","when":"after"}},"moodle-core-event":{"requires":["event-custom"]},"moodle-core-chooserdialogue":{"requires":["base","panel","moodle-core-notification"]},"moodle-core-lockscroll":{"requires":["plugin","base-build"]},"moodle-core-dragdrop":{"requires":["base","node","io","dom","dd","event-key","event-focus","moodle-core-notification"]},"moodle-core_availability-form":{"requires":["base","node","event","event-delegate","panel","moodle-core-notification-dialogue","json"]},"moodle-course-categoryexpander":{"requires":["node","event-key"]},"moodle-course-management":{"requires":["base","node","io-base","moodle-core-notification-exception","json-parse","dd-constrain","dd-proxy","dd-drop","dd-delegate","node-event-delegate"]},"moodle-course-util":{"requires":["node"],"use":["moodle-course-util-base"],"submodules":{"moodle-course-util-base":{},"moodle-course-util-section":{"requires":["node","moodle-course-util-base"]},"moodle-course-util-cm":{"requires":["node","moodle-course-util-base"]}}},"moodle-course-dragdrop":{"requires":["base","node","io","dom","dd","dd-scroll","moodle-core-dragdrop","moodle-core-notification","moodle-course-coursebase","moodle-course-util"]},"moodle-form-shortforms":{"requires":["node","base","selector-css3","moodle-core-event"]},"moodle-form-dateselector":{"requires":["base","node","overlay","calendar"]},"moodle-question-searchform":{"requires":["base","node"]},"moodle-question-chooser":{"requires":["moodle-core-chooserdialogue"]},"moodle-availability_completion-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_date-form":{"requires":["base","node","event","io","moodle-core_availability-form"]},"moodle-availability_grade-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_group-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_grouping-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_profile-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-mod_assign-history":{"requires":["node","transition"]},"moodle-mod_customcert-rearrange":{"requires":["dd-delegate","dd-drag"]},"moodle-mod_quiz-modform":{"requires":["base","node","event"]},"moodle-mod_quiz-quizbase":{"requires":["base","node"]},"moodle-mod_quiz-util":{"requires":["node","moodle-core-actionmenu"],"use":["moodle-mod_quiz-util-base"],"submodules":{"moodle-mod_quiz-util-base":{},"moodle-mod_quiz-util-slot":{"requires":["node","moodle-mod_quiz-util-base"]},"moodle-mod_quiz-util-page":{"requires":["node","moodle-mod_quiz-util-base"]}}},"moodle-mod_quiz-questionchooser":{"requires":["moodle-core-chooserdialogue","moodle-mod_quiz-util","querystring-parse"]},"moodle-mod_quiz-autosave":{"requires":["base","node","event","event-valuechange","node-event-delegate","io-form","datatype-date-format"]},"moodle-mod_quiz-dragdrop":{"requires":["base","node","io","dom","dd","dd-scroll","moodle-core-dragdrop","moodle-core-notification","moodle-mod_quiz-quizbase","moodle-mod_quiz-util-base","moodle-mod_quiz-util-page","moodle-mod_quiz-util-slot","moodle-course-util"]},"moodle-mod_quiz-toolboxes":{"requires":["base","node","event","event-key","io","moodle-mod_quiz-quizbase","moodle-mod_quiz-util-slot","moodle-core-notification-ajaxexception"]},"moodle-message_airnotifier-toolboxes":{"requires":["base","node","io"]},"moodle-report_eventlist-eventfilter":{"requires":["base","event","node","node-event-delegate","datatable","autocomplete","autocomplete-filters"]},"moodle-report_loglive-fetchlogs":{"requires":["base","event","node","io","node-event-delegate"]},"moodle-gradereport_history-userselector":{"requires":["escape","event-delegate","event-key","handlebars","io-base","json-parse","moodle-core-notification-dialogue"]},"moodle-qbank_editquestion-chooser":{"requires":["moodle-core-chooserdialogue"]},"moodle-tool_lp-dragdrop-reorder":{"requires":["moodle-core-dragdrop"]},"moodle-assignfeedback_editpdf-editor":{"requires":["base","event","node","io","graphics","json","event-move","event-resize","transition","querystring-stringify-simple","moodle-core-notification-dialog","moodle-core-notification-alert","moodle-core-notification-warning","moodle-core-notification-exception","moodle-core-notification-ajaxexception"]}}},"gallery":{"name":"gallery","base":"https:\/\/learning.transportactiongroup.com\/lib\/yuilib\/gallery\/","combine":true,"comboBase":"https:\/\/learning.transportactiongroup.com\/theme\/yui_combo.php?","ext":false,"root":"gallery\/1762077687\/","patterns":{"gallery-":{"group":"gallery"}}}},"modules":{"core_filepicker":{"name":"core_filepicker","fullpath":"https:\/\/learning.transportactiongroup.com\/lib\/javascript.php\/1762077687\/repository\/filepicker.js","requires":["base","node","node-event-simulate","json","async-queue","io-base","io-upload-iframe","io-form","yui2-treeview","panel","cookie","datatable","datatable-sort","resize-plugin","dd-plugin","escape","moodle-core_filepicker","moodle-core-notification-dialogue"]},"core_comment":{"name":"core_comment","fullpath":"https:\/\/learning.transportactiongroup.com\/lib\/javascript.php\/1762077687\/comment\/comment.js","requires":["base","io-base","node","json","yui2-animation","overlay","escape"]}},"logInclude":[],"logExclude":[],"logLevel":null};
M.yui.loader = {modules: {}};

//]]>
</script>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body  id="page-site-index" class="format-site course path-site dir-ltr lang-en yui-skin-sam yui3-skin-sam learning-transportactiongroup-com pagelayout-base course-1 context-1 theme uses-drawers drawer-open-index">
<div class="toast-wrapper mx-auto py-0 fixed-top" role="status" aria-live="polite"></div>
<div id="page-wrapper" class="d-print-block">

    <div>
    <a class="visually-hidden-focusable" href="#maincontent">Skip to main content</a>
</div><script src="https://learning.transportactiongroup.com/lib/javascript.php/1762077687/lib/polyfills/polyfill.js"></script>
<script src="https://learning.transportactiongroup.com/theme/yui_combo.php?rollup/3.18.1/yui-moodlesimple.js"></script><script src="https://learning.transportactiongroup.com/lib/javascript.php/1762077687/lib/javascript-static.js"></script>
<script>
//<![CDATA[
document.body.className += ' jsenabled';
//]]>
</script>



    <nav class="navbar fixed-top bg-body navbar-expand" aria-label="Site navigation">
        <div class="container-fluid">
            <button class="navbar-toggler aabtn d-block d-md-none px-1 my-1 border-0" data-toggler="drawers" data-action="toggle" data-target="theme_boost-drawers-primary">
                <span class="navbar-toggler-icon"></span>
                <span class="visually-hidden">Side panel</span>
            </button>

            <a href="https://learning.transportactiongroup.com/my/" class="navbar-brand d-none d-md-flex align-items-center m-0 me-4 p-0 aabtn">

                    TAG LMS
            </a>
                <div class="primary-navigation">
                    <nav class="moremenu navigation">
                        <ul id="moremenu-690739932d68b-navbar-nav" role="menubar" class="nav more-nav navbar-nav">
                                    <li data-key="home" class="nav-item" role="none" data-forceintomoremenu="false">
                                                <a role="menuitem" class="nav-link active "
                                                    href="https://learning.transportactiongroup.com/?redirect=0"

                                                    aria-current="true"
                                                    data-disableactive="true"

                                                >
                                                    Home
                                                </a>
                                    </li>
                                    <li data-key="myhome" class="nav-item" role="none" data-forceintomoremenu="false">
                                                <a role="menuitem" class="nav-link  "
                                                    href="https://learning.transportactiongroup.com/my/"


                                                    data-disableactive="true"
                                                    tabindex="-1"
                                                >
                                                    Dashboard
                                                </a>
                                    </li>
                                    <li data-key="mycourses" class="nav-item" role="none" data-forceintomoremenu="false">
                                                <a role="menuitem" class="nav-link  "
                                                    href="https://learning.transportactiongroup.com/my/courses.php"


                                                    data-disableactive="true"
                                                    tabindex="-1"
                                                >
                                                    My courses
                                                </a>
                                    </li>
                                    <li data-key="siteadminnode" class="nav-item" role="none" data-forceintomoremenu="false">
                                                <a role="menuitem" class="nav-link  "
                                                    href="https://learning.transportactiongroup.com/admin/search.php"


                                                    data-disableactive="true"
                                                    tabindex="-1"
                                                >
                                                    Site administration
                                                </a>
                                    </li>
                            <li role="none" class="nav-item dropdown dropdownmoremenu d-none" data-region="morebutton">
                                <a class="dropdown-toggle nav-link " href="#" id="moremenu-dropdown-690739932d68b" role="menuitem" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" tabindex="-1">
                                    More
                                </a>
                                <ul class="dropdown-menu dropdown-menu-start" data-region="moredropdown" aria-labelledby="moremenu-dropdown-690739932d68b" role="menu">
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

            <ul class="navbar-nav d-none d-md-flex my-1 px-1">
                <!-- page_heading_menu -->

            </ul>

            <div id="usernavigation" class="navbar-nav ms-auto h-100">
                <div class="popover-region collapsed popover-region-notifications"
    id="nav-notification-popover-container" data-userid="2"
    data-region="popover-region">
    <div class="popover-region-toggle nav-link icon-no-margin"
        data-region="popover-region-toggle"
        aria-controls="popover-region-container-69073993309a4690739932f0442"
        aria-haspopup="true"
        aria-expanded="false"
        aria-label="  Show notification window with 1 new notifications  "
        title="  Show notification window with 1 new notifications  "
        tabindex="0"
        role="button">
                <i class="icon fa fa-bell fa-fw " aria-hidden="true" ></i>
        <div
            class="count-container "
            data-region="count-container"
            aria-hidden=true
        >
            1
        </div>

    </div>
    <div         aria-modal="true"
        tabindex="-1"

        id="popover-region-container-69073993309a4690739932f0442"
        class="popover-region-container"
        data-region="popover-region-container"
        aria-hidden="true"
        aria-label="Notification window"
        role="dialog">
        <div class="popover-region-header-container">
            <h3 class="popover-region-header-text" data-region="popover-region-header-text">Notifications</h3>
            <div class="popover-region-header-actions" data-region="popover-region-header-actions">        <a class="mark-all-read-button btn btn-sm btn-link m-0 py-0 icon-no-margin"
           href="#"
           title="Mark all as read"
           data-action="mark-all-read"
           role="button"
           aria-label="Mark all as read">
            <span class="normal-icon"><i class="icon fa fa-check fa-fw " aria-hidden="true" ></i></span>
            <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
            <span aria-live="polite" class="visually-hidden" data-region="notification-read-feedback"></span>
        </a>
            <a href="https://learning.transportactiongroup.com/message/notificationpreferences.php"
               title="Notification preferences"
               aria-label="Notification preferences"
               class="btn btn-sm btn-link m-0 py-0 icon-no-margin" >
                <i class="icon fa fa-gear fa-fw " aria-hidden="true" ></i></a>
        <button type="button" class="btn btn-sm btn-link m-0 py-0 icon-no-margin" aria-label="Close" title="Close" data-action="close-notification-popover">
            <i class="icon fa fa-xmark fa-fw " aria-hidden="true" ></i>
        </button>
</div>
        </div>
        <div class="popover-region-content-container" data-region="popover-region-content-container">
            <div class="popover-region-content" data-region="popover-region-content">
                        <div class="all-notifications"
            data-region="all-notifications"
            role="log"
            aria-busy="false"
            aria-atomic="false"
            aria-relevant="additions"></div>
        <div class="empty-message" tabindex="0" data-region="empty-message">You have no notifications</div>

            </div>
            <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
        </div>
                <a class="see-all-link"
                    href="https://learning.transportactiongroup.com/message/output/popup/notifications.php">
                    <div class="popover-region-footer-container">
                        <div class="popover-region-seeall-text">See all</div>
                    </div>
                </a>
    </div>
</div><div class="popover-region collapsed" data-region="popover-region-messages">
    <a
        id="message-drawer-toggle-6907399331ee0690739932f0443"
        class="nav-link popover-region-toggle position-relative icon-no-margin"
        href="#"
        aria-label="Toggle messaging drawer"
        title="Toggle messaging drawer"
        role="button"
        aria-expanded="false"
        aria-describedby="unread-messages-count-6907399331ee0690739932f0443"
    >
        <i class="icon fa fa-message fa-fw " aria-hidden="true" ></i>
        <div
            class="count-container hidden"
            data-region="count-container"
        >
            <span aria-hidden="true">0</span>
            <span class="visually-hidden" id="unread-messages-count-6907399331ee0690739932f0443">There are 0 unread conversations</span>
        </div>
    </a>
    <span class="visually-hidden-focusable" data-region="jumpto" tabindex="-1"></span>
</div>
                <div class="d-flex align-items-stretch usermenu-container" data-region="usermenu">
                        <div class="usermenu">
                                <div class="dropdown show">
                                    <a href="#" role="button" id="user-menu-toggle" data-bs-toggle="dropdown" aria-label="User menu"
                                       aria-haspopup="true" aria-controls="user-action-menu" class="btn dropdown-toggle">
                                        <span class="userbutton">
                                            <span class="avatars">
                                                    <span class="avatar current">
                                                        <span class="userinitials size-35" title="Admin User" aria-label="Admin User" role="img">AU</span>
                                                    </span>
                                            </span>
                                        </span>
                                    </a>
                                    <div id="user-action-menu" class="dropdown-menu dropdown-menu-end">
                                        <div id="usermenu-carousel" class="carousel slide" data-touch="false" data-interval="false" data-keyboard="false">
                                            <div class="carousel-inner">
                                                <div id="carousel-item-main" class="carousel-item active" role="menu" tabindex="-1" aria-label="User">
                                                            <a href="https://learning.transportactiongroup.com/user/profile.php" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Profile
                                                            </a>

                                                            <a href="https://learning.transportactiongroup.com/grade/report/overview/index.php" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Grades
                                                            </a>

                                                            <a href="https://learning.transportactiongroup.com/calendar/view.php?view=month" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Calendar
                                                            </a>

                                                            <a href="https://learning.transportactiongroup.com/user/files.php" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Private files
                                                            </a>

                                                            <a href="https://learning.transportactiongroup.com/reportbuilder/index.php" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Reports
                                                            </a>

                                                        <div class="dropdown-divider"></div>
                                                            <a href="https://learning.transportactiongroup.com/user/preferences.php" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Preferences
                                                            </a>

                                                            <a href="#" class="carousel-navigation-link dropdown-item" role="menuitem" tabindex="-1" data-carousel-target-id="carousel-item-690739932e55b">

                                                                Language
                                                            </a>

                                                            <a href="https://learning.transportactiongroup.com/course/switchrole.php?id=1&amp;switchrole=-1&amp;returnurl=%2F" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Switch role to...
                                                            </a>
                                                        <div class="dropdown-divider"></div>
                                                            <a href="https://learning.transportactiongroup.com/login/logout.php?sesskey=myHolqxBsp" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Log out
                                                            </a>

                                                </div>
                                                    <div id="carousel-item-690739932e55b" role="menu" class="carousel-item submenu" tabindex="-1" aria-label="Language selector">
                                                        <div class="d-flex flex-column h-100">
                                                            <div class="header">
                                                                <button type="button" class="btn btn-icon carousel-navigation-link text-decoration-none text-body" data-carousel-target-id="carousel-item-main" aria-label="Go back to user menu">
                                                                    <span class="dir-rtl-hide"><img class="icon " alt="" aria-hidden="true" src="https://learning.transportactiongroup.com/theme/image.php/boost/core/1762077687/i/arrow-left" /></span>
                                                                    <span class="dir-ltr-hide"><img class="icon " alt="" aria-hidden="true" src="https://learning.transportactiongroup.com/theme/image.php/boost/core/1762077687/i/arrow-right" /></span>
                                                                </button>
                                                                <span class="ps-2" id="carousel-item-title-690739932e55b">Language selector</span>
                                                            </div>
                                                            <div class="dropdown-divider"></div>
                                                            <div class="items h-100 overflow-auto" role="menu" aria-labelledby="carousel-item-title-690739932e55b">
                                                                        <a href="https://learning.transportactiongroup.com/?lang=am" class="dropdown-item ps-5" role="menuitem" tabindex="-1"
                                                                            lang="am" >
                                                                             አማርኛ ‎(am)‎
                                                                        </a>
                                                                        <a href="#" class="dropdown-item ps-5" role="menuitem" tabindex="-1" aria-current="true"
                                                                            >
                                                                            English ‎(en)‎
                                                                        </a>
                                                                        <a href="https://learning.transportactiongroup.com/?lang=fr_incl" class="dropdown-item ps-5" role="menuitem" tabindex="-1"
                                                                            lang="fr" >
                                                                            Français (écriture inclusive) ‎(fr_incl)‎
                                                                        </a>
                                                                        <a href="https://learning.transportactiongroup.com/?lang=fr" class="dropdown-item ps-5" role="menuitem" tabindex="-1"
                                                                            lang="fr" >
                                                                            Français ‎(fr)‎
                                                                        </a>
                                                                        <a href="https://learning.transportactiongroup.com/?lang=sw" class="dropdown-item ps-5" role="menuitem" tabindex="-1"
                                                                            lang="sw" >
                                                                            Kiswahili ‎(sw)‎
                                                                        </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div>
                <div class="divider border-start h-75 align-self-center ms-1 me-3"></div>
<form action="https://learning.transportactiongroup.com/editmode.php" method="post" class="d-flex align-items-center editmode-switch-form">
    <div class="input-group">
        <label class="me-2 mb-0 form-check-label " for="69073993329ba690739932f0444-editingswitch">
            Edit mode
        </label>
        <div class="form-check form-switch">
            <input type="checkbox" name="setmode" class="form-check-input" id="69073993329ba690739932f0444-editingswitch" data-context="1" data-pageurl="https://learning.transportactiongroup.com/">
            <span class="form-check-label">&nbsp;</span>
        </div>
    </div>
    <input type="hidden" name="sesskey" value="myHolqxBsp">
    <input type="hidden" name="pageurl" value="https://learning.transportactiongroup.com/">
    <input type="hidden" name="context" value="1">
    <noscript>
        <input type="submit" value="Set mode">
    </noscript>
</form>
            </div>
        </div>
    </nav>


<div  class="drawer drawer-left drawer-primary d-print-none not-initialized" data-region="fixed-drawer" id="theme_boost-drawers-primary" data-preference="" data-state="show-drawer-primary" data-forceopen="0" data-close-on-resize="1">
    <div class="drawerheader">
        <button
            class="btn btn-icon drawertoggle hidden"
            data-toggler="drawers"
            data-action="closedrawer"
            data-target="theme_boost-drawers-primary"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Close drawer"
        >
            <i class="icon fa fa-xmark fa-fw " aria-hidden="true" ></i>
        </button>
                <a
            href="https://learning.transportactiongroup.com/my/"
            title="TAG LMS"
            data-region="site-home-link"
            class="aabtn text-reset d-flex align-items-center py-1 h-100"
        >
                <span class="sitename" title="TAG LMS">TAG LMS</span>
        </a>

        <div class="drawerheadercontent hidden">

        </div>
    </div>
    <div class="drawercontent drag-container" data-usertour="scroller">
                <div class="list-group">
                <a href="https://learning.transportactiongroup.com/?redirect=0" class="list-group-item list-group-item-action active " aria-current="true">
                    Home
                </a>
                <a href="https://learning.transportactiongroup.com/my/" class="list-group-item list-group-item-action  " >
                    Dashboard
                </a>
                <a href="https://learning.transportactiongroup.com/my/courses.php" class="list-group-item list-group-item-action  " >
                    My courses
                </a>
                <a href="https://learning.transportactiongroup.com/admin/search.php" class="list-group-item list-group-item-action  " >
                    Site administration
                </a>
        </div>

    </div>
</div>
    <div id="page" data-region="mainpage" data-usertour="scroller" class="drawers   drag-container">
        <div id="topofscroll" class="main-inner">
            <div class="drawer-toggles d-flex">
            </div>
            <header id="page-header" class="header-maxwidth d-print-none">
    <div class="w-100">
        <div class="d-flex flex-wrap">
            <div id="page-navbar">
                <nav aria-label="Navigation bar">
    <ol class="breadcrumb"></ol>
</nav>
            </div>
            <div class="ms-auto d-flex">

            </div>
            <div id="course-header">

            </div>
        </div>
        <div class="d-flex align-items-center">
                    <div class="me-auto">
                        <div class="page-context-header d-flex flex-wrap align-items-center mb-2">
    <div class="page-header-headings">
        <h1 class="h2 mb-0">Transport Action Group Learning Management System</h1>
    </div>
</div>
                    </div>
            <div class="header-actions-container ms-auto" data-region="header-actions-container">
            </div>
        </div>
    </div>
</header>
            <div id="page-content" class="pb-3 d-print-block">
                <div id="region-main-box">
                    <div id="region-main">

                        <span class="notifications" id="user-notifications"></span>
                        <div role="main"><span id="maincontent"></span><div data-rel="fatalerror" class="box py-3 errorbox alert alert-danger"><p class="errormessage">Table &quot;tco_calculations&quot; does not exist</p><p class="errorcode"><a href="https://docs.moodle.org/500/en/error/moodle/ddltablenotexist">More information about this error</a></p></div><div class="alert alert-danger alert-block fade in  alert-dismissible"  role="alert" data-aria-autofocus="true">
    <strong>Debug info: </strong> <br />Error code: ddltablenotexist
    <button type="button" class="btn-close" data-bs-dismiss="alert">
        <span class="visually-hidden">Dismiss this notification</span>
    </button>
</div><div class="alert alert-danger alert-block fade in  alert-dismissible"  role="alert" data-aria-autofocus="true">
    <strong>Stack trace: </strong> <ul style="text-align:left;"><li>line 1478 of /lib/dml/mysqli_native_moodle_database.php: dml_exception thrown</li><li>line 31 of /local/tco/endpoints/tco_save.php: call to mysqli_native_moodle_database-&gt;insert_record()</li></ul>
    <button type="button" class="btn-close" data-bs-dismiss="alert">
        <span class="visually-hidden">Dismiss this notification</span>
    </button>
</div><div class="continuebutton">
    <form method="get" action="https://learning.transportactiongroup.com/" >
        <button type="submit" class="btn btn-primary"
            id="single_button690739932f0447"


            >Continue</button>
    </form>
</div></div>



                    </div>
                </div>
            </div>
        </div>

        <footer id="page-footer" class="footer-popover bg-white">
            <div data-region="footer-container-popover">
                <button class="btn btn-icon rounded-circle bg-secondary btn-footer-popover" data-action="footer-popover" aria-label="Show footer">
                    <i class="icon fa fa-question fa-fw " aria-hidden="true" ></i>
                </button>
            </div>
            <div class="footer-content-popover container" data-region="footer-content-popover">
                    <div class="footer-section p-3 border-bottom">
                            <div class="footer-support-link"><a href="https://docs.moodle.org/500/en/site/index"><i class="icon fa fa-book fa-fw " aria-hidden="true" ></i>Documentation for this page</a></div>

                            <div class="footer-support-link"><a target="_blank" href="https://moodle.com/help/?utm_source=CTA-banner&amp;utm_medium=platform&amp;utm_campaign=name~Moodle4+cat~lms+mp~no"><i class="icon fa fa-life-ring fa-fw fa fa-life-ring" aria-hidden="true" ></i>Services and support<i class="icon fa fa-arrow-up-right-from-square fa-fw ms-1"  title="Opens in new window" role="img" aria-label="Opens in new window"></i></a></div>

                            <div class="footer-support-link"><a href="https://learning.transportactiongroup.com/user/contactsitesupport.php"><i class="icon fa-regular fa-envelope fa-fw " aria-hidden="true" ></i>Contact site support</a></div>
                    </div>
                <div class="footer-section p-3 border-bottom">
                    <div class="logininfo">
                        <div class="logininfo">You are logged in as <a href="https://learning.transportactiongroup.com/user/profile.php?id=2" title="View profile">Admin User</a> (<a href="https://learning.transportactiongroup.com/login/logout.php?sesskey=myHolqxBsp">Log out</a>)</div>
                    </div>
                    <div class="tool_usertours-resettourcontainer">
                    </div>

                    <div class="tool_dataprivacy"><a href="https://learning.transportactiongroup.com/admin/tool/dataprivacy/summary.php">Data retention summary</a></div>
                    <script>
//<![CDATA[
var require = {
    baseUrl : 'https://learning.transportactiongroup.com/lib/requirejs.php/1762077687/',
    // We only support AMD modules with an explicit define() statement.
    enforceDefine: true,
    skipDataMain: true,
    waitSeconds : 0,

    paths: {
        jquery: 'https://learning.transportactiongroup.com/lib/javascript.php/1762077687/lib/jquery/jquery-3.7.1.min',
        jqueryui: 'https://learning.transportactiongroup.com/lib/javascript.php/1762077687/lib/jquery/ui-1.14.1/jquery-ui.min',
        jqueryprivate: 'https://learning.transportactiongroup.com/lib/javascript.php/1762077687/lib/requirejs/jquery-private'
    },

    // Custom jquery config map.
    map: {
      // '*' means all modules will get 'jqueryprivate'
      // for their 'jquery' dependency.
      '*': { jquery: 'jqueryprivate' },

      // 'jquery-private' wants the real jQuery module
      // though. If this line was not here, there would
      // be an unresolvable cyclic dependency.
      jqueryprivate: { jquery: 'jquery' }
    }
};

//]]>
</script>
<script src="https://learning.transportactiongroup.com/lib/javascript.php/1762077687/lib/requirejs/require.min.js"></script>
<script>
//<![CDATA[
M.util.js_pending("core/first");
require(['core/first'], function() {
require(['core/prefetch'])
;
M.util.js_pending('filter_mathjaxloader/loader'); require(['filter_mathjaxloader/loader'], function(amd) {amd.configure({"mathjaxurl":"https:\/\/cdn.jsdelivr.net\/npm\/mathjax@3.2.2\/es5\/tex-mml-chtml.js","mathjaxconfig":"","lang":"en"}); M.util.js_complete('filter_mathjaxloader/loader');});;
require(["media_videojs/loader"], function(loader) {
    loader.setUp('en');
});;
M.util.js_pending('tool_usertours/usertours'); require(['tool_usertours/usertours'], function(amd) {amd.init([{"tourId":"5","startTour":false,"filtervalues":{"cssselector":{}}}], ["tool_usertours\/filter_cssselector"]); M.util.js_complete('tool_usertours/usertours');});;

    require(['core/moremenu'], function(moremenu) {
        moremenu(document.querySelector('#moremenu-690739932d68b-navbar-nav'));
    });
;

require(['jquery', 'message_popup/notification_popover_controller'], function($, Controller) {
    var container = $('#nav-notification-popover-container');
    var controller = new Controller(container);
    controller.registerEventListeners();
    controller.registerListNavigationEventListeners();
});
;

require(
[
    'jquery',
    'core_message/message_popover'
],
function(
    $,
    Popover
) {
    var toggle = $('#message-drawer-toggle-6907399331ee0690739932f0443');
    Popover.init(toggle);
});
;

    require(['core/usermenu'], function(UserMenu) {
        UserMenu.init();
    });
;

require(['core/edit_switch'], function(editSwitch) {
    editSwitch.init('69073993329ba690739932f0444-editingswitch');
});
;

M.util.js_pending('theme_boost/drawers:load');
require(['theme_boost/drawers'], function() {
    M.util.js_complete('theme_boost/drawers:load');
});
;

require(['core/local/reactive/debugpanel'], function(component) {
    component.init('6907399333960690739932f0445-reactive-debugpanel');
});
;

require(['theme_boost/footer-popover'], function(FooterPopover) {
    FooterPopover.init();
});
;

require(['jquery', 'core_message/message_drawer'], function($, MessageDrawer) {
    var root = $('#message-drawer-69073993342d3690739932f0446');
    MessageDrawer.init(root, '69073993342d3690739932f0446', false);
});
;

M.util.js_pending('theme_boost/loader');
require(['theme_boost/loader', 'theme_boost/drawer'], function(Loader, Drawer) {
    Drawer.init();
    M.util.js_complete('theme_boost/loader');
});
;
M.util.js_pending('core/notification'); require(['core/notification'], function(amd) {amd.init(1, []); M.util.js_complete('core/notification');});;
M.util.js_pending('core/log'); require(['core/log'], function(amd) {amd.setConfig({"level":"trace"}); M.util.js_complete('core/log');});;
M.util.js_pending('core/page_global'); require(['core/page_global'], function(amd) {amd.init(); M.util.js_complete('core/page_global');});;
M.util.js_pending('core/utility'); require(['core/utility'], function(amd) {M.util.js_complete('core/utility');});;
M.util.js_pending('core/storage_validation'); require(['core/storage_validation'], function(amd) {amd.init(1762077121); M.util.js_complete('core/storage_validation');});
    M.util.js_complete("core/first");
});
//]]>
</script>
<script>
//<![CDATA[
M.str = {"moodle":{"lastmodified":"Last modified","name":"Name","error":"Error","info":"Information","yes":"Yes","no":"No","cancel":"Cancel","confirm":"Confirm","areyousure":"Are you sure?","closebuttontitle":"Close","unknownerror":"Unknown error","file":"File","url":"URL","collapseall":"Collapse all","expandall":"Expand all"},"repository":{"type":"Type","size":"Size","invalidjson":"Invalid JSON string","nofilesattached":"No files attached","filepicker":"File picker","logout":"Logout","nofilesavailable":"No files available","norepositoriesavailable":"Sorry, none of your current repositories can return files in the required format.","fileexistsdialogheader":"File exists","fileexistsdialog_editor":"A file with that name has already been attached to the text you are editing.","fileexistsdialog_filemanager":"A file with that name has already been attached","renameto":"Rename to \"{$a}\"","referencesexist":"There are {$a} links to this file","select":"Select"},"admin":{"confirmdeletecomments":"Are you sure you want to delete the selected comment(s)?","confirmation":"Confirmation"},"debug":{"debuginfo":"Debug info","line":"Line","stacktrace":"Stack trace"},"langconfig":{"labelsep":": "}};
//]]>
</script>
<script>
//<![CDATA[
(function() {M.util.help_popups.setup(Y);
 M.util.js_pending('random690739932f0448'); Y.on('domready', function() { M.util.js_complete("init");  M.util.js_complete('random690739932f0448'); });
})();
//]]>
</script>

                </div>
                <div class="footer-section p-3">
                    <div>Powered by <a href="https://moodle.com">Moodle</a></div>
                        <div>
                            Version 5.0.2 (Build: 20250811)
                        </div>
                </div>
            </div>

            <div class="footer-content-debugging footer-dark bg-dark text-light">
                <div class="container-fluid footer-dark-inner">
                    <div class="purgecaches"><a href="https://learning.transportactiongroup.com/admin/purgecaches.php?confirm=1&amp;sesskey=myHolqxBsp&amp;returnurl=%2F">Purge all caches</a></div><div id="6907399333960690739932f0445-reactive-debugpanel" class="py-1">
    <div>
        Reactive instances:
        <span data-for="loaders">
            <span data-for="noinstances">
                This page has no reactive instances.
            </span>
        </span>
    </div>
    <div data-for="subpanel">
        <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
    </div>
</div>
                </div>
            </div>
        </footer>
    </div>
    <div
    id="drawer-69073993342d3690739932f0446"
    class=" drawer bg-white hidden"
    aria-hidden="true"
    data-region="right-hand-drawer"
    role="dialog"
    tabindex="-1"
            aria-modal="true"
        aria-labelledby="message-drawer-header-69073993342d3690739932f0446"

>
            <div id="message-drawer-69073993342d3690739932f0446" class="message-app" data-region="message-drawer" role="region" tabindex="0">
            <h2 class="visually-hidden" id="message-drawer-header-69073993342d3690739932f0446">Messaging</h2>
            <div class="closewidget text-end pe-2">
                <a class="text-dark btn-link" data-action="closedrawer" href="#"
                   title="Close" aria-label="Close"
                >
                    <i class="icon fa fa-xmark fa-fw " aria-hidden="true" ></i>
                </a>
            </div>
            <div class="header-container position-relative" data-region="header-container">
                <div class="hidden border-bottom p-1 px-sm-2" aria-hidden="true" data-region="view-contacts">
                    <div class="d-flex align-items-center">
                        <div class="align-self-stretch">
                            <a class="h-100 d-flex align-items-center me-2" href="#" data-route-back role="button">
                                <div class="icon-back-in-drawer">
                                    <span class="dir-rtl-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true" ></i></span>
                                    <span class="dir-ltr-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true" ></i></span>
                                </div>
                                <div class="icon-back-in-app">
                                    <span class="dir-rtl-hide"><i class="icon fa fa-xmark fa-fw " aria-hidden="true" ></i></span>
                                </div>                            </a>
                        </div>
                        <div>
                            Contacts
                        </div>
                        <div class="ms-auto">
                            <a href="#" data-route="view-search" role="button" aria-label="Search">
                                <i class="icon fa fa-magnifying-glass fa-fw " aria-hidden="true" ></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="hidden bg-white position-relative border-bottom p-1 px-sm-2"
                    aria-hidden="true"
                    data-region="view-conversation"
                >
                    <div class="hidden" data-region="header-content"></div>
                    <div class="hidden" data-region="header-edit-mode">

                        <div class="d-flex p-2 align-items-center">
                            Messages selected:
                            <span class="ms-1" data-region="message-selected-court">1</span>
                            <button type="button" class="ms-auto btn-close" aria-label="Cancel message selection"
                                data-action="cancel-edit-mode">
                            </button>
                        </div>
                    </div>
                    <div data-region="header-placeholder">
                        <div class="d-flex">
                            <div
                                class="ms-2 rounded-circle bg-pulse-grey align-self-center"
                                style="height: 38px; width: 38px"
                            >
                            </div>
                            <div class="ms-2 " style="flex: 1">
                                <div
                                    class="mt-1 bg-pulse-grey w-75"
                                    style="height: 16px;"
                                >
                                </div>
                            </div>
                            <div
                                class="ms-2 bg-pulse-grey align-self-center"
                                style="height: 16px; width: 20px"
                            >
                            </div>
                        </div>
                    </div>
                    <div
                        class="hidden position-absolute z-index-1"
                        data-region="confirm-dialogue-container"
                        style="top: 0; bottom: -1px; right: 0; left: 0; background: rgba(0,0,0,0.3);"
                    ></div>
                </div>                <div class="border-bottom p-1 px-sm-2" aria-hidden="false"  data-region="view-overview">
                    <div class="d-flex align-items-center">
                        <div class="input-group simplesearchform" role="group" aria-labelledby="messageoverviewgrouplabel">
                            <span class="visually-hidden" id="messageoverviewgrouplabel">Search people and messages</span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search"
                                aria-label="Search"
                                data-region="view-overview-search-input"
                            >
                            <span class="icon-no-margin btn btn-submit">
                                <i class="icon fa fa-magnifying-glass fa-fw " aria-hidden="true" ></i>
                            </span>
                        </div>
                        <div class="ms-2">
                            <a
                                href="#"
                                data-route="view-settings"
                                data-route-param="2"
                                aria-label="Settings"
                                role="button"
                            >
                                <i class="icon fa fa-gear fa-fw " aria-hidden="true" ></i>
                            </a>
                        </div>
                    </div>
                    <div class="text-end mt-sm-3">
                        <a href="#" data-route="view-contacts" role="button">
                            <i class="icon fa fa-user fa-fw " aria-hidden="true" ></i>
                            Contacts
                            <span
                                class="badge bg-primary text-white ms-2 hidden"
                                data-region="contact-request-count"
                            >
                                <span aria-hidden="true">0</span>
                                <span class="visually-hidden">There are 0 pending contact requests</span>
                            </span>
                        </a>
                    </div>
                </div>

                <div class="hidden border-bottom p-1 px-sm-2 view-search"  aria-hidden="true" data-region="view-search">
                    <div class="d-flex align-items-center">
                        <a
                            class="me-2 align-self-stretch d-flex align-items-center"
                            href="#"
                            data-route-back
                            data-action="cancel-search"
                            role="button"
                        >
                            <div class="icon-back-in-drawer">
                                <span class="dir-rtl-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true" ></i></span>
                                <span class="dir-ltr-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true" ></i></span>
                            </div>
                            <div class="icon-back-in-app">
                                <span class="dir-rtl-hide"><i class="icon fa fa-xmark fa-fw " aria-hidden="true" ></i></span>
                            </div>                        </a>
                        <div class="input-group simplesearchform" role="group" aria-labelledby="messagesearchgrouplabel">
                            <span class="visually-hidden" id="messagesearchgrouplabel">Search people and messages</span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search"
                                aria-label="Search"
                                data-region="search-input"
                            >
                            <button
                                class="btn btn-submit icon-no-margin"
                                type="button"
                                data-action="search"
                                aria-label="Perform search"
                                title="Perform search"
                            >
                                <span data-region="search-icon-container">
                                    <i class="icon fa fa-magnifying-glass fa-fw " aria-hidden="true" ></i>
                                </span>
                                <span class="hidden" data-region="loading-icon-container">
                                    <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="hidden border-bottom p-1 px-sm-2 pb-sm-3" aria-hidden="true" data-region="view-settings">
                    <div class="d-flex align-items-center">
                        <div class="align-self-stretch" >
                            <a class="h-100 d-flex me-2 align-items-center" href="#" data-route-back role="button">
                                <div class="icon-back-in-drawer">
                                    <span class="dir-rtl-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true" ></i></span>
                                    <span class="dir-ltr-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true" ></i></span>
                                </div>
                                <div class="icon-back-in-app">
                                    <span class="dir-rtl-hide"><i class="icon fa fa-xmark fa-fw " aria-hidden="true" ></i></span>
                                </div>                            </a>
                        </div>
                        <div>
                            Settings
                        </div>
                    </div>
                </div>
            </div>
            <div class="body-container position-relative" data-region="body-container">

                <div
                    class="hidden"
                    data-region="view-contact"
                    aria-hidden="true"
                >
                    <div class="p-2 pt-3" data-region="content-container"></div>
                </div>                <div class="hidden h-100" data-region="view-contacts" aria-hidden="true" data-user-id="2">
                    <div class="d-flex flex-column h-100">
                        <div class="p-3 border-bottom">
                            <ul class="nav nav-pills nav-fill" role="tablist">
                                <li class="nav-item">
                                    <a
                                        id="contacts-tab-69073993342d3690739932f0446"
                                        class="nav-link active"
                                        href="#contacts-tab-panel-69073993342d3690739932f0446"
                                        data-bs-toggle="tab"
                                        data-action="show-contacts-section"
                                        role="tab"
                                        aria-controls="contacts-tab-panel-69073993342d3690739932f0446"
                                        aria-selected="true"
                                    >
                                        Contacts
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        id="requests-tab-69073993342d3690739932f0446"
                                        class="nav-link"
                                        href="#requests-tab-panel-69073993342d3690739932f0446"
                                        data-bs-toggle="tab"
                                        data-action="show-requests-section"
                                        role="tab"
                                        aria-controls="requests-tab-panel-69073993342d3690739932f0446"
                                        aria-selected="false"
                                    >
                                        Requests
                                        <span class="badge bg-primary text-white ms-2 hidden"
                                            data-region="contact-request-count"
                                        >
                                            <span aria-hidden="true">0</span>
                                            <span class="visually-hidden">There are 0 pending contact requests</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content d-flex flex-column h-100">
                                            <div
                    class="tab-pane fade show active h-100 lazy-load-list"
                    aria-live="polite"
                    data-region="lazy-load-list"
                    data-user-id="2"
                                        id="contacts-tab-panel-69073993342d3690739932f0446"
                    data-section="contacts"
                    role="tabpanel"
                    aria-labelledby="contacts-tab-69073993342d3690739932f0446"

                >

                    <div class="hidden text-center p-2" data-region="empty-message-container">
                        No contacts
                    </div>
                    <div class="hidden list-group" data-region="content-container">

                    </div>
                    <div class="list-group" data-region="placeholder-container">

                    </div>
                    <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container" >
                        <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                    </div>
                </div>

                                            <div
                    class="tab-pane fade h-100 lazy-load-list"
                    aria-live="polite"
                    data-region="lazy-load-list"
                    data-user-id="2"
                                        id="requests-tab-panel-69073993342d3690739932f0446"
                    data-section="requests"
                    role="tabpanel"
                    aria-labelledby="requests-tab-69073993342d3690739932f0446"

                >

                    <div class="hidden text-center p-2" data-region="empty-message-container">
                        No contact requests
                    </div>
                    <div class="hidden list-group" data-region="content-container">

                    </div>
                    <div class="list-group" data-region="placeholder-container">

                    </div>
                    <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container" >
                        <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                    </div>
                </div>
                        </div>
                    </div>
                </div>

                <div
                    class="view-conversation hidden h-100"
                    aria-hidden="true"
                    data-region="view-conversation"
                    data-user-id="2"
                    data-midnight="1762034400"
                    data-message-poll-min="10"
                    data-message-poll-max="120"
                    data-message-poll-after-max="300"
                    style="overflow-y: auto; overflow-x: hidden"
                >
                    <div class="position-relative h-100" data-region="content-container" style="overflow-y: auto; overflow-x: hidden">
                        <div class="content-message-container hidden h-100 px-2 pt-0" data-region="content-message-container" role="log" style="overflow-y: auto; overflow-x: hidden">
                            <div class="py-3 border-bottom text-center hidden" data-region="contact-request-sent-message-container">
                                <p class="m-0">Contact request sent</p>
                                <p class="fst-italic fw-light" data-region="text"></p>
                            </div>
                            <div class="p-3 text-center hidden" data-region="self-conversation-message-container">
                                <p class="m-0">Personal space</p>
                                <p class="fst-italic fw-light" data-region="text">Save draft messages, links, notes etc. to access later.</p>
                           </div>
                            <div class="hidden text-center p-3" data-region="more-messages-loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</div>
                        </div>
                        <div class="p-4 w-100 h-100 hidden position-absolute z-index-1" data-region="confirm-dialogue-container" style="top: 0; background: rgba(0,0,0,0.3);">

                            <div class="p-3 bg-white" data-region="confirm-dialogue" role="alert">
                                <p class="text-muted" data-region="dialogue-text"></p>
                                <div class="mb-2 form-check hidden" data-region="delete-messages-for-all-users-toggle-container">
                                    <input type="checkbox" class="form-check-input" id="delete-messages-for-all-users" data-region="delete-messages-for-all-users-toggle">
                                    <label class="form-check-label text-muted" for="delete-messages-for-all-users">
                                        Delete for me and for everyone else
                                    </label>
                                </div>
                                <div class="d-grid gap-2">
                                    <button type="button" class="btn btn-primary hidden" data-action="confirm-block">
                                        <span data-region="dialogue-button-text">Block</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary hidden" data-action="confirm-unblock">
                                        <span data-region="dialogue-button-text">Unblock</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary hidden" data-action="confirm-remove-contact">
                                        <span data-region="dialogue-button-text">Remove</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary hidden" data-action="confirm-add-contact">
                                        <span data-region="dialogue-button-text">Add</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary hidden" data-action="confirm-delete-selected-messages">
                                        <span data-region="dialogue-button-text">Delete</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary hidden" data-action="confirm-delete-conversation">
                                        <span data-region="dialogue-button-text">Delete</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary hidden" data-action="request-add-contact">
                                        <span data-region="dialogue-button-text">Send contact request</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary hidden" data-action="accept-contact-request">
                                        <span data-region="dialogue-button-text">Accept and add to contacts</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-secondary hidden" data-action="decline-contact-request">
                                        <span data-region="dialogue-button-text">Decline</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary" data-action="okay-confirm">OK</button>
                                    <button type="button" class="btn btn-secondary" data-action="cancel-confirm">Cancel</button>
                                </div>
                            </div>
                        </div>
                        <div class="px-2 pb-2 pt-0" data-region="content-placeholder">
                            <div class="h-100 d-flex flex-column">
                                <div
                                    class="px-2 pb-2 pt-0 bg-light h-100"
                                    style="overflow-y: auto"
                                >
                                    <div class="mt-4">
                                        <div class="mb-4">
                                            <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                    </div>                                    <div class="mt-4">
                                        <div class="mb-4">
                                            <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                    </div>                                    <div class="mt-4">
                                        <div class="mb-4">
                                            <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                    </div>                                    <div class="mt-4">
                                        <div class="mb-4">
                                            <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                    </div>                                    <div class="mt-4">
                                        <div class="mb-4">
                                            <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                    </div>                                </div>
                            </div>                        </div>
                    </div>
                </div>

                <div
                    class="hidden"
                    aria-hidden="true"
                    data-region="view-group-info"
                >
                    <div
                        class="pt-3 h-100 d-flex flex-column"
                        data-region="group-info-content-container"
                        style="overflow-y: auto"
                    ></div>
                </div>                <div class="h-100 view-overview-body" aria-hidden="false" data-region="view-overview"  data-user-id="2">
                    <div id="message-drawer-view-overview-container-69073993342d3690739932f0446" class="d-flex flex-column h-100" style="overflow-y: auto">


                            <div
                                class="section border-0 card rounded-0"
                                data-region="view-overview-favourites"
                            >
                                <div id="view-overview-favourites-toggle" class="card-header rounded-0" data-region="toggle">
                                    <button
                                        class="btn btn-link w-100 text-start p-1 p-sm-2 d-flex rounded-0 align-items-center overview-section-toggle collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#view-overview-favourites-target-69073993342d3690739932f0446"
                                        aria-expanded="false"
                                        aria-controls="view-overview-favourites-target-69073993342d3690739932f0446"
                                    >
                                        <span class="collapsed-icon-container">
                                            <span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true" ></i></span>
                                            <span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true" ></i></span>
                                        </span>
                                        <span class="expanded-icon-container">
                                            <i class="icon fa fa-chevron-down fa-fw " aria-hidden="true" ></i>
                                        </span>
                                        <span class="fw-bold ms-1">Starred</span>
                                        <small
                                            class="hidden ms-1"
                                            data-region="section-total-count-container" aria-labelledby="view-overview-favourites-total-count-label"
                                        >
                                            (<span aria-hidden="true" data-region="section-total-count"></span>)
                                            <span class="visually-hidden" id="view-overview-favourites-total-count-label">
                                                 total conversations
                                            </span>
                                        </small>
                                        <span class="hidden ms-2" data-region="loading-icon-container">
                                            <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                        </span>
                                        <span
                                            class="hidden badge rounded-pill bg-primary text-white ms-auto"
                                            data-region="section-unread-count-container" aria-labelledby="view-overview-favourites-unread-count-label"
                                        >
                                            <span aria-hidden="true" data-region="section-unread-count"></span>
                                            <span class="visually-hidden" id="view-overview-favourites-unread-count-label">
                                                There are  unread conversations
                                            </span>
                                        </span>
                                    </button>
                                </div>
                                                            <div
                                class="collapse border-bottom  lazy-load-list"
                                aria-live="polite"
                                data-region="lazy-load-list"
                                data-user-id="2"
                                            id="view-overview-favourites-target-69073993342d3690739932f0446"
            aria-labelledby="view-overview-favourites-toggle"
            data-bs-parent="#message-drawer-view-overview-container-69073993342d3690739932f0446"

                            >

                                <div class="hidden text-center p-2" data-region="empty-message-container">
                                            <p class="text-muted mt-2">No starred conversations</p>

                                </div>
                                <div class="hidden list-group" data-region="content-container">

                                </div>
                                <div class="list-group" data-region="placeholder-container">
                                            <div class="text-center py-2"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</div>

                                </div>
                                <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container" >
                                    <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                </div>
                            </div>
                            </div>


                            <div
                                class="section border-0 card rounded-0"
                                data-region="view-overview-group-messages"
                            >
                                <div id="view-overview-group-messages-toggle" class="card-header rounded-0" data-region="toggle">
                                    <button
                                        class="btn btn-link w-100 text-start p-1 p-sm-2 d-flex rounded-0 align-items-center overview-section-toggle collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#view-overview-group-messages-target-69073993342d3690739932f0446"
                                        aria-expanded="false"
                                        aria-controls="view-overview-group-messages-target-69073993342d3690739932f0446"
                                    >
                                        <span class="collapsed-icon-container">
                                            <span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true" ></i></span>
                                            <span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true" ></i></span>
                                        </span>
                                        <span class="expanded-icon-container">
                                            <i class="icon fa fa-chevron-down fa-fw " aria-hidden="true" ></i>
                                        </span>
                                        <span class="fw-bold ms-1">Group</span>
                                        <small
                                            class="hidden ms-1"
                                            data-region="section-total-count-container" aria-labelledby="view-overview-group-messages-total-count-label"
                                        >
                                            (<span aria-hidden="true" data-region="section-total-count"></span>)
                                            <span class="visually-hidden" id="view-overview-group-messages-total-count-label">
                                                 total conversations
                                            </span>
                                        </small>
                                        <span class="hidden ms-2" data-region="loading-icon-container">
                                            <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                        </span>
                                        <span
                                            class="hidden badge rounded-pill bg-primary text-white ms-auto"
                                            data-region="section-unread-count-container" aria-labelledby="view-overview-group-messages-unread-count-label"
                                        >
                                            <span aria-hidden="true" data-region="section-unread-count"></span>
                                            <span class="visually-hidden" id="view-overview-group-messages-unread-count-label">
                                                There are  unread conversations
                                            </span>
                                        </span>
                                    </button>
                                </div>
                                                            <div
                                class="collapse border-bottom  lazy-load-list"
                                aria-live="polite"
                                data-region="lazy-load-list"
                                data-user-id="2"
                                            id="view-overview-group-messages-target-69073993342d3690739932f0446"
            aria-labelledby="view-overview-group-messages-toggle"
            data-bs-parent="#message-drawer-view-overview-container-69073993342d3690739932f0446"

                            >

                                <div class="hidden text-center p-2" data-region="empty-message-container">
                                            <p class="text-muted mt-2">No group conversations</p>

                                </div>
                                <div class="hidden list-group" data-region="content-container">

                                </div>
                                <div class="list-group" data-region="placeholder-container">
                                            <div class="text-center py-2"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</div>

                                </div>
                                <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container" >
                                    <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                </div>
                            </div>
                            </div>


                            <div
                                class="section border-0 card rounded-0"
                                data-region="view-overview-messages"
                            >
                                <div id="view-overview-messages-toggle" class="card-header rounded-0" data-region="toggle">
                                    <button
                                        class="btn btn-link w-100 text-start p-1 p-sm-2 d-flex rounded-0 align-items-center overview-section-toggle collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#view-overview-messages-target-69073993342d3690739932f0446"
                                        aria-expanded="false"
                                        aria-controls="view-overview-messages-target-69073993342d3690739932f0446"
                                    >
                                        <span class="collapsed-icon-container">
                                            <span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true" ></i></span>
                                            <span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true" ></i></span>
                                        </span>
                                        <span class="expanded-icon-container">
                                            <i class="icon fa fa-chevron-down fa-fw " aria-hidden="true" ></i>
                                        </span>
                                        <span class="fw-bold ms-1">Private</span>
                                        <small
                                            class="hidden ms-1"
                                            data-region="section-total-count-container" aria-labelledby="view-overview-messages-total-count-label"
                                        >
                                            (<span aria-hidden="true" data-region="section-total-count"></span>)
                                            <span class="visually-hidden" id="view-overview-messages-total-count-label">
                                                 total conversations
                                            </span>
                                        </small>
                                        <span class="hidden ms-2" data-region="loading-icon-container">
                                            <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                        </span>
                                        <span
                                            class="hidden badge rounded-pill bg-primary text-white ms-auto"
                                            data-region="section-unread-count-container" aria-labelledby="view-overview-messages-unread-count-label"
                                        >
                                            <span aria-hidden="true" data-region="section-unread-count"></span>
                                            <span class="visually-hidden" id="view-overview-messages-unread-count-label">
                                                There are  unread conversations
                                            </span>
                                        </span>
                                    </button>
                                </div>
                                                            <div
                                class="collapse border-bottom  lazy-load-list"
                                aria-live="polite"
                                data-region="lazy-load-list"
                                data-user-id="2"
                                            id="view-overview-messages-target-69073993342d3690739932f0446"
            aria-labelledby="view-overview-messages-toggle"
            data-bs-parent="#message-drawer-view-overview-container-69073993342d3690739932f0446"

                            >

                                <div class="hidden text-center p-2" data-region="empty-message-container">
                                            <p class="text-muted mt-2">No private conversations</p>

                                </div>
                                <div class="hidden list-group" data-region="content-container">

                                </div>
                                <div class="list-group" data-region="placeholder-container">
                                            <div class="text-center py-2"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</div>

                                </div>
                                <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container" >
                                    <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>

                <div
                    data-region="view-search"
                    aria-hidden="true"
                    class="h-100 hidden"
                    data-user-id="2"
                    data-users-offset="0"
                    data-messages-offset="0"
                    style="overflow-y: auto"

                >
                    <div class="hidden" data-region="search-results-container" style="overflow-y: auto">

                        <div class="d-flex flex-column">
                            <div class="mb-3 bg-white" data-region="all-contacts-container">
                                <div data-region="contacts-container"  class="pt-2">
                                    <h3 class="h6 px-2">Contacts</h3>
                                    <div class="list-group" data-region="list"></div>
                                </div>
                                <div data-region="non-contacts-container" class="pt-2 border-top">
                                    <h3 class="h6 px-2">Non-contacts</h3>
                                    <div class="list-group" data-region="list"></div>
                                </div>
                                <div class="text-end">
                                    <button class="btn btn-link text-primary" data-action="load-more-users">
                                        <span data-region="button-text">Load more</span>
                                        <span data-region="loading-icon-container" class="hidden"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                </div>
                            </div>
                            <div class="bg-white" data-region="messages-container">
                                <h3 class="h6 px-2 pt-2">Messages</h3>
                                <div class="list-group" data-region="list"></div>
                                <div class="text-end">
                                    <button class="btn btn-link text-primary" data-action="load-more-messages">
                                        <span data-region="button-text">Load more</span>
                                        <span data-region="loading-icon-container" class="hidden"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                </div>
                            </div>
                            <p class="hidden p-3 text-center" data-region="no-results-container">No results</p>
                        </div>                    </div>
                    <div class="hidden" data-region="loading-placeholder">
                        <div class="text-center pt-3 icon-size-4"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</div>
                    </div>
                    <div class="p-3 text-center" data-region="empty-message-container">
                        <p>Search people and messages</p>
                    </div>
                </div>
                <div class="h-100 hidden bg-white" aria-hidden="true" data-region="view-settings">
                    <div class="hidden" data-region="content-container">

                        <div data-region="settings" class="p-3">
                            <h3 class="h6 fw-bold">Privacy</h3>
                            <p>You can restrict who can message you</p>
                            <div data-preference="blocknoncontacts" class="mb-3">
                                <fieldset>
                                    <legend class="visually-hidden">Accept messages from:</legend>
                                        <div class="form-check mb-2">
                                            <input
                                                type="radio"
                                                name="message_blocknoncontacts"
                                                class="form-check-input"
                                                id="block-noncontacts-69073993342d3690739932f0446-1"
                                                value="1"
                                            >
                                            <label class="form-check-label ms-2" for="block-noncontacts-69073993342d3690739932f0446-1">
                                                My contacts only
                                            </label>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input
                                                type="radio"
                                                name="message_blocknoncontacts"
                                                class="form-check-input"
                                                id="block-noncontacts-69073993342d3690739932f0446-0"
                                                value="0"
                                            >
                                            <label class="form-check-label ms-2" for="block-noncontacts-69073993342d3690739932f0446-0">
                                                My contacts and anyone in my courses
                                            </label>
                                        </div>
                                </fieldset>
                            </div>

                            <div class="hidden" data-region="notification-preference-container" role="group" aria-labelledby="notification-preferences-header-69073993342d3690739932f0446">
                                <h3 class="mb-2 mt-4 h6 fw-bold" id="notification-preferences-header-69073993342d3690739932f0446">Notification preferences</h3>
                            </div>

                            <h3 class="mb-2 mt-4 h6 fw-bold">General</h3>
                            <div data-preference="entertosend">
                                <div class="form-check form-switch">
                                    <input type="checkbox" class="form-check-input" id="enter-to-send-69073993342d3690739932f0446" checked>
                                    <label class="form-check-label" for="enter-to-send-69073993342d3690739932f0446">
                                        Use enter to send
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-region="placeholder-container">

                        <div class="d-flex flex-column p-3">
                            <div class="w-25 bg-pulse-grey h6" style="height: 18px"></div>
                            <div class="w-75 bg-pulse-grey mb-4" style="height: 18px"></div>
                            <div class="mb-3">
                                <div class="w-100 d-flex mb-3">
                                    <div class="bg-pulse-grey rounded-circle" style="width: 18px; height: 18px"></div>
                                    <div class="bg-pulse-grey w-50 ms-2" style="height: 18px"></div>
                                </div>
                                <div class="w-100 d-flex mb-3">
                                    <div class="bg-pulse-grey rounded-circle" style="width: 18px; height: 18px"></div>
                                    <div class="bg-pulse-grey w-50 ms-2" style="height: 18px"></div>
                                </div>
                                <div class="w-100 d-flex mb-3">
                                    <div class="bg-pulse-grey rounded-circle" style="width: 18px; height: 18px"></div>
                                    <div class="bg-pulse-grey w-50 ms-2" style="height: 18px"></div>
                                </div>
                            </div>
                            <div class="w-50 bg-pulse-grey h6 mb-3 mt-2" style="height: 18px"></div>
                            <div class="mb-4">
                                <div class="w-100 d-flex mb-2 align-items-center">
                                    <div class="bg-pulse-grey w-25" style="width: 18px; height: 27px"></div>
                                    <div class="bg-pulse-grey w-25 ms-2" style="height: 18px"></div>
                                </div>
                                <div class="w-100 d-flex mb-2 align-items-center">
                                    <div class="bg-pulse-grey w-25" style="width: 18px; height: 27px"></div>
                                    <div class="bg-pulse-grey w-25 ms-2" style="height: 18px"></div>
                                </div>
                            </div>
                            <div class="w-25 bg-pulse-grey h6 mb-3 mt-2" style="height: 18px"></div>
                            <div class="mb-3">
                                <div class="w-100 d-flex mb-2 align-items-center">
                                    <div class="bg-pulse-grey w-25" style="width: 18px; height: 27px"></div>
                                    <div class="bg-pulse-grey w-50 ms-2" style="height: 18px"></div>
                                </div>
                            </div>
                        </div>                    </div>
                </div>            </div>
            <div class="footer-container position-relative" data-region="footer-container">

                <div
                    class="hidden border-top bg-white position-relative"
                    aria-hidden="true"
                    data-region="view-conversation"
                    data-enter-to-send="1"
                >
                    <div class="hidden p-sm-2" data-region="content-messages-footer-container">

                            <div
                                class="emoji-auto-complete-container w-100 hidden"
                                data-region="emoji-auto-complete-container"
                                aria-live="polite"
                                aria-hidden="true"
                            >
                            </div>
                        <div class="d-flex mt-sm-1">
                            <textarea
                                dir="auto"
                                data-region="send-message-txt"
                                class="form-control bg-light"
                                rows="3"
                                data-auto-rows
                                data-min-rows="3"
                                data-max-rows="5"
                                aria-label="Write a message..."
                                placeholder="Write a message..."
                                style="resize: none"
                                maxlength="4096"
                            ></textarea>

                            <div class="position-relative d-flex flex-column">
                                    <div
                                        data-region="emoji-picker-container"
                                        class="emoji-picker-container hidden"
                                        aria-hidden="true"
                                    >

                                        <div
                                            data-region="emoji-picker"
                                            class="card shadow emoji-picker"
                                        >
                                            <div class="card-header px-1 pt-1 pb-0 d-flex justify-content-between flex-shrink-0">
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0 selected"
                                                    data-action="show-category"
                                                    data-category="Recent"
                                                    title="Recent"
                                                >
                                                    <i class="icon fa-regular fa-clock fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Smileys & Emotion"
                                                    title="Smileys & emotion"
                                                >
                                                    <i class="icon fa-regular fa-face-smile fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="People & Body"
                                                    title="People & body"
                                                >
                                                    <i class="icon fa fa-person fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Animals & Nature"
                                                    title="Animals & nature"
                                                >
                                                    <i class="icon fa fa-leaf fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Food & Drink"
                                                    title="Food & drink"
                                                >
                                                    <i class="icon fa fa-pizza-slice fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Travel & Places"
                                                    title="Travel & places"
                                                >
                                                    <i class="icon fa fa-plane fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Activities"
                                                    title="Activities"
                                                >
                                                    <i class="icon fa fa-futbol fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Objects"
                                                    title="Objects"
                                                >
                                                    <i class="icon fa fa-hammer fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Symbols"
                                                    title="Symbols"
                                                >
                                                    <i class="icon fa fa-peace fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Flags"
                                                    title="Flags"
                                                >
                                                    <i class="icon fa fa-flag fa-fw " aria-hidden="true" ></i>
                                                </button>
                                            </div>
                                            <div class="card-body p-2 d-flex flex-column overflow-hidden">
                                                <div class="input-group mb-1 flex-shrink-0">
                                                    <span class="input-group-text pe-0 bg-white text-muted">
                                                        <i class="icon fa fa-magnifying-glass fa-fw " aria-hidden="true" ></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        class="form-control border-start-0"
                                                        placeholder="Search"
                                                        aria-label="Search"
                                                        data-region="search-input"
                                                    >
                                                </div>
                                                <div class="flex-grow-1 overflow-auto emojis-container h-100" data-region="emojis-container">
                                                    <div class="position-relative" data-region="row-container"></div>
                                                </div>
                                                <div class="flex-grow-1 overflow-auto search-results-container h-100 hidden" data-region="search-results-container">
                                                    <div class="position-relative" data-region="row-container"></div>
                                                </div>
                                            </div>
                                            <div
                                                class="card-footer d-flex flex-shrink-0"
                                                data-region="footer"
                                            >
                                                <div class="emoji-preview" data-region="emoji-preview"></div>
                                                <div data-region="emoji-short-name" class="emoji-short-name text-muted text-wrap ms-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        class="btn btn-icon ms-1"
                                        aria-label="Toggle emoji picker"
                                        data-action="toggle-emoji-picker"
                                    >
                                        <i class="icon fa-regular fa-face-smile fa-fw " aria-hidden="true" ></i>
                                    </button>
                                <button
                                    class="btn btn-icon ms-1 mt-auto"
                                    aria-label="Send message"
                                    data-action="send-message"
                                >
                                    <span data-region="send-icon-container"><i class="icon fa-regular fa-paper-plane fa-fw " aria-hidden="true" ></i></span>
                                    <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="hidden p-sm-2" data-region="content-messages-footer-edit-mode-container">

                        <div class="d-flex p-3 justify-content-end">
                            <button
                                class="btn btn-icon my-1 icon-size-4"
                                data-action="delete-selected-messages"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete selected messages"
                            >
                                <span data-region="icon-container"><i class="icon fa fa-trash-can fa-fw " aria-hidden="true" ></i></span>
                                <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                <span class="visually-hidden">Delete selected messages</span>
                            </button>
                        </div>                    </div>
                    <div class="hidden bg-secondary p-sm-3" data-region="content-messages-footer-require-contact-container">

                        <div class="p-3 bg-white">
                            <p data-region="title"></p>
                            <p class="text-muted" data-region="text"></p>
                            <button type="button" class="btn btn-primary w-100" data-action="request-add-contact">
                                <span data-region="dialogue-button-text">Send contact request</span>
                                <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                            </button>
                        </div>
                    </div>
                    <div class="hidden bg-secondary p-sm-3" data-region="content-messages-footer-require-unblock-container">

                        <div class="p-3 bg-white">
                            <p class="text-muted" data-region="text">You have blocked this user.</p>
                            <button type="button" class="btn btn-primary w-100" data-action="request-unblock">
                                <span data-region="dialogue-button-text">Unblock user</span>
                                <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                            </button>
                        </div>
                    </div>
                    <div class="hidden bg-secondary p-sm-3" data-region="content-messages-footer-unable-to-message">

                        <div class="p-3 bg-white">
                            <p class="text-muted" data-region="text">You are unable to message this user</p>
                        </div>
                    </div>
                    <div class="p-sm-2" data-region="placeholder-container">
                        <div class="d-flex">
                            <div class="bg-pulse-grey w-100" style="height: 80px"></div>
                            <div class="mx-2 mb-2 align-self-end bg-pulse-grey" style="height: 20px; width: 20px"></div>
                        </div>                    </div>
                    <div
                        class="hidden position-absolute z-index-1"
                        data-region="confirm-dialogue-container"
                        style="top: -1px; bottom: 0; right: 0; left: 0; background: rgba(0,0,0,0.3);"
                    ></div>
                </div>                    <div data-region="view-overview" class="text-center">
                        <a href="https://learning.transportactiongroup.com/message/index.php">
                            See all
                        </a>
                    </div>
            </div>
        </div>

</div>
</div>


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          curl -i "https://learning.transportactiongroup.com/local/tco/endpoints/tco_history.php?limit=10" \ocal/tco/endpoints/tco_history.php?limit=10" \
  -H "Origin: https://transportactiongroup.vercel.app" \
  --cookie "MoodleSession=gu21gu2c354nqvkjj6l07sgldm"
HTTP/2 404
server: nginx/1.24.0 (Ubuntu)
date: Sun, 02 Nov 2025 11:02:55 GMT
content-type: text/html; charset=utf-8
expires:
cache-control: private, pre-check=0, post-check=0, max-age=0, no-transform
pragma: no-cache
access-control-allow-origin: https://transportactiongroup.vercel.app
access-control-allow-credentials: true
access-control-allow-methods: GET, POST, PATCH, DELETE, OPTIONS
access-control-allow-headers: Content-Type
content-language: en
content-script-type: text/javascript
content-style-type: text/css
x-ua-compatible: IE=edge
accept-ranges: none
x-frame-options: sameorigin

<!DOCTYPE html>

<html  dir="ltr" lang="en" xml:lang="en">
<head>
    <title>Error | TAG LMS</title>
    <link rel="shortcut icon" href="https://learning.transportactiongroup.com/pluginfile.php/1/core_admin/favicon/64x64/1762077687/TAGhiresblack-B_oD1Wj3.png" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="moodle, Error | TAG LMS" />
<link rel="stylesheet" type="text/css" href="https://learning.transportactiongroup.com/theme/yui_combo.php?rollup/3.18.1/yui-moodlesimple.css" /><script id="firstthemesheet" type="text/css">/** Required in order to fix style inclusion problems in IE with YUI **/</script><link rel="stylesheet" type="text/css" href="https://learning.transportactiongroup.com/theme/styles.php/boost/1762077687_1759850523/all" />
<script>
//<![CDATA[
var M = {}; M.yui = {};
M.pageloadstarttime = new Date();
M.cfg = {"wwwroot":"https:\/\/learning.transportactiongroup.com","apibase":"https:\/\/learning.transportactiongroup.com\/r.php\/api","homeurl":{},"sesskey":"myHolqxBsp","sessiontimeout":"28800","sessiontimeoutwarning":"1200","themerev":"1762077687","slasharguments":1,"theme":"boost","iconsystemmodule":"core\/icon_system_fontawesome","jsrev":"1762077687","admin":"admin","svgicons":true,"usertimezone":"Africa\/Johannesburg","language":"en","courseId":1,"courseContextId":2,"contextid":1,"contextInstanceId":0,"langrev":1762077687,"templaterev":"1762077687","siteId":1,"userId":2,"developerdebug":true};var yui1ConfigFn = function(me) {if(/-skin|reset|fonts|grids|base/.test(me.name)){me.type='css';me.path=me.path.replace(/\.js/,'.css');me.path=me.path.replace(/\/yui2-skin/,'/assets/skins/sam/yui2-skin')}};
var yui2ConfigFn = function(me) {var parts=me.name.replace(/^moodle-/,'').split('-'),component=parts.shift(),module=parts[0],min='-min';if(/-(skin|core)$/.test(me.name)){parts.pop();me.type='css';min=''}
if(module){var filename=parts.join('-');me.path=component+'/'+module+'/'+filename+min+'.'+me.type}else{me.path=component+'/'+component+'.'+me.type}};
YUI_config = {"debug":true,"base":"https:\/\/learning.transportactiongroup.com\/lib\/yuilib\/3.18.1\/","comboBase":"https:\/\/learning.transportactiongroup.com\/theme\/yui_combo.php?","combine":true,"filter":"RAW","insertBefore":"firstthemesheet","groups":{"yui2":{"base":"https:\/\/learning.transportactiongroup.com\/lib\/yuilib\/2in3\/2.9.0\/build\/","comboBase":"https:\/\/learning.transportactiongroup.com\/theme\/yui_combo.php?","combine":true,"ext":false,"root":"2in3\/2.9.0\/build\/","patterns":{"yui2-":{"group":"yui2","configFn":yui1ConfigFn}}},"moodle":{"name":"moodle","base":"https:\/\/learning.transportactiongroup.com\/theme\/yui_combo.php?m\/1762077687\/","combine":true,"comboBase":"https:\/\/learning.transportactiongroup.com\/theme\/yui_combo.php?","ext":false,"root":"m\/1762077687\/","patterns":{"moodle-":{"group":"moodle","configFn":yui2ConfigFn}},"filter":"DEBUG","modules":{"moodle-core-maintenancemodetimer":{"requires":["base","node"]},"moodle-core-blocks":{"requires":["base","node","io","dom","dd","dd-scroll","moodle-core-dragdrop","moodle-core-notification"]},"moodle-core-notification":{"requires":["moodle-core-notification-dialogue","moodle-core-notification-alert","moodle-core-notification-confirm","moodle-core-notification-exception","moodle-core-notification-ajaxexception"]},"moodle-core-notification-dialogue":{"requires":["base","node","panel","escape","event-key","dd-plugin","moodle-core-widget-focusafterclose","moodle-core-lockscroll"]},"moodle-core-notification-alert":{"requires":["moodle-core-notification-dialogue"]},"moodle-core-notification-confirm":{"requires":["moodle-core-notification-dialogue"]},"moodle-core-notification-exception":{"requires":["moodle-core-notification-dialogue"]},"moodle-core-notification-ajaxexception":{"requires":["moodle-core-notification-dialogue"]},"moodle-core-actionmenu":{"requires":["base","event","node-event-simulate"]},"moodle-core-handlebars":{"condition":{"trigger":"handlebars","when":"after"}},"moodle-core-event":{"requires":["event-custom"]},"moodle-core-chooserdialogue":{"requires":["base","panel","moodle-core-notification"]},"moodle-core-lockscroll":{"requires":["plugin","base-build"]},"moodle-core-dragdrop":{"requires":["base","node","io","dom","dd","event-key","event-focus","moodle-core-notification"]},"moodle-core_availability-form":{"requires":["base","node","event","event-delegate","panel","moodle-core-notification-dialogue","json"]},"moodle-course-categoryexpander":{"requires":["node","event-key"]},"moodle-course-management":{"requires":["base","node","io-base","moodle-core-notification-exception","json-parse","dd-constrain","dd-proxy","dd-drop","dd-delegate","node-event-delegate"]},"moodle-course-util":{"requires":["node"],"use":["moodle-course-util-base"],"submodules":{"moodle-course-util-base":{},"moodle-course-util-section":{"requires":["node","moodle-course-util-base"]},"moodle-course-util-cm":{"requires":["node","moodle-course-util-base"]}}},"moodle-course-dragdrop":{"requires":["base","node","io","dom","dd","dd-scroll","moodle-core-dragdrop","moodle-core-notification","moodle-course-coursebase","moodle-course-util"]},"moodle-form-shortforms":{"requires":["node","base","selector-css3","moodle-core-event"]},"moodle-form-dateselector":{"requires":["base","node","overlay","calendar"]},"moodle-question-searchform":{"requires":["base","node"]},"moodle-question-chooser":{"requires":["moodle-core-chooserdialogue"]},"moodle-availability_completion-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_date-form":{"requires":["base","node","event","io","moodle-core_availability-form"]},"moodle-availability_grade-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_group-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_grouping-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_profile-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-mod_assign-history":{"requires":["node","transition"]},"moodle-mod_customcert-rearrange":{"requires":["dd-delegate","dd-drag"]},"moodle-mod_quiz-modform":{"requires":["base","node","event"]},"moodle-mod_quiz-quizbase":{"requires":["base","node"]},"moodle-mod_quiz-util":{"requires":["node","moodle-core-actionmenu"],"use":["moodle-mod_quiz-util-base"],"submodules":{"moodle-mod_quiz-util-base":{},"moodle-mod_quiz-util-slot":{"requires":["node","moodle-mod_quiz-util-base"]},"moodle-mod_quiz-util-page":{"requires":["node","moodle-mod_quiz-util-base"]}}},"moodle-mod_quiz-questionchooser":{"requires":["moodle-core-chooserdialogue","moodle-mod_quiz-util","querystring-parse"]},"moodle-mod_quiz-autosave":{"requires":["base","node","event","event-valuechange","node-event-delegate","io-form","datatype-date-format"]},"moodle-mod_quiz-dragdrop":{"requires":["base","node","io","dom","dd","dd-scroll","moodle-core-dragdrop","moodle-core-notification","moodle-mod_quiz-quizbase","moodle-mod_quiz-util-base","moodle-mod_quiz-util-page","moodle-mod_quiz-util-slot","moodle-course-util"]},"moodle-mod_quiz-toolboxes":{"requires":["base","node","event","event-key","io","moodle-mod_quiz-quizbase","moodle-mod_quiz-util-slot","moodle-core-notification-ajaxexception"]},"moodle-message_airnotifier-toolboxes":{"requires":["base","node","io"]},"moodle-report_eventlist-eventfilter":{"requires":["base","event","node","node-event-delegate","datatable","autocomplete","autocomplete-filters"]},"moodle-report_loglive-fetchlogs":{"requires":["base","event","node","io","node-event-delegate"]},"moodle-gradereport_history-userselector":{"requires":["escape","event-delegate","event-key","handlebars","io-base","json-parse","moodle-core-notification-dialogue"]},"moodle-qbank_editquestion-chooser":{"requires":["moodle-core-chooserdialogue"]},"moodle-tool_lp-dragdrop-reorder":{"requires":["moodle-core-dragdrop"]},"moodle-assignfeedback_editpdf-editor":{"requires":["base","event","node","io","graphics","json","event-move","event-resize","transition","querystring-stringify-simple","moodle-core-notification-dialog","moodle-core-notification-alert","moodle-core-notification-warning","moodle-core-notification-exception","moodle-core-notification-ajaxexception"]}}},"gallery":{"name":"gallery","base":"https:\/\/learning.transportactiongroup.com\/lib\/yuilib\/gallery\/","combine":true,"comboBase":"https:\/\/learning.transportactiongroup.com\/theme\/yui_combo.php?","ext":false,"root":"gallery\/1762077687\/","patterns":{"gallery-":{"group":"gallery"}}}},"modules":{"core_filepicker":{"name":"core_filepicker","fullpath":"https:\/\/learning.transportactiongroup.com\/lib\/javascript.php\/1762077687\/repository\/filepicker.js","requires":["base","node","node-event-simulate","json","async-queue","io-base","io-upload-iframe","io-form","yui2-treeview","panel","cookie","datatable","datatable-sort","resize-plugin","dd-plugin","escape","moodle-core_filepicker","moodle-core-notification-dialogue"]},"core_comment":{"name":"core_comment","fullpath":"https:\/\/learning.transportactiongroup.com\/lib\/javascript.php\/1762077687\/comment\/comment.js","requires":["base","io-base","node","json","yui2-animation","overlay","escape"]}},"logInclude":[],"logExclude":[],"logLevel":null};
M.yui.loader = {modules: {}};

//]]>
</script>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body  id="page-site-index" class="format-site course path-site dir-ltr lang-en yui-skin-sam yui3-skin-sam learning-transportactiongroup-com pagelayout-base course-1 context-1 theme uses-drawers drawer-open-index">
<div class="toast-wrapper mx-auto py-0 fixed-top" role="status" aria-live="polite"></div>
<div id="page-wrapper" class="d-print-block">

    <div>
    <a class="visually-hidden-focusable" href="#maincontent">Skip to main content</a>
</div><script src="https://learning.transportactiongroup.com/lib/javascript.php/1762077687/lib/polyfills/polyfill.js"></script>
<script src="https://learning.transportactiongroup.com/theme/yui_combo.php?rollup/3.18.1/yui-moodlesimple.js"></script><script src="https://learning.transportactiongroup.com/lib/javascript.php/1762077687/lib/javascript-static.js"></script>
<script>
//<![CDATA[
document.body.className += ' jsenabled';
//]]>
</script>



    <nav class="navbar fixed-top bg-body navbar-expand" aria-label="Site navigation">
        <div class="container-fluid">
            <button class="navbar-toggler aabtn d-block d-md-none px-1 my-1 border-0" data-toggler="drawers" data-action="toggle" data-target="theme_boost-drawers-primary">
                <span class="navbar-toggler-icon"></span>
                <span class="visually-hidden">Side panel</span>
            </button>

            <a href="https://learning.transportactiongroup.com/my/" class="navbar-brand d-none d-md-flex align-items-center m-0 me-4 p-0 aabtn">

                    TAG LMS
            </a>
                <div class="primary-navigation">
                    <nav class="moremenu navigation">
                        <ul id="moremenu-69073a5f5a285-navbar-nav" role="menubar" class="nav more-nav navbar-nav">
                                    <li data-key="home" class="nav-item" role="none" data-forceintomoremenu="false">
                                                <a role="menuitem" class="nav-link active "
                                                    href="https://learning.transportactiongroup.com/?redirect=0"

                                                    aria-current="true"
                                                    data-disableactive="true"

                                                >
                                                    Home
                                                </a>
                                    </li>
                                    <li data-key="myhome" class="nav-item" role="none" data-forceintomoremenu="false">
                                                <a role="menuitem" class="nav-link  "
                                                    href="https://learning.transportactiongroup.com/my/"


                                                    data-disableactive="true"
                                                    tabindex="-1"
                                                >
                                                    Dashboard
                                                </a>
                                    </li>
                                    <li data-key="mycourses" class="nav-item" role="none" data-forceintomoremenu="false">
                                                <a role="menuitem" class="nav-link  "
                                                    href="https://learning.transportactiongroup.com/my/courses.php"


                                                    data-disableactive="true"
                                                    tabindex="-1"
                                                >
                                                    My courses
                                                </a>
                                    </li>
                                    <li data-key="siteadminnode" class="nav-item" role="none" data-forceintomoremenu="false">
                                                <a role="menuitem" class="nav-link  "
                                                    href="https://learning.transportactiongroup.com/admin/search.php"


                                                    data-disableactive="true"
                                                    tabindex="-1"
                                                >
                                                    Site administration
                                                </a>
                                    </li>
                            <li role="none" class="nav-item dropdown dropdownmoremenu d-none" data-region="morebutton">
                                <a class="dropdown-toggle nav-link " href="#" id="moremenu-dropdown-69073a5f5a285" role="menuitem" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" tabindex="-1">
                                    More
                                </a>
                                <ul class="dropdown-menu dropdown-menu-start" data-region="moredropdown" aria-labelledby="moremenu-dropdown-69073a5f5a285" role="menu">
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

            <ul class="navbar-nav d-none d-md-flex my-1 px-1">
                <!-- page_heading_menu -->

            </ul>

            <div id="usernavigation" class="navbar-nav ms-auto h-100">
                <div class="popover-region collapsed popover-region-notifications"
    id="nav-notification-popover-container" data-userid="2"
    data-region="popover-region">
    <div class="popover-region-toggle nav-link icon-no-margin"
        data-region="popover-region-toggle"
        aria-controls="popover-region-container-69073a5f5d4e669073a5f5ba732"
        aria-haspopup="true"
        aria-expanded="false"
        aria-label="  Show notification window with 1 new notifications  "
        title="  Show notification window with 1 new notifications  "
        tabindex="0"
        role="button">
                <i class="icon fa fa-bell fa-fw " aria-hidden="true" ></i>
        <div
            class="count-container "
            data-region="count-container"
            aria-hidden=true
        >
            1
        </div>

    </div>
    <div         aria-modal="true"
        tabindex="-1"

        id="popover-region-container-69073a5f5d4e669073a5f5ba732"
        class="popover-region-container"
        data-region="popover-region-container"
        aria-hidden="true"
        aria-label="Notification window"
        role="dialog">
        <div class="popover-region-header-container">
            <h3 class="popover-region-header-text" data-region="popover-region-header-text">Notifications</h3>
            <div class="popover-region-header-actions" data-region="popover-region-header-actions">        <a class="mark-all-read-button btn btn-sm btn-link m-0 py-0 icon-no-margin"
           href="#"
           title="Mark all as read"
           data-action="mark-all-read"
           role="button"
           aria-label="Mark all as read">
            <span class="normal-icon"><i class="icon fa fa-check fa-fw " aria-hidden="true" ></i></span>
            <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
            <span aria-live="polite" class="visually-hidden" data-region="notification-read-feedback"></span>
        </a>
            <a href="https://learning.transportactiongroup.com/message/notificationpreferences.php"
               title="Notification preferences"
               aria-label="Notification preferences"
               class="btn btn-sm btn-link m-0 py-0 icon-no-margin" >
                <i class="icon fa fa-gear fa-fw " aria-hidden="true" ></i></a>
        <button type="button" class="btn btn-sm btn-link m-0 py-0 icon-no-margin" aria-label="Close" title="Close" data-action="close-notification-popover">
            <i class="icon fa fa-xmark fa-fw " aria-hidden="true" ></i>
        </button>
</div>
        </div>
        <div class="popover-region-content-container" data-region="popover-region-content-container">
            <div class="popover-region-content" data-region="popover-region-content">
                        <div class="all-notifications"
            data-region="all-notifications"
            role="log"
            aria-busy="false"
            aria-atomic="false"
            aria-relevant="additions"></div>
        <div class="empty-message" tabindex="0" data-region="empty-message">You have no notifications</div>

            </div>
            <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
        </div>
                <a class="see-all-link"
                    href="https://learning.transportactiongroup.com/message/output/popup/notifications.php">
                    <div class="popover-region-footer-container">
                        <div class="popover-region-seeall-text">See all</div>
                    </div>
                </a>
    </div>
</div><div class="popover-region collapsed" data-region="popover-region-messages">
    <a
        id="message-drawer-toggle-69073a5f5e58269073a5f5ba733"
        class="nav-link popover-region-toggle position-relative icon-no-margin"
        href="#"
        aria-label="Toggle messaging drawer"
        title="Toggle messaging drawer"
        role="button"
        aria-expanded="false"
        aria-describedby="unread-messages-count-69073a5f5e58269073a5f5ba733"
    >
        <i class="icon fa fa-message fa-fw " aria-hidden="true" ></i>
        <div
            class="count-container hidden"
            data-region="count-container"
        >
            <span aria-hidden="true">0</span>
            <span class="visually-hidden" id="unread-messages-count-69073a5f5e58269073a5f5ba733">There are 0 unread conversations</span>
        </div>
    </a>
    <span class="visually-hidden-focusable" data-region="jumpto" tabindex="-1"></span>
</div>
                <div class="d-flex align-items-stretch usermenu-container" data-region="usermenu">
                        <div class="usermenu">
                                <div class="dropdown show">
                                    <a href="#" role="button" id="user-menu-toggle" data-bs-toggle="dropdown" aria-label="User menu"
                                       aria-haspopup="true" aria-controls="user-action-menu" class="btn dropdown-toggle">
                                        <span class="userbutton">
                                            <span class="avatars">
                                                    <span class="avatar current">
                                                        <span class="userinitials size-35" title="Admin User" aria-label="Admin User" role="img">AU</span>
                                                    </span>
                                            </span>
                                        </span>
                                    </a>
                                    <div id="user-action-menu" class="dropdown-menu dropdown-menu-end">
                                        <div id="usermenu-carousel" class="carousel slide" data-touch="false" data-interval="false" data-keyboard="false">
                                            <div class="carousel-inner">
                                                <div id="carousel-item-main" class="carousel-item active" role="menu" tabindex="-1" aria-label="User">
                                                            <a href="https://learning.transportactiongroup.com/user/profile.php" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Profile
                                                            </a>

                                                            <a href="https://learning.transportactiongroup.com/grade/report/overview/index.php" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Grades
                                                            </a>

                                                            <a href="https://learning.transportactiongroup.com/calendar/view.php?view=month" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Calendar
                                                            </a>

                                                            <a href="https://learning.transportactiongroup.com/user/files.php" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Private files
                                                            </a>

                                                            <a href="https://learning.transportactiongroup.com/reportbuilder/index.php" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Reports
                                                            </a>

                                                        <div class="dropdown-divider"></div>
                                                            <a href="https://learning.transportactiongroup.com/user/preferences.php" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Preferences
                                                            </a>

                                                            <a href="#" class="carousel-navigation-link dropdown-item" role="menuitem" tabindex="-1" data-carousel-target-id="carousel-item-69073a5f5afe8">

                                                                Language
                                                            </a>

                                                            <a href="https://learning.transportactiongroup.com/course/switchrole.php?id=1&amp;switchrole=-1&amp;returnurl=%2F" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Switch role to...
                                                            </a>
                                                        <div class="dropdown-divider"></div>
                                                            <a href="https://learning.transportactiongroup.com/login/logout.php?sesskey=myHolqxBsp" class="dropdown-item" role="menuitem" tabindex="-1">

                                                                Log out
                                                            </a>

                                                </div>
                                                    <div id="carousel-item-69073a5f5afe8" role="menu" class="carousel-item submenu" tabindex="-1" aria-label="Language selector">
                                                        <div class="d-flex flex-column h-100">
                                                            <div class="header">
                                                                <button type="button" class="btn btn-icon carousel-navigation-link text-decoration-none text-body" data-carousel-target-id="carousel-item-main" aria-label="Go back to user menu">
                                                                    <span class="dir-rtl-hide"><img class="icon " alt="" aria-hidden="true" src="https://learning.transportactiongroup.com/theme/image.php/boost/core/1762077687/i/arrow-left" /></span>
                                                                    <span class="dir-ltr-hide"><img class="icon " alt="" aria-hidden="true" src="https://learning.transportactiongroup.com/theme/image.php/boost/core/1762077687/i/arrow-right" /></span>
                                                                </button>
                                                                <span class="ps-2" id="carousel-item-title-69073a5f5afe8">Language selector</span>
                                                            </div>
                                                            <div class="dropdown-divider"></div>
                                                            <div class="items h-100 overflow-auto" role="menu" aria-labelledby="carousel-item-title-69073a5f5afe8">
                                                                        <a href="https://learning.transportactiongroup.com/?lang=am" class="dropdown-item ps-5" role="menuitem" tabindex="-1"
                                                                            lang="am" >
                                                                             አማርኛ ‎(am)‎
                                                                        </a>
                                                                        <a href="#" class="dropdown-item ps-5" role="menuitem" tabindex="-1" aria-current="true"
                                                                            >
                                                                            English ‎(en)‎
                                                                        </a>
                                                                        <a href="https://learning.transportactiongroup.com/?lang=fr_incl" class="dropdown-item ps-5" role="menuitem" tabindex="-1"
                                                                            lang="fr" >
                                                                            Français (écriture inclusive) ‎(fr_incl)‎
                                                                        </a>
                                                                        <a href="https://learning.transportactiongroup.com/?lang=fr" class="dropdown-item ps-5" role="menuitem" tabindex="-1"
                                                                            lang="fr" >
                                                                            Français ‎(fr)‎
                                                                        </a>
                                                                        <a href="https://learning.transportactiongroup.com/?lang=sw" class="dropdown-item ps-5" role="menuitem" tabindex="-1"
                                                                            lang="sw" >
                                                                            Kiswahili ‎(sw)‎
                                                                        </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div>
                <div class="divider border-start h-75 align-self-center ms-1 me-3"></div>
<form action="https://learning.transportactiongroup.com/editmode.php" method="post" class="d-flex align-items-center editmode-switch-form">
    <div class="input-group">
        <label class="me-2 mb-0 form-check-label " for="69073a5f5ef4169073a5f5ba734-editingswitch">
            Edit mode
        </label>
        <div class="form-check form-switch">
            <input type="checkbox" name="setmode" class="form-check-input" id="69073a5f5ef4169073a5f5ba734-editingswitch" data-context="1" data-pageurl="https://learning.transportactiongroup.com/">
            <span class="form-check-label">&nbsp;</span>
        </div>
    </div>
    <input type="hidden" name="sesskey" value="myHolqxBsp">
    <input type="hidden" name="pageurl" value="https://learning.transportactiongroup.com/">
    <input type="hidden" name="context" value="1">
    <noscript>
        <input type="submit" value="Set mode">
    </noscript>
</form>
            </div>
        </div>
    </nav>


<div  class="drawer drawer-left drawer-primary d-print-none not-initialized" data-region="fixed-drawer" id="theme_boost-drawers-primary" data-preference="" data-state="show-drawer-primary" data-forceopen="0" data-close-on-resize="1">
    <div class="drawerheader">
        <button
            class="btn btn-icon drawertoggle hidden"
            data-toggler="drawers"
            data-action="closedrawer"
            data-target="theme_boost-drawers-primary"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Close drawer"
        >
            <i class="icon fa fa-xmark fa-fw " aria-hidden="true" ></i>
        </button>
                <a
            href="https://learning.transportactiongroup.com/my/"
            title="TAG LMS"
            data-region="site-home-link"
            class="aabtn text-reset d-flex align-items-center py-1 h-100"
        >
                <span class="sitename" title="TAG LMS">TAG LMS</span>
        </a>

        <div class="drawerheadercontent hidden">

        </div>
    </div>
    <div class="drawercontent drag-container" data-usertour="scroller">
                <div class="list-group">
                <a href="https://learning.transportactiongroup.com/?redirect=0" class="list-group-item list-group-item-action active " aria-current="true">
                    Home
                </a>
                <a href="https://learning.transportactiongroup.com/my/" class="list-group-item list-group-item-action  " >
                    Dashboard
                </a>
                <a href="https://learning.transportactiongroup.com/my/courses.php" class="list-group-item list-group-item-action  " >
                    My courses
                </a>
                <a href="https://learning.transportactiongroup.com/admin/search.php" class="list-group-item list-group-item-action  " >
                    Site administration
                </a>
        </div>

    </div>
</div>
    <div id="page" data-region="mainpage" data-usertour="scroller" class="drawers   drag-container">
        <div id="topofscroll" class="main-inner">
            <div class="drawer-toggles d-flex">
            </div>
            <header id="page-header" class="header-maxwidth d-print-none">
    <div class="w-100">
        <div class="d-flex flex-wrap">
            <div id="page-navbar">
                <nav aria-label="Navigation bar">
    <ol class="breadcrumb"></ol>
</nav>
            </div>
            <div class="ms-auto d-flex">

            </div>
            <div id="course-header">

            </div>
        </div>
        <div class="d-flex align-items-center">
                    <div class="me-auto">
                        <div class="page-context-header d-flex flex-wrap align-items-center mb-2">
    <div class="page-header-headings">
        <h1 class="h2 mb-0">Transport Action Group Learning Management System</h1>
    </div>
</div>
                    </div>
            <div class="header-actions-container ms-auto" data-region="header-actions-container">
            </div>
        </div>
    </div>
</header>
            <div id="page-content" class="pb-3 d-print-block">
                <div id="region-main-box">
                    <div id="region-main">

                        <span class="notifications" id="user-notifications"></span>
                        <div role="main"><span id="maincontent"></span><div data-rel="fatalerror" class="box py-3 errorbox alert alert-danger"><p class="errormessage">Table &quot;tco_calculations&quot; does not exist</p><p class="errorcode"><a href="https://docs.moodle.org/500/en/error/moodle/ddltablenotexist">More information about this error</a></p></div><div class="alert alert-danger alert-block fade in  alert-dismissible"  role="alert" data-aria-autofocus="true">
    <strong>Debug info: </strong> <br />Error code: ddltablenotexist
    <button type="button" class="btn-close" data-bs-dismiss="alert">
        <span class="visually-hidden">Dismiss this notification</span>
    </button>
</div><div class="alert alert-danger alert-block fade in  alert-dismissible"  role="alert" data-aria-autofocus="true">
    <strong>Stack trace: </strong> <ul style="text-align:left;"><li>line 677 of /lib/dml/moodle_database.php: dml_exception thrown</li><li>line 1457 of /lib/dml/moodle_database.php: call to moodle_database-&gt;where_clause()</li><li>line 9 of /local/tco/endpoints/tco_history.php: call to moodle_database-&gt;get_records()</li></ul>
    <button type="button" class="btn-close" data-bs-dismiss="alert">
        <span class="visually-hidden">Dismiss this notification</span>
    </button>
</div><div class="continuebutton">
    <form method="get" action="https://learning.transportactiongroup.com/" >
        <button type="submit" class="btn btn-primary"
            id="single_button69073a5f5ba737"


            >Continue</button>
    </form>
</div></div>



                    </div>
                </div>
            </div>
        </div>

        <footer id="page-footer" class="footer-popover bg-white">
            <div data-region="footer-container-popover">
                <button class="btn btn-icon rounded-circle bg-secondary btn-footer-popover" data-action="footer-popover" aria-label="Show footer">
                    <i class="icon fa fa-question fa-fw " aria-hidden="true" ></i>
                </button>
            </div>
            <div class="footer-content-popover container" data-region="footer-content-popover">
                    <div class="footer-section p-3 border-bottom">
                            <div class="footer-support-link"><a href="https://docs.moodle.org/500/en/site/index"><i class="icon fa fa-book fa-fw " aria-hidden="true" ></i>Documentation for this page</a></div>

                            <div class="footer-support-link"><a target="_blank" href="https://moodle.com/help/?utm_source=CTA-banner&amp;utm_medium=platform&amp;utm_campaign=name~Moodle4+cat~lms+mp~no"><i class="icon fa fa-life-ring fa-fw fa fa-life-ring" aria-hidden="true" ></i>Services and support<i class="icon fa fa-arrow-up-right-from-square fa-fw ms-1"  title="Opens in new window" role="img" aria-label="Opens in new window"></i></a></div>

                            <div class="footer-support-link"><a href="https://learning.transportactiongroup.com/user/contactsitesupport.php"><i class="icon fa-regular fa-envelope fa-fw " aria-hidden="true" ></i>Contact site support</a></div>
                    </div>
                <div class="footer-section p-3 border-bottom">
                    <div class="logininfo">
                        <div class="logininfo">You are logged in as <a href="https://learning.transportactiongroup.com/user/profile.php?id=2" title="View profile">Admin User</a> (<a href="https://learning.transportactiongroup.com/login/logout.php?sesskey=myHolqxBsp">Log out</a>)</div>
                    </div>
                    <div class="tool_usertours-resettourcontainer">
                    </div>

                    <div class="tool_dataprivacy"><a href="https://learning.transportactiongroup.com/admin/tool/dataprivacy/summary.php">Data retention summary</a></div>
                    <script>
//<![CDATA[
var require = {
    baseUrl : 'https://learning.transportactiongroup.com/lib/requirejs.php/1762077687/',
    // We only support AMD modules with an explicit define() statement.
    enforceDefine: true,
    skipDataMain: true,
    waitSeconds : 0,

    paths: {
        jquery: 'https://learning.transportactiongroup.com/lib/javascript.php/1762077687/lib/jquery/jquery-3.7.1.min',
        jqueryui: 'https://learning.transportactiongroup.com/lib/javascript.php/1762077687/lib/jquery/ui-1.14.1/jquery-ui.min',
        jqueryprivate: 'https://learning.transportactiongroup.com/lib/javascript.php/1762077687/lib/requirejs/jquery-private'
    },

    // Custom jquery config map.
    map: {
      // '*' means all modules will get 'jqueryprivate'
      // for their 'jquery' dependency.
      '*': { jquery: 'jqueryprivate' },

      // 'jquery-private' wants the real jQuery module
      // though. If this line was not here, there would
      // be an unresolvable cyclic dependency.
      jqueryprivate: { jquery: 'jquery' }
    }
};

//]]>
</script>
<script src="https://learning.transportactiongroup.com/lib/javascript.php/1762077687/lib/requirejs/require.min.js"></script>
<script>
//<![CDATA[
M.util.js_pending("core/first");
require(['core/first'], function() {
require(['core/prefetch'])
;
M.util.js_pending('filter_mathjaxloader/loader'); require(['filter_mathjaxloader/loader'], function(amd) {amd.configure({"mathjaxurl":"https:\/\/cdn.jsdelivr.net\/npm\/mathjax@3.2.2\/es5\/tex-mml-chtml.js","mathjaxconfig":"","lang":"en"}); M.util.js_complete('filter_mathjaxloader/loader');});;
require(["media_videojs/loader"], function(loader) {
    loader.setUp('en');
});;
M.util.js_pending('tool_usertours/usertours'); require(['tool_usertours/usertours'], function(amd) {amd.init([{"tourId":"5","startTour":false,"filtervalues":{"cssselector":{}}}], ["tool_usertours\/filter_cssselector"]); M.util.js_complete('tool_usertours/usertours');});;

    require(['core/moremenu'], function(moremenu) {
        moremenu(document.querySelector('#moremenu-69073a5f5a285-navbar-nav'));
    });
;

require(['jquery', 'message_popup/notification_popover_controller'], function($, Controller) {
    var container = $('#nav-notification-popover-container');
    var controller = new Controller(container);
    controller.registerEventListeners();
    controller.registerListNavigationEventListeners();
});
;

require(
[
    'jquery',
    'core_message/message_popover'
],
function(
    $,
    Popover
) {
    var toggle = $('#message-drawer-toggle-69073a5f5e58269073a5f5ba733');
    Popover.init(toggle);
});
;

    require(['core/usermenu'], function(UserMenu) {
        UserMenu.init();
    });
;

require(['core/edit_switch'], function(editSwitch) {
    editSwitch.init('69073a5f5ef4169073a5f5ba734-editingswitch');
});
;

M.util.js_pending('theme_boost/drawers:load');
require(['theme_boost/drawers'], function() {
    M.util.js_complete('theme_boost/drawers:load');
});
;

require(['core/local/reactive/debugpanel'], function(component) {
    component.init('69073a5f5ffa469073a5f5ba735-reactive-debugpanel');
});
;

require(['theme_boost/footer-popover'], function(FooterPopover) {
    FooterPopover.init();
});
;

require(['jquery', 'core_message/message_drawer'], function($, MessageDrawer) {
    var root = $('#message-drawer-69073a5f609f169073a5f5ba736');
    MessageDrawer.init(root, '69073a5f609f169073a5f5ba736', false);
});
;

M.util.js_pending('theme_boost/loader');
require(['theme_boost/loader', 'theme_boost/drawer'], function(Loader, Drawer) {
    Drawer.init();
    M.util.js_complete('theme_boost/loader');
});
;
M.util.js_pending('core/notification'); require(['core/notification'], function(amd) {amd.init(1, []); M.util.js_complete('core/notification');});;
M.util.js_pending('core/log'); require(['core/log'], function(amd) {amd.setConfig({"level":"trace"}); M.util.js_complete('core/log');});;
M.util.js_pending('core/page_global'); require(['core/page_global'], function(amd) {amd.init(); M.util.js_complete('core/page_global');});;
M.util.js_pending('core/utility'); require(['core/utility'], function(amd) {M.util.js_complete('core/utility');});;
M.util.js_pending('core/storage_validation'); require(['core/storage_validation'], function(amd) {amd.init(1762077121); M.util.js_complete('core/storage_validation');});
    M.util.js_complete("core/first");
});
//]]>
</script>
<script>
//<![CDATA[
M.str = {"moodle":{"lastmodified":"Last modified","name":"Name","error":"Error","info":"Information","yes":"Yes","no":"No","cancel":"Cancel","confirm":"Confirm","areyousure":"Are you sure?","closebuttontitle":"Close","unknownerror":"Unknown error","file":"File","url":"URL","collapseall":"Collapse all","expandall":"Expand all"},"repository":{"type":"Type","size":"Size","invalidjson":"Invalid JSON string","nofilesattached":"No files attached","filepicker":"File picker","logout":"Logout","nofilesavailable":"No files available","norepositoriesavailable":"Sorry, none of your current repositories can return files in the required format.","fileexistsdialogheader":"File exists","fileexistsdialog_editor":"A file with that name has already been attached to the text you are editing.","fileexistsdialog_filemanager":"A file with that name has already been attached","renameto":"Rename to \"{$a}\"","referencesexist":"There are {$a} links to this file","select":"Select"},"admin":{"confirmdeletecomments":"Are you sure you want to delete the selected comment(s)?","confirmation":"Confirmation"},"debug":{"debuginfo":"Debug info","line":"Line","stacktrace":"Stack trace"},"langconfig":{"labelsep":": "}};
//]]>
</script>
<script>
//<![CDATA[
(function() {M.util.help_popups.setup(Y);
 M.util.js_pending('random69073a5f5ba738'); Y.on('domready', function() { M.util.js_complete("init");  M.util.js_complete('random69073a5f5ba738'); });
})();
//]]>
</script>

                </div>
                <div class="footer-section p-3">
                    <div>Powered by <a href="https://moodle.com">Moodle</a></div>
                        <div>
                            Version 5.0.2 (Build: 20250811)
                        </div>
                </div>
            </div>

            <div class="footer-content-debugging footer-dark bg-dark text-light">
                <div class="container-fluid footer-dark-inner">
                    <div class="purgecaches"><a href="https://learning.transportactiongroup.com/admin/purgecaches.php?confirm=1&amp;sesskey=myHolqxBsp&amp;returnurl=%2F">Purge all caches</a></div><div id="69073a5f5ffa469073a5f5ba735-reactive-debugpanel" class="py-1">
    <div>
        Reactive instances:
        <span data-for="loaders">
            <span data-for="noinstances">
                This page has no reactive instances.
            </span>
        </span>
    </div>
    <div data-for="subpanel">
        <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
    </div>
</div>
                </div>
            </div>
        </footer>
    </div>
    <div
    id="drawer-69073a5f609f169073a5f5ba736"
    class=" drawer bg-white hidden"
    aria-hidden="true"
    data-region="right-hand-drawer"
    role="dialog"
    tabindex="-1"
            aria-modal="true"
        aria-labelledby="message-drawer-header-69073a5f609f169073a5f5ba736"

>
            <div id="message-drawer-69073a5f609f169073a5f5ba736" class="message-app" data-region="message-drawer" role="region" tabindex="0">
            <h2 class="visually-hidden" id="message-drawer-header-69073a5f609f169073a5f5ba736">Messaging</h2>
            <div class="closewidget text-end pe-2">
                <a class="text-dark btn-link" data-action="closedrawer" href="#"
                   title="Close" aria-label="Close"
                >
                    <i class="icon fa fa-xmark fa-fw " aria-hidden="true" ></i>
                </a>
            </div>
            <div class="header-container position-relative" data-region="header-container">
                <div class="hidden border-bottom p-1 px-sm-2" aria-hidden="true" data-region="view-contacts">
                    <div class="d-flex align-items-center">
                        <div class="align-self-stretch">
                            <a class="h-100 d-flex align-items-center me-2" href="#" data-route-back role="button">
                                <div class="icon-back-in-drawer">
                                    <span class="dir-rtl-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true" ></i></span>
                                    <span class="dir-ltr-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true" ></i></span>
                                </div>
                                <div class="icon-back-in-app">
                                    <span class="dir-rtl-hide"><i class="icon fa fa-xmark fa-fw " aria-hidden="true" ></i></span>
                                </div>                            </a>
                        </div>
                        <div>
                            Contacts
                        </div>
                        <div class="ms-auto">
                            <a href="#" data-route="view-search" role="button" aria-label="Search">
                                <i class="icon fa fa-magnifying-glass fa-fw " aria-hidden="true" ></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="hidden bg-white position-relative border-bottom p-1 px-sm-2"
                    aria-hidden="true"
                    data-region="view-conversation"
                >
                    <div class="hidden" data-region="header-content"></div>
                    <div class="hidden" data-region="header-edit-mode">

                        <div class="d-flex p-2 align-items-center">
                            Messages selected:
                            <span class="ms-1" data-region="message-selected-court">1</span>
                            <button type="button" class="ms-auto btn-close" aria-label="Cancel message selection"
                                data-action="cancel-edit-mode">
                            </button>
                        </div>
                    </div>
                    <div data-region="header-placeholder">
                        <div class="d-flex">
                            <div
                                class="ms-2 rounded-circle bg-pulse-grey align-self-center"
                                style="height: 38px; width: 38px"
                            >
                            </div>
                            <div class="ms-2 " style="flex: 1">
                                <div
                                    class="mt-1 bg-pulse-grey w-75"
                                    style="height: 16px;"
                                >
                                </div>
                            </div>
                            <div
                                class="ms-2 bg-pulse-grey align-self-center"
                                style="height: 16px; width: 20px"
                            >
                            </div>
                        </div>
                    </div>
                    <div
                        class="hidden position-absolute z-index-1"
                        data-region="confirm-dialogue-container"
                        style="top: 0; bottom: -1px; right: 0; left: 0; background: rgba(0,0,0,0.3);"
                    ></div>
                </div>                <div class="border-bottom p-1 px-sm-2" aria-hidden="false"  data-region="view-overview">
                    <div class="d-flex align-items-center">
                        <div class="input-group simplesearchform" role="group" aria-labelledby="messageoverviewgrouplabel">
                            <span class="visually-hidden" id="messageoverviewgrouplabel">Search people and messages</span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search"
                                aria-label="Search"
                                data-region="view-overview-search-input"
                            >
                            <span class="icon-no-margin btn btn-submit">
                                <i class="icon fa fa-magnifying-glass fa-fw " aria-hidden="true" ></i>
                            </span>
                        </div>
                        <div class="ms-2">
                            <a
                                href="#"
                                data-route="view-settings"
                                data-route-param="2"
                                aria-label="Settings"
                                role="button"
                            >
                                <i class="icon fa fa-gear fa-fw " aria-hidden="true" ></i>
                            </a>
                        </div>
                    </div>
                    <div class="text-end mt-sm-3">
                        <a href="#" data-route="view-contacts" role="button">
                            <i class="icon fa fa-user fa-fw " aria-hidden="true" ></i>
                            Contacts
                            <span
                                class="badge bg-primary text-white ms-2 hidden"
                                data-region="contact-request-count"
                            >
                                <span aria-hidden="true">0</span>
                                <span class="visually-hidden">There are 0 pending contact requests</span>
                            </span>
                        </a>
                    </div>
                </div>

                <div class="hidden border-bottom p-1 px-sm-2 view-search"  aria-hidden="true" data-region="view-search">
                    <div class="d-flex align-items-center">
                        <a
                            class="me-2 align-self-stretch d-flex align-items-center"
                            href="#"
                            data-route-back
                            data-action="cancel-search"
                            role="button"
                        >
                            <div class="icon-back-in-drawer">
                                <span class="dir-rtl-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true" ></i></span>
                                <span class="dir-ltr-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true" ></i></span>
                            </div>
                            <div class="icon-back-in-app">
                                <span class="dir-rtl-hide"><i class="icon fa fa-xmark fa-fw " aria-hidden="true" ></i></span>
                            </div>                        </a>
                        <div class="input-group simplesearchform" role="group" aria-labelledby="messagesearchgrouplabel">
                            <span class="visually-hidden" id="messagesearchgrouplabel">Search people and messages</span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search"
                                aria-label="Search"
                                data-region="search-input"
                            >
                            <button
                                class="btn btn-submit icon-no-margin"
                                type="button"
                                data-action="search"
                                aria-label="Perform search"
                                title="Perform search"
                            >
                                <span data-region="search-icon-container">
                                    <i class="icon fa fa-magnifying-glass fa-fw " aria-hidden="true" ></i>
                                </span>
                                <span class="hidden" data-region="loading-icon-container">
                                    <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="hidden border-bottom p-1 px-sm-2 pb-sm-3" aria-hidden="true" data-region="view-settings">
                    <div class="d-flex align-items-center">
                        <div class="align-self-stretch" >
                            <a class="h-100 d-flex me-2 align-items-center" href="#" data-route-back role="button">
                                <div class="icon-back-in-drawer">
                                    <span class="dir-rtl-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true" ></i></span>
                                    <span class="dir-ltr-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true" ></i></span>
                                </div>
                                <div class="icon-back-in-app">
                                    <span class="dir-rtl-hide"><i class="icon fa fa-xmark fa-fw " aria-hidden="true" ></i></span>
                                </div>                            </a>
                        </div>
                        <div>
                            Settings
                        </div>
                    </div>
                </div>
            </div>
            <div class="body-container position-relative" data-region="body-container">

                <div
                    class="hidden"
                    data-region="view-contact"
                    aria-hidden="true"
                >
                    <div class="p-2 pt-3" data-region="content-container"></div>
                </div>                <div class="hidden h-100" data-region="view-contacts" aria-hidden="true" data-user-id="2">
                    <div class="d-flex flex-column h-100">
                        <div class="p-3 border-bottom">
                            <ul class="nav nav-pills nav-fill" role="tablist">
                                <li class="nav-item">
                                    <a
                                        id="contacts-tab-69073a5f609f169073a5f5ba736"
                                        class="nav-link active"
                                        href="#contacts-tab-panel-69073a5f609f169073a5f5ba736"
                                        data-bs-toggle="tab"
                                        data-action="show-contacts-section"
                                        role="tab"
                                        aria-controls="contacts-tab-panel-69073a5f609f169073a5f5ba736"
                                        aria-selected="true"
                                    >
                                        Contacts
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        id="requests-tab-69073a5f609f169073a5f5ba736"
                                        class="nav-link"
                                        href="#requests-tab-panel-69073a5f609f169073a5f5ba736"
                                        data-bs-toggle="tab"
                                        data-action="show-requests-section"
                                        role="tab"
                                        aria-controls="requests-tab-panel-69073a5f609f169073a5f5ba736"
                                        aria-selected="false"
                                    >
                                        Requests
                                        <span class="badge bg-primary text-white ms-2 hidden"
                                            data-region="contact-request-count"
                                        >
                                            <span aria-hidden="true">0</span>
                                            <span class="visually-hidden">There are 0 pending contact requests</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content d-flex flex-column h-100">
                                            <div
                    class="tab-pane fade show active h-100 lazy-load-list"
                    aria-live="polite"
                    data-region="lazy-load-list"
                    data-user-id="2"
                                        id="contacts-tab-panel-69073a5f609f169073a5f5ba736"
                    data-section="contacts"
                    role="tabpanel"
                    aria-labelledby="contacts-tab-69073a5f609f169073a5f5ba736"

                >

                    <div class="hidden text-center p-2" data-region="empty-message-container">
                        No contacts
                    </div>
                    <div class="hidden list-group" data-region="content-container">

                    </div>
                    <div class="list-group" data-region="placeholder-container">

                    </div>
                    <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container" >
                        <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                    </div>
                </div>

                                            <div
                    class="tab-pane fade h-100 lazy-load-list"
                    aria-live="polite"
                    data-region="lazy-load-list"
                    data-user-id="2"
                                        id="requests-tab-panel-69073a5f609f169073a5f5ba736"
                    data-section="requests"
                    role="tabpanel"
                    aria-labelledby="requests-tab-69073a5f609f169073a5f5ba736"

                >

                    <div class="hidden text-center p-2" data-region="empty-message-container">
                        No contact requests
                    </div>
                    <div class="hidden list-group" data-region="content-container">

                    </div>
                    <div class="list-group" data-region="placeholder-container">

                    </div>
                    <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container" >
                        <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                    </div>
                </div>
                        </div>
                    </div>
                </div>

                <div
                    class="view-conversation hidden h-100"
                    aria-hidden="true"
                    data-region="view-conversation"
                    data-user-id="2"
                    data-midnight="1762034400"
                    data-message-poll-min="10"
                    data-message-poll-max="120"
                    data-message-poll-after-max="300"
                    style="overflow-y: auto; overflow-x: hidden"
                >
                    <div class="position-relative h-100" data-region="content-container" style="overflow-y: auto; overflow-x: hidden">
                        <div class="content-message-container hidden h-100 px-2 pt-0" data-region="content-message-container" role="log" style="overflow-y: auto; overflow-x: hidden">
                            <div class="py-3 border-bottom text-center hidden" data-region="contact-request-sent-message-container">
                                <p class="m-0">Contact request sent</p>
                                <p class="fst-italic fw-light" data-region="text"></p>
                            </div>
                            <div class="p-3 text-center hidden" data-region="self-conversation-message-container">
                                <p class="m-0">Personal space</p>
                                <p class="fst-italic fw-light" data-region="text">Save draft messages, links, notes etc. to access later.</p>
                           </div>
                            <div class="hidden text-center p-3" data-region="more-messages-loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</div>
                        </div>
                        <div class="p-4 w-100 h-100 hidden position-absolute z-index-1" data-region="confirm-dialogue-container" style="top: 0; background: rgba(0,0,0,0.3);">

                            <div class="p-3 bg-white" data-region="confirm-dialogue" role="alert">
                                <p class="text-muted" data-region="dialogue-text"></p>
                                <div class="mb-2 form-check hidden" data-region="delete-messages-for-all-users-toggle-container">
                                    <input type="checkbox" class="form-check-input" id="delete-messages-for-all-users" data-region="delete-messages-for-all-users-toggle">
                                    <label class="form-check-label text-muted" for="delete-messages-for-all-users">
                                        Delete for me and for everyone else
                                    </label>
                                </div>
                                <div class="d-grid gap-2">
                                    <button type="button" class="btn btn-primary hidden" data-action="confirm-block">
                                        <span data-region="dialogue-button-text">Block</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary hidden" data-action="confirm-unblock">
                                        <span data-region="dialogue-button-text">Unblock</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary hidden" data-action="confirm-remove-contact">
                                        <span data-region="dialogue-button-text">Remove</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary hidden" data-action="confirm-add-contact">
                                        <span data-region="dialogue-button-text">Add</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary hidden" data-action="confirm-delete-selected-messages">
                                        <span data-region="dialogue-button-text">Delete</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary hidden" data-action="confirm-delete-conversation">
                                        <span data-region="dialogue-button-text">Delete</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary hidden" data-action="request-add-contact">
                                        <span data-region="dialogue-button-text">Send contact request</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary hidden" data-action="accept-contact-request">
                                        <span data-region="dialogue-button-text">Accept and add to contacts</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-secondary hidden" data-action="decline-contact-request">
                                        <span data-region="dialogue-button-text">Decline</span>
                                        <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                    <button type="button" class="btn btn-primary" data-action="okay-confirm">OK</button>
                                    <button type="button" class="btn btn-secondary" data-action="cancel-confirm">Cancel</button>
                                </div>
                            </div>
                        </div>
                        <div class="px-2 pb-2 pt-0" data-region="content-placeholder">
                            <div class="h-100 d-flex flex-column">
                                <div
                                    class="px-2 pb-2 pt-0 bg-light h-100"
                                    style="overflow-y: auto"
                                >
                                    <div class="mt-4">
                                        <div class="mb-4">
                                            <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                    </div>                                    <div class="mt-4">
                                        <div class="mb-4">
                                            <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                    </div>                                    <div class="mt-4">
                                        <div class="mb-4">
                                            <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                    </div>                                    <div class="mt-4">
                                        <div class="mb-4">
                                            <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                    </div>                                    <div class="mt-4">
                                        <div class="mb-4">
                                            <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="me-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="me-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ms-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                    </div>                                </div>
                            </div>                        </div>
                    </div>
                </div>

                <div
                    class="hidden"
                    aria-hidden="true"
                    data-region="view-group-info"
                >
                    <div
                        class="pt-3 h-100 d-flex flex-column"
                        data-region="group-info-content-container"
                        style="overflow-y: auto"
                    ></div>
                </div>                <div class="h-100 view-overview-body" aria-hidden="false" data-region="view-overview"  data-user-id="2">
                    <div id="message-drawer-view-overview-container-69073a5f609f169073a5f5ba736" class="d-flex flex-column h-100" style="overflow-y: auto">


                            <div
                                class="section border-0 card rounded-0"
                                data-region="view-overview-favourites"
                            >
                                <div id="view-overview-favourites-toggle" class="card-header rounded-0" data-region="toggle">
                                    <button
                                        class="btn btn-link w-100 text-start p-1 p-sm-2 d-flex rounded-0 align-items-center overview-section-toggle collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#view-overview-favourites-target-69073a5f609f169073a5f5ba736"
                                        aria-expanded="false"
                                        aria-controls="view-overview-favourites-target-69073a5f609f169073a5f5ba736"
                                    >
                                        <span class="collapsed-icon-container">
                                            <span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true" ></i></span>
                                            <span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true" ></i></span>
                                        </span>
                                        <span class="expanded-icon-container">
                                            <i class="icon fa fa-chevron-down fa-fw " aria-hidden="true" ></i>
                                        </span>
                                        <span class="fw-bold ms-1">Starred</span>
                                        <small
                                            class="hidden ms-1"
                                            data-region="section-total-count-container" aria-labelledby="view-overview-favourites-total-count-label"
                                        >
                                            (<span aria-hidden="true" data-region="section-total-count"></span>)
                                            <span class="visually-hidden" id="view-overview-favourites-total-count-label">
                                                 total conversations
                                            </span>
                                        </small>
                                        <span class="hidden ms-2" data-region="loading-icon-container">
                                            <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                        </span>
                                        <span
                                            class="hidden badge rounded-pill bg-primary text-white ms-auto"
                                            data-region="section-unread-count-container" aria-labelledby="view-overview-favourites-unread-count-label"
                                        >
                                            <span aria-hidden="true" data-region="section-unread-count"></span>
                                            <span class="visually-hidden" id="view-overview-favourites-unread-count-label">
                                                There are  unread conversations
                                            </span>
                                        </span>
                                    </button>
                                </div>
                                                            <div
                                class="collapse border-bottom  lazy-load-list"
                                aria-live="polite"
                                data-region="lazy-load-list"
                                data-user-id="2"
                                            id="view-overview-favourites-target-69073a5f609f169073a5f5ba736"
            aria-labelledby="view-overview-favourites-toggle"
            data-bs-parent="#message-drawer-view-overview-container-69073a5f609f169073a5f5ba736"

                            >

                                <div class="hidden text-center p-2" data-region="empty-message-container">
                                            <p class="text-muted mt-2">No starred conversations</p>

                                </div>
                                <div class="hidden list-group" data-region="content-container">

                                </div>
                                <div class="list-group" data-region="placeholder-container">
                                            <div class="text-center py-2"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</div>

                                </div>
                                <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container" >
                                    <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                </div>
                            </div>
                            </div>


                            <div
                                class="section border-0 card rounded-0"
                                data-region="view-overview-group-messages"
                            >
                                <div id="view-overview-group-messages-toggle" class="card-header rounded-0" data-region="toggle">
                                    <button
                                        class="btn btn-link w-100 text-start p-1 p-sm-2 d-flex rounded-0 align-items-center overview-section-toggle collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#view-overview-group-messages-target-69073a5f609f169073a5f5ba736"
                                        aria-expanded="false"
                                        aria-controls="view-overview-group-messages-target-69073a5f609f169073a5f5ba736"
                                    >
                                        <span class="collapsed-icon-container">
                                            <span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true" ></i></span>
                                            <span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true" ></i></span>
                                        </span>
                                        <span class="expanded-icon-container">
                                            <i class="icon fa fa-chevron-down fa-fw " aria-hidden="true" ></i>
                                        </span>
                                        <span class="fw-bold ms-1">Group</span>
                                        <small
                                            class="hidden ms-1"
                                            data-region="section-total-count-container" aria-labelledby="view-overview-group-messages-total-count-label"
                                        >
                                            (<span aria-hidden="true" data-region="section-total-count"></span>)
                                            <span class="visually-hidden" id="view-overview-group-messages-total-count-label">
                                                 total conversations
                                            </span>
                                        </small>
                                        <span class="hidden ms-2" data-region="loading-icon-container">
                                            <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                        </span>
                                        <span
                                            class="hidden badge rounded-pill bg-primary text-white ms-auto"
                                            data-region="section-unread-count-container" aria-labelledby="view-overview-group-messages-unread-count-label"
                                        >
                                            <span aria-hidden="true" data-region="section-unread-count"></span>
                                            <span class="visually-hidden" id="view-overview-group-messages-unread-count-label">
                                                There are  unread conversations
                                            </span>
                                        </span>
                                    </button>
                                </div>
                                                            <div
                                class="collapse border-bottom  lazy-load-list"
                                aria-live="polite"
                                data-region="lazy-load-list"
                                data-user-id="2"
                                            id="view-overview-group-messages-target-69073a5f609f169073a5f5ba736"
            aria-labelledby="view-overview-group-messages-toggle"
            data-bs-parent="#message-drawer-view-overview-container-69073a5f609f169073a5f5ba736"

                            >

                                <div class="hidden text-center p-2" data-region="empty-message-container">
                                            <p class="text-muted mt-2">No group conversations</p>

                                </div>
                                <div class="hidden list-group" data-region="content-container">

                                </div>
                                <div class="list-group" data-region="placeholder-container">
                                            <div class="text-center py-2"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</div>

                                </div>
                                <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container" >
                                    <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                </div>
                            </div>
                            </div>


                            <div
                                class="section border-0 card rounded-0"
                                data-region="view-overview-messages"
                            >
                                <div id="view-overview-messages-toggle" class="card-header rounded-0" data-region="toggle">
                                    <button
                                        class="btn btn-link w-100 text-start p-1 p-sm-2 d-flex rounded-0 align-items-center overview-section-toggle collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#view-overview-messages-target-69073a5f609f169073a5f5ba736"
                                        aria-expanded="false"
                                        aria-controls="view-overview-messages-target-69073a5f609f169073a5f5ba736"
                                    >
                                        <span class="collapsed-icon-container">
                                            <span class="dir-rtl-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true" ></i></span>
                                            <span class="dir-ltr-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true" ></i></span>
                                        </span>
                                        <span class="expanded-icon-container">
                                            <i class="icon fa fa-chevron-down fa-fw " aria-hidden="true" ></i>
                                        </span>
                                        <span class="fw-bold ms-1">Private</span>
                                        <small
                                            class="hidden ms-1"
                                            data-region="section-total-count-container" aria-labelledby="view-overview-messages-total-count-label"
                                        >
                                            (<span aria-hidden="true" data-region="section-total-count"></span>)
                                            <span class="visually-hidden" id="view-overview-messages-total-count-label">
                                                 total conversations
                                            </span>
                                        </small>
                                        <span class="hidden ms-2" data-region="loading-icon-container">
                                            <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                        </span>
                                        <span
                                            class="hidden badge rounded-pill bg-primary text-white ms-auto"
                                            data-region="section-unread-count-container" aria-labelledby="view-overview-messages-unread-count-label"
                                        >
                                            <span aria-hidden="true" data-region="section-unread-count"></span>
                                            <span class="visually-hidden" id="view-overview-messages-unread-count-label">
                                                There are  unread conversations
                                            </span>
                                        </span>
                                    </button>
                                </div>
                                                            <div
                                class="collapse border-bottom  lazy-load-list"
                                aria-live="polite"
                                data-region="lazy-load-list"
                                data-user-id="2"
                                            id="view-overview-messages-target-69073a5f609f169073a5f5ba736"
            aria-labelledby="view-overview-messages-toggle"
            data-bs-parent="#message-drawer-view-overview-container-69073a5f609f169073a5f5ba736"

                            >

                                <div class="hidden text-center p-2" data-region="empty-message-container">
                                            <p class="text-muted mt-2">No private conversations</p>

                                </div>
                                <div class="hidden list-group" data-region="content-container">

                                </div>
                                <div class="list-group" data-region="placeholder-container">
                                            <div class="text-center py-2"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</div>

                                </div>
                                <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container" >
                                    <span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>

                <div
                    data-region="view-search"
                    aria-hidden="true"
                    class="h-100 hidden"
                    data-user-id="2"
                    data-users-offset="0"
                    data-messages-offset="0"
                    style="overflow-y: auto"

                >
                    <div class="hidden" data-region="search-results-container" style="overflow-y: auto">

                        <div class="d-flex flex-column">
                            <div class="mb-3 bg-white" data-region="all-contacts-container">
                                <div data-region="contacts-container"  class="pt-2">
                                    <h3 class="h6 px-2">Contacts</h3>
                                    <div class="list-group" data-region="list"></div>
                                </div>
                                <div data-region="non-contacts-container" class="pt-2 border-top">
                                    <h3 class="h6 px-2">Non-contacts</h3>
                                    <div class="list-group" data-region="list"></div>
                                </div>
                                <div class="text-end">
                                    <button class="btn btn-link text-primary" data-action="load-more-users">
                                        <span data-region="button-text">Load more</span>
                                        <span data-region="loading-icon-container" class="hidden"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                </div>
                            </div>
                            <div class="bg-white" data-region="messages-container">
                                <h3 class="h6 px-2 pt-2">Messages</h3>
                                <div class="list-group" data-region="list"></div>
                                <div class="text-end">
                                    <button class="btn btn-link text-primary" data-action="load-more-messages">
                                        <span data-region="button-text">Load more</span>
                                        <span data-region="loading-icon-container" class="hidden"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                </div>
                            </div>
                            <p class="hidden p-3 text-center" data-region="no-results-container">No results</p>
                        </div>                    </div>
                    <div class="hidden" data-region="loading-placeholder">
                        <div class="text-center pt-3 icon-size-4"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</div>
                    </div>
                    <div class="p-3 text-center" data-region="empty-message-container">
                        <p>Search people and messages</p>
                    </div>
                </div>
                <div class="h-100 hidden bg-white" aria-hidden="true" data-region="view-settings">
                    <div class="hidden" data-region="content-container">

                        <div data-region="settings" class="p-3">
                            <h3 class="h6 fw-bold">Privacy</h3>
                            <p>You can restrict who can message you</p>
                            <div data-preference="blocknoncontacts" class="mb-3">
                                <fieldset>
                                    <legend class="visually-hidden">Accept messages from:</legend>
                                        <div class="form-check mb-2">
                                            <input
                                                type="radio"
                                                name="message_blocknoncontacts"
                                                class="form-check-input"
                                                id="block-noncontacts-69073a5f609f169073a5f5ba736-1"
                                                value="1"
                                            >
                                            <label class="form-check-label ms-2" for="block-noncontacts-69073a5f609f169073a5f5ba736-1">
                                                My contacts only
                                            </label>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input
                                                type="radio"
                                                name="message_blocknoncontacts"
                                                class="form-check-input"
                                                id="block-noncontacts-69073a5f609f169073a5f5ba736-0"
                                                value="0"
                                            >
                                            <label class="form-check-label ms-2" for="block-noncontacts-69073a5f609f169073a5f5ba736-0">
                                                My contacts and anyone in my courses
                                            </label>
                                        </div>
                                </fieldset>
                            </div>

                            <div class="hidden" data-region="notification-preference-container" role="group" aria-labelledby="notification-preferences-header-69073a5f609f169073a5f5ba736">
                                <h3 class="mb-2 mt-4 h6 fw-bold" id="notification-preferences-header-69073a5f609f169073a5f5ba736">Notification preferences</h3>
                            </div>

                            <h3 class="mb-2 mt-4 h6 fw-bold">General</h3>
                            <div data-preference="entertosend">
                                <div class="form-check form-switch">
                                    <input type="checkbox" class="form-check-input" id="enter-to-send-69073a5f609f169073a5f5ba736" checked>
                                    <label class="form-check-label" for="enter-to-send-69073a5f609f169073a5f5ba736">
                                        Use enter to send
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-region="placeholder-container">

                        <div class="d-flex flex-column p-3">
                            <div class="w-25 bg-pulse-grey h6" style="height: 18px"></div>
                            <div class="w-75 bg-pulse-grey mb-4" style="height: 18px"></div>
                            <div class="mb-3">
                                <div class="w-100 d-flex mb-3">
                                    <div class="bg-pulse-grey rounded-circle" style="width: 18px; height: 18px"></div>
                                    <div class="bg-pulse-grey w-50 ms-2" style="height: 18px"></div>
                                </div>
                                <div class="w-100 d-flex mb-3">
                                    <div class="bg-pulse-grey rounded-circle" style="width: 18px; height: 18px"></div>
                                    <div class="bg-pulse-grey w-50 ms-2" style="height: 18px"></div>
                                </div>
                                <div class="w-100 d-flex mb-3">
                                    <div class="bg-pulse-grey rounded-circle" style="width: 18px; height: 18px"></div>
                                    <div class="bg-pulse-grey w-50 ms-2" style="height: 18px"></div>
                                </div>
                            </div>
                            <div class="w-50 bg-pulse-grey h6 mb-3 mt-2" style="height: 18px"></div>
                            <div class="mb-4">
                                <div class="w-100 d-flex mb-2 align-items-center">
                                    <div class="bg-pulse-grey w-25" style="width: 18px; height: 27px"></div>
                                    <div class="bg-pulse-grey w-25 ms-2" style="height: 18px"></div>
                                </div>
                                <div class="w-100 d-flex mb-2 align-items-center">
                                    <div class="bg-pulse-grey w-25" style="width: 18px; height: 27px"></div>
                                    <div class="bg-pulse-grey w-25 ms-2" style="height: 18px"></div>
                                </div>
                            </div>
                            <div class="w-25 bg-pulse-grey h6 mb-3 mt-2" style="height: 18px"></div>
                            <div class="mb-3">
                                <div class="w-100 d-flex mb-2 align-items-center">
                                    <div class="bg-pulse-grey w-25" style="width: 18px; height: 27px"></div>
                                    <div class="bg-pulse-grey w-50 ms-2" style="height: 18px"></div>
                                </div>
                            </div>
                        </div>                    </div>
                </div>            </div>
            <div class="footer-container position-relative" data-region="footer-container">

                <div
                    class="hidden border-top bg-white position-relative"
                    aria-hidden="true"
                    data-region="view-conversation"
                    data-enter-to-send="1"
                >
                    <div class="hidden p-sm-2" data-region="content-messages-footer-container">

                            <div
                                class="emoji-auto-complete-container w-100 hidden"
                                data-region="emoji-auto-complete-container"
                                aria-live="polite"
                                aria-hidden="true"
                            >
                            </div>
                        <div class="d-flex mt-sm-1">
                            <textarea
                                dir="auto"
                                data-region="send-message-txt"
                                class="form-control bg-light"
                                rows="3"
                                data-auto-rows
                                data-min-rows="3"
                                data-max-rows="5"
                                aria-label="Write a message..."
                                placeholder="Write a message..."
                                style="resize: none"
                                maxlength="4096"
                            ></textarea>

                            <div class="position-relative d-flex flex-column">
                                    <div
                                        data-region="emoji-picker-container"
                                        class="emoji-picker-container hidden"
                                        aria-hidden="true"
                                    >

                                        <div
                                            data-region="emoji-picker"
                                            class="card shadow emoji-picker"
                                        >
                                            <div class="card-header px-1 pt-1 pb-0 d-flex justify-content-between flex-shrink-0">
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0 selected"
                                                    data-action="show-category"
                                                    data-category="Recent"
                                                    title="Recent"
                                                >
                                                    <i class="icon fa-regular fa-clock fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Smileys & Emotion"
                                                    title="Smileys & emotion"
                                                >
                                                    <i class="icon fa-regular fa-face-smile fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="People & Body"
                                                    title="People & body"
                                                >
                                                    <i class="icon fa fa-person fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Animals & Nature"
                                                    title="Animals & nature"
                                                >
                                                    <i class="icon fa fa-leaf fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Food & Drink"
                                                    title="Food & drink"
                                                >
                                                    <i class="icon fa fa-pizza-slice fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Travel & Places"
                                                    title="Travel & places"
                                                >
                                                    <i class="icon fa fa-plane fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Activities"
                                                    title="Activities"
                                                >
                                                    <i class="icon fa fa-futbol fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Objects"
                                                    title="Objects"
                                                >
                                                    <i class="icon fa fa-hammer fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Symbols"
                                                    title="Symbols"
                                                >
                                                    <i class="icon fa fa-peace fa-fw " aria-hidden="true" ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Flags"
                                                    title="Flags"
                                                >
                                                    <i class="icon fa fa-flag fa-fw " aria-hidden="true" ></i>
                                                </button>
                                            </div>
                                            <div class="card-body p-2 d-flex flex-column overflow-hidden">
                                                <div class="input-group mb-1 flex-shrink-0">
                                                    <span class="input-group-text pe-0 bg-white text-muted">
                                                        <i class="icon fa fa-magnifying-glass fa-fw " aria-hidden="true" ></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        class="form-control border-start-0"
                                                        placeholder="Search"
                                                        aria-label="Search"
                                                        data-region="search-input"
                                                    >
                                                </div>
                                                <div class="flex-grow-1 overflow-auto emojis-container h-100" data-region="emojis-container">
                                                    <div class="position-relative" data-region="row-container"></div>
                                                </div>
                                                <div class="flex-grow-1 overflow-auto search-results-container h-100 hidden" data-region="search-results-container">
                                                    <div class="position-relative" data-region="row-container"></div>
                                                </div>
                                            </div>
                                            <div
                                                class="card-footer d-flex flex-shrink-0"
                                                data-region="footer"
                                            >
                                                <div class="emoji-preview" data-region="emoji-preview"></div>
                                                <div data-region="emoji-short-name" class="emoji-short-name text-muted text-wrap ms-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        class="btn btn-icon ms-1"
                                        aria-label="Toggle emoji picker"
                                        data-action="toggle-emoji-picker"
                                    >
                                        <i class="icon fa-regular fa-face-smile fa-fw " aria-hidden="true" ></i>
                                    </button>
                                <button
                                    class="btn btn-icon ms-1 mt-auto"
                                    aria-label="Send message"
                                    data-action="send-message"
                                >
                                    <span data-region="send-icon-container"><i class="icon fa-regular fa-paper-plane fa-fw " aria-hidden="true" ></i></span>
                                    <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="hidden p-sm-2" data-region="content-messages-footer-edit-mode-container">

                        <div class="d-flex p-3 justify-content-end">
                            <button
                                class="btn btn-icon my-1 icon-size-4"
                                data-action="delete-selected-messages"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Delete selected messages"
                            >
                                <span data-region="icon-container"><i class="icon fa fa-trash-can fa-fw " aria-hidden="true" ></i></span>
                                <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                <span class="visually-hidden">Delete selected messages</span>
                            </button>
                        </div>                    </div>
                    <div class="hidden bg-secondary p-sm-3" data-region="content-messages-footer-require-contact-container">

                        <div class="p-3 bg-white">
                            <p data-region="title"></p>
                            <p class="text-muted" data-region="text"></p>
                            <button type="button" class="btn btn-primary w-100" data-action="request-add-contact">
                                <span data-region="dialogue-button-text">Send contact request</span>
                                <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                            </button>
                        </div>
                    </div>
                    <div class="hidden bg-secondary p-sm-3" data-region="content-messages-footer-require-unblock-container">

                        <div class="p-3 bg-white">
                            <p class="text-muted" data-region="text">You have blocked this user.</p>
                            <button type="button" class="btn btn-primary w-100" data-action="request-unblock">
                                <span data-region="dialogue-button-text">Unblock user</span>
                                <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-spinner fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                            </button>
                        </div>
                    </div>
                    <div class="hidden bg-secondary p-sm-3" data-region="content-messages-footer-unable-to-message">

                        <div class="p-3 bg-white">
                            <p class="text-muted" data-region="text">You are unable to message this user</p>
                        </div>
                    </div>
                    <div class="p-sm-2" data-region="placeholder-container">
                        <div class="d-flex">
                            <div class="bg-pulse-grey w-100" style="height: 80px"></div>
                            <div class="mx-2 mb-2 align-self-end bg-pulse-grey" style="height: 20px; width: 20px"></div>
                        </div>                    </div>
                    <div
                        class="hidden position-absolute z-index-1"
                        data-region="confirm-dialogue-container"
                        style="top: -1px; bottom: 0; right: 0; left: 0; background: rgba(0,0,0,0.3);"
                    ></div>
                </div>                    <div data-region="view-overview" class="text-center">
                        <a href="https://learning.transportactiongroup.com/message/index.php">
                            See all
                        </a>
                    </div>
            </div>
        </div>

</div>
</div>


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          curl -i "https://learning.transportactiongroup.com/local/tco/endpoints/tco_history.php?limit=10" \
  -H "Origin: https://transportactiongroup.vercel.app" \
  --cookie "MoodleSession=gu21gu2c354nqvkjj6l07sgldm"