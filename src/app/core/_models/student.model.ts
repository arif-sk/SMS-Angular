export class StudentModel{
    constructor(init?: Partial<StudentModel>) {
		Object.assign(this, init);
	}
    id: number;
    studentName: string;
    studentEmail: string;
    studentAddress: string;
    studentAge: number;
}