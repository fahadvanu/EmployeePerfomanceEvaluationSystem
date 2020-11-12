(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iteration-iteration-module"],{

/***/ "267n":
/*!**************************************************!*\
  !*** ./src/app/iteration/iteration-component.ts ***!
  \**************************************************/
/*! exports provided: IterationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IterationComponent", function() { return IterationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_iteration_iteration_reponse_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/iteration/iteration-reponse-model */ "WDFA");
/* harmony import */ var _shared_models_iteration_create_iteration_request_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/iteration/create-iteration-request-model */ "Uu1S");
/* harmony import */ var _confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-modal-component/confirm-modal-component */ "Gs7e");
/* harmony import */ var _shared_constant_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constant/constants */ "X5XA");
/* harmony import */ var _shared_services_iteration_iteration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/iteration/iteration-service */ "OqMo");
/* harmony import */ var _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/spinner/spinner-service */ "3PAx");
/* harmony import */ var _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/toastr/toastr-service */ "jonD");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var _shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/pipes/pagination-client */ "SrT9");















function IterationComponent_div_5_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IterationComponent_div_5_div_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title cannot exceeds 200 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IterationComponent_div_5_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IterationComponent_div_5_div_23_div_1_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IterationComponent_div_5_div_23_div_2_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors.maxlength);
} }
function IterationComponent_div_5_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Startdate is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IterationComponent_div_5_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IterationComponent_div_5_div_24_div_1_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
} }
function IterationComponent_div_5_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Title is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IterationComponent_div_5_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IterationComponent_div_5_div_25_div_1_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors.required);
} }
function IterationComponent_div_5_table_33_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IterationComponent_div_5_table_33_tr_17_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const iteration_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.deleteIteration(iteration_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const iteration_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", iteration_r16.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", iteration_r16.startDate, " - ", iteration_r16.endDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", iteration_r16.createdDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", iteration_r16.activatedDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", iteration_r16.lockedDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.getIterationStatus(iteration_r16.status), "");
} }
function IterationComponent_div_5_table_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Activated Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Locked Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, IterationComponent_div_5_table_33_tr_17_Template, 16, 7, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "paginationPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](18, 1, ctx_r8.iterationsToDisplay, ctx_r8.currentPage, ctx_r8.itemsPerPage));
} }
function IterationComponent_div_5_table_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Activated Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Locked Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " No Records Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IterationComponent_div_5_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pagination", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function IterationComponent_div_5_div_35_Template_pagination_pageChanged_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.pageChanged($event); })("ngModelChange", function IterationComponent_div_5_div_35_Template_pagination_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.currentPage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx_r10.iterationsToDisplay.length)("itemsPerPage", ctx_r10.itemsPerPage)("maxSize", ctx_r10.itemsPerPage)("ngModel", ctx_r10.currentPage);
} }
const _c0 = function () { return { isAnimated: true, containerClass: "theme-orange", showClearButton: true, clearPosition: "right", dateInputFormat: "DD/MM/YYYY" }; };
function IterationComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IterationComponent_div_5_Template_textarea_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.iteration_model.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Iteration Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IterationComponent_div_5_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.iteration_model.startDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Iteration Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IterationComponent_div_5_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.iteration_model.endDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IterationComponent_div_5_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.createIteration(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, IterationComponent_div_5_div_23_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, IterationComponent_div_5_div_24_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, IterationComponent_div_5_div_25_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IterationComponent_div_5_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.searchTerm = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IterationComponent_div_5_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.searchIterations(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, IterationComponent_div_5_table_33_Template, 19, 5, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, IterationComponent_div_5_table_34_Template, 20, 0, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, IterationComponent_div_5_div_35_Template, 3, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.iteration_model.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.iteration_model.startDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.iteration_model.endDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.invalid && (_r2.dirty || _r2.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchTerm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.iterationsToDisplay.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.iterationsToDisplay.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.iterationsToDisplay.length > 0);
} }
class IterationComponent {
    constructor(iterationService, spinnerService, toastrNotificationService, cdRef, modalService) {
        this.iterationService = iterationService;
        this.spinnerService = spinnerService;
        this.toastrNotificationService = toastrNotificationService;
        this.cdRef = cdRef;
        this.modalService = modalService;
        this.iterations = new Array();
        this.iterationsToDisplay = new Array();
        this.currentPage = 1;
        this.itemsPerPage = 5;
        this.loading = false;
        this.iteration_model = new _shared_models_iteration_create_iteration_request_model__WEBPACK_IMPORTED_MODULE_2__["CreateIterationRequestModel"]();
    }
    ngOnInit() {
        this.resetVariables();
        this.getIterationsFromDatabase();
    }
    resetVariables() {
        this.searchTerm = '';
    }
    getIterationsFromDatabase() {
        this.loading = true;
        this.spinnerService.updateMessage('Loading iterations.....');
        this.spinnerService.busy();
        this.iterationService.getIterations()
            .subscribe((response) => {
            if (response.data != null) {
                this.iterations = _shared_models_iteration_iteration_reponse_model__WEBPACK_IMPORTED_MODULE_1__["IterationResponseModel"].FormIterationModelArray(response);
                this.iterationsToDisplay = this.iterations.slice();
            }
            // console.log(this.iterations);
            this.loading = false;
            this.spinnerService.idle();
        }, error => {
            this.loading = false;
            this.spinnerService.idle();
            console.log('Exception occured while fetching iterations from Database');
        });
    }
    createIteration(iterationForm) {
        if (iterationForm.valid && this.validStartAndEndDate()) {
            this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], {
                initialState: {
                    promptMessage: 'Are you sure you want to create new iteration?',
                    callback: (result) => {
                        if (result) {
                            this.spinnerService.updateMessage('Creating new iteration.....');
                            this.spinnerService.busy();
                            let request = this.mapCreateIterationRequest();
                            this.iterationService.addNewIteration(request)
                                .subscribe((response) => {
                                this.getIterationsAfterUpdate('New iteration created successfully');
                                iterationForm.reset();
                            }, error => {
                                this.spinnerService.idle();
                                console.log('Exception occured while creating new iteration');
                            });
                        }
                    }
                }
            });
        }
    }
    getIterationsAfterUpdate(message) {
        this.iterationService.getIterations()
            .subscribe((response) => {
            if (response.data != null) {
                this.iterations = _shared_models_iteration_iteration_reponse_model__WEBPACK_IMPORTED_MODULE_1__["IterationResponseModel"].FormIterationModelArray(response);
                this.iterationsToDisplay = this.iterations.slice();
            }
            this.resetAfterDbOperation();
            this.spinnerService.idle();
            this.toastrNotificationService.success(message);
        }, error => {
            this.spinnerService.idle();
            console.log('Exception occured getIterationsAfterUpdate()');
        });
    }
    mapCreateIterationRequest() {
        let request = new _shared_models_iteration_create_iteration_request_model__WEBPACK_IMPORTED_MODULE_2__["CreateIterationRequestModelAPI"]();
        request.title = this.iteration_model.title;
        request.startDate = new Date(this.iteration_model.startDate.getTime() - (this.iteration_model.startDate.getTimezoneOffset() * 60000)).toJSON();
        request.endDate = new Date(this.iteration_model.endDate.getTime() - (this.iteration_model.endDate.getTimezoneOffset() * 60000)).toJSON();
        return request;
    }
    validStartAndEndDate() {
        if (this.iteration_model.startDate > this.iteration_model.endDate) {
            this.toastrNotificationService.warning("Start date cannot be greater than end date");
            return false;
        }
        let months = this.monthDiff(this.iteration_model.startDate, this.iteration_model.endDate);
        if (months != 6) {
            this.toastrNotificationService.warning("Start date and end date should have difference of 6 months");
            return false;
        }
        return true;
    }
    monthDiff(d1, d2) {
        let months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months + 1;
    }
    pageChanged(event) {
        this.currentPage = event.page;
    }
    searchIterations() {
        if (this.searchTerm != '' && this.searchTerm != null && this.searchTerm != undefined) {
            this.iterationsToDisplay = this.iterations.filter(r => r.title.toLocaleLowerCase()
                .indexOf(this.searchTerm.toLocaleLowerCase()) != -1);
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
        else {
            this.iterationsToDisplay = this.iterations.slice();
            setTimeout(() => {
                this.currentPage = 1;
            });
            this.cdRef.detectChanges();
        }
    }
    resetAfterDbOperation() {
        this.resetVariables();
        setTimeout(() => {
            this.currentPage = 1;
        });
        this.cdRef.detectChanges();
        this.iteration_model = new _shared_models_iteration_create_iteration_request_model__WEBPACK_IMPORTED_MODULE_2__["CreateIterationRequestModel"]();
    }
    getIterationStatus(status) {
        if (status == _shared_models_iteration_iteration_reponse_model__WEBPACK_IMPORTED_MODULE_1__["IterationStatus"].NOTACTIVE)
            return _shared_constant_constants__WEBPACK_IMPORTED_MODULE_4__["Constant"].NOTACTIVE;
        if (status == _shared_models_iteration_iteration_reponse_model__WEBPACK_IMPORTED_MODULE_1__["IterationStatus"].ACTIVE)
            return _shared_constant_constants__WEBPACK_IMPORTED_MODULE_4__["Constant"].ACTIVE_ITERATION;
        if (status == _shared_models_iteration_iteration_reponse_model__WEBPACK_IMPORTED_MODULE_1__["IterationStatus"].DELETED)
            return _shared_constant_constants__WEBPACK_IMPORTED_MODULE_4__["Constant"].DELETED;
        if (status == _shared_models_iteration_iteration_reponse_model__WEBPACK_IMPORTED_MODULE_1__["IterationStatus"].LOCKED)
            return _shared_constant_constants__WEBPACK_IMPORTED_MODULE_4__["Constant"].LOCKED;
    }
    deleteIteration(iteration) {
        this.modalRef = this.modalService.show(_confirm_modal_component_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], {
            initialState: {
                promptMessage: 'Are you sure you want to delete iteration?',
                callback: (result) => {
                    if (result) {
                        this.spinnerService.updateMessage('Deleting iteration.....');
                        this.spinnerService.busy();
                        this.iterationService.deleteIteration(iteration.iterationId)
                            .subscribe((response) => {
                            this.getIterationsAfterUpdate('Iteration deleted successfully');
                        }, error => {
                            this.spinnerService.idle();
                            console.log('Exception occured while creating deleting iteration');
                        });
                    }
                }
            }
        });
    }
}
IterationComponent.ɵfac = function IterationComponent_Factory(t) { return new (t || IterationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_iteration_iteration_service__WEBPACK_IMPORTED_MODULE_5__["IterationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"])); };
IterationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IterationComponent, selectors: [["ng-component"]], decls: 6, vars: 1, consts: [[1, "row", "mt-3"], [1, "col-md-9", "offset-2"], [1, "title_iteration_management"], [4, "ngIf"], ["novalidate", ""], ["iterationForm", "ngForm"], [1, "col-xs-9", "col-9", "add_controls"], [1, "form-group"], ["for", "title"], ["name", "title", "placeholder", "Enter Title(max number of characters accepted are 200)", "required", "", "maxlength", "200", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["for", "startDate"], ["readonly", "", "name", "startDate", "placeholder", "Select start date", "required", "", "bsDatepicker", "", 1, "form-control", "date_controls", 3, "ngModel", "bsConfig", "ngModelChange"], ["startDate", "ngModel"], ["for", "endDate"], ["name", "endDate", "placeholder", "Select end date", "required", "", "bsDatepicker", "", 1, "form-control", "date_controls", 3, "ngModel", "bsConfig", "ngModelChange"], ["endDate", "ngModel"], [1, "form-group", "button_controls"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "alert alert-danger", 4, "ngIf"], [1, "input-group", "col-md-4", "iteration_search_control"], ["placeholder", "search by title", "value", "search", "name", "search-input", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-search"], [1, "row", "table_container_row"], [1, "col-md-12", "table_container_column"], ["name", "iterationTable", "class", "table table-bordered table-hover iteration_table", 4, "ngIf"], ["name", "noiterationsTable", "class", "table table-bordered table-hover mt-5 iteration_table", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "alert", "alert-danger"], ["name", "iterationTable", 1, "table", "table-bordered", "table-hover", "iteration_table"], [1, "thead-dark"], ["scope", "col"], ["class", "table-style", 4, "ngFor", "ngForOf"], [1, "table-style"], ["scope", "row"], [1, "iteration_table_controls"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "fa", "fa-trash-o", "fa-lg"], ["name", "noiterationsTable", 1, "table", "table-bordered", "table-hover", "mt-5", "iteration_table"], ["colspan", "7", 1, "iteration_table_controls"], [1, "row"], [1, "col-xs-12", "col-12", "pager-div"], ["name", "paginationControl", 3, "totalItems", "itemsPerPage", "maxSize", "ngModel", "pageChanged", "ngModelChange"]], template: function IterationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Iterations Management ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IterationComponent_div_5_Template, 36, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerInputDirective"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginationComponent"]], pipes: [_shared_pipes_pagination_client__WEBPACK_IMPORTED_MODULE_13__["PaginationPipePipe"]], styles: [".title_iteration_management[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.pager-div[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.iteration_table_controls[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.iteration_search_control[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding: 0;\r\n    margin-top: 20px;\r\n}\r\n\r\n.table_container_row[_ngcontent-%COMP%] {\r\n    clear: both;\r\n}\r\n\r\n.table_container_column[_ngcontent-%COMP%] {\r\n    min-height: 400px;\r\n    max-height: 400px;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.iteration_table[_ngcontent-%COMP%] {\r\n    margin-top: 20px !important;\r\n}\r\n\r\n.add_controls[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n}\r\n\r\n.date_controls[_ngcontent-%COMP%]{\r\n    width:300px;\r\n    background-color: #ffff;\r\n}\r\n\r\n.button_controls[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlcmF0aW9uL2l0ZXJhdGlvbi1jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2l0ZXJhdGlvbi9pdGVyYXRpb24tY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZV9pdGVyYXRpb25fbWFuYWdlbWVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdlci1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlcmF0aW9uX3RhYmxlX2NvbnRyb2xzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZXJhdGlvbl9zZWFyY2hfY29udHJvbCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnRhYmxlX2NvbnRhaW5lcl9yb3cge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi50YWJsZV9jb250YWluZXJfY29sdW1uIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLml0ZXJhdGlvbl90YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hZGRfY29udHJvbHN7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmRhdGVfY29udHJvbHN7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xyXG59XHJcblxyXG4uYnV0dG9uX2NvbnRyb2xzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IterationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './iteration-component.html',
                styleUrls: ['./iteration-component.css']
            }]
    }], function () { return [{ type: _shared_services_iteration_iteration_service__WEBPACK_IMPORTED_MODULE_5__["IterationService"] }, { type: _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"] }, { type: _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrNotificationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"] }]; }, null); })();


/***/ }),

/***/ "A30K":
/*!***********************************************!*\
  !*** ./src/app/iteration/iteration-module.ts ***!
  \***********************************************/
/*! exports provided: IterationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IterationModule", function() { return IterationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-module */ "+fd8");
/* harmony import */ var _iteration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iteration-component */ "267n");
/* harmony import */ var _iteration_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iteration-routing-module */ "sPbj");
/* harmony import */ var _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ngx-bootstrap-module */ "rEVn");






class IterationModule {
}
IterationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IterationModule });
IterationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IterationModule_Factory(t) { return new (t || IterationModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["NgxBootstrapModule"],
            _iteration_routing_module__WEBPACK_IMPORTED_MODULE_3__["IterationRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IterationModule, { declarations: [_iteration_component__WEBPACK_IMPORTED_MODULE_2__["IterationComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["NgxBootstrapModule"],
        _iteration_routing_module__WEBPACK_IMPORTED_MODULE_3__["IterationRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IterationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _iteration_component__WEBPACK_IMPORTED_MODULE_2__["IterationComponent"]
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["NgxBootstrapModule"],
                    _iteration_routing_module__WEBPACK_IMPORTED_MODULE_3__["IterationRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "OqMo":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/iteration/iteration-service.ts ***!
  \****************************************************************/
/*! exports provided: IterationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IterationService", function() { return IterationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class IterationService {
    constructor(http) {
        this.http = http;
    }
    getIterations() {
        return this.http.post('/api/iteration/get_iterations', {});
    }
    addNewIteration(iteration) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        const httpOptions = {
            headers: headers
        };
        return this.http.post(`/api/iteration/new _iteration`, iteration, httpOptions);
    }
    deleteIteration(iterationId) {
        return this.http.delete(`/api/iteration/remove_iteration/${iterationId}`);
    }
}
IterationService.ɵfac = function IterationService_Factory(t) { return new (t || IterationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
IterationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IterationService, factory: IterationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IterationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Uu1S":
/*!***************************************************************************!*\
  !*** ./src/app/shared/models/iteration/create-iteration-request-model.ts ***!
  \***************************************************************************/
/*! exports provided: CreateIterationRequestModel, CreateIterationRequestModelAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIterationRequestModel", function() { return CreateIterationRequestModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIterationRequestModelAPI", function() { return CreateIterationRequestModelAPI; });
class CreateIterationRequestModel {
}
class CreateIterationRequestModelAPI {
}


/***/ }),

/***/ "WDFA":
/*!********************************************************************!*\
  !*** ./src/app/shared/models/iteration/iteration-reponse-model.ts ***!
  \********************************************************************/
/*! exports provided: IterationResponseModel, IterationStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IterationResponseModel", function() { return IterationResponseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IterationStatus", function() { return IterationStatus; });
class IterationResponseModel {
    constructor() {
    }
    static FormIterationModelArray(response) {
        var iterationArray = new Array();
        for (var data of response.data) {
            var iteration = new IterationResponseModel();
            iteration.iterationId = data.iterationId;
            iteration.title = data.title;
            iteration.startDate = data.startDate;
            iteration.endDate = data.endDate;
            iteration.status = data.status;
            iteration.createdDate = data.createdDate;
            iteration.activatedDate = data.activatedDate;
            iteration.lockedDate = data.lockedDate;
            iterationArray.push(iteration);
        }
        return iterationArray;
    }
}
var IterationStatus;
(function (IterationStatus) {
    IterationStatus[IterationStatus["NOTACTIVE"] = 1] = "NOTACTIVE";
    IterationStatus[IterationStatus["ACTIVE"] = 2] = "ACTIVE";
    IterationStatus[IterationStatus["LOCKED"] = 3] = "LOCKED";
    IterationStatus[IterationStatus["DELETED"] = 4] = "DELETED";
})(IterationStatus || (IterationStatus = {}));


/***/ }),

/***/ "sPbj":
/*!*******************************************************!*\
  !*** ./src/app/iteration/iteration-routing-module.ts ***!
  \*******************************************************/
/*! exports provided: IterationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IterationRoutingModule", function() { return IterationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _iteration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iteration-component */ "267n");
/* harmony import */ var _shared_guards_check_user_authenticated_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/guards/check-user-authenticated-guard */ "Dste");






const iterationRoutes = [
    { path: '', component: _iteration_component__WEBPACK_IMPORTED_MODULE_2__["IterationComponent"], canActivate: [_shared_guards_check_user_authenticated_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] }
];
class IterationRoutingModule {
}
IterationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IterationRoutingModule });
IterationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IterationRoutingModule_Factory(t) { return new (t || IterationRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(iterationRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IterationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IterationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(iterationRoutes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=iteration-iteration-module.js.map