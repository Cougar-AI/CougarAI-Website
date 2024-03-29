// list of officers will be used to populate the officer cards. Update before each semester. (Or whenever an officer position changes)
// the role is a redundancy but is here in the case where you have duplicate officer positions (i.e. 2 webmasters, or if the mapped field was a name and you had 2 identical names in the future)
export const officers = new Map<string, { name: string, role: string, linkedIn: string, hasHeadshot: boolean }>([
    ['President', { name: 'Zeel Engineer', role: 'President', linkedIn: 'https://www.linkedin.com/in/zeel-engineer-536265216/', hasHeadshot: true }],
    ['Vice_President_Internal', { name: 'Ashish Job', role: 'VP Internal', linkedIn: 'https://www.linkedin.com/in/ashish-job/', hasHeadshot: true }],
    ['Vice_President_External', { name: 'Denzel Wilson', role: 'VP External', linkedIn: 'https://www.linkedin.com/in/denzel-wilson-2422481a2/', hasHeadshot: true }],
    ['Secretary', { name: 'Clark Horak', role: 'Secretary', linkedIn: 'https://www.linkedin.com/in/clark-horak-77b158228/', hasHeadshot: true }],
    ['Treasurer', { name: 'Mai Hoang', role: 'Treasurer', linkedIn: 'https://www.linkedin.com/in/mai-hoang-760a53255/', hasHeadshot: true }],
    ['Marketing', { name: 'Briana Marcos-Elkamand', role: 'Marketing', linkedIn: 'https://www.linkedin.com/in/briana-marcos-elkamand-521477234/', hasHeadshot: true }],
    ['Events', { name: 'Jonathan Gaucin', role: 'Events', linkedIn: 'https://www.linkedin.com/in/jonathangaucin/', hasHeadshot: true }],
    ['Technical_Officer', { name: 'Sagun Kayastha', role: 'Technical Officer', linkedIn: 'https://www.linkedin.com/in/sagun-kayastha-19516683/', hasHeadshot: true }],
    ['Historian', { name: 'Diana Nguyen', role: 'Historian', linkedIn: 'https://www.linkedin.com/in/diananguyens/', hasHeadshot: true }],
    ['Webmaster', { name: 'TBD', role: 'Webmaster', linkedIn: 'https://www.linkedin.com', hasHeadshot: false }],
    ['Webmaster_2', { name: 'Tariq Achor Zyad', role: 'Web Custodian', linkedIn: 'https://www.linkedin.com/in/tachorzy', hasHeadshot: true }],
])
