import RevenueCard from './Overview/RevenueCard';
import PayoutCard from './Overview/PayoutCard';
import LeftPanel from './LeftPanel/LeftPanel';
import TopBar from './TopBar/TopBar';

function ShopHome(){
    return (
        <div className='grid grid-cols-12 h-screen'>
            <div className='col-span-2'>
                <LeftPanel />
            </div>
            <div className='col-span-10 flex flex-col bg-gray-100'>
                <TopBar />
                <div className='p-2 flex justify-around space-x-4'>
                    <PayoutCard 
                        title="Payout" 
                        hasWarning={true} 
                        amount="$1000" 
                        numOrders="100" 
                        redirectToOrderLink="https://www.google.com"
                        nextPaymentDate="Today, 4:00 PM"/>
                    <RevenueCard 
                        title="Revenue" 
                        showWarning={true} 
                        amount="$1000" 
                        numOrders="100" 
                        redirectToOrderLink="https://www.google.com"/>
                    <RevenueCard 
                        title="Revenue" 
                        showWarning={true} 
                        amount="$1000" 
                        numOrders="100" 
                        redirectToOrderLink="https://www.google.com"/>
                </div>
            </div>
        </div>  
    )
}

export default ShopHome;