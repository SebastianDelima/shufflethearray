var shuffle = function(nums, n) {
    
    // let arr =[]
    // for(let i=0;i < n; i++){
    //     arr.push(nums[i],nums[i + n])
    // }
    // return arr

    let result =[];
    for(let i=0;i < nums.length / 2; i++){
        result.push(nums[i]);
		result.push(nums[i + n]);
    }
    return result;
};