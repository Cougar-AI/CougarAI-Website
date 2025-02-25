// list of officers will be used to populate the officer cards. Update before each semester. (Or whenever an officer position changes)
// the role is a redundancy but is here in the case where you have duplicate officer positions (i.e. 2 webmasters, or if the mapped field was a name and you had 2 identical names in the future)
export const officers = new Map<string, { name: string, role: string, linkedIn: string, hasHeadshot: boolean }>([
    ['President', { name: 'Jonathan Gaucin', role: 'President', linkedIn: 'https://www.linkedin.com/in/jonathangaucin/', hasHeadshot: true }],
    ['Vice_President_Internal', { name: 'Jose Conde', role: 'VP Internal', linkedIn: 'https://www.linkedin.com/in/jose-conde-ab78002aa/', hasHeadshot: true }],
    ['Vice_President_External', { name: 'Clark Horak', role: 'VP External', linkedIn: 'https://www.linkedin.com/in/clark-horak-77b158228/', hasHeadshot: true }],
    ['Secretary', { name: 'Nilesh Garg', role: 'Secretary', linkedIn: 'https://www.linkedin.com/in/nileshgarg-robotics-ai/', hasHeadshot: true }],
    ['Treasurer', { name: 'Mai Redfearn', role: 'Treasurer', linkedIn: 'https://www.linkedin.com/in/mnredfearn/', hasHeadshot: true }],
    ['Marketing', { name: 'Gyan Andrei Gabilan', role: 'Marketing', linkedIn: 'https://www.linkedin.com/in/gyanandreigabilan/', hasHeadshot: true }],
    ['Corporate Relations Committee', {name: "Katherine Hernandez", role: "Corporate Relations Committee", linkedIn:"https://www.linkedin.com/in/katherine-hernandez-5a3438328/", hasHeadshot: true}],
    ['Webmaster', { name: 'Jason Quach', role: 'Webmaster', linkedIn: 'https://www.linkedin.com/in/jason-quach-478a6225b/', hasHeadshot: true}],
    ['Webmaster Commettee', { name: 'Miguel Rodriguez', role: 'Webmaster Committee', linkedIn: 'https://www.linkedin.com/in/miguel-rodriguez302002/', hasHeadshot: true}],
    ['Workshop Committee', { name: 'Isaac Gonzalez', role: "Workshop Committee", linkedIn: 'https://www.linkedin.com/in/isaac-gonzalez-234328337/', hasHeadshot: true}],
    ['Workshop Committee 2', { name: 'Asibong Sylvia Ephraim', role: "Workshop Committee", linkedIn: 'https://www.linkedin.com/in/asibong-ephraim-9685b6330/', hasHeadshot: true}],
    ['Marketing Committee', { name: 'Khyaati Khanna', role: "Marketing Committee", linkedIn: 'http://www.linkedin.com/in/khyaati-khanna/', hasHeadshot: true}],
    ['Projects Officer', { name: 'Fredy Orellana', role: "Projects Officer", linkedIn: 'https://www.linkedin.com/in/feorella/', hasHeadshot: true}],
    ['Technical_Officer', { name: 'Dylan Berens', role: 'Technical Officer', linkedIn: 'https://www.linkedin.com/in/dylanberens', hasHeadshot: true}],
    ['Technical_Officer 2', { name: 'Sahran Ashoor', role: 'Technical Officer', linkedIn: 'https://linkedin.com/in/ashoorsahran/', hasHeadshot: false}],
    ['Events', { name: 'TBD', role: 'Events', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false }],
    ['Project_Director', { name: 'TBA', role: 'Project Director', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false }],
    ['Historian', { name: 'TBD', role: 'Historian', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false }],
])
