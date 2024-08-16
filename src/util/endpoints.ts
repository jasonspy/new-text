
/** this would wrap all the api endpoints and base urls */
export const baseUrl = process.env.VITE_APP_BASE_URL || 'http://159.203.142.44:4080/api/v1';

export const url = {
  // all
  login: "/authentication/login",
  register: "/authentication/register",
  logout: "/auth/logout",
  
  // verification
  createIndividual: "/individual",
  createCorporate: "/corporate",
  updateIndividual: (payload: any) =>  `/individual/${payload.route}/${payload.id}`,
  updateCorporate: (payload: any) =>  `/corporate/${payload.route}/${payload.id}`,
  uploadDocument: (id: string) =>  `/individual/documents/${id}`,


};
