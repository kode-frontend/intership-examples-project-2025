import {PaymentServices} from "./payment-services";
import {useMemo, useState} from "react";
import {PaymentService} from "@entities/payment-service/types";
import {mapToUi} from "./map-to-ui";

type Props = {
    onGoToPaymentCreate: (id: string, title: string) => void;
}

export const PaymentServicesConnector = ({ onGoToPaymentCreate }: Props) => {
    const [data, setData] = useState<PaymentService[]>([]); // use hook from entities
    const [search, setSearch] = useState<string>("");

    const handleFilter = (value: string) => {
        setSearch(value);
    }
    const handleCreatePayment = (id: string, title: string) => {
        onGoToPaymentCreate(id, title);
    }
    const uiData = useMemo(() => data.map(mapToUi), [data]);
    const filteredData = uiData.filter(i => i.title == search);

    return <PaymentServices data={filteredData} onFilter={handleFilter} onCreatePayment={handleCreatePayment} />
}
