const byteSize = (str) => {
  let count = 0;
	for(let i=0; i<str.length; i++){
	    count++;
	}
	console.log(count);
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
