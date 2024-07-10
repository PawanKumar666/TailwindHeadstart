import TopSection from './TopSection'
import OptionsBar from './OptionsBar'

export default function LeftPanel() {
    return (
        <div className='bg-gray-600 text-white text-center'>
            <TopSection storeLink="https://www.google.com" />
            <OptionsBar />
        </div>
    )
}