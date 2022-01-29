import axios from 'axios';

const KEY = 'AIzaSyDfoVI_FaqHgMpugMgBhsrgRvDNqq5nfZM';

export default axios.create({
	baseURL: 'https://apis.google.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});
