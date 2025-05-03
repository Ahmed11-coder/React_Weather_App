export function SearchBtn(e: React.MouseEvent<HTMLDivElement>):void {
    const target = e.target as HTMLElement;
    if (target.tagName != "INPUT") {
        const input = e.currentTarget.children[0] as HTMLInputElement;
        const states = e.currentTarget.classList.toggle("searching");
        input.value = "";
        if (states) input.focus();
    }
}