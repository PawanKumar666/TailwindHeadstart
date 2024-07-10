import TopSection from './TopSection'
import OptionsBar from './OptionsBar'

export default function LeftPanel() {
    return (
        <div className='bg-blue-900 text-white text-center h-screen'>
            <TopSection storeLink="https://www.google.com" />
            <OptionsBar />
        </div>
    )
}