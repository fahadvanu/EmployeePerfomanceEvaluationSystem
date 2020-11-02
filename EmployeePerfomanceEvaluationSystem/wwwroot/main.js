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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_3__["PaginationPipePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_3__["PaginationPipePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_3__["PaginationPipePipe"]
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
                    _shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_3__["PaginationPipePipe"]
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponentComponent_div_5_table_10_tr_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const role_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.editRole(role_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponentComponent_div_5_table_10_tr_8_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const role_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.deleteRole(role_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", role_r8.roleName, "");
} }
function RolesComponentComponent_div_5_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RolesComponentComponent_div_5_table_10_tr_8_Template, 9, 1, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "paginationPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 1, ctx_r2.rolesToDisplay, ctx_r2.currentPage, ctx_r2.itemsPerPage));
} }
function RolesComponentComponent_div_5_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " No Records Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RolesComponentComponent_div_5_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pagination", 38);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Role Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RolesComponentComponent_div_5_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.roleModel.roleName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Please enter new role missing in database.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RolesComponentComponent_div_5_div_22_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesComponentComponent_div_5_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.addUpdateRole(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 24);
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
RolesComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolesComponentComponent, selectors: [["ng-component"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-md-7", "offset-2"], [1, "title_role_management"], [4, "ngIf"], ["novalidate", ""], ["roleForm", "ngForm"], [1, "input-group", "col-md-5", "role_search_control"], ["placeholder", "search", "value", "search", "name", "search-input", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-search"], [1, "row", "table_container_row"], [1, "col-md-12", "table_container_column"], ["name", "rolesTable", "class", "table table-bordered table-hover rolesTable", 4, "ngIf"], ["name", "norolesTable", "class", "table table-bordered table-hover rolesTable", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-xs-12", "col-12"], [1, "form-group"], ["for", "roleName"], ["type", "text", "name", "roleName", "placeholder", "Role Name", "required", "", "maxlength", "50", 1, "form-control", 3, "ngModel", "ngModelChange"], ["roleName", "ngModel"], ["id", "roleHelp", 1, "form-text", "text-muted"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-warning", "ml-3", 3, "disabled", "click"], ["name", "rolesTable", 1, "table", "table-bordered", "table-hover", "rolesTable"], [1, "thead-dark"], ["scope", "col"], ["class", "table-style", 4, "ngFor", "ngForOf"], [1, "table-style"], ["scope", "row"], [1, "role_table_controls"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-pencil-square-o", "fa-lg"], [1, "fa", "fa-trash-o", "fa-lg"], ["name", "norolesTable", 1, "table", "table-bordered", "table-hover", "rolesTable"], ["colspan", "3", 1, "role_table_controls"], [1, "col-xs-12", "col-12", "pager-div"], ["name", "paginationControl", 3, "totalItems", "itemsPerPage", "maxSize", "ngModel", "pageChanged", "ngModelChange"], [1, "alert", "alert-danger"]], template: function RolesComponentComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"]], pipes: [_shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_10__["PaginationPipePipe"]], styles: [".title_role_management[_ngcontent-%COMP%]{\r\n    text-align:center;\r\n}\r\n\r\n.pager-div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.role_table_controls[_ngcontent-%COMP%]{\r\n    text-align:center;\r\n}\r\n\r\n.role_search_control[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.table_container_row[_ngcontent-%COMP%]{\r\n    clear:both;\r\n}\r\n\r\n.table_container_column[_ngcontent-%COMP%] {\r\n    min-height: 400px;\r\n    max-height: 400px\r\n}\r\n\r\n.rolesTable[_ngcontent-%COMP%] {\r\n    margin-top: 20px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXMtY29tcG9uZW50L3JvbGVzLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9yb2xlcy1jb21wb25lbnQvcm9sZXMtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVfcm9sZV9tYW5hZ2VtZW50e1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdlci1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucm9sZV90YWJsZV9jb250cm9sc3tcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4ucm9sZV9zZWFyY2hfY29udHJvbCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnRhYmxlX2NvbnRhaW5lcl9yb3d7XHJcbiAgICBjbGVhcjpib3RoO1xyXG59XHJcblxyXG4udGFibGVfY29udGFpbmVyX2NvbHVtbiB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4XHJcbn1cclxuXHJcbi5yb2xlc1RhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"] });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function () { return ["/home"]; };
function NavBarComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/roles"]; };
const _c2 = function () { return ["/departments"]; };
function NavBarComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Master ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Manage Roles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Manage Departments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
} }
class NavBarComponent {
    constructor(accountService) {
        this.accountService = accountService;
    }
    ngOnInit() {
        this.isLoggedIn = this.accountService.isLoggedInObservable();
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 9, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "p-3", "px-md-4", "mb-3", "bg-dark", "border-bottom", "shadow-sm"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", 4, "ngIf"], ["class", "nav-item dropdown active", 4, "ngIf"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "nav-item", "dropdown", "active"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["routerLinkActive", "active", 1, "dropdown-item", 3, "routerLink"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Employee Performance Evaluation System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavBarComponent_li_7_Template, 3, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavBarComponent_li_8_Template, 8, 4, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.isAuthenticated());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".navbar-brand[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    color:white;\r\n}\r\n\r\n#navbarSupportedContent[_ngcontent-%COMP%] {\r\n    margin-top: 3px;\r\n    margin-left: 30px;\r\n    text-transform: uppercase;\r\n  \r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5kIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBcclxufVxyXG5cclxuLm5hdmJhci1uYXYgLm5hdi1pdGVtIGF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return [{ type: _shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }]; }, null); })();


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
        ], _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountsRoutingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountsModule, { declarations: [_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationComponent"],
        _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountsRoutingModule"]], exports: [_accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountsRoutingModule"]] }); })();
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
                ],
                exports: [
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* First Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* First Name cannot exceeds 50 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Last Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Last Name cannot exceeds 50 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Please enter valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Password must be atleast 8 - 12 charcters long, and should contain One digit, One Upper case and One Lower case character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Password Mismatch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Contact Number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_p_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Please select Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", role_r15.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r15.roleName);
} }
function UserRegistrationComponent_p_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "* Please select Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserRegistrationComponent_option_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", department_r16.departmentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](department_r16.departmentName);
} }
function UserRegistrationComponent_p_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 32);
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
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
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
UserRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserRegistrationComponent, selectors: [["ng-component"]], decls: 74, vars: 17, consts: [[1, "row"], [1, "col-md-7", "offset-3"], [1, "title_user_registration"], [1, "col-md-10", "mt-3", "registration-controls"], ["novalidate", "", 3, "formGroup"], [1, "form-group"], ["for", "firstName"], ["type", "text", "name", "firstName", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control"], ["class", "help-block", 4, "ngIf"], ["for", "lastName"], ["type", "text", "name", "lastName", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control"], ["for", "email"], ["type", "text", "name", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control"], ["formGroupName", "passwordGroup"], ["for", "password"], ["type", "password", "name", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], ["for", "confirmPassword"], ["type", "password", "name", "confirmPassword", "placeholder", "Confirm Password", "formControlName", "confirmPassword", 1, "form-control"], ["for", "contactNumber"], ["type", "number", "name", "contactNumber", "placeholder", "Contact Number", "formControlName", "contactNumber", 1, "form-control"], ["for", "gender"], ["id", "gender", "formControlName", "gender", 1, "form-control"], ["value", "", "disabled", ""], ["value", "M"], ["value", "F"], ["for", "role"], ["id", "role", "formControlName", "role", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "department"], ["id", "department", "formControlName", "department", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "registration_buttons", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-outline-dark", "ml-3", "registration_buttons", 3, "click"], [1, "help-block"], [3, "value"]], template: function UserRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " New User Registration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserRegistrationComponent_p_12_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserRegistrationComponent_p_13_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserRegistrationComponent_p_18_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserRegistrationComponent_p_19_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserRegistrationComponent_p_24_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserRegistrationComponent_p_25_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UserRegistrationComponent_p_31_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UserRegistrationComponent_p_32_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserRegistrationComponent_p_37_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, UserRegistrationComponent_p_42_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Male ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Female ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, UserRegistrationComponent_p_53_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, UserRegistrationComponent_option_60_Template, 2, 2, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, UserRegistrationComponent_p_61_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, UserRegistrationComponent_option_68_Template, 2, 2, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, UserRegistrationComponent_p_69_Template, 2, 0, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRegistrationComponent_Template_button_click_70_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 31);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationFormGroup.get("gender").hasError("required") && ctx.registrationFormGroup.get("gender").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationFormGroup.get("role").hasError("required") && ctx.registrationFormGroup.get("role").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationFormGroup.get("department").hasError("required") && ctx.registrationFormGroup.get("department").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registrationFormGroup.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"]], styles: [".title_user_registration[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n}\r\n\r\n.registration-controls[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n}\r\n\r\n.registration_buttons[_ngcontent-%COMP%]{\r\n    width: 120px;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%] {\r\n    color: #DD0031;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvdXNlci1yZWdpc3RyYXRpb24vdXNlci1yZWdpc3RyYXRpb24tY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnRzL3VzZXItcmVnaXN0cmF0aW9uL3VzZXItcmVnaXN0cmF0aW9uLWNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVfdXNlcl9yZWdpc3RyYXRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnJlZ2lzdHJhdGlvbi1jb250cm9sc3tcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uX2J1dHRvbnN7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5oZWxwLWJsb2NrIHtcclxuICAgIGNvbG9yOiAjREQwMDMxO1xyXG59Il19 */"] });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponentComponent_div_5_table_10_tr_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const department_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.editDepartment(department_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponentComponent_div_5_table_10_tr_8_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const department_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.deleteDepartment(department_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const department_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", department_r8.departmentName, "");
} }
function DepartmentsComponentComponent_div_5_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DepartmentsComponentComponent_div_5_table_10_tr_8_Template, 9, 1, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "paginationPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 1, ctx_r2.departmentsToDisplay, ctx_r2.currentPage, ctx_r2.itemsPerPage));
} }
function DepartmentsComponentComponent_div_5_table_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " No Records Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DepartmentsComponentComponent_div_5_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pagination", 38);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Department Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DepartmentsComponentComponent_div_5_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.departmentModel.departmentName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Please enter new department missing in database.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DepartmentsComponentComponent_div_5_div_22_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponentComponent_div_5_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.addUpdateDepartment(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 24);
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
DepartmentsComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentsComponentComponent, selectors: [["app-departments-component"]], decls: 6, vars: 1, consts: [[1, "row"], [1, "col-md-7", "offset-2"], [1, "title_department_management"], [4, "ngIf"], ["novalidate", ""], ["departmentForm", "ngForm"], [1, "input-group", "col-md-5", "department_search_control"], ["placeholder", "search", "value", "search", "name", "search-input", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-search"], [1, "row", "table_container_row"], [1, "col-md-12", "table_container_column"], ["name", "departmentsTable", "class", "table table-bordered table-hover departments_table", 4, "ngIf"], ["name", "nodepartmentsTable", "class", "table table-bordered table-hover mt-5 departments_table", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-xs-12", "col-12"], [1, "form-group"], ["for", "departmentName"], ["type", "text", "name", "departmentName", "placeholder", "Department Name", "required", "", "maxlength", "50", 1, "form-control", 3, "ngModel", "ngModelChange"], ["departmentName", "ngModel"], ["id", "roleHelp", 1, "form-text", "text-muted"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-warning", "ml-3", 3, "disabled", "click"], ["name", "departmentsTable", 1, "table", "table-bordered", "table-hover", "departments_table"], [1, "thead-dark"], ["scope", "col"], ["class", "table-style", 4, "ngFor", "ngForOf"], [1, "table-style"], ["scope", "row"], [1, "department_table_controls"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-pencil-square-o", "fa-lg"], [1, "fa", "fa-trash-o", "fa-lg"], ["name", "nodepartmentsTable", 1, "table", "table-bordered", "table-hover", "mt-5", "departments_table"], ["colspan", "3", 1, "department_table_controls"], [1, "col-xs-12", "col-12", "pager-div"], ["name", "paginationControl", 3, "totalItems", "itemsPerPage", "maxSize", "ngModel", "pageChanged", "ngModelChange"], [1, "alert", "alert-danger"]], template: function DepartmentsComponentComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"]], pipes: [_shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_10__["PaginationPipePipe"]], styles: [".title_department_management[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.pager-div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.department_table_controls[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.department_search_control[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.table_container_row[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.table_container_column[_ngcontent-%COMP%] {\r\n    min-height: 400px;\r\n    max-height: 400px\r\n}\r\n\r\n.departments_table[_ngcontent-%COMP%] {\r\n    margin-top: 20px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwYXJ0bWVudHMtY29tcG9uZW50L2RlcGFydG1lbnRzLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9kZXBhcnRtZW50cy1jb21wb25lbnQvZGVwYXJ0bWVudHMtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGVfZGVwYXJ0bWVudF9tYW5hZ2VtZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2VyLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZXBhcnRtZW50X3RhYmxlX2NvbnRyb2xzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRlcGFydG1lbnRfc2VhcmNoX2NvbnRyb2wge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi50YWJsZV9jb250YWluZXJfcm93IHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udGFibGVfY29udGFpbmVyX2NvbHVtbiB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4XHJcbn1cclxuXHJcbi5kZXBhcnRtZW50c190YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentsComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-departments-component',
                templateUrl: './departments-component.component.html',
                styleUrls: ['./departments-component.component.css']
            }]
    }], function () { return [{ type: _shared_services_departments_departments_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"] }, { type: _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"] }, { type: _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrNotificationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }]; }, null); })();


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
    JWT_TOKEN_KEY: 'user_jwt_token'
};


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _roles_component_roles_component_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./roles-component/roles-component.component */ "/oat");
/* harmony import */ var _departments_component_departments_component_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./departments-component/departments-component.component */ "UC/9");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home-component */ "qq55");
/* harmony import */ var _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/interceptors/error-interceptor */ "tlHB");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["HttpErrorInterceptor"],
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
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
        _roles_component_roles_component_component__WEBPACK_IMPORTED_MODULE_14__["RolesComponentComponent"],
        _departments_component_departments_component_component__WEBPACK_IMPORTED_MODULE_15__["DepartmentsComponentComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _shared_jwt_jwt_module__WEBPACK_IMPORTED_MODULE_8__["AppJWTModule"],
        _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_5__["NgxBootstrapModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _accounts_accounts_module__WEBPACK_IMPORTED_MODULE_11__["AccountsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
                    _roles_component_roles_component_component__WEBPACK_IMPORTED_MODULE_14__["RolesComponentComponent"],
                    _departments_component_departments_component_component__WEBPACK_IMPORTED_MODULE_15__["DepartmentsComponentComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]
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
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["HttpErrorInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
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
                return decodedToken.unique_name;
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








function UserLoginComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserLoginComponent_div_35_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserLoginComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserLoginComponent_div_35_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserLoginComponent_div_35_div_2_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r1.errors == null ? null : _r1.errors.required) && (_r1.dirty || _r1.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r2.errors == null ? null : _r2.errors.required) && (_r2.dirty || _r2.touched));
} }
const _c0 = function () { return ["/register"]; };
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
UserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserLoginComponent, selectors: [["ng-component"]], decls: 36, vars: 6, consts: [[1, "row"], [1, "col-md-7", "offset-3"], [1, "col-md-10", "mt-3", "login-controls"], [1, "container", "h-100"], [1, "d-flex", "justify-content-center", "h-100"], [1, "user_card"], [1, "d-flex", "justify-content-center", "form_container"], [1, "login_form"], ["loginForm", "ngForm"], [1, "input-group"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", "fa-user"], ["type", "text", "name", "userName", "placeholder", "username", "required", "", 1, "form-control", "input_user", 3, "ngModel", "ngModelChange"], ["userName", "ngModel"], [1, "form-text", "text-muted", "email_descriptor"], [1, "input-group", "mb-2"], [1, "fa", "fa-key"], ["type", "password", "name", "password", "placeholder", "password", "required", "", 1, "form-control", "input_pass", 3, "ngModel", "ngModelChange"], ["passwordControl", "ngModel"], [1, "d-flex", "justify-content-center", "mt-3", "login_container"], ["type", "button", "name", "button", 1, "btn", "login_btn", 3, "disabled", "click"], [1, "mt-4"], [1, "d-flex", "justify-content-center", "links"], [1, "ml-2", 3, "routerLink"], ["href", "#"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "alert", "alert-danger", "mt-3"], [4, "ngIf"]], template: function UserLoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserLoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.loginModel.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Please enter your email as user name.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserLoginComponent_Template_input_ngModelChange_22_listener($event) { return ctx.loginModel.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLoginComponent_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.loginUser(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UserLoginComponent_div_35_Template, 3, 2, "div", 26);
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
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginModel.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r1.errors == null ? null : _r1.errors.required) && (_r1.dirty || _r1.touched) || (_r2.errors == null ? null : _r2.errors.required) && (_r2.dirty || _r2.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".user_card[_ngcontent-%COMP%] {\n    height: 400px;\n    width: 500px;\n    margin-top: 50px;\n    margin-bottom: auto;\n    background: #F05837;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    padding: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    border-radius: 5px;\n}\n\n.form_container[_ngcontent-%COMP%] {\n \n}\n\n.login_btn[_ngcontent-%COMP%] {\n    width: 100%;\n    background: white !important;\n    color: black !important;\n}\n\n.login_btn[_ngcontent-%COMP%]:hover {\n\n    background: #c0392b !important;\n    color: white !important;\n}\n\n.login_btn[_ngcontent-%COMP%]:focus {\n   box-shadow: none !important;\n   outline: 0px !important;\n}\n\n.login_container[_ngcontent-%COMP%] {\n    padding: 0 2rem;\n    width: 60%;\n    margin: 0 auto;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n    background: #282726 !important;\n    color: white !important;\n    border: 0 !important;\n    border-radius: 0.25rem 0 0 0.25rem !important;\n}\n\n.input_user[_ngcontent-%COMP%], .input_pass[_ngcontent-%COMP%]\n{\n    height:42px;\n}\n\n.input-group[_ngcontent-%COMP%] {\n    height: 42px;\n}\n\n.input_user[_ngcontent-%COMP%], .input_pass[_ngcontent-%COMP%]:focus {\n        box-shadow: none !important;\n        outline: 0px !important;\n}\n\n.login_form[_ngcontent-%COMP%]{\n    width: 350px;\n}\n\na[_ngcontent-%COMP%]{\n    color: white;\n}\n\na[_ngcontent-%COMP%]:hover {\n        color: #c0392b;\n        cursor: pointer;\n}\n\n.email_descriptor[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    color: white !important;\n}\n\n.login_btn.disabled[_ngcontent-%COMP%], .login_btn[_ngcontent-%COMP%]:disabled {\n    opacity: .65;\n    background: darkgray !important;\n    color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudHMvdXNlci1sb2dpbi91c2VyLWxvZ2luLWNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsNEVBQTRFO0lBQzVFLG9GQUFvRjtJQUNwRixpRkFBaUY7SUFDakYsa0JBQWtCO0FBQ3RCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUdBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1Qix1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksOEJBQThCO0lBQzlCLHVCQUF1QjtBQUMzQjs7QUFHQTtHQUNHLDJCQUEyQjtHQUMzQix1QkFBdUI7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQiw2Q0FBNkM7QUFDakQ7O0FBRUE7OztJQUdJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O1FBRVEsMkJBQTJCO1FBQzNCLHVCQUF1QjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO1FBQ1EsY0FBYztRQUNkLGVBQWU7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLCtCQUErQjtJQUMvQix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50cy91c2VyLWxvZ2luL3VzZXItbG9naW4tY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyX2NhcmQge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjRjA1ODM3O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZm9ybV9jb250YWluZXIge1xuIC8qICAgbWFyZ2luLXRvcDogMTAwcHg7Ki9cbn1cblxuXG4ubG9naW5fYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4ubG9naW5fYnRuOmhvdmVyIHtcblxuICAgIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuXG4ubG9naW5fYnRuOmZvY3VzIHtcbiAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW5fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmlucHV0LWdyb3VwLXRleHQge1xuICAgIGJhY2tncm91bmQ6ICMyODI3MjYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAgMCAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dF91c2VyLFxuLmlucHV0X3Bhc3NcbntcbiAgICBoZWlnaHQ6NDJweDtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgICBoZWlnaHQ6IDQycHg7XG59XG5cbi5pbnB1dF91c2VyLFxuLmlucHV0X3Bhc3M6Zm9jdXMge1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW5fZm9ybXtcbiAgICB3aWR0aDogMzUwcHg7XG59XG5cbmF7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5hOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNjMDM5MmI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVtYWlsX2Rlc2NyaXB0b3Ige1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5sb2dpbl9idG4uZGlzYWJsZWQsIC5sb2dpbl9idG46ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IC42NTtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZ3JheSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
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


class HomeComponent {
    constructor() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "HOME COMPONENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './home-component.html',
                styleUrls: ['./home-component.css']
            }]
    }], function () { return []; }, null); })();


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






class NgxBootstrapModule {
}
NgxBootstrapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxBootstrapModule });
NgxBootstrapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxBootstrapModule_Factory(t) { return new (t || NgxBootstrapModule)(); }, imports: [[
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot()
        ], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationModule"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxBootstrapModule, { imports: [ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"]], exports: [ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationModule"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxBootstrapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot()
                ],
                exports: [
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_1__["PaginationModule"],
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"]
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





class HttpErrorInterceptor {
    constructor(toastrNotificationService) {
        this.toastrNotificationService = toastrNotificationService;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            var _a;
            let errorMessage = '';
            let errorObject = {};
            if (error.status == 400) {
                if (error.error.errors != null) {
                    errorObject.modelStateValidationErros = error.error.errors;
                }
            }
            errorMessage = (_a = error.error.errorMessage) !== null && _a !== void 0 ? _a : 'Exception occured while processing request';
            errorObject.errorMessage = errorMessage;
            this.toastrNotificationService.failed(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorObject);
        }));
    }
}
HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) { return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrNotificationService"])); };
HttpErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HttpErrorInterceptor, factory: HttpErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HttpErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrNotificationService"] }]; }, null); })();


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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home-component */ "qq55");







const routes = [
    { path: 'roles', component: _roles_component_roles_component_component__WEBPACK_IMPORTED_MODULE_2__["RolesComponentComponent"] },
    { path: 'departments', component: _departments_component_departments_component_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentsComponentComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '*', redirectTo: '' }
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