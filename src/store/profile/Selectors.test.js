import GetProfile from './Selectors';

describe('Name Selectors', () => {
 describe('GetProfile', () => {
   it('should return name', () => {
     const mockParameters = {
       profile: {
         name: "Надежда"
       },
     };
     const selected = GetProfile.resultFunc(mockParameters.profile);
     expect(type(selected)).toEqual('Надежда');
   });
 });
});