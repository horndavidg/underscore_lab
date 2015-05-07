var underscore = require("../underscore.js")

describe('Underscore Library Testing', function(){
	it('should show the average of a given array', function() {
 		expect(underscore.average([5, 5, 5])).toEqual(5)

 	})    

it('should show true if a given value is in an array', function() {
 		expect(underscore.contains([5, 5, 5, 6], 6)).toEqual(true)

 	}) 
	
it('should show the first index in a given array', function() {
 		expect(underscore.first([5, 1, 5, 5, 6, 8])).toEqual(5)

 	}) 

it('should show the last index in a given array', function() {
 		expect(underscore.last([5, 1, 5, 5, 6, 8])).toEqual(8)

 	}) 

it('should show the max value in a given array', function() {
 		expect(underscore.max([5, 1, 5, 5, 13, 6, 8])).toEqual(13)

 	}) 

it('should show the minimum value in a given array', function() {
 		expect(underscore.min([5, 1, 5, 5, 13, 6, 8])).toEqual(1)

 	})

it('should show the index at which a given value can be found in an array', function() {
 		expect(underscore.indexOf([5, 1, 5, 5, 13, 6, 8], 13)).toEqual(4)

 	})


   });