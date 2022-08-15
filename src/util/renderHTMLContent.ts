import Render from '@/pages/Detailpage/Render';
import { REGEX_PARSE } from '@/types/constant';
import { parse } from 'parse5';
import { ElementExtended } from '@/types/interface';

export const renderHTMLContent = (post: any) => {
    const root = parse(post.html.replace(REGEX_PARSE, ''))
        .childNodes[0] as ElementExtended;
    const { childNodes } = root.childNodes[1];
    // console.log(childNodes);

    const components: JSX.Element[] = [];
    childNodes.forEach((node: ElementExtended, id: number) => {
        type ObjectKey = keyof typeof Render;
        const key = node.tagName as ObjectKey;
        const funcRender = Render[key];
        if (!funcRender) return;

        const component = funcRender(id, node);
        components.push(component);
    });
    return components;
};
