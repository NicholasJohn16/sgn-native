import { Text } from "react-native";
import { Heading } from "@/components/ui/heading";
import { Truncate } from "@/components/helpers/truncate";
import { Name } from "@/components/ui/actor/Name";
import { MediumLink } from '@/components/ui/medium/link';

export function Title({story}) {
    return <><Name actor={story.subject}/> published a new <MediumLink media={story.object}>Article</MediumLink></>
}

// TODO: add cover image to body if there is one.
export function Body({story}) {
    return (
        <>
            <Heading size="2xl" bold={true}><MediumLink media={story.object}>{story.object.name}</MediumLink></Heading>

            <Text>
                <Truncate length={200} readMore={true}>
                    {story.object.body}
                </Truncate>
            </Text>
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