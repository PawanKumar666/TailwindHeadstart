import RevenueCard from "../../components/Shop/Overview/RevenueCard";

const meta = {
    title: 'Components/RevenueCard',
    component: RevenueCard,
}

export default meta;

export const Primary = {
    args: {
        title: 'Revenue',
        showWarning: True,
        amount: "100",
        numOrders: "10",
        redirectToOrderLink: "https://www.google.com",
    }
};