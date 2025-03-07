/* eslint-disable jest/valid-title */
import { sum } from "../sum";


test("sum fun should calculate sum of two Numbers " , () => {

  const result =   sum(3,4 );


  //Assertion 
  expect(result).toBe(7)

})