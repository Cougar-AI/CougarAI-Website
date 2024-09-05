// list of officers will be used to populate the officer cards. Update before each semester. (Or whenever an officer position changes)
// the role is a redundancy but is here in the case where you have duplicate officer positions (i.e. 2 webmasters, or if the mapped field was a name and you had 2 identical names in the future)
export const officers = new Map<string, { name: string, role: string, linkedIn: string, hasHeadshot: boolean }>([
    ['President', { name: 'Jonathan Gaucin', role: 'President', linkedIn: 'https://www.linkedin.com/in/jonathangaucin/', hasHeadshot: true }],
    ['Vice_President_Internal', { name: 'Krishna Trivedi', role: 'VP Internal', linkedIn: 'https://www.linkedin.com/in/krishna-trivedi-quant/', hasHeadshot: true }],
    ['Vice_President_External', { name: 'Clark Horak', role: 'VP External', linkedIn: 'https://www.linkedin.com/in/clark-horak-77b158228/', hasHeadshot: true }],
    ['Secretary', { name: 'Iesu Agapito', role: 'Secretary', linkedIn: 'https://www.linkedin.com/in/iesu-agapito/', hasHeadshot: true }],
    ['Treasurer', { name: 'TBD', role: 'Treasurer', linkedIn: 'https://www.linkedin.com', hasHeadshot: false }],
    ['Marketing', { name: 'Sanam Davariar', role: 'Marketing', linkedIn: 'https://www.linkedin.com/in/sanamdavariar/', hasHeadshot: true }],
    ['Events', { name: 'Jose Conde', role: 'Events', linkedIn: 'https://www.linkedin.com/in/jose-conde-ab78002aa/', hasHeadshot: true }],
    ['Project_Director', { name: 'Harvey Pham', role: 'Project Director', linkedIn: 'https://www.linkedin.com/in/harveyphm/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', hasHeadshot: true }],
    ['Technical_Officer', { name: 'Andrew Bradley', role: 'Technical Officer', linkedIn: 'https://www.linkedin.com/in/ahbradl2/', hasHeadshot: true}],
    ['Technical_Officer_2', { name: 'Alexander Sangurima', role: 'Technical Officer', linkedIn: 'https://www.linkedin.com/in/asangurima/', hasHeadshot: false}],
    ['Historian', { name: 'Gyan Andrei Gabilan', role: 'Historian', linkedIn: 'https://www.linkedin.com/in/gyanandreigabilan/', hasHeadshot: true }],
    ['Webmaster', { name: 'Gurpreet Singh', role: 'Webmaster', linkedIn: 'https://www.linkedin.com/in/gurpreet-singh0/', hasHeadshot: true}],
])
