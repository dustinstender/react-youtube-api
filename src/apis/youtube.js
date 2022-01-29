import axios from 'axios';

const KEY = 'AIzaSyDfoVI_FaqHgMpugMgBhsrgRvDNqq5nfZM';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
