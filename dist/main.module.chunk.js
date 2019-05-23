webpackJsonp(["main.module"],{

/***/ "./src/app/page/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"pcoded\" class=\"pcoded\" [ngClass]=\"animateSidebar\" [attr.nav-type]=\"navType\" [attr.theme-layout]=\"themeLayout\"\r\n  [attr.vertical-placement]=\"verticalPlacement\" [attr.vertical-layout]=\"verticalLayout\" [attr.pcoded-device-type]=\"pcodedDeviceType\"\r\n  [attr.vertical-nav-type]=\"verticalNavType\" [attr.vertical-effect]=\"verticalEffect\" [attr.vnavigation-view]=\"vnavigationView\"\r\n  [attr.fream-type]=\"freamType\" [attr.sidebar-img]=\"sidebarImg\" [attr.sidebar-img-type]=\"sidebarImgType\"\r\n  [attr.layout-type]=\"layoutType\" (window:resize)=\"onResize($event)\">\r\n  <div class=\"pcoded-overlay-box\"></div>\r\n  <div class=\"pcoded-container navbar-wrapper\">\r\n    <nav class=\"navbar header-navbar pcoded-header\" [attr.header-theme]=\"headerTheme\" [attr.pcoded-header-position]=\"pcodedHeaderPosition\">\r\n      <div class=\"navbar-wrapper\">\r\n        <div class=\"navbar-logo\">\r\n          <a class=\"mobile-menu ripple light\" id=\"mobile-collapse\" href=\"javascript:\" (click)=\"toggleOpened($event)\"\r\n            [exclude]=\"'#main_navbar'\" (clickOutside)=\"onClickedOutsideSidebar($event)\">\r\n            <i class=\"feather\" [ngClass]=\"toggleIcon\"></i>\r\n          </a>\r\n          <a [routerLink]=\"['/dashboard/default/']\" class=\"ripple light\">\r\n            <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Able Pro 7\" />\r\n          </a>\r\n          <a href=\"javascript:\" class=\"mobile-options ripple light\" (click)=\"toggleHeaderNavRight()\">\r\n            <i class=\"feather icon-more-horizontal\"></i>\r\n          </a>\r\n        </div>\r\n        <div class=\"navbar-container container-fluid\">\r\n          <ul class=\"nav-left\">\r\n            <li class=\"ripple light\">\r\n              <div class=\"sidebar_toggle\"><a href=\"javascript:\"><i class=\"icon-menu\"></i></a></div>\r\n            </li>\r\n            <!-- <li class=\"header-search\">\r\n              <div id=\"main-search\" class=\"main-search morphsearch-search\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-prepend search-close\" (click)=\"searchOff()\"><i class=\"feather icon-x input-group-text\"></i></span>\r\n                  <input class=\"form-control\" [style.width]=\"searchWidthString\">\r\n                  <span class=\"input-group-append search-btn\" (click)=\"searchOn()\"><i class=\"feather icon-search input-group-text\"></i></span>\r\n                </div>\r\n              </div>\r\n            </li> -->\r\n            <li class=\"ripple light\" appToggleFullScreen>\r\n              <a href=\"javascript:\">\r\n                <i class=\"feather icon-maximize full-screen\"></i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <ul [@mobileHeaderNavRight]=\"navRight\" [ngClass]=\"navRight\" class=\"nav-right\">\r\n            <!-- <li (clickOutside)=\"notificationOutsideClick('live')\" class=\"header-notification ripple light\" (click)=\"toggleLiveNotification()\">\r\n              <a href=\"javascript:\">\r\n                <i class=\"feather icon-bell\"></i>\r\n                <span class=\"badge bg-c-red\">5</span>\r\n              </a>\r\n              <ul [@notificationBottom]=\"liveNotification\" class=\"show-notification\" [ngClass]=\"liveNotificationClass\">\r\n                <li>\r\n                  <h6>Notifications</h6>\r\n                  <label class=\"label label-danger\">New</label>\r\n                </li>\r\n                <li class=\"ripple\">\r\n                  <div class=\"media\">\r\n                    <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n                      <h5 class=\"notification-user\">John Doe</h5>\r\n                      <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                      <span class=\"notification-time\">30 minutes ago</span>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"ripple\">\r\n                  <div class=\"media\">\r\n                    <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-4.jpg\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n                      <h5 class=\"notification-user\">Joseph William</h5>\r\n                      <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                      <span class=\"notification-time\">30 minutes ago</span>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"ripple\">\r\n                  <div class=\"media\">\r\n                    <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n                      <h5 class=\"notification-user\">Sara Soudein</h5>\r\n                      <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                      <span class=\"notification-time\">30 minutes ago</span>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <li class=\"ripple light\">\r\n              <a href=\"javascript:\" (click)=\"toggleChat()\">\r\n                <i class=\"feather icon-message-square\"></i>\r\n                <span class=\"badge bg-c-green\">3</span>\r\n              </a>\r\n            </li> -->\r\n            <li (clickOutside)=\"notificationOutsideClick('profile')\" class=\"user-profile header-notification ripple light\"\r\n              (click)=\"toggleProfileNotification()\">\r\n              <a href=\"javascript:\">\r\n                <img src=\"assets/images/avatar-blank.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n                <span>Admin</span>\r\n                <i class=\"feather icon-chevron-down\"></i>\r\n              </a>\r\n              <ul [@notificationBottom]=\"profileNotification\" class=\"show-notification profile-notification\" [ngClass]=\"profileNotificationClass\">\r\n                <!-- <li class=\"ripple\">\r\n                  <a href=\"javascript:\">\r\n                    <i class=\"feather icon-settings\"></i> Settings\r\n                  </a>\r\n                </li>\r\n                <li class=\"ripple\">\r\n                  <a [routerLink]=\"['/user/profile/']\">\r\n                    <i class=\"feather icon-user\"></i> Profile\r\n                  </a>\r\n                </li>\r\n                <li class=\"ripple\">\r\n                  <a href=\"javascript:\">\r\n                    <i class=\"feather icon-mail\"></i> My Messages\r\n                  </a>\r\n                </li>\r\n                <li class=\"ripple\">\r\n                  <a [routerLink]=\"['/auth/lock-screen/']\" target=\"_blank\">\r\n                    <i class=\"feather icon-lock\"></i> Lock Screen\r\n                  </a>\r\n                </li> -->\r\n                <li class=\"ripple\">\r\n                  <a (click)=\"logout()\" target=\"_blank\">\r\n                    <i class=\"feather icon-log-out\"></i> Logout\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n\r\n    <!-- Sidebar chat start -->\r\n    <!-- <div [@slideInOut]=\"chatSlideInOut\" id=\"sidebar\" class=\"users p-chat-user showChat\" [ngClass]=\"chatSlideInOut\">\r\n      <div class=\"had-container\">\r\n        <div class=\"p-fixed users-main\">\r\n          <div class=\"user-box\">\r\n            <div class=\"chat-search-box\">\r\n              <span class=\"back_friendlist\" (click)=\"toggleChat()\">\r\n                <i class=\"feather icon-x\"></i>\r\n              </span>\r\n              <div class=\"right-icon-control\">\r\n                <form class=\"form-material\" action=\"javascript:\">\r\n                  <div class=\"form-group form-primary\">\r\n                    <input type=\"text\" name=\"search-text\" class=\"form-control\" id=\"search-friends\" required=\"\">\r\n                    <span class=\"form-bar\"></span>\r\n                    <label class=\"float-label\"><i class=\"feather icon-search m-r-10\"></i>Search Friend</label>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n            <div class=\"main-friend-list\">\r\n              <perfect-scrollbar [style.max-width]=\"'280px'\" [style.max-height]=\"'calc(100vh - 92px)'\" [config]=\"config\">\r\n                <div class=\"media userlist-box ripple\" data-username=\"Josephin Doe\" placement=\"left\" ngbTooltip=\"Josephin Doe\" (click)=\"toggleInnerChat()\">\r\n                  <a class=\"media-left\" href=\"javascript:\">\r\n                    <img class=\"media-object img-radius img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Josephin Doe\">\r\n                    <div class=\"live-status bg-success\"></div>\r\n                  </a>\r\n                  <div class=\"media-body\">\r\n                    <div class=\"f-13 chat-header\">Josephin Doe</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"media userlist-box ripple\" data-username=\"Lary Doe\" placement=\"left\" ngbTooltip=\"Lary Doe\" (click)=\"toggleInnerChat()\">\r\n                  <a class=\"media-left\" href=\"javascript:\">\r\n                    <img class=\"media-object img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Lary Doe\">\r\n                    <div class=\"live-status bg-danger\"></div>\r\n                  </a>\r\n                  <div class=\"media-body\">\r\n                    <div class=\"f-13 chat-header\">Lary Doe</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"media userlist-box ripple\" data-username=\"Alice\" placement=\"left\" ngbTooltip=\"Alice\" (click)=\"toggleInnerChat()\">\r\n                  <a class=\"media-left\" href=\"javascript:\">\r\n                    <img class=\"media-object img-radius\" src=\"assets/images/avatar-4.jpg\" alt=\"Alice\">\r\n                    <div class=\"live-status bg-success\"></div>\r\n                  </a>\r\n                  <div class=\"media-body\">\r\n                    <div class=\"f-13 chat-header\">Alice</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"media userlist-box ripple\" data-username=\"Alia\" placement=\"left\" ngbTooltip=\"Alia\" (click)=\"toggleInnerChat()\">\r\n                  <a class=\"media-left\" href=\"javascript:\">\r\n                    <img class=\"media-object img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Alia\">\r\n                    <div class=\"live-status bg-success\"></div>\r\n                  </a>\r\n                  <div class=\"media-body\">\r\n                    <div class=\"f-13 chat-header\">Alia</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"media userlist-box ripple\" data-username=\"Suzen\" placement=\"left\" ngbTooltip=\"Suzen\" (click)=\"toggleInnerChat()\">\r\n                <a class=\"media-left\" href=\"javascript:\">\r\n                  <img class=\"media-object img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Suzen\">\r\n                  <div class=\"live-status bg-danger\"></div>\r\n                </a>\r\n                <div class=\"media-body\">\r\n                  <div class=\"f-13 chat-header\">Suzen</div>\r\n                </div>\r\n              </div>\r\n              </perfect-scrollbar>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!-- Sidebar inner chat start-->\r\n    <!-- <div [@slideInOut]=\"innerChatSlideInOut\" class=\"showChat_inner\">\r\n      <div class=\"media chat-inner-header\">\r\n        <a class=\"back_chatBox\">\r\n          <i class=\"feather icon-more\" (click)=\"toggleInnerChat()\"></i> Josephin Doe\r\n        </a>\r\n      </div>\r\n      <div class=\"main-friend-chat\">\r\n        <perfect-scrollbar [style.max-width]=\"'280px'\" [style.max-height]=\"'calc(100vh - 150px)'\" [config]=\"config\">\r\n          <div class=\"media chat-messages\">\r\n            <a class=\"media-left photo-table\" href=\"javascript:\">\r\n              <img class=\"media-object img-radius img-radius m-t-5\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\r\n            </a>\r\n            <div class=\"media-body chat-menu-content\">\r\n              <div class=\"\">\r\n                <p class=\"chat-cont\">I'm just looking around. Will you tell me something about yourself?</p>\r\n              </div>\r\n              <p class=\"chat-time\">8:20 a.m.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"media chat-messages\">\r\n            <div class=\"media-body chat-menu-reply\">\r\n              <div class=\"\">\r\n                <p class=\"chat-cont\">Ohh! very nice</p>\r\n              </div>\r\n              <p class=\"chat-time\">8:22 a.m.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"media chat-messages\">\r\n            <a class=\"media-left photo-table\" href=\"javascript:\">\r\n              <img class=\"media-object img-radius img-radius m-t-5\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\r\n            </a>\r\n            <div class=\"media-body chat-menu-content\">\r\n              <div class=\"\">\r\n                <p class=\"chat-cont\">can you come with me?</p>\r\n              </div>\r\n              <p class=\"chat-time\">8:20 a.m.</p>\r\n            </div>\r\n          </div>\r\n        </perfect-scrollbar>\r\n      </div>\r\n      <div class=\"chat-reply-box\">\r\n        <div class=\"right-icon-control\">\r\n          <form class=\"form-material\">\r\n            <div class=\"form-group form-primary\">\r\n              <input type=\"text\" name=\"footer-email\" class=\"form-control\" required=\"\">\r\n              <span class=\"form-bar\"></span>\r\n              <label class=\"float-label\">\r\n                <i class=\"feather icon-search m-r-10\"></i>Share Your Thoughts\r\n              </label>\r\n            </div>\r\n          </form>\r\n          <div class=\"form-icon \">\r\n            <button class=\"btn btn-success btn-icon  waves-effect ripple light\">\r\n              <i class=\"feather icon-message-circle\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!-- Sidebar inner chat end-->\r\n\r\n    <div class=\"pcoded-main-container\" [style.margin-top]=\"headerFixedMargin\">\r\n      <!--  -->\r\n      <div class=\"pcoded-wrapper\">\r\n        <nav id=\"main_navbar\" class=\"pcoded-navbar\" (clickOutside)=\"onClickedOutsideSidebar($event)\" [exclude]=\"'#mobile-collapse'\"\r\n          [attr.navbar-theme]=\"navBarTheme\" [attr.active-item-theme]=\"activeItemTheme\" sub-item-theme=\"theme2\"\r\n          active-item-style=\"style0\" [attr.pcoded-header-position]=\"pcodedHeaderPosition\" [attr.pcoded-navbar-position]=\"pcodedSidebarPosition\"\r\n          [style.top]=\"headerFixedTop\" [style.height]=\"sidebarFixedNavHeight\" (mouseleave)=\"hoverOutsideSidebar()\">\r\n          <perfect-scrollbar [style.max-width]=\"'235px'\" [style.max-height]=\"sidebarFixedHeight\" [config]=\"config\"\r\n            [ngClass]=\"perfectDisable\">\r\n            <div class=\"pcoded-inner-navbar main-menu\" appAccordion>\r\n              <div class=\"\">\r\n                <div class=\"main-menu-header\">\r\n                  <img class=\"img-menu-user img-radius\" src=\"assets/images/avatar-blank.jpg\" alt=\"User-Profile-Image\">\r\n                  <div class=\"user-details\">\r\n                    <p id=\"more-details\"> Admin\r\n                      <!-- <i class=\"feather icon-chevron-down m-l-10\"></i> -->\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"main-menu-content\">\r\n                  <ul>\r\n                    <li [@mobileMenuTop]=\"isCollapsedSideBar\" class=\"more-details\" [ngClass]=\"isCollapsedSideBar\">\r\n                      <a [routerLink]=\"['/user/profile']\" class=\"ripple\"><i class=\"feather icon-user\"></i>View Profile</a>\r\n                      <a href=\"javascript:\" class=\"ripple\"><i class=\"feather icon-settings\"></i>Settings</a>\r\n                      <a [routerLink]=\"['/auth/login/simple']\" class=\"ripple\" target=\"_blank\"><i class=\"feather icon-log-out\"></i>Logout</a>\r\n                    </li>\r\n                  </ul>\r\n                </div> -->\r\n              </div>\r\n\r\n              <div *ngFor=\"let asideItems of menuItems.getAll()\" class=\"d-color\">\r\n                <div class=\"pcoded-navigation-label\" [attr.menu-title-theme]=\"menuTitleTheme\">{{asideItems.label}}</div>\r\n                <ul class=\"pcoded-item pcoded-left-item\" [attr.item-border]=\"itemBorder\" [attr.item-border-style]=\"itemBorderStyle\"\r\n                  [attr.subitem-border]=\"subItemBorder\" *ngFor=\"let asideItem of asideItems.main\" appAccordionLink\r\n                  group=\"{{asideItem.state}}\">\r\n                  <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'external'\" appAccordionLink group=\"{{asideItem.state}}\">\r\n                    <a [routerLinkActive]=\"['active']\" class=\"ripple\" href=\"{{asideItem.external}}\" target=\"{{asideItem.target ? '_blank' : '_self'}}\"\r\n                      appAccordionToggle>\r\n                      <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\r\n                      <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                      <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\r\n                      <span class=\"pcoded-mcaret\"></span>\r\n                    </a>\r\n                  </li>\r\n\r\n                  <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'link'\" appAccordionLink group=\"{{asideItem.state}}\">\r\n                    <a [routerLinkActive]=\"['active']\" class=\"ripple\" [routerLink]=\"['/', asideItem.main_state, asideItem.state]\"\r\n                      target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle *ngIf=\"asideItem.main_state; else mainContent\">\r\n                      <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\r\n                      <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                      <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\r\n                      <span class=\"pcoded-mcaret\"></span>\r\n                    </a>\r\n                    <ng-template #mainContent>\r\n                      <a [routerLinkActive]=\"['active']\" class=\"ripple\" [routerLink]=\"['/', asideItem.state]\" target=\"{{asideItem.target ? '_blank' : '_self'}}\"\r\n                        appAccordionToggle>\r\n                        <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\r\n                        <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                        <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\r\n                        <span class=\"pcoded-mcaret\"></span>\r\n                      </a>\r\n                    </ng-template>\r\n                  </li>\r\n                  <li (mouseleave)=\"fireClickLeave($event)\" [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'sub'\"\r\n                    class=\"pcoded-hasmenu\" [attr.dropdown-icon]=\"dropDownIcon\" [attr.subitem-icon]=\"subItemIcon\"\r\n                    appAccordionLink group=\"{{asideItem.state}}\">\r\n                    <a (mouseover)=\"fireClick($event)\" [routerLinkActive]=\"['active']\" href=\"javascript:;\"\r\n                      appAccordionToggle>\r\n                      <div class=\"ripple menu-ripple\"></div>\r\n                      <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i><b>{{ asideItem.short_label }}</b></span>\r\n                      <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                      <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\r\n                      <span class=\"pcoded-mcaret\"></span>\r\n                    </a>\r\n                    <ul class=\"pcoded-submenu\">\r\n                      <ng-template ngFor let-asideChildren [ngForOf]=\"asideItem.children\">\r\n                        <li [routerLinkActive]=\"['active']\" *ngIf=\"asideChildren.type !== 'sub'\">\r\n                          <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/', asideItem.state, asideChildren.state]\"\r\n                            target=\"{{asideChildren.target ? '_blank' : '_self'}}\">\r\n                            <div class=\"ripple menu-ripple\"></div>\r\n                            <span class=\"pcoded-micon\"><i class=\"icon-angle-right\"></i></span>\r\n                            <span class=\"pcoded-mtext\">{{ asideChildren.name }} </span>\r\n                            <span *ngFor=\"let asideChildrenBadge of asideChildren.badge\" class=\"pcoded-badge label label-{{ asideChildrenBadge.type }}\">{{asideChildrenBadge.value}}</span>\r\n                            <span class=\"pcoded-mcaret\"></span>\r\n                          </a>\r\n                        </li>\r\n\r\n                        <li (mouseleave)=\"fireClickLeave($event)\" [routerLinkActive]=\"['active']\" class=\"pcoded-hasmenu\"\r\n                          [attr.dropdown-icon]=\"dropDownIcon\" [attr.subitem-icon]=\"subItemIcon\" *ngIf=\"asideChildren.type === 'sub'\"\r\n                          appAccordionLink group=\"sub-toggled\">\r\n                          <a (mouseover)=\"fireClick($event)\" [routerLinkActive]=\"['active']\" href=\"javascript:;\"\r\n                            appAccordionToggle>\r\n                            <div class=\"ripple menu-ripple\"></div>\r\n                            <span class=\"pcoded-micon\"><i class=\"icon-direction-alt\"></i></span>\r\n                            <span class=\"pcoded-mtext\">{{ asideChildren.name }}</span>\r\n                            <span *ngFor=\"let asideChildrenBadge of asideChildren.badge\" class=\"pcoded-badge label label-{{ asideChildrenBadge.type }}\">{{asideChildrenBadge.value}}</span>\r\n                            <span class=\"pcoded-mcaret\"></span>\r\n                          </a>\r\n                          <ul class=\"pcoded-submenu\">\r\n                            <ng-template ngFor let-asideChildrenSub [ngForOf]=\"asideChildren.children\">\r\n                              <li [routerLinkActive]=\"['active']\">\r\n                                <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/', asideItem.state, asideChildren.state, asideChildrenSub.state]\"\r\n                                  target=\"{{asideChildrenSub.target ? '_blank' : '_self'}}\">\r\n                                  <div class=\"ripple menu-ripple\"></div>\r\n                                  <span class=\"pcoded-micon\"><i class=\"icon-angle-right\"></i></span>\r\n                                  <span class=\"pcoded-mtext\">{{ asideChildrenSub.name }}</span>\r\n                                  <span *ngFor=\"let asideChildrenSubBadge of asideChildrenSub.badge\" class=\"pcoded-badge label label-{{ asideChildrenSubBadge.type }}\">{{asideChildrenSubBadge.value}}</span>\r\n                                  <span class=\"pcoded-mcaret\"></span>\r\n                                </a>\r\n                              </li>\r\n                            </ng-template>\r\n                          </ul>\r\n                        </li>\r\n                      </ng-template>\r\n                    </ul>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n\r\n              <div class=\"btn-sidebar text-center\">\r\n                <button class=\"btn btn-success\" (click)=\"exportEmail()\">Export Clients' Email</button>\r\n              </div>\r\n            \r\n            </div>\r\n          </perfect-scrollbar>\r\n        </nav>\r\n        <div class=\"pcoded-content\">\r\n          <!-- <app-breadcrumbs></app-breadcrumbs> -->\r\n          <div class=\"pcoded-inner-content\">\r\n            <!-- Main-body start -->\r\n            <div class=\"main-body\">\r\n              <div class=\"page-wrapper\">\r\n                <router-outlet>\r\n                  <title></title>\r\n                  <app-spinner></app-spinner>\r\n                </router-outlet>\r\n              </div>\r\n            </div>\r\n            <div id=\"styleSelector\" [ngClass]=\"configOpenRightBar\">\r\n              <!-- <div class=\"selector-toggle\">\r\n                <a href=\"javascript:\" placement=\"left\" class=\"ripple light\" ngbTooltip=\"Live layout customizer\" (click)=\"toggleRightbar()\"></a>\r\n              </div> -->\r\n              <ul>\r\n                <li>\r\n                  <p class=\"selector-title main-title st-main-title\"><b>Able-pro 7.0 </b> Customizer</p><span class=\"text-muted\">Live\r\n                    customizer with tons of options</span>\r\n                </li>\r\n                <li>\r\n                  <p class=\"selector-title\">Main layouts</p>\r\n                </li>\r\n                <li>\r\n                  <div class=\"theme-color\">\r\n                    <a href=\"javascript:\" (click)=\"setNavBarTheme('themelight1')\" class=\"ripple\" navbar-theme=\"themelight1\"\r\n                      placement=\"top\" ngbTooltip=\"Light Sidebar\">\r\n                      <span class=\"head\"></span>\r\n                      <span class=\"cont\"></span>\r\n                    </a>\r\n                    <a href=\"javascript:\" (click)=\"setNavBarTheme('theme1')\" class=\"ripple\" navbar-theme=\"theme1\"\r\n                      placement=\"top\" ngbTooltip=\"Dark Sidebar\">\r\n                      <span class=\"head\"></span>\r\n                      <span class=\"cont\"></span>\r\n                    </a>\r\n                    <a href=\"javascript:\" (click)=\"setLayoutType('light')\" class=\"ripple\" layout-type=\"light\" placement=\"top\"\r\n                      ngbTooltip=\"Light Layout\">\r\n                      <span class=\"head\"></span>\r\n                      <span class=\"cont\"></span>\r\n                    </a>\r\n                    <a href=\"javascript:\" (click)=\"setLayoutType('dark')\" class=\"ripple light\" layout-type=\"dark\"\r\n                      placement=\"top\" ngbTooltip=\"Dark Layout\">\r\n                      <span class=\"head\"></span>\r\n                      <span class=\"cont\"></span>\r\n                    </a>\r\n                    <a href=\"javascript:\" (click)=\"constructor(menuItems)\" class=\"Layout-type ripple light\" layout-type=\"reset\"\r\n                      placement=\"top\" ngbTooltip=\"Default\">\r\n                      <i class=\"feather icon-power\"></i>\r\n                    </a>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n              <perfect-scrollbar [style.max-width]=\"'100%'\" [style.max-height]=\"'calc(100vh - 495px)'\" [config]=\"config\">\r\n                <div class=\"style-cont m-t-10\">\r\n                  <ngb-tabset>\r\n                    <ngb-tab title=\"Layouts\">\r\n                      <ng-template ngbTabContent>\r\n                        <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                          <ul>\r\n                            <li class=\"theme-option\">\r\n                              <div class=\"checkbox-fade fade-in-primary\">\r\n                                <label>\r\n                                  <input type=\"checkbox\" value=\"false\" id=\"theme-layout\" name=\"vertical-item-border\"\r\n                                    [checked]=\"isVerticalLayoutChecked\" (change)=\"setVerticalLayout()\">\r\n                                  <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-success\"></i></span>\r\n                                  <span>Box Layout - with patterns</span>\r\n                                </label>\r\n                              </div>\r\n                            </li>\r\n                            <li class=\"theme-option\" id=\"bg-pattern-visiblity\" [ngClass]=\"displayBoxLayout\">\r\n                              <div class=\"theme-color\">\r\n                                <a href=\"javascript:\" class=\"small\" (click)=\"setBackgroundPattern('theme1')\"\r\n                                  themebg-pattern=\"theme1\"></a>\r\n                                <a href=\"javascript:\" class=\"small\" (click)=\"setBackgroundPattern('theme2')\"\r\n                                  themebg-pattern=\"theme2\"></a>\r\n                                <a href=\"javascript:\" class=\"small\" (click)=\"setBackgroundPattern('theme3')\"\r\n                                  themebg-pattern=\"theme3\"></a>\r\n                                <a href=\"javascript:\" class=\"small\" (click)=\"setBackgroundPattern('theme4')\"\r\n                                  themebg-pattern=\"theme4\"></a>\r\n                                <a href=\"javascript:\" class=\"small\" (click)=\"setBackgroundPattern('theme5')\"\r\n                                  themebg-pattern=\"theme5\"></a>\r\n                                <a href=\"javascript:\" class=\"small\" (click)=\"setBackgroundPattern('theme6')\"\r\n                                  themebg-pattern=\"theme6\"></a>\r\n                              </div>\r\n                            </li>\r\n                            <li class=\"theme-option\">\r\n                              <div class=\"checkbox-fade fade-in-primary\">\r\n                                <label>\r\n                                  <input type=\"checkbox\" value=\"false\" id=\"sidebar-position\" name=\"sidebar-position\"\r\n                                    [checked]=\"isSidebarChecked\" (change)=\"setSidebarPosition()\">\r\n                                  <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-success\"></i></span>\r\n                                  <span>Fixed Sidebar Position</span>\r\n                                </label>\r\n                              </div>\r\n                            </li>\r\n                            <li class=\"theme-option\">\r\n                              <div class=\"checkbox-fade fade-in-primary\">\r\n                                <label>\r\n                                  <input type=\"checkbox\" value=\"false\" id=\"header-position\" name=\"header-position\"\r\n                                    [checked]=\"isHeaderChecked\" (change)=\"setHeaderPosition()\">\r\n                                  <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-success\"></i></span>\r\n                                  <span>Fixed Header Position</span>\r\n                                </label>\r\n                              </div>\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab title=\"Sidebar Settings\">\r\n                      <ng-template ngbTabContent>\r\n                        <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                          <ul>\r\n                            <li class=\"theme-option\">\r\n                              <p class=\"sub-title drp-title\">Menu Type</p>\r\n                              <div class=\"form-radio\" id=\"menu-effect\">\r\n                                <div class=\"radio radiofill radio-primary radio-inline\" ngbTooltip=\"Color icon\">\r\n                                  <label>\r\n                                    <input type=\"radio\" name=\"radio\" value=\"st1\" (click)=\"this.navType=$event.target.value\">\r\n                                    <i class=\"helper\"></i>\r\n                                    <span class=\"micon st1\"><i class=\"feather icon-bell\"></i></span>\r\n                                  </label>\r\n                                </div>\r\n                                <div class=\"radio radiofill radio-success radio-inline\" ngbTooltip=\"Simple icon\">\r\n                                  <label>\r\n                                    <input type=\"radio\" name=\"radio\" value=\"st2\" (click)=\"this.navType=$event.target.value\"\r\n                                      checked=\"true\">\r\n                                    <i class=\"helper\"></i>\r\n                                    <span class=\"micon st2\"><i class=\"feather icon-bell\"></i></span>\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                            </li>\r\n                            <li class=\"theme-option\">\r\n                              <p class=\"sub-title drp-title\">SideBar Effect</p>\r\n                              <select id=\"vertical-menu-effect\" class=\"form-control minimal\" (change)=\"this.verticalEffect=$event.target.value\">\r\n                                <option value=\"shrink\" selected>shrink</option>\r\n                                <option value=\"overlay\">overlay</option>\r\n                                <option value=\"push\">Push</option>\r\n                              </select>\r\n                            </li>\r\n                            <li class=\"theme-option\">\r\n                              <p class=\"sub-title drp-title\">Hide/Show Border</p>\r\n                              <select id=\"vertical-border-style\" class=\"form-control minimal\" (change)=\"this.itemBorderStyle=$event.target.value\">\r\n                                <option value=\"solid\">Style 1</option>\r\n                                <option value=\"dotted\">Style 2</option>\r\n                                <option value=\"dashed\">Style 3</option>\r\n                                <option value=\"none\" selected>No Border</option>\r\n                              </select>\r\n                            </li>\r\n                            <li class=\"theme-option\">\r\n                              <p class=\"sub-title drp-title\">Drop-Down Icon</p>\r\n                              <select id=\"vertical-dropdown-icon\" class=\"form-control minimal\" (change)=\"this.dropDownIcon=$event.target.value\">\r\n                                <option value=\"style1\" selected>Style 1</option>\r\n                                <option value=\"style2\">style 2</option>\r\n                                <option value=\"style3\">style 3</option>\r\n                              </select>\r\n                            </li>\r\n                            <li class=\"theme-option\">\r\n                              <p class=\"sub-title drp-title\">Sub Menu Drop-down Icon</p>\r\n                              <select id=\"vertical-subitem-icon\" class=\"form-control minimal\" (change)=\"this.subItemIcon=$event.target.value\">\r\n                                <option value=\"style1\" selected>Style 1</option>\r\n                                <option value=\"style2\">style 2</option>\r\n                                <option value=\"style3\">style 3</option>\r\n                                <option value=\"style4\">style 4</option>\r\n                                <option value=\"style5\">style 5</option>\r\n                                <option value=\"style6\">style 6</option>\r\n                                <option value=\"style7\">no icon</option>\r\n                              </select>\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                      </ng-template>\r\n                    </ngb-tab>\r\n                  </ngb-tabset>\r\n                  <div class=\"tab-content tabs\">\r\n                    <ul>\r\n                      <li>\r\n                        <p class=\"selector-title\">Header color</p>\r\n                      </li>\r\n                      <li class=\"theme-option\">\r\n                        <div class=\"theme-color\">\r\n                          <a href=\"javascript:\" class=\"header-theme ripple\" (click)=\"this.menuTitleTheme=this.freamType=this.activeItemTheme=this.headerTheme='theme1';setBackgroundPattern('theme1')\"\r\n                            header-theme=\"theme1\">\r\n                            <span class=\"head\"></span>\r\n                            <span class=\"cont\"></span>\r\n                          </a>\r\n                          <a href=\"javascript:\" class=\"header-theme ripple\" (click)=\"this.menuTitleTheme=this.freamType=this.activeItemTheme=this.headerTheme='theme2';setBackgroundPattern('theme2')\"\r\n                            header-theme=\"theme2\">\r\n                            <span class=\"head\"></span>\r\n                            <span class=\"cont\"></span></a>\r\n                          <a href=\"javascript:\" class=\"header-theme ripple\" (click)=\"this.menuTitleTheme=this.freamType=this.activeItemTheme=this.headerTheme='theme3';setBackgroundPattern('theme3')\"\r\n                            header-theme=\"theme3\">\r\n                            <span class=\"head\"></span>\r\n                            <span class=\"cont\"></span>\r\n                          </a>\r\n                          <a href=\"javascript:\" class=\"header-theme ripple\" (click)=\"this.menuTitleTheme=this.freamType=this.activeItemTheme=this.headerTheme='theme4';setBackgroundPattern('theme4')\"\r\n                            header-theme=\"theme4\">\r\n                            <span class=\"head\"></span>\r\n                            <span class=\"cont\"></span>\r\n                          </a>\r\n                          <a href=\"javascript:\" class=\"header-theme ripple\" (click)=\"this.menuTitleTheme=this.freamType=this.activeItemTheme=this.headerTheme='theme5';setBackgroundPattern('theme5')\"\r\n                            header-theme=\"theme5\">\r\n                            <span class=\"head\"></span>\r\n                            <span class=\"cont\"></span>\r\n                          </a>\r\n                          <a href=\"javascript:\" class=\"header-theme ripple\" (click)=\"this.menuTitleTheme=this.freamType=this.activeItemTheme=this.headerTheme='theme6';setBackgroundPattern('theme6')\"\r\n                            header-theme=\"theme6\">\r\n                            <span class=\"head\"></span>\r\n                            <span class=\"cont\"></span>\r\n                          </a>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <p class=\"selector-title\">Active link color</p>\r\n                      </li>\r\n                      <li class=\"theme-option\">\r\n                        <div class=\"theme-color\">\r\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme1'\" class=\"small\" active-item-theme=\"theme1\"></a>\r\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme2'\" class=\"small\" active-item-theme=\"theme2\"></a>\r\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme3'\" class=\"small\" active-item-theme=\"theme3\"></a>\r\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme4'\" class=\"small\" active-item-theme=\"theme4\"></a>\r\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme5'\" class=\"small\" active-item-theme=\"theme5\"></a>\r\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme6'\" class=\"small\" active-item-theme=\"theme6\"></a>\r\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme7'\" class=\"small\" active-item-theme=\"theme7\"></a>\r\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme8'\" class=\"small\" active-item-theme=\"theme8\"></a>\r\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme9'\" class=\"small\" active-item-theme=\"theme9\"></a>\r\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme10'\" class=\"small\"\r\n                            active-item-theme=\"theme10\"></a>\r\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme11'\" class=\"small\"\r\n                            active-item-theme=\"theme11\"></a>\r\n                          <a href=\"javascript:\" (click)=\"this.activeItemTheme='theme12'\" class=\"small\"\r\n                            active-item-theme=\"theme12\"></a>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <p class=\"selector-title\">Menu Caption Color</p>\r\n                      </li>\r\n                      <li class=\"theme-option\">\r\n                        <div class=\"theme-color\">\r\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme1'\" menu-caption=\"theme1\"></a>\r\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme2'\" menu-caption=\"theme2\"></a>\r\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme3'\" menu-caption=\"theme3\"></a>\r\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme4'\" menu-caption=\"theme4\"></a>\r\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme5'\" menu-caption=\"theme5\"></a>\r\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme6'\" menu-caption=\"theme6\"></a>\r\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme7'\" menu-caption=\"theme7\"></a>\r\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme8'\" menu-caption=\"theme8\"></a>\r\n                          <a href=\"javascript:\" class=\"small\" (click)=\"this.menuTitleTheme='theme9'\" menu-caption=\"theme9\"></a>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </perfect-scrollbar>\r\n              <ul>\r\n                <li>\r\n                  <a href=\"https://bit.ly/2fEhjII\" target=\"_blank\" class=\"btn btn-success btn-block m-r-15 m-t-10 m-b-10 ripple\">Profile</a>\r\n                  <a href=\"https://bit.ly/2HlKKuX\" target=\"_blank\" class=\"btn btn-primary btn-block m-r-15 m-t-5 m-b-10 ripple\">Online\r\n                    Documentation</a>\r\n                </li>\r\n                <li class=\"text-center\">\r\n                  <span class=\"text-center f-18 m-t-15 m-b-15 d-block\">Thank you for sharing !</span>\r\n                  <a href=\"https://bit.ly/2HiVVot\" target=\"_blank\" class=\"btn btn-facebook soc-icon m-b-20 ripple\"><i\r\n                      class=\"fa fa-facebook\"></i></a>\r\n                  <a href=\"https://bit.ly/2JJBoHT\" target=\"_blank\" class=\"btn btn-twitter soc-icon m-l-20 m-b-20 ripple\"><i\r\n                      class=\"fa fa-twitter\"></i></a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_menu_items_menu_items__ = __webpack_require__("./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service_api_service__ = __webpack_require__("./src/app/services/api-service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_config__ = __webpack_require__("./src/app/constants/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_helper_service_helper_service__ = __webpack_require__("./src/app/services/helper-service/helper.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MainComponent = /** @class */ (function () {
    function MainComponent(menuItems, router, _api, handler, _helper) {
        var _this = this;
        this.menuItems = menuItems;
        this.router = router;
        this._api = _api;
        this._helper = _helper;
        this.scroll = function () {
            var scrollPosition = window.pageYOffset;
            if (scrollPosition > 50) {
                if (_this.isSidebarChecked === true) {
                    _this.pcodedSidebarPosition = 'fixed';
                }
                if (_this.pcodedDeviceType === 'desktop') {
                    _this.headerFixedTop = '0';
                }
                _this.sidebarFixedNavHeight = '100%';
            }
            else {
                if (_this.pcodedDeviceType === 'desktop') {
                    _this.headerFixedTop = 'auto';
                }
                _this.pcodedSidebarPosition = 'absolute';
                _this.sidebarFixedNavHeight = '';
            }
        };
        this.httpClient = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClient */](handler);
        this.animateSidebar = '';
        this.navType = 'st2';
        this.themeLayout = 'vertical';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.pcodedDeviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.vnavigationView = 'view1';
        this.freamType = 'theme1';
        this.sidebarImg = 'false';
        this.sidebarImgType = 'img1';
        this.layoutType = 'light'; // light(default) dark(dark)
        this.headerTheme = 'theme1'; // theme1(default)
        this.pcodedHeaderPosition = 'fixed';
        this.headerFixedTop = 'auto';
        this.liveNotification = 'an-off';
        this.profileNotification = 'an-off';
        this.chatSlideInOut = 'out';
        this.innerChatSlideInOut = 'out';
        this.searchWidth = 0;
        this.navRight = 'nav-on';
        this.toggleOn = true;
        this.toggleIcon = 'icon-toggle-right';
        this.navBarTheme = 'themelight1'; // themelight1(default) theme1(dark)
        this.activeItemTheme = 'theme1';
        this.pcodedSidebarPosition = 'fixed';
        this.menuTitleTheme = 'theme1'; // theme1(default) theme10(dark)
        this.dropDownIcon = 'style1';
        this.subItemIcon = 'style1';
        this.displayBoxLayout = 'd-none';
        this.isVerticalLayoutChecked = false;
        this.isSidebarChecked = true;
        this.isHeaderChecked = true;
        this.headerFixedMargin = '50px'; // 50px
        this.sidebarFixedHeight = 'calc(100vh - 190px)'; // calc(100vh - 190px)
        this.itemBorderStyle = 'none';
        this.subItemBorder = true;
        this.itemBorder = true;
        this.isCollapsedSideBar = 'no-block';
        this.perfectDisable = '';
        this.windowWidth = window.innerWidth;
        this.setMenuAttributes(this.windowWidth);
        this.setHeaderAttributes(this.windowWidth);
        // dark theme
        /*this.setLayoutType('dark');*/
        // light-dark
        /*this.setLayoutType('dark');
        this.setNavBarTheme('themelight1');*/
        // dark-light theme
        /*this.setNavBarTheme('theme1');*/
        // box layout
        /*this.setHeaderPosition();
        this.setSidebarPosition();
        this.setVerticalLayout();*/
    }
    MainComponent.prototype.ngOnInit = function () {
        this.setBackgroundPattern('theme1');
    };
    MainComponent.prototype.onResize = function (event) {
        this.windowWidth = event.target.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
        var reSizeFlag = true;
        if (this.pcodedDeviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 992) {
            reSizeFlag = false;
        }
        else if (this.pcodedDeviceType === 'phone' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        /* for check device */
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    };
    MainComponent.prototype.setHeaderAttributes = function (windowWidth) {
        if (windowWidth <= 992) {
            this.navRight = 'nav-off';
        }
        else {
            this.navRight = 'nav-on';
        }
    };
    MainComponent.prototype.setMenuAttributes = function (windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 992) {
            this.pcodedDeviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
            this.toggleIcon = 'icon-toggle-left';
            this.headerFixedTop = '50px';
        }
        else if (windowWidth < 768) {
            this.pcodedDeviceType = 'phone';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
            this.toggleIcon = 'icon-toggle-left';
            this.headerFixedTop = '50px';
        }
        else {
            this.pcodedDeviceType = 'desktop';
            this.verticalNavType = 'expanded';
            this.verticalEffect = 'shrink';
            this.toggleIcon = 'icon-toggle-right';
        }
        /*else if (windowWidth >= 1024 && windowWidth < 1366) {
          this.pcodedDeviceType = 'desktop';
          this.verticalNavType = 'collapsed';
          this.verticalEffect = 'shrink';
          this.toggleIcon = 'icon-toggle-left';
          this.perfectDisable = 'disabled';
          this.sidebarFixedHeight = '100%';
        }*/
    };
    MainComponent.prototype.toggleHeaderNavRight = function () {
        this.navRight = this.navRight === 'nav-on' ? 'nav-off' : 'nav-on';
        this.chatTopPosition = this.chatTopPosition === 'nav-on' ? '112px' : '';
        if (this.navRight === 'nav-off' && this.innerChatSlideInOut === 'in') {
            this.toggleInnerChat();
        }
        if (this.navRight === 'nav-off' && this.chatSlideInOut === 'in') {
            this.toggleChat();
        }
    };
    MainComponent.prototype.toggleLiveNotification = function () {
        if (this.profileNotification === 'an-animate') {
            this.toggleProfileNotification();
        }
        this.liveNotification = this.liveNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.liveNotificationClass = this.liveNotification === 'an-animate' ? 'show' : '';
        if (this.liveNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
            this.toggleInnerChat();
        }
        if (this.liveNotification === 'an-animate' && this.chatSlideInOut === 'in') {
            this.toggleChat();
        }
    };
    MainComponent.prototype.toggleProfileNotification = function () {
        if (this.liveNotification === 'an-animate') {
            this.toggleLiveNotification();
        }
        this.profileNotification = this.profileNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.profileNotificationClass = this.profileNotification === 'an-animate' ? 'show' : '';
        if (this.profileNotification === 'an-animate' && this.innerChatSlideInOut === 'in') {
            this.toggleInnerChat();
        }
        if (this.profileNotification === 'an-animate' && this.chatSlideInOut === 'in') {
            this.toggleChat();
        }
    };
    MainComponent.prototype.notificationOutsideClick = function (ele) {
        if (ele === 'live' && this.liveNotification === 'an-animate') {
            this.toggleLiveNotification();
        }
        else if (ele === 'profile' && this.profileNotification === 'an-animate') {
            this.toggleProfileNotification();
        }
    };
    MainComponent.prototype.toggleChat = function () {
        if (this.innerChatSlideInOut === 'in') {
            this.innerChatSlideInOut = 'out';
        }
        else {
            this.chatSlideInOut = this.chatSlideInOut === 'out' ? 'in' : 'out';
        }
    };
    MainComponent.prototype.toggleInnerChat = function () {
        this.innerChatSlideInOut = this.innerChatSlideInOut === 'out' ? 'in' : 'out';
    };
    MainComponent.prototype.searchOn = function () {
        var _this = this;
        document.querySelector('#main-search').classList.add('open');
        this.searchInterval = setInterval(function () {
            if (_this.searchWidth >= 200) {
                clearInterval(_this.searchInterval);
                return false;
            }
            _this.searchWidth = _this.searchWidth + 15;
            _this.searchWidthString = _this.searchWidth + 'px';
        }, 35);
    };
    MainComponent.prototype.searchOff = function () {
        var _this = this;
        this.searchInterval = setInterval(function () {
            if (_this.searchWidth <= 0) {
                document.querySelector('#main-search').classList.remove('open');
                clearInterval(_this.searchInterval);
                return false;
            }
            _this.searchWidth = _this.searchWidth - 15;
            _this.searchWidthString = _this.searchWidth + 'px';
        }, 35);
    };
    MainComponent.prototype.ngOnDestroy = function () {
        if (this.searchInterval) {
            clearInterval(this.searchInterval);
        }
    };
    MainComponent.prototype.toggleOpened = function (e) {
        var _this = this;
        if (this.windowWidth <= 992) {
            this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
            if (this.navRight === 'nav-on') {
                this.toggleHeaderNavRight();
            }
            this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
        }
        else {
            this.verticalNavType = this.verticalNavType === 'expanded' ? 'collapsed' : 'expanded';
        }
        this.toggleIcon = this.verticalNavType === 'expanded' ? 'icon-toggle-right' : 'icon-toggle-left';
        this.animateSidebar = 'pcoded-toggle-animate';
        if (this.verticalNavType === 'collapsed') {
            this.perfectDisable = 'disabled';
            this.sidebarFixedHeight = '100%';
        }
        else {
            this.perfectDisable = '';
        }
        if (this.verticalNavType === 'collapsed' && this.isHeaderChecked === false) {
            this.setSidebarPosition();
        }
        setTimeout(function () {
            _this.animateSidebar = '';
        }, 500);
    };
    MainComponent.prototype.onClickedOutsideSidebar = function (e) {
        if ((this.windowWidth <= 992 && this.toggleOn && this.verticalNavType !== 'offcanvas') || this.verticalEffect === 'overlay') {
            this.toggleOn = true;
            this.verticalNavType = 'offcanvas';
            this.toggleIcon = 'icon-toggle-left';
        }
    };
    // toggleRightbar() {
    //   this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
    // }
    MainComponent.prototype.setNavBarTheme = function (theme) {
        if (theme === 'themelight1') {
            this.navBarTheme = 'themelight1';
            this.menuTitleTheme = 'theme1';
            this.sidebarImg = 'false';
        }
        else {
            this.menuTitleTheme = 'theme9';
            this.navBarTheme = 'theme1';
            this.sidebarImg = 'false';
        }
    };
    MainComponent.prototype.setLayoutType = function (type) {
        if (type === 'dark') {
            this.headerTheme = 'theme1';
            this.navBarTheme = 'theme1';
            this.activeItemTheme = 'theme1';
            this.freamType = 'theme1';
            document.querySelector('body').classList.add('dark');
            this.setBackgroundPattern('theme1');
            this.menuTitleTheme = 'theme9';
            this.layoutType = type;
            this.sidebarImg = 'false';
        }
        else if (type === 'light') {
            this.headerTheme = 'theme1';
            this.navBarTheme = 'themelight1';
            this.menuTitleTheme = 'theme1';
            this.activeItemTheme = 'theme1';
            this.freamType = 'theme1';
            document.querySelector('body').classList.remove('dark');
            this.setBackgroundPattern('theme1');
            this.layoutType = type;
            this.sidebarImg = 'false';
        }
        else if (type === 'img') {
            this.sidebarImg = 'true';
            this.navBarTheme = 'themelight1';
            this.menuTitleTheme = 'theme1';
            this.freamType = 'theme1';
            document.querySelector('body').classList.remove('dark');
            this.setBackgroundPattern('theme1');
            this.activeItemTheme = 'theme1';
        }
    };
    MainComponent.prototype.setVerticalLayout = function () {
        this.isVerticalLayoutChecked = !this.isVerticalLayoutChecked;
        if (this.isVerticalLayoutChecked) {
            this.verticalLayout = 'box';
            this.displayBoxLayout = '';
            this.pcodedHeaderPosition = 'relative';
            this.pcodedSidebarPosition = 'absolute';
            this.headerFixedMargin = '';
        }
        else {
            this.verticalLayout = 'wide';
            this.displayBoxLayout = 'd-none';
            this.pcodedHeaderPosition = 'fixed';
            this.pcodedSidebarPosition = 'fixed';
            this.headerFixedMargin = '50px';
        }
    };
    MainComponent.prototype.setBackgroundPattern = function (pattern) {
        document.querySelector('body').setAttribute('themebg-pattern', pattern);
        // this.menuTitleTheme = this.freamType = this.activeItemTheme = this.headerTheme = pattern;
    };
    MainComponent.prototype.setSidebarPosition = function () {
        if (this.verticalNavType !== 'collapsed') {
            this.isSidebarChecked = !this.isSidebarChecked;
            this.pcodedSidebarPosition = this.isSidebarChecked === true ? 'fixed' : 'absolute';
            this.sidebarFixedHeight = this.isSidebarChecked === true ? 'calc(100vh - 50px)' : '100%';
            if (this.isHeaderChecked === false) {
                window.addEventListener('scroll', this.scroll, true);
                window.scrollTo(0, 0);
            }
        }
    };
    MainComponent.prototype.setHeaderPosition = function () {
        this.isHeaderChecked = !this.isHeaderChecked;
        this.pcodedHeaderPosition = this.isHeaderChecked === true ? 'fixed' : 'relative';
        this.headerFixedMargin = this.isHeaderChecked === true ? '50px' : '';
        if (this.isHeaderChecked === false) {
            window.addEventListener('scroll', this.scroll, true);
            window.scrollTo(0, 0);
        }
        else {
            window.removeEventListener('scroll', this.scroll, true);
            if (this.pcodedDeviceType === 'desktop') {
                this.headerFixedTop = 'auto';
            }
            this.pcodedSidebarPosition = 'fixed';
            if (this.verticalNavType !== 'collapsed') {
                this.sidebarFixedHeight = this.isSidebarChecked === true ? 'calc(100vh - 50px)' : 'calc(100vh + 50px)';
            }
        }
    };
    MainComponent.prototype.toggleOpenedSidebar = function () {
        this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
        if (this.verticalNavType !== 'collapsed') {
            this.sidebarFixedHeight = this.isCollapsedSideBar === 'yes-block' ? 'calc(100vh - 50px)' : 'calc(100vh - 50px)';
        }
    };
    MainComponent.prototype.hoverOutsideSidebar = function () {
        if (this.verticalNavType === 'collapsed') {
            var mainEle = document.querySelectorAll('.pcoded-trigger');
            for (var i = 0; i < mainEle.length; i++) {
                mainEle[i].classList.remove('pcoded-trigger');
            }
        }
    };
    MainComponent.prototype.fireClick = function (e) {
        if (this.verticalNavType === 'collapsed') {
            var parentEle = e.target.parentNode.parentNode;
            if (parentEle.classList.contains('pcoded-trigger')) {
                var subEle = parentEle.querySelectorAll('.pcoded-hasmenu');
                for (var i = 0; i < subEle.length; i++) {
                    if (subEle[i].classList.contains('pcoded-trigger')) {
                        subEle[i].classList.remove('pcoded-trigger');
                    }
                }
            }
            else {
                e.target.click();
            }
        }
    };
    MainComponent.prototype.fireClickLeave = function (e) {
        if (this.verticalNavType === 'collapsed') {
            var parentEle = e.target.parentNode.parentNode;
            var subEle = parentEle.querySelectorAll('.pcoded-hasmenu');
            for (var i = 0; i < subEle.length; i++) {
                if (subEle[i].classList.contains('pcoded-trigger')) {
                    subEle[i].classList.remove('pcoded-trigger');
                }
            }
        }
    };
    MainComponent.prototype.logout = function () {
        localStorage.removeItem('userInfo');
        this.router.navigate(['login']);
    };
    MainComponent.prototype.exportEmail = function () {
        var _this = this;
        this._helper.toggleLoading(true);
        var headers;
        if (localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).data) {
            headers = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["e" /* HttpHeaders */]().set('Authorization', "Bearer " + JSON.parse(localStorage.getItem('userInfo')).data);
        }
        var url = __WEBPACK_IMPORTED_MODULE_6__constants_config__["c" /* SERVER_URL */] + "admin";
        this.httpClient.put(url, {}, { responseType: 'arraybuffer', headers: headers }).subscribe(function (res) {
            _this._helper.toggleLoading(false);
            _this.downloadFile(res);
        }, function (err) {
            _this._helper.toggleLoading(false);
        });
    };
    MainComponent.prototype.downloadFile = function (data) {
        var url = window.URL.createObjectURL(new Blob([data]));
        // Debe haber una manera mejor de hacer esto...
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = 'Ilose_Email.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove(); // remove the element
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/page/main/main.component.html"),
            styles: [__webpack_require__("./src/app/page/main/main.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('notificationBottom', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('an-off, void', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('an-animate', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        overflow: 'visible',
                        height: __WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* AUTO_STYLE */],
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('an-off <=> an-animate', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out')
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('slideInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        width: '280px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        width: '0',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('mobileHeaderNavRight', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('nav-off, void', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('nav-on', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        height: __WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* AUTO_STYLE */],
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('nav-off <=> nav-on', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out')
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('fadeInOutTranslate', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translate(0)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('mobileMenuTop', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('no-block, void', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('yes-block', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        height: __WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* AUTO_STYLE */],
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('no-block <=> yes-block', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_menu_items_menu_items__["a" /* MenuItems */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_api_service_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpBackend */],
            __WEBPACK_IMPORTED_MODULE_7__services_helper_service_helper_service__["a" /* HelperService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/page/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_confirm_deactivate_guard_confirm_deactivate_guard_service__ = __webpack_require__("./src/app/services/confirm-deactivate-guard/confirm-deactivate-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_component__ = __webpack_require__("./src/app/page/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_menu_items_menu_items__ = __webpack_require__("./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard-service/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* MainComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service_auth_guard_service__["a" /* AuthGuardService */]],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_0__services_confirm_deactivate_guard_confirm_deactivate_guard_service__["a" /* ConfirmDeactivateGuardService */]],
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            { path: 'client-management', loadChildren: '../client-management/client-management.module#ClientManagementModule' },
            { path: 'coach-management', loadChildren: '../coach-management/coach-management.module#CoachManagementModule' },
            { path: 'client-info/:id', loadChildren: '../client-info/client-info.module#ClientInfoModule' },
            { path: 'mentor-info/:id', loadChildren: '../coach-info/coach-info.module#CoachInfoModule' },
            { path: 'configs', loadChildren: '../configs/configs.module#ConfigsModule' },
            { path: 'error-mentor', loadChildren: '../stripe-error-mentor/stripe-error-mentor.module#StripeErrorMentorModule' }
        ]
    },
];
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_menu_items_menu_items__["a" /* MenuItems */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* MainComponent */]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/shared/menu-items/menu-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItems; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MENUITEMS = [
    {
        label: 'Navigation',
        main: [
            {
                state: 'dashboard',
                short_label: 'D',
                name: 'Dashboard',
                type: 'link',
                icon: 'feather icon-home',
            },
            {
                state: 'client-management',
                short_label: 'N',
                name: 'Client Management',
                type: 'link',
                icon: 'feather icon-menu'
            },
            {
                state: 'coach-management',
                short_label: 'C',
                name: 'Coach Management',
                type: 'link',
                icon: 'feather icon-menu'
            },
            {
                state: 'configs',
                short_label: 'C',
                name: 'Change Content Text',
                type: 'link',
                icon: 'feather icon-menu'
            },
            {
                state: 'error-mentor',
                short_label: 'E',
                name: 'Error Mentor',
                type: 'link',
                icon: 'feather icon-menu'
            }
        ],
    }
];
var MenuItems = /** @class */ (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuItems = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MenuItems);
    return MenuItems;
}());



/***/ })

});
//# sourceMappingURL=main.module.chunk.js.map