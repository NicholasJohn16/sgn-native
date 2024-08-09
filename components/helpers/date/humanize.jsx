import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

export function Humanize({children, style='round-minute'}) {
    if(!children) return <></>;

    const timeAgo = new TimeAgo('en-US');
    const date = new Date(children + "Z");

    const humanize = timeAgo.format(date.getTime(), style);

    return (
        <>{humanize}</>
    )
}