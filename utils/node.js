export function getNamespace(node) {
    if(!Object.hasOwn(node, 'objectType')) return false;

    const parts = node.objectType.split('.');

    return { app: parts[1], entity: parts[2] };
}