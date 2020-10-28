export class ApiResponse {
    statusCode: number;
    data: any;
    errorMessage: string;
    errors: Array<ModelStateValiationErrors> = new Array<ModelStateValiationErrors>();
}

class ModelStateValiationErrors {
    key: string;
    error: string;
}