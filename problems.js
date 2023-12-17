function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
   let  myarr = [];
    for(i=1; i< arr.length; i=i+2)
  {

       myarr.push(arr[i]);

  }
  return myarr;


  }

  function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here

    let  myarr = [];
      for(i=1; i< arr.length; i=i+2)
    {

         myarr.push(arr[i]);

    }
    let newarray = [];
    let j = 0;

    for(i=myarr.length-1;  i>=0; i--)
    {
      newarray[j] = myarr[i]
      j++;
    }
  return newarray;
  }

  function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
      // Your code here
      let  myarr = [];
    for(i=1; i< arr.length; i=i*2)
  {

       myarr.push(arr[i]);

  }
  return myarr;


    }
    function nthPower(arr ,n) {
        // Return an array containing all indices that are powers of 2
          // Your code here
          let  myarr = [];
        for(i=1; i< arr.length; i=i*n)
      {

           myarr.push(arr[i]);

      }
      return myarr;


        }



  function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let lengthh=0;
    let length = arr.length;
    let myarr = [];
    if(length % 2 != 0)
    lengthh = (length/2)
    else
     lengthh =length/2;

     for(i=0 ; i<lengthh; i++)
     {
      myarr.push(arr[i])
     }
     console.log(lengthh);

  return myarr;

  }

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let lengthh=0;
  let length = arr.length;
  let myarr = [];
  if(length % 2 != 0)
  lengthh = (length/2)+0.5
  else
   lengthh =length/2;

   for(i=lengthh ; i<length; i++)
   {
    myarr.push(arr[i])
   }
   console.log(lengthh);

return myarr;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
