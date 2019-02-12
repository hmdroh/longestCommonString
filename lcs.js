//A function for determining the longest common substring of two strings 

var lcs = function(string1, string2) {
	var comparsions = []; //2D array for the char comparsions ...
	var maxSubStrLength = 0;
	var lastMaxSubStrIndex = -1, i, j, char1, char2, startIndex;

	for (i = 0; i < string1.length; ++i) {
		comparsions[i] = new Array();

		for (j = 0; j < string2.length; ++j) {
			char1 = string1.charAt(i);
			char2 = string2.charAt(j);

			if (char1 === char2) {
				if (i > 0 && j > 0) {
					comparsions[i][j] = comparsions[i - 1][j - 1] + 1;
				} else {
					comparsions[i][j] = 1;
				}
			} else {
				comparsions[i][j] = 0;
			}

			if (comparsions[i][j] > maxSubStrLength) {
				maxSubStrLength = comparsions[i][j];
				lastMaxSubStrIndex = i;
			}
		}
	}

	if (maxSubStrLength > 0) {
		startIndex = lastMaxSubStrIndex - maxSubStrLength + 1;

		return string1.substr(startIndex, maxSubStrLength);
	}

	return null;
}

// Test code 
console.log(lcs("SQLMTutorialnjection", "SQLTutorial"));