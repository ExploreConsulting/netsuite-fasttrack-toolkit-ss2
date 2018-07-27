export const getCurrentScript = jest.fn().mockName('getCurrentScript').mockReturnValue(
   {
      getRemainingUsage: jest.fn().mockName('getRemainingUsage')
   }
)



