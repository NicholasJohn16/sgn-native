import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

export function Humanize({children, style='round-minute'}) {
    const timeAgo = new TimeAgo('en-US');
    const date = Date.parse(children + ' UTC');
    const humanize = timeAgo.format(date, style);

    return (
        <>{humanize}</>
    )
}