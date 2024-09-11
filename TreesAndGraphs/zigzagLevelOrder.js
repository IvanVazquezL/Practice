function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function zigzagLevelOrder(root) {
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
        if (level % 2 !== 0) levels[level].reverse();
        level++;
    }

    return levels;
}

function main() {
    const t7 = new TreeNode(7);       // Right child of 20
    const t15 = new TreeNode(15);     // Left child of 20
    const t20 = new TreeNode(20, t15, t7);  // Right child of root (3)
    const t9 = new TreeNode(9);       // Left child of root (3)
    
    // Create root node with children
    const root = new TreeNode(3, t9, t20);

    console.log(zigzagLevelOrder(root));
}

main();