import truncate from "lodash/truncate";

export const excerpt = (string: string) => {
    return truncate(string, {
        length: 400,
        separator: /,?\.* +/,
    });
}
