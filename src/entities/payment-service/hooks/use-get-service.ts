import {PaymentService} from "@entities/payment-service/types";

export const useGetServices = (): Promise<PaymentService[]> => {
    return new Promise<PaymentService[]>((resolve) => {
        setTimeout(() => {
            resolve([{id: "1", title: "title 1", type: "A"}, {id: "1", title: "title 2", type: "A"}])
        }, 4000);
    });
}
