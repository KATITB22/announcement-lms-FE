import Render from '@/pages/Detailpage/Render';
import { parse } from 'node-html-parser';
import { NodeExtended } from '@/types/types';

export const renderHTMLContent = (post: any) => {
    const root = parse(post.html.replace(/(\r\n|\n|\r)/gm, ''));
    console.log('root', root);

    const components: JSX.Element[] = [];
    const childNodes = root.childNodes as unknown as NodeExtended[];
    childNodes.forEach((node: NodeExtended, id: number) => {
        type ObjectKey = keyof typeof Render;
        const key = node.tagName as ObjectKey;
        const funcRender = Render[key];
        if (!funcRender) return;

        const component = funcRender(id, node);
        components.push(component);
    });
    return components;
};
