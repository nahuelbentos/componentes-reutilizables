export interface APIResponse {
    status:  number;
    message: string;
    data:    any[] | any;
    errors:  any;
    links:   any[];
}

