export declare class CreateTaskDto {
    question: string;
    readonly options: [
        {
            text: string;
            veracity: boolean;
        }
    ];
    readonly rating: number;
}
