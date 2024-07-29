import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

export function Humanize({children}) {
    const timeAgo = new TimeAgo('en-US');
    const date = Date.parse(children);
    const humanize = timeAgo.format(date);

    return (
        <>{humanize}</>
    )
}