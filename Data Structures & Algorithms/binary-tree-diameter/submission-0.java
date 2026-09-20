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
    int diameter =0;
    public int diameterOfBinaryTree(TreeNode root) {
        height(root);
        return diameter;
    }
    public int height(TreeNode node){
        if(node== null) return 0;
        int left = height(node.left);
        int right = height(node.right);
        //left + right gives the number of edges (not nodes) on the path through that node,
        diameter = Math.max(diameter, left + right);
        //passes height upward so the parent can use it
        return 1 + Math.max(left, right);
    }
}
