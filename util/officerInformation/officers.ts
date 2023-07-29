// list of officers will be used to populate the officer cards. Update before each semester. (Or whenever an officer position changes)
// the role is a redundancy but is here in the case where you have duplicate officer positions (i.e. 2 webmasters, or if the mapped field was a name and you had 2 identical names in the future)
export const officers = new Map<string, { name: string, role: string, linkedIn: string }>([
    ['President', { name: 'Zeel Engineer', role: 'President', linkedIn: 'https://www.linkedin.com/in/zeel-engineer-536265216/' }],
    ['Vice_President', { name: 'Denzel Wilson', role: 'Vice President', linkedIn: 'https://www.linkedin.com/in/denzel-wilson-2422481a2/' }],
    ['Secretary', { name: 'Clark Horak', role: 'Secretary', linkedIn: 'https://www.linkedin.com/in/clark-horak-77b158228/' }],
    ['Treasurer', { name: 'Mai Hoang', role: 'Treasurer', linkedIn: 'https://www.linkedin.com/in/mai-hoang-760a53255/' }],
    ['Marketing', { name: 'Briana Marcos-Elkamand', role: 'Marketing', linkedIn: 'https://www.linkedin.com/in/briana-marcos-elkamand-521477234/' }],
    ['Relations', { name: 'Ashish Job', role: 'Relations', linkedIn: 'https://www.linkedin.com/in/ashish-job/' }],
    ['Events', { name: 'Jonathan Gaucin', role: 'Events', linkedIn: 'https://www.linkedin.com/in/jonathangaucin/' }],
    ['Technical_Officer', { name: 'Sagun Kayastha', role: 'Technical Officer', linkedIn: 'https://www.linkedin.com/in/sagun-kayastha-19516683/' }],
    ['Webmaster', { name: 'TBD', role: 'Webmaster', linkedIn: 'https://www.linkedin.com' }],
    ['Webmaster_2', { name: 'Tariq Achor Zyad', role: 'Webmaster', linkedIn: 'https://www.linkedin.com/in/tachorzy' }],
])
