import OfficerCard from './OfficerCard';
import { officers } from '@/util/officerInformation/officers'

const OfficerCardTray = () => {
    return(
        <div>
         {officers.map(([officerRole, officerName, officerLinkedIn], index) => (
            <OfficerCard name={officerName} officerRole={officerRole} officerLinkedIn={officerLinkedIn}></OfficerCard>
         ))}
        </div>
    );
}

export default OfficerCardTray;

