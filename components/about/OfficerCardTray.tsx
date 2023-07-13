import OfficerCard from './OfficerCard';
import { officers } from '@/util/officerInformation/officers'

const OfficerCardTray = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-y-5 md:gap-y-9 md:gap-x-9">
         {officers.map(([officerRole, officerName, officerLinkedIn], index) => (
            <OfficerCard key={index} name={officerName} officerRole={officerRole} officerLinkedIn={officerLinkedIn}></OfficerCard>
         ))}
        </div>
    );
}

export default OfficerCardTray;

