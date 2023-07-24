// unsure if using a map is better in this case. Map<string, { role: string, name: string, linkedIn: string }>

// list of officers will be used to populate the officer cards. Update information here at a later date. Format is as follows:
// [role, name, linkedIn]

export const officers = new Map<string, { name: string, linkedIn: string }>([
    ['President', { name: 'Zeel Engineer', linkedIn: 'https://www.linkedin.com/in/zeel-engineer-536265216/' }],
    ['Vice President', { name: 'Denzel Wilson', linkedIn: 'https://www.linkedin.com/in/denzel-wilson-2422481a2/' }],
    ['Secretary', { name: 'Clark Horak', linkedIn: 'https://www.linkedin.com/in/clark-horak-77b158228/' }],
    ['Treasurer', { name: 'Mai Hoang', linkedIn: 'https://www.linkedin.com/in/mai-hoang-760a53255/' }],
    ['Marketing', { name: 'Briana Marcos-Elkamand', linkedIn: 'https://www.linkedin.com/in/briana-marcos-elkamand-521477234/' }],
    ['Relations', { name: 'Ashish Job', linkedIn: 'https://www.linkedin.com/in/ashish-job/' }],
    ['Events', { name: 'Jonathan Gaucin', linkedIn: 'https://www.linkedin.com/in/jonathangaucin/' }],
    ['Technical Officer', { name: 'Sagun Kayastha', linkedIn: 'https://www.linkedin.com/in/sagun-kayastha-19516683/' }],
    ['Webmaster', { name: 'Baqir Salim', linkedIn: 'https://www.linkedin.com/in/baqir-salim-887094215/' }],
])