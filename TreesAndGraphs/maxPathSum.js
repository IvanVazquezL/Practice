function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function maxPathSum(root) {
    let maxPath = { value: -Infinity};
    gainFromSubtree(root, maxPath);
    return maxPath.value;
}

// post order traversal of subtree rooted at node
function gainFromSubtree(root, maxPath) {
    if (!root) return 0;

    const gainFromLeft = Math.max(gainFromSubtree(root.left, maxPath), 0);
    const gainFromRight = Math.max(gainFromSubtree(root.right, maxPath),0);

    maxPath.value = Math.max(maxPath.value, gainFromLeft + gainFromRight + root.val);

    return Math.max(gainFromLeft + root.val, gainFromRight + root.val);
}

function main() {
    const t20 = new TreeNode(2); 
    const t9 = new TreeNode(3);  
    
    // Create root node with children
    const root = new TreeNode(1, t9, t20);

    console.log(maxPathSum(root));
}

main();