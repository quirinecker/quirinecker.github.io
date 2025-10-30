export function getApiUrls(useLocal: boolean, project: string, origin: string) {
	if (useLocal) {
		return {
			github: `${origin}/local/repo.json`,
			languages: `${origin}/local/language.json`,
			colors: `https://raw.githubusercontent.com/ozh/github-colors/master/colors.json`
		};
	} else {
		return {
			github: `https://api.github.com/repos/${project}`,
			languages: `https://api.github.com/repos/${project}/languages`,
			colors: `https://raw.githubusercontent.com/ozh/github-colors/master/colors.json`
		};
	}

}
