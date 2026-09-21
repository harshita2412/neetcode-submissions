/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    //isSubtree needs to:
        // Check sameTree(root, subRoot) at the current node
        // If not, recursively try isSubtree(root.left, subRoot) and isSubtree(root.right, subRoot)
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if(root==null) return false;
        if(sameTree(root, subRoot)) return true;
        return isSubtree(root.right, subRoot)  || isSubtree(root.left, subRoot);
    }
    private boolean sameTree(TreeNode node, TreeNode subNode){
        if(node==null && subNode==null) return true;
        if(node==null || subNode==null) return false;
        Boolean isLeftSame = sameTree(node.left, subNode.left);
        Boolean isRightSame = sameTree(node.right, subNode.right);
        return node.val == subNode.val && isLeftSame && isRightSame;
    }
}
