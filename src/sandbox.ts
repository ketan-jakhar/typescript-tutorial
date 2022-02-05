type StrOrNum = string | number;

const logDetails = (uid: StrOrNum, item: string) => {
	console.log(`${item} has a uid of ${uid}`);
};

type objWithName = { name: string; uid: StrOrNum };

const greet = (user: objWithName) => {
	console.log(`${user.name} says hello!`);
};
