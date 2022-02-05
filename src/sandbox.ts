let greet = () => {
	console.log("hello world!");
};

let fun1: Function;

fun1 = () => {
	console.log("I am a function");
};

let add = (x: number, y: number) => {
	console.log(x + y);
};

let fun2 = (x: number, y: number, z: number | string = 10): void => {
	console.log(`${x} ${y} ${z}`);
}; // when not returing anything we can use void

const minus = (x: number, y: number): number => {
	return x - y;
};
