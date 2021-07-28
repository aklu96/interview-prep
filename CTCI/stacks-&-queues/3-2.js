/*
A stack with a "min" method to return the min value in O(1) time

keep track of the min as every item is added to the stack

however, when minVal is removed, we would need to find the new min, so it's amortized O(1) with O(N) in this case.

Only the top node can ever be removed! So, every node should know the minimum of the nodes below it (substack). This way the min is automatically updated when removed. O(1) time.

To increase space efficiency, we can actually have a second stack for the mins! Instead of having every node hold data.

Didn't do great on thinking through this one. Truly think through the logic of these different algos and DS types so you can understand which scenarios they would be useful in.