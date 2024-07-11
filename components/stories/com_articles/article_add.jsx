import { Link } from "expo-router"
import { Heading } from "@/components/ui/heading";
import { Truncate } from "../../helpers/truncate";
import { Name } from "../../ui/actor/Name";

export function Title({story}) {
    console.log(story, 'story');
    return <><Name actor={story.subject}/> published a new <Link style={{fontSize: 'inherit'}} href={`/articles/${story.object.id}-${story.object.alias}`}>Article</Link></>
}

// TODO: add cover image to body if there is one.
export function Body({story}) {
    return (
        <>
            <Heading size="2xl" bold={true}><Link style={{fontSize:'inherit'}} href={`/articles/${story.object.id}-${story.object.alias}`}>{story.object.name}</Link></Heading>

            <Truncate length={200} readMore={true}>{story.object.body}</Truncate>
        </>
    )
}

/*
    <data name="title">
        <?= sprintf(@text('COM-ARTICLES-STORY-ARTICLE-ADD'), @name($subject), @route($object->getURL())) ?>
    </data>

    <data name="body">
        <? if ($object->coverSet()): ?>
        <div class="entity-portrait-medium">
            <?= @cover($object, 'medium') ?>
        </div>
        <? endif ?>
        
        <h4 class="entity-title">
            <?= @link($object)?>
        </h4>
        
        <div class="entity-body">
            <? if ($object->excerpt) : ?>
            <?= @helper('text.truncate', @escape($object->excerpt), array('length' => 200)); ?>
            <? else : ?>
            <? $body = @content($object->body, array('exclude' => 'gist')); ?>
            <?= @helper('text.truncate', $body, array('length' => 200, 'read_more' => true, 'consider_html' => true)); ?>
            <? endif; ?>
        </div>
    </data>
    <? if ($type === 'notification') :?>
    <? $commands->insert('view-post', array('label' => @text('COM-ARTICLES-ARTICLE-VIEW')))->href($object->getURL())?>
    <? endif;?>
*/