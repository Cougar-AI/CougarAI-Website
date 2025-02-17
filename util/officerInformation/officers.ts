// list of officers will be used to populate the officer cards. Update before each semester. (Or whenever an officer position changes)
// the role is a redundancy but is here in the case where you have duplicate officer positions (i.e. 2 webmasters, or if the mapped field was a name and you had 2 identical names in the future)
export const officers = new Map<string, { name: string, role: string, linkedIn: string, hasHeadshot: boolean }>([
    ['President', { name: 'Jonathan Gaucin', role: 'President', linkedIn: 'https://www.linkedin.com/in/jonathangaucin/', hasHeadshot: true }],
    ['Vice_President_Internal', { name: 'Jose Conde', role: 'VP Internal', linkedIn: 'https://www.linkedin.com/in/jose-conde-ab78002aa/', hasHeadshot: true }],
    ['Vice_President_External', { name: 'Clark Horak', role: 'VP External', linkedIn: 'https://www.linkedin.com/in/clark-horak-77b158228/', hasHeadshot: true }],
    ['Secretary', { name: 'TBD', role: 'Secretary', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false }],
    ['Treasurer', { name: 'TBD', role: 'Treasurer', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false }],
    ['Marketing', { name: 'TBD', role: 'Marketing', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false }],
    ['Events', { name: 'TBD', role: 'Events', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false }],
    ['Project_Director', { name: 'TBD', role: 'Project Director', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false }],
    ['Technical_Officer', { name: 'TBD', role: 'Technical Officer', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false}],
    ['Technical_Officer_2', { name: 'TBD', role: 'Technical Officer', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false}],
    ['Historian', { name: 'TBD', role: 'Historian', linkedIn: 'https://www.linkedin.com/', hasHeadshot: true }],
    ['Webmaster', { name: 'TBD', role: 'Webmaster', linkedIn: 'https://www.linkedin.com/', hasHeadshot: false}],
])
