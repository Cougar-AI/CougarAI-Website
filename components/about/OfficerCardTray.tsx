import OfficerCard from './OfficerCard';
import { officers } from '@/util/officerInformation/officers'

const OfficerCardTray = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-y-5 md:gap-y-9 md:gap-x-9 z-10">
         {Array.from(officers.entries()).map(([officerKey, officerDetails], index) => (
            <OfficerCard key={index} name={officerDetails.name} officerRole={officerDetails.role} officerLinkedIn={officerDetails.linkedIn} hasHeadshot={officerDetails.hasHeadshot}></OfficerCard>
         ))}
        </div>
    );
}

export default OfficerCardTray;

