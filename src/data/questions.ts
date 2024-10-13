export const questions = [
    {
      id: 1,
      title: "Two Integer Sum",
      difficulty: "Easy",
      description: "Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j. \n\n You may assume that every input has exactly one pair of indices i and j that satisfy the condition. \n\n Return the answer with the smaller index first.",
      example : {
        input: "nums = [3,4,5,6], target = 7",
        output: "[0,1]"
      }
    },
    {
      id: 2,
      title: "Binary Search",
      difficulty: "Easy",
      description: "You are given an array of distinct integers nums, sorted in ascending order, and an integer target. \n\n Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1. \n\n Your solution must run in O(log n) time.",
      example : {
        input: "nums = [-1,0,2,4,6,8], target = 4",
        output: "3"
      }
    },
    {
      id: 3,
      title: "Minimum Stack",
      difficulty: "Medium",
      description: "Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order. \n\n An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.",
      example : {
        input: "strs = [act, pots, tops, cat, stop, hat]" ,
        output: "[[hat],[act, cat],[stop, pots, tops]]"
      }
    },
  ];