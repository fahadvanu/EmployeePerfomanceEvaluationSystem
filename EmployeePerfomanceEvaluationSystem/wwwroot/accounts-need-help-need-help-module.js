(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accounts-need-help-need-help-module"],{

/***/ "27aI":
/*!********************************************************!*\
  !*** ./src/app/accounts/need-help/need-help-module.ts ***!
  \********************************************************/
/*! exports provided: NeedHelpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedHelpModule", function() { return NeedHelpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared-module */ "+fd8");
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset/password-reset-component */ "ICQw");
/* harmony import */ var _need_help_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./need-help-routing-module */ "yy0D");
/* harmony import */ var _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-password/update-password-component */ "Wd6r");






class NeedHelpModule {
}
NeedHelpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NeedHelpModule });
NeedHelpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NeedHelpModule_Factory(t) { return new (t || NeedHelpModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _need_help_routing_module__WEBPACK_IMPORTED_MODULE_3__["NeedHelpRoutingModule"]
        ], _need_help_routing_module__WEBPACK_IMPORTED_MODULE_3__["NeedHelpRoutingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NeedHelpModule, { declarations: [_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_2__["PasswordResetComponent"],
        _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_4__["UpdatePasswordComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _need_help_routing_module__WEBPACK_IMPORTED_MODULE_3__["NeedHelpRoutingModule"]], exports: [_need_help_routing_module__WEBPACK_IMPORTED_MODULE_3__["NeedHelpRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NeedHelpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_2__["PasswordResetComponent"],
                    _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_4__["UpdatePasswordComponent"]
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _need_help_routing_module__WEBPACK_IMPORTED_MODULE_3__["NeedHelpRoutingModule"]
                ],
                exports: [
                    _need_help_routing_module__WEBPACK_IMPORTED_MODULE_3__["NeedHelpRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "98uD":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/models/accounts/need-help/password-reset/password-reset-request-model.ts ***!
  \*************************************************************************************************/
/*! exports provided: PasswordResetRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetRequestModel", function() { return PasswordResetRequestModel; });
class PasswordResetRequestModel {
}


/***/ }),

/***/ "ICQw":
/*!*******************************************************************************!*\
  !*** ./src/app/accounts/need-help/password-reset/password-reset-component.ts ***!
  \*******************************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_accounts_need_help_password_reset_password_reset_request_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/accounts/need-help/password-reset/password-reset-request-model */ "98uD");
/* harmony import */ var _confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../confirm-modal-component/confirm-modal-component */ "Gs7e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/spinner/spinner-service */ "3PAx");
/* harmony import */ var _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/toastr/toastr-service */ "jonD");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/accounts/accounts-service */ "amK/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function PasswordResetComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PasswordResetComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter valid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PasswordResetComponent {
    constructor(router, spinnerService, toastrNotificationService, modalService, accountService) {
        this.router = router;
        this.spinnerService = spinnerService;
        this.toastrNotificationService = toastrNotificationService;
        this.modalService = modalService;
        this.accountService = accountService;
        this.passwordResetRequestModel = new _shared_models_accounts_need_help_password_reset_password_reset_request_model__WEBPACK_IMPORTED_MODULE_1__["PasswordResetRequestModel"]();
    }
    ngOnInit() { }
    submitPasswordResetRequest(ngForm) {
        if (ngForm.valid) {
            this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"], {
                initialState: {
                    promptMessage: `Password reset link will be email on ${this.passwordResetRequestModel.email}. Do you want to continue?`,
                    callback: (result) => {
                        if (result) {
                            this.spinnerService.updateMessage('Please wait.....');
                            this.spinnerService.busy();
                            this.accountService.passwordReset(this.passwordResetRequestModel)
                                .subscribe((response) => {
                                ngForm.reset();
                                this.spinnerService.idle();
                                this.toastrNotificationService.success('Password reset email is sent successfully');
                            }, error => {
                                this.spinnerService.idle();
                                console.log('Exception occured while sending email. Please try again');
                            });
                        }
                    }
                }
            });
        }
    }
    navigateBackToLogin(ngForm) {
        if (ngForm.dirty) {
            this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"], {
                initialState: {
                    promptMessage: 'Discard changes and navigate back to Login page?',
                    callback: (result) => {
                        if (result) {
                            this.router.navigate(['/login']);
                        }
                    }
                }
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    }
}
PasswordResetComponent.ɵfac = function PasswordResetComponent_Factory(t) { return new (t || PasswordResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"])); };
PasswordResetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordResetComponent, selectors: [["ng-component"]], decls: 26, vars: 4, consts: [[1, "container-fluid", "reset-controls-container"], [1, "row", "justify-content-center", "align-items-center", "h-100"], [1, "col-md-4"], [1, "col-md-12"], [1, "card"], [1, "card-header", "bg-primary", "text-white"], [1, "card-body"], ["emailForm", "ngForm"], [1, "form-group", "row", "email-row"], ["for", "resetEmailAddress", 1, "col-md-2", "col-form-label"], [1, "col-md-10"], ["type", "text", "id", "resetEmailAddress", "name", "resetEmailAddress", "placeholder", "Email Address", "required", "", "pattern", "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["id", "roleHelp", 1, "form-text", "text-muted"], ["class", "text-danger", 4, "ngIf"], [1, "form-group", "row"], [1, "col-md-10", "offset-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-warning", "ml-3", 3, "click"], [1, "text-danger"]], template: function PasswordResetComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Password Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PasswordResetComponent_Template_input_ngModelChange_14_listener($event) { return ctx.passwordResetRequestModel.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password reset link will be sent to register email address.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PasswordResetComponent_p_18_Template, 2, 0, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PasswordResetComponent_p_19_Template, 2, 0, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordResetComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.submitPasswordResetRequest(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PasswordResetComponent_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.navigateBackToLogin(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.passwordResetRequestModel.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r1.errors == null ? null : _r1.errors.required) && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r1.errors == null ? null : _r1.errors.pattern) && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: [".reset-controls-container[_ngcontent-%COMP%]{\r\n    height: 500px;\r\n}\r\n\r\n.email-row[_ngcontent-%COMP%]{\r\n    margin-bottom: 10px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvbmVlZC1oZWxwL3Bhc3N3b3JkLXJlc2V0L3Bhc3N3b3JkLXJlc2V0LWNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudHMvbmVlZC1oZWxwL3Bhc3N3b3JkLXJlc2V0L3Bhc3N3b3JkLXJlc2V0LWNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXQtY29udHJvbHMtY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLmVtYWlsLXJvd3tcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordResetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './password-reset-component.html',
                styleUrls: ['./password-reset-component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"] }, { type: _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrNotificationService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }, { type: _shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "KB6d":
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/models/accounts/need-help/update-password/update-password-request-model.ts ***!
  \***************************************************************************************************/
/*! exports provided: UpdatePasswordRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordRequestModel", function() { return UpdatePasswordRequestModel; });
class UpdatePasswordRequestModel {
}


/***/ }),

/***/ "Wd6r":
/*!*********************************************************************************!*\
  !*** ./src/app/accounts/need-help/update-password/update-password-component.ts ***!
  \*********************************************************************************/
/*! exports provided: UpdatePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordComponent", function() { return UpdatePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_accounts_need_help_update_password_update_password_request_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/accounts/need-help/update-password/update-password-request-model */ "KB6d");
/* harmony import */ var _confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../confirm-modal-component/confirm-modal-component */ "Gs7e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/spinner/spinner-service */ "3PAx");
/* harmony import */ var _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/toastr/toastr-service */ "jonD");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/accounts/accounts-service */ "amK/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_directives_match_controls_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/match-controls-directive */ "87k1");












function UpdatePasswordComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatePasswordComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatePasswordComponent_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UpdatePasswordComponent_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password Mismatch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UpdatePasswordComponent {
    constructor(router, spinnerService, toastrNotificationService, modalService, accountService, route) {
        this.router = router;
        this.spinnerService = spinnerService;
        this.toastrNotificationService = toastrNotificationService;
        this.modalService = modalService;
        this.accountService = accountService;
        this.route = route;
        this.updatepasswordResetRequestModel = new _shared_models_accounts_need_help_update_password_update_password_request_model__WEBPACK_IMPORTED_MODULE_1__["UpdatePasswordRequestModel"]();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.updatepasswordResetRequestModel.token = params['token'];
            console.log(this.updatepasswordResetRequestModel.token);
        });
    }
    updatePassword(ngForm) {
        if (ngForm.valid) {
            this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"], {
                initialState: {
                    promptMessage: `Do you want to continue?`,
                    callback: (result) => {
                        if (result) {
                            this.spinnerService.updateMessage('Please wait.....');
                            this.spinnerService.busy();
                            this.accountService.updatePassword(this.updatepasswordResetRequestModel)
                                .subscribe((response) => {
                                if (response.data) {
                                    ngForm.reset();
                                    this.spinnerService.idle();
                                    this.toastrNotificationService.success('Password updated successfully');
                                    this.router.navigate(['/login']);
                                }
                                else {
                                    ngForm.reset();
                                    this.spinnerService.idle();
                                    this.toastrNotificationService.success('Password update failed');
                                }
                            }, error => {
                                this.spinnerService.idle();
                                console.log('Exception occured while updating. Please try again');
                            });
                        }
                    }
                }
            });
        }
    }
}
UpdatePasswordComponent.ɵfac = function UpdatePasswordComponent_Factory(t) { return new (t || UpdatePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
UpdatePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdatePasswordComponent, selectors: [["ng-component"]], decls: 37, vars: 8, consts: [[1, "container-fluid", "reset-controls-container"], [1, "row", "justify-content-center", "align-items-center", "h-100"], [1, "col-md-6"], [1, "col-md-12"], [1, "card"], [1, "card-header", "bg-primary", "text-white"], [1, "card-body"], ["updatePasswordForm", "ngForm"], [1, "form-group", "row", "control-row"], ["for", "userName", 1, "label_controls", "col-form-label"], [1, "input_controls"], ["type", "text", "id", "userName", "name", "userName", "placeholder", "Username", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["for", "password", 1, "label_controls", "col-form-label"], ["type", "password", "id", "password", "name", "password", "placeholder", "New Password", "required", "", "pattern", "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,12}$", "compareEqual", "confirmpassword", "reverse", "true", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["for", "confirmpassword", 1, "col-form-label", "label_controls"], ["type", "password", "id", "confirmpassword", "name", "confirmpassword", "placeholder", "Confirm Password", "compareEqual", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["confirmpassword", "ngModel"], [1, "form-group", "row"], [1, "label_controls"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "text-danger"]], template: function UpdatePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatePasswordComponent_Template_input_ngModelChange_14_listener($event) { return ctx.updatepasswordResetRequestModel.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UpdatePasswordComponent_p_16_Template, 2, 0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatePasswordComponent_Template_input_ngModelChange_21_listener($event) { return ctx.updatepasswordResetRequestModel.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UpdatePasswordComponent_p_23_Template, 2, 0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UpdatePasswordComponent_p_24_Template, 2, 0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatePasswordComponent_Template_input_ngModelChange_29_listener($event) { return ctx.updatepasswordResetRequestModel.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UpdatePasswordComponent_p_31_Template, 2, 0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatePasswordComponent_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.updatePassword(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.updatepasswordResetRequestModel.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r1.errors == null ? null : _r1.errors.required) && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.updatepasswordResetRequestModel.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.errors == null ? null : _r3.errors.required) && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r3.errors == null ? null : _r3.errors.pattern) && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.updatepasswordResetRequestModel.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors && !(_r6.errors == null ? null : _r6.errors.compareEqual) && (_r6.dirty || _r6.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["PatternValidator"], _shared_directives_match_controls_directive__WEBPACK_IMPORTED_MODULE_10__["ControlsValueMatchValidator"]], styles: [".label_controls[_ngcontent-%COMP%] {\r\n    margin-left: 15px;\r\n    width: 160px;\r\n}\r\n\r\n.input_controls[_ngcontent-%COMP%] {\r\n    margin-left: 15px;\r\n    width: 400px;\r\n}\r\n\r\n.reset-controls-container[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n\r\n.control-row[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px !important;\r\n}\r\n\r\n.button_controls[_ngcontent-%COMP%]{\r\n    margin-top:10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvbmVlZC1oZWxwL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQtY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzL25lZWQtaGVscC91cGRhdGUtcGFzc3dvcmQvdXBkYXRlLXBhc3N3b3JkLWNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWxfY29udHJvbHMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbn1cclxuXHJcbi5pbnB1dF9jb250cm9scyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLnJlc2V0LWNvbnRyb2xzLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uY29udHJvbC1yb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0dG9uX2NvbnRyb2xze1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './update-password-component.html',
                styleUrls: ['./update-password-component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"] }, { type: _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrNotificationService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }, { type: _shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "yy0D":
/*!****************************************************************!*\
  !*** ./src/app/accounts/need-help/need-help-routing-module.ts ***!
  \****************************************************************/
/*! exports provided: NeedHelpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedHelpRoutingModule", function() { return NeedHelpRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset/password-reset-component */ "ICQw");
/* harmony import */ var _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-password/update-password-component */ "Wd6r");






const needHelpModuleRoutes = [
    { path: 'reset-password', component: _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_2__["PasswordResetComponent"] },
    { path: 'update-password', component: _update_password_update_password_component__WEBPACK_IMPORTED_MODULE_3__["UpdatePasswordComponent"] }
];
class NeedHelpRoutingModule {
}
NeedHelpRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NeedHelpRoutingModule });
NeedHelpRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NeedHelpRoutingModule_Factory(t) { return new (t || NeedHelpRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(needHelpModuleRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NeedHelpRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NeedHelpRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(needHelpModuleRoutes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=accounts-need-help-need-help-module.js.map