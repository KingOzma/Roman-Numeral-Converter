function convertToRoman(num) {
	//Create an empty string
	var result = "";
	//Create an array of possible roman numerals up to 1000
	var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	//Create an array of possible values
	var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	//Iterate for a length of our decimal array
	for(var i=0; i<decimal.length; i++){
	//While original number is loarger than our inputted decimal array
		while(num>=decimal[i]){
	//add its equivalent roman numeral to our original empty string
			result = result + roman[i];
	//Substract the value from original number to end while loop
			num = num - decimal[i];
		}
	}
 return result;
}

convertToRoman(25);