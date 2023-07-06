import OfficerCard from './OfficerCard';
import { officers } from '@/util/officerInformation/officers'

const OfficerCardTray = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:max-2xl:grid-cols-4 gap-y-5 md:max-2xl:gap-y-7 md:max-2xl:gap-x-7">
         {officers.map(([officerRole, officerName, officerLinkedIn], index) => (
            <OfficerCard key={index} name={officerName} officerRole={officerRole} officerLinkedIn={officerLinkedIn}></OfficerCard>
         ))}
        </div>
    );
}

export default OfficerCardTray;

