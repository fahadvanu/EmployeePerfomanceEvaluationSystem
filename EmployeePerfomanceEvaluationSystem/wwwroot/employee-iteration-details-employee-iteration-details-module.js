(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-iteration-details-employee-iteration-details-module"],{

/***/ "/Kcw":
/*!************************************************************************************!*\
  !*** ./src/app/employee-iteration-details/employee-iteration-details-component.ts ***!
  \************************************************************************************/
/*! exports provided: EmployeeIterationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeIterationDetailsComponent", function() { return EmployeeIterationDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_models_iteration_iteration_reponse_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/iteration/iteration-reponse-model */ "WDFA");
/* harmony import */ var _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/constant/constants */ "X5XA");
/* harmony import */ var _shared_models_user_user_response_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/user/user-response-model */ "S8qu");
/* harmony import */ var _shared_models_iteration_iteration_details_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/iteration/iteration-details-response */ "wkPD");
/* harmony import */ var _shared_services_iteration_iteration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/iteration/iteration-service */ "OqMo");
/* harmony import */ var _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/spinner/spinner-service */ "3PAx");
/* harmony import */ var _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/toastr/toastr-service */ "jonD");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "yyhP");














function EmployeeIterationDetailsComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const iteration_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", iteration_r5.iterationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", iteration_r5.title, " ");
} }
function EmployeeIterationDetailsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.user.firstName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.user.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.user.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.user.reportingManager, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.user.roleName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.user.departmentName, " ");
} }
function EmployeeIterationDetailsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Activated Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.iterationDetailResponseModel.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.iterationDetailResponseModel.startDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.iterationDetailResponseModel.endDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.iterationDetailResponseModel.createdDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.iterationDetailResponseModel.activatedDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getIterationStatus(ctx_r3.iterationDetailResponseModel.status), " ");
} }
function EmployeeIterationDetailsComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Current Step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Steps Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "progressbar", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getIterationState(ctx_r4.iterationDetailResponseModel.iterationStateId), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.iterationStepCompleted)("striped", true)("animate", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getStepsCompleted(ctx_r4.iterationDetailResponseModel.iterationStateId), " / 4 ");
} }
class EmployeeIterationDetailsComponent {
    constructor(iterationService, spinnerService, toastrNotificationService, cdRef, modalService, router) {
        this.iterationService = iterationService;
        this.spinnerService = spinnerService;
        this.toastrNotificationService = toastrNotificationService;
        this.cdRef = cdRef;
        this.modalService = modalService;
        this.router = router;
        this.iterations = new Array();
        this.loading = false;
        this.selectedReviewPeriod = '';
        this.iterationStepCompleted = 0;
    }
    ngOnInit() {
        this.getIterationDetailScreenData();
    }
    getIterationDetailScreenData() {
        this.loading = true;
        this.spinnerService.updateMessage('Loading.....');
        this.spinnerService.busy();
        this.iterationService.getIterationDetailScreenData()
            .subscribe((responses) => {
            if (responses[0].data != null) {
                this.iterations = _shared_models_iteration_iteration_reponse_model__WEBPACK_IMPORTED_MODULE_1__["IterationResponseModel"].FormIterationModelArray(responses[0]);
            }
            if (responses[1].data != null) {
                this.user = _shared_models_user_user_response_model__WEBPACK_IMPORTED_MODULE_3__["UserResponseModel"].formUserResponseModel(responses[1]);
            }
            console.log(this.user);
            this.loading = false;
            this.spinnerService.idle();
        }, error => {
            this.loading = false;
            this.spinnerService.idle();
            console.log('Exception occured while fetching iteration details screen data from Database');
        });
    }
    getIterationDetails() {
        this.loading = true;
        this.spinnerService.updateMessage('Loading iteration details.....');
        this.spinnerService.busy();
        this.iterationService.getEmployeeIterationDetails(this.selectedReviewPeriod * 1)
            .subscribe((response) => {
            if (response.data != null) {
                this.iterationDetailResponseModel = _shared_models_iteration_iteration_details_response__WEBPACK_IMPORTED_MODULE_4__["IterationDetailsResponse"].FormIterationDetailsModel(response);
                this.formIterationStepCompleted();
            }
            console.log(this.iterationDetailResponseModel);
            this.loading = false;
            this.spinnerService.idle();
        }, error => {
            this.loading = false;
            this.spinnerService.idle();
            console.log('Exception occured while fetching iteration details from Database');
        });
    }
    getIterationStatus(status) {
        if (status == _shared_models_iteration_iteration_reponse_model__WEBPACK_IMPORTED_MODULE_1__["IterationStatus"].NOTACTIVE)
            return _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].NOTACTIVE;
        if (status == _shared_models_iteration_iteration_reponse_model__WEBPACK_IMPORTED_MODULE_1__["IterationStatus"].ACTIVE)
            return _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ACTIVE_ITERATION;
        if (status == _shared_models_iteration_iteration_reponse_model__WEBPACK_IMPORTED_MODULE_1__["IterationStatus"].DELETED)
            return _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].DELETED;
        if (status == _shared_models_iteration_iteration_reponse_model__WEBPACK_IMPORTED_MODULE_1__["IterationStatus"].LOCKED)
            return _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].LOCKED;
    }
    getIterationState(state) {
        if (state == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.NOT_STARTED)
            return _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].NOT_STARTED;
        if (state == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.SET_GOALS)
            return _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].SET_GOALS;
        if (state == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.SELF_EVALUATION)
            return _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].EMPLOYEE_EVALUATION;
        if (state == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.MANAGER_EVALUATION)
            return _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].MANAGER_EVALUATION;
        if (state == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING)
            return _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].REVIEW_METTING;
        if (state == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.COMPLETED)
            return _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].COMPLETE;
    }
    getStepsCompleted(state) {
        if (state == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.NOT_STARTED)
            return 0;
        if (state == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.SET_GOALS)
            return 0;
        if (state == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.SELF_EVALUATION)
            return 1;
        if (state == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.MANAGER_EVALUATION)
            return 2;
        if (state == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING)
            return 3;
        if (state == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.COMPLETED)
            return 4;
    }
    formIterationStepCompleted() {
        if (this.iterationDetailResponseModel.iterationStateId == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.NOT_STARTED)
            this.iterationStepCompleted = 0;
        if (this.iterationDetailResponseModel.iterationStateId == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.SET_GOALS)
            this.iterationStepCompleted = 0;
        if (this.iterationDetailResponseModel.iterationStateId == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.SELF_EVALUATION)
            this.iterationStepCompleted = 25;
        if (this.iterationDetailResponseModel.iterationStateId == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.MANAGER_EVALUATION)
            this.iterationStepCompleted = 50;
        if (this.iterationDetailResponseModel.iterationStateId == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.ACKNOWLEGDE_REVIEW_MEETING)
            this.iterationStepCompleted = 75;
        if (this.iterationDetailResponseModel.iterationStateId == _shared_constant_constants__WEBPACK_IMPORTED_MODULE_2__["Constant"].ITERATION_STATE.COMPLETED)
            this.iterationStepCompleted = 100;
    }
}
EmployeeIterationDetailsComponent.ɵfac = function EmployeeIterationDetailsComponent_Factory(t) { return new (t || EmployeeIterationDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_iteration_iteration_service__WEBPACK_IMPORTED_MODULE_5__["IterationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); };
EmployeeIterationDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeIterationDetailsComponent, selectors: [["ng-component"]], decls: 24, vars: 5, consts: [[1, "container_row"], [1, "row"], [1, "col-md-10", "offset-xl-1", "title_Col"], [1, "title_iteration_details"], [1, "col-md-10", "offset-xl-1"], ["novalidate", ""], ["iterationDetailsForm", "ngForm"], [1, "col-md-12", "review_period_col"], [1, "review_period_container"], [1, "form-group", "row", "control-row", "review_period_dropdown"], ["for", "reviewPeriod", 1, "label_controls", "col-form-label", "col-sm-4"], [1, "input_controls", "col-sm-8"], ["id", "reviewPeriod", "name", "reviewPeriod", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [3, "value"], [1, "col-md-12", "user_details_div"], [1, "user_details_container"], [1, "row", "user_details_container_row"], [1, "col-sm-12"], [1, "label_controls", "label_controls_bold", "col-form-label", "col-sm-4"], [1, "label_controls", "col-form-label", "col-sm-8"], [1, "col-md-12", "iteration_details_div"], [1, "iteration_details_container"], [1, "row", "iteration_details_container_row"], [1, "label_controls", "label_controls_bold", "col-form-label", "col-sm-5"], [1, "label_controls", "col-form-label", "col-sm-7"], ["max", "100", "type", "danger", 3, "value", "striped", "animate"]], template: function EmployeeIterationDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Iteration Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Review Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeeIterationDetailsComponent_Template_select_ngModelChange_17_listener($event) { return ctx.selectedReviewPeriod = $event; })("change", function EmployeeIterationDetailsComponent_Template_select_change_17_listener() { return ctx.getIterationDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EmployeeIterationDetailsComponent_option_20_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EmployeeIterationDetailsComponent_div_21_Template, 35, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EmployeeIterationDetailsComponent_div_22_Template, 35, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EmployeeIterationDetailsComponent_div_23_Template, 16, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedReviewPeriod);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.iterations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iterationDetailResponseModel != null && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iterationDetailResponseModel != null && !ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_12__["ProgressbarComponent"]], styles: [".container_row[_ngcontent-%COMP%] {\r\n    background: #F1F1F1;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.title_Col[_ngcontent-%COMP%] {\r\n    margin-top: 1em;\r\n}\r\n\r\n.label_controls_bold[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.title_iteration_details[_ngcontent-%COMP%] {\r\n    background: #ffff;\r\n    height: 80px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-shadow: 10px 10px 5px #aaaaaa;\r\n}\r\n\r\n.review_period_container[_ngcontent-%COMP%] {\r\n    background: #ffff;\r\n    height: 80px;\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    margin-top: 2em;\r\n    width: 100%;\r\n    box-shadow: 10px 10px 5px #aaaaaa;\r\n    padding-left: 12px !important;\r\n   \r\n}\r\n\r\n.review_period_details_container[_ngcontent-%COMP%] {\r\n    background: #ffff;\r\n    height: 150px;\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    margin-top: 2em;\r\n    width: 100%;\r\n    box-shadow: 10px 10px 5px #aaaaaa;\r\n  \r\n}\r\n\r\n.review_period_details_container_row[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n.review_period_col[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n}\r\n\r\n.review_period_dropdown[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    width: 50%;\r\n}\r\n\r\n.user_details_div[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n}\r\n\r\n.user_details_container[_ngcontent-%COMP%] {\r\n    background: #ffff;\r\n    height: 150px;\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    margin-top: 2em;\r\n    width: 100%;\r\n    box-shadow: 10px 10px 5px #aaaaaa;\r\n    margin-bottom: 20px;\r\n\r\n}\r\n\r\n.user_details_container_row[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n.iteration_details_container[_ngcontent-%COMP%] {\r\n    background: #ffff;\r\n    height: 150px;\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    margin-top: 2em;\r\n    width: 100%;\r\n    box-shadow: 10px 10px 5px #aaaaaa;\r\n    margin-bottom: 20px;\r\n    margin-top: 0px;\r\n}\r\n\r\n.iteration_details_container_row[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n.iteration_details_div[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtaXRlcmF0aW9uLWRldGFpbHMvZW1wbG95ZWUtaXRlcmF0aW9uLWRldGFpbHMtY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1pdGVyYXRpb24tZGV0YWlscy9lbXBsb3llZS1pdGVyYXRpb24tZGV0YWlscy1jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXJfcm93IHtcclxuICAgIGJhY2tncm91bmQ6ICNGMUYxRjE7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4udGl0bGVfQ29sIHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxuLmxhYmVsX2NvbnRyb2xzX2JvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4udGl0bGVfaXRlcmF0aW9uX2RldGFpbHMge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAjYWFhYWFhO1xyXG59XHJcblxyXG4ucmV2aWV3X3BlcmlvZF9jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAjYWFhYWFhO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgIFxyXG59XHJcblxyXG4ucmV2aWV3X3BlcmlvZF9kZXRhaWxzX2NvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAjYWFhYWFhO1xyXG4gIFxyXG59XHJcblxyXG4ucmV2aWV3X3BlcmlvZF9kZXRhaWxzX2NvbnRhaW5lcl9yb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnJldmlld19wZXJpb2RfY29sIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnJldmlld19wZXJpb2RfZHJvcGRvd24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnVzZXJfZGV0YWlsc19kaXYge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4udXNlcl9kZXRhaWxzX2NvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAjYWFhYWFhO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbn1cclxuXHJcbi51c2VyX2RldGFpbHNfY29udGFpbmVyX3JvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaXRlcmF0aW9uX2RldGFpbHNfY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4ICNhYWFhYWE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4uaXRlcmF0aW9uX2RldGFpbHNfY29udGFpbmVyX3JvdyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaXRlcmF0aW9uX2RldGFpbHNfZGl2IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeIterationDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './employee-iteration-details-component.html',
                styleUrls: ['./employee-iteration-details-component.css']
            }]
    }], function () { return [{ type: _shared_services_iteration_iteration_service__WEBPACK_IMPORTED_MODULE_5__["IterationService"] }, { type: _shared_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"] }, { type: _shared_services_toastr_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrNotificationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }]; }, null); })();


/***/ }),

/***/ "f1Xw":
/*!*****************************************************************************************!*\
  !*** ./src/app/employee-iteration-details/employee-iteration-details-routing-module.ts ***!
  \*****************************************************************************************/
/*! exports provided: EmployeeIterationDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeIterationDetailsRoutingModule", function() { return EmployeeIterationDetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _employee_iteration_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-iteration-details-component */ "/Kcw");
/* harmony import */ var _shared_guards_check_user_authenticated_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/guards/check-user-authenticated-guard */ "Dste");






const iterationRoutes = [
    { path: '', component: _employee_iteration_details_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeIterationDetailsComponent"], canActivate: [_shared_guards_check_user_authenticated_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]] }
];
class EmployeeIterationDetailsRoutingModule {
}
EmployeeIterationDetailsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmployeeIterationDetailsRoutingModule });
EmployeeIterationDetailsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmployeeIterationDetailsRoutingModule_Factory(t) { return new (t || EmployeeIterationDetailsRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(iterationRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeIterationDetailsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeIterationDetailsRoutingModule, [{
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


/***/ }),

/***/ "qfz4":
/*!*********************************************************************************!*\
  !*** ./src/app/employee-iteration-details/employee-iteration-details-module.ts ***!
  \*********************************************************************************/
/*! exports provided: EmployeeIterationDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeIterationDetailsModule", function() { return EmployeeIterationDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-module */ "+fd8");
/* harmony import */ var _employee_iteration_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-iteration-details-component */ "/Kcw");
/* harmony import */ var _employee_iteration_details_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-iteration-details-routing-module */ "f1Xw");
/* harmony import */ var _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ngx-bootstrap-module */ "rEVn");






class EmployeeIterationDetailsModule {
}
EmployeeIterationDetailsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmployeeIterationDetailsModule });
EmployeeIterationDetailsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmployeeIterationDetailsModule_Factory(t) { return new (t || EmployeeIterationDetailsModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["NgxBootstrapModule"],
            _employee_iteration_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeIterationDetailsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeIterationDetailsModule, { declarations: [_employee_iteration_details_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeIterationDetailsComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["NgxBootstrapModule"],
        _employee_iteration_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeIterationDetailsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeIterationDetailsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _employee_iteration_details_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeIterationDetailsComponent"]
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["NgxBootstrapModule"],
                    _employee_iteration_details_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeIterationDetailsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "wkPD":
/*!***********************************************************************!*\
  !*** ./src/app/shared/models/iteration/iteration-details-response.ts ***!
  \***********************************************************************/
/*! exports provided: IterationDetailsResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IterationDetailsResponse", function() { return IterationDetailsResponse; });
class IterationDetailsResponse {
    constructor() {
    }
    static FormIterationDetailsModel(response) {
        let iterationDetails = new IterationDetailsResponse();
        iterationDetails.iterationId = response.data.iterationId;
        iterationDetails.title = response.data.title;
        iterationDetails.startDate = response.data.startDate;
        iterationDetails.endDate = response.data.endDate;
        iterationDetails.status = response.data.status;
        iterationDetails.createdDate = response.data.createdDate;
        iterationDetails.activatedDate = response.data.activatedDate;
        iterationDetails.iterationStateId = response.data.iterationStateId;
        return iterationDetails;
    }
}


/***/ })

}]);
//# sourceMappingURL=employee-iteration-details-employee-iteration-details-module.js.map