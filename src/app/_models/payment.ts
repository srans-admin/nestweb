export class Payment{
    id: number;
    userId: number;
    date: Date = new Date();
    name: string;
    roomName: string;
    roomType: string;
    paymentThrough: string;
    transactionId: number;
    bankName: string;
    roomRent: number;
    depositAmount: number;
    discountAmount:number = 0;
    adminId: number;
}