/*
* 나만의 BASE64 인코더 디코더 만들기
*/
const char64 = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/');
const idx64 = [ ...new Array(64).keys() ];

// BASE64 => str
function Decoder(BASE64) {
	let result;
	let asciiNum = 65;
	console.log(String.fromCharCode(asciiNum)); //ascii -> str : A

	return result;
}


// str => BASE64
// 패딩 미포함
function Encoder(str) {
	const StoA = (str) => {
		let aCodeArr = Array.from(str).map((v, i) => str.charCodeAt(i));
		return aCodeArr;
	};

	// binary 반환
	const AtoB = (asc) => {
		let hexCodeArr = asc.map((code, i) => code.toString(16));

		let binaryCodeArr = hexCodeArr.map((hexNum, i) => parseInt(hexNum, 16).toString(2).padStart(8, 0));
		let binaryStr = binaryCodeArr.join('');
		let long = binaryStr.length;
		// let padding = 24 * (parseInt(long / 24) + 1) - long;

		let paddedBinary = binaryStr.padEnd(24 * (parseInt(long / 24) + 1), '0');
		let Base64 = '';
		// let Padding = '';
		for (let i = 0; i < paddedBinary.length; i++) {
			if ((i + 1) % 6 == 0) {
				let sixStr = paddedBinary.slice(i - 5, i + 1);
				let Base64Idx = parseInt(sixStr, 2).toString(10);
				if (Base64Idx == 0) {
					Base64 += '=';
				} else {
					Base64 += char64[Base64Idx];
				}
			}
		}
		return Base64;
	};
	return AtoB(StoA(str));
}
