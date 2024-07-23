//Ejecuta tu preuba aqui

import { mergeTwoLists, ListNode } from "../src/02-merge-two-sorted-lists";

describe("Exercise 2 from Linked Lists", () => {
  // const l1 = new ListNode(1, new ListNode(2, new ListNode(4, new ListNode(6))));
  // const l2 = new ListNode(2, new ListNode(3, new ListNode(5)));

  const l1 = new ListNode(1);
  l1.next = new ListNode(2);
  l1.next.next = new ListNode(4);
  l1.next.next.next = new ListNode(6);

  const l2 = new ListNode(2);
  l2.next = new ListNode(3);
  l2.next.next = new ListNode(5);

  it("should return the expected result", () => {
    expect(mergeTwoLists(l1, l2)).toStrictEqual(
      new ListNode(
        1,
        new ListNode(
          2,
          new ListNode(
            2,
            new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
          )
        )
      )
    );
  });
});
