// list of officers will be used to populate the officer cards. Update before each semester. (Or whenever an officer position changes)
// the role is a redundancy but is here in the case where you have duplicate officer positions (i.e. 2 webmasters, or if the mapped field was a name and you had 2 identical names in the future)
export const officers = new Map<string, { name: string, role: string, linkedIn: string, hasHeadshot: boolean }>([
    ['President', { name: 'Jonathan Gaucin', role: 'President', linkedIn: 'https://www.linkedin.com/in/jonathangaucin/', hasHeadshot: true }],
    ['Vice_President_Internal', { name: 'Jose Conde', role: 'VP Internal', linkedIn: 'https://www.linkedin.com/in/jose-conde-ab78002aa/', hasHeadshot: true }],
    ['Vice_President_External', { name: 'Clark Horak', role: 'VP External', linkedIn: 'https://www.linkedin.com/in/clark-horak-77b158228/', hasHeadshot: true }],
    ['Secretary', { name: 'Nilesh Garg', role: 'Secretary', linkedIn: 'https://www.linkedin.com/in/nileshgarg-robotics-ai/', hasHeadshot: true }],
    ['Treasurer', { name: 'Mai Nguyen', role: 'Treasurer', linkedIn: 'https://www.linkedin.com/in/mnredfearn/', hasHeadshot: true }],
    ['Marketing', { name: 'Gyan Andrei Gabilan', role: 'Marketing', linkedIn: 'https://www.linkedin.com/in/gyanandreigabilan/', hasHeadshot: true }],
    ['Events', { name: 'TBD', role: 'Events', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false }],
    ['Project_Director', { name: 'TBA', role: 'Project Director', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false }],
    ['Technical_Officer', { name: 'TBD', role: 'Technical Officer', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false}],
    ['Technical_Officer_2', { name: 'TBD', role: 'Technical Officer', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false}],
    ['Historian', { name: 'TBD', role: 'Historian', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false }],
    ['Webmaster', { name: 'Jason Quach', role: 'Webmaster', linkedIn: 'https://www.linkedin.com/in/jason-quach-478a6225b/', hasHeadshot: true}],
    ['Workshop Committee', { name: 'Isaac', role: "Workshop Committee", linkedIn: 'https://www.linkedin.com/', hasHeadshot: false}],
    ['Workshop Committee 2', { name: 'Asibong Sylvia Ephraim', role: "Workshop Committee", linkedIn: 'https://www.linkedin.com/in/asibong-ephraim-9685b6330/', hasHeadshot: true}],
    ['Marketing Committee', { name: 'Khyaati Khanna', role: "Marketing Committee", linkedIn: 'http://www.linkedin.com/in/khyaati-khanna/', hasHeadshot: true}],
    ['Projects Officer', { name: 'Fredy', role: "Projects Officer ", linkedIn: 'https://www.linkedin.com/', hasHeadshot: false}],
])
