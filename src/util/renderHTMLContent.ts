import Render from '@/pages/Detailpage/Render';
import { parse } from 'node-html-parser';
import { includes } from 'lodash';

export const renderHTMLContent = (post: any) => {
    const root = parse(post.html.replace(/(\r\n|\n|\r)/gm, ''));
    console.log('root', root);
    const components: any[] = [];
    let id: number = 0;
    root.childNodes.forEach((node: any) => {
        if (node.tagName === 'P') {
            if (node.childNodes[0]?.tagName === 'A') {
                // single link for entire paragraph, ex:<p><a>link</a></p>
                components.push(
                    Render.link(
                        id,
                        node.childNodes[0].childNodes[0].text,
                        node.childNodes[0].attrs.href
                    )
                );
            } else {
                // inline link inside outher text
                components.push(Render.paragraph(id, node.outerHTML));
            }
        } else if (node.tagName === 'HR') {
            components.push(Render.divider(id));
        } else if (node.tagName === 'OL') {
            components.push(Render.ol(id, node));
        } else if (node.tagName === 'UL') {
            components.push(Render.ul(id, node));
        } else if (node.tagName === 'DIV') {
            let component: JSX.Element;
            if (includes(node.attrs.class, 'kg-file-card')) {
                const titleFile = node.childNodes[1].text.trim();
                component = Render.file(
                    id,
                    titleFile,
                    node.childNodes[1].attrs.href
                );
            } else if (includes(node.attrs.class, 'kg-audio-card')) {
                component = Render.audio(id, node);
            } else if (includes(node.attrs.class, 'kg-product-card')) {
                component = Render.product(id, node);
            } else {
                component = Render.header(id, node);
            }
            components.push(component);
        } else if (node.tagName === 'FIGURE') {
            let component: JSX.Element;
            if (includes(node.attrs.class, 'kg-image-card')) {
                component = Render.image(id, node.childNodes[0].attrs.src);
            } else if (includes(node.attrs.class, 'kg-video-card')) {
                component = Render.video(
                    id,
                    node.childNodes[0].childNodes[0].attrs.style
                        .match(/(https?:\/\/[^\s]+)/g)[0]
                        .slice(0, -2),
                    node.childNodes[0].childNodes[0].attrs.src
                );
            } else if (includes(node.attrs.class, 'kg-embed-card')) {
                let attr;
                let aspectRatio = false;
                if (node.childNodes[0].attrs.src) {
                    attr = {
                        allow: node.childNodes[0].attrs.allow,
                        allowFullScreen:
                            node.childNodes[0].attrs.allowfullscreen,
                        frameBorder: node.childNodes[0].attrs.frameborder,
                        src: node.childNodes[0].attrs.src,
                        title: node.childNodes[0].attrs.tile,
                        height: node.childNodes[0].attrs.height,
                        width: node.childNodes[0].attrs.width,
                    };
                    if (
                        includes(node.childNodes[0].rawAttrs, 'www.youtube.com')
                    ) {
                        attr.width = '100%';
                        delete attr?.height;
                        aspectRatio = true;
                    }
                }
                if (node.childNodes[0].attrs.class === 'twitter-tweet') {
                    // twitter
                    const src = node.childNodes[0].childNodes[2].rawAttrs;
                    const idExp = /status\/(\d+)/g;
                    const regexExp = new RegExp(idExp);
                    const match = regexExp.exec(src);
                    const tweetId = match![1];
                    component = Render.twitter(id, tweetId);
                } else {
                    // youtube & spotify
                    component = Render.iframe(id, attr, aspectRatio);
                }
            } else if (includes(node.attrs.class, 'kg-gallery-card')) {
                component = Render.gallery(id, node);
            }
            components.push(component!);
        } else if (node.tagName === 'BLOCKQUOTE') {
            components.push(Render.blockquote(id, node.text));
        } else if (node.tagName === 'H2') {
            components.push(Render.h2(id, node.text));
        } else if (node.tagName === 'H3') {
            components.push(Render.h3(id, node.text));
        }
        id += 1;
    });
    return components;
};
