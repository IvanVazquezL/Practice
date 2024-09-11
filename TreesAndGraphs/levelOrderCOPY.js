function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function levelOrder(root) {
    const levels = [];
    if (root === null) return levels;
    const queue = [root];
    let level = 0;

    while (queue.length) {
        const levelLength = queue.length;
        levels.push([]);

        for (let counter = 0; counter < levelLength; counter++) {
            const root = queue.shift();

            levels[level].push(root.val);

            if (root.left) {
                queue.push(root.left);
            }

            if (root.right) {
                queue.push(root.right);
            }
        }
        level++;
    }

    return levels;
}

function main() {
    const t12 = new TreeNode(1);
    const t13 = new TreeNode(1);
    const t11 = new TreeNode(2, t12, t13);

    console.log(levelOrder(t11));
}

main();