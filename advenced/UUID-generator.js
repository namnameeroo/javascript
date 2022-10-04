function generateUUID() {
	// 16진수, 8-4-4-4-12
	const rule = [ 8, 4, 4, 4, 12 ];
	const UUID = rule.map((nums) => Math.random().toString(16).slice(2, 2 + nums)).join('-');

	return UUID;
}

// 호출 예시
// const Session = (data) => {
//     SessionData.sessionId = generateUUID();
// };

exports.generateUUID = generateUUID;
