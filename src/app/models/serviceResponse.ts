export class ServiceResponse<T> {
    status: string;
    message: string;
    count: number;
    response: T;
    lista: T[];

    //list: T[];
}