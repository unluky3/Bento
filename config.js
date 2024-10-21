// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

function transformSpotifyUrl(url) {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname.split('/'); // Split the pathname into parts
    const selector = pathname[1]; // The part after the first '/'
    const id = pathname[2]; // The part after the second '/'

    return `spotify:${selector}:${id}`;
}

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

  
	// General
	name: 'lev',
	openInNewTab: false,
	twelveHourFormat: false,
  title: 'HomePage',
  openSpotifyInApp: false,

	// Theme
	theme: 'latte-mocha',
	imageBackground: false,
  imageUrl: './assets/background.jpg', // Set custom background image URL. If the page is served insecurely, you may have issues loading images from pages over https.

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

  	// Autochange automatically based on location (sunrise/sunset). Openweathermap API key required.
  	changeThemeByLocation: false,

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0/',
		},
		{
			id: '3',
			name: 'NixPkgs',
			icon: 'snowflake',
			link: 'https://search.nixos.org/',
		},
		{
			id: '4',
			name: 'ChatGpt',
			icon: 'brain',
			link: 'https://chatgpt.com/',
		},
		{
			id: '5',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com',
		},
		{
			id: '6',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Metaroom',
					// link: 'spotify:artist:72igsHCazmE9rlVm0c4I9d',
					link: 'https://open.spotify.com/artist/72igsHCazmE9rlVm0c4I9d',
				},
				{
					name: 'HeavenPierceHer',
					// link: 'spotify:artist:5fKs3wJDbfdrr7qLQu0JpF',
					link: 'https://open.spotify.com/artist/5fKs3wJDbfdrr7qLQu0JpF',
				},
				{
					name: 'HalfAsleepGames',
					// link: 'spotify:artist:5kXJshJjcsTBy1ZiDOQBWE',
					link: 'https://open.spotify.com/artist/5kXJshJjcsTBy1ZiDOQBWE',
				},
				{
					name: 'Femtanyl',
					// link: 'spotify:artist:53e9n1LucuH3guikmtv180',
					link: 'https://open.spotify.com/artist/53e9n1LucuH3guikmtv180',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'NixOS',
					link: 'https://www.reddit.com/r/nixos/',
				},
				{
					name: 'Ultrakill',
					link: 'https://www.reddit.com/r/Ultrakill/',
				},
				{
					name: 'NeoVim',
					link: 'https://www.reddit.com/r/neovim/',
				},
				{
					name: 'RainWorld',
					link: 'https://www.reddit.com/r/rainworld/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};

// Transform Spotify URLs if necessary
CONFIG.firstlistsContainer[0].links.forEach((item) => {
    if (CONFIG.openSpotifyInApp && (item.link.startsWith('https://open.spotify.com') || item.link.startsWith('https://play.spotify.com'))) {
        item.link = transformSpotifyUrl(item.link);
    }
});
