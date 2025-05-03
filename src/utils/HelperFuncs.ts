export const getYesterday = () => {
    const curDate = new Date();
    curDate.setDate(curDate.getDate() - 1);
    const Yesterday = curDate.toLocaleDateString().split("/").map((el)=> el.length === 1 ? "0"+el : el);
    return (Yesterday.join("-"));
}