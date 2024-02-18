const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
    button.addEventListener('click', () => {
        console.log(`Hello ${input.value}`);
    });
}