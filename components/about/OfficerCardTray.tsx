import OfficerCard from './OfficerCard';
import { officers } from '@/util/officerInformation/officers'

const OfficerCardTray = () => {
    return(
        <div className="flex flex-col md:max-2xl:flex-row flex-wrap gap-y-4 md:max-2xl:gap-y-6 md:max-2xl:gap-x-6">
         {officers.map(([officerRole, officerName, officerLinkedIn], index) => (
            <OfficerCard key={index} name={officerName} officerRole={officerRole} officerLinkedIn={officerLinkedIn}></OfficerCard>
         ))}
        </div>
    );
}

export default OfficerCardTray;

