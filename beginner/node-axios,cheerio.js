const axios = require('axios');
const cheerio = require('cheerio'); // jquery 처럼 파싱을 하도록 도와줌

const getHTML = async () => {
	try {
		return await axios.get(`https://www.naver.com`); // encoding uri 해줘야 함
	} catch (err) {
		console.log('err:', err);
	}
};

const accessElement = async (keyword) => {
	const html = await getHTML(keyword);
	const $ = cheerio.load(html.data);

	let sources = [];
	const $script = $('script').each((i, node) => srcList2.push(node.attribs.src));

	// console.log(srcList2, srcList2.length);
};

const main = async () => {
	await accessElement().then((res) => {
		// let data = [];
		// res.forEach((v, i) => {
		// 	data.push([ v.title, v.href, v.subtext ]);
		// 	console.log('결과 %i.\n[제목]: %s\n[주소]: %s\n[미리보기]: %s \n', i + 1, v.title, v.href, v.subtext);
		// });

		// if (!data || data.length == 0) {
		// 	console.log('검색 결과가 없습니다~~');
		// }
		process.exit();
	});
};

main('a');
module.exports = main;
