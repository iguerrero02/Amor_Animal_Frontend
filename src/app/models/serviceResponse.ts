export class ServiceResponse<T> {
    status: string;
    message: string;
    count: number;
    data: T;
    lista: T[];

    //list: T[];
}