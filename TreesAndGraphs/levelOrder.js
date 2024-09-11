function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var levelOrder = function(root) {
    const levels = [];
    if (root === null) return levels;
    const queue = [root];
    let level = 0;

    while (queue.length) {
        // number of elements in current level
        let levelLength = queue.length;
        //  start the current level
        levels.push([]);

        for (let counter = 0; counter < levelLength; counter++) {
            let root = queue.shift();
            //  fulfill the current level
            levels[level].push(root.val);

            //  add child nodes of the current level
            //  in the queue for the next level

            if (root.left !== null) queue.push(root.left);
            if (root.right !== null) queue.push(root.right);
        }
        level++;
    }
    return levels;
};

function main() {
    const t12 = new TreeNode(1);
    const t13 = new TreeNode(1);
    const t11 = new TreeNode(2, t12, t13);

    console.log(levelOrder(t11));
}

main();