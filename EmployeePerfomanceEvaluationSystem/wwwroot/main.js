(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+OAi":
/*!**************************************************************************!*\
  !*** ./src/app/shared/models/accounts/user-login/login-request-model.ts ***!
  \**************************************************************************/
/*! exports provided: LoginRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequestModel", function() { return LoginRequestModel; });
class LoginRequestModel {
}


/***/ }),

/***/ "+fd8":
/*!*****************************************!*\
  !*** ./src/app/shared/shared-module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/pipes/pagination-client */ "SrT9");
/* harmony import */ var _directives_match_controls_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/match-controls-directive */ "87k1");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_3__["PaginationPipePipe"],
        _directives_match_controls_directive__WEBPACK_IMPORTED_MODULE_4__["ControlsValueMatchValidator"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_3__["PaginationPipePipe"],
        _directives_match_controls_directive__WEBPACK_IMPORTED_MODULE_4__["ControlsValueMatchValidator"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_3__["PaginationPipePipe"],
                    _directives_match_controls_directive__WEBPACK_IMPORTED_MODULE_4__["ControlsValueMatchValidator"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_3__["PaginationPipePipe"],
                    _directives_match_controls_directive__WEBPACK_IMPORTED_MODULE_4__["ControlsValueMatchValidator"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "/oat":
/*!**************************************************************!*\
  !*** ./src/app/roles-component/roles-component.component.ts ***!
  \**************************************************************/
/*! exports provided: RolesComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponentComponent", function() { return RolesComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_roles_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/roles/role */ "m0fA");
/* harmony import */ var _confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirm-modal-component/confirm-modal-component */ "Gs7e");
/* harmony import */ var _shared_services_roles_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/roles/role-service */ "QyGD");
/* harmony import */ var _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/spinner/spinner-service */ "3PAx");
/* harmony import */ var _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/toastr/toastr-service */ "jonD");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var _shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/pipes/pagination-client */ "SrT9");












function RolesComponentComponent_div_5_table_10_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponentComponent_div_5_table_10_tr_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const role_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.editRole(role_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponentComponent_div_5_table_10_tr_8_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const role_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.deleteRole(role_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r8.roleName, "");
} }
function RolesComponentComponent_div_5_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RolesComponentComponent_div_5_table_10_tr_8_Template, 9, 1, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "paginationPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 1, ctx_r2.rolesToDisplay, ctx_r2.currentPage, ctx_r2.itemsPerPage));
} }
function RolesComponentComponent_div_5_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " No Records Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RolesComponentComponent_div_5_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pagination", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function RolesComponentComponent_div_5_div_12_Template_pagination_pageChanged_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.pageChanged($event); })("ngModelChange", function RolesComponentComponent_div_5_div_12_Template_pagination_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.currentPage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx_r4.rolesToDisplay.length)("itemsPerPage", ctx_r4.itemsPerPage)("maxSize", ctx_r4.itemsPerPage)("ngModel", ctx_r4.currentPage);
} }
function RolesComponentComponent_div_5_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Role Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RolesComponentComponent_div_5_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Role Name cannot exceeds 50 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RolesComponentComponent_div_5_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RolesComponentComponent_div_5_div_22_div_1_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RolesComponentComponent_div_5_div_22_div_2_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.maxlength);
} }
function RolesComponentComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolesComponentComponent_div_5_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.searchTerm = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponentComponent_div_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.searchRole(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RolesComponentComponent_div_5_table_10_Template, 10, 5, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RolesComponentComponent_div_5_table_11_Template, 11, 0, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RolesComponentComponent_div_5_div_12_Template, 3, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Role Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolesComponentComponent_div_5_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.roleModel.roleName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Please enter new role missing in database.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RolesComponentComponent_div_5_div_22_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponentComponent_div_5_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.addUpdateRole(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponentComponent_div_5_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.resetRoleSelection(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.rolesToDisplay.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.rolesToDisplay.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.rolesToDisplay.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.roleModel.roleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
} }
class RolesComponentComponent {
    constructor(roleService, spinnerService, toastrNotificationService, cdRef, modalService) {
        this.roleService = roleService;
        this.spinnerService = spinnerService;
        this.toastrNotificationService = toastrNotificationService;
        this.cdRef = cdRef;
        this.modalService = modalService;
        this.roles = new Array();
        this.rolesToDisplay = new Array();
        this.currentPage = 1;
        this.itemsPerPage = 5;
        this.loading = false;
    }
    ngOnInit() {
        this.resetVariables();
        this.getRolesFromDatabase();
    }
    resetVariables() {
        this.roleModel = new _shared_models_roles_role__WEBPACK_IMPORTED_MODULE_1__["Role"](0, '');
        this.searchTerm = '';
    }
    getRolesFromDatabase() {
        this.loading = true;
        this.spinnerService.updateMessage('Loading Roles.....');
        this.spinnerService.busy();
        this.roleService.getRoles()
            .subscribe((response) => {
            if (response.data != null) {
                this.roles = _shared_models_roles_role__WEBPACK_IMPORTED_MODULE_1__["Role"].FormRolesModelArray(response);
                this.rolesToDisplay = this.roles.slice();
            }
            this.loading = false;
            this.spinnerService.idle();
        }, error => {
            this.loading = false;
            this.spinnerService.idle();
            console.log('Exception occured while fetching roles from Database');
        });
    }
    pageChanged(event) {
        this.currentPage = event.page;
    }
    addUpdateRole(roleForm) {
        if (roleForm.valid) {
            if (this.roleModel.roleId != 0) {
                this.updateRole(roleForm);
            }
            else {
                this.addRole(roleForm);
            }
        }
    }
    updateRole(roleForm) {
        this.spinnerService.updateMessage('Updating Role.....');
        this.spinnerService.busy();
        this.roleService.updateRole(this.roleModel)
            .subscribe((response) => {
            var role = this.roles.find(r => r.roleId == this.roleModel.roleId);
            if (null !== role) {
                role.roleName = this.roleModel.roleName;
            }
            roleForm.resetForm();
            this.resetAfterDbOperation();
            this.rolesToDisplay = this.roles.slice();
            this.spinnerService.idle();
            this.toastrNotificationService.success('Role updated successfully');
        }, error => {
            this.spinnerService.idle();
            console.log('Exception occured while updating roles from Database');
        });
    }
    addRole(roleForm) {
        this.spinnerService.updateMessage('Adding Role.....');
        this.spinnerService.busy();
        this.roleService.addRole(this.roleModel)
            .subscribe((response) => {
            var newRole = new _shared_models_roles_role__WEBPACK_IMPORTED_MODULE_1__["Role"](response.data.roleId, response.data.roleName);
            this.roles.push(newRole);
            this.rolesToDisplay = this.roles.slice();
            this.resetAfterDbOperation();
            roleForm.resetForm();
            this.spinnerService.idle();
            this.toastrNotificationService.success('Role added successfully');
        }, error => {
            this.spinnerService.idle();
            console.log(`Exception occured while adding roles to Database`, error);
        });
    }
    editRole(role) {
        this.roleModel = new _shared_models_roles_role__WEBPACK_IMPORTED_MODULE_1__["Role"](role.roleId, role.roleName);
    }
    resetRoleSelection(roleForm) {
        this.resetVariables();
        roleForm.resetForm();
        this.rolesToDisplay = this.roles.slice();
        setTimeout(() => {
            this.currentPage = 1;
        });
        this.cdRef.detectChanges();
    }
    resetAfterDbOperation() {
        this.resetVariables();
        setTimeout(() => {
            this.currentPage = 1;
        });
        this.cdRef.detectChanges();
    }
    deleteRole(role) {
        this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"], {
            initialState: {
                promptMessage: 'Are you sure you want to delete this record?',
                callback: (result) => {
                    if (result) {
                        this.spinnerService.updateMessage('Deleting Role.....');
                        this.spinnerService.busy();
                        this.roleService.deleteRole(role)
                            .subscribe((response) => {
                            this.roles = this.roles.filter(r => r.roleId != role.roleId);
                            this.rolesToDisplay = this.roles.slice();
                            this.resetAfterDbOperation();
                            this.spinnerService.idle();
                            this.toastrNotificationService.success('Role deleted successfully');
                        }, error => {
                            this.spinnerService.idle();
                            console.log('Exception occured while deleting roles from Database');
                        });
                    }
                }
            }
        });
    }
    searchRole() {
        if (this.searchTerm != '') {
            this.rolesToDisplay = this.roles.filter(r => r.roleName.toLocaleLowerCase()
                .indexOf(this.searchTerm.toLocaleLowerCase()) != -1);
            setTimeout(() => {
                this.currentPage = 1;
            }, 0);
            this.cdRef.detectChanges();
        }
        else {
            this.rolesToDisplay = this.roles.slice();
            setTimeout(() => {
                this.currentPage = 1;
            }, 0);
            this.cdRef.detectChanges();
        }
    }
}
RolesComponentComponent.ɵfac = function RolesComponentComponent_Factory(t) { return new (t || RolesComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_roles_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"])); };
RolesComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolesComponentComponent, selectors: [["ng-component"]], decls: 6, vars: 1, consts: [[1, "row", "mt-3"], [1, "col-md-7", "offset-2"], [1, "title_role_management"], [4, "ngIf"], ["novalidate", ""], ["roleForm", "ngForm"], [1, "input-group", "col-md-5", "role_search_control"], ["placeholder", "search", "value", "search", "name", "search-input", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-search"], [1, "row", "table_container_row"], [1, "col-md-12", "table_container_column"], ["name", "rolesTable", "class", "table table-bordered table-hover rolesTable", 4, "ngIf"], ["name", "norolesTable", "class", "table table-bordered table-hover rolesTable", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-xs-12", "col-12"], [1, "form-group"], ["for", "roleName"], ["type", "text", "name", "roleName", "placeholder", "Role Name", "required", "", "maxlength", "50", 1, "form-control", 3, "ngModel", "ngModelChange"], ["roleName", "ngModel"], ["id", "roleHelp", 1, "form-text", "text-muted"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-warning", "ml-3", 3, "disabled", "click"], ["name", "rolesTable", 1, "table", "table-bordered", "table-hover", "rolesTable"], [1, "thead-dark"], ["scope", "col"], ["class", "table-style", 4, "ngFor", "ngForOf"], [1, "table-style"], ["scope", "row"], [1, "role_table_controls"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-pencil-square-o", "fa-lg"], [1, "fa", "fa-trash-o", "fa-lg"], ["name", "norolesTable", 1, "table", "table-bordered", "table-hover", "rolesTable"], ["colspan", "3", 1, "role_table_controls"], [1, "col-xs-12", "col-12", "pager-div"], ["name", "paginationControl", 3, "totalItems", "itemsPerPage", "maxSize", "ngModel", "pageChanged", "ngModelChange"], [1, "alert", "alert-danger"]], template: function RolesComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Roles Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RolesComponentComponent_div_5_Template, 27, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"]], pipes: [_shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_10__["PaginationPipePipe"]], styles: [".title_role_management[_ngcontent-%COMP%]{\r\n    text-align:center;\r\n}\r\n\r\n.pager-div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.role_table_controls[_ngcontent-%COMP%]{\r\n    text-align:center;\r\n}\r\n\r\n.role_search_control[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.table_container_row[_ngcontent-%COMP%]{\r\n    clear:both;\r\n}\r\n\r\n.table_container_column[_ngcontent-%COMP%] {\r\n    min-height: 400px;\r\n    max-height: 400px;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.rolesTable[_ngcontent-%COMP%] {\r\n    margin-top: 20px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMtY29tcG9uZW50L3JvbGVzLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvcm9sZXMtY29tcG9uZW50L3JvbGVzLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlX3JvbGVfbWFuYWdlbWVudHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4ucGFnZXItZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnJvbGVfdGFibGVfY29udHJvbHN7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLnJvbGVfc2VhcmNoX2NvbnRyb2wge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50YWJsZV9jb250YWluZXJfcm93e1xyXG4gICAgY2xlYXI6Ym90aDtcclxufVxyXG5cclxuLnRhYmxlX2NvbnRhaW5lcl9jb2x1bW4ge1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4ucm9sZXNUYWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './roles-component.component.html',
                styleUrls: ['./roles-component.component.css']
            }]
    }], function () { return [{ type: _shared_services_roles_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"] }, { type: _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"] }, { type: _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrNotificationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\EmployeePerfomanceEvaluationSystem\EmployeePerfomanceEvaluationSystem\client_app\performance-evaluation-client\src\main.ts */"zUnb");


/***/ }),

/***/ "3PAx":
/*!************************************************************!*\
  !*** ./src/app/shared/services/spinner/spinner-service.ts ***!
  \************************************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");




class SpinnerService {
    constructor(spinnerService) {
        this.spinnerService = spinnerService;
        this.messageBehaviour = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('Loading...');
        this.messageObservable = this.messageBehaviour.asObservable();
    }
    updateMessage(message) {
        this.messageBehaviour.next(message);
    }
    busy(message = 'Loading....') {
        this.spinnerService.show(undefined, {
            type: 'square-spin',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            size: 'medium'
        });
    }
    idle() {
        this.spinnerService.hide();
    }
}
SpinnerService.ɵfac = function SpinnerService_Factory(t) { return new (t || SpinnerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"])); };
SpinnerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpinnerService, factory: SpinnerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "3m8X":
/*!*****************************************************!*\
  !*** ./src/app/accounts/accounts-routing-module.ts ***!
  \*****************************************************/
/*! exports provided: AccountsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsRoutingModule", function() { return AccountsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-registration/user-registration-component */ "GBNu");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-login/user-login-component */ "qMtO");






const accountsModuleRoutes = [
    { path: 'register', component: _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationComponent"] },
    { path: 'login', component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"] }
];
class AccountsRoutingModule {
}
AccountsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountsRoutingModule });
AccountsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountsRoutingModule_Factory(t) { return new (t || AccountsRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(accountsModuleRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(accountsModuleRoutes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/accounts/accounts-service */ "amK/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return ["/home"]; };
function NavBarComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/roles"]; };
const _c2 = function () { return ["/departments"]; };
const _c3 = function () { return ["/goals"]; };
const _c4 = function () { return ["/iterations"]; };
function NavBarComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Manage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Manage Roles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Manage Departments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Manage Goals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Manage Iterations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c4));
} }
const _c5 = function () { return ["/reporting-manager-request"]; };
function NavBarComponent_li_9_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Reporting Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c5));
} }
const _c6 = function () { return ["/view-reporting-manager-request"]; };
function NavBarComponent_li_9_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Reporting Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c6));
} }
function NavBarComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Requests ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NavBarComponent_li_9_a_4_Template, 3, 2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavBarComponent_li_9_a_5_Template, 3, 2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.accountService.isAdminUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.accountService.isAdminUser());
} }
const _c7 = function () { return ["/user-details"]; };
function NavBarComponent_ul_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Edit Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_ul_10_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" WELCOME, ", ctx_r3.accountService.getUserName(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c7));
} }
class NavBarComponent {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    ngOnInit() {
        this.isLoggedIn = this.accountService.isLoggedInObservable();
    }
    logout() {
        this.accountService.removeTokenFromStorage();
        this.router.navigate(['/login']);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 11, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "p-3", "px-md-4", "mb-3", "bg-dark", "border-bottom", "shadow-sm"], [1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", 4, "ngIf"], ["class", "nav-item dropdown active", 4, "ngIf"], ["class", "navbar-nav ml-auto", 4, "ngIf"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "nav-item", "dropdown", "active"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLinkActive", "active", 1, "dropdown-item", 3, "routerLink"], [1, "fa", "fa-arrow-circle-right", "fa-lg", "mr-2"], ["class", "dropdown-item", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "dropdown-menu-right"], [1, "fa", "fa-user", "fa-lg", "mr-2"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "fa", "fa-sign-out", "fa-lg", "mr-2"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Performance Evaluation System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavBarComponent_li_7_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavBarComponent_li_8_Template, 16, 8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavBarComponent_li_9_Template, 6, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavBarComponent_ul_10_Template, 11, 3, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.isAuthenticated() && ctx.accountService.isAdminUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.isAuthenticated());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".navbar-brand[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    color:white;\r\n}\r\n\r\n#navbarSupportedContent[_ngcontent-%COMP%] {\r\n    margin-top: 3px;\r\n    margin-left: 30px;\r\n    text-transform: uppercase;\r\n  \r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5kIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBcclxufVxyXG5cclxuLm5hdmJhci1uYXYgLm5hdi1pdGVtIGF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return [{ type: _shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "6vQF":
/*!**********************************************************************************************************!*\
  !*** ./src/app/reporting-manager/view-reporting-manger-requests/reporting-manager-requests-component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ReportingManagerRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingManagerRequestsComponent", function() { return ReportingManagerRequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_user_reporting_manager_response_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/user/reporting-manager-response-model */ "kMgH");
/* harmony import */ var _confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../confirm-modal-component/confirm-modal-component */ "Gs7e");
/* harmony import */ var _shared_models_user_approve_reporting_manager_request_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/user/approve-reporting-manager-request-model */ "EIli");
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/user/user-service */ "xB9q");
/* harmony import */ var _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/spinner/spinner-service */ "3PAx");
/* harmony import */ var _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/toastr/toastr-service */ "jonD");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var _shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/pipes/pagination-client */ "SrT9");













function ReportingManagerRequestsComponent_div_5_table_10_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportingManagerRequestsComponent_div_5_table_10_tr_12_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const request_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.approveRequest(request_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportingManagerRequestsComponent_div_5_table_10_tr_12_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const request_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.deleteRequest(request_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const request_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r6.reportedUserEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r6.currentReportingManagerEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r6.newReportingManagerEmail, "");
} }
function ReportingManagerRequestsComponent_div_5_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Current Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ReportingManagerRequestsComponent_div_5_table_10_tr_12_Template, 13, 3, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "paginationPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](13, 1, ctx_r2.pendingRequestsToDisplay, ctx_r2.currentPage, ctx_r2.itemsPerPage));
} }
function ReportingManagerRequestsComponent_div_5_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Current Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " No Records Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportingManagerRequestsComponent_div_5_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pagination", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function ReportingManagerRequestsComponent_div_5_div_12_Template_pagination_pageChanged_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.pageChanged($event); })("ngModelChange", function ReportingManagerRequestsComponent_div_5_div_12_Template_pagination_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.currentPage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx_r4.pendingRequestsToDisplay.length)("itemsPerPage", ctx_r4.itemsPerPage)("maxSize", ctx_r4.itemsPerPage)("ngModel", ctx_r4.currentPage);
} }
function ReportingManagerRequestsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportingManagerRequestsComponent_div_5_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.searchTerm = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportingManagerRequestsComponent_div_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.searchRequests(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ReportingManagerRequestsComponent_div_5_table_10_Template, 14, 5, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReportingManagerRequestsComponent_div_5_table_11_Template, 15, 0, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ReportingManagerRequestsComponent_div_5_div_12_Template, 3, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pendingRequestsToDisplay.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pendingRequestsToDisplay.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pendingRequestsToDisplay.length > 0);
} }
class ReportingManagerRequestsComponent {
    constructor(userService, spinnerService, toastrNotificationService, cdRef, modalService) {
        this.userService = userService;
        this.spinnerService = spinnerService;
        this.toastrNotificationService = toastrNotificationService;
        this.cdRef = cdRef;
        this.modalService = modalService;
        this.pendingRequests = new Array();
        this.pendingRequestsToDisplay = new Array();
        this.currentPage = 1;
        this.itemsPerPage = 5;
        this.loading = false;
    }
    ngOnInit() {
        this.resetVariables();
        this.getPendingRequestsFromDatabase();
    }
    resetVariables() {
        this.searchTerm = '';
    }
    getPendingRequestsFromDatabase() {
        this.loading = true;
        this.spinnerService.updateMessage('Loading pending reporting manager requests.....');
        this.spinnerService.busy();
        this.userService.getPendingReportingManagerRequests()
            .subscribe((response) => {
            if (response.data != null) {
                this.pendingRequests = _shared_models_user_reporting_manager_response_model__WEBPACK_IMPORTED_MODULE_1__["ReportingManagerResponseModel"].FormReportingRequestsModelArray(response);
                this.pendingRequestsToDisplay = this.pendingRequests.slice();
            }
            this.loading = false;
            this.spinnerService.idle();
        }, error => {
            this.loading = false;
            this.spinnerService.idle();
            console.log('Exception occured while fetching pending reporting manager requests from Database');
        });
    }
    pageChanged(event) {
        this.currentPage = event.page;
    }
    searchRequests() {
        if (this.searchTerm != '' && this.searchTerm != null && this.searchTerm != undefined) {
            this.pendingRequestsToDisplay = this.pendingRequests.filter(r => r.reportedUserEmail.toLocaleLowerCase()
                .indexOf(this.searchTerm.toLocaleLowerCase()) != -1);
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
        else {
            this.pendingRequestsToDisplay = this.pendingRequests.slice();
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
    }
    approveRequest(request) {
        this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"], {
            initialState: {
                promptMessage: 'Are you sure you want to confirm request?',
                callback: (result) => {
                    if (result) {
                        let approvalRequest = this.mapApprovalReportingManagerRequest(request);
                        this.spinnerService.updateMessage('Updating reporting manager.....');
                        this.spinnerService.busy();
                        this.userService.approvePendingReportingManagerRequests(approvalRequest)
                            .subscribe((response) => {
                            this.getPendingRequestsFromDatabaseAfterEditDelete('Request approved successfully');
                        }, error => {
                            this.spinnerService.idle();
                            console.log('Exception occured while approving reporting manager request');
                        });
                    }
                }
            }
        });
    }
    mapApprovalReportingManagerRequest(request) {
        let approvalRequest = new _shared_models_user_approve_reporting_manager_request_model__WEBPACK_IMPORTED_MODULE_3__["ApproveReportingManagerRequestModel"]();
        approvalRequest.reportingManagerRequestId = request.reportingManagerRequestId;
        approvalRequest.reportedUserId = request.reportedUserId;
        approvalRequest.reportedUserEmail = request.reportedUserEmail;
        approvalRequest.currentReportingManagerId = request.currentReportingManagerId;
        approvalRequest.currentReportingManagerEmail = request.currentReportingManagerEmail;
        approvalRequest.newReportingManagerId = request.newReportingManagerId;
        approvalRequest.newReportingManagerEmail = request.newReportingManagerEmail;
        approvalRequest.status = request.status;
        return approvalRequest;
    }
    deleteRequest(request) {
        this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"], {
            initialState: {
                promptMessage: 'Are you sure you want to delete request?',
                callback: (result) => {
                    if (result) {
                        this.spinnerService.updateMessage('Deleting reporting manager request.....');
                        this.spinnerService.busy();
                        this.userService.rejectPendingReportingManagerRequests(request.reportingManagerRequestId)
                            .subscribe((response) => {
                            this.getPendingRequestsFromDatabaseAfterEditDelete('Request deleted successfully');
                        }, error => {
                            this.spinnerService.idle();
                            console.log('Exception occured while deleting reporting manager request');
                        });
                    }
                }
            }
        });
    }
    getPendingRequestsFromDatabaseAfterEditDelete(message) {
        this.userService.getPendingReportingManagerRequests()
            .subscribe((response) => {
            if (response.data != null) {
                this.pendingRequests = _shared_models_user_reporting_manager_response_model__WEBPACK_IMPORTED_MODULE_1__["ReportingManagerResponseModel"].FormReportingRequestsModelArray(response);
                this.pendingRequestsToDisplay = this.pendingRequests.slice();
            }
            this.resetAfterDbOperation();
            this.spinnerService.idle();
            this.toastrNotificationService.success(message);
        }, error => {
            this.loading = false;
            this.spinnerService.idle();
            console.log('Exception occured getPendingRequestsFromDatabaseAfterEditDelete()');
        });
    }
    resetAfterDbOperation() {
        this.resetVariables();
        setTimeout(() => {
            this.currentPage = 1;
        });
        this.cdRef.detectChanges();
    }
}
ReportingManagerRequestsComponent.ɵfac = function ReportingManagerRequestsComponent_Factory(t) { return new (t || ReportingManagerRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"])); };
ReportingManagerRequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportingManagerRequestsComponent, selectors: [["ng-component"]], decls: 6, vars: 1, consts: [[1, "row", "mt-3"], [1, "col-md-9", "offset-1"], [1, "title_reporting_manager_requests_management"], [4, "ngIf"], ["novalidate", ""], ["goalForm", "ngForm"], [1, "input-group", "col-md-5", "reporting_manager_search_control"], ["placeholder", "search by reported user", "value", "search", "name", "search-input", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-search"], [1, "row", "table_container_row"], [1, "col-md-12", "table_container_column"], ["name", "goalsTable", "class", "table table-bordered table-hover reporting_manager_table", 4, "ngIf"], ["name", "norequestsTable", "class", "table table-bordered table-hover mt-5 reporting_manager_table", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["name", "goalsTable", 1, "table", "table-bordered", "table-hover", "reporting_manager_table"], [1, "thead-dark"], ["scope", "col"], ["class", "table-style", 4, "ngFor", "ngForOf"], [1, "table-style"], ["scope", "row"], [1, "reporting_manager_table_controls"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-check-square-o", "fa-lg"], [1, "fa", "fa-trash-o", "fa-lg"], ["name", "norequestsTable", 1, "table", "table-bordered", "table-hover", "mt-5", "reporting_manager_table"], ["colspan", "5", 1, "reporting_manager_table_controls"], [1, "row"], [1, "col-xs-12", "col-12", "pager-div"], ["name", "paginationControl", 3, "totalItems", "itemsPerPage", "maxSize", "ngModel", "pageChanged", "ngModelChange"]], template: function ReportingManagerRequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Reporting Manager Requests ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReportingManagerRequestsComponent_div_5_Template, 13, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"]], pipes: [_shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_11__["PaginationPipePipe"]], styles: [".title_reporting_manager_requests_management[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.pager-div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.reporting_manager_table_controls[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.reporting_manager_search_control[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.table_container_row[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.table_container_column[_ngcontent-%COMP%] {\r\n    min-height: 400px;\r\n    max-height: 400px;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.reporting_manager_table[_ngcontent-%COMP%] {\r\n    margin-top: 20px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0aW5nLW1hbmFnZXIvdmlldy1yZXBvcnRpbmctbWFuZ2VyLXJlcXVlc3RzL3JlcG9ydGluZy1tYW5hZ2VyLXJlcXVlc3RzLWNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRpbmctbWFuYWdlci92aWV3LXJlcG9ydGluZy1tYW5nZXItcmVxdWVzdHMvcmVwb3J0aW5nLW1hbmFnZXItcmVxdWVzdHMtY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZV9yZXBvcnRpbmdfbWFuYWdlcl9yZXF1ZXN0c19tYW5hZ2VtZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2VyLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZXBvcnRpbmdfbWFuYWdlcl90YWJsZV9jb250cm9scyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZXBvcnRpbmdfbWFuYWdlcl9zZWFyY2hfY29udHJvbCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnRhYmxlX2NvbnRhaW5lcl9yb3cge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi50YWJsZV9jb250YWluZXJfY29sdW1uIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLnJlcG9ydGluZ19tYW5hZ2VyX3RhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportingManagerRequestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './reporting-manager-requests-component.html',
                styleUrls: ['./reporting-manager-requests-component.css']
            }]
    }], function () { return [{ type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"] }, { type: _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrNotificationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "87k1":
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/match-controls-directive.ts ***!
  \***************************************************************/
/*! exports provided: ControlsValueMatchValidator, compareValueValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlsValueMatchValidator", function() { return ControlsValueMatchValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareValueValidator", function() { return compareValueValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class ControlsValueMatchValidator {
    validate(c) {
        return this.controlToCompare ? compareValueValidator(this.controlToCompare, this.reverse)(c)
            : null;
    }
}
ControlsValueMatchValidator.ɵfac = function ControlsValueMatchValidator_Factory(t) { return new (t || ControlsValueMatchValidator)(); };
ControlsValueMatchValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ControlsValueMatchValidator, selectors: [["", "compareEqual", ""]], inputs: { controlToCompare: ["compareEqual", "controlToCompare"], reverse: "reverse" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: ControlsValueMatchValidator, multi: true }
        ])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlsValueMatchValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[compareEqual]',
                providers: [
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: ControlsValueMatchValidator, multi: true }
                ]
            }]
    }], null, { controlToCompare: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['compareEqual']
        }], reverse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['reverse']
        }] }); })();
function compareValueValidator(controlToCompare, reverse) {
    return (c) => {
        // self value
        let v = c.value;
        // control vlaue
        let e = c.root.get(controlToCompare);
        // value not equal
        if (e && v !== e.value && !isReverse(reverse)) {
            return {
                compareEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && isReverse(reverse)) {
            delete e.errors['compareEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && isReverse(reverse)) {
            e.setErrors({ compareEqual: false });
        }
        return null;
    };
}
function isReverse(reverse) {
    if (!reverse)
        return false;
    return reverse === 'true' ? true : false;
}


/***/ }),

/***/ "9gZX":
/*!*********************************************!*\
  !*** ./src/app/accounts/accounts-module.ts ***!
  \*********************************************/
/*! exports provided: AccountsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsModule", function() { return AccountsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-module */ "+fd8");
/* harmony import */ var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-registration/user-registration-component */ "GBNu");
/* harmony import */ var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounts-routing-module */ "3m8X");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-login/user-login-component */ "qMtO");






class AccountsModule {
}
AccountsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccountsModule });
AccountsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AccountsModule_Factory(t) { return new (t || AccountsModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountsModule, { declarations: [_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationComponent"],
        _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationComponent"],
                    _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"]
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Dste":
/*!*****************************************************************!*\
  !*** ./src/app/shared/guards/check-user-authenticated-guard.ts ***!
  \*****************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/accounts/accounts-service */ "amK/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuardService {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    canActivate() {
        if (!this.accountService.isAuthenticated()) {
            this.router.navigate(['/unauthorized']);
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "E4ub":
/*!*********************************************!*\
  !*** ./src/app/shared/models/goals/goal.ts ***!
  \*********************************************/
/*! exports provided: Goal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Goal", function() { return Goal; });
class Goal {
    constructor(goalId, goalName, isActive) {
        this.goalId = goalId;
        this.goalName = goalName;
    }
    static FormGoalModelArray(response) {
        var goalArray = new Array();
        for (var data of response.data) {
            var goal = new Goal(data.goalId, data.goalName, data.isActive);
            goalArray.push(goal);
        }
        return goalArray;
    }
}


/***/ }),

/***/ "EIli":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/models/user/approve-reporting-manager-request-model.ts ***!
  \*******************************************************************************/
/*! exports provided: ApproveReportingManagerRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveReportingManagerRequestModel", function() { return ApproveReportingManagerRequestModel; });
class ApproveReportingManagerRequestModel {
}


/***/ }),

/***/ "GBNu":
/*!***************************************************************************!*\
  !*** ./src/app/accounts/user-registration/user-registration-component.ts ***!
  \***************************************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _password_match_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-match-validation */ "bedm");
/* harmony import */ var _shared_models_roles_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/roles/role */ "m0fA");
/* harmony import */ var _shared_models_departments_department__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/departments/department */ "ZWsb");
/* harmony import */ var _shared_models_accounts_user_registration_registration_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/models/accounts/user-registration/registration-request */ "Nd1l");
/* harmony import */ var _confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../confirm-modal-component/confirm-modal-component */ "Gs7e");
/* harmony import */ var _shared_services_roles_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/roles/role-service */ "QyGD");
/* harmony import */ var _shared_services_departments_departments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/departments/departments-service */ "Oykz");
/* harmony import */ var _shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/accounts/accounts-service */ "amK/");
/* harmony import */ var _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/spinner/spinner-service */ "3PAx");
/* harmony import */ var _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/services/toastr/toastr-service */ "jonD");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");

















function UserRegistrationComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* First Name cannot exceeds 50 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Last Name cannot exceeds 50 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Please enter valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Password must be atleast 8 - 12 charcters long, and should contain One digit, One Upper case and One Lower case character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Password Mismatch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Contact Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", role_r14.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r14.roleName);
} }
function UserRegistrationComponent_p_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Please select Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_option_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", department_r15.departmentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](department_r15.departmentName);
} }
function UserRegistrationComponent_p_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Please select Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserRegistrationComponent {
    constructor(registrationFormBuilder, roleService, departmentService, accountService, spinnerService, toastrNotificationService, modalService, router) {
        this.registrationFormBuilder = registrationFormBuilder;
        this.roleService = roleService;
        this.departmentService = departmentService;
        this.accountService = accountService;
        this.spinnerService = spinnerService;
        this.toastrNotificationService = toastrNotificationService;
        this.modalService = modalService;
        this.router = router;
        this.roles = Array();
        this.departments = new Array();
    }
    ngOnInit() {
        this.initializeRegistrationFormGroup();
        this.loadRoles();
        this.loadDepartments();
    }
    initializeRegistrationFormGroup() {
        this.registrationFormGroup = this.registrationFormBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
            passwordGroup: this.registrationFormBuilder.group({
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                        this.patternValidator()
                    ]],
                confirmPassword: ['']
            }, { validator: _password_match_validation__WEBPACK_IMPORTED_MODULE_2__["PasswordMatchValidation"].matchPassword }),
            contactNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]*$")]],
            gender: ['M'],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            department: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    loadRoles() {
        this.roleService.getRoles()
            .subscribe((response) => {
            if (response.data != null) {
                this.roles = _shared_models_roles_role__WEBPACK_IMPORTED_MODULE_3__["Role"].FormRolesModelArray(response);
            }
        }, error => {
            console.log('Exception occured while fetching roles from Database');
        });
    }
    loadDepartments() {
        this.departmentService.getDepartments()
            .subscribe((response) => {
            if (response.data != null) {
                this.departments = _shared_models_departments_department__WEBPACK_IMPORTED_MODULE_4__["Department"].FormDepartmentModelArray(response);
            }
        }, error => {
            console.log('Exception occured while fetching roles from Database');
        });
    }
    registerUser() {
        if (this.registrationFormGroup.valid) {
            this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], {
                initialState: {
                    promptMessage: 'Continue to register?',
                    callback: (result) => {
                        if (result) {
                            this.spinnerService.updateMessage('Registering User. Please wait.....');
                            this.spinnerService.busy();
                            var registrationRequestModel = this.MapFormGroupToRegistrationRequest();
                            this.accountService.registerUser(registrationRequestModel)
                                .subscribe((response) => {
                                this.registrationFormGroup.reset();
                                this.initializeRegistrationFormGroup();
                                this.spinnerService.idle();
                                this.toastrNotificationService.success('User registered successfully');
                            }, error => {
                                this.spinnerService.idle();
                                console.log('Exception occured while registering new user');
                            });
                        }
                    }
                }
            });
        }
    }
    MapFormGroupToRegistrationRequest() {
        var registrationRequestModel = new _shared_models_accounts_user_registration_registration_request__WEBPACK_IMPORTED_MODULE_5__["RegistrationRequestModel"]();
        registrationRequestModel.firstName = this.registrationFormGroup.value.firstName;
        registrationRequestModel.lastName = this.registrationFormGroup.value.lastName;
        registrationRequestModel.email = this.registrationFormGroup.value.email;
        registrationRequestModel.password = this.registrationFormGroup.value.passwordGroup.password;
        registrationRequestModel.userName = this.registrationFormGroup.value.email;
        registrationRequestModel.roleId = this.registrationFormGroup.value.role * 1;
        registrationRequestModel.departmentId = this.registrationFormGroup.value.department * 1;
        registrationRequestModel.gender = this.registrationFormGroup.value.gender;
        registrationRequestModel.contactNumber = '' + this.registrationFormGroup.value.contactNumber;
        registrationRequestModel.reportingManagerId = 0;
        return registrationRequestModel;
    }
    navigateLogin() {
        if (this.registrationFormGroup.dirty) {
            this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], {
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
    patternValidator() {
        return (control) => {
            if (!control.value) {
                return null;
            }
            const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,12}$');
            const valid = regex.test(control.value);
            return valid ? null : { invalidPassword: true };
        };
    }
}
UserRegistrationComponent.ɵfac = function UserRegistrationComponent_Factory(t) { return new (t || UserRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_roles_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_departments_departments_service__WEBPACK_IMPORTED_MODULE_8__["DepartmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_10__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_11__["ToastrNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"])); };
UserRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserRegistrationComponent, selectors: [["ng-component"]], decls: 74, vars: 22, consts: [[1, "row", "mt-3"], [1, "col-md-7", "offset-3"], [1, "title_user_registration"], [1, "row"], [1, "col-md-10", "mt-3", "registration-controls"], ["novalidate", "", 3, "formGroup"], [1, "form-group"], ["for", "firstName"], ["type", "text", "name", "firstName", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control"], ["class", "help-block", 4, "ngIf"], ["for", "lastName"], ["type", "text", "name", "lastName", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control"], ["for", "email"], ["type", "text", "name", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control"], ["formGroupName", "passwordGroup"], ["for", "password"], ["type", "password", "name", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], ["for", "confirmPassword"], ["type", "password", "name", "confirmPassword", "placeholder", "Confirm Password", "formControlName", "confirmPassword", 1, "form-control"], ["for", "contactNumber"], ["type", "number", "name", "contactNumber", "placeholder", "Contact Number", "formControlName", "contactNumber", 1, "form-control"], ["for", "gender"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle"], [1, "btn", "btn-secondary"], ["type", "radio", "formControlName", "gender", "id", "option1", "value", "M", 3, "checked"], ["type", "radio", "formControlName", "gender", "id", "option2", "value", "F", 3, "checked"], ["for", "role"], ["id", "role", "formControlName", "role", 1, "form-control"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "department"], ["id", "department", "formControlName", "department", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "registration_buttons", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-outline-dark", "ml-3", "registration_buttons", 3, "click"], [1, "help-block"], [3, "value"]], template: function UserRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " New User Registration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserRegistrationComponent_p_12_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserRegistrationComponent_p_13_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserRegistrationComponent_p_18_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserRegistrationComponent_p_19_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserRegistrationComponent_p_24_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserRegistrationComponent_p_25_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UserRegistrationComponent_p_31_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UserRegistrationComponent_p_32_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserRegistrationComponent_p_37_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, UserRegistrationComponent_p_42_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, UserRegistrationComponent_option_60_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, UserRegistrationComponent_p_61_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, UserRegistrationComponent_option_68_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, UserRegistrationComponent_p_69_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRegistrationComponent_Template_button_click_70_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRegistrationComponent_Template_button_click_72_listener() { return ctx.navigateLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registrationFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationFormGroup.get("firstName").hasError("required") && ctx.registrationFormGroup.get("firstName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationFormGroup.get("firstName").hasError("maxlength") && ctx.registrationFormGroup.get("firstName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationFormGroup.get("lastName").hasError("required") && ctx.registrationFormGroup.get("lastName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationFormGroup.get("lastName").hasError("maxlength") && ctx.registrationFormGroup.get("lastName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationFormGroup.get("email").hasError("required") && ctx.registrationFormGroup.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationFormGroup.get("email").hasError("pattern") && ctx.registrationFormGroup.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationFormGroup.get("passwordGroup.password").hasError("required") && ctx.registrationFormGroup.get("passwordGroup.password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationFormGroup.get("passwordGroup.password").hasError("invalidPassword") && ctx.registrationFormGroup.get("passwordGroup.password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationFormGroup.get("passwordGroup").hasError("invalidPassword") && ctx.registrationFormGroup.get("passwordGroup.password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationFormGroup.get("contactNumber").hasError("required") && ctx.registrationFormGroup.get("contactNumber").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.registrationFormGroup.get("gender").value == "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.registrationFormGroup.get("gender").value == "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.registrationFormGroup.get("gender").value == "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.registrationFormGroup.get("gender").value == "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationFormGroup.get("role").hasError("required") && ctx.registrationFormGroup.get("role").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationFormGroup.get("department").hasError("required") && ctx.registrationFormGroup.get("department").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registrationFormGroup.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"]], styles: [".title_user_registration[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n}\r\n\r\n.registration-controls[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n}\r\n\r\n.registration_buttons[_ngcontent-%COMP%]{\r\n    width: 120px;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%] {\r\n    color: #DD0031;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvdXNlci1yZWdpc3RyYXRpb24vdXNlci1yZWdpc3RyYXRpb24tY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzL3VzZXItcmVnaXN0cmF0aW9uL3VzZXItcmVnaXN0cmF0aW9uLWNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVfdXNlcl9yZWdpc3RyYXRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnJlZ2lzdHJhdGlvbi1jb250cm9sc3tcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uX2J1dHRvbnN7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5oZWxwLWJsb2NrIHtcclxuICAgIGNvbG9yOiAjREQwMDMxO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './user-registration-component.html',
                styleUrls: ['./user-registration-component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_roles_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"] }, { type: _shared_services_departments_departments_service__WEBPACK_IMPORTED_MODULE_8__["DepartmentService"] }, { type: _shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"] }, { type: _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_10__["SpinnerService"] }, { type: _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_11__["ToastrNotificationService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BsModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }]; }, null); })();


/***/ }),

/***/ "Gs7e":
/*!********************************************************************!*\
  !*** ./src/app/confirm-modal-component/confirm-modal-component.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");



class ConfirmModalComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ngOnInit() {
    }
    confirm() {
        if (this.bsModalRef.content.callback != null) {
            this.bsModalRef.content.callback(true);
            this.bsModalRef.hide();
        }
    }
    decline() {
        if (this.bsModalRef.content.callback != null) {
            this.bsModalRef.content.callback(false);
            this.bsModalRef.hide();
        }
    }
}
ConfirmModalComponent.ɵfac = function ConfirmModalComponent_Factory(t) { return new (t || ConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"])); };
ConfirmModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmModalComponent, selectors: [["app-confirm-modal"]], decls: 16, vars: 1, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "text-center"], ["type", "button", 1, "btn", "btn-danger", "mr-3", "confirm_buttons", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "confirm_buttons", 3, "click"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function ConfirmModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirm!!!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_3_listener() { return ctx.decline(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_9_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_11_listener() { return ctx.decline(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_14_listener() { return ctx.decline(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.promptMessage);
    } }, styles: [".confirm_buttons[_ngcontent-%COMP%]{\r\n    width: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybS1tb2RhbC1jb21wb25lbnQvY29uZmlybS1tb2RhbC1jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29uZmlybS1tb2RhbC1jb21wb25lbnQvY29uZmlybS1tb2RhbC1jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm1fYnV0dG9uc3tcclxuICAgIHdpZHRoOiA3MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-modal',
                templateUrl: './confirm-modal-component.html',
                styleUrls: ['./confirm-modal-component.css']
            }]
    }], function () { return [{ type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"] }]; }, null); })();


/***/ }),

/***/ "L0k6":
/*!********************************************************!*\
  !*** ./src/app/shared/models/user/registered-users.ts ***!
  \********************************************************/
/*! exports provided: RegisteredUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredUsers", function() { return RegisteredUsers; });
class RegisteredUsers {
    constructor(userId, email) {
        this.userId = userId;
        this.email = email;
    }
    static FormRegisterUsersModelArray(response) {
        var registeredUsersArray = new Array();
        for (var data of response.data) {
            var user = new RegisteredUsers(data.userId, data.email);
            registeredUsersArray.push(user);
        }
        return registeredUsersArray;
    }
}


/***/ }),

/***/ "Mgfn":
/*!******************************************!*\
  !*** ./src/app/goals/goals-component.ts ***!
  \******************************************/
/*! exports provided: GoalsComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsComponentComponent", function() { return GoalsComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_goals_goal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/goals/goal */ "E4ub");
/* harmony import */ var _confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirm-modal-component/confirm-modal-component */ "Gs7e");
/* harmony import */ var _shared_services_goals_goals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/goals/goals-service */ "UwIm");
/* harmony import */ var _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/spinner/spinner-service */ "3PAx");
/* harmony import */ var _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/toastr/toastr-service */ "jonD");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var _shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/pipes/pagination-client */ "SrT9");












function GoalsComponentComponent_div_5_table_10_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoalsComponentComponent_div_5_table_10_tr_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const goal_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.editGoal(goal_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoalsComponentComponent_div_5_table_10_tr_8_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const goal_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.deleteGoal(goal_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const goal_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", goal_r8.goalName, "");
} }
function GoalsComponentComponent_div_5_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Goal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GoalsComponentComponent_div_5_table_10_tr_8_Template, 9, 1, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "paginationPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 1, ctx_r2.goalsToDisplay, ctx_r2.currentPage, ctx_r2.itemsPerPage));
} }
function GoalsComponentComponent_div_5_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Goal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " No Records Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoalsComponentComponent_div_5_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pagination", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function GoalsComponentComponent_div_5_div_12_Template_pagination_pageChanged_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.pageChanged($event); })("ngModelChange", function GoalsComponentComponent_div_5_div_12_Template_pagination_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.currentPage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx_r4.goalsToDisplay.length)("itemsPerPage", ctx_r4.itemsPerPage)("maxSize", ctx_r4.itemsPerPage)("ngModel", ctx_r4.currentPage);
} }
function GoalsComponentComponent_div_5_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Goal Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoalsComponentComponent_div_5_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Goal Name cannot exceeds 500 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoalsComponentComponent_div_5_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GoalsComponentComponent_div_5_div_22_div_1_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GoalsComponentComponent_div_5_div_22_div_2_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.maxlength);
} }
function GoalsComponentComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GoalsComponentComponent_div_5_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.searchTerm = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoalsComponentComponent_div_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.searchGoals(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GoalsComponentComponent_div_5_table_10_Template, 10, 5, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GoalsComponentComponent_div_5_table_11_Template, 11, 0, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GoalsComponentComponent_div_5_div_12_Template, 3, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add/Update Goal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GoalsComponentComponent_div_5_Template_textarea_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.goalModel.goalName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Please enter new goal missing in database.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GoalsComponentComponent_div_5_div_22_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoalsComponentComponent_div_5_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.addUpdateGoal(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoalsComponentComponent_div_5_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.resetGoalSelection(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.goalsToDisplay.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.goalsToDisplay.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.goalsToDisplay.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.goalModel.goalName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
} }
class GoalsComponentComponent {
    constructor(goalService, spinnerService, toastrNotificationService, cdRef, modalService) {
        this.goalService = goalService;
        this.spinnerService = spinnerService;
        this.toastrNotificationService = toastrNotificationService;
        this.cdRef = cdRef;
        this.modalService = modalService;
        this.goals = new Array();
        this.goalsToDisplay = new Array();
        this.currentPage = 1;
        this.itemsPerPage = 5;
        this.loading = false;
    }
    ngOnInit() {
        this.resetVariables();
        this.getGoalsFromDatabase();
    }
    resetVariables() {
        this.goalModel = new _shared_models_goals_goal__WEBPACK_IMPORTED_MODULE_1__["Goal"](0, '', true);
        this.searchTerm = '';
    }
    getGoalsFromDatabase() {
        this.loading = true;
        this.spinnerService.updateMessage('Loading Goals.....');
        this.spinnerService.busy();
        this.goalService.getGoals()
            .subscribe((response) => {
            if (response.data != null) {
                this.goals = _shared_models_goals_goal__WEBPACK_IMPORTED_MODULE_1__["Goal"].FormGoalModelArray(response);
                this.goalsToDisplay = this.goals.slice();
            }
            this.loading = false;
            this.spinnerService.idle();
        }, error => {
            this.loading = false;
            this.spinnerService.idle();
            console.log('Exception occured while fetching goals from Database');
        });
    }
    pageChanged(event) {
        this.currentPage = event.page;
    }
    addUpdateGoal(goalForm) {
        if (goalForm.valid) {
            if (this.goalModel.goalId != 0) {
                this.updateGoal(goalForm);
            }
            else {
                this.addGoal(goalForm);
            }
        }
    }
    updateGoal(goalForm) {
        this.spinnerService.updateMessage('Updating Goal.....');
        this.spinnerService.busy();
        this.goalService.updateGoal(this.goalModel)
            .subscribe((response) => {
            var goal = this.goals.find(r => r.goalId == this.goalModel.goalId);
            if (null !== goal) {
                goal.goalName = this.goalModel.goalName;
            }
            goalForm.resetForm();
            this.resetAfterDbOperation();
            this.goalsToDisplay = this.goals.slice();
            this.spinnerService.idle();
            this.toastrNotificationService.success('Goal updated successfully');
        }, error => {
            this.spinnerService.idle();
            console.log('Exception occured while updating goal from Database');
        });
    }
    addGoal(goalForm) {
        this.spinnerService.updateMessage('Adding Goal.....');
        this.spinnerService.busy();
        this.goalService.addGoal(this.goalModel)
            .subscribe((response) => {
            var newGoal = new _shared_models_goals_goal__WEBPACK_IMPORTED_MODULE_1__["Goal"](response.data.goalId, response.data.goalName, true);
            this.goals.push(newGoal);
            this.goalsToDisplay = this.goals.slice();
            this.resetAfterDbOperation();
            goalForm.resetForm();
            this.spinnerService.idle();
            this.toastrNotificationService.success('Goal added successfully');
        }, error => {
            this.spinnerService.idle();
            console.log('Exception occured while adding goals to Database');
        });
    }
    editGoal(goal) {
        this.goalModel = new _shared_models_goals_goal__WEBPACK_IMPORTED_MODULE_1__["Goal"](goal.goalId, goal.goalName, true);
    }
    resetGoalSelection(goalForm) {
        this.resetVariables();
        goalForm.resetForm();
        this.goalsToDisplay = this.goals.slice();
        setTimeout(() => {
            this.currentPage = 1;
        });
        this.cdRef.detectChanges();
    }
    resetAfterDbOperation() {
        this.resetVariables();
        setTimeout(() => {
            this.currentPage = 1;
        });
        this.cdRef.detectChanges();
    }
    deleteGoal(goal) {
        this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"], {
            initialState: {
                promptMessage: 'Are you sure you want to delete this record?',
                callback: (result) => {
                    if (result) {
                        this.spinnerService.updateMessage('Deleting Goal.....');
                        this.spinnerService.busy();
                        this.goalService.deleteGoal(goal)
                            .subscribe((response) => {
                            this.goals = this.goals.filter(r => r.goalId != goal.goalId);
                            this.goalsToDisplay = this.goals.slice();
                            this.resetAfterDbOperation();
                            this.spinnerService.idle();
                            this.toastrNotificationService.success('Goal deleted successfully');
                        }, error => {
                            this.spinnerService.idle();
                            console.log('Exception occured while deleting goals from Database');
                        });
                    }
                }
            }
        });
    }
    searchGoals() {
        if (this.searchTerm != '' && this.searchTerm != null && this.searchTerm != undefined) {
            this.goalsToDisplay = this.goals.filter(r => r.goalName.toLocaleLowerCase()
                .indexOf(this.searchTerm.toLocaleLowerCase()) != -1);
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
        else {
            this.goalsToDisplay = this.goals.slice();
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
    }
}
GoalsComponentComponent.ɵfac = function GoalsComponentComponent_Factory(t) { return new (t || GoalsComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_goals_goals_service__WEBPACK_IMPORTED_MODULE_3__["GoalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"])); };
GoalsComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoalsComponentComponent, selectors: [["ng-component"]], decls: 6, vars: 1, consts: [[1, "row", "mt-3"], [1, "col-md-7", "offset-2"], [1, "title_goal_management"], [4, "ngIf"], ["novalidate", ""], ["goalForm", "ngForm"], [1, "input-group", "col-md-5", "goal_search_control"], ["placeholder", "search", "value", "search", "name", "search-input", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-search"], [1, "row", "table_container_row"], [1, "col-md-12", "table_container_column"], ["name", "goalsTable", "class", "table table-bordered table-hover goals_table", 4, "ngIf"], ["name", "nogoalsTable", "class", "table table-bordered table-hover mt-5 goals_table", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-xs-12", "col-12"], [1, "form-group"], ["for", "goalName"], ["name", "goalName", "placeholder", "Enter Goal(max number of characters accepted are 500)", "required", "", "maxlength", "500", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["goalName", "ngModel"], ["id", "roleHelp", 1, "form-text", "text-muted"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-warning", "ml-3", 3, "disabled", "click"], ["name", "goalsTable", 1, "table", "table-bordered", "table-hover", "goals_table"], [1, "thead-dark"], ["scope", "col"], ["class", "table-style", 4, "ngFor", "ngForOf"], [1, "table-style"], ["scope", "row"], [1, "goal_table_controls"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-pencil-square-o", "fa-lg"], [1, "fa", "fa-trash-o", "fa-lg"], ["name", "nogoalsTable", 1, "table", "table-bordered", "table-hover", "mt-5", "goals_table"], ["colspan", "3", 1, "goal_table_controls"], [1, "col-xs-12", "col-12", "pager-div"], ["name", "paginationControl", 3, "totalItems", "itemsPerPage", "maxSize", "ngModel", "pageChanged", "ngModelChange"], [1, "alert", "alert-danger"]], template: function GoalsComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Goals Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GoalsComponentComponent_div_5_Template, 27, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"]], pipes: [_shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_10__["PaginationPipePipe"]], styles: [".title_goal_management[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.pager-div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.goal_table_controls[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.goal_search_control[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.table_container_row[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.table_container_column[_ngcontent-%COMP%] {\r\n    min-height: 400px;\r\n    max-height: 400px;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.goals_table[_ngcontent-%COMP%] {\r\n    margin-top: 20px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29hbHMvZ29hbHMtY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2dvYWxzL2dvYWxzLWNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVfZ29hbF9tYW5hZ2VtZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2VyLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nb2FsX3RhYmxlX2NvbnRyb2xzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdvYWxfc2VhcmNoX2NvbnRyb2wge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50YWJsZV9jb250YWluZXJfcm93IHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udGFibGVfY29udGFpbmVyX2NvbHVtbiB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5nb2Fsc190YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoalsComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './goals-component.html',
                styleUrls: ['./goals-component.css']
            }]
    }], function () { return [{ type: _shared_services_goals_goals_service__WEBPACK_IMPORTED_MODULE_3__["GoalsService"] }, { type: _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"] }, { type: _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrNotificationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "Nd1l":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/models/accounts/user-registration/registration-request.ts ***!
  \**********************************************************************************/
/*! exports provided: RegistrationRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRequestModel", function() { return RegistrationRequestModel; });
class RegistrationRequestModel {
}


/***/ }),

/***/ "OYND":
/*!********************************************************!*\
  !*** ./src/app/user-details/user-details-component.ts ***!
  \********************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_models_roles_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/roles/role */ "m0fA");
/* harmony import */ var _shared_models_departments_department__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/departments/department */ "ZWsb");
/* harmony import */ var _confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-modal-component/confirm-modal-component */ "Gs7e");
/* harmony import */ var _shared_models_user_user_update_request_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/user/user-update-request-model */ "Rwqm");
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/user/user-service */ "xB9q");
/* harmony import */ var _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/spinner/spinner-service */ "3PAx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/toastr/toastr-service */ "jonD");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");














function UserDetailsComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailsComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* First Name cannot exceeds 50 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailsComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailsComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Last Name cannot exceeds 50 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailsComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Contact Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailsComponent_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", role_r9.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r9.roleName);
} }
function UserDetailsComponent_p_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Please select Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailsComponent_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", department_r10.departmentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](department_r10.departmentName);
} }
function UserDetailsComponent_p_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Please select Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserDetailsComponent {
    constructor(userDetailFormBuilder, userService, spinnerService, router, toastrNotificationService, modalService) {
        this.userDetailFormBuilder = userDetailFormBuilder;
        this.userService = userService;
        this.spinnerService = spinnerService;
        this.router = router;
        this.toastrNotificationService = toastrNotificationService;
        this.modalService = modalService;
        this.roles = Array();
        this.departments = new Array();
    }
    ngOnInit() {
        this.initializeUserDetailFormGroup();
        this.getUserDetailsScreenData();
    }
    initializeUserDetailFormGroup() {
        this.userDetailFormGroup = this.userDetailFormBuilder.group({
            userId: [''],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            contactNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            department: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    getUserDetailsScreenData() {
        this.spinnerService.updateMessage('Getting User Details. Please wait.....');
        this.spinnerService.busy();
        this.userService.getUserDetailScreenData()
            .subscribe((responses) => {
            this.spinnerService.idle();
            console.log(responses);
            this.bindUserDetailsFormGroup(responses);
        }, error => {
            this.spinnerService.idle();
            console.log('Error occured while fetching User details screen data');
        });
    }
    bindUserDetailsFormGroup(responses) {
        if (responses[1].data != null) {
            this.roles = _shared_models_roles_role__WEBPACK_IMPORTED_MODULE_2__["Role"].FormRolesModelArray(responses[1]);
        }
        if (responses[2].data != null) {
            this.departments = _shared_models_departments_department__WEBPACK_IMPORTED_MODULE_3__["Department"].FormDepartmentModelArray(responses[2]);
        }
        this.userDetailFormGroup.patchValue({
            userId: responses[0].data.userId,
            firstName: responses[0].data.firstName,
            lastName: responses[0].data.lastName,
            contactNumber: responses[0].data.contactNumber,
            gender: responses[0].data.gender,
            role: (responses[0].data.roleId == 0) ? '' : responses[0].data.roleId,
            department: (responses[0].data.departmentId == 0) ? '' : responses[0].data.departmentId,
        });
        console.log(this.userDetailFormGroup.value);
    }
    updateUserDetails() {
        if (this.userDetailFormGroup.valid) {
            this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], {
                initialState: {
                    promptMessage: 'Continue to update your details?',
                    callback: (result) => {
                        if (result) {
                            this.spinnerService.updateMessage('Updating details. Please wait.....');
                            this.spinnerService.busy();
                            console.log(this.userDetailFormGroup.value);
                            let userUpdateRequestModel = this.mapFormGroupToUserUpdateRequestModel();
                            this.userService.updateUserDetails(userUpdateRequestModel)
                                .subscribe((response) => {
                                this.userDetailFormGroup.reset();
                                this.spinnerService.idle();
                                this.toastrNotificationService.success('User details updated successfully');
                                this.router.navigate(['/home']);
                            }, error => {
                                this.spinnerService.idle();
                                console.log('Exception occured while registering updating user details');
                            });
                        }
                    }
                }
            });
        }
    }
    mapFormGroupToUserUpdateRequestModel() {
        let userUpdateRequestModel = new _shared_models_user_user_update_request_model__WEBPACK_IMPORTED_MODULE_5__["UserUpdateRequestModel"]();
        userUpdateRequestModel.userId = this.userDetailFormGroup.value.userId * 1;
        userUpdateRequestModel.firstName = this.userDetailFormGroup.value.firstName;
        userUpdateRequestModel.lastName = this.userDetailFormGroup.value.lastName;
        userUpdateRequestModel.contactNumber = '' + this.userDetailFormGroup.value.contactNumber;
        userUpdateRequestModel.gender = this.userDetailFormGroup.value.gender;
        userUpdateRequestModel.roleId = this.userDetailFormGroup.value.role * 1;
        userUpdateRequestModel.departmentId = this.userDetailFormGroup.value.department * 1;
        return userUpdateRequestModel;
    }
    navigateHome() {
        if (this.userDetailFormGroup.dirty) {
            this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], {
                initialState: {
                    promptMessage: 'Discard changes and navigate back to Home page?',
                    callback: (result) => {
                        if (result) {
                            this.router.navigate(['/home']);
                        }
                    }
                }
            });
        }
        else {
            this.router.navigate(['/home']);
        }
    }
}
UserDetailsComponent.ɵfac = function UserDetailsComponent_Factory(t) { return new (t || UserDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"])); };
UserDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDetailsComponent, selectors: [["ng-component"]], decls: 58, vars: 17, consts: [[1, "container-fluid", "reset-controls-container"], [1, "row", "justify-content-center", "align-items-center", "h-100"], [1, "col-md-6"], [1, "col-md-12"], [1, "card"], [1, "card-header", "bg-primary", "text-white"], [1, "card-body"], [3, "formGroup"], [1, "form-group"], ["for", "firstName"], ["type", "text", "name", "firstName", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control"], ["class", "help-block", 4, "ngIf"], ["for", "lastName"], ["type", "text", "name", "lastName", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control"], ["for", "contactNumber"], ["type", "number", "name", "contactNumber", "placeholder", "Contact Number", "formControlName", "contactNumber", 1, "form-control"], ["for", "gender"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle"], [1, "btn", "btn-secondary"], ["type", "radio", "formControlName", "gender", "id", "option1", "value", "M", 3, "checked"], ["type", "radio", "formControlName", "gender", "id", "option2", "value", "F", 3, "checked"], ["for", "role"], ["id", "role", "formControlName", "role", 1, "form-control"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "department"], ["id", "department", "formControlName", "department", 1, "form-control"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-primary", "registration_buttons", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-outline-dark", "ml-3", "registration_buttons", 3, "click"], [1, "help-block"], [3, "value"]], template: function UserDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Edit User details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserDetailsComponent_p_13_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserDetailsComponent_p_14_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserDetailsComponent_p_19_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UserDetailsComponent_p_20_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserDetailsComponent_p_25_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, UserDetailsComponent_option_43_Template, 2, 2, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, UserDetailsComponent_p_44_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, UserDetailsComponent_option_51_Template, 2, 2, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, UserDetailsComponent_p_52_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailsComponent_Template_button_click_54_listener() { return ctx.updateUserDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailsComponent_Template_button_click_56_listener() { return ctx.navigateHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userDetailFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userDetailFormGroup.get("firstName").hasError("required") && ctx.userDetailFormGroup.get("firstName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userDetailFormGroup.get("firstName").hasError("maxlength") && ctx.userDetailFormGroup.get("firstName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userDetailFormGroup.get("lastName").hasError("required") && ctx.userDetailFormGroup.get("lastName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userDetailFormGroup.get("lastName").hasError("maxlength") && ctx.userDetailFormGroup.get("lastName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userDetailFormGroup.get("contactNumber").hasError("required") && ctx.userDetailFormGroup.get("contactNumber").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.userDetailFormGroup.get("gender").value == "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.userDetailFormGroup.get("gender").value == "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.userDetailFormGroup.get("gender").value == "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.userDetailFormGroup.get("gender").value == "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userDetailFormGroup.get("role").hasError("required") && ctx.userDetailFormGroup.get("role").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userDetailFormGroup.get("department").hasError("required") && ctx.userDetailFormGroup.get("department").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.userDetailFormGroup.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], styles: [".reset-controls-container[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%] {\r\n    color: #DD0031;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy1jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMtY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNldC1jb250cm9scy1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uaGVscC1ibG9jayB7XHJcbiAgICBjb2xvcjogI0REMDAzMTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './user-details-component.html',
                styleUrls: [
                    './user-details-component.css'
                ]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrNotificationService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "Oykz":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/departments/departments-service.ts ***!
  \********************************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DepartmentService {
    constructor(http) {
        this.http = http;
    }
    getDepartments() {
        return this.http.post('/api/departments/get_departments', {});
    }
    updateDepartment(department) {
        return this.http.post(`/api/departments/update_department/${department.departmentId}`, { departmentName: department.departmentName });
    }
    addDepartment(department) {
        return this.http.post(`/api/departments/add_department`, { departmentName: department.departmentName });
    }
    deleteDepartment(department) {
        return this.http.delete(`/api/departments/delete_department/${department.departmentId}`);
    }
}
DepartmentService.ɵfac = function DepartmentService_Factory(t) { return new (t || DepartmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DepartmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DepartmentService, factory: DepartmentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "QyGD":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/roles/role-service.ts ***!
  \*******************************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RoleService {
    constructor(http) {
        this.http = http;
    }
    getRoles() {
        return this.http.post('/api/roles/get_roles', {});
    }
    updateRole(role) {
        return this.http.post(`/api/roles/update_role/${role.roleId}`, { roleName: role.roleName });
    }
    addRole(role) {
        return this.http.post(`/api/roles/add_role`, { roleName: role.roleName });
    }
    deleteRole(role) {
        return this.http.delete(`/api/roles/delete_role/${role.roleId}`);
    }
}
RoleService.ɵfac = function RoleService_Factory(t) { return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Rwqm":
/*!*****************************************************************!*\
  !*** ./src/app/shared/models/user/user-update-request-model.ts ***!
  \*****************************************************************/
/*! exports provided: UserUpdateRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateRequestModel", function() { return UserUpdateRequestModel; });
class UserUpdateRequestModel {
}


/***/ }),

/***/ "S8qu":
/*!***********************************************************!*\
  !*** ./src/app/shared/models/user/user-response-model.ts ***!
  \***********************************************************/
/*! exports provided: UserResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResponseModel", function() { return UserResponseModel; });
class UserResponseModel {
    constructor() { }
    static formUserResponseModel(response) {
        let user = new UserResponseModel();
        user.id = response.data.userId;
        user.firstName = response.data.firstName;
        user.lastName = response.data.lastName;
        user.email = response.data.email;
        user.contactNumber = response.data.contactNumber;
        user.gender = response.data.gender;
        user.gender_display = (response.data.gender == 'M') ? 'Male' : 'Female';
        user.isAdmin = response.data.isAdmin;
        user.roleId = response.data.roleId;
        user.roleName = (response.data.roleName == "") ? 'N/A' : response.data.roleName;
        user.departmentId = response.data.departmentId;
        user.departmentName = (response.data.departmentName == "") ? 'N/A' : response.data.departmentName;
        user.reportingManagerId = response.data.reportingManagerId;
        user.reportingManager = (response.data.reportingManager == "") ? 'N/A'
            : response.data.reportingManager;
        return user;
    }
}


/***/ }),

/***/ "SrT9":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/pagination-client.ts ***!
  \***************************************************/
/*! exports provided: PaginationPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPipePipe", function() { return PaginationPipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PaginationPipePipe {
    transform(value, currentPage, perpage) {
        let result = value.filter((curr, index) => {
            return index >= (currentPage - 1) * perpage && index < currentPage * perpage;
        });
        return result;
    }
}
PaginationPipePipe.ɵfac = function PaginationPipePipe_Factory(t) { return new (t || PaginationPipePipe)(); };
PaginationPipePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "paginationPipe", type: PaginationPipePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationPipePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'paginationPipe'
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/spinner/spinner-service */ "3PAx");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(spinnerService, cdRef) {
        this.spinnerService = spinnerService;
        this.cdRef = cdRef;
        this.messageToDisplay = 'Loading...';
    }
    ngOnInit() {
        this.spinnerService.messageObservable.subscribe(message => {
            setTimeout(() => {
                this.messageToDisplay = message;
                this.cdRef.detectChanges();
            }, 0);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[2, "color", "white"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messageToDisplay);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: 'app-component.html',
                styles: []
            }]
    }], function () { return [{ type: _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "UC/9":
/*!**************************************************************************!*\
  !*** ./src/app/departments-component/departments-component.component.ts ***!
  \**************************************************************************/
/*! exports provided: DepartmentsComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponentComponent", function() { return DepartmentsComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_departments_department__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/departments/department */ "ZWsb");
/* harmony import */ var _confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirm-modal-component/confirm-modal-component */ "Gs7e");
/* harmony import */ var _shared_services_departments_departments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/departments/departments-service */ "Oykz");
/* harmony import */ var _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/spinner/spinner-service */ "3PAx");
/* harmony import */ var _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/toastr/toastr-service */ "jonD");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var _shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/pipes/pagination-client */ "SrT9");












function DepartmentsComponentComponent_div_5_table_10_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponentComponent_div_5_table_10_tr_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const department_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.editDepartment(department_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponentComponent_div_5_table_10_tr_8_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const department_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.deleteDepartment(department_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r8.departmentName, "");
} }
function DepartmentsComponentComponent_div_5_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DepartmentsComponentComponent_div_5_table_10_tr_8_Template, 9, 1, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "paginationPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 1, ctx_r2.departmentsToDisplay, ctx_r2.currentPage, ctx_r2.itemsPerPage));
} }
function DepartmentsComponentComponent_div_5_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " No Records Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DepartmentsComponentComponent_div_5_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pagination", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function DepartmentsComponentComponent_div_5_div_12_Template_pagination_pageChanged_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.pageChanged($event); })("ngModelChange", function DepartmentsComponentComponent_div_5_div_12_Template_pagination_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.currentPage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx_r4.departmentsToDisplay.length)("itemsPerPage", ctx_r4.itemsPerPage)("maxSize", ctx_r4.itemsPerPage)("ngModel", ctx_r4.currentPage);
} }
function DepartmentsComponentComponent_div_5_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Department Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DepartmentsComponentComponent_div_5_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Department Name cannot exceeds 50 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DepartmentsComponentComponent_div_5_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DepartmentsComponentComponent_div_5_div_22_div_1_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DepartmentsComponentComponent_div_5_div_22_div_2_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.maxlength);
} }
function DepartmentsComponentComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DepartmentsComponentComponent_div_5_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.searchTerm = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponentComponent_div_5_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.searchDepartment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DepartmentsComponentComponent_div_5_table_10_Template, 10, 5, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DepartmentsComponentComponent_div_5_table_11_Template, 11, 0, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DepartmentsComponentComponent_div_5_div_12_Template, 3, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Department Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DepartmentsComponentComponent_div_5_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.departmentModel.departmentName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Please enter new department missing in database.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DepartmentsComponentComponent_div_5_div_22_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponentComponent_div_5_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.addUpdateDepartment(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponentComponent_div_5_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.resetDepartmentSelection(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.departmentsToDisplay.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.departmentsToDisplay.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.departmentsToDisplay.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.departmentModel.departmentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
} }
class DepartmentsComponentComponent {
    constructor(departmentService, spinnerService, toastrNotificationService, cdRef, modalService) {
        this.departmentService = departmentService;
        this.spinnerService = spinnerService;
        this.toastrNotificationService = toastrNotificationService;
        this.cdRef = cdRef;
        this.modalService = modalService;
        this.departments = new Array();
        this.departmentsToDisplay = new Array();
        this.currentPage = 1;
        this.itemsPerPage = 5;
        this.loading = false;
    }
    ngOnInit() {
        this.resetVariables();
        this.getDepartmentsFromDatabase();
    }
    resetVariables() {
        this.departmentModel = new _shared_models_departments_department__WEBPACK_IMPORTED_MODULE_1__["Department"](0, '');
        this.searchTerm = '';
    }
    getDepartmentsFromDatabase() {
        this.loading = true;
        this.spinnerService.updateMessage('Loading Departments.....');
        this.spinnerService.busy();
        this.departmentService.getDepartments()
            .subscribe((response) => {
            if (response.data != null) {
                this.departments = _shared_models_departments_department__WEBPACK_IMPORTED_MODULE_1__["Department"].FormDepartmentModelArray(response);
                this.departmentsToDisplay = this.departments.slice();
            }
            this.loading = false;
            this.spinnerService.idle();
        }, error => {
            this.loading = false;
            this.spinnerService.idle();
            console.log('Exception occured while fetching departments from Database');
        });
    }
    pageChanged(event) {
        this.currentPage = event.page;
    }
    addUpdateDepartment(departmentForm) {
        if (departmentForm.valid) {
            if (this.departmentModel.departmentId != 0) {
                this.updateDepartment(departmentForm);
            }
            else {
                this.addDepartment(departmentForm);
            }
        }
    }
    updateDepartment(departmentForm) {
        this.spinnerService.updateMessage('Updating Department.....');
        this.spinnerService.busy();
        this.departmentService.updateDepartment(this.departmentModel)
            .subscribe((response) => {
            var department = this.departments.find(r => r.departmentId == this.departmentModel.departmentId);
            if (null !== department) {
                department.departmentName = this.departmentModel.departmentName;
            }
            departmentForm.resetForm();
            this.resetAfterDbOperation();
            this.departmentsToDisplay = this.departments.slice();
            this.spinnerService.idle();
            this.toastrNotificationService.success('Department updated successfully');
        }, error => {
            this.spinnerService.idle();
            console.log('Exception occured while updating department from Database');
        });
    }
    addDepartment(departmentForm) {
        this.spinnerService.updateMessage('Adding Department.....');
        this.spinnerService.busy();
        this.departmentService.addDepartment(this.departmentModel)
            .subscribe((response) => {
            var newDepartment = new _shared_models_departments_department__WEBPACK_IMPORTED_MODULE_1__["Department"](response.data.id, response.data.departmentName);
            this.departments.push(newDepartment);
            this.departmentsToDisplay = this.departments.slice();
            this.resetAfterDbOperation();
            departmentForm.resetForm();
            this.spinnerService.idle();
            this.toastrNotificationService.success('Department added successfully');
        }, error => {
            this.spinnerService.idle();
            console.log('Exception occured while adding departments to Database');
        });
    }
    editDepartment(department) {
        this.departmentModel = new _shared_models_departments_department__WEBPACK_IMPORTED_MODULE_1__["Department"](department.departmentId, department.departmentName);
    }
    resetDepartmentSelection(departmentForm) {
        this.resetVariables();
        departmentForm.resetForm();
        this.departmentsToDisplay = this.departments.slice();
        setTimeout(() => {
            this.currentPage = 1;
        });
        this.cdRef.detectChanges();
    }
    resetAfterDbOperation() {
        this.resetVariables();
        setTimeout(() => {
            this.currentPage = 1;
        });
        this.cdRef.detectChanges();
    }
    deleteDepartment(department) {
        this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"], {
            initialState: {
                promptMessage: 'Are you sure you want to delete this record?',
                callback: (result) => {
                    if (result) {
                        this.spinnerService.updateMessage('Deleting Department.....');
                        this.spinnerService.busy();
                        this.departmentService.deleteDepartment(department)
                            .subscribe((response) => {
                            this.departments = this.departments.filter(r => r.departmentId != department.departmentId);
                            this.departmentsToDisplay = this.departments.slice();
                            this.resetAfterDbOperation();
                            this.spinnerService.idle();
                            this.toastrNotificationService.success('Department deleted successfully');
                        }, error => {
                            this.spinnerService.idle();
                            console.log('Exception occured while deleting departments from Database');
                        });
                    }
                }
            }
        });
    }
    searchDepartment() {
        if (this.searchTerm != '' && this.searchTerm != null && this.searchTerm != undefined) {
            this.departmentsToDisplay = this.departments.filter(r => r.departmentName.toLocaleLowerCase()
                .indexOf(this.searchTerm.toLocaleLowerCase()) != -1);
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
        else {
            this.departmentsToDisplay = this.departments.slice();
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
    }
}
DepartmentsComponentComponent.ɵfac = function DepartmentsComponentComponent_Factory(t) { return new (t || DepartmentsComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_departments_departments_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"])); };
DepartmentsComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentsComponentComponent, selectors: [["app-departments-component"]], decls: 6, vars: 1, consts: [[1, "row", "mt-3"], [1, "col-md-7", "offset-2"], [1, "title_department_management"], [4, "ngIf"], ["novalidate", ""], ["departmentForm", "ngForm"], [1, "input-group", "col-md-5", "department_search_control"], ["placeholder", "search", "value", "search", "name", "search-input", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-search"], [1, "row", "table_container_row"], [1, "col-md-12", "table_container_column"], ["name", "departmentsTable", "class", "table table-bordered table-hover departments_table", 4, "ngIf"], ["name", "nodepartmentsTable", "class", "table table-bordered table-hover mt-5 departments_table", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-xs-12", "col-12"], [1, "form-group"], ["for", "departmentName"], ["type", "text", "name", "departmentName", "placeholder", "Department Name", "required", "", "maxlength", "50", 1, "form-control", 3, "ngModel", "ngModelChange"], ["departmentName", "ngModel"], ["id", "roleHelp", 1, "form-text", "text-muted"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-warning", "ml-3", 3, "disabled", "click"], ["name", "departmentsTable", 1, "table", "table-bordered", "table-hover", "departments_table"], [1, "thead-dark"], ["scope", "col"], ["class", "table-style", 4, "ngFor", "ngForOf"], [1, "table-style"], ["scope", "row"], [1, "department_table_controls"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-pencil-square-o", "fa-lg"], [1, "fa", "fa-trash-o", "fa-lg"], ["name", "nodepartmentsTable", 1, "table", "table-bordered", "table-hover", "mt-5", "departments_table"], ["colspan", "3", 1, "department_table_controls"], [1, "col-xs-12", "col-12", "pager-div"], ["name", "paginationControl", 3, "totalItems", "itemsPerPage", "maxSize", "ngModel", "pageChanged", "ngModelChange"], [1, "alert", "alert-danger"]], template: function DepartmentsComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Departments Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DepartmentsComponentComponent_div_5_Template, 27, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"]], pipes: [_shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_10__["PaginationPipePipe"]], styles: [".title_department_management[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.pager-div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.department_table_controls[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.department_search_control[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.table_container_row[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.table_container_column[_ngcontent-%COMP%] {\r\n    min-height: 400px;\r\n    max-height: 400px; \r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.departments_table[_ngcontent-%COMP%] {\r\n    margin-top: 20px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwYXJ0bWVudHMtY29tcG9uZW50L2RlcGFydG1lbnRzLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvZGVwYXJ0bWVudHMtY29tcG9uZW50L2RlcGFydG1lbnRzLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlX2RlcGFydG1lbnRfbWFuYWdlbWVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdlci1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZGVwYXJ0bWVudF90YWJsZV9jb250cm9scyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZXBhcnRtZW50X3NlYXJjaF9jb250cm9sIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udGFibGVfY29udGFpbmVyX3JvdyB7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnRhYmxlX2NvbnRhaW5lcl9jb2x1bW4ge1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDsgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmRlcGFydG1lbnRzX3RhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentsComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-departments-component',
                templateUrl: './departments-component.component.html',
                styleUrls: ['./departments-component.component.css']
            }]
    }], function () { return [{ type: _shared_services_departments_departments_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"] }, { type: _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"] }, { type: _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrNotificationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "UwIm":
/*!********************************************************!*\
  !*** ./src/app/shared/services/goals/goals-service.ts ***!
  \********************************************************/
/*! exports provided: GoalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsService", function() { return GoalsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class GoalsService {
    constructor(http) {
        this.http = http;
    }
    getGoals() {
        return this.http.post('/api/goals/get_goals', {});
    }
    updateGoal(goal) {
        return this.http.post(`/api/goals/update_goal/${goal.goalId}`, { goalName: goal.goalName });
    }
    addGoal(goal) {
        return this.http.post(`/api/goals/add_goal`, { goalName: goal.goalName });
    }
    deleteGoal(goal) {
        return this.http.delete(`/api/goals/delete_goal/${goal.goalId}`);
    }
}
GoalsService.ɵfac = function GoalsService_Factory(t) { return new (t || GoalsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GoalsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GoalsService, factory: GoalsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoalsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "X5XA":
/*!**********************************************!*\
  !*** ./src/app/shared/constant/constants.ts ***!
  \**********************************************/
/*! exports provided: Constant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constant", function() { return Constant; });
const Constant = {
    JWT_TOKEN_KEY: 'user_jwt_token',
    ACTIVE_ITERATION: 'ACTIVE',
    NOTACTIVE: 'NOT ACTIVE',
    DELETED: 'DELETED',
    LOCKED: 'LOCKED'
};


/***/ }),

/***/ "X8+g":
/*!***********************************************************************!*\
  !*** ./src/app/shared/models/user/reporting-manager-request-model.ts ***!
  \***********************************************************************/
/*! exports provided: ReportingManagerRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingManagerRequest", function() { return ReportingManagerRequest; });
class ReportingManagerRequest {
}


/***/ }),

/***/ "X97Q":
/*!***********************************************************************!*\
  !*** ./src/app/reporting-manager/reporting-request-routing-module.ts ***!
  \***********************************************************************/
/*! exports provided: ReportingManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingManagerRoutingModule", function() { return ReportingManagerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_reporting_manager_requests_new_reporting_manager_request_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-reporting-manager-requests/new-reporting-manager-request-component */ "wghx");
/* harmony import */ var _shared_guards_check_user_authenticated_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/guards/check-user-authenticated-guard */ "Dste");
/* harmony import */ var _view_reporting_manger_requests_reporting_manager_requests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-reporting-manger-requests/reporting-manager-requests-component */ "6vQF");







const reportingManagerRoutes = [
    { path: 'reporting-manager-request', component: _add_reporting_manager_requests_new_reporting_manager_request_component__WEBPACK_IMPORTED_MODULE_2__["AddReportingManagerRequestComponent"], canActivate: [_shared_guards_check_user_authenticated_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
    { path: 'view-reporting-manager-request', component: _view_reporting_manger_requests_reporting_manager_requests_component__WEBPACK_IMPORTED_MODULE_4__["ReportingManagerRequestsComponent"], canActivate: [_shared_guards_check_user_authenticated_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] },
];
class ReportingManagerRoutingModule {
}
ReportingManagerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportingManagerRoutingModule });
ReportingManagerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportingManagerRoutingModule_Factory(t) { return new (t || ReportingManagerRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(reportingManagerRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportingManagerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportingManagerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(reportingManagerRoutes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngx-bootstrap-module */ "rEVn");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_jwt_jwt_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/jwt/jwt-module */ "kxgZ");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared-module */ "+fd8");
/* harmony import */ var _accounts_accounts_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./accounts/accounts-module */ "9gZX");
/* harmony import */ var _user_details_user_details_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-details/user-details-module */ "qukG");
/* harmony import */ var _reporting_manager_reporting_request_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reporting-manager/reporting-request-module */ "u58j");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _roles_component_roles_component_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./roles-component/roles-component.component */ "/oat");
/* harmony import */ var _departments_component_departments_component_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./departments-component/departments-component.component */ "UC/9");
/* harmony import */ var _goals_goals_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./goals/goals-component */ "Mgfn");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home-component */ "qq55");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./unauthorized/unauthorized-component */ "cd6N");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./forbidden/forbidden-component */ "eDgl");
/* harmony import */ var _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/interceptors/error-interceptor */ "tlHB");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_22__["HttpErrorInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _shared_jwt_jwt_module__WEBPACK_IMPORTED_MODULE_8__["AppJWTModule"],
            _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["NgxBootstrapModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                preventDuplicates: true,
                positionClass: 'toast-bottom-right',
            }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _accounts_accounts_module__WEBPACK_IMPORTED_MODULE_11__["AccountsModule"],
            _user_details_user_details_module__WEBPACK_IMPORTED_MODULE_12__["UserDetailsModule"],
            _reporting_manager_reporting_request_module__WEBPACK_IMPORTED_MODULE_13__["ReportingManagerModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__["NavBarComponent"],
        _roles_component_roles_component_component__WEBPACK_IMPORTED_MODULE_16__["RolesComponentComponent"],
        _departments_component_departments_component_component__WEBPACK_IMPORTED_MODULE_17__["DepartmentsComponentComponent"],
        _goals_goals_component__WEBPACK_IMPORTED_MODULE_18__["GoalsComponentComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
        _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_20__["UnAuthorizedComponent"],
        _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_21__["ForbiddenComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _shared_jwt_jwt_module__WEBPACK_IMPORTED_MODULE_8__["AppJWTModule"],
        _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["NgxBootstrapModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _accounts_accounts_module__WEBPACK_IMPORTED_MODULE_11__["AccountsModule"],
        _user_details_user_details_module__WEBPACK_IMPORTED_MODULE_12__["UserDetailsModule"],
        _reporting_manager_reporting_request_module__WEBPACK_IMPORTED_MODULE_13__["ReportingManagerModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__["NavBarComponent"],
                    _roles_component_roles_component_component__WEBPACK_IMPORTED_MODULE_16__["RolesComponentComponent"],
                    _departments_component_departments_component_component__WEBPACK_IMPORTED_MODULE_17__["DepartmentsComponentComponent"],
                    _goals_goals_component__WEBPACK_IMPORTED_MODULE_18__["GoalsComponentComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                    _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_20__["UnAuthorizedComponent"],
                    _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_21__["ForbiddenComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _shared_jwt_jwt_module__WEBPACK_IMPORTED_MODULE_8__["AppJWTModule"],
                    _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["NgxBootstrapModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                        preventDuplicates: true,
                        positionClass: 'toast-bottom-right',
                    }),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                    _accounts_accounts_module__WEBPACK_IMPORTED_MODULE_11__["AccountsModule"],
                    _user_details_user_details_module__WEBPACK_IMPORTED_MODULE_12__["UserDetailsModule"],
                    _reporting_manager_reporting_request_module__WEBPACK_IMPORTED_MODULE_13__["ReportingManagerModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_22__["HttpErrorInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZWsb":
/*!*********************************************************!*\
  !*** ./src/app/shared/models/departments/department.ts ***!
  \*********************************************************/
/*! exports provided: Department */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Department", function() { return Department; });
class Department {
    constructor(departmentId, departmentName) {
        this.departmentId = departmentId;
        this.departmentName = departmentName;
    }
    static FormDepartmentModelArray(response) {
        var departmentArray = new Array();
        for (var data of response.data) {
            var department = new Department(data.id, data.departmentName);
            departmentArray.push(department);
        }
        return departmentArray;
    }
}


/***/ }),

/***/ "amK/":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/accounts/accounts-service.ts ***!
  \**************************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _constant_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constant/constants */ "X5XA");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");








class AccountService {
    constructor(http) {
        this.http = http;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    isLoggedInObservable() {
        return this.loggedIn.asObservable();
    }
    registerUser(registrationRequestModel) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        const httpOptions = {
            headers: headers
        };
        return this.http.post('/api/accounts/register', registrationRequestModel, httpOptions);
    }
    loginUser(loginRequestModel) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        const httpOptions = {
            headers: headers
        };
        return this.http.post('/api/accounts/login', loginRequestModel, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            this.saveTokenToStorage(response);
            return response;
        }));
    }
    passwordReset(passwordResetRequestModel) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        const httpOptions = {
            headers: headers
        };
        return this.http.post('/api/accounts/reset_password_link', passwordResetRequestModel, httpOptions);
    }
    updatePassword(updatepasswordResetRequestModel) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        const httpOptions = {
            headers: headers
        };
        return this.http.post('/api/accounts/update_password', updatepasswordResetRequestModel, httpOptions);
    }
    saveTokenToStorage(response) {
        if (response.data != null) {
            localStorage.setItem(_constant_constants__WEBPACK_IMPORTED_MODULE_4__["Constant"].JWT_TOKEN_KEY, response.data.token);
            this.loggedIn.next(true);
        }
    }
    removeTokenFromStorage() {
        localStorage.removeItem(_constant_constants__WEBPACK_IMPORTED_MODULE_4__["Constant"].JWT_TOKEN_KEY);
        this.loggedIn.next(false);
    }
    getTokenFromStorage() {
        return localStorage.getItem(_constant_constants__WEBPACK_IMPORTED_MODULE_4__["Constant"].JWT_TOKEN_KEY);
    }
    getUserName() {
        let token = this.getTokenFromStorage();
        if (token != null) {
            const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
            let decodedToken = helper.decodeToken(token);
            if (decodedToken != null) {
                this.loggedIn.next(true);
                return decodedToken.UserName;
            }
        }
    }
    isAuthenticated() {
        let token = this.getTokenFromStorage();
        if (token == null) {
            return false;
        }
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
        const decodedToken = helper.decodeToken(token);
        const expirationDate = helper.getTokenExpirationDate(token);
        const isExpired = helper.isTokenExpired(token);
        return !isExpired;
    }
    isAdminUser() {
        let token = this.getTokenFromStorage();
        if (token != null) {
            const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"]();
            let decodedToken = helper.decodeToken(token);
            if (decodedToken != null) {
                this.loggedIn.next(true);
                return (decodedToken.IsAdmin == 'True');
            }
        }
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "bedm":
/*!*************************************************************************!*\
  !*** ./src/app/accounts/user-registration/password-match-validation.ts ***!
  \*************************************************************************/
/*! exports provided: PasswordMatchValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordMatchValidation", function() { return PasswordMatchValidation; });
class PasswordMatchValidation {
    static matchPassword(c) {
        if (c.get('password').value !== c.get('confirmPassword').value) {
            return { invalidPassword: true };
        }
        return null;
    }
}


/***/ }),

/***/ "cd6N":
/*!********************************************************!*\
  !*** ./src/app/unauthorized/unauthorized-component.ts ***!
  \********************************************************/
/*! exports provided: UnAuthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnAuthorizedComponent", function() { return UnAuthorizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/login"]; };
class UnAuthorizedComponent {
}
UnAuthorizedComponent.ɵfac = function UnAuthorizedComponent_Factory(t) { return new (t || UnAuthorizedComponent)(); };
UnAuthorizedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnAuthorizedComponent, selectors: [["ng-component"]], decls: 13, vars: 2, consts: [[1, "container"], ["id", "center"], [2, "width", "250px", "text-align", "center"], [1, "fa", "fa-exclamation-triangle"], ["id", "btn-sign-up", 1, "btn", "btn-outline-danger", 3, "routerLink"]], template: function UnAuthorizedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "401 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Unauthorized");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Please login to your account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#center[_ngcontent-%COMP%] {\n    position: fixed !important;\n    top: 50%;\n    left: 45%;\n    margin-top: -50px;\n    margin-left: -50px;\n    width: 300px;\n    height: 200px;\n    color: #DD0031;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC1jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC91bmF1dGhvcml6ZWQvdW5hdXRob3JpemVkLWNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2VudGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA0NSU7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGNvbG9yOiAjREQwMDMxO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnAuthorizedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './unauthorized-component.html',
                styleUrls: [
                    './unauthorized-component.css'
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "eDgl":
/*!**************************************************!*\
  !*** ./src/app/forbidden/forbidden-component.ts ***!
  \**************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/login"]; };
class ForbiddenComponent {
}
ForbiddenComponent.ɵfac = function ForbiddenComponent_Factory(t) { return new (t || ForbiddenComponent)(); };
ForbiddenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForbiddenComponent, selectors: [["ng-component"]], decls: 13, vars: 2, consts: [[1, "container"], ["id", "center"], [2, "width", "250px", "text-align", "center"], [1, "fa", "fa-exclamation-triangle"], ["id", "btn-sign-up", 1, "btn", "btn-outline-danger", 3, "routerLink"]], template: function ForbiddenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "403 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Access Denied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Please login to your account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#center[_ngcontent-%COMP%] {\n    position: fixed !important;\n    top: 50%;\n    left: 45%;\n    margin-top: -50px;\n    margin-left: -50px;\n    width: 300px;\n    height: 200px;\n    color: #DD0031;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yYmlkZGVuL2ZvcmJpZGRlbi1jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb3JiaWRkZW4vZm9yYmlkZGVuLWNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2VudGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA0NSU7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGNvbG9yOiAjREQwMDMxO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForbiddenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './forbidden-component.html',
                styleUrls: [
                    './forbidden-component.css'
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "hWoZ":
/*!*************************************************************!*\
  !*** ./src/app/user-details/user-details-routing-module.ts ***!
  \*************************************************************/
/*! exports provided: UserDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsRoutingModule", function() { return UserDetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-details-component */ "OYND");
/* harmony import */ var _shared_guards_check_user_authenticated_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/guards/check-user-authenticated-guard */ "Dste");






const userDetailsRoutes = [
    { path: 'user-details', component: _user_details_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailsComponent"], canActivate: [_shared_guards_check_user_authenticated_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] }
];
class UserDetailsRoutingModule {
}
UserDetailsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserDetailsRoutingModule });
UserDetailsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserDetailsRoutingModule_Factory(t) { return new (t || UserDetailsRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userDetailsRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userDetailsRoutes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jonD":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/toastr/toastr-service.ts ***!
  \**********************************************************/
/*! exports provided: ToastrNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrNotificationService", function() { return ToastrNotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");



class ToastrNotificationService {
    constructor(toastrService) {
        this.toastrService = toastrService;
    }
    success(message) {
        this.toastrService.success(message);
    }
    failed(message) {
        this.toastrService.error(message);
    }
    warning(message) {
        this.toastrService.warning(message);
    }
}
ToastrNotificationService.ɵfac = function ToastrNotificationService_Factory(t) { return new (t || ToastrNotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
ToastrNotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastrNotificationService, factory: ToastrNotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrNotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "kMgH":
/*!************************************************************************!*\
  !*** ./src/app/shared/models/user/reporting-manager-response-model.ts ***!
  \************************************************************************/
/*! exports provided: ReportingManagerResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingManagerResponseModel", function() { return ReportingManagerResponseModel; });
class ReportingManagerResponseModel {
    static FormReportingRequestsModelArray(response) {
        var reportingRequestsArray = new Array();
        for (var data of response.data) {
            var reportingRequest = new ReportingManagerResponseModel();
            reportingRequest.reportingManagerRequestId = data.reportingManagerRequestId;
            reportingRequest.reportedUserId = data.reportedUserId;
            reportingRequest.reportedUserEmail = data.reportedUserEmail;
            reportingRequest.currentReportingManagerId = data.currentReportingManagerId;
            reportingRequest.currentReportingManagerEmail = data.currentReportingManagerEmail;
            reportingRequest.newReportingManagerId = data.newReportingManagerId;
            reportingRequest.newReportingManagerEmail = data.newReportingManagerEmail;
            reportingRequest.status = data.status;
            reportingRequestsArray.push(reportingRequest);
        }
        return reportingRequestsArray;
    }
}


/***/ }),

/***/ "kxgZ":
/*!******************************************!*\
  !*** ./src/app/shared/jwt/jwt-module.ts ***!
  \******************************************/
/*! exports provided: tokenGetter, AppJWTModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppJWTModule", function() { return AppJWTModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _constant_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/constants */ "X5XA");





function tokenGetter() {
    return localStorage.getItem(_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].JWT_TOKEN_KEY);
}
class AppJWTModule {
}
AppJWTModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppJWTModule });
AppJWTModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppJWTModule_Factory(t) { return new (t || AppJWTModule)(); }, imports: [[
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtModule"].forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    allowedDomains: ["*"],
                    disallowedRoutes: [],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppJWTModule, { imports: [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppJWTModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtModule"].forRoot({
                        config: {
                            tokenGetter: tokenGetter,
                            allowedDomains: ["*"],
                            disallowedRoutes: [],
                        },
                    }),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "m0fA":
/*!*********************************************!*\
  !*** ./src/app/shared/models/roles/role.ts ***!
  \*********************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
class Role {
    constructor(roleId, roleName) {
        this.roleId = roleId;
        this.roleName = roleName;
    }
    static FormRolesModelArray(response) {
        var rolesArray = new Array();
        for (var data of response.data) {
            var role = new Role(data.roleId, data.roleName);
            rolesArray.push(role);
        }
        return rolesArray;
    }
}


/***/ }),

/***/ "qMtO":
/*!*************************************************************!*\
  !*** ./src/app/accounts/user-login/user-login-component.ts ***!
  \*************************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_accounts_user_login_login_request_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/accounts/user-login/login-request-model */ "+OAi");
/* harmony import */ var _shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/accounts/accounts-service */ "amK/");
/* harmony import */ var _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/spinner/spinner-service */ "3PAx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function UserLoginComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserLoginComponent_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserLoginComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserLoginComponent_div_40_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserLoginComponent_div_40_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r1.errors == null ? null : _r1.errors.required) && (_r1.dirty || _r1.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r2.errors == null ? null : _r2.errors.required) && (_r2.dirty || _r2.touched));
} }
const _c0 = function () { return ["/register"]; };
const _c1 = function () { return ["/need-help/reset-password"]; };
class UserLoginComponent {
    constructor(accountService, spinnerService, router) {
        this.accountService = accountService;
        this.spinnerService = spinnerService;
        this.router = router;
        this.loginModel = new _shared_models_accounts_user_login_login_request_model__WEBPACK_IMPORTED_MODULE_1__["LoginRequestModel"]();
    }
    ngOnInit() {
        this.accountService.removeTokenFromStorage();
    }
    loginUser(loginForm) {
        if (loginForm.valid) {
            this.spinnerService.updateMessage('Processing Login request. Please wait.....');
            this.spinnerService.busy();
            this.accountService.loginUser(this.loginModel)
                .subscribe((response) => {
                this.spinnerService.idle();
                console.log(response);
                if (response.data != null) {
                    this.router.navigate(['/home']);
                }
            }, error => {
                this.spinnerService.idle();
                console.log('Exception occured while processing login request');
            });
        }
    }
}
UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) { return new (t || UserLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserLoginComponent, selectors: [["ng-component"]], decls: 41, vars: 8, consts: [[1, "container-fluid", "h-100"], [1, "row", "h-100", "login-container-row"], [1, "col-md-7", "offset-3"], [1, "row"], [1, "col-md-10", "mt-3", "login-controls"], [1, "container", "h-100"], [1, "d-flex", "justify-content-center", "h-100"], [1, "user_card"], [1, "d-flex", "justify-content-center", "form_container"], [1, "login_form"], ["loginForm", "ngForm"], [1, "row", "login_controls_container"], [1, "col-md-12"], [1, "input-group"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", "fa-user"], ["type", "text", "name", "userName", "placeholder", "username", "required", "", 1, "form-control", "input_user", 3, "ngModel", "ngModelChange"], ["userName", "ngModel"], [1, "form-text", "text-muted", "email_descriptor"], [1, "input-group", "mb-2"], [1, "fa", "fa-key"], ["type", "password", "name", "password", "placeholder", "password", "required", "", 1, "form-control", "input_pass", 3, "ngModel", "ngModelChange"], ["passwordControl", "ngModel"], [1, "d-flex", "justify-content-center", "mt-3", "login_container"], ["type", "submit", "name", "button", 1, "btn", "login_btn", 3, "disabled", "click"], [1, "mt-4"], [1, "d-flex", "justify-content-center", "links"], [1, "ml-2", 3, "routerLink"], [3, "routerLink"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "alert", "alert-danger", "mt-3"], [4, "ngIf"]], template: function UserLoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserLoginComponent_Template_input_ngModelChange_17_listener($event) { return ctx.loginModel.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Please enter your email as user name.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserLoginComponent_Template_input_ngModelChange_25_listener($event) { return ctx.loginModel.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLoginComponent_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.loginUser(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, UserLoginComponent_div_40_Template, 3, 2, "div", 30);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r1.errors == null ? null : _r1.errors.required) && (_r1.dirty || _r1.touched) || (_r2.errors == null ? null : _r2.errors.required) && (_r2.dirty || _r2.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".login-container-row[_ngcontent-%COMP%] {\n    background: url('grey_back.4b9c86341b3055324704.png') round;\n}\n\n\n.login_controls_container[_ngcontent-%COMP%] {\n    margin-top: 50px;\n}\n\n\n.user_card[_ngcontent-%COMP%] {\n    height: 420px;\n    width: 500px;\n    margin-top: 50px;\n    margin-bottom: auto;\n    background: linear-gradient(-37deg,#a2dd7a,#26c07c);\n    position: relative;\n    display: flex;\n    justify-content: center;\n    padding: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    border-radius: 5px;\n}\n\n\n.form_container[_ngcontent-%COMP%] {\n \n}\n\n\n.login_btn[_ngcontent-%COMP%] {\n    width: 100%;\n    background: #0a4764 !important;\n    color: white !important;\n}\n\n\n.login_btn[_ngcontent-%COMP%]:hover {\n\n    background: white !important;\n    color: #0a4764 !important;\n}\n\n\n.login_btn[_ngcontent-%COMP%]:focus {\n   box-shadow: none !important;\n   outline: 0px !important;\n}\n\n\n.login_container[_ngcontent-%COMP%] {\n    padding: 0 2rem;\n    width: 60%;\n    margin: 0 auto;\n}\n\n\n.input-group-text[_ngcontent-%COMP%] {\n    background: #0a4764 !important;\n    color: white !important;\n    border: 0 !important;\n    border-radius: 0.25rem 0 0 0.25rem !important;\n}\n\n\n.input_user[_ngcontent-%COMP%], .input_pass[_ngcontent-%COMP%]\n{\n    height:42px;\n}\n\n\n.input-group[_ngcontent-%COMP%] {\n    height: 42px;\n}\n\n\n.input_user[_ngcontent-%COMP%], .input_pass[_ngcontent-%COMP%]:focus {\n        box-shadow: none !important;\n        outline: 0px !important;\n}\n\n\n.login_form[_ngcontent-%COMP%]{\n    width: 350px;\n}\n\n\na[_ngcontent-%COMP%]{\n    color: white;\n}\n\n\na[_ngcontent-%COMP%]:hover {\n        color: #c0392b;\n        cursor: pointer;\n}\n\n\n.email_descriptor[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    color: white !important;\n}\n\n\n.login_btn.disabled[_ngcontent-%COMP%], .login_btn[_ngcontent-%COMP%]:disabled {\n    opacity: .65;\n    background: darkgray !important;\n    color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvdXNlci1sb2dpbi91c2VyLWxvZ2luLWNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyREFBMkU7QUFDL0U7OztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtREFBbUQ7SUFDbkQsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLDRFQUE0RTtJQUM1RSxvRkFBb0Y7SUFDcEYsaUZBQWlGO0lBQ2pGLGtCQUFrQjtBQUN0Qjs7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7OztBQUVBOztJQUVJLDRCQUE0QjtJQUM1Qix5QkFBeUI7QUFDN0I7OztBQUdBO0dBQ0csMkJBQTJCO0dBQzNCLHVCQUF1QjtBQUMxQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsNkNBQTZDO0FBQ2pEOzs7QUFFQTs7O0lBR0ksV0FBVztBQUNmOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBOztRQUVRLDJCQUEyQjtRQUMzQix1QkFBdUI7QUFDL0I7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtRQUNRLGNBQWM7UUFDZCxlQUFlO0FBQ3ZCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50cy91c2VyLWxvZ2luL3VzZXItbG9naW4tY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXItcm93IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZ3JleV9iYWNrLjRiOWM4NjM0MWIzMDU1MzI0NzA0LnBuZ1wiKSByb3VuZDtcbn1cblxuXG4ubG9naW5fY29udHJvbHNfY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4udXNlcl9jYXJkIHtcbiAgICBoZWlnaHQ6IDQyMHB4O1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0zN2RlZywjYTJkZDdhLCMyNmMwN2MpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZvcm1fY29udGFpbmVyIHtcbiAvKiAgIG1hcmdpbi10b3A6IDEwMHB4OyovXG59XG5cblxuLmxvZ2luX2J0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzBhNDc2NCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubG9naW5fYnRuOmhvdmVyIHtcblxuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMwYTQ3NjQgIWltcG9ydGFudDtcbn1cblxuXG4ubG9naW5fYnRuOmZvY3VzIHtcbiAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW5fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmlucHV0LWdyb3VwLXRleHQge1xuICAgIGJhY2tncm91bmQ6ICMwYTQ3NjQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAgMCAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dF91c2VyLFxuLmlucHV0X3Bhc3NcbntcbiAgICBoZWlnaHQ6NDJweDtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgICBoZWlnaHQ6IDQycHg7XG59XG5cbi5pbnB1dF91c2VyLFxuLmlucHV0X3Bhc3M6Zm9jdXMge1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW5fZm9ybXtcbiAgICB3aWR0aDogMzUwcHg7XG59XG5cbmF7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5hOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNjMDM5MmI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVtYWlsX2Rlc2NyaXB0b3Ige1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbl9idG4uZGlzYWJsZWQsIC5sb2dpbl9idG46ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IC42NTtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZ3JheSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './user-login-component.html',
                styleUrls: ['./user-login-component.css']
            }]
    }], function () { return [{ type: _shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }, { type: _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "qq55":
/*!****************************************!*\
  !*** ./src/app/home/home-component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_user_user_response_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/user/user-response-model */ "S8qu");
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/user/user-service */ "xB9q");
/* harmony import */ var _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/spinner/spinner-service */ "3PAx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Below are your details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Reporting Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.navigateEditUserDetailsPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Edit Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userModel.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userModel.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userModel.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userModel.contactNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userModel.gender_display);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userModel.departmentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userModel.roleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userModel.reportingManager);
} }
class HomeComponent {
    constructor(userService, spinnerService, router) {
        this.userService = userService;
        this.spinnerService = spinnerService;
        this.router = router;
        this.isLoading = false;
    }
    ngOnInit() {
        this.loadUser();
    }
    loadUser() {
        this.isLoading = true;
        this.spinnerService.updateMessage('Loading User details.....');
        this.spinnerService.busy();
        this.userService.getUser()
            .subscribe((response) => {
            this.isLoading = false;
            this.spinnerService.idle();
            this.userModel = _shared_models_user_user_response_model__WEBPACK_IMPORTED_MODULE_1__["UserResponseModel"].formUserResponseModel(response);
            console.log(this.userModel);
        }, error => {
            this.isLoading = false;
            this.spinnerService.idle();
            console.log('Error occured while fetching user details');
        });
    }
    navigateEditUserDetailsPage() {
        this.router.navigate(['/user-details']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [["class", "container-fluid reset-controls-container", 4, "ngIf"], [1, "container-fluid", "reset-controls-container"], [1, "row", "justify-content-center", "align-items-center", "h-100"], [1, "col-md-6"], [1, "col-md-12"], [1, "card"], [1, "card-header", "bg-primary", "text-white"], [1, "card-body"], ["homeForm", "ngForm"], [1, "form-group", "row", "control-row"], [1, "label_controls", "col-form-label", "col-sm-4"], [1, "input_controls", "col-sm-8"], ["type", "text", "readonly", "", "name", "firstName", 1, "form-control-plaintext", 3, "ngModel"], ["type", "text", "readonly", "", "name", "lastName", 1, "form-control-plaintext", 3, "ngModel"], ["type", "text", "readonly", "", "name", "email", 1, "form-control-plaintext", 3, "ngModel"], ["type", "text", "readonly", "", "name", "contactNumber", 1, "form-control-plaintext", 3, "ngModel"], ["type", "text", "readonly", "", "name", "gender", 1, "form-control-plaintext", 3, "ngModel"], ["type", "text", "readonly", "", "name", "departmentName", 1, "form-control-plaintext", 3, "ngModel"], ["type", "text", "readonly", "", "name", "role", 1, "form-control-plaintext", 3, "ngModel"], ["type", "text", "readonly", "", "name", "reportinManager", 1, "form-control-plaintext", 3, "ngModel"], [1, "card-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 53, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.userModel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".reset-controls-container[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLWNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUtY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNldC1jb250cm9scy1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './home-component.html',
                styleUrls: ['./home-component.css']
            }]
    }], function () { return [{ type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "qukG":
/*!*****************************************************!*\
  !*** ./src/app/user-details/user-details-module.ts ***!
  \*****************************************************/
/*! exports provided: UserDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsModule", function() { return UserDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-module */ "+fd8");
/* harmony import */ var _user_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-details-component */ "OYND");
/* harmony import */ var _user_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-details-routing-module */ "hWoZ");





class UserDetailsModule {
}
UserDetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserDetailsModule });
UserDetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserDetailsModule_Factory(t) { return new (t || UserDetailsModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _user_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserDetailsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserDetailsModule, { declarations: [_user_details_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailsComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _user_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserDetailsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _user_details_component__WEBPACK_IMPORTED_MODULE_2__["UserDetailsComponent"]
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _user_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserDetailsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "rEVn":
/*!*****************************************!*\
  !*** ./src/app/ngx-bootstrap-module.ts ***!
  \*****************************************/
/*! exports provided: NgxBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBootstrapModule", function() { return NgxBootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");








class NgxBootstrapModule {
}
NgxBootstrapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxBootstrapModule });
NgxBootstrapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxBootstrapModule_Factory(t) { return new (t || NgxBootstrapModule)(); }, imports: [[
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"].forRoot()
        ], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationModule"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxBootstrapModule, { imports: [ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"]], exports: [ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationModule"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"],
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxBootstrapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"].forRoot()
                ],
                exports: [
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"],
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "tlHB":
/*!**********************************************************!*\
  !*** ./src/app/shared/interceptors/error-interceptor.ts ***!
  \**********************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toastr/toastr-service */ "jonD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/spinner/spinner-service */ "3PAx");







class HttpErrorInterceptor {
    constructor(toastrNotificationService, router, spinnerService) {
        this.toastrNotificationService = toastrNotificationService;
        this.router = router;
        this.spinnerService = spinnerService;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            var _a;
            let errorMessage = '';
            let errorObject = {};
            if (error.status == 401 || error.status == 403) {
                this.spinnerService.idle();
                if (error.status == 401) {
                    this.router.navigate(['/unauthorized']);
                }
                else {
                    this.router.navigate(['/forbidden']);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
            }
            else {
                if (error.status == 400) {
                    if (error.error.errors != null) {
                        errorObject.modelStateValidationErros = error.error.errors;
                    }
                }
                errorMessage = (_a = error.error.errorMessage) !== null && _a !== void 0 ? _a : 'Exception occured while processing request';
                errorObject.errorMessage = errorMessage;
                this.toastrNotificationService.failed(errorMessage);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorObject);
            }
        }));
    }
}
HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) { return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"])); };
HttpErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HttpErrorInterceptor, factory: HttpErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HttpErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrNotificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"] }]; }, null); })();


/***/ }),

/***/ "u58j":
/*!***************************************************************!*\
  !*** ./src/app/reporting-manager/reporting-request-module.ts ***!
  \***************************************************************/
/*! exports provided: ReportingManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingManagerModule", function() { return ReportingManagerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-module */ "+fd8");
/* harmony import */ var _add_reporting_manager_requests_new_reporting_manager_request_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-reporting-manager-requests/new-reporting-manager-request-component */ "wghx");
/* harmony import */ var _reporting_request_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporting-request-routing-module */ "X97Q");
/* harmony import */ var _view_reporting_manger_requests_reporting_manager_requests_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-reporting-manger-requests/reporting-manager-requests-component */ "6vQF");
/* harmony import */ var _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ngx-bootstrap-module */ "rEVn");







class ReportingManagerModule {
}
ReportingManagerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportingManagerModule });
ReportingManagerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportingManagerModule_Factory(t) { return new (t || ReportingManagerModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["NgxBootstrapModule"],
            _reporting_request_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportingManagerRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportingManagerModule, { declarations: [_add_reporting_manager_requests_new_reporting_manager_request_component__WEBPACK_IMPORTED_MODULE_2__["AddReportingManagerRequestComponent"],
        _view_reporting_manger_requests_reporting_manager_requests_component__WEBPACK_IMPORTED_MODULE_4__["ReportingManagerRequestsComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["NgxBootstrapModule"],
        _reporting_request_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportingManagerRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportingManagerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _add_reporting_manager_requests_new_reporting_manager_request_component__WEBPACK_IMPORTED_MODULE_2__["AddReportingManagerRequestComponent"],
                    _view_reporting_manger_requests_reporting_manager_requests_component__WEBPACK_IMPORTED_MODULE_4__["ReportingManagerRequestsComponent"]
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["NgxBootstrapModule"],
                    _reporting_request_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportingManagerRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _roles_component_roles_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles-component/roles-component.component */ "/oat");
/* harmony import */ var _departments_component_departments_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./departments-component/departments-component.component */ "UC/9");
/* harmony import */ var _goals_goals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goals/goals-component */ "Mgfn");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home-component */ "qq55");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unauthorized/unauthorized-component */ "cd6N");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forbidden/forbidden-component */ "eDgl");
/* harmony import */ var _shared_guards_check_user_authenticated_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/guards/check-user-authenticated-guard */ "Dste");











const routes = [
    { path: 'roles', component: _roles_component_roles_component_component__WEBPACK_IMPORTED_MODULE_2__["RolesComponentComponent"], canActivate: [_shared_guards_check_user_authenticated_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'departments', component: _departments_component_departments_component_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentsComponentComponent"], canActivate: [_shared_guards_check_user_authenticated_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'goals', component: _goals_goals_component__WEBPACK_IMPORTED_MODULE_4__["GoalsComponentComponent"], canActivate: [_shared_guards_check_user_authenticated_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_shared_guards_check_user_authenticated_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'need-help', loadChildren: () => __webpack_require__.e(/*! import() | accounts-need-help-need-help-module */ "accounts-need-help-need-help-module").then(__webpack_require__.bind(null, /*! ./accounts/need-help/need-help-module */ "27aI")).then(m => m.NeedHelpModule) },
    { path: 'iterations', loadChildren: () => __webpack_require__.e(/*! import() | iteration-iteration-module */ "iteration-iteration-module").then(__webpack_require__.bind(null, /*! ./iteration/iteration-module */ "A30K")).then(m => m.IterationModule) },
    { path: 'unauthorized', component: _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_6__["UnAuthorizedComponent"] },
    { path: 'forbidden', component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_7__["ForbiddenComponent"] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wghx":
/*!*************************************************************************************************************!*\
  !*** ./src/app/reporting-manager/add-reporting-manager-requests/new-reporting-manager-request-component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AddReportingManagerRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReportingManagerRequestComponent", function() { return AddReportingManagerRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_models_user_registered_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/user/registered-users */ "L0k6");
/* harmony import */ var _confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../confirm-modal-component/confirm-modal-component */ "Gs7e");
/* harmony import */ var _shared_models_user_user_response_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/user/user-response-model */ "S8qu");
/* harmony import */ var _shared_models_user_reporting_manager_request_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/models/user/reporting-manager-request-model */ "X8+g");
/* harmony import */ var _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/user/user-service */ "xB9q");
/* harmony import */ var _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/spinner/spinner-service */ "3PAx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/toastr/toastr-service */ "jonD");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");














function AddReportingManagerRequestComponent_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r2.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.email);
} }
function AddReportingManagerRequestComponent_p_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Please select Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddReportingManagerRequestComponent {
    constructor(reportingManagerFormBuilder, userService, spinnerService, router, toastrNotificationService, modalService) {
        this.reportingManagerFormBuilder = reportingManagerFormBuilder;
        this.userService = userService;
        this.spinnerService = spinnerService;
        this.router = router;
        this.toastrNotificationService = toastrNotificationService;
        this.modalService = modalService;
        this.users = new Array();
    }
    ngOnInit() {
        this.initializeReportingManagerRequestFormGroup();
        this.getUserDetailsScreenData();
    }
    initializeReportingManagerRequestFormGroup() {
        this.reportingManagerRequestFormGroup = this.reportingManagerFormBuilder.group({
            userId: [''],
            firstName: [''],
            lastName: [''],
            contactNumber: [''],
            email: [''],
            role: [''],
            department: [''],
            currentReportingManagerId: [''],
            currentReportingManager: [''],
            newReportingManagerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    getUserDetailsScreenData() {
        this.spinnerService.updateMessage('Getting User Details. Please wait.....');
        this.spinnerService.busy();
        this.userService.getNewRortingManagerRequestScreenData()
            .subscribe((responses) => {
            this.spinnerService.idle();
            this.bindReportingManagerFormGroup(responses);
        }, error => {
            this.spinnerService.idle();
            console.log('Error occured while fetching User details screen data');
        });
    }
    bindReportingManagerFormGroup(responses) {
        let userModel = _shared_models_user_user_response_model__WEBPACK_IMPORTED_MODULE_4__["UserResponseModel"].formUserResponseModel(responses[0]);
        this.reportingManagerRequestFormGroup.patchValue({
            userId: userModel.id,
            firstName: userModel.firstName,
            lastName: userModel.lastName,
            contactNumber: userModel.contactNumber,
            email: userModel.email,
            role: (userModel.roleName == "") ? 'N/A' : userModel.roleName,
            department: (userModel.departmentName == "") ? 'N/A' : userModel.departmentName,
            currentReportingManagerId: userModel.reportingManagerId,
            currentReportingManager: userModel.reportingManager
        });
        this.users = _shared_models_user_registered_users__WEBPACK_IMPORTED_MODULE_2__["RegisteredUsers"].FormRegisterUsersModelArray(responses[1]);
    }
    navigateHome() {
        if (this.reportingManagerRequestFormGroup.dirty) {
            this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], {
                initialState: {
                    promptMessage: 'Discard changes and navigate back to Home page?',
                    callback: (result) => {
                        if (result) {
                            this.router.navigate(['/home']);
                        }
                    }
                }
            });
        }
        else {
            this.router.navigate(['/home']);
        }
    }
    submitReportingManagerRequest() {
        if (this.reportingManagerRequestFormGroup.valid && this.checkManagerValid()) {
            this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], {
                initialState: {
                    promptMessage: 'Continue to submit new reporting manager request?',
                    callback: (result) => {
                        if (result) {
                            this.spinnerService.updateMessage('Submitting request. Please wait.....');
                            this.spinnerService.busy();
                            let reportingManagerRequestModel = this.mapFormGroupToReportingManagerRequestModel();
                            this.userService.submitUserReportingManagerRequest(reportingManagerRequestModel)
                                .subscribe((response) => {
                                this.reportingManagerRequestFormGroup.reset();
                                this.spinnerService.idle();
                                this.toastrNotificationService.success('Request submitted successfully');
                                this.router.navigate(['/home']);
                            }, error => {
                                this.spinnerService.idle();
                                console.log('Exception occured while submitting');
                            });
                        }
                    }
                }
            });
        }
        else {
            this.toastrNotificationService.warning('Please check the reporting manager selected');
        }
    }
    checkManagerValid() {
        return this.reportingManagerRequestFormGroup.value.currentReportingManagerId * 1 !=
            this.reportingManagerRequestFormGroup.value.newReportingManagerId * 1;
    }
    mapFormGroupToReportingManagerRequestModel() {
        let reportingManagerRequestModel = new _shared_models_user_reporting_manager_request_model__WEBPACK_IMPORTED_MODULE_5__["ReportingManagerRequest"]();
        reportingManagerRequestModel.reportedUserId = this.reportingManagerRequestFormGroup.value.userId * 1;
        reportingManagerRequestModel.currentReportingManagerId = this.reportingManagerRequestFormGroup.value.currentReportingManagerId * 1;
        reportingManagerRequestModel.newReportingManagerId = this.reportingManagerRequestFormGroup.value.newReportingManagerId * 1;
        return reportingManagerRequestModel;
    }
}
AddReportingManagerRequestComponent.ɵfac = function AddReportingManagerRequestComponent_Factory(t) { return new (t || AddReportingManagerRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"])); };
AddReportingManagerRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddReportingManagerRequestComponent, selectors: [["ng-component"]], decls: 58, vars: 4, consts: [[1, "container-fluid", "reset-controls-container"], [1, "row", "justify-content-center", "align-items-center", "h-100"], [1, "col-md-6"], [1, "col-md-12"], [1, "card"], [1, "card-header", "bg-primary", "text-white"], [1, "card-body"], [3, "formGroup"], [1, "form-group", "row", "control-row"], [1, "label_controls", "col-form-label", "col-sm-4"], [1, "input_controls", "col-sm-8"], ["type", "text", "readonly", "", "name", "firstName", "formControlName", "firstName", 1, "form-control-plaintext"], ["type", "text", "readonly", "", "name", "lastName", "formControlName", "lastName", 1, "form-control-plaintext"], ["type", "text", "readonly", "", "name", "email", "formControlName", "email", 1, "form-control-plaintext"], ["type", "text", "readonly", "", "name", "contactNumber", "formControlName", "contactNumber", 1, "form-control-plaintext"], ["type", "text", "readonly", "", "name", "departmentName", "formControlName", "department", 1, "form-control-plaintext"], ["type", "text", "readonly", "", "name", "role", "formControlName", "role", 1, "form-control-plaintext"], ["type", "text", "readonly", "", "name", "reportinManager", "formControlName", "currentReportingManager", 1, "form-control-plaintext"], ["for", "newManager", 1, "label_controls", "col-form-label", "col-sm-4"], ["id", "newManager", "formControlName", "newReportingManagerId", 1, "form-control"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "help-block", 4, "ngIf"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-primary", "registration_buttons", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-outline-dark", "ml-3", "registration_buttons", 3, "click"], [3, "value"], [1, "help-block"]], template: function AddReportingManagerRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Submit Reporting Manager Request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Reporting Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "New Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AddReportingManagerRequestComponent_option_51_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AddReportingManagerRequestComponent_p_52_Template, 2, 0, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddReportingManagerRequestComponent_Template_button_click_54_listener() { return ctx.submitReportingManagerRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddReportingManagerRequestComponent_Template_button_click_56_listener() { return ctx.navigateHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reportingManagerRequestFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reportingManagerRequestFormGroup.get("newReportingManagerId").hasError("required") && ctx.reportingManagerRequestFormGroup.get("newReportingManagerId").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.reportingManagerRequestFormGroup.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], styles: [".reset-controls-container[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%] {\r\n    color: #DD0031;\r\n    margin-bottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0aW5nLW1hbmFnZXIvYWRkLXJlcG9ydGluZy1tYW5hZ2VyLXJlcXVlc3RzL25ldy1yZXBvcnRpbmctbWFuYWdlci1yZXF1ZXN0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRpbmctbWFuYWdlci9hZGQtcmVwb3J0aW5nLW1hbmFnZXItcmVxdWVzdHMvbmV3LXJlcG9ydGluZy1tYW5hZ2VyLXJlcXVlc3QuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc2V0LWNvbnRyb2xzLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uaGVscC1ibG9jayB7XHJcbiAgICBjb2xvcjogI0REMDAzMTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddReportingManagerRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './new-reporting-manager-request.html',
                styleUrls: ['./new-reporting-manager-request.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrNotificationService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "xB9q":
/*!******************************************************!*\
  !*** ./src/app/shared/services/user/user-service.ts ***!
  \******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");





class UserService {
    constructor(http) {
        this.http = http;
    }
    getUser() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        const httpOptions = {
            headers: headers
        };
        return this.http.post('/api/user/get_user', {}, httpOptions);
    }
    getUserDetailScreenData() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        const httpOptions = {
            headers: headers
        };
        var userDetailCall = this.http.post('/api/user/get_user', {}, httpOptions);
        var rolesCall = this.http.post('/api/roles/get_roles', {});
        var departmentCall = this.http.post('/api/departments/get_departments', {});
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(userDetailCall, rolesCall, departmentCall);
    }
    updateUserDetails(userUpdateRequestModel) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        const httpOptions = {
            headers: headers
        };
        return this.http.post('/api/user/update_user', userUpdateRequestModel, httpOptions);
    }
    getNewRortingManagerRequestScreenData() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        const httpOptions = {
            headers: headers
        };
        var userDetailCall = this.http.post('/api/user/get_user', {}, httpOptions);
        var usersCall = this.http.post('/api/user/get_registered_users_except_logged_in_user', {});
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(userDetailCall, usersCall);
    }
    submitUserReportingManagerRequest(reportingManagerRequestModel) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        const httpOptions = {
            headers: headers
        };
        return this.http.post('/api/user/reporting_manager_request', reportingManagerRequestModel, httpOptions);
    }
    getPendingReportingManagerRequests() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        const httpOptions = {
            headers: headers
        };
        return this.http.post('/api/user/pending_reporting_manager_requests', {}, httpOptions);
    }
    approvePendingReportingManagerRequests(request) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        const httpOptions = {
            headers: headers
        };
        return this.http.post('/api/user/approve_reporting_manager_request', request, httpOptions);
    }
    rejectPendingReportingManagerRequests(requestId) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        const httpOptions = {
            headers: headers
        };
        return this.http.delete(`/api/user/reject_reporting_manager_requests/${requestId}`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map