export function replaceQuotes(list) {
    // Replace quotation marks with escape character
    list = list.replaceAll("\"", "&quot;")
    // Replace single quotes with double quotes
    list = list.replaceAll("'","\"");

    return list;
}