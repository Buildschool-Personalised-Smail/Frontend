const parseFrom2 = (from: string): string => {
    const username = from?.split("<") || [];
    return (username[1]?.split(">")[0])
}
export default parseFrom2